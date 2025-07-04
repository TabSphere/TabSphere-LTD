import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send, Upload, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const SupportTicket = () => {
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    priority: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    projectReference: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const categories = [
    'Technical Support',
    'Bug Report',
    'Feature Request',
    'Account Issues',
    'Billing Inquiry',
    'General Question'
  ];

  const priorities = [
    { value: 'low', label: 'Low - General inquiry' },
    { value: 'medium', label: 'Medium - Standard support' },
    { value: 'high', label: 'High - Business impact' },
    { value: 'urgent', label: 'Urgent - Critical issue' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateTicketId = () => {
    return 'TS' + Date.now().toString().slice(-6);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const ticketId = generateTicketId();
      
      const ticketData = {
        ...formData,
        ticketId,
      };

      const tickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
      const newTicket = {
        id: Date.now(),
        ...ticketData,
        timestamp: new Date().toISOString(),
        status: 'open'
      };
      tickets.push(newTicket);
      localStorage.setItem('supportTickets', JSON.stringify(tickets));

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_SUPPORT_TICKET_TEMPLATE_ID',
        ticketData,
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Support Ticket Created! 🎫",
        description: `Your ticket #${ticketId} has been submitted. We'll respond within 24 hours. A confirmation has been sent to your email.`,
        duration: 5000,
      });

      setFormData({
        subject: '',
        category: '',
        priority: '',
        description: '',
        name: '',
        email: '',
        phone: '',
        projectReference: ''
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error Creating Ticket",
        description: "Your ticket was saved, but we couldn't send the email. Please contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Support Ticket - TabSphere LTD Help Center</title>
        <meta name="description" content="Get help with your TabSphere LTD projects. Submit a support ticket and our expert team will assist you promptly." />
      </Helmet>

      <div className="min-h-screen pt-16 bg-gray-50">
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Create Support Ticket
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Need help with your project? Our support team is here to assist you. Submit a ticket and we'll get back to you promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Support Request</CardTitle>
                      <p className="text-gray-600">
                        Please provide detailed information about your issue to help us assist you better.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Brief description of your issue"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="category">Category *</Label>
                            <Select onValueChange={(value) => handleSelectChange('category', value)} value={formData.category}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="priority">Priority Level *</Label>
                            <Select onValueChange={(value) => handleSelectChange('priority', value)} value={formData.priority}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select priority" />
                              </SelectTrigger>
                              <SelectContent>
                                {priorities.map((priority) => (
                                  <SelectItem key={priority.value} value={priority.value}>
                                    {priority.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="projectReference">Project Reference (Optional)</Label>
                          <Input
                            id="projectReference"
                            name="projectReference"
                            type="text"
                            value={formData.projectReference}
                            onChange={handleInputChange}
                            placeholder="Project name or reference number"
                          />
                        </div>

                        <div>
                          <Label htmlFor="description">Detailed Description *</Label>
                          <Textarea
                            id="description"
                            name="description"
                            required
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Please describe your issue in detail. Include steps to reproduce if it's a bug, or specific questions if you need help..."
                            rows={6}
                          />
                        </div>

                        <div>
                          <Label>Attachments (Optional)</Label>
                          <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 mb-2">Upload screenshots, error logs, or relevant files</p>
                            <Button type="button" variant="outline" onClick={handleFileUpload}>
                              Choose Files
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your full name"
                              />
                            </div>

                            <div>
                              <Label htmlFor="email">Email Address *</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="your@email.com"
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="phone">Phone Number (Optional)</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+44 20 1234 5678"
                            />
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-900 to-teal-600 hover:from-blue-800 hover:to-teal-500 py-3 text-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            'Creating Ticket...'
                          ) : (
                            <>
                              Submit Support Ticket
                              <Send className="ml-2 w-5 h-5" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-blue-600" />
                        <span>Support Information</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Response Times</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium text-red-600">Urgent:</span> Within 2 hours</p>
                          <p><span className="font-medium text-orange-600">High:</span> Within 8 hours</p>
                          <p><span className="font-medium text-blue-600">Medium:</span> Within 24 hours</p>
                          <p><span className="font-medium text-gray-600">Low:</span> Within 48 hours</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Support Hours</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>Monday - Friday: 9:00 - 18:00 GMT</p>
                          <p>Weekend: Emergency support only</p>
                          <p>24/7 support for critical issues</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Alternative Contact</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>Email: info@tabsphere.com</p>
                          <p>Phone: +44 20 1234 5678</p>
                          <p>Emergency: Available 24/7</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">How do I track my ticket?</h4>
                        <p className="text-sm text-gray-600">You'll receive a ticket ID via email. Use this to track progress in your dashboard.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Can I update my ticket?</h4>
                        <p className="text-sm text-gray-600">Yes, reply to the email notification or contact us with your ticket ID.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">What about urgent issues?</h4>
                        <p className="text-sm text-gray-600">For critical issues, call us directly at +44 20 1234 5678 for immediate assistance.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportTicket;