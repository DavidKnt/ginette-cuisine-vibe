
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ginette-navy/70 via-ginette-navy/50 to-ginette-navy/80"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-32 h-32 border border-ginette-gold/30 rounded-full animate-float opacity-70 hidden lg:block"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 border border-ginette-gold/30 rounded-full animate-float opacity-70 hidden lg:block" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-24 relative z-10 text-center">
        <div className={cn(
          "transition-opacity duration-1000 ease-in-out transform",
          loaded ? "opacity-100" : "opacity-0"
        )}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight">
            GINETTE
          </h1>
          
          <div className={cn(
            "h-0.5 w-16 md:w-24 bg-ginette-gold mx-auto my-6 transition-all duration-1000",
            loaded ? "w-24 md:w-32" : "w-0"
          )}></div>
          
          <p className={cn(
            "font-sans text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-300",
            loaded ? "opacity-100" : "opacity-0"
          )}>
            Une expérience culinaire authentique et raffinée au cœur de Paris
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <a href="#menu" className="btn-primary">
              Découvrir le Menu
            </a>
            <a href="#reservation" className="px-6 py-3 bg-transparent text-white border border-white hover:bg-white/10 transition-all duration-300 font-sans font-semibold uppercase tracking-wider text-sm">
              Réserver une Table
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={cn(
        "absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-1000",
        loaded ? "opacity-100" : "opacity-0"
      )}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/80 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
