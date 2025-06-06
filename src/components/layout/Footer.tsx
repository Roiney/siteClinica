import { Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da Clínica */}
          <div>
            <div className="flex items-center text-2xl font-heading font-bold text-white mb-4">
              <img
                src="/MO-simbolo-invert.png"
                alt="Dra. Marina Sanini da Rosa"
                className="w-7 h-7 mr-2"
              />
              <span>Dra. Marina Sanini da Rosa</span>
            </div>
            <p className="mb-6 text-gray-400">
              Atendimento odontológico de excelência, com tecnologia de ponta e cuidado humanizado há mais de 10 anos.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ma.ri.marina/" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>   
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              {/* <li>
                <Link to="/team" className="text-gray-400 hover:text-primary transition-colors">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              {/* <li>
                <Link to="/#testimonials" className="text-gray-400 hover:text-primary transition-colors">
                  Depoimentos
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-primary transition-colors">
                  Implantes Dentários
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-primary transition-colors">
                  Odontologia Geral
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-primary transition-colors">
                  Odontologia Estética
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-primary transition-colors">
                  Ortodontia
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-primary transition-colors">
                  Odontopediatria
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-primary transition-colors">
                  Atendimento de Urgência
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>(11) 97568-1709</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>mrsanini@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>
                  Avenida Imperatriz Leopoldina, 957 - Sala 113<br />
                  Vila Leopoldina - São Paulo/SP - CEP 05305-011
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary shrink-0" />
                <div>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        {/* Rodapé Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Dra. Marina Sanini da Rosa. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <Link to="/sitemap" className="hover:text-primary transition-colors">
              Mapa do Site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
