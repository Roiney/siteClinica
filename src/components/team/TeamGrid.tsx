import TeamMember from './TeamMember';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Jennifer Williams",
    role: "Chief Dental Surgeon",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Dr. Williams has over 15 years of experience in implant dentistry. She leads our team with a commitment to excellence and patient-centered care.",
    specialties: ["Dental Implants", "Oral Surgery", "Restorative Dentistry"],
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Dr. Robert Chen",
    role: "Cosmetic Dentist",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Dr. Chen specializes in cosmetic dentistry, helping patients achieve their dream smile with veneers, whitening, and smile makeovers.",
    specialties: ["Cosmetic Dentistry", "Teeth Whitening", "Veneers"],
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Dr. Maria Rodriguez",
    role: "Orthodontist",
    image: "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Dr. Rodriguez is our orthodontics expert, providing comprehensive treatment options for patients of all ages, including clear aligners and braces.",
    specialties: ["Orthodontics", "Clear Aligners", "Braces"],
    social: {
      facebook: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Dr. James Thompson",
    role: "Pediatric Dentist",
    image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Dr. Thompson specializes in pediatric dentistry, making dental visits fun and comfortable for our youngest patients.",
    specialties: ["Pediatric Dentistry", "Preventive Care", "Child Psychology"],
    social: {
      facebook: "#",
      twitter: "#"
    }
  },
  {
    id: 5,
    name: "Amanda Peterson",
    role: "Dental Hygienist",
    image: "https://images.pexels.com/photos/5214993/pexels-photo-5214993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Amanda has been with our practice for 8 years, providing thorough cleanings and educating patients on proper oral hygiene practices.",
    specialties: ["Teeth Cleaning", "Oral Hygiene", "Patient Education"],
    social: {
      facebook: "#",
      linkedin: "#"
    }
  },
  {
    id: 6,
    name: "Sarah Johnson",
    role: "Office Manager",
    image: "https://images.pexels.com/photos/6098054/pexels-photo-6098054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Sarah manages our office operations, ensuring everything runs smoothly so our team can focus on providing exceptional dental care.",
    specialties: ["Scheduling", "Insurance Coordination", "Patient Relations"],
    social: {
      linkedin: "#"
    }
  }
];

const TeamGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member) => (
        <TeamMember 
          key={member.id}
          name={member.name}
          role={member.role}
          image={member.image}
          bio={member.bio}
          specialties={member.specialties}
          social={member.social}
        />
      ))}
    </div>
  );
};

export default TeamGrid;