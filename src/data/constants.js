import {
  GraduationCap, Building2, Globe, FileText, ClipboardCheck, Landmark,
  CreditCard, ShoppingCart, Store,
} from "lucide-react";
import {
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "../components/SocialIcons";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */
export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "llc", label: "LLC Package" },
  { id: "ltd", label: "LTD Package" },
  { id: "contact", label: "Contact" },
];

export const SERVICES = [
  { 
    icon: GraduationCap, 
    title: "Amazon Seller Course", 
    desc: "Step-by-step training on Amazon FBA, Account management And wholesale - from product research to your first sale.",
    pageKey: "amazon-course" // <-- Ye line add karein
  },
  { 
    icon: Building2, 
    title: "LLC Formation (USA)", 
    desc: "Full setup of your US Limited Liability Company in any state, done for you from start to finish.",
    pageKey: "llc" // <-- Ye line add karein
  },
  { 
    icon: Globe, 
    title: "LTD Formation (UK)", 
    desc: "Register your UK Limited company with Companies House, registered office included.",
    pageKey: "ltd" // <-- Ye line add karein
  },
  { 
    icon: FileText, 
    title: "Website Designing", 
    desc: "Modern, conversion-ready websites for your brand or e-commerce store, built to match your business.",
    pageKey: "website-design" // <-- Ye line add karein
  },
  { 
    icon: ClipboardCheck, 
    title: "ITIN Filing", 
    desc: "Complete assistance applying for your Individual Taxpayer Identification Number with the IRS.",
    pageKey: "itin" // <-- Ye line add karein
  },
  { 
    icon: Landmark, 
    title: "Tax Return Filing", 
    desc: "Federal and state tax return preparation for LLC owners - annual filings handled correctly and on time.",
    pageKey: "tax-filing" // <-- Ye line add karein
  },
  { 
    icon: CreditCard, 
    title: "Business Bank Account Setup", 
    desc: "Guided setup of a US business bank account for your LLC, matched to your situation.",
    pageKey: "bank-setup" // <-- Ye line add karein
  },
  { 
    icon: ShoppingCart, 
    title: "Amazon Account Creation", 
    desc: "New Amazon seller account setup and verification, done right the first time.",
    pageKey: "store-creation" // <-- Yeh badal diya hai ("amazon-account" ki jagah "store-creation")
  },
  { 
    icon: Store, 
    title: "Amazon Store Handling", 
    desc: "Ongoing account management - listings, Hunting, inventory and customer service, fully managed.",
    pageKey: "store-handling" // <-- Ye line add karein
  },
];

export const LLC_PLANS = [
  {
    name: "Starter",
    tagline: "Get your LLC legally formed",
    price: "$149",
    priceNote: "+ state filing fee",
    features: [
      "State Filing (Articles of Organization)",
      "EIN (Employer Identification Number)",
      "Registered Agent - 1 year included",
      "Business Bank Account Setup",
      "BOI (Beneficial Ownership Information) filing",
      "Life Time Support",
    ],
  },
  {
    name: "Growth",
    tagline: "Formed, banked and ready to sell",
    price: "$299",
    priceNote: "+ state filing fee",
    highlighted: true,
    features: [
      "Everything in Starter",
      "Unique Business Address",
      "Business Bank Account Setup",
      "Amazon Seller Account Setup",
      "ITIN (Individual Taxpayer Identification Number) Filing",
    ],
  },
  {
    name: "Complete Business Suite",
    tagline: "Formed, compliant and growing",
    price: "$399",
    priceNote: "+ state filing fee",
    features: [
      "Everything in Growth",
      "Seller Permit / Resale Certificate Filing",
      "State Tax Registration (if applicable)",
      "First-year Federal Tax Return Filing",
      "Annual Compliance Reminders",
      "Discounted Website Design add-on",
      "Dedicated Account Manager",
    ],
  },
];

export const LLC_PACKAGES = [
  {
    name: "Texas Complete Package",
    state: "Texas",
    stateCode: "TX",
    tagline: "Complete LLC formation and business setup",
    price: "$699",
    priceNote: "Complete Package",
    features: [
      "Registered Agent - 1 Year",
      "Business Address - 1 Year",
      "LLC Formation + Articles of Organization",
      "EIN (Employer Identification Number)",
      "Reseller Certificate",
      "Business Bank Account Setup",
      "Lifetime Customer Support",
      "BOI (Beneficial Ownership Information) Filing",
      "Amazon Account Creation (If Needed)",
    ],
  },
  {
    name: "Florida Complete Package",
    state: "Florida",
    stateCode: "FL",
    tagline: "Complete LLC formation and business setup",
    price: "$499",
    priceNote: "Complete Package",
    features: [
      "Registered Agent - 1 Year",
      "Business Address - 1 Year",
      "LLC Formation + Articles of Organization",
      "EIN (Employer Identification Number)",
      "Reseller Certificate",
      "Business Bank Account Setup",
      "Lifetime Customer Support",
      "BOI (Beneficial Ownership Information) Filing",
      "Amazon Account Creation (If Needed)",
    ],
  },
  {
    name: "Wyoming Complete Package",
    state: "Wyoming",
    stateCode: "WY",
    tagline: "Complete LLC formation and business setup",
    price: "$399",
    priceNote: "Complete Package",
    features: [
      "Registered Agent - 1 Year",
      "Business Address - 1 Year",
      "LLC Formation + Articles of Organization",
      "EIN (Employer Identification Number)",
      "Reseller Certificate",
      "Business Bank Account Setup",
      "Lifetime Customer Support",
      "BOI (Beneficial Ownership Information) Filing",
      "Amazon Account Creation (If Needed)",
    ],
  },
];

export const LTD_PACKAGES = [
  {
    name: "Starter",
    tagline: "Your UK company, legally registered",
    price: "£149",
    priceNote: "+ Companies House fee",
    features: [
      "Companies House Registration",
      "Registered Office Address - 1 year",
      "Certificate of Incorporation",
      "Director Identity Verification",
      "Memorandum & Articles of Association",
      "Digital Company Documents",
    ],
  },
  {
    name: "Growth",
    tagline: "Registered and trading-ready",
    price: "£249",
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
    price: "£349",
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

export const STATES = [
  { state: "Wyoming", fee: "$100", annual: "$60/yr (min. license tax)", privacy: "Strong", bestFor: "Privacy, asset protection, non-residents", speed: "Instant online / up to 15 days by mail" },
  { state: "Delaware", fee: "$90", annual: "$300/yr flat franchise tax", privacy: "Good", bestFor: "Startups seeking investors, credibility", speed: "Same/next-day expedited available" },
  { state: "New Mexico", fee: "$50", annual: "$0 - no annual report", privacy: "Strongest", bestFor: "Lowest long-term cost, maximum privacy", speed: "1-3 business days online" },
  { state: "Florida", fee: "$125", annual: "$138.75/yr annual report", privacy: "Moderate", bestFor: "Businesses physically operating in Florida", speed: "~5 business days online" },
  { state: "Texas", fee: "$300", annual: "$0 due if under revenue threshold*", privacy: "Moderate", bestFor: "Businesses operating in Texas", speed: "2-5 business days online" },
];

/* Sample placeholder content — swap these for your real client
   testimonials, real success numbers and real FAQs before publishing. */
export const TESTIMONIALS = [
  { name: "Junaid Amjad", role: "Amazon FBA Seller, Lahore", quote: "I formed my LLC in Texas and received excellent service. Highly recommended!" },
  { name: "Tayyaba Zahoor", role: "Private Label Seller, Lahore", quote: "Very happy with my website design. Professional, modern, and exactly what I needed." },
  { name: "Moshin", role: "Amazon Seller, Islamabad", quote: "Got my UK LTD registered smoothly. The whole process was quick and professional." },
];

export const CASE_STUDIES = [
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

export const FAQS = [
  { q: "How long does LLC formation actually take?", a: "The processing time varies depending on the state. In most cases, the complete LLC formation process takes approximately 20-25 business days. Once the state processes and approves your filing, your LLC becomes active and can be viewed on the state's official website. In some states, LLCs active may be processed much faster - sometimes within a week or even as quickly as 1 business day." },
  { q: "Do I need to visit the US to form an LLC?", a: "No. The entire process - filing, EIN, registered agent and bank account guidance - can be completed remotely from Pakistan." },
  { q: "Which state should I choose for my LLC?", a: "It depends on your goals - Wyoming and New Mexico are popular for privacy and low ongoing cost, while Florida or Texas make sense if you plan to operate physically in that state. We'll help you decide based on your business." },
  { q: "Do you help with taxes after the company is formed?", a: "Yes - we help you with your tax filing and compliance requirements at reasonable and affordable prices, making the process simple and hassle-free." },
  { q: "Can I start Amazon selling without a US Social Security Number?", a: "Yes. You can start your LLC using an EIN even if you do not have an SSN." },
  { q: "What's the difference between the LLC and LTD packages?", a: "LLC is for a US company (any state); LTD is for a UK Limited company registered with Companies House. Choose based on where you want your business legally based." },
];

export const SOCIAL_LINKS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/ammarecommerce?igsh=MW85enVwcWJ4ano1dQ%3D%3D&utm_source=qr" },
  { icon: TiktokIcon, label: "Tiktok", href: "https://www.tiktok.com/@ammarecommerce?_r=1&_t=ZS-98Jn9xM8sRo" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com/@ammarecommerce" },
];