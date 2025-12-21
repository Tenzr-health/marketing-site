/**
 * HubSpot form submission utilities
 * Client-side form submission using HubSpot Forms API
 */

import type { HubSpotFormSubmission, HubSpotFormResponse } from '@/types/hubspot';

/**
 * Get HubSpot user token from cookie
 */
function getHubSpotUserToken(): string | null {
  if (typeof document === 'undefined') return null;
  
  const match = document.cookie.match(/hubspotutk=([^;]+)/);
  return match ? match[1] : null;
}

/**
 * Submit form data to HubSpot Forms API
 * This is a client-side submission that works without server-side API
 */
export async function submitHubSpotForm(
  portalId: string,
  formId: string,
  fields: Record<string, string>
): Promise<HubSpotFormResponse> {
  const formData: HubSpotFormSubmission = {
    fields: Object.entries(fields).map(([name, value]) => ({
      name,
      value,
    })),
    context: {
      pageUri: typeof window !== 'undefined' ? window.location.href : '',
      pageName: typeof document !== 'undefined' ? document.title : '',
      hutk: getHubSpotUserToken() || undefined,
    },
  };

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to submit form');
  }

  return response.json();
}

/**
 * Submit contact form to HubSpot
 */
export async function submitContactForm(data: {
  firstname: string;
  lastname: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}) {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID;

  if (!portalId || !formId) {
    console.warn('HubSpot configuration is missing. Form submission will not work.');
    return;
  }

  return submitHubSpotForm(portalId, formId, data as Record<string, string>);
}

/**
 * Submit newsletter signup to HubSpot
 */
export async function submitNewsletterForm(data: { email: string }) {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID;

  if (!portalId || !formId) {
    console.warn('HubSpot configuration is missing. Newsletter submission will not work.');
    return;
  }

  return submitHubSpotForm(portalId, formId, data as Record<string, string>);
}
