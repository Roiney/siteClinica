import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Roiney Beal",
    location: "Google Reviews",
    treatment: "Tratamento Completo",
    highlight: "Superou totalmente minhas expectativas!",
    text: "Minha experiência na clínica da Dra. Marina foi excelente. Desde o primeiro atendimento, tudo foi feito com muito cuidado e atenção. A Dra. Marina é super profissional, explica cada passo do tratamento de um jeito simples e passa muita segurança. O ambiente é super agradável, bem organizado e acolhedor. Recomendo demais!",
    rating: 5,
    timeAgo: "recente",
  },
  {
    id: 2,
    name: "Priscila Stravatti",
    location: "Google Reviews",
    treatment: "Paciente desde 2021",
    highlight: "Não troco ela por nada!",
    text: "Sou paciente da Dra. Marina desde 2021. Ela é uma ótima profissional, muito competente tecnicamente e sempre manteve um cuidado excepcional no pós atendimento. Ela acompanhou muito de perto a evolução do meu caso.",
    rating: 5,
    timeAgo: "há 6 meses",
  },
  {
    id: 3,
    name: "EMC",
    location: "Google Reviews",
    treatment: "Atendimento Geral",
    highlight: "Simplesmente impecável!",
    text: "O atendimento da Dra. Marina Sanini da Rosa superou todas as minhas expectativas — profissionalismo, atenção aos detalhes e um cuidado genuíno com o paciente do início ao fim. Além da excelência técnica, o ambiente é muito acolhedor.",
    rating: 5,
    timeAgo: "há 7 meses",
  },
  {
    id: 4,
    name: "Felipe Albornoz Neto",
    location: "Google Reviews",
    treatment: "Atendimento Geral",
    highlight: "Atendimento de excelência!",
    text: "Fui muito bem atendido na clínica. Ótimo ambiente. Destaque para as orientações super claras dadas, cuidado com o bem estar do paciente, atenção aos detalhes e conhecimento técnico dos profissionais.",
    rating: 5,
    timeAgo: "há 6 meses",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container-custom">
        <div className="section-heading">
          <h2>O Que Nossos Pacientes Dizem</h2>
          <p>
            A satisfação dos nossos pacientes é a nossa maior recompensa. Veja alguns depoimentos
            de quem já transformou o sorriso com a gente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-6 relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6 bg-primary text-white p-2 rounded-lg">
                <Quote className="w-5 h-5" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Highlight */}
              <p className="text-primary font-semibold text-lg mb-3">
                "{testimonial.highlight}"
              </p>

              {/* Testimonial text */}
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {testimonial.text}
              </p>

              {/* Author info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{testimonial.treatment}</p>
                    <p className="text-xs text-gray-400">{testimonial.timeAgo}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/search?q=Dra+Marina+Sanini+da+Rosa+-+Odontologia+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-gray-50 hover:bg-gray-100 px-6 py-4 rounded-full transition-colors"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold text-gray-900">5.0</span>
              <span className="text-gray-500"> • Ver todas as avaliações no Google</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
