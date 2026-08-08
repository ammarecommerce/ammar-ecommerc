import React from "react";
import { Award, Clock, ShieldCheck } from "lucide-react";
import { SectionEyebrow, PageShell } from "../components/UI";
import FadeIn from "../components/FadeIn";

/* ------------------------------------------------------------------ */
/*  ABOUT PAGE                                                        */
/* ------------------------------------------------------------------ */
const AboutPage = () => (
 <div className="max-w-5xl mx-auto px-6 pt-6 pb-6">
    <FadeIn direction="up" delay={0.1}>
      <div className="mb-2">
        <SectionEyebrow>About Us</SectionEyebrow>
      </div>
    </FadeIn>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Left Column: Biography & Intro */}
      <FadeIn direction="right" delay={0.2} className="md:col-span-2">
        <div>
          <h1 className="ae-display text-4xl mb-6">Muhammad Ammar Hassan</h1>
          <p className="text-lg ae-text-steel mb-4">
            Founder | CEO, Ammar E-Commerce
          </p>
          <p className="ae-text-steel leading-relaxed mb-4">
            Ammar E-Commerce was built on a simple idea: entrepreneurs
            shouldn't need a law degree or a US address to start a real,
            compliant international business. Muhammad Ammar Hassan started
            this company to guide sellers through every step of building an
            Amazon business - from company formation and tax paperwork to
            the store itself.
          </p>
          <p className="ae-text-steel leading-relaxed mb-4">
            What began as help for a handful of friends starting their Amazon
            journey has grown into a full-service team covering LLC and LTD
            formation, ITIN and tax filing, banking setup, website design,
            and hands-on Amazon store management.
          </p>
          <p className="ae-text-steel leading-relaxed">
            Every client works directly with the team. Just a clear plan for your business, and
            someone who follows through until it's done.
          </p>
        </div>
      </FadeIn>

      {/* Right Column: Feature Cards (Staggered Animation) */}
      <div className="space-y-4">
        <FadeIn direction="up" delay={0.3}>
          <div className="ae-card rounded-xl p-6">
            <Award className="ae-text-orange mb-3" size={24}/>
            <div className="font-bold mb-1">Hands-on approach</div>
            <p className="text-sm ae-text-steel">Every formation and every store is set up personally, not automated.</p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="ae-card rounded-xl p-6">
            <Clock className="ae-text-orange mb-3" size={24}/>
            <div className="font-bold mb-1">Clear timelines</div>
            <p className="text-sm ae-text-steel">You'll always know what stage your business or filing is at.</p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.5}>
          <div className="ae-card rounded-xl p-6">
            <ShieldCheck className="ae-text-orange mb-3" size={24}/>
            <div className="font-bold mb-1">Compliance first</div>
            <p className="text-sm ae-text-steel">Formation, tax and banking done correctly from day one.</p>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
);

export default AboutPage;