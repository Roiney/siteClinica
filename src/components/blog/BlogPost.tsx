import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  featured?: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({
  id,
  title,
  excerpt,
  date,
  author,
  image,
  category,
  featured = false
}) => {
  return (
    <article className={`card h-full flex flex-col overflow-hidden ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`aspect-video overflow-hidden ${featured ? 'md:aspect-[16/9]' : ''}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4 flex items-center">
          <span className="inline-block bg-primary-light/20 text-primary text-xs px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className={`font-semibold mb-3 ${featured ? 'text-2xl' : 'text-xl'}`}>
          <Link to={`/blog/${id}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;