
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Ecovia</h1>
              <p className="text-xs text-gray-600">Pest Control</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm text-gray-700 hover:text-primary-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-sm text-gray-700 hover:text-primary-600 transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-sm text-gray-700 hover:text-primary-600 transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm text-gray-700 hover:text-primary-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-primary-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">0400 123 456</span>
            </div>
            <Button 
              onClick={() => scrollToSection('booking-form')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2"
              size="sm"
            >
              Book Inspection
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-sm text-gray-700 hover:text-primary-600 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="text-left text-sm text-gray-700 hover:text-primary-600 transition-colors"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-sm text-gray-700 hover:text-primary-600 transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-sm text-gray-700 hover:text-primary-600 transition-colors"
              >
                Contact
              </button>
              <div className="pt-3 border-t">
                <div className="flex items-center space-x-2 text-primary-600 mb-3">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">0400 123 456</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('booking-form')}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                  size="sm"
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
