import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, MessageCircle } from 'lucide-react';

const cases = [
  {
    id: 1,
    image: "/fotos_de_casos/caso-1.jpeg",
    title: "Reabilitação Oral com Implantes",
    description: "Recuperação completa da função mastigatória e estética do sorriso",
  },
  {
    id: 2,
    image: "/fotos_de_casos/caso-2.jpeg",
    title: "Reabilitação Oral com Implantes",
    description: "Transformação total com implantes e prótese fixa",
  },
  {
    id: 3,
    image: "/fotos_de_casos/caso-3.jpeg",
    title: "Reabilitação Oral com Implantes",
    description: "Devolução do sorriso natural com técnica avançada",
  },
  {
    id: 5,
    image: "/fotos_de_casos/caso-5.jpeg",
    title: "Fechamento de Diastema",
    description: "Correção de espaçamento entre dentes com resina composta",
  },
  {
    id: 6,
    image: "/fotos_de_casos/caso-6.jpeg",
    title: "Clareamento e Restaurações",
    description: "Clareamento dental, limpeza e troca de restaurações insatisfatórias",
  },
  {
    id: 7,
    image: "/fotos_de_casos/caso-7.jpeg",
    title: "Recontorno Estético",
    description: "Harmonização do sorriso com resina composta",
  },
  {
    id: 8,
    image: "/fotos_de_casos/caso-8.jpeg",
    title: "Fechamento de Diastema",
    description: "Correção de espaçamento entre dentes com resina composta",
  },
  {
    id: 9,
    image: "/fotos_de_casos/caso-9.jpeg",
    title: "Reabilitação Oral Completa",
    description: "Tratamento integrado com implantes dentários, estética e função",
  },
];

const BeforeAfter = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const whatsappNumber = "5511975681709";

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  const handleWhatsApp = () => {
    const message = "Olá! Vi os resultados no site e gostaria de agendar uma avaliação para saber como posso transformar meu sorriso também.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? cases.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === cases.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="casos" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="section-heading">
          <h2>Resultados em Reabilitação Oral</h2>
          <p>
            Especialidade da clínica: reabilitação oral com implantes dentários.
            Confira alguns dos resultados obtidos pela Dra. Marina.
          </p>
        </div>

        {/* Grid de casos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Badge Antes/Depois */}
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                Antes / Depois
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{caseItem.title}</h3>
                  <p className="text-white/80 text-sm">{caseItem.description}</p>
                </div>
              </div>
              {/* Ícone de expandir */}
              <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA após galeria */}
        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Quer um resultado assim para você?
          </p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Quero Transformar Meu Sorriso
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Avaliação sem compromisso
          </p>
        </div>

        {/* Aviso legal */}
        <p className="text-center text-xs text-gray-400 mt-8">
          * Os resultados podem variar de acordo com cada paciente. Imagens publicadas com autorização.
        </p>
      </div>

      {/* Modal de imagem ampliada */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeModal}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={cases[selectedImage].image}
              alt={cases[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{cases[selectedImage].title}</h3>
              <p className="text-gray-300">{cases[selectedImage].description}</p>
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default BeforeAfter;
