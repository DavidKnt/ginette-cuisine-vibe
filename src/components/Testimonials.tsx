
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Client fidèle",
    quote: "Un endroit magique, une cuisine d'exception et un service impeccable. Je reviens régulièrement chez Ginette pour leur célèbre filet de bœuf Rossini."
  },
  {
    id: 2,
    name: "Jean-Philippe Martin",
    role: "Guide Michelin",
    quote: "Ginette nous offre une cuisine authentique et raffinée, mettant en valeur des produits d'excellence. Une adresse à ne pas manquer à Paris."
  },
  {
    id: 3,
    name: "Sophie Leclerc",
    role: "Blogueuse culinaire",
    quote: "J'ai été conquise par la délicatesse des plats et l'ambiance feutrée du restaurant. Une expérience gastronomique mémorable !"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Start automatic sliding
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    
    // Reset the interval when manually changing slides
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section className="py-20 bg-ginette-navy/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border border-ginette-gold/20 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 border border-ginette-gold/20 rounded-full hidden lg:block"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-subtitle">Témoignages</p>
            <h2 className="section-title">Ce que nos clients disent</h2>
          </div>
          
          <div className="relative bg-white rounded-lg shadow-lg p-6 md:p-10 overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 text-ginette-gold opacity-10">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11H6C4.9 11 4 10.1 4 9V7C4 5.9 4.9 5 6 5H8C8.6 5 9 5.4 9 6V8C9 8.6 8.6 9 8 9H6V11H10V7C10 5.9 9.1 5 8 5M8 3H6C3.8 3 2 4.8 2 7V9C2 11.2 3.8 13 6 13H10C11.1 13 12 12.1 12 11V7C12 4.8 10.2 3 8 3M22 11H18C16.9 11 16 10.1 16 9V7C16 5.9 16.9 5 18 5H20C20.6 5 21 5.4 21 6V8C21 8.6 20.6 9 20 9H18V11H22V7C22 5.9 21.1 5 20 5M20 3H18C15.8 3 14 4.8 14 7V9C14 11.2 15.8 13 18 13H22C23.1 13 24 12.1 24 11V7C24 4.8 22.2 3 20 3Z" fill="currentColor" />
              </svg>
            </div>
            
            <div className="relative min-h-[240px] flex flex-col justify-between">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 flex flex-col justify-center",
                    activeIndex === index 
                      ? "opacity-100 translate-x-0" 
                      : activeIndex > index 
                        ? "opacity-0 -translate-x-full" 
                        : "opacity-0 translate-x-full"
                  )}
                >
                  <p className="text-ginette-navy/80 italic text-lg mb-8">"{testimonial.quote}"</p>
                  <div className="mt-4 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-ginette-gold/20 flex items-center justify-center mr-4 text-ginette-gold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-ginette-navy">{testimonial.name}</h4>
                      <p className="text-ginette-navy/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    activeIndex === index 
                      ? "bg-ginette-gold w-6" 
                      : "bg-ginette-navy/20 hover:bg-ginette-navy/40"
                  )}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
