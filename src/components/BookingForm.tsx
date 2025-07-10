
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    postcode: '',
    propertyType: '',
    pestType: '',
    urgency: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Inspection Booked Successfully! 🎉",
      description: "We'll contact you within 2 hours to confirm your appointment. Check your email for details.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      suburb: '',
      postcode: '',
      propertyType: '',
      pestType: '',
      urgency: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking-form" className="py-12 md:py-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl mb-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Calendar className="h-4 w-4 text-primary-600" />
            <span className="text-primary-600 font-medium text-xs uppercase tracking-wide">
              Book Your Inspection
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Get Your Free Pest Inspection
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Take the first step towards a pest-free home. Our comprehensive inspection 
            includes a detailed report and treatment recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-white rounded-t-lg pb-4">
                <CardTitle className="text-xl text-gray-900">Book Your Inspection</CardTitle>
                <p className="text-sm text-gray-600">Fill out the details below and we'll contact you within 2 hours.</p>
              </CardHeader>
              <CardContent className="p-5 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700">Full Name *</label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700">Phone Number *</label>
                      <Input
                        type="tel"
                        placeholder="0400 123 456"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-700">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="h-10"
                    />
                  </div>

                  {/* Property Information */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-700">Property Address *</label>
                    <Input
                      placeholder="Enter your street address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                      className="h-10"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700">Suburb *</label>
                      <Input
                        placeholder="Sydney, Bondi, etc."
                        value={formData.suburb}
                        onChange={(e) => handleInputChange('suburb', e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700">Postcode *</label>
                      <Input
                        placeholder="2000"
                        value={formData.postcode}
                        onChange={(e) => handleInputChange('postcode', e.target.value)}
                        required
                        className="h-10"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700">Property Type *</label>
                      <Select onValueChange={(value) => handleInputChange('propertyType', value)}>
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="unit">Unit</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700">Pest Issue</label>
                      <Select onValueChange={(value) => handleInputChange('pestType', value)}>
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select pest type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="termites">Termites</SelectItem>
                          <SelectItem value="cockroaches">Cockroaches</SelectItem>
                          <SelectItem value="rodents">Rodents (Rats/Mice)</SelectItem>
                          <SelectItem value="ants">Ants</SelectItem>
                          <SelectItem value="spiders">Spiders</SelectItem>
                          <SelectItem value="general">General Inspection</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700">Urgency</label>
                      <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="How urgent?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency (Today)</SelectItem>
                          <SelectItem value="urgent">Urgent (1-2 days)</SelectItem>
                          <SelectItem value="soon">Soon (3-7 days)</SelectItem>
                          <SelectItem value="flexible">Flexible timing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700">Preferred Date</label>
                      <Input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        className="h-10"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-gray-700">Preferred Time</label>
                      <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8-12pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12-5pm)</SelectItem>
                          <SelectItem value="evening">Evening (5-7pm)</SelectItem>
                          <SelectItem value="anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-700">Additional Information</label>
                    <Textarea
                      placeholder="Describe your pest issue, specific concerns, or any other relevant information..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2.5"
                  >
                    {isSubmitting ? 'Booking...' : 'Book Free Inspection'}
                  </Button>

                  <p className="text-xs text-gray-600 text-center">
                    By submitting this form, you agree to be contacted by Ecovia Pest Control regarding your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Contact Card */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-5 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">0400 123 456</p>
                      <p className="text-xs text-gray-600">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">info@ecovia.com.au</p>
                      <p className="text-xs text-gray-600">We reply within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">All Sydney Areas</p>
                      <p className="text-xs text-gray-600">Free travel within 30km of CBD</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Mon-Fri: 7am-7pm</p>
                      <p className="text-xs text-gray-600">Sat-Sun: 8am-5pm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-accent-50 to-accent-100">
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What to Expect</h3>
                
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-accent-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Quick Response</p>
                      <p className="text-xs text-gray-700">We'll contact you within 2 hours to confirm your appointment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-accent-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Thorough Inspection</p>
                      <p className="text-xs text-gray-700">Comprehensive property assessment with thermal imaging</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-accent-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Detailed Report</p>
                      <p className="text-xs text-gray-700">Written report with findings and treatment recommendations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
