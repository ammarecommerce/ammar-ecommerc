import React, { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { SectionEyebrow, PageShell, PrimaryButton } from "../components/UI";
import { SERVICES, SOCIAL_LINKS } from "../data/constants";
import FadeIn from "../components/FadeIn";

/* ------------------------------------------------------------------ */
/*  CONTACT PAGE                                                      */
/* ------------------------------------------------------------------ */
const ContactPage = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:ammarecommerce48@gmail.com?subject=${encodeURIComponent(
    "Inquiry from " + (name || "website visitor")
  )}&body=${encodeURIComponent(
    `Name: ${name}\nInterested in: ${service}\n\nMessage:\n${message}`
  )}`;

  return (
    <PageShell>
      <FadeIn direction="up" delay={0.1}>
        <SectionEyebrow>Get In Touch</SectionEyebrow>
        <h1 className="ae-display text-4xl mb-4">Let's start your business</h1>
        <p className="ae-text-steel max-w-2xl mb-12">
          Tell us a bit about what you're looking for and we'll get back to
          you with next steps.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Form Column */}
        <FadeIn direction="right" delay={0.2}>
          <div className="ae-card rounded-2xl p-8 space-y-5">
            <div>
              <label className="text-xs font-bold ae-mono tracking-widest ae-text-steel">YOUR NAME</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="mt-2 w-full border ae-border-line rounded-lg px-4 py-3 text-sm outline-none focus:border-[var(--orange)]"
              />
            </div>
            <div>
              <label className="text-xs font-bold ae-mono tracking-widest ae-text-steel">INTERESTED IN</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-2 w-full border ae-border-line rounded-lg px-4 py-3 text-sm outline-none focus:border-[var(--orange)] bg-white"
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold ae-mono tracking-widest ae-text-steel">MESSAGE</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Tell us about your business goals..."
                className="mt-2 w-full border ae-border-line rounded-lg px-4 py-3 text-sm outline-none focus:border-[var(--orange)]"
              />
            </div>
            <PrimaryButton href={mailtoHref} className="w-full justify-center">
              <Mail size={16}/> Send Inquiry
            </PrimaryButton>
          </div>
        </FadeIn>

        {/* Right Info Cards Column */}
        <div className="space-y-4">
          {/* WhatsApp Clickable Card */}
          <FadeIn direction="up" delay={0.2}>
            <a 
              href="https://wa.me/923340607521" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ae-card rounded-xl p-6 flex items-center gap-4 cursor-pointer block no-underline transition-all duration-300 hover:border-[var(--orange)] hover:shadow-lg hover:-translate-y-1"
            >
              <div className="ae-bg-orange text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle size={20}/>
              </div>
              <div>
                <div className="font-bold text-slate-900">WhatsApp</div>
                <span className="text-sm ae-text-orange font-semibold">+92 334 060 7521</span>
              </div>
            </a>
          </FadeIn>

          {/* Call / SMS Clickable Card */}
          <FadeIn direction="up" delay={0.3}>
            <a 
              href="tel:+923340607521" 
              className="ae-card rounded-xl p-6 flex items-center gap-4 cursor-pointer block no-underline transition-all duration-300 hover:border-[var(--navy)] hover:shadow-lg hover:-translate-y-1"
            >
              <div className="ae-bg-navy text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <Phone size={20}/>
              </div>
              <div>
                <div className="font-bold text-slate-900">Call / SMS</div>
                <span className="text-sm ae-text-navy font-semibold">+92 334 060 7521</span>
              </div>
            </a>
          </FadeIn>

          {/* Email Clickable Card */}
          <FadeIn direction="up" delay={0.4}>
            <a 
              href="mailto:ammarecommerce48@gmail.com" 
              className="ae-card rounded-xl p-6 flex items-center gap-4 cursor-pointer block no-underline transition-all duration-300 hover:border-slate-800 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="bg-[var(--ink)] text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <Mail size={20}/>
              </div>
              <div>
                <div className="font-bold text-slate-900">Email</div>
                <span className="text-sm text-slate-700">ammarecommerce48@gmail.com</span>
              </div>
            </a>
          </FadeIn>

          {/* Location Card */}
          <FadeIn direction="up" delay={0.5}>
            <div className="ae-card rounded-xl p-6 flex items-center gap-4">
              <div className="ae-bg-paper-dim text-[var(--ink)] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={20}/>
              </div>
              <div>
                <div className="font-bold text-slate-900">Based in Pakistan</div>
                <div className="text-sm ae-text-steel">Serving clients worldwide</div>
              </div>
            </div>
          </FadeIn>

          {/* Social Links Card */}
          <FadeIn direction="up" delay={0.6}>
            <div className="ae-card rounded-xl p-6">
              <div className="font-bold mb-3 text-slate-900">Follow along</div>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full ae-bg-paper-dim flex items-center justify-center hover:bg-[var(--orange-light)] transition-colors duration-300"
                  >
                    <s.icon size={17} className="ae-text-navy" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageShell>
  );
};

export default ContactPage;