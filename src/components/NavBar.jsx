import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../data/constants";
import { PrimaryButton } from "./UI";

/* ------------------------------------------------------------------ */
/* NAVIGATION                                                          */
/* ------------------------------------------------------------------ */

const NavBar = ({ page, setPage }) => {
  const [open, setOpen] = useState(false);

  const goToPage = (pageId) => {
    setPage(pageId);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b ae-border-line">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO / BRAND */}
        <button
          onClick={() => goToPage("home")}
          className="flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="Ammar E-Commerce"
            className="h-14 w-auto object-contain"
          />

          <div className="text-left leading-none">
            <div className="ae-display text-lg">
              AMMAR
            </div>

            <div className="ae-mono text-[10px] tracking-widest ae-text-orange">
              E-COMMERCE
            </div>
          </div>
        </button>


        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => goToPage(item.id)}
              className={`ae-tab text-sm ${
                page === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>


        {/* BOOK A CALL BUTTON */}
        <div className="hidden md:block">
          <PrimaryButton onClick={() => goToPage("contact")}>
            Book a Call
            <ArrowRight size={16} />
          </PrimaryButton>
        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </div>


      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="md:hidden border-t ae-border-line bg-white px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => goToPage(item.id)}
              className={`text-left text-sm font-bold ${
                page === item.id
                  ? "ae-text-orange"
                  : "ae-text-steel"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

    </header>
  );
};

export default NavBar;