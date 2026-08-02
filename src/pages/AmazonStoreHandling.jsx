import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  MessageCircle, 
  Globe2, 
  DollarSign 
} from "lucide-react";

export default function AmazonStoreHandling({ setPage }) {
  const whatsappUrl = "https://wa.me/923340607521?text=Hi,%20I%20want%20to%20hire%20Virtual%20Assistants%20for%20my%20Amazon%20Store%20Handling";

  const storeServices = [
    "Winning Product Hunting & Analysis",
    "Brand & Distributor Approvals",
    "Product Listing & Optimization",
    "FBA Shipment Creation & Labeling",
    "Inventory & Stock Management",
    "Supplier Communication & Sourcing",
    "Daily Account Health Monitoring",
    "Buy Box & Pricing Strategy Optimization",
  ];

  return (
    <div className="py-12 ae-root">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="ae-chip mb-4">
            3+ Years of Proven Wholesale Experience
          </span>
          <h1 className="ae-display text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
            Complete Amazon Store Handling & <span className="ae-text-orange">VA Services</span>
          </h1>
          <p className="ae-text-steel text-base md:text-lg leading-relaxed mb-8">
            We have been successfully managing Amazon FBA Wholesale stores for the past 3 years across US, UK, and Canada marketplaces. Let us handle your store operations from A to Z so you can scale hassle-free.
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
              Hire Store Manager (WhatsApp)
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* MARKETPLACES COVERED */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="ae-card p-6 rounded-2xl text-center">
            <Globe2 className="ae-text-orange mx-auto mb-3" size={32} />
            <h3 className="font-bold text-slate-900 mb-1 text-base">USA Market</h3>
            <p className="ae-text-steel text-xs">Amazon.com Wholesale & FBA Automation</p>
          </div>

          <div className="ae-card p-6 rounded-2xl text-center">
            <Globe2 className="ae-text-orange mx-auto mb-3" size={32} />
            <h3 className="font-bold text-slate-900 mb-1 text-base">UK Market</h3>
            <p className="ae-text-steel text-xs">Amazon.co.uk Account Operations</p>
          </div>

          <div className="ae-card p-6 rounded-2xl text-center">
            <Globe2 className="ae-text-orange mx-auto mb-3" size={32} />
            <h3 className="font-bold text-slate-900 mb-1 text-base">Canada Market</h3>
            <p className="ae-text-steel text-xs">Amazon.ca Store Scaling & Inventory</p>
          </div>
        </div>

        {/* FLEXIBLE PRICING & PAYMENT MODEL BOX */}
        <div className="ae-card rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="ae-chip mb-3">
              Flexible Pricing Model
            </span>
            <h2 className="ae-display text-2xl md:text-3xl text-slate-900 mt-3 mb-3">
              Tailored Payment Structure For Your Business
            </h2>
            <p className="ae-text-steel text-sm">
              We offer customizable hiring plans depending on your total investment, store size, and specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="ae-bg-paper-dim p-6 rounded-2xl border ae-border-line">
              <DollarSign className="ae-text-orange mb-3" size={28} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fixed Monthly Salary</h3>
              <p className="ae-text-steel text-sm leading-relaxed mb-4">
                Ideal for investors looking for a dedicated Virtual Assistant or team to run daily tasks on a fixed predictable budget.
              </p>
              <ul className="text-xs space-y-2 text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-600" size={16} /> Dedicated Daily Hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-600" size={16} /> Regular Progress Reports
                </li>
              </ul>
            </div>

            <div className="ae-bg-paper-dim p-6 rounded-2xl border ae-border-line">
              <TrendingUp className="ae-text-orange mb-3" size={28} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Percentage Profit Share</h3>
              <p className="ae-text-steel text-sm leading-relaxed mb-4">
                Ideal for active store owners wanting maximum growth where fees are directly tied to your net sales profit percentage.
              </p>
              <ul className="text-xs space-y-2 text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-600" size={16} /> Performance-based Incentive
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-600" size={16} /> Shared Growth Goals
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SERVICES INCLUDED (A TO Z) */}
        <div className="ae-card rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="ae-display text-2xl md:text-3xl text-slate-900 mb-3">
              A to Z Amazon Store Management Services
            </h2>
            <p className="ae-text-steel text-sm">
              Everything required to keep your account health clean and revenues growing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {storeServices.map((item, index) => (
              <div key={index} className="flex items-start gap-3.5 ae-bg-paper-dim p-4 rounded-xl border ae-border-line">
                <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={22} />
                <span className="text-slate-800 font-semibold text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="ae-bg-navy rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="ae-display text-2xl md:text-4xl mb-4 text-white">Ready to Grow Your Amazon Store?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Contact us today on WhatsApp to discuss your account requirements, investment scope, and suitable management model!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ae-btn-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
          >
            Contact for Store Handling <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </div>
  );
}