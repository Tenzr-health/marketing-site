'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface HubSpotTrackingProps {
  portalId: string;
}

/**
 * HubSpot tracking script component
 * Loads the HubSpot tracking code for visitor analytics
 */
export default function HubSpotTracking({ portalId }: HubSpotTrackingProps) {
  useEffect(() => {
    // Initialize HubSpot tracking
    if (typeof window !== 'undefined') {
      // @ts-expect-error - HubSpot tracking queue is not typed
      window._hsq = window._hsq || [];
    }
  }, []);

  return (
    <>
      <Script
        id="hs-script-loader"
        strategy="afterInteractive"
        src={`//js.hs-scripts.com/${portalId}.js`}
      />
    </>
  );
}
