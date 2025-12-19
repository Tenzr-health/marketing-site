/**
 * HubSpot API client utilities
 * Server-side only - uses HubSpot API client
 */

import { Client } from '@hubspot/api-client';

let hubspotClient: Client | null = null;

/**
 * Get or create HubSpot API client instance
 */
export function getHubSpotClient(): Client {
  if (!hubspotClient) {
    const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
    
    if (!accessToken) {
      throw new Error('HUBSPOT_ACCESS_TOKEN environment variable is not set');
    }
    
    hubspotClient = new Client({ accessToken });
  }
  
  return hubspotClient;
}

/**
 * Create or update a contact in HubSpot
 */
export async function createOrUpdateContact(data: {
  email: string;
  firstname?: string;
  lastname?: string;
  company?: string;
  phone?: string;
  [key: string]: string | undefined;
}) {
  const client = getHubSpotClient();
  
  try {
    const properties: Record<string, string> = Object.entries(data)
      .filter(([, value]) => value !== undefined && value !== '')
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value as string }), {});
    
    const response = await client.crm.contacts.basicApi.create({
      properties,
      associations: [],
    });
    
    return { success: true, data: response };
  } catch (error: unknown) {
    const hubspotError = error as { statusCode?: number; body?: { message?: string } };
    
    // If contact already exists, update it
    if (hubspotError.statusCode === 409) {
      try {
        const updateProperties: Record<string, string> = Object.entries(data)
          .filter(([, value]) => value !== undefined && value !== '')
          .reduce((acc, [key, value]) => ({ ...acc, [key]: value as string }), {});
        
        const existingContact = await client.crm.contacts.basicApi.getById(
          hubspotError.body?.message?.match(/Existing ID: (\d+)/)?.[1] || '',
          undefined
        );
        
        const updateResponse = await client.crm.contacts.basicApi.update(
          existingContact.id,
          { properties: updateProperties }
        );
        
        return { success: true, data: updateResponse };
      } catch (updateError) {
        console.error('Error updating contact:', updateError);
        throw updateError;
      }
    }
    
    console.error('Error creating contact:', error);
    throw error;
  }
}
