import React, { useState, useEffect } from "react";
import BrandStyles from "./styles/BrandStyles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import LLCPage from "./pages/LLCPage";
import LTDPage from "./pages/LTDPage";
import ContactPage from "./pages/ContactPage";
import AmazonCourse from "./pages/AmazonCourse";
import AmazonStoreHandling from "./pages/AmazonStoreHandling";
import BankSetup from "./pages/BankSetup";
import ITIN from "./pages/ITIN";
import TaxFiling from "./pages/TaxFiling";
import WebsiteDesign from "./pages/WebsiteDesign";

/* ------------------------------------------------------------------ */
/* APP ROOT                                                            */
/* ------------------------------------------------------------------ */

export default function App() {

  // Get current page from URL when website loads
 const getPageFromURL = () => {
    const path = window.location.pathname;

    // Specific Naye Pages Pehle Check Hon
    if (path === "/amazon-course") return "amazon-course";
    if (path === "/store-handling") return "store-handling";
    if (path === "/bank-setup") return "bank-setup";
    if (path === "/itin") return "itin";
    if (path === "/tax-filing") return "tax-filing";
    if (path === "/website-design") return "website-design";

    if (path === "/about") return "about";
    if (path === "/services") return "services";
    if (path === "/llc") return "llc";
    if (path === "/ltd") return "ltd";
    if (path === "/contact") return "contact";

    return "home";
  };


  const [page, setPageState] = useState(getPageFromURL);


 // Change page + update URL (With Refresh / Scroll-to-Top behavior)
  const setPage = (newPage) => {
    // Check karein ke kya user usi page par dobara click kar raha hai
    if (page === newPage) {
      // Agar pehle se wahi page open hai, to smooth scroll up (Refresh effect)
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Naya page state update karein
    setPageState(newPage);

    const paths = {
      home: "/",
      about: "/about",
      services: "/services",
      llc: "/llc",
      ltd: "/ltd",
      contact: "/contact",
      "amazon-course": "/amazon-course",
      "store-handling": "/store-handling",
      "bank-setup": "/bank-setup",
      itin: "/itin",
      "tax-filing": "/tax-filing",
      "website-design": "/website-design",
    };

    const newPath = paths[newPage] || "/";

    window.history.pushState(
      {},
      "",
      newPath
    );
  };


  // Browser Back / Forward buttons
  useEffect(() => {

    const handlePopState = () => {
      setPageState(getPageFromURL());
    };

    window.addEventListener(
      "popstate",
      handlePopState
    );

    return () => {
      window.removeEventListener(
        "popstate",
        handlePopState
      );
    };

  }, []);


  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);


  const pages = {

    home: (
      <HomePage
        setPage={setPage}
      />
    ),

    about: (
      <AboutPage />
    ),

    services: (
      <ServicesPage
        setPage={setPage}
      />
    ),

    llc: (
      <LLCPage
        setPage={setPage}
      />
    ),

    ltd: (
      <LTDPage
        setPage={setPage}
      />
    ),

    contact: (
      <ContactPage />
    ),
    "amazon-course": <AmazonCourse setPage={setPage} />,
    "store-handling": <AmazonStoreHandling setPage={setPage} />,
    "bank-setup": <BankSetup setPage={setPage} />,
    itin: <ITIN setPage={setPage} />,
    "tax-filing": <TaxFiling setPage={setPage} />,
    "website-design": <WebsiteDesign setPage={setPage} />,

  };


  return (
    <div className="ae-root">

      <BrandStyles />

      <NavBar
        page={page}
        setPage={setPage}
      />

      <main key={page}>
        {pages[page]}
      </main>

      <Footer
        setPage={setPage}
      />

    </div>
  );
}