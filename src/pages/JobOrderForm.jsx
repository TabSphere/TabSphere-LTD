import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send, Upload, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const JobOrderForm = () => {
  const [formData, setFormData] = useState({
    projectTitle: '',
    service: '',
    priority: '',
    budget: '',
    timeline: '',
    description: '',
    requirements: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    'Software & SaaS Solutions',
    'Web & E-commerce Development',
    'Creative & Brand Design',
    'Computer Cleaning',
    'Cybersecurity & Compliance'
  ];

  const priorities = [
    { value: 'low', label: 'Low - Standard timeline' },
    { value: 'medium', label: 'Medium - Expedited delivery' },
    { value: 'high', label: 'High - Rush delivery' },
    { value: 'urgent', label: 'Urgent - Emergency support' }
  ];

  const budgetRanges = [
    'Under £5,000',
    '£5,000 - £15,000',
    '£15,000 - £50,000',
    '£50,000 - £100,000',
    'Over £100,000',
    'To be discussed'
  ];

  const timelines = [
    'ASAP (Rush)',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const jobOrders = JSON.parse(localStorage.getItem('jobOrders') || '[]');
      const newOrder = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      jobOrders.push(newOrder);
      localStorage.setItem('jobOrders', JSON.stringify(jobOrders));

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_JOB_ORDER_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Job Order Submitted Successfully! 🎉",
        description: "We'll review your request and get back to you within 24 hours. A confirmation has been sent to your email.",
        duration: 5000,
      });

      setFormData({
        projectTitle: '',
        service: '',
        priority: '',
        budget: '',
        timeline: '',
        description: '',
        requirements: '',
        name: '',
        email: '',
        phone: '',
        company: ''
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error Submitting Job Order",
        description: "Your order was saved, but we couldn't send the email. Please contact us directly.",
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
        <title>Job Order Form - TabSphere LTD Project Request</title>
        <meta name="description" content="Submit a new project request to TabSphere LTD. Provide details about your digital solution needs and get a personalized quote." />
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
                  Submit Job Order
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Tell us about your project requirements and we'll provide you with a detailed proposal and timeline.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Project Details</CardTitle>
                  <p className="text-gray-600">
                    Please provide as much detail as possible to help us understand your needs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                        Project Information
                      </h3>
                      
                      <div>
                        <Label htmlFor="projectTitle">Project Title *</Label>
                        <Input
                          id="projectTitle"
                          name="projectTitle"
                          type="text"
                          required
                          value={formData.projectTitle}
                          onChange={handleInputChange}
                          placeholder="Brief title for your project"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="service">Service Required *</Label>
                          <Select onValueChange={(value) => handleSelectChange('service', value)} value={formData.service}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select onValueChange={(value) => handleSelectChange('budget', value)} value={formData.budget}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="timeline">Desired Timeline</Label>
                          <Select onValueChange={(value) => handleSelectChange('timeline', value)} value={formData.timeline}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              {timelines.map((timeline) => (
                                <SelectItem key={timeline} value={timeline}>
                                  {timeline}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="description">Project Description *</Label>
                        <Textarea
                          id="description"
                          name="description"
                          required
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Describe your project goals, target audience, and key features..."
                          rows={5}
                        />
                      </div>

                      <div>
                        <Label htmlFor="requirements">Technical Requirements</Label>
                        <Textarea
                          id="requirements"
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleInputChange}
                          placeholder="Any specific technical requirements, integrations, or constraints..."
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label>Project Files (Optional)</Label>
                        <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 mb-2">Upload project files, mockups, or references</p>
                          <Button type="button" variant="outline" onClick={handleFileUpload}>
                            Choose Files
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                        Contact Information
                      </h3>

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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+44 20 1234 5678"
                          />
                        </div>

                        <div>
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-900">What happens next?</h4>
                          <ul className="text-sm text-blue-800 mt-2 space-y-1">
                            <li>• We'll review your job order within 24 hours</li>
                            <li>• Our team will contact you to discuss details</li>
                            <li>• You'll receive a detailed proposal and timeline</li>
                            <li>• We'll schedule a kick-off meeting once approved</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-900 to-teal-600 hover:from-blue-800 hover:to-teal-500 py-3 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Submitting Job Order...'
                      ) : (
                        <>
                          Submit Job Order
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JobOrderForm;