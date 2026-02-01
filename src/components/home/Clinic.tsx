import { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const clinicImages = [
  { src: "/fotos_da_sala/clinica-1.jpg", alt: "Sala de atendimento moderna" },
  { src: "/fotos_da_sala/clinica-2.jpg", alt: "Equipamentos de última geração" },
  { src: "/fotos_da_sala/clinica-3.jpg", alt: "Ambiente confortável" },
  { src: "/fotos_da_sala/clinica-4.jpg", alt: "Recepção acolhedora" },
  { src: "/fotos_da_sala/clinica-5.jpg", alt: "Consultório equipado" },
];

const Clinic = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? clinicImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === clinicImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="clinica" className="py-16 bg-white">
      <div className="container-custom">
        <div className="section-heading">
          <h2>Conheça Nossa Clínica</h2>
          <p>
            Um ambiente moderno, acolhedor e equipado com tecnologia de ponta
            para oferecer o melhor atendimento odontológico.
          </p>
        </div>

        <div className="mt-12">
          {/* Video Section */}
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
            {!showVideo ? (
              <div className="relative aspect-video bg-gray-900">
                <img
                  src="/fotos_da_sala/clinica-1.jpg"
                  alt="Clínica Dra. Marina"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="bg-white/90 hover:bg-white text-primary rounded-full p-6 shadow-xl transition-transform hover:scale-110"
                  >
                    <Play className="w-12 h-12 fill-current" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-xl font-semibold">Tour Virtual pela Clínica</h3>
                  <p className="text-white/80">Conheça nosso espaço e estrutura</p>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video bg-black">
                <video
                  src="/fotos_da_sala/clinica-video.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {clinicImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Biossegurança</h3>
            <p className="text-gray-600 text-sm">
              Protocolos rigorosos de esterilização e segurança em todos os procedimentos.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Tecnologia Avançada</h3>
            <p className="text-gray-600 text-sm">
              Equipamentos de última geração para diagnósticos precisos e tratamentos eficientes.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Atendimento Humanizado</h3>
            <p className="text-gray-600 text-sm">
              Ambiente acolhedor e equipe preparada para cuidar de você com carinho e respeito.
            </p>
          </div>
        </div>
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
              src={clinicImages[selectedImage].src}
              alt={clinicImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-center text-white mt-4">{clinicImages[selectedImage].alt}</p>
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

export default Clinic;
