import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export default FAQItem;
