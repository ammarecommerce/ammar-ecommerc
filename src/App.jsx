import React, { useState, useEffect } from "react";
import {
  Rocket, Building2, Globe, FileText, Landmark, CreditCard,
  ShoppingCart, Store, ClipboardCheck, CheckCircle2, ArrowRight,
  Phone, Mail, MapPin, Menu, X, ShieldCheck, Clock, Sparkles,
  GraduationCap, Award, ChevronRight, MessageCircle, Star, Quote,
  ChevronDown, TrendingUp
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  BRAND TOKENS — sampled from the Ammar E-Commerce logo             */
/* ------------------------------------------------------------------ */
const BrandStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500;600&display=swap');

    :root{
      --ink:#17181C;
      --orange:#E85C2B;
      --orange-dark:#C0461C;
      --orange-light:#FCE7DA;
      --navy:#1F3A5C;
      --navy-light:#2E5580;
      --navy-pale:#E7ECF2;
      --paper:#FBF9F5;
      --paper-dim:#F2EEE5;
      --steel:#68676B;
      --line:#E5DFD2;
    }
    .ae-root{
      background:var(--paper);
      color:var(--ink);
      font-family:'Inter',sans-serif;
      min-height:100vh;
      -webkit-font-smoothing:antialiased;
    }
    .ae-display{
      font-family:'Archivo Black',sans-serif;
      letter-spacing:-0.01em;
      line-height:1.02;
    }
    .ae-mono{ font-family:'IBM Plex Mono',monospace; }

    .ae-bg-navy{ background:var(--navy); }
    .ae-bg-orange{ background:var(--orange); }
    .ae-bg-paper-dim{ background:var(--paper-dim); }
    .ae-text-orange{ color:var(--orange); }
    .ae-text-navy{ color:var(--navy); }
    .ae-text-steel{ color:var(--steel); }
    .ae-border-line{ border-color:var(--line); }

    .ae-btn-primary{
      background:var(--orange);
      color:#fff;
      transition:transform .15s ease, background .15s ease;
    }
    .ae-btn-primary:hover{ background:var(--orange-dark); transform:translateY(-2px); }

    .ae-btn-navy{
      background:var(--navy);
      color:#fff;
      transition:transform .15s ease, background .15s ease;
    }
    .ae-btn-navy:hover{ background:var(--navy-light); transform:translateY(-2px); }

    .ae-btn-outline{
      border:2px solid var(--ink);
      color:var(--ink);
      background:transparent;
      transition:all .15s ease;
    }
    .ae-btn-outline:hover{ background:var(--ink); color:#fff; }

    .ae-tab{
      position:relative;
      font-weight:700;
      color:var(--steel);
      transition:color .15s ease;
    }
    .ae-tab:hover{ color:var(--ink); }
    .ae-tab.active{ color:var(--ink); }
    .ae-tab.active::after{
      content:"";
      position:absolute;
      left:0; right:0; bottom:-13px;
      height:3px;
      background:var(--orange);
      border-radius:2px;
    }

    .ae-card{
      background:#fff;
      border:1px solid var(--line);
      transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    }
    .ae-card:hover{
      transform:translateY(-4px);
      box-shadow:0 18px 40px rgba(23,24,28,0.08);
      border-color:var(--orange);
    }

    .ae-chip{
      display:inline-flex;
      align-items:center;
      gap:6px;
      font-family:'IBM Plex Mono',monospace;
      font-size:11px;
      letter-spacing:0.08em;
      text-transform:uppercase;
      color:var(--orange-dark);
      background:var(--orange-light);
      padding:4px 10px;
      border-radius:999px;
    }

    .ae-stamp{
      border:2px dashed var(--navy);
      border-radius:999px;
      color:var(--navy);
    }

    .ae-fade-in{ animation:aeFadeIn .5s ease both; }
    @keyframes aeFadeIn{
      from{ opacity:0; transform:translateY(10px); }
      to{ opacity:1; transform:translateY(0); }
    }

    @media (prefers-reduced-motion: reduce){
      .ae-fade-in{ animation:none; }
      .ae-card:hover, .ae-btn-primary:hover, .ae-btn-navy:hover{ transform:none; }
    }

    .ae-scrollbar::-webkit-scrollbar{ height:6px; width:6px; }
    .ae-scrollbar::-webkit-scrollbar-thumb{ background:var(--line); border-radius:4px; }
  `}</style>
);

/* ------------------------------------------------------------------ */
/*  LOGO MARK (recreated in SVG so the file has no external image     */
/*  dependency — swap for your hosted logo file any time)             */
/* ------------------------------------------------------------------ */
const LogoMark = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 8 L54 8 L80 62 L64 62 Z" fill="#17181C"/>
    <path d="M30 8 L46 8 L18 92 L2 92 L2 78 Z" fill="var(--orange)"/>
    <path d="M46 8 L62 8 L84 54 L60 54 L60 40 L52 40 Z" fill="var(--orange)"/>
    <path d="M34 40 L50 40 L74 88 L20 88 L20 74 L46 74 Z" fill="var(--navy)"/>
  </svg>
);

/* Simple custom social icons — added because newer lucide-react
   versions no longer ship brand/logo icons. */
const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
  </svg>
);
const FacebookIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14 9h2.5V6h-2.5c-2.2 0-3.5 1.4-3.5 3.5V12H8v3h2.5v6h3v-6h2.3l.7-3h-3V9.8c0-.5.3-.8.8-.8Z" fill="currentColor"/>
  </svg>
);
const YoutubeIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="6" width="20" height="12" rx="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor"/>
  </svg>
);

/* Placeholder for the founder's photo.
   Replace with: <img src="/founder.jpeg" alt="Muhammad Ammar Hassan" className="w-full h-full object-cover" />
   once you add your photo file to the project's /public folder. */
const FounderPhoto = ({ className = "" }) => (
  <img
    src="/FounderPhoto.jpeg"
    alt="Muhammad Ammar Hassan"
    className={`w-full h-full object-cover rounded-2xl ${className}`}
  />
);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "llc", label: "LLC Package" },
  { id: "ltd", label: "LTD Package" },
  { id: "contact", label: "Contact" },
];

const SERVICES = [
  { icon: GraduationCap, title: "Amazon Seller Course", desc: "Step-by-step training on Amazon FBA, private label and dropshipping — from product research to your first sale." },
  { icon: Building2, title: "LLC Formation (USA)", desc: "Full setup of your US Limited Liability Company in any state, done for you from start to finish." },
  { icon: Globe, title: "LTD Formation (UK)", desc: "Register your UK Limited company with Companies House, registered office included." },
  { icon: FileText, title: "Website Designing", desc: "Modern, conversion-ready websites for your brand or e-commerce store, built to match your business." },
  { icon: ClipboardCheck, title: "ITIN Filing", desc: "Complete assistance applying for your Individual Taxpayer Identification Number with the IRS." },
  { icon: Landmark, title: "Tax Return Filing", desc: "Federal and state tax return preparation for LLC owners — annual filings handled correctly and on time." },
  { icon: CreditCard, title: "Business Bank Account Setup", desc: "Guided setup of a US business bank account for your LLC, matched to your situation." },
  { icon: ShoppingCart, title: "Amazon Account Creation", desc: "New Amazon seller account setup and verification, done right the first time." },
  { icon: Store, title: "Amazon Store Handling", desc: "Ongoing account management — listings, PPC, inventory and customer service, fully managed." },
];

const LLC_PACKAGES = [
  {
    name: "Starter",
    tagline: "Get your LLC legally formed",
    price: "$199",
    priceNote: "+ state filing fee",
    features: [
      "State filing (Articles of Organization)",
      "EIN (Employer Identification Number)",
      "Registered agent — 1 year included",
      "Operating agreement drafted",
      "Company formation documents (PDF)",
    ],
  },
  {
    name: "Growth",
    tagline: "Formed, banked and ready to sell",
    price: "$399",
    priceNote: "+ state filing fee",
    highlighted: true,
    features: [
      "Everything in Starter",
      "ITIN filing assistance",
      "Business bank account setup guidance",
      "Amazon seller account setup guidance",
      "Priority support during setup",
    ],
  },
  {
    name: "Complete Business Suite",
    tagline: "Formed, compliant and growing",
    price: "$699",
    priceNote: "+ state filing fee",
    features: [
      "Everything in Growth",
      "First-year federal tax return filing",
      "Annual compliance reminders",
      "Discounted website design add-on",
      "Dedicated account manager",
    ],
  },
];

const LTD_PACKAGES = [
  {
    name: "Starter",
    tagline: "Your UK company, legally registered",
    price: "£149",
    priceNote: "+ Companies House fee",
    features: [
      "Companies House registration",
      "Registered office address — 1 year",
      "Certificate of incorporation",
      "Memorandum & articles of association",
      "Digital company documents",
    ],
  },
  {
    name: "Growth",
    tagline: "Registered and trading-ready",
    price: "£299",
    priceNote: "+ Companies House fee",
    highlighted: true,
    features: [
      "Everything in Starter",
      "UK business bank account guidance",
      "VAT registration assistance (optional)",
      "Amazon UK/EU seller account guidance",
      "Priority support during setup",
    ],
  },
  {
    name: "Complete Business Suite",
    tagline: "Registered, compliant and growing",
    price: "£549",
    priceNote: "+ Companies House fee",
    features: [
      "Everything in Growth",
      "First-year confirmation statement filing",
      "Annual compliance reminders",
      "Discounted website design add-on",
      "Dedicated account manager",
    ],
  },
];

const STATES = [
  { state: "Wyoming", fee: "$100", annual: "$60/yr (min. license tax)", privacy: "Strong", bestFor: "Privacy, asset protection, non-residents", speed: "Instant online / up to 15 days by mail" },
  { state: "Delaware", fee: "$90", annual: "$300/yr flat franchise tax", privacy: "Good", bestFor: "Startups seeking investors, credibility", speed: "Same/next-day expedited available" },
  { state: "New Mexico", fee: "$50", annual: "$0 — no annual report", privacy: "Strongest", bestFor: "Lowest long-term cost, maximum privacy", speed: "1–3 business days online" },
  { state: "Florida", fee: "$125", annual: "$138.75/yr annual report", privacy: "Moderate", bestFor: "Businesses physically operating in Florida", speed: "~5 business days online" },
  { state: "Texas", fee: "$300", annual: "$0 due if under revenue threshold*", privacy: "Moderate", bestFor: "Businesses operating in Texas", speed: "2–5 business days online" },
];

/* Sample placeholder content — swap these for your real client
   testimonials, real success numbers and real FAQs before publishing. */
const TESTIMONIALS = [
  { name: "Client Name", role: "Amazon FBA Seller, Lahore", quote: "Sample testimonial — replace with a real client quote about their experience getting their LLC formed and store launched." },
  { name: "Client Name", role: "Private Label Seller, Karachi", quote: "Sample testimonial — replace with a real client quote about the support they received during ITIN and tax filing." },
  { name: "Client Name", role: "Dropshipper, Islamabad", quote: "Sample testimonial — replace with a real client quote about how their Amazon store is being managed." },
];

const CASE_STUDIES = [
  {
    title: "From idea to registered business",
    before: "No US company, no EIN, unsure which state to choose",
    after: "Wyoming LLC formed, EIN issued, bank account opened within weeks",
  },
  {
    title: "From registered LLC to active seller",
    before: "LLC formed but no Amazon account or ITIN",
    after: "ITIN approved, Amazon seller account verified, first listings live",
  },
  {
    title: "From solo seller to managed store",
    before: "Store running but no time for listings, PPC or customer service",
    after: "Full store handling in place, consistent restocks and ad management",
  },
];

const FAQS = [
  { q: "How long does LLC formation actually take?", a: "It depends on the state. New Mexico and Wyoming can be same-day to a few business days online; other states may take up to two weeks depending on their processing queue." },
  { q: "Do I need to visit the US to form an LLC?", a: "No. The entire process — filing, EIN, registered agent and bank account guidance — can be completed remotely from Pakistan." },
  { q: "Which state should I choose for my LLC?", a: "It depends on your goals — Wyoming and New Mexico are popular for privacy and low ongoing cost, while Florida or Texas make sense if you plan to operate physically in that state. We'll help you decide based on your business." },
  { q: "Do you help with taxes after the company is formed?", a: "Yes — our packages include ITIN filing assistance and federal tax return preparation so your LLC stays compliant every year." },
  { q: "Can I start Amazon selling without a US Social Security Number?", a: "Yes. Many of our clients start with an ITIN instead of an SSN — we guide you through that process as part of the LLC packages." },
  { q: "What's the difference between the LLC and LTD packages?", a: "LLC is for a US company (any state); LTD is for a UK Limited company registered with Companies House. Choose based on where you want your business legally based." },
];

const SOCIAL_LINKS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/ammarecommerce" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/ammarecommerce" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com/@ammarecommerce" },
];

/* ------------------------------------------------------------------ */
/*  SHARED UI BITS                                                     */
/* ------------------------------------------------------------------ */
const SectionEyebrow = ({ children }) => (
  <div className="ae-chip mb-4">{children}</div>
);

const PageShell = ({ children }) => (
  <div className="ae-fade-in max-w-6xl mx-auto px-6 py-16">{children}</div>
);

const PrimaryButton = ({ children, onClick, href, className = "" }) => {
  const Cmp = href ? "a" : "button";
  return (
    <Cmp
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`ae-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm ${className}`}
    >
      {children}
    </Cmp>
  );
};

const OutlineButton = ({ children, onClick, href, className = "" }) => {
  const Cmp = href ? "a" : "button";
  return (
    <Cmp
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`ae-btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm ${className}`}
    >
      {children}
    </Cmp>
  );
};

/* ------------------------------------------------------------------ */
/*  NAVIGATION                                                         */
/* ------------------------------------------------------------------ */
const NavBar = ({ page, setPage }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b ae-border-line">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => { setPage("home"); setOpen(false); }}
          className="flex items-center gap-3"
        >
          <button
  onClick={() => {
    setPage("home");
    setOpen(false);
  }}
  className="flex items-center"
>
  <img
    src="/logo.png"
    alt="Ammar E-Commerce"
    className="h-14 w-auto object-contain"
  />
</button>
          <div className="text-left leading-none">
            <div className="ae-display text-lg">AMMAR</div>
            <div className="ae-mono text-[10px] tracking-widest ae-text-orange">E-COMMERCE</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`ae-tab text-sm ${page === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton onClick={() => setPage("contact")}>
            Book a Call <ArrowRight size={16} />
          </PrimaryButton>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t ae-border-line bg-white px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { setPage(item.id); setOpen(false); }}
              className={`text-left text-sm font-bold ${page === item.id ? "ae-text-orange" : "ae-text-steel"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */
const Footer = ({ setPage }) => (
  <footer className="ae-bg-navy text-white mt-24">
    <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
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
      <div>
        <div className="ae-mono text-xs tracking-widest text-white/50 mb-3">SERVICES</div>
        <ul className="space-y-2 text-sm text-white/80">
          <li><button onClick={() => setPage("services")} className="hover:text-white text-left">Amazon Seller Course</button></li>
          <li><button onClick={() => setPage("llc")} className="hover:text-white text-left">LLC Formation (USA)</button></li>
          <li><button onClick={() => setPage("ltd")} className="hover:text-white text-left">LTD Formation (UK)</button></li>
          <li><button onClick={() => setPage("services")} className="hover:text-white text-left">Website Designing</button></li>
        </ul>
      </div>
      <div>
        <div className="ae-mono text-xs tracking-widest text-white/50 mb-3">MORE</div>
        <ul className="space-y-2 text-sm text-white/80">
          <li><button onClick={() => setPage("services")} className="hover:text-white text-left">ITIN Filing</button></li>
          <li><button onClick={() => setPage("services")} className="hover:text-white text-left">Tax Return Filing</button></li>
          <li><button onClick={() => setPage("services")} className="hover:text-white text-left">Business Bank Setup</button></li>
          <li><button onClick={() => setPage("services")} className="hover:text-white text-left">Amazon Store Handling</button></li>
        </ul>
      </div>
      <div>
        <div className="ae-mono text-xs tracking-widest text-white/50 mb-3">CONTACT</div>
        <ul className="space-y-3 text-sm text-white/80 mb-5">
          <li><a href="tel:+923XXXXXXXXX" className="flex items-center gap-2 hover:text-white"><Phone size={15}/> +92 3XX XXXXXXX</a></li>
          <li><a href="mailto:info@ammarecommerce.com" className="flex items-center gap-2 hover:text-white"><Mail size={15}/> info@ammarecommerce.com</a></li>
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
      © {new Date().getFullYear()} Ammar E-Commerce · Founded by Muhammad Ammar Hassan · All rights reserved
    </div>
  </footer>
);

/* ------------------------------------------------------------------ */
/*  HOME PAGE                                                          */
/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/*  FAQ ACCORDION ITEM                                                 */
/* ------------------------------------------------------------------ */
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="ae-card rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-bold text-sm md:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`ae-text-orange shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm ae-text-steel leading-relaxed">{a}</div>
      )}
    </div>
  );
};

const HomePage = ({ setPage }) => (
  <PageShell>
    {/* HERO */}
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <SectionEyebrow><Sparkles size={12}/> Amazon &amp; Company Formation Experts</SectionEyebrow>
        <h1 className="ae-display text-4xl md:text-6xl mb-6">
          Build your <span className="ae-text-orange">Amazon business</span> and register your <span className="ae-text-navy">US or UK company</span> — the right way.
        </h1>
        <p className="text-lg ae-text-steel mb-8 max-w-xl">
          Ammar E-Commerce helps entrepreneurs launch on Amazon and set up
          fully compliant LLC or LTD companies — formation, tax, banking and
          store management, handled by one team.
        </p>
        <div className="flex flex-wrap gap-4">
          <PrimaryButton onClick={() => setPage("contact")}>
            Start Your Company <ArrowRight size={16} />
          </PrimaryButton>
          <OutlineButton onClick={() => setPage("services")}>
            View All Services
          </OutlineButton>
        </div>
        <div className="flex gap-8 mt-10">
          <div>
            <div className="ae-display text-2xl ae-text-orange">50+</div>
            <div className="text-xs ae-text-steel">Businesses formed</div>
          </div>
          <div>
            <div className="ae-display text-2xl ae-text-orange">2</div>
            <div className="text-xs ae-text-steel">Countries — US &amp; UK</div>
          </div>
          <div>
            <div className="ae-display text-2xl ae-text-orange">1:1</div>
            <div className="text-xs ae-text-steel">Dedicated support</div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="ae-card rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="ae-mono text-xs tracking-widest ae-text-steel">FORMATION CHECKLIST</span>
            <ShieldCheck className="ae-text-navy" size={20}/>
          </div>
          {[
            "Choose your state or country",
            "File formation documents",
            "Get your EIN / company number",
            "Open a business bank account",
            "Launch your Amazon store",
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3 py-3 border-b ae-border-line last:border-0">
              <div className="ae-bg-orange text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                {i + 1}
              </div>
              <span className="text-sm">{step}</span>
            </div>
          ))}
        </div>
        <div className="ae-stamp absolute -bottom-6 -right-6 w-28 h-28 rounded-full hidden md:flex items-center justify-center text-center p-3 bg-white">
          <span className="ae-mono text-[10px] leading-tight font-semibold">DONE-FOR-YOU FORMATION</span>
        </div>
      </div>
    </section>

    {/* FOUNDER INTRO */}
    <section className="mt-28 grid md:grid-cols-2 gap-12 items-center">
      <FounderPhoto className="w-full aspect-square md:aspect-[4/5] order-2 md:order-1" />
      <div className="order-1 md:order-2">
        <SectionEyebrow>Meet the Founder</SectionEyebrow>
        <h2 className="ae-display text-3xl md:text-4xl mb-5">Hi, I'm Muhammad Ammar Hassan.</h2>
        <p className="ae-text-steel leading-relaxed mb-4">
          I started Ammar E-Commerce because I saw how many entrepreneurs
          in Pakistan wanted to sell on Amazon and build a real international
          business, but got stuck on the paperwork — which state to pick,
          how to get an EIN, how to open a bank account without a US address.
        </p>
        <p className="ae-text-steel leading-relaxed mb-6">
          I built this company to be the team that walks you through all of
          it personally — from your first Amazon lesson to a fully
          registered, compliant LLC or LTD and a store that actually runs.
          Every client works directly with me and my team, start to finish.
        </p>
        <div className="flex items-center gap-4">
          <div className="ae-display text-lg">Muhammad Ammar Hassan</div>
          <span className="ae-text-steel text-sm">— Founder, Ammar E-Commerce</span>
        </div>
      </div>
    </section>

    {/* SERVICES PREVIEW */}
    <section className="mt-28">
      <SectionEyebrow>What We Do</SectionEyebrow>
      <h2 className="ae-display text-3xl mb-10">Everything to launch and run your business</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {SERVICES.slice(0, 6).map((s, i) => (
          <div key={i} className="ae-card rounded-xl p-6">
            <s.icon className="ae-text-orange mb-4" size={26} />
            <div className="font-bold mb-1">{s.title}</div>
            <p className="text-sm ae-text-steel">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <OutlineButton onClick={() => setPage("services")}>
          See all 9 services <ChevronRight size={16}/>
        </OutlineButton>
      </div>
    </section>

    {/* PACKAGES TEASER */}
    <section className="mt-28 ae-bg-navy rounded-2xl p-10 md:p-14 text-white grid md:grid-cols-2 gap-10 items-center">
      <div>
        <SectionEyebrow>Company Formation</SectionEyebrow>
        <h2 className="ae-display text-3xl mb-4">LLC or LTD — packaged and priced clearly</h2>
        <p className="text-white/75 mb-6">
          Compare our US LLC and UK LTD packages, see exactly what's included,
          and pick the state that fits your business.
        </p>
        <div className="flex flex-wrap gap-4">
          <PrimaryButton onClick={() => setPage("llc")}>LLC Packages</PrimaryButton>
          <OutlineButton onClick={() => setPage("ltd")} className="!border-white !text-white hover:!bg-white hover:!text-[var(--navy)]">
            LTD Packages
          </OutlineButton>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {["Wyoming", "Delaware", "New Mexico", "Florida", "Texas", "UK"].map((s) => (
          <div key={s} className="bg-white/10 rounded-lg py-4 text-center font-bold text-sm">
            {s}
          </div>
        ))}
      </div>
    </section>

    {/* CASE STUDIES */}
    <section className="mt-28">
      <SectionEyebrow><TrendingUp size={12}/> Success Stories</SectionEyebrow>
      <h2 className="ae-display text-3xl mb-3">From paperwork to a running business</h2>
      <p className="ae-text-steel max-w-2xl mb-10">
        A few examples of how clients move from "just an idea" to a
        registered, selling business. (Sample stories shown — swap these
        for your own clients' real results.)
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {CASE_STUDIES.map((c, i) => (
          <div key={i} className="ae-card rounded-xl p-6">
            <div className="font-bold mb-4">{c.title}</div>
            <div className="mb-3">
              <div className="ae-mono text-[10px] tracking-widest ae-text-steel mb-1">BEFORE</div>
              <p className="text-sm">{c.before}</p>
            </div>
            <div className="flex justify-center my-3 ae-text-orange">
              <ArrowRight size={16} className="rotate-90"/>
            </div>
            <div>
              <div className="ae-mono text-[10px] tracking-widest ae-text-orange mb-1">AFTER</div>
              <p className="text-sm font-medium">{c.after}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="mt-28">
      <SectionEyebrow><Star size={12}/> Client Feedback</SectionEyebrow>
      <h2 className="ae-display text-3xl mb-3">What clients say</h2>
      <p className="ae-text-steel max-w-2xl mb-10">
        Sample testimonials shown below — replace with real quotes from
        your own clients before publishing.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="ae-card rounded-xl p-6 flex flex-col">
            <Quote className="ae-text-orange mb-3" size={24} />
            <p className="text-sm ae-text-steel leading-relaxed flex-1 mb-5">{t.quote}</p>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, s) => <Star key={s} size={14} className="ae-text-orange" fill="currentColor" />)}
            </div>
            <div className="font-bold text-sm">{t.name}</div>
            <div className="text-xs ae-text-steel">{t.role}</div>
          </div>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="mt-28">
      <SectionEyebrow>Common Questions</SectionEyebrow>
      <h2 className="ae-display text-3xl mb-10">Frequently asked questions</h2>
      <div className="space-y-4 max-w-3xl">
        {FAQS.map((f, i) => (
          <FAQItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  </PageShell>
);

/* ------------------------------------------------------------------ */
/*  ABOUT PAGE                                                         */
/* ------------------------------------------------------------------ */
const AboutPage = () => (
  <PageShell>
    <SectionEyebrow>About Us</SectionEyebrow>
    <div className="grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
        <h1 className="ae-display text-4xl mb-6">Muhammad Ammar Hassan</h1>
        <p className="text-lg ae-text-steel mb-4">
          Founder, Ammar E-Commerce
        </p>
        <p className="ae-text-steel leading-relaxed mb-4">
          Ammar E-Commerce was built on a simple idea: entrepreneurs
          shouldn't need a law degree or a US address to start a real,
          compliant international business. Muhammad Ammar Hassan started
          this company to guide sellers through every step of building an
          Amazon business — from company formation and tax paperwork to
          the store itself.
        </p>
        <p className="ae-text-steel leading-relaxed mb-4">
          What began as help for a handful of friends starting their Amazon
          journey has grown into a full-service team covering LLC and LTD
          formation, ITIN and tax filing, banking setup, website design,
          and hands-on Amazon store management.
        </p>
        <p className="ae-text-steel leading-relaxed">
          Every client works directly with the team — no call centers, no
          generic templates. Just a clear plan for your business, and
          someone who follows through until it's done.
        </p>
      </div>
      <div className="space-y-4">
        <div className="ae-card rounded-xl p-6">
          <Award className="ae-text-orange mb-3" size={24}/>
          <div className="font-bold mb-1">Hands-on approach</div>
          <p className="text-sm ae-text-steel">Every formation and every store is set up personally, not automated.</p>
        </div>
        <div className="ae-card rounded-xl p-6">
          <Clock className="ae-text-orange mb-3" size={24}/>
          <div className="font-bold mb-1">Clear timelines</div>
          <p className="text-sm ae-text-steel">You'll always know what stage your business or filing is at.</p>
        </div>
        <div className="ae-card rounded-xl p-6">
          <ShieldCheck className="ae-text-orange mb-3" size={24}/>
          <div className="font-bold mb-1">Compliance first</div>
          <p className="text-sm ae-text-steel">Formation, tax and banking done correctly from day one.</p>
        </div>
      </div>
    </div>
  </PageShell>
);

/* ------------------------------------------------------------------ */
/*  SERVICES PAGE                                                      */
/* ------------------------------------------------------------------ */
const ServicesPage = ({ setPage }) => (
  <PageShell>
    <SectionEyebrow>Our Services</SectionEyebrow>
    <h1 className="ae-display text-4xl mb-4">One team, every step of your business</h1>
    <p className="ae-text-steel max-w-2xl mb-12">
      From learning how Amazon works to registering your company and
      running your store day to day — pick what you need, or let us handle
      all of it.
    </p>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {SERVICES.map((s, i) => (
        <div key={i} className="ae-card rounded-xl p-7">
          <s.icon className="ae-text-orange mb-4" size={28} />
          <div className="font-bold text-lg mb-2">{s.title}</div>
          <p className="text-sm ae-text-steel leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>

    <div className="mt-16 ae-bg-paper-dim rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <div className="font-bold text-xl mb-1">Not sure what you need?</div>
        <p className="ae-text-steel text-sm">Tell us your goal — we'll recommend the right service or package.</p>
      </div>
      <PrimaryButton onClick={() => setPage("contact")}>Talk to Us <ArrowRight size={16}/></PrimaryButton>
    </div>
  </PageShell>
);

/* ------------------------------------------------------------------ */
/*  PACKAGE CARD (shared by LLC + LTD pages)                          */
/* ------------------------------------------------------------------ */
const PackageCard = ({ pkg, setPage }) => (
  <div
    className={`rounded-2xl p-8 flex flex-col ${
      pkg.highlighted
        ? "ae-bg-navy text-white shadow-2xl md:-translate-y-3"
        : "ae-card"
    }`}
  >
    {pkg.highlighted && (
      <div className="ae-chip mb-4 !bg-white/15 !text-white w-fit">Most Popular</div>
    )}
    <div className="font-bold text-xl mb-1">{pkg.name}</div>
    <p className={`text-sm mb-6 ${pkg.highlighted ? "text-white/70" : "ae-text-steel"}`}>{pkg.tagline}</p>
    <div className="mb-6">
      <span className="ae-display text-3xl">{pkg.price}</span>
      <span className={`text-xs ml-2 ${pkg.highlighted ? "text-white/60" : "ae-text-steel"}`}>{pkg.priceNote}</span>
    </div>
    <div className="flex-1 space-y-3 mb-8">
      {pkg.features.map((f, i) => (
        <div key={i} className="flex items-start gap-2 text-sm">
          <CheckCircle2 size={17} className={pkg.highlighted ? "text-orange-300 shrink-0 mt-0.5" : "ae-text-orange shrink-0 mt-0.5"} />
          <span>{f}</span>
        </div>
      ))}
    </div>
    <button
      onClick={() => setPage("contact")}
      className={`w-full py-3 rounded-full font-bold text-sm ${
        pkg.highlighted ? "bg-white text-[var(--navy)]" : "ae-btn-primary"
      }`}
    >
      Get Started
    </button>
  </div>
);

/* ------------------------------------------------------------------ */
/*  LLC PAGE                                                           */
/* ------------------------------------------------------------------ */
const LLCPage = ({ setPage }) => (
  <PageShell>
    <SectionEyebrow>US Company Formation</SectionEyebrow>
    <h1 className="ae-display text-4xl mb-4">LLC Formation Packages</h1>
    <p className="ae-text-steel max-w-2xl mb-12">
      Three packages covering formation, banking and ongoing compliance.
      The state filing fee is paid directly to the state and is separate
      from our service price — see the state comparison below.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mb-20">
      {LLC_PACKAGES.map((pkg, i) => (
        <PackageCard key={i} pkg={pkg} setPage={setPage} />
      ))}
    </div>

    <SectionEyebrow>Choosing a State</SectionEyebrow>
    <h2 className="ae-display text-3xl mb-4">LLC filing fees &amp; process by state</h2>
    <p className="ae-text-steel max-w-2xl mb-8">
      We form LLCs in any US state — these five are the most requested by
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
            <tr key={i} className="border-t ae-border-line">
              <td className="p-4 font-bold ae-text-navy">{s.state}</td>
              <td className="p-4 ae-mono">{s.fee}</td>
              <td className="p-4 ae-mono">{s.annual}</td>
              <td className="p-4">{s.privacy}</td>
              <td className="p-4 ae-text-steel">{s.bestFor}</td>
              <td className="p-4 ae-text-steel">{s.speed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-xs ae-text-steel mt-3">
      *Texas requires an annual Franchise Tax Report even when $0 is owed;
      no tax is due below the state's annual revenue threshold. State fees
      shown are subject to change — we verify current pricing before every filing.
    </p>

    <div className="mt-14 grid md:grid-cols-3 gap-6">
      <div className="ae-card rounded-xl p-6">
        <div className="font-bold mb-2">What is an EIN?</div>
        <p className="text-sm ae-text-steel">Your LLC's federal tax ID from the IRS — needed to open a bank account, file taxes, and register as an Amazon seller.</p>
      </div>
      <div className="ae-card rounded-xl p-6">
        <div className="font-bold mb-2">What is a Registered Agent?</div>
        <p className="text-sm ae-text-steel">A person or service with a physical address in your formation state that receives legal and state mail on your LLC's behalf.</p>
      </div>
      <div className="ae-card rounded-xl p-6">
        <div className="font-bold mb-2">Do I need an ITIN?</div>
        <p className="text-sm ae-text-steel">If you don't have a US Social Security Number, an ITIN lets you file US taxes and is often required for banking.</p>
      </div>
    </div>
  </PageShell>
);

/* ------------------------------------------------------------------ */
/*  LTD PAGE                                                           */
/* ------------------------------------------------------------------ */
const LTDPage = ({ setPage }) => (
  <PageShell>
    <SectionEyebrow>UK Company Formation</SectionEyebrow>
    <h1 className="ae-display text-4xl mb-4">LTD Formation Packages</h1>
    <p className="ae-text-steel max-w-2xl mb-12">
      Register your UK Limited company with Companies House. Our packages
      cover registration, registered office and ongoing compliance support.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {LTD_PACKAGES.map((pkg, i) => (
        <PackageCard key={i} pkg={pkg} setPage={setPage} />
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="ae-card rounded-xl p-8">
        <div className="font-bold text-lg mb-3">What's included in every LTD package</div>
        <ul className="space-y-2 text-sm ae-text-steel">
          <li className="flex gap-2"><CheckCircle2 size={16} className="ae-text-orange shrink-0 mt-0.5"/> Companies House registration &amp; company number</li>
          <li className="flex gap-2"><CheckCircle2 size={16} className="ae-text-orange shrink-0 mt-0.5"/> Registered office address</li>
          <li className="flex gap-2"><CheckCircle2 size={16} className="ae-text-orange shrink-0 mt-0.5"/> Certificate of incorporation &amp; company documents</li>
          <li className="flex gap-2"><CheckCircle2 size={16} className="ae-text-orange shrink-0 mt-0.5"/> Guidance on director &amp; shareholder setup</li>
        </ul>
      </div>
      <div className="ae-card rounded-xl p-8">
        <div className="font-bold text-lg mb-3">Good to know</div>
        <p className="text-sm ae-text-steel mb-3">
          Companies House charges its own registration fee separately from
          our service price, and yearly confirmation statement fees apply
          to keep your company active.
        </p>
        <p className="text-sm ae-text-steel">
          We'll confirm current government fees with you before filing, and
          let you know exactly what's due and when.
        </p>
      </div>
    </div>
  </PageShell>
);

/* ------------------------------------------------------------------ */
/*  CONTACT PAGE                                                       */
/* ------------------------------------------------------------------ */
const ContactPage = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:info@ammarecommerce.com?subject=${encodeURIComponent(
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
              <a href="https://wa.me/923XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-sm ae-text-orange">+92 3XX XXXXXXX</a>
            </div>
          </div>
          <div className="ae-card rounded-xl p-6 flex items-center gap-4">
            <div className="ae-bg-navy text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <Phone size={20}/>
            </div>
            <div>
              <div className="font-bold">Call / SMS</div>
              <a href="tel:+923XXXXXXXXX" className="text-sm ae-text-navy">+92 3XX XXXXXXX</a>
            </div>
          </div>
          <div className="ae-card rounded-xl p-6 flex items-center gap-4">
            <div className="bg-[var(--ink)] text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <Mail size={20}/>
            </div>
            <div>
              <div className="font-bold">Email</div>
              <a href="mailto:info@ammarecommerce.com" className="text-sm">info@ammarecommerce.com</a>
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

/* ------------------------------------------------------------------ */
/*  APP ROOT                                                           */
/* ------------------------------------------------------------------ */
export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const pages = {
    home: <HomePage setPage={setPage} />,
    about: <AboutPage />,
    services: <ServicesPage setPage={setPage} />,
    llc: <LLCPage setPage={setPage} />,
    ltd: <LTDPage setPage={setPage} />,
    contact: <ContactPage />,
  };

  return (
    <div className="ae-root">
      <BrandStyles />
      <NavBar page={page} setPage={setPage} />
      <main key={page}>{pages[page]}</main>
      <Footer setPage={setPage} />
    </div>
  );
}
