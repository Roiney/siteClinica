import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "5511975681709";
  const whatsappMessage = "Olá! Encontrei o site da clínica e gostaria de agendar uma avaliação. Poderia me ajudar?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      {/* Label que aparece em hover no desktop */}
      <span className="hidden md:block bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco
      </span>
      {/* Botão principal - maior em mobile */}
      <div className="bg-[#25D366] text-white rounded-full p-4 md:p-3 shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none">
        <MessageCircle className="w-7 h-7 md:w-6 md:h-6" />
      </div>
    </a>
  );
};

export default WhatsAppButton;