import BlogPost from './BlogPost';

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Dental Implants: Procedure, Recovery, and Benefits",
    excerpt: "Understand the entire process of getting dental implants, from initial consultation to final placement, and learn about the long-term benefits they provide.",
    date: "June 15, 2025",
    author: "Dr. Jennifer Williams",
    image: "https://images.pexels.com/photos/3845708/pexels-photo-3845708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Dental Implants",
    featured: true
  },
  {
    id: 2,
    title: "5 Common Myths About Root Canals Debunked",
    excerpt: "Many people fear root canals due to misconceptions. We debunk the most common myths and explain why this procedure isn't as scary as you think.",
    date: "June 10, 2025",
    author: "Dr. Robert Chen",
    image: "https://images.pexels.com/photos/3845741/pexels-photo-3845741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "General Dentistry"
  },
  {
    id: 3,
    title: "How to Properly Care for Your Child's Teeth",
    excerpt: "Learn the best practices for maintaining your child's oral health, from their first tooth to adolescence, with tips from our pediatric dentistry experts.",
    date: "June 5, 2025",
    author: "Dr. James Thompson",
    image: "https://images.pexels.com/photos/4687256/pexels-photo-4687256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Pediatric Dentistry"
  },
  {
    id: 4,
    title: "The Connection Between Oral Health and Overall Wellness",
    excerpt: "Discover how your oral health can impact your overall physical wellbeing, including connections to heart disease, diabetes, and other conditions.",
    date: "May 28, 2025",
    author: "Dr. Maria Rodriguez",
    image: "https://images.pexels.com/photos/6528861/pexels-photo-6528861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Health & Wellness"
  },
  {
    id: 5,
    title: "Teeth Whitening: Professional vs. At-Home Options",
    excerpt: "Compare the effectiveness, cost, and safety of professional teeth whitening treatments against over-the-counter and DIY whitening methods.",
    date: "May 20, 2025",
    author: "Amanda Peterson",
    image: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Cosmetic Dentistry"
  },
  {
    id: 6,
    title: "What to Expect During Your First Orthodontic Consultation",
    excerpt: "If you're considering braces or clear aligners, learn what happens during your first consultation and how to prepare for your orthodontic journey.",
    date: "May 15, 2025",
    author: "Dr. Maria Rodriguez",
    image: "https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Orthodontics"
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