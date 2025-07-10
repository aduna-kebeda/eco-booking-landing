
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Bondi Beach',
      rating: 5,
      text: 'Ecovia saved our home from a major termite infestation. Their eco-friendly approach meant we didn\'t have to worry about our kids or pets. The team was professional, thorough, and the results speak for themselves. Highly recommended!',
      service: 'Termite Treatment'
    },
    {
      name: 'David Chen',
      location: 'Parramatta',
      rating: 5,
      text: 'Had a persistent cockroach problem in our restaurant. Ecovia handled it discretely during off-hours and used child-safe methods. No more pests and our customers haven\'t noticed any chemical smells. Excellent service!',
      service: 'Commercial Pest Control'
    },
    {
      name: 'Emily Johnson',
      location: 'Manly',
      rating: 5,
      text: 'Quick response time and same-day service when we discovered mice in the garage. The technician was knowledgeable, explained everything clearly, and sealed all entry points. Haven\'t seen a single mouse since. Thank you!',
      service: 'Rodent Control'
    },
    {
      name: 'Michael Thompson',
      location: 'Dee Why',
      rating: 5,
      text: 'Professional pre-purchase inspection that saved us thousands! They found termite damage that wasn\'t visible during our initial viewing. Detailed report helped us negotiate the price. Worth every penny.',
      service: 'Pre-Purchase Inspection'
    },
    {
      name: 'Lisa Wong',
      location: 'Chatswood',
      rating: 5,
      text: 'Struggled with ants for months before calling Ecovia. Their targeted treatment eliminated the entire colony and they even provided tips to prevent future infestations. No harsh chemicals, just effective results.',
      service: 'Ant Control'
    },
    {
      name: 'James Patterson',
      location: 'Cronulla',
      rating: 5,
      text: 'Emergency spider treatment after finding a funnel-web in our backyard. Ecovia responded within hours and made our property safe for the family. Their knowledge of local Sydney spiders is impressive.',
      service: 'Spider Treatment'
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-5 w-5 text-accent-500" />
            <span className="text-primary-600 font-medium text-sm uppercase tracking-wide">
              Customer Reviews
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what families and businesses 
            across Sydney say about our eco-friendly pest control services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary-200 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary-600">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by 500+ Sydney Families
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who choose Ecovia for safe, 
              effective, and environmentally responsible pest control.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">4.9★</div>
              <p className="text-gray-600">Google Rating</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">150+</div>
              <p className="text-gray-600">5-Star Reviews</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">98%</div>
              <p className="text-gray-600">Recommend Us</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">0</div>
              <p className="text-gray-600">Complaints</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
