import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="pt-25">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
