'use client';

import Script from 'next/script';

interface CloudflareAnalyticsProps {
  token: string;
}

/**
 * Cloudflare Web Analytics component
 * Lightweight analytics for visitor tracking
 */
export default function CloudflareAnalytics({ token }: CloudflareAnalyticsProps) {
  return (
    <Script
      id="cloudflare-analytics"
      strategy="afterInteractive"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
