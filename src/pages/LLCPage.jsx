import React from "react";
import { SectionEyebrow, PageShell } from "../components/UI";
import PackageCard from "../components/PackageCard";
import { LLC_PLANS, LLC_PACKAGES, STATES } from "../data/constants";

/* ------------------------------------------------------------------ */
/* LLC PAGE                                                            */
/* ------------------------------------------------------------------ */

const LLCPage = ({ setPage }) => {
  return (
    <PageShell>
      {/* ============================================================ */}
      {/* 3 PLANS                                                       */}
      {/* ============================================================ */}

      <SectionEyebrow>US Company Formation</SectionEyebrow>

      <h1 className="ae-display text-4xl mb-4">
        LLC Formation Plans
      </h1>

      <p className="ae-text-steel max-w-2xl mb-10">
        Choose the package that best fits your business needs. Our plans
        cover LLC formation, banking, compliance, and additional business
        services.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {LLC_PLANS.map((pkg, i) => (
          <PackageCard
            key={i}
            pkg={pkg}
            setPage={setPage}
          />
        ))}
      </div>


      {/* ============================================================ */}
      {/* STATE COMPARISON                                              */}
      {/* ============================================================ */}

      <SectionEyebrow>Choosing a State</SectionEyebrow>

      <h2 className="ae-display text-3xl mb-4">
        LLC filing fees &amp; process by state
      </h2>

      <p className="ae-text-steel max-w-2xl mb-8">
        We form LLCs in any US state - these five are the most requested by
        our clients. State fees are set by each Secretary of State and can
        change; figures below are 2026 published rates and are confirmed
        again at the time of filing.
      </p>

      <div className="ae-card rounded-2xl overflow-x-auto ae-scrollbar">
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
                className="border-t ae-border-line"
              >
                <td className="p-4 font-bold ae-text-navy">
                  {s.state}
                </td>

                <td className="p-4 ae-mono">
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

                <td className="p-4 ae-text-steel">
                  {s.speed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs ae-text-steel mt-3">
        *Texas requires an annual Franchise Tax Report even when $0 is owed;
        no tax is due below the state's annual revenue threshold. State fees
        shown are subject to change - we verify current pricing before every
        filing.
      </p>


      {/* ============================================================ */}
      {/* TEXAS / FLORIDA / WYOMING COMPLETE PACKAGES                   */}
      {/* ============================================================ */}

      <div className="mt-10">
        <SectionEyebrow>Complete LLC Packages</SectionEyebrow>

        <h2 className="ae-display text-3xl mb-4">
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
        <div className="ae-card rounded-xl p-6 mt-10">
          <div className="font-bold mb-2 ae-text-orange">
            Pricing Notice
          </div>

          <p className="text-sm ae-text-steel leading-relaxed">
            Package prices may be negotiable depending on your specific
            business requirements. Contact us to discuss your needs and
            receive a customized quote.
          </p>
        </div>
      </div>


      {/* ============================================================ */}
      {/* INFORMATION CARDS                                             */}
      {/* ============================================================ */}

      <div className="mt-14 grid md:grid-cols-3 gap-6">

        {/* EIN */}
        <div className="ae-card rounded-xl p-6">
          <div className="font-bold mb-">
            What is an EIN?
          </div>

          <p className="text-sm ae-text-steel">
            Your LLC's federal tax ID from the IRS - needed to open a
            bank account, file taxes, and register as an Amazon seller.
          </p>
        </div>


        {/* Registered Agent */}
        <div className="ae-card rounded-xl p-6">
          <div className="font-bold mb-2">
            What is a Registered Agent?
          </div>

          <p className="text-sm ae-text-steel">
            A person or service with a physical address in your formation
            state that receives legal and state mail on your LLC's behalf.
          </p>
        </div>


        {/* ITIN */}
        <div className="ae-card rounded-xl p-6">
          <div className="font-bold mb-2">
            Do I need an ITIN?
          </div>

          <p className="text-sm ae-text-steel">
            If you don't have a US Social Security Number, an ITIN lets
            you file US taxes and is often required for banking.
          </p>
        </div>

      </div>

    </PageShell>
  );
};

export default LLCPage;