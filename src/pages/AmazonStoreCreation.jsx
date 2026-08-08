import React from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  Building2, 
  User, 
  ShieldCheck, 
  FileText,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import FadeIn from "../components/FadeIn";

export default function AmazonStoreCreation({ setPage }) {
  const whatsappUrl = "https://wa.me/923340607521?text=Hi,%20I%20want%20to%20create%20an%20Amazon%20Seller%20Account%20(Store%20Creation)";

  const individualReqs = [
    "Gmail Account",
    "Active Phone Number",
    "Passport or National ID Card",
    "Bank Statement (Matching name & address)",
    "US Bank Account Details (for payouts)",
    "International Credit Card"
  ];

  const businessReqs = [
    "Business Name & Articles of Organization",
    "Official Business Address Proof",
    "Authorization Letter (if applicable)",
    "Business Bank Statement"
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 pt-4 pb-12">
      
      {/* HERO SECTION */}
      <FadeIn direction="up" delay={0.1}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="ae-chip mb-3 inline-block">
            Amazon Seller Central Setup
          </span>
          <h1 className="ae-display text-3xl md:text-5xl text-slate-900 mb-4 leading-tight">
            Amazon Store <span className="ae-text-orange">Creation & Verification</span>
          </h1>
          <p className="ae-text-steel text-base md:text-lg leading-relaxed mb-6">
            Get your Amazon Seller Account created and verified correctly from day one with full compliance and expert guidance.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ae-btn-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2 text-base cursor-pointer"
          >
            <MessageCircle size={20} />
            Start Store Creation ($30)
            <ArrowRight size={18} />
          </a>
        </div>
      </FadeIn>

      {/* PRICING & OFFER BOX */}
      <FadeIn direction="up" delay={0.2}>
        <div className="ae-bg-navy rounded-2xl p-8 md:p-10 text-white mb-12 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full uppercase inline-block mb-3">
              Standard Setup Fee
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              $30 <span className="text-lg font-normal text-white/70">/ Complete Account Setup</span>
            </h2>
            <p className="text-white/80 text-sm max-w-md">
              Valid for both Individual and Business Amazon Seller Account creations with step-by-step document verification.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ae-btn-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-105 inline-flex items-center gap-2 text-sm shrink-0"
          >
            Claim $30 Setup Offer
            <ArrowRight size={16} />
          </a>
        </div>
      </FadeIn>

      {/* REQUIREMENTS SECTION */}
      <FadeIn direction="up" delay={0.3}>
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="ae-display text-2xl md:text-3xl text-slate-900 mb-2">
              Required Documents & Info
            </h2>
            <p className="ae-text-steel text-sm">
              Please make sure you have the following ready before starting the creation process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* INDIVIDUAL ACCOUNT REQS */}
            <div className="ae-card rounded-2xl p-6 md:p-8 border ae-border-line">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b ae-border-line">
                <User className="ae-text-orange" size={28} />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Individual Account</h3>
                  <p className="text-xs ae-text-steel">For personal sellers & freelancers</p>
                </div>
              </div>

              <div className="space-y-3">
                {individualReqs.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                    <span className="text-slate-800 text-sm font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BUSINESS ACCOUNT REQS */}
            <div className="ae-card rounded-2xl p-6 md:p-8 border ae-border-line">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b ae-border-line">
                <Building2 className="ae-text-orange" size={28} />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Business Account</h3>
                  <p className="text-xs ae-text-steel">For registered Companies (LLC / LTD)</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Includes Individual details PLUS:</p>
                {businessReqs.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                    <span className="text-slate-800 text-sm font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </FadeIn>

      {/* NO LLC / LTD BANNER (PAGE REDIRECTS) */}
      <FadeIn direction="up" delay={0.4}>
        <div className="ae-bg-paper-dim rounded-2xl p-6 md:p-8 border ae-border-line mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                Don't have a registered US LLC or UK LTD Business yet?
              </h3>
              <p className="ae-text-steel text-sm">
                To create a Professional Business Amazon Store, you need a official company structure. Register with us first:
              </p>
            </div>
            
            <div className="flex items-center gap-3 flex-wrap shrink-0">
              <button
                onClick={() => setPage("llc")}
                className="ae-btn-primary font-bold px-5 py-2.5 rounded-full text-xs transition-all hover:scale-105 inline-flex items-center gap-1.5 cursor-pointer"
              >
                Register US LLC
                <ArrowRight size={14} />
              </button>
              
              <button
                onClick={() => setPage("ltd")}
                className="bg-slate-800 hover:bg-slate-900 text-white font-bold px-5 py-2.5 rounded-full text-xs transition-all hover:scale-105 inline-flex items-center gap-1.5 cursor-pointer"
              >
                Register UK LTD
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* REJECTION / RE-VERIFICATION WARNING BANNER */}
      <FadeIn direction="up" delay={0.5}>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 shrink-0">
            <AlertTriangle size={32} />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-slate-900 text-lg mb-1">
              Facing Amazon Account Rejection or Identity Verification Failure?
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Aaj kal ghalat ya unformatted documents upload karne ki wajah se bohot se Amazon accounts instant reject ho jate hain. Agar aapka account open nahi ho raha ya verification stuck hai, toh tension na lein! Humse rabta karein.
            </p>
          </div>

          <a
            href="https://wa.me/923340607521?text=Hi,%20my%20Amazon%20Account%20is%20rejected%20or%20facing%20verification%20issues.%20Please%20help."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:scale-105 inline-flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <HelpCircle size={18} />
            Contact For Account Fix
          </a>
        </div>
      </FadeIn>

    </div>
  );
}