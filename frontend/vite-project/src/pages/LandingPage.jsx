import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Section from '../components/Section';
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <WhyChooseUs />
      <About />
      <Projects />
      <Clients />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default LandingPage;