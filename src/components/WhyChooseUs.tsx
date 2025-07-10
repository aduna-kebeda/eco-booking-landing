
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Baby, Clock, MapPin, Award, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Leaf,
      title: 'Eco-Friendly Solutions',
      description: 'All our treatments use environmentally responsible products that are safe for your family and pets while being highly effective against pests.',
      color: 'primary'
    },
    {
      icon: Baby,
      title: 'Child & Pet Safe',
      description: 'Our specialized formulations ensure complete safety for children and pets, giving you peace of mind during and after treatment.',
      color: 'secondary'
    },
    {
      icon: Clock,
      title: 'Same Day Service',
      description: 'Urgent pest problem? We offer same-day service across Sydney with emergency callouts available 24/7 for critical situations.',
      color: 'accent'
    },
    {
      icon: MapPin,
      title: 'Local Sydney Experts',
      description: 'Born and raised in Sydney, we understand local pest patterns and seasonal challenges unique to our beautiful city.',
      color: 'primary'
    },
    {
      icon: Award,
      title: '100% Satisfaction Guarantee',
      description: 'Not completely satisfied? We\'ll return at no extra charge. Our treatments come with comprehensive warranties for your peace of mind.',
      color: 'secondary'
    },
    {
      icon: Users,
      title: 'Experienced Technicians',
      description: 'Our certified pest control professionals have 5+ years of experience and undergo continuous training on the latest eco-friendly methods.',
      color: 'accent'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          iconBg: 'bg-primary-100 group-hover:bg-primary-200',
          iconColor: 'text-primary-600',
          border: 'hover:border-primary-200'
        };
      case 'secondary':
        return {
          iconBg: 'bg-secondary-100 group-hover:bg-secondary-200',
          iconColor: 'text-secondary-600',
          border: 'hover:border-secondary-200'
        };
      case 'accent':
        return {
          iconBg: 'bg-accent-100 group-hover:bg-accent-200',
          iconColor: 'text-accent-600',
          border: 'hover:border-accent-200'
        };
      default:
        return {
          iconBg: 'bg-gray-100 group-hover:bg-gray-200',
          iconColor: 'text-gray-600',
          border: 'hover:border-gray-200'
        };
    }
  };

  return (
    <section id="why-choose-us" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white rounded-xl mb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Award className="h-4 w-4 text-primary-600" />
            <span className="text-primary-600 font-medium text-xs uppercase tracking-wide">
              Why Choose Ecovia
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Sydney's Most Trusted
            <span className="text-primary-600 block">Eco-Friendly Pest Control</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just another pest control company. We're your neighbors, 
            committed to protecting Sydney families with safe, effective, and environmentally responsible solutions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const colorClasses = getColorClasses(benefit.color);
            
            return (
              <Card key={index} className={`group hover:shadow-lg transition-all duration-300 border-gray-200 ${colorClasses.border}`}>
                <CardContent className="p-5">
                  <div className={`${colorClasses.iconBg} w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors`}>
                    <IconComponent className={`h-5 w-5 ${colorClasses.iconColor}`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">500+</div>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-secondary-600 mb-1">5+</div>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent-600 mb-1">24/7</div>
              <p className="text-sm text-gray-600">Emergency Service</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">100%</div>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
