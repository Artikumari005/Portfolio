import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileHoverItem, setMobileHoverItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { label: "Home", id: "home", path: "/" },
    { label: "About", id: "about", path: "/" },
    { label: "Stack", id: "stack", path: "/" },
    { label: "Projects", id: "projects", path: "/" },
    { label: "Contact", id: "contact", path: "/" },
  ];

  // Track active section on scroll (only on home page)
  useEffect(() => {
    if (location.pathname !== "/") return;
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.5 && rect.bottom > windowHeight * 0.3) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileHoverItem(null);
  }, [location.pathname]);

  const handleNavClick = (item) => {
    if (location.pathname === "/") {
      // On home page - scroll to section
      if (window.scrollToSection) {
        window.scrollToSection(item.id);
      } else {
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(item.id);
    } else {
      // On other pages - navigate to home and then scroll
      navigate("/");
      setTimeout(() => {
        if (window.scrollToSection) {
          window.scrollToSection(item.id);
        } else {
          document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    setIsMobileMenuOpen(false);
  };

  // Determine if we're on the home page
  const isHomePage = location.pathname === "/";
  const highlightedMobileItem = mobileHoverItem || (isHomePage ? activeSection : null);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden min-[768px]:block">
        <div className="flex justify-between items-center bg-white/70 backdrop-blur-xl rounded-full px-8 py-4 shadow-[0_6px_20px_rgba(0,0,0,0.05)] min-h-[50px] min-w-[600px]">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item)}
              className={`flex-1 h-[50px] rounded-full text-lg font-medium transition-all duration-200 whitespace-nowrap text-[20px] ${
                activeSection === item.id && isHomePage
                  ? "bg-[#FF4D00] border-[#FF4D00] shadow-[0_4px_12px_rgba(255,77,0,0.25)]"
                  : "text-gray-500 bg-transparent border-transparent hover:bg-orange-500"
              }`}
              style={{
                color: activeSection === item.id && isHomePage ? "#ffffff" : undefined,
              }}
            >
              <span
                className="flex h-full items-center justify-center"
                style={{
                  color: activeSection === item.id && isHomePage ? "#ffffff" : "inherit",
                }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

     {/* MOBILE HAMBURGER BUTTON */}
      <nav className={`fixed top-6 right-6 z-[70] block min-[768px]:hidden transition-colors duration-300`}>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="h-12 w-12 rounded-full flex items-center justify-center bg-white text-[#111827] shadow-[0_10px_24px_rgba(0,0,0,0.12)] border border-gray-50"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

     
      <div
        className={`fixed inset-0 z-[60] min-[768px]:hidden bg-white transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-8">
          <div className="w-full max-w-[280px] space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                onMouseEnter={() => setMobileHoverItem(item.id)}
                onMouseLeave={() => setMobileHoverItem(null)}
                className={`w-full py-4 rounded-full text-[20px] font-medium transition-all duration-300 ease-out border-none outline-none ${
                  highlightedMobileItem === item.id
                    ? "bg-[#ff2a12] text-white shadow-[0_8px_20px_rgba(255,42,18,0.25)] scale-105"
                    : "bg-transparent text-[#666666] hover:text-black"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
