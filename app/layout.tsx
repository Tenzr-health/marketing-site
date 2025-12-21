import type { Metadata } from 'next';
import './globals.css';
import HubSpotTracking from '@/components/HubSpotTracking';
import CloudflareAnalytics from '@/components/CloudflareAnalytics';

export const metadata: Metadata = {
  title: 'Tenzr Health - Modern Recovery Tracking',
  description:
    'Tenzr Health provides advanced recovery tracking and analytics for patients and clinicians.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const cloudflareToken = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;

  return (
    <html lang="en">
      <body className="antialiased">
        {children}

        {/* Analytics Scripts */}
        {hubspotPortalId && <HubSpotTracking portalId={hubspotPortalId} />}
        {cloudflareToken && <CloudflareAnalytics token={cloudflareToken} />}
      </body>
    </html>
  );
}
