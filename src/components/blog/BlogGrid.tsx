import BlogPost from './BlogPost';
import { blogPosts } from '../../data/blogPosts';

const BlogGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogPost
          key={post.id}
          slug={post.slug}
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
