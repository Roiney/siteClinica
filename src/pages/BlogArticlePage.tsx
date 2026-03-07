import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, User, ArrowLeft, MessageCircle } from 'lucide-react';
import { getPostBySlug, blogPosts } from '../data/blogPosts';

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;

  const whatsappNumber = "5511975681709";

  const handleWhatsApp = () => {
    const message = `Ola! Li o artigo "${post?.title}" no blog e gostaria de agendar uma consulta.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!post) {
    return (
      <section className="pt-28 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Artigo nao encontrado</h1>
          <p className="text-gray-600 mb-8">O artigo que voce procura nao existe ou foi removido.</p>
          <Link to="/blog" className="btn btn-primary">
            Voltar ao Blog
          </Link>
        </div>
      </section>
    );
  }

  const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let listKey = 0;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${listKey++}`} className="list-disc list-inside space-y-2 text-gray-700 mb-6 pl-4">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const formatInline = (text: string): string => {
      return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed === '') {
        flushList();
        return;
      }

      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-gray-800 mt-8 mb-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('- ')) {
        listItems.push(trimmed.replace('- ', ''));
      } else if (/^\d+\.\s/.test(trimmed)) {
        flushList();
        listItems.push(trimmed.replace(/^\d+\.\s/, ''));
      } else {
        flushList();
        elements.push(
          <p key={index} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Dra. Marina Sanini da Rosa - Dentista Vila Leopoldina, SP</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, dentista Vila Leopoldina, Dra Marina Sanini da Rosa, odontologia Sao Paulo`} />
        <link rel="canonical" href={`https://marinaodontologia.com.br/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={`https://marinaodontologia.com.br${post.image}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="pt-28 pb-16">
        <div className="container-custom max-w-4xl">
          {/* Voltar */}
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </button>

          {/* Header do artigo */}
          <div className="mb-8">
            <span className="inline-block bg-primary-light/20 text-primary text-sm px-4 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>

          {/* Imagem principal */}
          <div className="aspect-video overflow-hidden rounded-2xl mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Conteudo */}
          <div className="prose-custom">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ficou com alguma duvida?
            </h3>
            <p className="text-gray-600 mb-6">
              Agende uma consulta com a Dra. Marina Sanini da Rosa e tire todas as suas duvidas pessoalmente.
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </button>
            <p className="text-xs text-gray-500 mt-4">
              Dra. Marina Sanini da Rosa - CRO-SP 128955
            </p>
          </div>

          {/* Artigos relacionados */}
          {otherPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Outros artigos</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPosts.map(related => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="card overflow-hidden group"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-primary font-medium">{related.category}</span>
                      <h4 className="font-semibold text-gray-900 mt-1 group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default BlogArticlePage;
