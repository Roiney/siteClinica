import { Helmet } from 'react-helmet';
import { MessageCircle, Phone, Clock, MapPin, Send, User, Mail } from 'lucide-react';
import { useState } from 'react';
import LocationMap from '../components/contact/LocationMap';

const ContactPage = () => {
  const whatsappNumber = "5511975681709";
  const whatsappMessage = "Olá! Vi o site e gostaria de agendar uma avaliação com a Dra. Marina.";

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:+${whatsappNumber}`, '_self');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envia via WhatsApp com os dados do formulário
    const formMessage = `Olá! Vim pelo formulário do site.

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email || 'Não informado'}
*Mensagem:* ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formMessage)}`, '_blank');
    setFormStatus('success');
    setFormData({ name: '', phone: '', email: '', message: '' });

    // Reset status after 5 seconds
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Agende sua Avaliação | Dra. Marina Sanini da Rosa - Odontologia em São Paulo</title>
        <meta
          name="description"
          content="Agende sua consulta com a Dra. Marina Sanini da Rosa. Especialista em implantes dentários e odontologia estética na Vila Leopoldina, São Paulo."
        />
        <meta
          name="keywords"
          content="agendar dentista São Paulo, consulta odontológica Vila Leopoldina, Dra Marina Sanini, implantes dentários São Paulo"
        />
        <link rel="canonical" href="https://marinaodontologia.com.br/contact" />
      </Helmet>

      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container-custom">
          {/* Hero de Contato */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agende sua Avaliação
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Atendimento rápido e personalizado. Escolha a melhor forma de entrar em contato.
            </p>

            {/* CTAs Principais */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Agendar pelo WhatsApp
              </button>
              <button
                onClick={handleCall}
                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-all shadow-md border border-gray-200 text-lg"
              >
                <Phone className="w-6 h-6 text-primary" />
                Ligar Agora
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Avaliação sem compromisso • Resposta em até 2 horas
            </p>
          </div>

          {/* Formulário de Contato */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                Prefere que entremos em contato?
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Preencha o formulário abaixo e retornaremos em até 2 horas
              </p>

              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 text-center font-medium">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp / Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail (opcional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Qual o motivo do seu contato? *
                  </label>
                  <select
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Quero agendar uma avaliação">Quero agendar uma avaliação</option>
                    <option value="Implantes dentários">Implantes dentários</option>
                    <option value="Odontologia estética">Odontologia estética</option>
                    <option value="Odontologia geral">Odontologia geral</option>
                    <option value="Odontopediatria">Odontopediatria</option>
                    <option value="Ortodontia">Ortodontia</option>
                    <option value="Urgência odontológica">Urgência odontológica</option>
                    <option value="Outro assunto">Outro assunto</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Ao enviar, você será redirecionado para o WhatsApp para confirmar o envio.
              </p>
            </div>
          </div>

          {/* Cards de Informação */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <div className="bg-primary/10 text-primary rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Telefone</h3>
              <a href="tel:+5511975681709" className="text-primary hover:underline text-lg font-medium">
                (11) 97568-1709
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <div className="bg-primary/10 text-primary rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Horário</h3>
              <p className="text-gray-600">
                Seg a Sex: 8h às 18h<br />
                Sábado: 9h às 13h
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <div className="bg-primary/10 text-primary rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Endereço</h3>
              <p className="text-gray-600 text-sm">
                Av. Imperatriz Leopoldina, 957<br />
                Sala 113 - Vila Leopoldina, SP
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <LocationMap />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
