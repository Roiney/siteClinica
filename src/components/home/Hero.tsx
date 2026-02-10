import { MessageCircle, Phone, Star, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  const whatsappNumber = "5511975681709";
  const whatsappMessage = "Olá! Gostaria de agendar uma avaliação com a Dra. Marina.";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:+${whatsappNumber}`, '_self');
  };

  // Verifica se está no horário de funcionamento
  const isOpenNow = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    if (day === 0) return false; // Domingo
    if (day === 6) return hour >= 9 && hour < 13; // Sábado
    return hour >= 8 && hour < 18; // Segunda a Sexta
  };

  return (
    <section className="relative bg-gradient-to-br from-violet-50 via-white to-gray-50 pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo - Em mobile aparece primeiro */}
          <div className="order-1 lg:order-1">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Especialista em Reabilitação Oral</span>
              </div>
              {isOpenNow() && (
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                  <Clock className="w-4 h-4" />
                  <span>Aberto agora</span>
                </div>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900">
              Volte a Sorrir com{' '}
              <span className="text-primary">Confiança</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
              Reabilitação Oral com Implantes Dentários
            </p>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Dra. Marina Sanini da Rosa — especialista em <strong>reabilitação oral</strong> com
              mais de 10 anos devolvendo sorrisos completos na Vila Leopoldina, São Paulo.
            </p>

            {/* Prova social numérica */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-gray-700"><strong>+500</strong> pacientes atendidos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-gray-700"><strong>5.0</strong> avaliação Google</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button
                onClick={handleWhatsApp}
                className="btn bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Minha Avaliação
              </button>
              <button
                onClick={handleCall}
                className="btn-outline flex items-center justify-center gap-2 py-4 px-6"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </button>
            </div>

            {/* Micro-copy de segurança */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Avaliação sem compromisso
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Resposta em até 2 horas
              </span>
            </div>
          </div>

          {/* Imagem da Dra. Marina - Em mobile aparece depois */}
          <div className="order-2 lg:order-2 relative">
            <div className="relative">
              {/* Imagem principal */}
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/fotos_da_profissional/dra-marina-retrato.jpeg"
                  alt="Dra. Marina Sanini da Rosa - Dentista Especialista em Implantes"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card flutuante - CRO */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-full p-2">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">CRO-SP 128955</p>
                    <p className="text-xs text-gray-500">Registro ativo</p>
                  </div>
                </div>
              </div>

              {/* Card flutuante - Experiência */}
              <div className="absolute -top-4 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">+10 Anos</p>
                    <p className="text-xs text-gray-500">de experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-violet-300 opacity-10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
