import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { mockData, mockActions } from './mock';

const Contact = () => {
  const { personalInfo } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await mockActions.submitContactForm(formData);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in collaborating or have questions about my work? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a conversation about AI and technology.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Linkedin className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                  <a 
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    {personalInfo.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;