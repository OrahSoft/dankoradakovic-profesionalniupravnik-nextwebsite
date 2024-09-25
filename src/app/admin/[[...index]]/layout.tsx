'use client';
import React, { useEffect, useState } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set client-side state
  }, []);

  // Render nothing during server-side rendering
  if (!isClient) {
    return null;
  }

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        {/* Admin-specific layout components */}
        {children}
      </body>
    </html>
  );
}
