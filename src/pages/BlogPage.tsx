import { Helmet } from 'react-helmet';
import { Search } from 'lucide-react';
import BlogGrid from '../components/blog/BlogGrid';

const categories = [
  "Todas as Categorias",
  "Implantes Dentarios",
  "Reabilitacao Oral",
  "Odontologia Estetica",
  "Saude Bucal",
  "Urgencia Odontologica"
];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog de Saude Bucal | Dra. Marina Sanini da Rosa - Dentista Vila Leopoldina, SP</title>
        <meta name="description" content="Artigos e dicas sobre implantes dentarios, reabilitacao oral, odontologia estetica e como manter sua saude bucal em dia. Por Dra. Marina Sanini da Rosa, dentista na Vila Leopoldina, Sao Paulo." />
        <meta name="keywords" content="blog odontologia, saude bucal, implantes dentarios Vila Leopoldina, dicas dentista Sao Paulo, reabilitacao oral" />
        <link rel="canonical" href="https://marinaodontologia.com.br/blog" />
      </Helmet>

      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container-custom">
          <div className="section-heading">
            <h1>Blog de Saude Bucal</h1>
            <p>
              Artigos, dicas e orientacoes da Dra. Marina Sanini da Rosa
              para voce cuidar melhor da sua saude bucal.
            </p>
          </div>

          <div className="mt-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar artigos..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <BlogGrid />

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Conteudo produzido por Dra. Marina Sanini da Rosa - CRO-SP 128955
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
