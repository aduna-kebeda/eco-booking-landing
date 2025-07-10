
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-primary-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Ecovia</h1>
              <p className="text-xs text-gray-600">Pest Control</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-primary-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">0400 123 456</span>
            </div>
            <Button 
              onClick={() => scrollToSection('booking-form')}
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              Book Inspection
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-primary-600 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="text-left text-gray-700 hover:text-primary-600 transition-colors"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-primary-600 transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-primary-600 transition-colors"
              >
                Contact
              </button>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-primary-600 mb-4">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">0400 123 456</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('booking-form')}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                >
                  Book Inspection
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
