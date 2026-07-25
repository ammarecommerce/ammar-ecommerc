import React from "react";
import {
  Sparkles, ArrowRight, ShieldCheck, TrendingUp, Star, Quote, ChevronRight,
} from "lucide-react";
import { SectionEyebrow, PageShell, PrimaryButton, OutlineButton } from "../components/UI";
import FounderPhoto from "../components/FounderPhoto";
import FAQItem from "../components/FAQItem";
import { SERVICES, CASE_STUDIES, TESTIMONIALS, FAQS } from "../data/constants";

/* ------------------------------------------------------------------ */
/*  HOME PAGE                                                          */
/* ------------------------------------------------------------------ */
const HomePage = ({ setPage }) => (
  <PageShell>
    {/* HERO */}
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <SectionEyebrow><Sparkles size={12}/> Amazon &amp; Company Formation Experts</SectionEyebrow>
        <h1 className="ae-display text-4xl md:text-6xl mb-6">
          Build your <span className="ae-text-orange">Amazon business</span> and register your <span className="ae-text-navy">US or UK company</span> - the right way.
        </h1>
        <p className="text-lg ae-text-steel mb-8 max-w-xl">
          Ammar E-Commerce helps entrepreneurs launch on Amazon and set up
          fully compliant LLC or LTD companies - formation, tax, banking and
          store management, handled by one team.
        </p>
        <div className="flex flex-wrap gap-4">
          <PrimaryButton onClick={() => setPage("contact")}>
            Start Your Company <ArrowRight size={16} />
          </PrimaryButton>
          <OutlineButton onClick={() => setPage("services")}>
            View All Services
          </OutlineButton>
        </div>
        <div className="flex gap-8 mt-10">
          <div>
            <div className="ae-display text-2xl ae-text-orange">700+</div>
            <div className="text-xs ae-text-steel">Businesses formed</div>
          </div>
          <div>
            <div className="ae-display text-2xl ae-text-orange">2</div>
            <div className="text-xs ae-text-steel">Countries — US &amp; UK</div>
          </div>
          <div>
            <div className="ae-display text-2xl ae-text-orange">1:1</div>
            <div className="text-xs ae-text-steel">Dedicated support</div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="ae-card rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="ae-mono text-xs tracking-widest ae-text-steel">FORMATION CHECKLIST</span>
            <ShieldCheck className="ae-text-navy" size={20}/>
          </div>
          {[
            "Choose your state or country",
            "File formation documents",
            "Get your EIN / company number",
            "Open a business bank account",
            "Launch your Business",
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3 py-3 border-b ae-border-line last:border-0">
              <div className="ae-bg-orange text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                {i + 1}
              </div>
              <span className="text-sm">{step}</span>
            </div>
          ))}
        </div>
        <div className="ae-stamp absolute -bottom-6 -right-6 w-28 h-28 rounded-full hidden md:flex items-center justify-center text-center p-3 bg-white">
          <span className="ae-mono text-[10px] leading-tight font-semibold">DONE-FOR-YOU FORMATION</span>
        </div>
      </div>
    </section>

    {/* FOUNDER INTRO */}
    <section className="mt-10 grid md:grid-cols-2 gap-12 items-center">
      <FounderPhoto className="w-full aspect-square md:aspect-[4/5] order-2 md:order-1" />
      <div className="order-1 md:order-2">
        <SectionEyebrow>Meet the Founder</SectionEyebrow>
        <h2 className="ae-display text-3xl md:text-4xl mb-5">Hi, I'm Muhammad Ammar Hassan.</h2>
        <p className="ae-text-steel leading-relaxed mb-4">
          I started Ammar E-Commerce because I saw how many entrepreneurs
          in Pakistan wanted to sell on Amazon and build a real international
          business, but got stuck on the paperwork - which state to pick,
          how to get an EIN, how to open a bank account without a US address.
          Today, we help entrepreneurs overcome these barriers through company
          formation, Amazon courses, and other business services designed to
          help them build, grow, and scale their businesses in the international 
          market.
        </p>
        <p className="ae-text-steel leading-relaxed mb-6">
          I built this company to be the team that walks you through all of
          it personally - from your first Amazon lesson to a fully
          registered, compliant LLC or LTD and a store that actually runs.
          Every client works directly with me and my team, start to finish.
        </p>
        <div className="flex items-center gap-4">
          <div className="ae-display text-lg">Muhammad Ammar Hassan</div>
          <span className="ae-text-steel text-sm">- Founder, Ammar E-Commerce</span>
        </div>
      </div>
    </section>

    {/* SERVICES PREVIEW */}
    <section className="mt-10">
      <SectionEyebrow>What We Do</SectionEyebrow>
      <h2 className="ae-display text-3xl mb-10">Everything to launch and run your business</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {SERVICES.slice(0, 6).map((s, i) => (
          <div key={i} className="ae-card rounded-xl p-6">
            <s.icon className="ae-text-orange mb-4" size={26} />
            <div className="font-bold mb-1">{s.title}</div>
            <p className="text-sm ae-text-steel">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <OutlineButton onClick={() => setPage("services")}>
          See all 9 services <ChevronRight size={16}/>
        </OutlineButton>
      </div>
    </section>

    {/* PACKAGES TEASER */}
    <section className="mt-10 ae-bg-navy rounded-2xl p-10 md:p-14 text-white grid md:grid-cols-2 gap-10 items-center">
      <div>
        <SectionEyebrow>Company Formation</SectionEyebrow>
        <h2 className="ae-display text-3xl mb-4">LLC or LTD - packaged and priced clearly</h2>
        <p className="text-white/75 mb-6">
          Compare our US LLC and UK LTD packages, see exactly what's included,
          and pick the state that fits your business.
        </p>
        <div className="flex flex-wrap gap-4">
          <PrimaryButton onClick={() => setPage("llc")}>LLC Packages</PrimaryButton>
          <OutlineButton onClick={() => setPage("ltd")} className="!border-white !text-white hover:!bg-white hover:!text-[var(--navy)]">
            LTD Packages
          </OutlineButton>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {["Wyoming", "Delaware", "New Mexico", "Florida", "Texas", "UK"].map((s) => (
          <div key={s} className="bg-white/10 rounded-lg py-4 text-center font-bold text-sm">
            {s}
          </div>
        ))}
      </div>
    </section>

    {/* CASE STUDIES */}
    <section className="mt-10">
      <SectionEyebrow><TrendingUp size={12}/> Success Stories</SectionEyebrow>
      <h2 className="ae-display text-3xl mb-3">From paperwork to a running business</h2>
      <p className="ae-text-steel max-w-2xl mb-10">
        A few examples of how clients move from "just an idea" to a
        registered, selling business. (Sample stories shown - swap these
        for your own clients' real results.)
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {CASE_STUDIES.map((c, i) => (
          <div key={i} className="ae-card rounded-xl p-6">
            <div className="font-bold mb-4">{c.title}</div>
            <div className="mb-3">
              <div className="ae-mono text-[10px] tracking-widest ae-text-steel mb-1">BEFORE</div>
              <p className="text-sm">{c.before}</p>
            </div>
            <div className="flex justify-center my-3 ae-text-orange">
              <ArrowRight size={16} className="rotate-90"/>
            </div>
            <div>
              <div className="ae-mono text-[10px] tracking-widest ae-text-orange mb-1">AFTER</div>
              <p className="text-sm font-medium">{c.after}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="mt-10">
      <SectionEyebrow><Star size={12}/> Client Feedback</SectionEyebrow>
      <h2 className="ae-display text-3xl mb-3">What clients say</h2>
      <p className="ae-text-steel max-w-2xl mb-10">
        Sample testimonials shown below - replace with real quotes from
        your own clients before publishing.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="ae-card rounded-xl p-6 flex flex-col">
            <Quote className="ae-text-orange mb-3" size={24} />
            <p className="text-sm ae-text-steel leading-relaxed flex-1 mb-5">{t.quote}</p>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, s) => <Star key={s} size={14} className="ae-text-orange" fill="currentColor" />)}
            </div>
            <div className="font-bold text-sm">{t.name}</div>
            <div className="text-xs ae-text-steel">{t.role}</div>
          </div>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="mt-10">
      <SectionEyebrow>Common Questions</SectionEyebrow>
      <h2 className="ae-display text-3xl mb-10">Frequently asked questions</h2>
      <div className="space-y-4 max-w-3xl">
        {FAQS.map((f, i) => (
          <FAQItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  </PageShell>
);

export default HomePage;
