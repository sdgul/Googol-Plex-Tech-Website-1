import React from 'react';
import { Cpu, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl tracking-tight">Googol Plex Tech</span>
            </div>
            <p className="text-gray-400 text-sm">
              Automating the future, one task at a time. Empowering businesses from single entrepreneurs to large corporations.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Custom Software Dev</li>
              <li className="text-gray-400">Task Automation</li>
              <li className="text-gray-400">Filing Management</li>
              <li className="text-gray-400">App Development</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>Hafeez Center, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@googolplex.tech</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Googol Plex Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
