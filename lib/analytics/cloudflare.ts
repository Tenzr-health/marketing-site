/**
 * Cloudflare Web Analytics integration
 * Lightweight analytics for visitor tracking
 */

/**
 * Initialize Cloudflare Web Analytics
 * Call this in your root layout or _app
 */
export function initCloudflareAnalytics(token: string) {
  if (typeof window === 'undefined') return;
  
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon', JSON.stringify({ token }));
  
  document.head.appendChild(script);
}

/**
 * Track custom event (requires Cloudflare Web Analytics)
 */
export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  
  // Cloudflare Analytics automatically tracks page views
  // For custom events, you can use their API if available
  // or integrate with their dashboard
  console.log('Track event:', eventName, properties);
}
