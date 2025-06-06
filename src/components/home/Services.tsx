import { Bluetooth as Tooth, Smile, ShieldCheck, Baby, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Implantes Dentários",
    description: "Solução permanente para dentes ausentes, com implantes funcionais e com aparência natural, melhorando a saúde bucal.",
    icon: <Tooth className="w-8 h-8 text-primary" />,
  },
  {
    id: 2,
    title: "Odontologia Estética",
    description: "Transforme seu sorriso com procedimentos estéticos como clareamento dental, facetas e harmonização do sorriso.",
    icon: <Smile className="w-8 h-8 text-primary" />,
  },
  {
    id: 3,
    title: "Odontologia Geral",
    description: "Cuidados odontológicos completos, incluindo limpezas, restaurações, coroas e tratamentos preventivos.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
  {
    id: 4,
    title: "Odontopediatria",
    description: "Atendimento odontológico infantil em ambiente acolhedor, promovendo sorrisos saudáveis desde a infância.",
    icon: <Baby className="w-8 h-8 text-primary" />,
  },
  {
    id: 5,
    title: "Ortodontia",
    description: "Correção de dentes e mandíbulas desalinhadas com aparelhos ortodônticos, alinhadores estéticos e outras soluções.",
    icon: <Heart className="w-8 h-8 text-primary" />,
  },
  {
    id: 6,
    title: "Atendimento de Urgência",
    description: "Cuidados odontológicos imediatos para situações inesperadas, com agendamentos no mesmo dia para casos urgentes.",
    icon: <Clock className="w-8 h-8 text-primary" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="section-heading">
          <h2>Nossos Serviços</h2>
          <p>
            Oferecemos um atendimento odontológico completo, personalizado para atender às suas necessidades — 
            desde consultas de rotina até procedimentos avançados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="card p-6 hover:translate-y-[-8px]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to="/contact" 
                className="text-primary font-medium hover:text-primary-dark inline-flex items-center"
              >
                Saiba Mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-primary">
            Agendar Consulta
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
