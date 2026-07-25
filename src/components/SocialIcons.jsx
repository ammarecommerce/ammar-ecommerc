import React from "react";

/* Simple custom social icons — added because newer lucide-react
   versions no longer ship brand/logo icons. */
export const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
  </svg>
);

export const TiktokIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.08V2h-3.45v13.67a2.91 2.91 0 1 1-2-2.76V9.37a6.34 6.34 0 1 0 5.45 6.3V8.26a8.16 8.16 0 0 0 4.77 1.52V6.69h-1z" />
  </svg>
);

export const YoutubeIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="6" width="20" height="12" rx="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor"/>
  </svg>
);
