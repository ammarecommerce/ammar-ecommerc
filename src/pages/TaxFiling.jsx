import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  FileCheck2, 
  DollarSign, 
  MessageCircle,
  ShieldAlert,
  CalendarCheck
} from "lucide-react";
import FadeIn from "../components/FadeIn";

export default function TaxFiling({ setPage }) {
  const whatsappUrl = "https://wa.me/923340607521?text=Hi,%20I%20want%20to%20file%20my%20US%20Federal%20and/or%20Sales%20Tax%20Returns";

  const taxServices = [
    "IRS Federal Income Tax Return Filing (Form 1120 / 1040NR / 5472)",
    "State Sales Tax Registration & Quarterly Filings (Q1, Q2, Q3, Q4)",
    "Zero Tax Return Filing (For Inactive / New LLCs)",
    "Penalty Mitigation & IRS Audit Compliance Guidance",
    "Sales Tax Exemption Certificate Assistance",
    "E-Commerce Seller Tax Reports (Amazon, eBay, Shopify, Walmart)",
  ];

  const penaltiesList = [
    "Failure-to-File Penalty: IRS charges 5% per month of unpaid taxes (up to 25%).",
    "IRS Form 5472 Violation: Non-filing penalty starts at $25,000 for foreign-owned LLCs.",
    "State Sales Tax Revocation: State authorities can revoke seller permits & freeze accounts.",
    "E-Commerce Account Holds: Amazon & Walmart restrict seller payouts without valid tax filings.",
  ];

  return (
    <div className="max-w-5xl mx-auto px-2 pt-6 pb-6">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="ae-chip mb-4">
              IRS & State Compliance Specialists
            </span>
            <h1 className="ae-display text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
              US Federal & Sales <span className="ae-text-orange">Tax Filing Services</span>
            </h1>
            <p className="ae-text-steel text-base md:text-lg leading-relaxed mb-8">
              Stay 100% compliant with IRS federal requirements and State quarterly sales tax deadlines. Avoid heavy fines, penalties, and business license cancellations.
            </p>
            
            {/* CTA BUTTON */}
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ae-btn-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2 text-base cursor-pointer"
              >
                <MessageCircle size={20} />
                File Your Tax Return (WhatsApp)
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* PRICING CARDS */}
        <FadeIn direction="up" delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* FEDERAL TAX CARD */}
            <div className="ae-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden hover:scale-[1.01] transition-transform">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="ae-chip mb-2">
                      Annual Compliance
                    </span>
                    <h3 className="ae-display text-2xl text-slate-900 mt-2">IRS Federal Tax Filing</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-slate-900">$60</span>
                    <span className="text-xs ae-text-steel block">/ annual return</span>
                  </div>
                </div>
                <p className="ae-text-steel text-sm mb-6 leading-relaxed">
                  Complete federal return preparation and submission to the IRS for foreign-owned LLCs and US corporations.
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-8 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={18} /> Includes Form 1120 / Form 5472 filings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={18} /> Zero tax filing for inactive businesses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={18} /> Official IRS Submission Confirmation
                  </li>
                </ul>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] inline-flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <MessageCircle size={18} /> File Federal Tax ($60)
              </a>
            </div>

            {/* SALES TAX CARD */}
            <div className="ae-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden hover:scale-[1.01] transition-transform">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="ae-chip mb-2">
                      Quarterly Compliance
                    </span>
                    <h3 className="ae-display text-2xl text-slate-900 mt-2">State Sales Tax Filing</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-slate-900">$40</span>
                    <span className="text-xs ae-text-steel block">/ quarter (Q1, Q2, Q3, Q4)</span>
                  </div>
                </div>
                <p className="ae-text-steel text-sm mb-6 leading-relaxed">
                  Quarterly sales tax computation and state filing for e-commerce sellers in state jurisdictions.
                </p>
                <ul className="space-y-2 text-slate-700 text-sm mb-8 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={18} /> Timely filings for Q1, Q2, Q3, & Q4
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={18} /> Multi-State sales tax reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={18} /> Avoid state license suspensions
                  </li>
                </ul>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ae-btn-primary font-bold w-full py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] inline-flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <MessageCircle size={18} /> File Sales Tax ($40)
              </a>
            </div>

          </div>
        </FadeIn>

        {/* WARNING / PENALTIES SECTION */}
        <FadeIn direction="up" delay={0.3}>
          <div className="bg-red-950/5 border border-red-900/10 rounded-2xl p-8 md:p-10 mb-16 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="text-red-600 shrink-0" size={32} />
              <div>
                <h3 className="ae-display text-xl md:text-2xl text-red-950">
                  Risks & Heavy Penalties For Non-Filing
                </h3>
                <p className="text-red-800/80 text-xs md:text-sm font-medium">Why missing federal and state tax deadlines can destroy your business identity.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {penaltiesList.map((penalty, idx) => (
                <div key={idx} className="ae-bg-paper-dim p-4 rounded-xl border ae-border-line flex items-start gap-3">
                  <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-800 text-xs md:text-sm font-medium leading-relaxed">{penalty}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* SERVICES INCLUDED */}
        <FadeIn direction="up" delay={0.4}>
          <div className="ae-card rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="ae-display text-2xl md:text-3xl text-slate-900 mb-3">
                Comprehensive Tax Services Offered
              </h2>
              <p className="ae-text-steel text-sm">
                We manage all state and federal tax paperwork so you remain 100% stress-free.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {taxServices.map((item, index) => (
                <div key={index} className="flex items-start gap-3.5 ae-bg-paper-dim p-4 rounded-xl border ae-border-line hover:scale-[1.01] transition-transform">
                  <FileCheck2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-800 font-semibold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* BOTTOM CTA */}
        <FadeIn direction="up" delay={0.5}>
          <div className="ae-bg-navy rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="ae-display text-2xl md:text-4xl mb-4 text-white">Protect Your Business From IRS Fines</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base">
              Don't wait for penalty notices. File your federal returns and quarterly sales taxes on time.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ae-btn-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
            >
              Contact Tax Consultant <ArrowRight size={40} />
            </a>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}