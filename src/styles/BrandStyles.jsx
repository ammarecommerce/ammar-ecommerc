import React from "react";

/* ------------------------------------------------------------------ */
/*  BRAND TOKENS — sampled from the Ammar E-Commerce logo             */
/* ------------------------------------------------------------------ */
const BrandStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500;600&display=swap');

    :root{
      --ink:#17181C;
      --orange:#E85C2B;
      --orange-dark:#C0461C;
      --orange-light:#FCE7DA;
      --navy:#1F3A5C;
      --navy-light:#2E5580;
      --navy-pale:#E7ECF2;
      --paper:#FBF9F5;
      --paper-dim:#F2EEE5;
      --steel:#68676B;
      --line:#E5DFD2;
    }
    .ae-root{
      background:var(--paper);
      color:var(--ink);
      font-family:'Inter',sans-serif;
      min-height:100vh;
      -webkit-font-smoothing:antialiased;
    }
    .ae-display{
      font-family:'Archivo Black',sans-serif;
      letter-spacing:-0.01em;
      line-height:1.02;
    }
    .ae-mono{ font-family:'IBM Plex Mono',monospace; }

    .ae-bg-navy{ background:var(--navy); }
    .ae-bg-orange{ background:var(--orange); }
    .ae-bg-paper-dim{ background:var(--paper-dim); }
    .ae-text-orange{ color:var(--orange); }
    .ae-text-navy{ color:var(--navy); }
    .ae-text-steel{ color:var(--steel); }
    .ae-border-line{ border-color:var(--line); }

    .ae-btn-primary{
      background:var(--orange);
      color:#fff;
      transition:transform .15s ease, background .15s ease;
    }
    .ae-btn-primary:hover{ background:var(--orange-dark); transform:translateY(-2px); }

    .ae-btn-navy{
      background:var(--navy);
      color:#fff;
      transition:transform .15s ease, background .15s ease;
    }
    .ae-btn-navy:hover{ background:var(--navy-light); transform:translateY(-2px); }

    .ae-btn-outline{
      border:2px solid var(--ink);
      color:var(--ink);
      background:transparent;
      transition:all .15s ease;
    }
    .ae-btn-outline:hover{ background:var(--ink); color:#fff; }

    .ae-tab{
      position:relative;
      font-weight:700;
      color:var(--steel);
      transition:color .15s ease;
    }
    .ae-tab:hover{ color:var(--ink); }
    .ae-tab.active{ color:var(--ink); }
    .ae-tab.active::after{
      content:"";
      position:absolute;
      left:0; right:0; bottom:-13px;
      height:3px;
      background:var(--orange);
      border-radius:2px;
    }

    .ae-card{
      background:#fff;
      border:1px solid var(--line);
      transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    }
    .ae-card:hover{
      transform:translateY(-4px);
      box-shadow:0 18px 40px rgba(23,24,28,0.08);
      border-color:var(--orange);
    }

    .ae-chip{
      display:inline-flex;
      align-items:center;
      gap:6px;
      font-family:'IBM Plex Mono',monospace;
      font-size:11px;
      letter-spacing:0.08em;
      text-transform:uppercase;
      color:var(--orange-dark);
      background:var(--orange-light);
      padding:4px 10px;
      border-radius:999px;
    }

    .ae-stamp{
      border:2px dashed var(--navy);
      border-radius:999px;
      color:var(--navy);
    }

    .ae-fade-in{ animation:aeFadeIn .5s ease both; }
    @keyframes aeFadeIn{
      from{ opacity:0; transform:translateY(10px); }
      to{ opacity:1; transform:translateY(0); }
    }

    @media (prefers-reduced-motion: reduce){
      .ae-fade-in{ animation:none; }
      .ae-card:hover, .ae-btn-primary:hover, .ae-btn-navy:hover{ transform:none; }
    }

    .ae-scrollbar::-webkit-scrollbar{ height:6px; width:6px; }
    .ae-scrollbar::-webkit-scrollbar-thumb{ background:var(--line); border-radius:4px; }
  `}</style>
);

export default BrandStyles;
