import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MessageCircle 
} from "lucide-react";
import FadeIn from "../components/FadeIn";

export default function ITIN({ setPage }) {
  const whatsappUrl = "https://wa.me/923340607521?text=Hi,%20I%20want%20to%20apply%20for%20an%20ITIN%20(Individual%20Tax%20Identification%20Number)";

  const itinUseCases = [
    "Opening US Business & Personal Bank Accounts (Mercury, Relay, Chase, etc.)",
    "Setting up Verified Payment Gateways (Stripe, PayPal, Wise)",
    "Selling on E-Commerce Platforms (Amazon US, eBay, Walmart, Etsy)",
    "IRS Federal Tax Filing & Withholding Tax Refund Eligibility",
    "Avoiding Account Suspensions due to Tax Verification Requests",
    "Building Financial Credibility in the US Market",
  ];

  const requirements = [
    "Valid Passport Copy (High Quality Scan)",
    "Signed W-7 Application Form (Prepared by our team)",
    "US Business/LLC Documents or Income Source Documentation",
    "US Postal Address (If applicable / provided by us)",
  ];

  return (
    <div className="max-w-5xl mx-auto px-2 pt-6 pb-6">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="ae-chip mb-4">
              Official IRS Individual Tax ID
            </span>
            <h1 className="ae-display text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
              ITIN Filing & <span className="ae-text-orange">Verification Services</span>
            </h1>
            <p className="ae-text-steel text-base md:text-lg leading-relaxed mb-8">
              An Individual Tax Identification Number (ITIN) is essential for non-US residents doing business in the United States. Unlock US banking, payment gateways, and e-commerce selling legally.
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
                Apply For ITIN (WhatsApp)
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* PROCESSING TIME HIGHLIGHT CARD */}
        <FadeIn direction="up" delay={0.2}>
          <div className="ae-card rounded-2xl p-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-4 border ae-border-line">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="p-3 ae-bg-paper-dim text-[#F26522] rounded-xl shrink-0 mx-auto md:mx-0 border ae-border-line">
                <Clock size={32} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Official IRS Processing Time</h3>
                <p className="ae-text-steel text-sm">Official IRS timeframe for ITIN issuing and approval.</p>
              </div>
            </div>
            <div className="ae-bg-paper-dim px-6 py-2.5 rounded-full border ae-border-line ae-text-orange font-extrabold text-lg shadow-sm whitespace-nowrap">
              8 to 12 Weeks
            </div>
          </div>
        </FadeIn>

        {/* WHY YOU NEED AN ITIN */}
        <FadeIn direction="up" delay={0.3}>
          <div className="ae-card rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="ae-chip mb-3">
                Why Is ITIN Required?
              </span>
              <h2 className="ae-display text-2xl md:text-3xl text-slate-900 mt-3 mb-3">
                Essential for US Business Operations & Banking
              </h2>
              <p className="ae-text-steel text-sm">
                If you don't have a Social Security Number (SSN), the IRS issues an ITIN for federal tax compliance and identity verification across financial institutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {itinUseCases.map((item, index) => (
                <div key={index} className="flex items-start gap-3.5 ae-bg-paper-dim p-4 rounded-xl border ae-border-line hover:scale-[1.01] transition-transform">
                  <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={22} />
                  <span className="text-slate-800 font-semibold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* REQUIREMENTS & PRICING BOX */}
        <FadeIn direction="up" delay={0.4}>
          <div className="ae-card rounded-2xl p-8 md:p-12 mb-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="ae-chip mb-3">
                Simple Documentation
              </span>
              <h3 className="ae-display text-2xl text-slate-900 mt-3 mb-4">
                What We Need From You
              </h3>
              <p className="ae-text-steel text-sm leading-relaxed mb-6">
                Our team handles the heavy lifting, W-7 tax form preparation, and IRS submission guidelines to ensure zero errors and seamless approval.
              </p>
              <div className="space-y-3">
                {requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PRICING HIGHLIGHT BOX */}
            <div className="ae-bg-navy rounded-2xl p-8 text-white text-center shadow-xl border border-slate-800 hover:scale-[1.02] transition-transform duration-300">
              <span className="text-xs font-bold tracking-widest text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full uppercase inline-block mb-3">
                All-Inclusive Package
              </span>
              <div className="text-4xl font-extrabold text-white mb-1">
                $230 <span className="text-lg font-normal text-white/70">/ complete filing</span>
              </div>
              <p className="text-white/70 text-xs mb-6">
                Includes IRS Form W-7 Preparation, Documentation Review & Full Application Guidance
              </p>

              <div className="text-left space-y-3 mb-8 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-orange-400 shrink-0" size={18} />
                  <span>8 - 12 Weeks Official Processing Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-orange-400 shrink-0" size={18} />
                  <span>Zero Risk IRS Compliant Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-orange-400 shrink-0" size={18} />
                  <span>Support for Bank & Seller Approvals</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ae-btn-primary font-bold w-full py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-105 inline-flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <MessageCircle size={18} />
                Start ITIN
              </a>
            </div>
          </div>
        </FadeIn>

        {/* BOTTOM CTA */}
        <FadeIn direction="up" delay={0.5}>
          <div className="ae-bg-navy rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="ae-display text-2xl md:text-4xl mb-4 text-white">Ready to Get Your Official ITIN?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base">
              Don't let tax compliance hold back your international business. Contact our filing team today!
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ae-btn-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
            >
              Apply Now on WhatsApp <ArrowRight size={40} />
            </a>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}