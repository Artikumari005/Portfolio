import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
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
  };

  // Determine if we're on the home page
  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex justify-between items-center bg-white backdrop-blur-xl rounded-full px-8 py-4 shadow-[0_6px_20px_rgba(0,0,0,0.05)] min-h-[50px] min-w-[600px]">
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
  );
}

export default Navbar;
