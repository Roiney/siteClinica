import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import TratamentosPage from './pages/TratamentosPage';
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/tratamentos" element={<TratamentosPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
      <WhatsAppButton />
    </>
  );
}

export default App;
