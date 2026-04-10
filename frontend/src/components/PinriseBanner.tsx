'use client';
import { useEffect } from 'react';

export default function PinriseBanner() {
  useEffect(() => {
    // Load the dynamic banner script which reads the latest settings from the server.
    // This means any text/price/style changes in the dashboard apply immediately.
    const existing = document.getElementById('pinrise-banner-script');
    if (existing) return;
    const script = document.createElement('script');
    script.id = 'pinrise-banner-script';
    script.src = "https://portal.pinrise.io/api/portal/banner.js?id=ab61fbb9-9e16-4c3b-980e-72dc3e9b7437";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
