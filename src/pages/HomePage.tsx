import { Helmet } from 'react-helmet';
import CallToAction from '../components/home/CallToAction';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>DentalCare - Exceptional Dental Implants & General Dentistry</title>
        <meta name="description" content="DentalCare provides exceptional dental implants and general dentistry services with a focus on patient comfort and advanced technology." />
        <meta name="keywords" content="dentist, dental implants, general dentistry, cosmetic dentistry, family dentist" />
        <link rel="canonical" href="https://dentalcare.com" />
      </Helmet>
      
      <Hero />
      <Services />
      {/* <Testimonials /> */}
      <CallToAction />
    </>
  );
};

export default HomePage;