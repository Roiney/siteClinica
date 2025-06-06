import { Helmet } from 'react-helmet';
import CallToAction from '../components/home/CallToAction';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Dra. Marina Sanini da Rosa | Odontologia Especializada em São Paulo</title>
        <meta
          name="description"
          content="Clínica odontológica da Dra. Marina Sanini da Rosa. Especializada em implantes dentários, odontologia estética e atendimento humanizado em São Paulo."
        />
        <meta
          name="keywords"
          content="dentista São Paulo, Dra. Marina Sanini da Rosa, implantes dentários, odontologia estética, clínica odontológica, dentista especializada"
        />
        <link rel="canonical" href="https://marinaodontologia.com.br" />
      </Helmet>

      <Hero />
      <Services />
      {/* <Testimonials /> */}
      <CallToAction />
    </>
  );
};

export default HomePage;
