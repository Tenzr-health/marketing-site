/**
 * HubSpot form submission types
 */

export interface HubSpotFormField {
  name: string;
  value: string;
}

export interface HubSpotFormSubmission {
  fields: HubSpotFormField[];
  context?: {
    pageUri?: string;
    pageName?: string;
    hutk?: string; // HubSpot user token from cookie
  };
  legalConsentOptions?: {
    consent: {
      consentToProcess: boolean;
      text: string;
      communications?: Array<{
        value: boolean;
        subscriptionTypeId: number;
        text: string;
      }>;
    };
  };
}

export interface HubSpotFormResponse {
  inlineMessage: string;
  redirectUri?: string;
}

export interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}
