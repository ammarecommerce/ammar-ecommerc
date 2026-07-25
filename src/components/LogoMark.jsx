import React from "react";

/* ------------------------------------------------------------------ */
/*  LOGO MARK (recreated in SVG so the file has no external image     */
/*  dependency — swap for your hosted logo file any time)             */
/* ------------------------------------------------------------------ */
const LogoMark = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 8 L54 8 L80 62 L64 62 Z" fill="#17181C"/>
    <path d="M30 8 L46 8 L18 92 L2 92 L2 78 Z" fill="var(--orange)"/>
    <path d="M46 8 L62 8 L84 54 L60 54 L60 40 L52 40 Z" fill="var(--orange)"/>
    <path d="M34 40 L50 40 L74 88 L20 88 L20 74 L46 74 Z" fill="var(--navy)"/>
  </svg>
);

export default LogoMark;
