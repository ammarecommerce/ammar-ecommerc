import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Mail, 
  ShieldCheck, 
  Zap, 
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { PrimaryButton } from "../components/UI";

export default function WebsiteDesign({ setPage }) {
  const whatsappUrl = "https://wa.me/923340607521?text=Hi,%20I%20need%20a%20Professional%20Website%20Design%20for%20my%20Business/Wholesale%20Brand";

  const websiteFeatures = [
    "Complete Professional Website Design according to Brand Requirements",
    "Tailored Specifically for Amazon Wholesale Brand Approval",
    "2 Professional Business Emails on Your Domain (e.g., info@yourdomain.com)",
    "Free Domain & Free High-Speed Hosting Included",
    "1 Year Complete Hosting & Maintenance Coverage",
    "100% Mobile & Desktop Responsive Design",
    "Fast Loading Speed & Modern UI Layout",
    "WhatsApp & Direct Contact Lead Integration",
  ];

  return (
    <div className="py-12 ae-root">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="ae-chip mb-4">
            Build Trust & Scale Your Business
          </span>
          <h1 className="ae-display text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
            Professional Website Design & <span className="ae-text-orange">Development</span>
          </h1>
          <p className="ae-text-steel text-base md:text-lg leading-relaxed mb-8">
            Whether you run a general business or need brand approvals for Amazon Wholesale, a professional website is an essential tool to build authority and trust.
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
              Get a Free Quote (WhatsApp)
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* WHY YOU NEED A WEBSITE SECTION */}
        <div className="ae-card rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="ae-chip mb-3">
              Why You Need a Website?
            </span>
            <h2 className="ae-display text-2xl md:text-3xl text-slate-900 mt-3 mb-3">
              Essential For Business & Amazon Brand Approvals
            </h2>
            <p className="ae-text-steel text-sm">
              Today, having a website isn't just optional - it is required to represent your identity professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="ae-bg-paper-dim p-5 rounded-xl border ae-border-line">
                <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                  <ShieldCheck className="ae-text-orange shrink-0" size={20} />
                  Crucial for Amazon Wholesale
                </h3>
                <p className="ae-text-steel text-sm leading-relaxed">
                  When you apply to suppliers and distributors for Wholesale brand approvals, they verify your business website first to make sure you are a legitimate seller.
                </p>
              </div>

              <div className="ae-bg-paper-dim p-5 rounded-xl border ae-border-line">
                <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                  <Globe className="ae-text-orange shrink-0" size={20} />
                  Professional Business Presence
                </h3>
                <p className="ae-text-steel text-sm leading-relaxed">
                  Give your customers and corporate partners confidence with an official domain, customized layout, and branded web address.
                </p>
              </div>
            </div>

            {/* PRICING HIGHLIGHT BOX */}
            <div className="ae-bg-navy rounded-2xl p-8 text-white text-center shadow-xl border border-slate-800">
              <span className="text-xs font-bold tracking-widest text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full uppercase inline-block mb-3">
                Complete Website Package
              </span>
              <div className="text-4xl font-extrabold text-white mb-1">
                $100 <span className="text-lg font-normal text-white/70">/ complete setup</span>
              </div>
              <p className="text-emerald-400 text-xs font-medium mb-6">
                *Prices may vary depending on custom requirements. Contact us for discounts!
              </p>

              <div className="text-left space-y-3 mb-8 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-orange-400 shrink-0" size={18} />
                  <span>Free Domain & High-Speed Hosting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-orange-400 shrink-0" size={18} />
                  <span>2 Branded Business Email Accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-orange-400 shrink-0" size={18} />
                  <span>1 Year Validity & Support Included</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ae-btn-primary font-bold w-full py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-105 inline-flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <MessageCircle size={18} />
                Discuss Requirements
              </a>
            </div>
          </div>
        </div>

        {/* PACKAGE FEATURES GRID */}
        <div className="ae-card rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="ae-display text-2xl md:text-3xl text-slate-900 mb-3">
              What Is Included In The Package?
            </h2>
            <p className="ae-text-steel text-sm">
              All essential elements configured to make your website brand-ready right out of the box.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {websiteFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-3.5 ae-bg-paper-dim p-4 rounded-xl border ae-border-line">
                <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={22} />
                <span className="text-slate-800 font-semibold text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="ae-bg-navy rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="ae-display text-2xl md:text-4xl mb-4 text-white">Need a Custom Website for Your Brand?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Contact us right now to discuss your custom layout or claim your current package discount!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ae-btn-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
          >
            Chat with Developer <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </div>
  );
}