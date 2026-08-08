import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionEyebrow, PageShell } from "../components/UI";
import PackageCard from "../components/PackageCard";
import { LTD_PACKAGES } from "../data/constants";
import FadeIn from "../components/FadeIn";

/* ------------------------------------------------------------------ */
/*  LTD PAGE                                                          */
/* ------------------------------------------------------------------ */
const LTDPage = ({ setPage }) => (
  <div className="max-w-5xl mx-auto px-6 pt-6 pb-6">
    <FadeIn direction="up" delay={0.1}>
      <SectionEyebrow>UK Company Formation</SectionEyebrow>
      <h1 className="ae-display text-4xl mb-4">LTD Formation Packages</h1>
      <p className="ae-text-steel max-w-2xl mb-12">
        Register your UK Limited company with Companies House. Our packages
        cover registration, registered office and ongoing compliance support.
      </p>
    </FadeIn>

    <FadeIn direction="up" delay={0.2}>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {LTD_PACKAGES.map((pkg, i) => (
          <PackageCard key={i} pkg={pkg} setPage={setPage} />
        ))}
      </div>
    </FadeIn>

    <FadeIn direction="up" delay={0.3}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="ae-card rounded-xl p-8 hover:scale-[1.01] transition-transform">
          <div className="font-bold text-lg mb-3">What's included in every LTD package</div>
          <ul className="space-y-2 text-sm ae-text-steel">
            <li className="flex gap-2"><CheckCircle2 size={16} className="ae-text-orange shrink-0 mt-0.5"/> Companies House registration &amp; company number</li>
            <li className="flex gap-2"><CheckCircle2 size={16} className="ae-text-orange shrink-0 mt-0.5"/> Registered office address</li>
            <li className="flex gap-2"><CheckCircle2 size={16} className="ae-text-orange shrink-0 mt-0.5"/> Certificate of incorporation &amp; company documents</li>
            <li className="flex gap-2"><CheckCircle2 size={16} className="ae-text-orange shrink-0 mt-0.5"/> Guidance on director &amp; shareholder setup</li>
          </ul>
        </div>
        <div className="ae-card rounded-xl p-8 hover:scale-[1.01] transition-transform">
          <div className="font-bold text-lg mb-3">Good to know</div>
          <p className="text-sm ae-text-steel mb-3">
            Companies House charges its own registration fee separately from
            our service price, and yearly confirmation statement fees apply
            to keep your company active.
          </p>
          <p className="text-sm ae-text-steel">
            We'll confirm current government fees with you before filing, and
            let you know exactly what's due and when.
          </p>
        </div>
      </div>
    </FadeIn>
  </div>
);

export default LTDPage;