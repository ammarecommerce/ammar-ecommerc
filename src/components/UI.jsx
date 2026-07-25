import React from "react";

/* ------------------------------------------------------------------ */
/*  SHARED UI BITS                                                     */
/* ------------------------------------------------------------------ */
export const SectionEyebrow = ({ children }) => (
  <div className="ae-chip mb-4">{children}</div>
);

export const PageShell = ({ children }) => (
  <div className="ae-fade-in max-w-6xl mx-auto px-6 py-16">{children}</div>
);

export const PrimaryButton = ({ children, onClick, href, className = "" }) => {
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

export const OutlineButton = ({ children, onClick, href, className = "" }) => {
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
