import BlogPost from './BlogPost';

const blogPosts = [
  {
    id: 1,
    title: "Implante Dentario: Tudo o Que Voce Precisa Saber Antes de Fazer",
    excerpt: "Entenda como funciona o procedimento de implante dentario, desde a consulta inicial ate a colocacao da protese definitiva. Saiba quais sao os beneficios e cuidados necessarios.",
    date: "28 de Fevereiro, 2026",
    author: "Dra. Marina Sanini da Rosa",
    image: "/fotos_de_casos/caso-1.jpeg",
    category: "Implantes Dentarios",
    featured: true
  },
  {
    id: 2,
    title: "Reabilitacao Oral: Quando e Indicada e Como Funciona",
    excerpt: "A reabilitacao oral devolve funcao mastigatoria e estetica para quem perdeu dentes. Saiba quando o tratamento e indicado e quais tecnicas estao disponiveis.",
    date: "20 de Fevereiro, 2026",
    author: "Dra. Marina Sanini da Rosa",
    image: "/fotos_de_casos/caso-2.jpeg",
    category: "Reabilitacao Oral"
  },
  {
    id: 3,
    title: "Quando Levar Seu Filho ao Dentista pela Primeira Vez",
    excerpt: "A primeira consulta odontologica do seu filho e fundamental para criar habitos saudaveis. Descubra a idade ideal e como preparar a crianca para a visita.",
    date: "12 de Fevereiro, 2026",
    author: "Dra. Marina Sanini da Rosa",
    image: "/fotos_da_sala/clinica-3.jpg",
    category: "Odontopediatria"
  },
  {
    id: 4,
    title: "Clareamento Dental: Opcoes Profissionais e Cuidados",
    excerpt: "Comparamos as diferentes tecnicas de clareamento dental profissional e explicamos os cuidados para manter os resultados por mais tempo.",
    date: "5 de Fevereiro, 2026",
    author: "Dra. Marina Sanini da Rosa",
    image: "/fotos_de_casos/caso-6.jpeg",
    category: "Odontologia Estetica"
  },
  {
    id: 5,
    title: "Saude Bucal e Saude Geral: Qual a Relacao?",
    excerpt: "Descubra como a saude da sua boca pode impactar todo o seu organismo, incluindo a relacao com doencas cardiovasculares e diabetes.",
    date: "28 de Janeiro, 2026",
    author: "Dra. Marina Sanini da Rosa",
    image: "/fotos_da_sala/clinica-1.jpg",
    category: "Saude Bucal"
  },
  {
    id: 6,
    title: "Dor de Dente: Quando Procurar Atendimento de Urgencia",
    excerpt: "Nem toda dor de dente e igual. Saiba identificar quando a situacao requer atendimento imediato e o que fazer enquanto aguarda a consulta.",
    date: "20 de Janeiro, 2026",
    author: "Dra. Marina Sanini da Rosa",
    image: "/fotos_da_sala/clinica-2.jpg",
    category: "Urgencia Odontologica"
  }
];

const BlogGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogPost
          key={post.id}
          id={post.id}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          author={post.author}
          image={post.image}
          category={post.category}
          featured={post.featured}
        />
      ))}
    </div>
  );
};

export default BlogGrid;
