import React from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Video, 
  Users, 
  Clock, 
  DollarSign, 
  MessageCircle 
} from "lucide-react";
import FadeIn from "../components/FadeIn";

export default function AmazonCourse({ setPage }) {
  const whatsappUrl = "https://wa.me/923340607521?text=Hi,%20I%20want%20to%20enroll%20in%20Amazon%20FBA%20Wholesale%20VA%20Course";

  const courseFeatures = [
    "Product Hunting Techniques",
    "Product Sourcing Strategies",
    "Brand Hunting & Approvals",
    "Distributor Hunting & Account Opening",
    "How to Create Amazon Account",
    "Earn Money from Amazon Without Investment",
    "How to Find Clients & Provide VA Services",
    "Secret Tips & Tricks",
  ];

  return (
    <div className="max-w-5xl mx-auto px-2 pt-6 pb-6">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="ae-chip mb-4">
              Master E-Commerce &amp; Virtual Assistant Skills
            </span>
            <h1 className="ae-display text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
              Amazon FBA Wholesale <span className="ae-text-orange">VA Course</span>
            </h1>
            <p className="ae-text-steel text-base md:text-lg leading-relaxed mb-8">
              Learn Amazon FBA Wholesale from A to Z. Build your own e-commerce business or earn money by offering virtual assistant services to global clients.
            </p>
            
            {/* JOIN NOW BUTTON */}
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ae-btn-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2 text-base cursor-pointer"
              >
                <MessageCircle size={20} />
                Join Now (WhatsApp)
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* QUICK HIGHLIGHT CARDS (Staggered Animation) */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <FadeIn direction="up" delay={0.1}>
            <div className="ae-card p-6 rounded-2xl text-center h-full">
              <Video className="ae-text-orange mx-auto mb-3" size={32} />
              <h3 className="font-bold text-slate-900 mb-1 text-sm md:text-base">Live Classes</h3>
              <p className="ae-text-steel text-xs">Interactive live online sessions</p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="ae-card p-6 rounded-2xl text-center h-full">
              <Clock className="ae-text-orange mx-auto mb-3" size={32} />
              <h3 className="font-bold text-slate-900 mb-1 text-sm md:text-base">Live Recordings</h3>
              <p className="ae-text-steel text-xs">Get recorded lectures for revision</p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="ae-card p-6 rounded-2xl text-center h-full">
              <Users className="ae-text-orange mx-auto mb-3" size={32} />
              <h3 className="font-bold text-slate-900 mb-1 text-sm md:text-base">24/7 Support</h3>
              <p className="ae-text-steel text-xs">Lifetime mentorship guidance</p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="ae-card p-6 rounded-2xl text-center h-full">
              <DollarSign className="ae-text-orange mx-auto mb-3" size={32} />
              <h3 className="font-bold text-slate-900 mb-1 text-sm md:text-base">Fee: 10,000 PKR</h3>
              <p className="ae-text-steel text-xs">2 Months Complete Duration</p>
            </div>
          </FadeIn>
        </div>

        {/* WHAT YOU WILL LEARN SECTION */}
        <FadeIn direction="up" delay={0.1}>
          <div className="ae-card rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="ae-display text-2xl md:text-3xl text-slate-900 mb-3">
                What You Will Learn In This Course
              </h2>
              <p className="ae-text-steel text-sm">
                Complete step-by-step roadmap designed for beginners and aspiring Virtual Assistants.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {courseFeatures.map((item, index) => (
                <FadeIn key={index} direction="up" delay={0.05 * (index + 1)}>
                  <div className="flex items-start gap-3.5 ae-bg-paper-dim p-4 rounded-xl border ae-border-line">
                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={22} />
                    <span className="text-slate-800 font-semibold text-sm md:text-base">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* MENTORSHIP & SUPPORT HIGHLIGHT */}
        <div className="ae-card rounded-2xl p-8 md:p-10 mb-16 grid md:grid-cols-2 gap-8 items-center">
          <FadeIn direction="right" delay={0.1}>
            <div>
              <span className="ae-chip mb-3">
                Exclusive Benefit
              </span>
              <h3 className="ae-display text-2xl text-slate-900 mt-3 mb-4">
                Lifetime Mentorship &amp; 24/7 Support
              </h3>
              <p className="ae-text-steel text-sm leading-relaxed mb-4">
                Learning doesn't end when the course finishes. You get continuous lifetime access to our student community and direct mentorship from experienced Amazon sellers to solve your real-world seller account challenges.
              </p>
              <ul className="space-y-2 text-sm font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  Client Acquisition &amp; Outreach Templates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  Real Account Case Studies &amp; Problem Solving
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* COURSE PRICING BOX */}
          <FadeIn direction="left" delay={0.2}>
            <div className="ae-bg-navy rounded-2xl p-8 text-white text-center shadow-lg">
              <h4 className="text-lg font-semibold text-white/80 uppercase tracking-wider mb-2">Enrollment Details</h4>
              <div className="text-4xl font-extrabold ae-text-orange mb-2">10,000 PKR</div>
              <p className="text-white/70 text-sm mb-6">Duration: 2 Months · Lifetime Support</p>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ae-btn-primary font-bold w-full py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-105 inline-flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <MessageCircle size={18} />
                Join Course Now
              </a>
            </div>
          </FadeIn>
        </div>

        {/* BOTTOM CTA */}
        <FadeIn direction="up" delay={0.1}>
          <div className="ae-bg-navy rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="ae-display text-2xl md:text-4xl mb-4 text-white">Ready to Start Your E-Commerce Journey?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base">
              Reserve your seat for the upcoming live batch and take the first step towards building a sustainable online income.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ae-btn-primary font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
            >
              Contact on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}