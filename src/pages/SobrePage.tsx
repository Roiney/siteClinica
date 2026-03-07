import { Helmet } from 'react-helmet';
import { GraduationCap, Award, BookOpen, Heart, Users, Star, MessageCircle, Phone, ShieldCheck } from 'lucide-react';

const SobrePage = () => {
  const whatsappNumber = "5511975681709";
  const whatsappMessage = "Ola! Gostaria de agendar uma consulta com a Dra. Marina.";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Sobre a Dra. Marina Sanini da Rosa | Dentista Especializada em Implantes - Vila Leopoldina, SP</title>
        <meta name="description" content="Conheca a Dra. Marina Sanini da Rosa, cirurgia-dentista especializada em Implantodontia. Formada pela PUCRS, com especializacao pelo CPO Sao Leopoldo Mandic. Atendimento na Vila Leopoldina, Sao Paulo." />
        <meta name="keywords" content="Dra Marina Sanini da Rosa, dentista Vila Leopoldina, implantodontista Sao Paulo, CRO-SP 128955, PUCRS odontologia" />
        <link rel="canonical" href="https://marinaodontologia.com.br/sobre" />
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
                CRO-SP 128955
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dra. Marina Sanini da Rosa
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                Cirurgia-Dentista | Especialista em Implantodontia
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com mais de 10 anos de dedicacao a odontologia, a Dra. Marina alia
                formacao academica solida, especializacao em implantodontia e uma
                abordagem humanizada para devolver sorrisos e qualidade de vida
                aos seus pacientes.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/fotos_da_profissional/dra-marina-retrato.jpeg"
                  alt="Dra. Marina Sanini da Rosa - Cirurgia-Dentista CRO-SP 128955"
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-gray-900">5.0</span>
                    <span className="text-gray-500 text-sm">Google Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formacao e Qualificacoes */}
      <section className="py-16">
        <div className="container-custom">
          <div className="section-heading">
            <h2>Formacao e Qualificacoes</h2>
            <p>Uma trajetoria dedicada ao estudo e a excelencia em odontologia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Graduacao em Odontologia</h3>
              <p className="text-primary font-medium mb-2">PUCRS - Porto Alegre</p>
              <p className="text-gray-600">
                Pontificia Universidade Catolica do Rio Grande do Sul (2010-2016).
                Formacao completa em Odontologia com enfase em Clinica Odontologica.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Especialista em Implantodontia</h3>
              <p className="text-primary font-medium mb-2">CPO Sao Leopoldo Mandic</p>
              <p className="text-gray-600">
                Especializacao em Implantodontia pelo Centro de Pesquisas Odontologicas
                Sao Leopoldo Mandic, referencia nacional em pos-graduacao odontologica.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Producao Academica</h3>
              <p className="text-primary font-medium mb-2">Pesquisa e Publicacao</p>
              <p className="text-gray-600">
                Co-autora do livro "Restauracao Dentoalveolar Imediata - Implantes com
                carga imediata em alveolos comprometidos" (Ed. Santos). Pesquisa em
                tratamento de peri-implantite com laser odontologico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia de Atendimento */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/fotos_da_profissional/dra-marina-atendendo-2.jpeg"
                alt="Dra. Marina Sanini da Rosa atendendo paciente"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Filosofia de Atendimento
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Acredito que cada paciente e unico e merece um atendimento personalizado.
                Minha abordagem combina o que ha de mais moderno em tecnologia odontologica
                com um cuidado humanizado, onde ouvir o paciente e tao importante quanto
                o tratamento em si.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Atendimento Humanizado</h3>
                    <p className="text-gray-600">Ambiente acolhedor e escuta ativa para entender suas necessidades e expectativas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Biosseguranca Rigorosa</h3>
                    <p className="text-gray-600">Protocolos de esterilizacao e biosseguranca seguindo as normas mais exigentes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Tecnologia de Ponta</h3>
                    <p className="text-gray-600">Consultorio equipado com tecnologia moderna para tratamentos mais precisos e confortaveis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numeros */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+500</div>
              <p className="text-gray-600 font-medium">Pacientes Atendidos</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+10</div>
              <p className="text-gray-600 font-medium">Anos de Experiencia</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-4xl md:text-5xl font-bold text-primary">5.0</span>
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-gray-600 font-medium">Avaliacao Google</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <p className="text-gray-600 font-medium">CRO-SP 128955</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Agende sua Consulta com a Dra. Marina
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Atendimento na Vila Leopoldina, Sao Paulo.
            Entre em contato e receba um atendimento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </button>
            <a
              href="tel:+5511975681709"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all border border-white/30"
            >
              <Phone className="w-5 h-5" />
              (11) 97568-1709
            </a>
          </div>
          <p className="text-white/60 text-sm mt-4">
            Dra. Marina Sanini da Rosa - CRO-SP 128955
          </p>
        </div>
      </section>
    </>
  );
};

export default SobrePage;
