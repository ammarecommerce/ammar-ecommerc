import React, { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { SectionEyebrow, PageShell, PrimaryButton } from "../components/UI";
import { SERVICES, SOCIAL_LINKS } from "../data/constants";

/* ------------------------------------------------------------------ */
/*  CONTACT PAGE                                                       */
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
      <SectionEyebrow>Get In Touch</SectionEyebrow>
      <h1 className="ae-display text-4xl mb-4">Let's start your business</h1>
      <p className="ae-text-steel max-w-2xl mb-12">
        Tell us a bit about what you're looking for and we'll get back to
        you with next steps.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
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

        <div className="space-y-4">
          <div className="ae-card rounded-xl p-6 flex items-center gap-4">
            <div className="ae-bg-orange text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <MessageCircle size={20}/>
            </div>
            <div>
              <div className="font-bold">WhatsApp</div>
              <a href="https://wa.me/923340607521" target="_blank" rel="noopener noreferrer" className="text-sm ae-text-orange">+92 334 060 7521</a>
            </div>
          </div>
          <div className="ae-card rounded-xl p-6 flex items-center gap-4">
            <div className="ae-bg-navy text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <Phone size={20}/>
            </div>
            <div>
              <div className="font-bold">Call / SMS</div>
              <a href="tel:+923340607521" className="text-sm ae-text-navy">+92 334 060 7521</a>
            </div>
          </div>
          <div className="ae-card rounded-xl p-6 flex items-center gap-4">
            <div className="bg-[var(--ink)] text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <Mail size={20}/>
            </div>
            <div>
              <div className="font-bold">Email</div>
              <a href="mailto:ammarecommerce48@gmail.com" className="text-sm">ammarecommerce48@gmail.com</a>
            </div>
          </div>
          <div className="ae-card rounded-xl p-6 flex items-center gap-4">
            <div className="ae-bg-paper-dim text-[var(--ink)] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <MapPin size={20}/>
            </div>
            <div>
              <div className="font-bold">Based in Pakistan</div>
              <div className="text-sm ae-text-steel">Serving clients worldwide</div>
            </div>
          </div>
          <div className="ae-card rounded-xl p-6">
            <div className="font-bold mb-3">Follow along</div>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full ae-bg-paper-dim flex items-center justify-center hover:bg-[var(--orange-light)]"
                >
                  <s.icon size={17} className="ae-text-navy" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default ContactPage;
