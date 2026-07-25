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

/* ------------------------------------------------------------------ */
/* APP ROOT                                                            */
/* ------------------------------------------------------------------ */

export default function App() {

  // Get current page from URL when website loads
  const getPageFromURL = () => {
    const path = window.location.pathname;

    if (path === "/about") return "about";
    if (path === "/services") return "services";
    if (path === "/llc") return "llc";
    if (path === "/ltd") return "ltd";
    if (path === "/contact") return "contact";

    return "home";
  };


  const [page, setPageState] = useState(getPageFromURL);


  // Change page + update URL
  const setPage = (newPage) => {

    setPageState(newPage);

    const paths = {
      home: "/",
      about: "/about",
      services: "/services",
      llc: "/llc",
      ltd: "/ltd",
      contact: "/contact",
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