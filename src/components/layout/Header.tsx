import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Nossos Serviços', path: '/#services' },
    // { name: 'Nossa Equipe', path: '/team' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contact' },
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
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : isScrolled
                      ? 'text-gray-800 hover:text-primary'
                      : 'text-gray-800 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Agendar Consulta
            </Link>
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
        <div className="container-custom flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-2 px-4 font-medium ${
                location.pathname === link.path
                  ? 'text-primary bg-gray-50'
                  : 'text-gray-800 hover:text-primary hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary mt-4 w-full text-center"
          >
            Agendar Consulta
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;