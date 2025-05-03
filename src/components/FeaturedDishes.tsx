
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const dishes = [
  {
    id: 1,
    name: "Coquilles Saint-Jacques",
    description: "Coquilles Saint-Jacques poêlées, butternut, sauce truffe blanche",
    price: "24€",
    image: "https://images.unsplash.com/photo-1626750438268-3394a11b270d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    category: "entrées"
  },
  {
    id: 2,
    name: "Filet de Bœuf Rossini",
    description: "Filet mignon de bœuf, foie gras poêlé, réduction de Porto",
    price: "36€",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    category: "plats"
  },
  {
    id: 3,
    name: "Pavlova aux Fruits Rouges",
    description: "Meringue craquante, crème légère, fruits rouges de saison",
    price: "14€",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    category: "desserts"
  },
  {
    id: 4,
    name: "Risotto aux Champignons",
    description: "Riz Carnaroli, champignons de saison, parmesan affiné 24 mois",
    price: "22€",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    category: "plats"
  }
];

const categories = ["tous", "entrées", "plats", "desserts"];

const FeaturedDishes = () => {
  const [activeCategory, setActiveCategory] = useState("tous");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredDishes = activeCategory === 'tous' 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);
  
  return (
    <section id="menu" className="py-20 md:py-28 bg-ginette-cream/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-ginette-gold opacity-5"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-ginette-gold opacity-5"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-subtitle animate-fade-in">Découvrez nos Spécialités</p>
          <h2 className="section-title animate-fade-in">Nos Plats Signatures</h2>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  activeCategory === category 
                    ? "bg-ginette-gold text-white shadow-md" 
                    : "text-ginette-navy/70 hover:text-ginette-navy"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredDishes.map((dish, index) => (
            <div 
              key={dish.id} 
              className="elegant-card group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 h-56 overflow-hidden rounded-md">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-bold text-ginette-navy">{dish.name}</h3>
                    <span className="text-ginette-burgundy font-medium">{dish.price}</span>
                  </div>
                  <p className="text-ginette-navy/70 text-sm mb-4">{dish.description}</p>
                  <div className="mt-auto">
                    <span className="inline-block text-xs uppercase tracking-wider font-medium text-ginette-gold bg-ginette-gold/10 px-3 py-1 rounded-full">
                      {dish.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/menu" 
            className="inline-flex items-center font-medium text-ginette-navy group"
          >
            <span>Voir notre carte complète</span>
            <svg 
              className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
