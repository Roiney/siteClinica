import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const whatsappNumber = "5511975681709";
  const whatsappMessage = "Olá! Gostaria de agendar uma avaliação com a Dra. Marina.";

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:+${whatsappNumber}`, '_self');
  };

  const navLinks = [
    { name: 'Início', path: '/', isAnchor: false },
    { name: 'Serviços', path: '/#services', isAnchor: true },
    { name: 'Resultados', path: '/#casos', isAnchor: true },
    { name: 'A Clínica', path: '/#clinica', isAnchor: true },
    { name: 'Depoimentos', path: '/#testimonials', isAnchor: true },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <img 
              src="/MO-simbolo.png"
              alt="Dra. Marina Sanini da Rosa" 
              className="h-12 w-auto"
            />
            <span className={`ml-2 text-xl font-heading font-semibold ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              Dra. Marina Sanini da Rosa
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`font-medium transition-colors text-gray-800 hover:text-primary`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCall}
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(11) 97568-1709</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container-custom flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <hr className="my-2 border-gray-200" />
          <button
            onClick={() => { handleCall(); setIsOpen(false); }}
            className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="font-medium">(11) 97568-1709</span>
          </button>
          <button
            onClick={() => { handleWhatsApp(); setIsOpen(false); }}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg mt-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Agendar pelo WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;