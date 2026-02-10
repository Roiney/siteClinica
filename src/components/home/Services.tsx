import { Smile, ShieldCheck, Baby, Heart, Clock, MessageCircle } from 'lucide-react';

// Ícone personalizado de dente/implante
const ToothIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C9.5 2 7 3.5 7 6c0 1.5.5 2.5 1 3.5.5 1 1 2 1 3.5 0 2-1 4-1 6 0 2 1 3 2 3s2-1 2-3v-3c0-.5.5-1 1-1s1 .5 1 1v3c0 2 1 3 2 3s2-1 2-3c0-2-1-4-1-6 0-1.5.5-2.5 1-3.5.5-1 1-2 1-3.5 0-2.5-2.5-4-5-4z" />
  </svg>
);

const services = [
  {
    id: 1,
    title: "Reabilitação Oral",
    description: "Nossa especialidade: recuperação completa do sorriso com implantes dentários, próteses fixas e técnicas avançadas de reabilitação.",
    icon: <ToothIcon className="w-8 h-8 text-primary" />,
    whatsappText: "Olá! Gostaria de saber mais sobre Reabilitação Oral com Implantes.",
    featured: true,
  },
  {
    id: 2,
    title: "Odontologia Estética",
    description: "Transforme seu sorriso com procedimentos estéticos como clareamento dental, facetas e harmonização do sorriso.",
    icon: <Smile className="w-8 h-8 text-primary" />,
    whatsappText: "Olá! Gostaria de saber mais sobre Odontologia Estética.",
  },
  {
    id: 3,
    title: "Odontologia Geral",
    description: "Cuidados odontológicos completos, incluindo limpezas, restaurações, coroas e tratamentos preventivos.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    whatsappText: "Olá! Gostaria de agendar uma consulta de Odontologia Geral.",
  },
  {
    id: 4,
    title: "Odontopediatria",
    description: "Atendimento odontológico infantil em ambiente acolhedor, promovendo sorrisos saudáveis desde a infância.",
    icon: <Baby className="w-8 h-8 text-primary" />,
    whatsappText: "Olá! Gostaria de agendar uma consulta de Odontopediatria para meu filho(a).",
  },
  {
    id: 5,
    title: "Ortodontia",
    description: "Correção de dentes e mandíbulas desalinhadas com aparelhos ortodônticos, alinhadores estéticos e outras soluções.",
    icon: <Heart className="w-8 h-8 text-primary" />,
    whatsappText: "Olá! Gostaria de saber mais sobre Ortodontia.",
  },
  {
    id: 6,
    title: "Atendimento de Urgência",
    description: "Cuidados odontológicos imediatos para situações inesperadas, com agendamentos no mesmo dia para casos urgentes.",
    icon: <Clock className="w-8 h-8 text-primary" />,
    whatsappText: "Olá! Preciso de atendimento de urgência.",
  },
];

const Services = () => {
  const whatsappNumber = "5511975681709";

  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="section-heading">
          <h2>Nossos Serviços</h2>
          <p>
            Especialistas em <strong>reabilitação oral com implantes</strong>. Também oferecemos
            atendimento odontológico completo para toda a família.
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
              <button
                onClick={() => handleWhatsApp(service.whatsappText)}
                className="text-primary font-medium hover:text-primary-dark inline-flex items-center group"
              >
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => handleWhatsApp("Olá! Gostaria de agendar uma avaliação com a Dra. Marina.")}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Minha Avaliação
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Resposta em até 2 horas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
