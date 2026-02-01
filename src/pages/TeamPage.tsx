import { Helmet } from 'react-helmet';
import TeamGrid from '../components/team/TeamGrid';

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Nossa Equipe | Dra. Marina Sanini da Rosa</title>
        <meta name="description" content="Conheça a equipe de profissionais especializados em implantes, odontologia estética e geral da Dra. Marina Sanini da Rosa." />
        <meta name="keywords" content="equipe odontológica, dentistas, especialistas em implantes, Dra. Marina" />
        <link rel="canonical" href="https://marinaodontologia.com.br/equipe" />
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