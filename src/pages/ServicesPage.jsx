import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionEyebrow, PageShell, PrimaryButton } from "../components/UI";
import { SERVICES } from "../data/constants";
import FadeIn from "../components/FadeIn";

/* ------------------------------------------------------------------ */
/*  SERVICES PAGE                                                     */
/* ------------------------------------------------------------------ */
const ServicesPage = ({ setPage }) => {
  return (
    <PageShell>
      <FadeIn direction="up" delay={0.1}>
        <SectionEyebrow>Our Services</SectionEyebrow>

        <h1 className="ae-display text-4xl mb-4 font-bold text-slate-900">
          One team, every step of your business
        </h1>

        <p className="ae-text-steel max-w-2xl mb-12 text-base">
          From learning how Amazon works to registering your company and
          running your store day to day - pick what you need, or let us handle
          all of it.
        </p>
      </FadeIn>

      {/* SERVICES GRID */}
      <FadeIn direction="up" delay={0.2}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              onClick={() => s.pageKey && setPage(s.pageKey)}
              className="ae-card rounded-xl p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-200 group hover:-translate-y-1"
            >
              <div>
                <s.icon className="ae-text-orange mb-4 group-hover:scale-110 transition-transform duration-300" size={30} />
                <div className="font-bold text-lg mb-2 text-slate-900">{s.title}</div>
                <p className="text-sm ae-text-steel leading-relaxed mb-6">{s.desc}</p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 group-hover:text-orange-700 transition-colors pt-2">
                <span>View Details & Pricing</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* BOTTOM CALL TO ACTION */}
      <FadeIn direction="up" delay={0.3}>
        <div className="mt-16 ae-bg-paper-dim rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-xl mb-1 text-slate-900">Not sure what you need?</div>
            <p className="ae-text-steel text-sm">
              Tell us your goal - we'll recommend the right service or package.
            </p>
          </div>
          <PrimaryButton onClick={() => setPage("contact")}>
            Talk to Us <ArrowRight size={16} />
          </PrimaryButton>
        </div>
      </FadeIn>
    </PageShell>
  );
};

export default ServicesPage;