
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedDishes from '@/components/FeaturedDishes';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "GINETTE - Restaurant Raffiné";
  }, []);

  return (
    <div className="min-h-screen bg-ginette-cream">
      <Navigation />
      <Hero />
      <About />
      <FeaturedDishes />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
