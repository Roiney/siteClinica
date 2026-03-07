import { Helmet } from 'react-helmet';
import { MessageCircle, Phone, Smile, ShieldCheck, Baby, Heart, Clock, CheckCircle } from 'lucide-react';

const ToothIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C9.5 2 7 3.5 7 6c0 1.5.5 2.5 1 3.5.5 1 1 2 1 3.5 0 2-1 4-1 6 0 2 1 3 2 3s2-1 2-3v-3c0-.5.5-1 1-1s1 .5 1 1v3c0 2 1 3 2 3s2-1 2-3c0-2-1-4-1-6 0-1.5.5-2.5 1-3.5.5-1 1-2 1-3.5 0-2.5-2.5-4-5-4z" />
  </svg>
);

const treatments = [
  {
    id: "reabilitacao-oral",
    title: "Reabilitacao Oral",
    subtitle: "Nossa Especialidade",
    icon: <ToothIcon className="w-10 h-10 text-primary" />,
    description: "A reabilitacao oral e a area da odontologia dedicada a devolver funcao mastigatoria, estetica e qualidade de vida aos pacientes que perderam um ou mais dentes. Utilizamos implantes dentarios, proteses fixas e tecnicas avancadas para reconstruir sorrisos de forma completa e duradoura.",
    indications: [
      "Perda de um ou mais dentes",
      "Proteses removiveis antigas ou mal adaptadas",
      "Dentes comprometidos por carie ou doenca periodontal",
      "Dificuldade para mastigar ou falar",
      "Insatisfacao estetica com o sorriso",
    ],
    whatsappText: "Ola! Gostaria de saber mais sobre Reabilitacao Oral com Implantes.",
    featured: true,
  },
  {
    id: "implantes-dentarios",
    title: "Implantes Dentarios",
    subtitle: "Tecnologia e Precisao",
    icon: <ToothIcon className="w-10 h-10 text-primary" />,
    description: "Os implantes dentarios sao raizes artificiais de titanio que substituem dentes perdidos de forma definitiva. O procedimento e seguro, indolor e oferece resultados que se assemelham aos dentes naturais em funcao e aparencia.",
    indications: [
      "Substituicao de dentes perdidos",
      "Alternativa a proteses removiveis",
      "Preservacao do osso maxilar",
      "Melhora na mastigacao e fala",
      "Resultado estetico natural e duradouro",
    ],
    whatsappText: "Ola! Gostaria de saber mais sobre Implantes Dentarios.",
  },
  {
    id: "odontologia-estetica",
    title: "Odontologia Estetica",
    subtitle: "Transforme Seu Sorriso",
    icon: <Smile className="w-10 h-10 text-primary" />,
    description: "A odontologia estetica combina tecnicas avancadas para harmonizar o sorriso. Oferecemos clareamento dental, facetas e lentes de contato dental, restauracoes esteticas e planejamento digital do sorriso.",
    indications: [
      "Clareamento dental profissional",
      "Facetas e lentes de contato dental",
      "Restauracoes esteticas em resina",
      "Fechamento de diastemas",
      "Recontorno estetico dental",
    ],
    whatsappText: "Ola! Gostaria de saber mais sobre Odontologia Estetica.",
  },
  {
    id: "odontologia-geral",
    title: "Odontologia Geral",
    subtitle: "Cuidado Completo",
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    description: "Atendimento odontologico completo e preventivo para manter sua saude bucal em dia. Realizamos limpezas profissionais, restauracoes, tratamento de canal, exodontias e acompanhamento periodontal.",
    indications: [
      "Limpeza e profilaxia dental",
      "Restauracoes e tratamento de caries",
      "Tratamento de canal (endodontia)",
      "Exodontias (extracoes)",
      "Prevencao e acompanhamento periodontal",
    ],
    whatsappText: "Ola! Gostaria de agendar uma consulta de Odontologia Geral.",
  },
  {
    id: "odontopediatria",
    title: "Odontopediatria",
    subtitle: "Sorrisos desde a Infancia",
    icon: <Baby className="w-10 h-10 text-primary" />,
    description: "Atendimento odontologico infantil em ambiente acolhedor, com abordagem ludica e gentil. Cuidamos da saude bucal do seu filho desde os primeiros dentinhos, promovendo habitos saudaveis para toda a vida.",
    indications: [
      "Primeira consulta odontologica",
      "Prevencao de caries infantil",
      "Aplicacao de fluor e selantes",
      "Acompanhamento do desenvolvimento dentario",
      "Orientacao de higiene para pais e criancas",
    ],
    whatsappText: "Ola! Gostaria de agendar uma consulta de Odontopediatria para meu filho(a).",
  },
  {
    id: "ortodontia",
    title: "Ortodontia",
    subtitle: "Alinhamento e Harmonia",
    icon: <Heart className="w-10 h-10 text-primary" />,
    description: "Correcao de dentes e mandibulas desalinhadas com diferentes opcoes de aparelhos ortodonticos. Tratamos mordida cruzada, apinhamento, espacamentos e outros problemas de oclusao.",
    indications: [
      "Dentes tortos ou desalinhados",
      "Mordida cruzada, aberta ou profunda",
      "Espacamento excessivo entre dentes",
      "Apinhamento dentario",
      "Alinhadores esteticos transparentes",
    ],
    whatsappText: "Ola! Gostaria de saber mais sobre Ortodontia.",
  },
  {
    id: "urgencia",
    title: "Atendimento de Urgencia",
    subtitle: "Quando Voce Mais Precisa",
    icon: <Clock className="w-10 h-10 text-primary" />,
    description: "Atendimento odontologico imediato para situacoes que nao podem esperar. Dor de dente intensa, trauma dental, inchaco ou sangramento: entre em contato e agende no mesmo dia.",
    indications: [
      "Dor de dente intensa",
      "Trauma ou fratura dental",
      "Inchaco ou abscesso",
      "Sangramento gengival persistente",
      "Protese ou restauracao solta",
    ],
    whatsappText: "Ola! Preciso de atendimento de urgencia.",
  },
];

const TratamentosPage = () => {
  const whatsappNumber = "5511975681709";

  const handleWhatsApp = (message: string) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Tratamentos Odontologicos | Dra. Marina Sanini da Rosa - Vila Leopoldina, SP</title>
        <meta name="description" content="Conheca os tratamentos odontologicos oferecidos pela Dra. Marina Sanini da Rosa: implantes dentarios, reabilitacao oral, estetica dental, ortodontia e mais. Vila Leopoldina, Sao Paulo." />
        <meta name="keywords" content="tratamentos odontologicos, implante dentario Sao Paulo, reabilitacao oral Vila Leopoldina, odontologia estetica, ortodontia, odontopediatria, dentista Vila Leopoldina" />
        <link rel="canonical" href="https://marinaodontologia.com.br/tratamentos" />
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container-custom">
          <div className="section-heading">
            <h1>Tratamentos Odontologicos Especializados</h1>
            <p>
              A Dra. Marina Sanini da Rosa oferece atendimento odontologico completo,
              com especialidade em <strong>reabilitacao oral com implantes dentarios</strong>.
              Conheca nossos tratamentos e agende sua consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Tratamentos */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-16">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                id={treatment.id}
                className={`scroll-mt-24 ${treatment.featured ? 'bg-primary/5 border border-primary/20' : 'bg-white border border-gray-100'} rounded-2xl p-8 md:p-10 shadow-sm`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${treatment.featured ? 'bg-primary/10' : 'bg-gray-100'} p-3 rounded-xl`}>
                        {treatment.icon}
                      </div>
                      <div>
                        {treatment.featured && (
                          <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-1">
                            Nossa Especialidade
                          </span>
                        )}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{treatment.title}</h2>
                        <p className="text-primary font-medium">{treatment.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {treatment.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Indicacoes e procedimentos:</h3>
                      <ul className="space-y-2">
                        {treatment.indications.map((indication, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-gray-600">{indication}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleWhatsApp(treatment.whatsappText)}
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Agendar Consulta
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Agende sua Consulta
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato e agende sua consulta com a Dra. Marina Sanini da Rosa.
            Atendimento personalizado na Vila Leopoldina, Sao Paulo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsApp("Ola! Gostaria de agendar uma consulta com a Dra. Marina.")}
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

export default TratamentosPage;
