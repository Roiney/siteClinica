import { Helmet } from 'react-helmet';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/contact/LocationMap';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Fale Conosco | Clínica DentalCare</title>
        <meta
          name="description"
          content="Entre em contato com a Clínica DentalCare para agendar sua consulta ou saber mais sobre nossos serviços de implantes dentários e odontologia geral."
        />
        <meta
          name="keywords"
          content="contato dentista, agendar consulta odontológica, clínica odontológica"
        />
        <link rel="canonical" href="https://dentalcare.com.br/contato" />
      </Helmet>

      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container-custom">
          <div className="section-heading">
            <h1>Fale Conosco</h1>
            <p>
              Tem dúvidas ou deseja agendar sua consulta? Entre em contato com
              nossa equipe — teremos prazer em atendê-lo(a).
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <LocationMap />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
