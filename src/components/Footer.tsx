
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ginette-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">GINETTE</h3>
            <p className="text-white/80 mb-6 font-sans">
              Une expérience culinaire authentique et raffinée au cœur de la ville.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <a href="#" className="w-10 h-10 rounded-full bg-ginette-gold/20 flex items-center justify-center hover:bg-ginette-gold/40 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.7,8H16V6.68a1,1,0,0,1,.88-1.2L18,5.2V2H15.42a4.57,4.57,0,0,0-4.87,4.36V8H8v3.2h2.55V22h3.65V11.2h3L18.7,8Z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ginette-gold/20 flex items-center justify-center hover:bg-ginette-gold/40 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.67,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.33,3.92,3.85,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,5-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-medium uppercase tracking-wide text-ginette-gold text-sm mb-4">Horaires</h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start">
                <Clock size={18} className="mr-2 mt-0.5 text-ginette-gold opacity-80" />
                <div>
                  <p className="font-medium">Lundi - Vendredi</p>
                  <p>12h00 - 14h30 | 19h00 - 22h30</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="mr-2 mt-0.5 text-ginette-gold opacity-80" />
                <div>
                  <p className="font-medium">Samedi</p>
                  <p>19h00 - 23h30</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="mr-2 mt-0.5 text-ginette-gold opacity-80" />
                <div>
                  <p className="font-medium">Dimanche</p>
                  <p>11h30 - 15h00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-medium uppercase tracking-wide text-ginette-gold text-sm mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-ginette-gold opacity-80" />
                <p>42 Rue des Gourmets, 75003 Paris</p>
              </div>
              <div className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 text-ginette-gold opacity-80" />
                <p>+33 1 23 45 67 89</p>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 text-ginette-gold opacity-80" />
                <p>contact@ginette-restaurant.fr</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} GINETTE. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-white/60">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link to="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
