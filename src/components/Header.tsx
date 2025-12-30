import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Destinations", href: "#destinations" },
  { name: "Properties", href: "#properties" },
  { name: "Experience", href: "#properties" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-header/98 backdrop-blur-lg py-3 shadow-card"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-primary rounded-full flex items-center justify-center group-hover:border-gold-light transition-colors duration-300">
                <span className="text-primary font-display text-lg md:text-xl font-semibold group-hover:text-gold-light transition-colors duration-300">
                  L
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-header-foreground text-lg md:text-xl font-display font-semibold tracking-[0.15em]">
                LEESTAYS
              </span>
              <span className="text-header-foreground/50 text-[10px] tracking-[0.2em] uppercase">
                Luxury Escapes
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-header-foreground/80 hover:text-header-foreground text-sm font-medium tracking-wide transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#properties"
              className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-gold"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-header-foreground p-2 hover:text-primary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-80 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 border-t border-header-foreground/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-header-foreground/80 hover:text-primary hover:bg-header-foreground/5 text-base font-medium tracking-wide py-3 px-4 rounded-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#properties"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 mx-4 px-6 py-3 bg-primary text-primary-foreground text-center text-sm font-medium tracking-wide rounded-full hover:bg-gold-light transition-all duration-300"
              >
                Book Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
