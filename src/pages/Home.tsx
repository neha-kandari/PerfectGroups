import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductRange from '../components/ProductRange';
import HowWeWork from '../components/HowWeWork';
import WhoWeAre from '../components/WhoWeAre';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProductRange />
        <WhyChooseUs />
        <HowWeWork />
        <WhoWeAre />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
