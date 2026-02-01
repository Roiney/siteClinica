import { MessageCircle, Phone } from 'lucide-react';

const CallToAction = () => {
  const whatsappNumber = "5511975681709";
  const whatsappMessage = "Olá! Vi o site e gostaria de agendar uma avaliação com a Dra. Marina.";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:+${whatsappNumber}`, '_self');
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Agende sua Avaliação Gratuita</h2>
              <p className="text-gray-600 mb-6">
                Dê o primeiro passo para transformar seu sorriso. Atendimento personalizado
                com a Dra. Marina Sanini da Rosa.
              </p>
              <ul className="text-gray-600 mb-8 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Avaliação sem compromisso
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Resposta em até 2 horas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Plano de tratamento personalizado
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar pelo WhatsApp
                </button>
                <button
                  onClick={handleCall}
                  className="flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  <Phone className="w-5 h-5" />
                  (11) 97568-1709
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img
                src="/fotos_da_profissional/dra-marina-atendendo-2.jpeg"
                alt="Dra. Marina atendendo paciente"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
