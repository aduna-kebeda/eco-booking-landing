
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Leaf } from 'lucide-react';

const HeroSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-12 md:py-16 rounded-xl mb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-4 w-4 text-primary-600" />
              <span className="text-primary-600 font-medium text-xs uppercase tracking-wide">
                Eco-Friendly Pest Control
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Safe, Effective
              <span className="text-primary-600 block">Pest Solutions</span>
              for Sydney Homes
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Protect your family with our child-safe, eco-friendly pest control. 
              Professional termite, cockroach, and rodent solutions with same-day service.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-accent-500" />
                <span className="text-sm text-gray-700">Child & Pet Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-accent-500" />
                <span className="text-sm text-gray-700">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-accent-500" />
                <span className="text-sm text-gray-700">100% Guaranteed</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={scrollToBooking}
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3"
              >
                Book Free Inspection
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call 0400 123 456
              </Button>
            </div>

            {/* Emergency Service Notice */}
            <div className="mt-4 p-3 bg-accent-50 rounded-lg border border-accent-200">
              <p className="text-sm text-accent-800 font-medium">
                🚨 Emergency pest issues? We offer 24/7 emergency callouts across Sydney.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=600&fit=crop"
                alt="Professional pest control technician in protective gear treating a home"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-3 -left-3 bg-white p-3 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-2">
                <div className="bg-accent-100 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-accent-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">5+ Years</p>
                  <p className="text-xs text-gray-600">Serving Sydney</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
