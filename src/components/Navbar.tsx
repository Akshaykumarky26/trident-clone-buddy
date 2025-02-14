
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" className="font-serif text-2xl font-bold text-gray-900">
              TRIDENT
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {["Rooms", "Dining", "Experiences", "Offers", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-sans text-sm text-gray-700 hover:text-gold transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white transition-all duration-200">
                BOOK NOW
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {["Rooms", "Dining", "Experiences", "Offers", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2 text-base font-sans text-gray-700 hover:text-gold transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <Button variant="outline" className="w-full mt-4 border-gold text-gold hover:bg-gold hover:text-white transition-all duration-200">
            BOOK NOW
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
