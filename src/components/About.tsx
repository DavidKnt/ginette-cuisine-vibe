
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="max-w-3xl mx-auto text-center opacity-0 translate-y-10 transition-all duration-1000">
          <p className="section-subtitle">Notre Histoire</p>
          <h2 className="section-title">À Propos de GINETTE</h2>
          
          <div className="mt-10 mb-12 relative">
            <div className="w-full h-96 bg-ginette-cream rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Restaurant GINETTE" 
                className="w-full h-full object-cover hover-zoom"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-ginette-cream z-10 hidden md:block"></div>
          </div>
          
          <p className="text-ginette-navy/80 leading-relaxed mb-6">
            Fondé en 2010 par la chef Ginette Martin, notre restaurant est né d'une passion pour la cuisine authentique et les produits de saison. Dans un cadre élégant et chaleureux, nous vous proposons une cuisine raffinée qui met en valeur les saveurs de notre terroir.
          </p>
          
          <p className="text-ginette-navy/80 leading-relaxed mb-8">
            Chaque plat est soigneusement élaboré par notre équipe de chefs passionnés qui s'engagent à vous offrir une expérience culinaire mémorable. Nous privilégions les producteurs locaux et les ingrédients de qualité pour vous garantir des saveurs exceptionnelles.
          </p>
          
          <div className="flex justify-center">
            <div className="inline-block relative">
              <a href="#menu" className="btn-primary">
                Découvrir Notre Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
