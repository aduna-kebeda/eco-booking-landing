
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bug, Rat2, Home, Building2, Zap, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Bug,
      title: 'Termite Control',
      description: 'Advanced termite detection and elimination with long-lasting protection for your property.',
      features: ['Pre-purchase inspections', 'Thermal imaging', '10-year warranty']
    },
    {
      icon: Bug,
      title: 'Cockroach Treatment',
      description: 'Comprehensive cockroach elimination using eco-friendly gel baits and targeted treatments.',
      features: ['German cockroaches', 'American cockroaches', 'Child-safe methods']
    },
    {
      icon: Rat2,
      title: 'Rodent Control',
      description: 'Humane rodent removal and prevention with sealing entry points and ongoing monitoring.',
      features: ['Rats & mice', 'Entry point sealing', 'Ongoing monitoring']
    },
    {
      icon: Bug,
      title: 'Ant Control',
      description: 'Targeted ant colony elimination with focus on queen elimination and nest destruction.',
      features: ['All ant species', 'Colony elimination', 'Outdoor barriers']
    },
    {
      icon: Bug,
      title: 'Spider Treatment',
      description: 'Safe spider control including venomous species with web removal and habitat modification.',
      features: ['Redback spiders', 'Funnel-web spiders', 'Web removal']
    },
    {
      icon: Zap,
      title: 'General Pest Control',
      description: 'Comprehensive pest management for fleas, silverfish, beetles, and other common pests.',
      features: ['Fleas & ticks', 'Silverfish', 'Beetles & moths']
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-5 w-5 text-primary-600" />
            <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete Pest Control Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional, eco-friendly pest management for homes and businesses across Sydney. 
            All treatments are child-safe and environmentally responsible.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-primary-200">
                <CardContent className="p-6">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Property Types */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
            <CardContent className="p-8 text-center">
              <Home className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Residential Properties</h3>
              <p className="text-gray-700">
                Houses, apartments, townhouses, and units. Family-friendly treatments 
                with flexible scheduling to suit your lifestyle.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-secondary-50 to-secondary-100 border-secondary-200">
            <CardContent className="p-8 text-center">
              <Building2 className="h-12 w-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Commercial Properties</h3>
              <p className="text-gray-700">
                Offices, restaurants, retail spaces, and warehouses. Discreet service 
                with minimal disruption to your business operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
