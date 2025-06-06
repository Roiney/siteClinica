import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-white pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Seu <span className="text-primary">Sorriso</span> Merece o Melhor Cuidado
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Experimente um atendimento odontológico excepcional com nossa equipe de especialistas em implantes dentários e odontologia geral, utilizando tecnologia de ponta para seu sorriso perfeito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Agendar Consulta
              </Link>
              <Link to="/#services" className="btn-outline">
                Nossos Serviços
              </Link>
            </div>
   
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dentista examinando paciente com um sorriso" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-success-light text-success rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Especialistas Certificados</p>
                  <p className="text-xs text-gray-500">Treinamento Avançado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-light opacity-10 rounded-full -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary-light opacity-10 rounded-full -z-10" />
    </section>
  );
};

export default Hero;