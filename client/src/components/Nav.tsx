import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => {
      if (scrollY.get() > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, [scrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#consulting", label: "College Consulting" },
    { href: "#government", label: "Policy Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-white bg-opacity-90 shadow-md z-40 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#hero" className="font-playfair text-harvard text-2xl font-bold">Samantha Wilhoit</a>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`font-montserrat text-dark transition-colors ${
                  link.href === "#government" 
                    ? "hover:text-policy" 
                    : link.href === "#consulting" 
                      ? "hover:text-consulting" 
                      : "hover:text-harvard"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <X className="text-dark text-xl" /> : <Menu className="text-dark text-xl" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        className="md:hidden bg-white w-full absolute left-0 shadow-md"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {isOpen && (
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-4 py-2">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={closeMenu}
                  className={`font-montserrat text-dark py-2 transition-colors ${
                    link.href === "#government" 
                      ? "hover:text-policy" 
                      : link.href === "#consulting" 
                        ? "hover:text-consulting" 
                        : "hover:text-harvard"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
}
