
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bug, Rat, Home, Building2, Zap, Shield } from 'lucide-react';

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
      icon: Rat,
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
    <section id="services" className="py-12 md:py-16 mb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Shield className="h-4 w-4 text-primary-600" />
            <span className="text-primary-600 font-medium text-xs uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Complete Pest Control Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional, eco-friendly pest management for homes and businesses across Sydney. 
            All treatments are child-safe and environmentally responsible.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-primary-200">
                <CardContent className="p-5">
                  <div className="bg-primary-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="h-5 w-5 text-primary-600" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-xs">
                        <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
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
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
            <CardContent className="p-6 text-center">
              <Home className="h-10 w-10 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Residential Properties</h3>
              <p className="text-sm text-gray-700">
                Houses, apartments, townhouses, and units. Family-friendly treatments 
                with flexible scheduling to suit your lifestyle.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-secondary-50 to-secondary-100 border-secondary-200">
            <CardContent className="p-6 text-center">
              <Building2 className="h-10 w-10 text-secondary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Commercial Properties</h3>
              <p className="text-sm text-gray-700">
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
