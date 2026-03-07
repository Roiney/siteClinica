import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const whatsappNumber = "5511975681709";
  const whatsappMessage = "Ola! Gostaria de agendar uma consulta com a Dra. Marina.";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleAnchorClick = useCallback((e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === '/') {
      const el = document.querySelector(anchor);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + anchor);
    }
  }, [location.pathname, navigate]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Tratamentos', path: '/tratamentos' },
    { name: 'Resultados', anchor: '#casos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-white/0 py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/MO-simbolo.png"
              alt="Dra. Marina Sanini da Rosa"
              className="h-10 w-auto"
            />
            <div className="ml-2 hidden sm:block">
              <span className="text-lg font-heading font-semibold text-gray-900 leading-tight block">
                Dra. Marina
              </span>
              <span className="text-[11px] text-gray-500 leading-tight block tracking-wide">
                ODONTOLOGIA | CRO-SP 128955
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.anchor ? (
                <a
                  key={link.anchor}
                  href={`/${link.anchor}`}
                  onClick={(e) => handleAnchorClick(e, link.anchor)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path!}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.path!)
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:+5511975681709"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(11) 97568-1709</span>
            </a>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2.5 px-5 rounded-lg transition-all hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile - CTA + Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-1.5 bg-green-600 text-white text-sm font-medium py-2 px-3 rounded-lg"
              aria-label="Agendar pelo WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu - Panel */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'translate-y-0 opacity-100 shadow-xl'
            : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container-custom py-4 flex flex-col">
          {navLinks.map((link) =>
            link.anchor ? (
              <a
                key={link.anchor}
                href={`/${link.anchor}`}
                onClick={(e) => handleAnchorClick(e, link.anchor)}
                className="py-3 px-4 text-gray-700 font-medium hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path!}
                className={`py-3 px-4 font-medium rounded-lg transition-colors ${
                  isActive(link.path!)
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            )
          )}

          <hr className="my-3 border-gray-100" />

          <a
            href="tel:+5511975681709"
            className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="font-medium">(11) 97568-1709</span>
          </a>

          <button
            onClick={() => { handleWhatsApp(); setIsOpen(false); }}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 px-4 rounded-lg mt-2 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Agendar pelo WhatsApp</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
