
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Shield, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Ecovia</h3>
                <p className="text-xs text-gray-400">Pest Control</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Sydney's leading eco-friendly pest control specialists. 
              Protecting families and businesses with safe, effective solutions since 2019.
            </p>
            
            <div className="flex space-x-3">
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('services')} className="text-sm text-gray-300 hover:text-primary-400 transition-colors">Termite Control</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-sm text-gray-300 hover:text-primary-400 transition-colors">Cockroach Treatment</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-sm text-gray-300 hover:text-primary-400 transition-colors">Rodent Control</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-sm text-gray-300 hover:text-primary-400 transition-colors">Ant Control</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-sm text-gray-300 hover:text-primary-400 transition-colors">Spider Treatment</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-sm text-gray-300 hover:text-primary-400 transition-colors">General Pest Control</button></li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="text-base font-semibold mb-4">Areas We Serve</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Sydney CBD</li>
              <li>Eastern Suburbs</li>
              <li>Northern Beaches</li>
              <li>North Shore</li>
              <li>Inner West</li>
              <li>Western Sydney</li>
              <li>Sutherland Shire</li>
              <li>And surrounding areas</li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="text-base font-semibold mb-4">Get In Touch</h4>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <div>
                  <p className="text-sm font-medium">0400 123 456</p>
                  <p className="text-xs text-gray-400">24/7 Emergency Service</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <div>
                  <p className="text-sm font-medium">info@ecovia.com.au</p>
                  <p className="text-xs text-gray-400">Response within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                <div>
                  <p className="text-sm font-medium">All Sydney Areas</p>
                  <p className="text-xs text-gray-400">Free travel within 30km</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary-400" />
                <div>
                  <p className="text-sm font-medium">Mon-Fri: 7am-7pm</p>
                  <p className="text-xs text-gray-400">Sat-Sun: 8am-5pm</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={scrollToBooking}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white mb-3"
            >
              Book Free Inspection
            </Button>
            
            <p className="text-xs text-gray-400">
              Licensed & Insured • ABN: 12 345 678 901
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-xs mb-3 md:mb-0">
              © 2024 Ecovia Pest Control. All rights reserved.
            </p>
            
            <div className="flex space-x-4 text-xs">
              <button className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</button>
              <button className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</button>
              <button className="text-gray-400 hover:text-primary-400 transition-colors">Sitemap</button>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              Professional pest control services in Sydney • Eco-friendly solutions • Child & pet safe treatments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
