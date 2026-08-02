import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  CreditCard, 
  ShieldCheck, 
  Globe, 
  MessageCircle,
  FileText
} from "lucide-react";

export default function BankSetup({ setPage }) {
  const whatsappUrl = "https://wa.me/923340607521?text=Hi,%20I%20need%20assistance%20with%20Business%20Bank%20Account%20Setup";

  const supportedPlatforms = [
    "Wise Business Account",
    "Payoneer Business Account",
    "Stripe Payment Gateway",
    "Airwallex Business Account",
    "Relay Financial / US Banks",
    "Mercury & Sunrate Accounts",
  ];

  const requirements = [
    "Valid LLC Registration Documents",
    "Official EIN (Employer Identification Number)",
    "US / UK Business Address Proof",
    "Official Business Email Address",
    "Active Business Website",
  ];

  return (
    <div className="py-12 ae-root">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="ae-chip mb-4">
            Hassle-Free Global Banking Solutions
          </span>
          <h1 className="ae-display text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
            Business Bank Account <span className="ae-text-orange">Setup Services</span>
          </h1>
          <p className="ae-text-steel text-base md:text-lg leading-relaxed mb-8">
            Facing rejections or difficulties in opening international business bank accounts? We help e-commerce sellers and global businesses smoothly register verified accounts across major platforms.
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
              Consult Banking Expert (WhatsApp)
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* FEATURES HIGHLIGHT */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="ae-card p-6 rounded-2xl text-center">
            <CreditCard className="ae-text-orange mx-auto mb-3" size={32} />
            <h3 className="font-bold text-slate-900 mb-1 text-base">Physical & Virtual Cards</h3>
            <p className="ae-text-steel text-xs">Debit cards for inventory payments & ads spending</p>
          </div>

          <div className="ae-card p-6 rounded-2xl text-center">
            <Globe className="ae-text-orange mx-auto mb-3" size={32} />
            <h3 className="font-bold text-slate-900 mb-1 text-base">ACH & Wire Transfers</h3>
            <p className="ae-text-steel text-xs">Smooth local US/UK ACH & global SWIFT transfers</p>
          </div>

          <div className="ae-card p-6 rounded-2xl text-center">
            <ShieldCheck className="ae-text-orange mx-auto mb-3" size={32} />
            <h3 className="font-bold text-slate-900 mb-1 text-base">Fully Compliant Setup</h3>
            <p className="ae-text-steel text-xs">Proper verification according to business activity</p>
          </div>
        </div>

        {/* SUPPORTED PLATFORMS */}
        <div className="ae-card rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="ae-chip mb-3">
              Supported Platforms
            </span>
            <h2 className="ae-display text-2xl md:text-3xl text-slate-900 mt-3 mb-3">
              Accounts & Payment Gateways We Open
            </h2>
            <p className="ae-text-steel text-sm">
              We assist in opening verified business accounts tailored to your operational needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {supportedPlatforms.map((platform, index) => (
              <div key={index} className="flex items-center gap-3 ae-bg-paper-dim p-4 rounded-xl border ae-border-line">
                <Building2 className="ae-text-orange shrink-0" size={20} />
                <span className="text-slate-800 font-semibold text-sm md:text-base">{platform}</span>
              </div>
            ))}
          </div>
        </div>

        {/* REQUIREMENTS & PRICING BOX */}
        <div className="ae-card rounded-2xl p-8 md:p-12 mb-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="ae-chip mb-3">
              Prerequisites
            </span>
            <h3 className="ae-display text-2xl text-slate-900 mt-3 mb-4">
              Required Documents For Setup
            </h3>
            <p className="ae-text-steel text-sm leading-relaxed mb-6">
              To ensure smooth approval from financial institutions, you will need the following valid details:
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

          {/* DYNAMIC PRICING NOTICE BOX */}
          <div className="ae-bg-navy rounded-2xl p-8 text-white text-center shadow-xl border border-slate-800">
            <FileText className="ae-text-orange mx-auto mb-3" size={36} />
            <h4 className="text-xl font-bold text-white mb-2">Custom Pricing & Official Fees</h4>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Official verification fees and service charges vary based on bank type, country jurisdiction, and business structure. Contact us to get exact quote for your required account.
            </p>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ae-btn-primary font-bold w-full py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-105 inline-flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <MessageCircle size={20} />
              Get Fee on WhatsApp
            </a>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="ae-bg-navy rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="ae-display text-2xl md:text-4xl mb-4 text-white">Need Help Opening Your Business Account?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Avoid account rejections and delays. Let our experts set up your banking infrastructure correctly.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ae-btn-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
          >
            Start Account Opening Process <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </div>
  );
}