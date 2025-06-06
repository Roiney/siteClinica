import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  bio,
  specialties,
  social = {}
}) => {
  return (
    <div className="card overflow-hidden h-full flex flex-col">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - ${role}`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-4">{role}</p>
        <p className="text-gray-600 mb-4 flex-grow">{bio}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span 
                key={index} 
                className="inline-block bg-primary-light/20 text-primary text-xs px-3 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        {/* Social Links */}
        {(social.facebook || social.twitter || social.linkedin) && (
          <div className="flex space-x-3 mt-auto pt-4 border-t border-gray-100">
            {social.facebook && (
              <a 
                href={social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label={`${name}'s Facebook`}
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
            {social.twitter && (
              <a 
                href={social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label={`${name}'s Twitter`}
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {social.linkedin && (
              <a 
                href={social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;