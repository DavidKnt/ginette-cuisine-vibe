
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Phone, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a server
    console.log('Form submitted with:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
    }, 3000);
  };
  
  return (
    <section id="reservation" className="py-20 md:py-28 bg-ginette-navy text-white relative">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')`,
          backgroundColor: '#1C2541',
          backgroundBlendMode: 'overlay'
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="section-subtitle">Réservez une Table</p>
          <h2 className="section-title text-white">Faites une Réservation</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-8 flex flex-col justify-center">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-start">
                  <Phone size={24} className="text-ginette-gold mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-serif font-medium mb-2">Réservation par téléphone</h3>
                    <p className="text-white/80 mb-2">Pour une réservation immédiate</p>
                    <a href="tel:+33123456789" className="text-ginette-gold hover:underline">+33 1 23 45 67 89</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-start">
                  <MapPin size={24} className="text-ginette-gold mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-serif font-medium mb-2">Notre adresse</h3>
                    <p className="text-white/80">42 Rue des Gourmets</p>
                    <p className="text-white/80">75003 Paris</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-start">
                  <Calendar size={24} className="text-ginette-gold mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-serif font-medium mb-2">Horaires d'ouverture</h3>
                    <p className="text-white/80">Lundi - Vendredi: 12h00 - 14h30 | 19h00 - 22h30</p>
                    <p className="text-white/80">Samedi: 19h00 - 23h30</p>
                    <p className="text-white/80">Dimanche: 11h30 - 15h00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-ginette-gold/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-ginette-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif mb-2">Merci pour votre réservation !</h3>
                  <p className="text-white/80">
                    Nous vous contacterons rapidement pour confirmer votre réservation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-ginette-gold"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-ginette-gold"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-ginette-gold"
                        placeholder="Votre numéro"
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-white/80 mb-1">
                        Nombre de personnes
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-ginette-gold"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num} personne{num > 1 ? 's' : ''}</option>
                        ))}
                        <option value="11+">Plus de 10 personnes</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-white/80 mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-ginette-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-white/80 mb-1">
                        Heure
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-ginette-gold"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-ginette-gold"
                      placeholder="Allergies, occasions spéciales, ou demandes spécifiques..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className={cn(
                        "w-full bg-ginette-gold text-ginette-navy font-medium py-3 px-6 rounded-md hover:bg-ginette-gold/90 transition-colors",
                        "uppercase tracking-wider font-sans text-sm"
                      )}
                    >
                      Réserver ma table
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
