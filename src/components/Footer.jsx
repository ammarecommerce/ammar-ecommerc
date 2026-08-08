import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "../data/constants";

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */
const Footer = ({ setPage }) => (
  <footer className="ae-bg-navy text-white mt-6">
    <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-6">
      <div>
        <button onClick={() => setPage("home")} className="flex items-center gap-3 mb-4">
          <img
  src="/logo.png"
  alt="Ammar E-Commerce"
  className="w-10 h-10 object-contain"
/>
          <div className="ae-display text-base">AMMAR E-COMMERCE</div>
        </button>
        <p className="text-white/70 text-sm leading-relaxed">
          Amazon growth and US/UK company formation services, built by
          Muhammad Ammar Hassan for entrepreneurs who want to sell globally.
        </p>
      </div>
      {/* SERVICES COLUMN */}
<div>
  <div className="ae-mono text-xs tracking-widest text-white/50 mb-3">SERVICES</div>
  <ul className="space-y-2 text-sm text-white/80">
    <li><button onClick={() => setPage("amazon-course")} className="hover:text-white text-left cursor-pointer">Amazon Seller Course</button></li>
    <li><button onClick={() => setPage("llc")} className="hover:text-white text-left cursor-pointer">LLC Formation (USA)</button></li>
    <li><button onClick={() => setPage("ltd")} className="hover:text-white text-left cursor-pointer">LTD Formation (UK)</button></li>
    <li><button onClick={() => setPage("website-design")} className="hover:text-white text-left cursor-pointer">Website Designing</button></li>
  </ul>
</div>

{/* MORE COLUMN */}
<div>
  <div className="ae-mono text-xs tracking-widest text-white/50 mb-3">MORE</div>
  <ul className="space-y-2 text-sm text-white/80">
    <li><button onClick={() => setPage("itin")} className="hover:text-white text-left cursor-pointer">ITIN Filing</button></li>
    <li><button onClick={() => setPage("tax-filing")} className="hover:text-white text-left cursor-pointer">Tax Return Filing</button></li>
    <li><button onClick={() => setPage("bank-setup")} className="hover:text-white text-left cursor-pointer">Business Bank Setup</button></li>
    <li><button onClick={() => setPage("store-handling")} className="hover:text-white text-left cursor-pointer">Amazon Store Handling</button></li>
  </ul>
</div>
      <div>
        <div className="ae-mono text-xs tracking-widest text-white/50 mb-3">CONTACT</div>
        <ul className="space-y-3 text-sm text-white/80 mb-5">
          <li><a href="https://wa.me/923340607521"  target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Phone size={15}/> +92 334 0607521</a></li>
          <li><a href="mailto:ammarecommerce48@gmail.com " target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Mail size={15}/> ammarecommerce48@gmail.com</a></li>
          <li className="flex items-center gap-2"><MapPin size={15}/> Pakistan (serving worldwide)</li>
        </ul>
        <div className="flex gap-3">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
      © {new Date().getFullYear()} Ammar E-Commerce · Founded | CEO by Muhammad Ammar Hassan · All rights reserved
    </div>
  </footer>
);

export default Footer;
