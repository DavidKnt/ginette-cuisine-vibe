
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Add immediate check on mount
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4", 
        scrolled ? "bg-white bg-opacity-95 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="font-serif text-2xl md:text-3xl text-ginette-navy relative group"
        >
          <span className="block transform transition-transform group-hover:scale-105 duration-300">GINETTE</span>
          <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-ginette-gold transition-all duration-500"></span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-ginette-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Accueil', 'Menu', 'À Propos', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="font-sans text-sm uppercase tracking-wider text-ginette-navy relative group"
            >
              <span>{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-ginette-gold transition-all duration-300"></span>
            </Link>
          ))}
          <a 
            href="#reservation" 
            className="btn-primary"
          >
            Réserver
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md pt-20 px-6 pb-6 z-40 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col items-center gap-6">
          {['Accueil', 'Menu', 'À Propos', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="font-sans text-xl uppercase tracking-wider text-ginette-navy text-center py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <a 
            href="#reservation" 
            className="btn-primary mt-4 w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Réserver
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
