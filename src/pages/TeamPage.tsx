import { Helmet } from 'react-helmet';
import TeamGrid from '../components/team/TeamGrid';

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Expert Dental Team | DentalCare</title>
        <meta name="description" content="Meet our team of experienced dental professionals specializing in implants, cosmetic, and general dentistry." />
        <meta name="keywords" content="dental team, dentists, dental specialists, dental implant experts" />
        <link rel="canonical" href="https://dentalcare.com/team" />
      </Helmet>
      
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container-custom">
          <div className="section-heading">
            <h1>Our Expert Team</h1>
            <p>
              Meet our dedicated team of dental professionals committed to providing
              you with exceptional care and beautiful, healthy smiles.
            </p>
          </div>
          
          <div className="mt-12">
            <TeamGrid />
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;