import { Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informacoes da Clinica */}
          <div>
            <div className="flex items-center text-2xl font-heading font-bold text-white mb-4">
              <img
                src="/MO-simbolo-invert.png"
                alt="Dra. Marina Sanini da Rosa"
                className="w-7 h-7 mr-2"
              />
              <span>Dra. Marina Sanini da Rosa</span>
            </div>
            <p className="mb-2 text-gray-400">
              Atendimento odontologico de excelencia, com tecnologia de ponta e cuidado humanizado ha mais de 10 anos.
            </p>
            <p className="mb-6 text-gray-500 text-sm">
              CRO-SP 128955
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ma.ri.marina/" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rapidos */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Navegacao</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-primary transition-colors">
                  Sobre a Dra. Marina
                </Link>
              </li>
              <li>
                <Link to="/tratamentos" className="text-gray-400 hover:text-primary transition-colors">
                  Tratamentos
                </Link>
              </li>
              <li>
                <a href="/#casos" className="text-gray-400 hover:text-primary transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicos */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Nossos Servicos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tratamentos#reabilitacao-oral" className="text-gray-400 hover:text-primary transition-colors">
                  Reabilitacao Oral
                </Link>
              </li>
              <li>
                <Link to="/tratamentos#implantes-dentarios" className="text-gray-400 hover:text-primary transition-colors">
                  Implantes Dentarios
                </Link>
              </li>
              <li>
                <Link to="/tratamentos#odontologia-estetica" className="text-gray-400 hover:text-primary transition-colors">
                  Odontologia Estetica
                </Link>
              </li>
              <li>
                <Link to="/tratamentos#odontologia-geral" className="text-gray-400 hover:text-primary transition-colors">
                  Odontologia Geral
                </Link>
              </li>
              <li>
                <Link to="/tratamentos#odontopediatria" className="text-gray-400 hover:text-primary transition-colors">
                  Odontopediatria
                </Link>
              </li>
              <li>
                <Link to="/tratamentos#ortodontia" className="text-gray-400 hover:text-primary transition-colors">
                  Ortodontia
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
                <a href="tel:+5511975681709" className="hover:text-primary transition-colors">
                  (11) 97568-1709
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                <a href="mailto:mrsanini@gmail.com" className="hover:text-primary transition-colors">
                  mrsanini@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span>
                  Avenida Imperatriz Leopoldina, 957 - Sala 113<br />
                  Vila Leopoldina - Sao Paulo/SP - CEP 05305-011
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary shrink-0" />
                <div>
                  <p>Segunda a Sexta: 8h as 18h</p>
                  <p>Sabado: 9h as 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        {/* Rodape Inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Dra. Marina Sanini da Rosa - CRO-SP 128955. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500">
            <span>Responsavel Tecnica: Dra. Marina Sanini da Rosa - CRO-SP 128955</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
