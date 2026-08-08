import React from "react";
import { SectionEyebrow, PageShell } from "../components/UI";
import PackageCard from "../components/PackageCard";
import { LLC_PLANS, LLC_PACKAGES, STATES } from "../data/constants";
import FadeIn from "../components/FadeIn";
import { 
  CheckCircle2, 
  Clock, 
  Building2, 
  FolderCheck,
  MessageCircle
} from "lucide-react";

const LLCPage = ({ setPage }) => {
  const whatsappUrl = "https://wa.me/923340607521?text=Hi,%20I%20want%20to%20register%20a%20US%20LLC";

  const requirements = [
    "Valid Passport Copy (High resolution scan of account owner)",
    "Proposed LLC Names (1st choice and alternative backup choice)",
    "Owner's Physical Address & Active Email Address",
    "US Phone Number (Can be provided during business setup)",
  ];

  const deliverables = [
    "Official Certificate of Formation / Articles of Organization",
    "IRS Official EIN Confirmation Letter (CP575 / LTR 147C)",
    "Customized LLC Operating Agreement",
    "1 Year US Registered Agent Service Included",
    "1 Year US Unique Commercial Business Address",
    "Reseller Certificate / Sales Tax Permit Assistance",
  ];

  return (
    <PageShell>
      
      {/* ============================================================ */}
      {/* 3 PLANS                                                      */}
      {/* ============================================================ */}

      <FadeIn direction="up" delay={0.1}>
        <SectionEyebrow>US Company Formation</SectionEyebrow>

        <h1 className="ae-display text-3xl md:text-5xl mb-4 font-extrabold text-slate-900">
          LLC Formation Plans
        </h1>

        <p className="ae-text-steel max-w-2xl mb-10 text-base md:text-lg">
          Choose the package that best fits your business needs. Our plans
          cover LLC formation, banking, compliance, and additional business
          services.
        </p>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {LLC_PLANS.map((pkg, i) => (
            <PackageCard
              key={i}
              pkg={pkg}
              setPage={setPage}
            />
          ))}
        </div>
      </FadeIn>


      {/* ============================================================ */}
      {/* REQUIREMENTS & PROCESSING TIMELINE SECTION                   */}
      {/* ============================================================ */}

      <FadeIn direction="up" delay={0.3}>
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border ae-border-line mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* REQUIREMENTS */}
            <div>
              <span className="text-xs font-bold tracking-wider ae-text-orange bg-orange-100 px-3 py-1 rounded-full uppercase">
                Prerequisites
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-3 mb-4">
                Requirements for LLC Formation
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Simple documentation needed from non-US residents or international entrepreneurs to start US company filing:
              </p>
              <div className="space-y-3">
                {requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TIMELINE BOX */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                <Clock className="ae-text-orange shrink-0" size={24} />
                <h3 className="font-bold text-slate-900 text-lg">Official Processing Timeframes</h3>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800">State LLC Filing Approval</span>
                  <span className="ae-mono text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                    2 to 5 Business Days
                  </span>
                </div>

                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800">IRS EIN Issuance (Non-SSN)</span>
                  <span className="ae-mono text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                    10 to 15 Business Days
                  </span>
                </div>

                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800">Complete Turnkey Setup</span>
                  <span className="ae-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Ready in 2-3 Weeks
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all inline-flex items-center justify-center gap-3 text-sm shadow-md px-2 hover:scale-[1.02]"
                >
                  <MessageCircle size={25} />
                  Consult LLC Expert on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </FadeIn>


      {/* ============================================================ */}
      {/* WHAT DELIVERABLES YOU WILL GET                               */}
      {/* ============================================================ */}

      <FadeIn direction="up" delay={0.4}>
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border ae-border-line mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase">
              Complete Package Output
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-3 mb-3">
              What Documents You Will Receive
            </h2>
            <p className="text-slate-600 text-sm">
              Everything delivered to open US business bank accounts and register seller accounts on Amazon / Stripe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:scale-[1.01] transition-transform">
                <FolderCheck className="text-emerald-600 shrink-0" size={20} />
                <span className="text-slate-800 font-semibold text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>


      {/* ============================================================ */}
      {/* STATE COMPARISON                                             */}
      {/* ============================================================ */}

      <FadeIn direction="up" delay={0.5}>
        <SectionEyebrow>Choosing a State</SectionEyebrow>

        <h2 className="ae-display text-3xl mb-4 font-bold text-slate-900">
          LLC filing fees &amp; process by state
        </h2>

        <p className="ae-text-steel max-w-2xl mb-8">
          We form LLCs in any US state - these five are the most requested by
          our clients. State fees are set by each Secretary of State and can
          change; figures below are 2026 published rates and are confirmed
          again at the time of filing.
        </p>

        <div className="ae-card rounded-2xl overflow-x-auto ae-scrollbar mb-16">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="ae-bg-paper-dim text-left">
                <th className="p-4 font-bold">State</th>
                <th className="p-4 font-bold">State Filing Fee</th>
                <th className="p-4 font-bold">Ongoing Annual Cost</th>
                <th className="p-4 font-bold">Privacy</th>
                <th className="p-4 font-bold">Best For</th>
                <th className="p-4 font-bold">Processing Time</th>
              </tr>
            </thead>

            <tbody>
              {STATES.map((s, i) => (
                <tr
                  key={i}
                  className="border-t ae-border-line hover:bg-slate-50 transition-colors"
                >
                  <td className="p-4 font-bold ae-text-navy">
                    {s.state}
                  </td>

                  <td className="p-4 ae-mono font-semibold">
                    {s.fee}
                  </td>

                  <td className="p-4 ae-mono">
                    {s.annual}
                  </td>

                  <td className="p-4">
                    {s.privacy}
                  </td>

                  <td className="p-4 ae-text-steel">
                    {s.bestFor}
                  </td>

                  <td className="p-4 ae-text-steel font-medium">
                    {s.speed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <p className="text-xs ae-text-steel p-4 border-t ae-border-line bg-slate-50">
            *Texas requires an annual Franchise Tax Report even when $0 is owed;
            no tax is due below the state's annual revenue threshold. State fees
            shown are subject to change - we verify current pricing before every
            filing.
          </p>
        </div>
      </FadeIn>


      {/* ============================================================ */}
      {/* TEXAS / FLORIDA / WYOMING COMPLETE PACKAGES                  */}
      {/* ============================================================ */}

      <FadeIn direction="up" delay={0.6}>
        <div className="mt-10">
          <SectionEyebrow>Complete LLC Packages</SectionEyebrow>

          <h2 className="ae-display text-3xl mb-4 font-bold text-slate-900">
            Texas, Florida &amp; Wyoming Complete Packages
          </h2>

          <p className="ae-text-steel max-w-2xl mb-10">
            Complete LLC formation packages designed to help you get your
            business started with essential formation, address, banking,
            and ongoing support services.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {LLC_PACKAGES.map((pkg, i) => (
              <PackageCard
                key={i}
                pkg={pkg}
                setPage={setPage}
              />
            ))}
          </div>

          {/* Pricing Notice */}
          <div className="ae-card rounded-2xl p-6 mt-10 bg-orange-50/50 border border-orange-200">
            <div className="font-bold mb-2 ae-text-orange flex items-center gap-2 text-base">
              <Building2 size={18} /> Pricing Notice & Custom Requests
            </div>

            <p className="text-sm ae-text-steel leading-relaxed">
              Package prices may be negotiable depending on your specific
              business requirements and existing paperwork. Contact us on WhatsApp to discuss your needs and receive a customized quote.
            </p>
          </div>
        </div>
      </FadeIn>


      {/* ============================================================ */}
      {/* INFORMATION CARDS                                            */}
      {/* ============================================================ */}

      <FadeIn direction="up" delay={0.7}>
        <div className="mt-14 grid md:grid-cols-3 gap-6 mb-12">

          {/* EIN */}
          <div className="ae-card rounded-xl p-6 hover:scale-[1.02] transition-transform">
            <div className="font-bold mb-2 text-slate-900 text-base">
              What is an EIN?
            </div>

            <p className="text-sm ae-text-steel leading-relaxed">
              Your LLC's federal tax ID from the IRS - needed to open a
              bank account, file taxes, and register as an Amazon seller.
            </p>
          </div>

          {/* Registered Agent */}
          <div className="ae-card rounded-xl p-6 hover:scale-[1.02] transition-transform">
            <div className="font-bold mb-2 text-slate-900 text-base">
              What is a Registered Agent?
            </div>

            <p className="text-sm ae-text-steel leading-relaxed">
              A person or service with a physical address in your formation
              state that receives legal and state mail on your LLC's behalf.
            </p>
          </div>

          {/* ITIN */}
          <div className="ae-card rounded-xl p-6 hover:scale-[1.02] transition-transform">
            <div className="font-bold mb-2 text-slate-900 text-base">
              Do I need an ITIN?
            </div>

            <p className="text-sm ae-text-steel leading-relaxed">
              If you don't have a US Social Security Number, an ITIN lets
              you file US taxes and is often required for banking.
            </p>
          </div>

        </div>
      </FadeIn>

    </PageShell>
  );
};

export default LLCPage;