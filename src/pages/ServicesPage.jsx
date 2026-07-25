import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionEyebrow, PageShell, PrimaryButton } from "../components/UI";
import { SERVICES } from "../data/constants";

/* ------------------------------------------------------------------ */
/*  SERVICES PAGE                                                      */
/* ------------------------------------------------------------------ */
const ServicesPage = ({ setPage }) => (
  <PageShell>
    <SectionEyebrow>Our Services</SectionEyebrow>
    <h1 className="ae-display text-4xl mb-4">One team, every step of your business</h1>
    <p className="ae-text-steel max-w-2xl mb-12">
      From learning how Amazon works to registering your company and
      running your store day to day - pick what you need, or let us handle
      all of it.
    </p>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {SERVICES.map((s, i) => (
        <div key={i} className="ae-card rounded-xl p-7">
          <s.icon className="ae-text-orange mb-4" size={28} />
          <div className="font-bold text-lg mb-2">{s.title}</div>
          <p className="text-sm ae-text-steel leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>

    <div className="mt-16 ae-bg-paper-dim rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <div className="font-bold text-xl mb-1">Not sure what you need?</div>
        <p className="ae-text-steel text-sm">Tell us your goal - we'll recommend the right service or package.</p>
      </div>
      <PrimaryButton onClick={() => setPage("contact")}>Talk to Us <ArrowRight size={16}/></PrimaryButton>
    </div>
  </PageShell>
);

export default ServicesPage;
