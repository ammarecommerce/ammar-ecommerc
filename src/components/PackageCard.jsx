import React from "react";
import { CheckCircle2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  PACKAGE CARD (shared by LLC + LTD pages)                          */
/* ------------------------------------------------------------------ */
const PackageCard = ({ pkg, setPage }) => (
  <div
    className={`rounded-2xl p-8 flex flex-col ${
      pkg.highlighted
        ? "ae-bg-navy text-white shadow-2xl md:-translate-y-3"
        : "ae-card"
    }`}
  >
    {pkg.highlighted && (
      <div className="ae-chip mb-4 !bg-white/15 !text-white w-fit">Most Popular</div>
    )}
    <div className="font-bold text-xl mb-1">{pkg.name}</div>
    <p className={`text-sm mb-6 ${pkg.highlighted ? "text-white/70" : "ae-text-steel"}`}>{pkg.tagline}</p>
    <div className="mb-6">
      <span className="ae-display text-3xl">{pkg.price}</span>
      <span className={`text-xs ml-2 ${pkg.highlighted ? "text-white/60" : "ae-text-steel"}`}>{pkg.priceNote}</span>
    </div>
    <div className="flex-1 space-y-3 mb-8">
      {pkg.features.map((f, i) => (
        <div key={i} className="flex items-start gap-2 text-sm">
          <CheckCircle2 size={17} className={pkg.highlighted ? "text-orange-300 shrink-0 mt-0.5" : "ae-text-orange shrink-0 mt-0.5"} />
          <span>{f}</span>
        </div>
      ))}
    </div>
    <button
      onClick={() => setPage("contact")}
      className={`w-full py-3 rounded-full font-bold text-sm ${
        pkg.highlighted ? "bg-white text-[var(--navy)]" : "ae-btn-primary"
      }`}
    >
      Get Started
    </button>
  </div>
);

export default PackageCard;
