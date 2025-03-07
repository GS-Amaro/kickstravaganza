
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="/" className="text-2xl font-bold tracking-tight inline-block">
              KICKS<span className="text-sneaker-red">HUB</span>
            </a>
            <p className="text-gray-600 max-w-xs">
              Premium marketplace for authentic sneakers. Buy, sell, and discover the most coveted kicks on the planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-full text-gray-600 hover:text-sneaker-red transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-gray-600 hover:text-sneaker-red transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-gray-600 hover:text-sneaker-red transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-gray-600 hover:text-sneaker-red transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Links Column 1 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">All Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">Jordan</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">Nike</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">Adidas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">Yeezy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">New Releases</a></li>
            </ul>
          </div>
          
          {/* Links Column 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">Authenticity</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-sneaker-red transition-colors">Partners</a></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-sneaker-red flex-shrink-0 mt-1" />
                <span className="text-gray-600">123 Sneaker Lane, Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-sneaker-red flex-shrink-0" />
                <span className="text-gray-600">+1 (888) 555-KICK</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-sneaker-red flex-shrink-0" />
                <span className="text-gray-600">support@kickshub.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KICKSHUB. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-sneaker-red transition-colors">Terms</a>
            <a href="#" className="hover:text-sneaker-red transition-colors">Privacy</a>
            <a href="#" className="hover:text-sneaker-red transition-colors">Shipping</a>
            <a href="#" className="hover:text-sneaker-red transition-colors">Returns</a>
            <a href="#" className="hover:text-sneaker-red transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
