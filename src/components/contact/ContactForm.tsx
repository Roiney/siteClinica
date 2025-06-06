import { Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const ContactSection = () => {
  const whatsappNumber = "5511975681709"; // Replace with actual WhatsApp number
  const whatsappMessage = "Olá! Encontrei o site da clínica e tenho interesse em agendar uma consulta. Poderia me passar mais informações? Obrigado!";


  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:+${whatsappNumber}`, '_self');
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/ma.ri.marina/',
      color: 'hover:text-pink-600'
    },
  ];

  return (
    <div className="bg-card rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-semibold mb-6 text-foreground">Entre em Contato</h3>

      {/* WhatsApp CTA */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-center mb-4">
          <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
          <h4 className="text-xl font-semibold text-green-800">
            Fale Conosco pelo WhatsApp
          </h4>
        </div>
        <p className="text-green-700 text-center mb-4">
          Agende sua consulta de forma rápida e prática através do WhatsApp
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Conversar no WhatsApp
        </button>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex items-center p-4 bg-muted rounded-lg">
          <Phone className="w-6 h-6 text-primary mr-3" />
          <div>
            <h5 className="font-semibold text-foreground">Telefone</h5>
            <button
              onClick={handleCallClick}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              (11) 97568-1709
            </button>
          </div>
        </div>

        <div className="flex items-center p-4 bg-muted rounded-lg">
          <Mail className="w-6 h-6 text-primary mr-3" />
          <div>
            <h5 className="font-semibold text-foreground">E-mail</h5>
            <a
              href="mailto:contato@clinica.com.br"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              mrsanini@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center p-4 bg-muted rounded-lg md:col-span-2">
          <MapPin className="w-6 h-6 text-primary mr-3" />
          <div>
            <h5 className="font-semibold text-foreground">Endereço</h5>
            <p className="text-muted-foreground">
            Avenida Imperatriz Leopoldina, 957 - Sala 113<br />
            Vila Leopoldina - São Paulo/SP - CEP 05305-011
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="border-t border-border pt-6">
        <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
          Siga-nos nas Redes Sociais
        </h4>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-muted rounded-full transition-all duration-200 hover:bg-muted/80 ${social.color}`}
                aria-label={`Seguir no ${social.name}`}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>
        <p className="text-center text-muted-foreground mt-4 text-sm">
          Acompanhe nossas novidades e dicas de saúde bucal
        </p>
      </div>

      {/* Business Hours */}
      <div className="mt-6 p-4 bg-muted rounded-lg">
        <h5 className="font-semibold text-foreground mb-3">Horário de Funcionamento</h5>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Segunda a Sexta:</span>
            <span className="text-foreground">8:00 - 18:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sábado:</span>
            <span className="text-foreground">8:00 - 14:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Domingo:</span>
            <span className="text-foreground">Fechado</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;