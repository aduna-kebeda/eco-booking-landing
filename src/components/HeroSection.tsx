
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
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-5 w-5 text-primary-600" />
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
                Eco-Friendly Pest Control
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Safe, Effective
              <span className="text-primary-600 block">Pest Solutions</span>
              for Sydney Homes
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Protect your family with our child-safe, eco-friendly pest control. 
              Professional termite, cockroach, and rodent solutions with same-day service.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent-500" />
                <span className="text-gray-700">Child & Pet Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent-500" />
                <span className="text-gray-700">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent-500" />
                <span className="text-gray-700">100% Guaranteed</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToBooking}
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg"
              >
                Book Free Inspection
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 text-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call 0400 123 456
              </Button>
            </div>

            {/* Emergency Service Notice */}
            <div className="mt-6 p-4 bg-accent-50 rounded-lg border border-accent-200">
              <p className="text-accent-800 font-medium">
                🚨 Emergency pest issues? We offer 24/7 emergency callouts across Sydney.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=800&fit=crop"
                alt="Professional pest control technician in protective gear treating a home"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="bg-accent-100 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">5+ Years</p>
                  <p className="text-sm text-gray-600">Serving Sydney</p>
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
