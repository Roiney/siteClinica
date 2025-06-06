import { Link } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para um sorriso mais saudável?</h2>
              <p className="text-gray-600 mb-8">
                Agende sua consulta hoje mesmo e dê o primeiro passo para uma saúde bucal ideal.
                Nossa equipe de especialistas está preparada para oferecer o melhor atendimento para você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  <CalendarCheck className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Link>
                <Link to="/contact" className="btn-outline">
                  Fale Conosco
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mulher sorrindo mostrando dentes saudáveis" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
