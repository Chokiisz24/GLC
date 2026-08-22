import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Telemetry from './components/Telemetry';
import About from './components/About';
import RodadasTimeline from './components/RodadasTimeline';
import Gallery from './components/Gallery';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="grain" />
      <Navbar />
      <Hero />
      <Telemetry />
      <About />
      <RodadasTimeline />
      <Gallery />
      <JoinSection />
      <Footer />
    </>
  );
}
