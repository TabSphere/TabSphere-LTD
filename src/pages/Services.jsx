import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code, Globe, Palette, Monitor, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'software',
      icon: Code,
      title: 'Software & SaaS Solutions',
      description: 'Custom software development and Software-as-a-Service platforms tailored to your specific business requirements.',
      features: [
        'Custom Software Development',
        'SaaS Platform Creation',
        'API Development & Integration',
        'Cloud-Native Applications',
        'Microservices Architecture',
        'Database Design & Optimization'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'web',
      icon: Globe,
      title: 'Web & E-commerce Development',
      description: 'High-performance websites and e-commerce platforms that drive conversions and deliver exceptional user experiences.',
      features: [
        'Responsive Web Development',
        'E-commerce Platforms',
        'Content Management Systems',
        'Progressive Web Apps',
        'Payment Gateway Integration',
        'SEO Optimization'
      ],
      technologies: ['React', 'Next.js', 'Shopify', 'WooCommerce', 'Stripe', 'Google Analytics'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'design',
      icon: Palette,
      title: 'Creative & Brand Design',
      description: 'Stunning visual identities and brand experiences that captivate your audience and differentiate your business.',
      features: [
        'Brand Identity Design',
        'UI/UX Design',
        'Logo & Visual Assets',
        'Marketing Materials',
        'Website Design',
        'Mobile App Design'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Principle', 'Framer'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'cleaning',
      icon: Monitor,
      title: 'Computer Cleaning',
      description: 'Professional computer maintenance and cleaning services to keep your systems running at peak performance.',
      features: [
        'Hardware Cleaning & Maintenance',
        'Software Optimization',
        'Virus & Malware Removal',
        'System Performance Tuning',
        'Data Backup & Recovery',
        'Preventive Maintenance'
      ],
      technologies: ['Hardware Tools', 'Diagnostic Software', 'Antivirus Solutions', 'System Utilities'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.',
      features: [
        'Security Audits & Assessments',
        'GDPR Compliance',
        'Penetration Testing',
        'Security Training',
        'Incident Response',
        'Compliance Monitoring'
      ],
      technologies: ['Security Frameworks', 'Encryption Tools', 'Monitoring Systems', 'Compliance Software'],
      color: 'from-red-500 to-red-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, requirements, and challenges to create a comprehensive project plan.'
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our expert team designs and develops your solution using the latest technologies and best practices.'
    },
    {
      step: '03',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest standards of quality, security, and performance.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support to ensure continued success and optimization.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - TabSphere LTD Digital Solutions</title>
        <meta name="description" content="Explore TabSphere LTD's comprehensive digital services including software development, web design, cybersecurity, creative design, and computer maintenance solutions." />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Comprehensive digital solutions designed to transform your business and drive sustainable growth in today's competitive landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies We Use:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact">
                      <Button className={`bg-gradient-to-r ${service.color} hover:opacity-90`}>
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="service-card">
                      <CardContent className="p-8">
                        <img  
                          alt={`${service.title} illustration`}
                          className="w-full h-64 object-cover rounded-lg mb-6"
                         src="https://images.unsplash.com/photo-1688649102455-5e8d7e3fde0f" />
                        
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Ready to get started?
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Let's discuss how we can help transform your business with our {service.title.toLowerCase()}.
                          </p>
                          <Link to="/quotation">
                            <Button variant="outline" className="w-full">
                              Request Quote
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure every project is delivered on time, within budget, and exceeds expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full card-hover">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Let's discuss your requirements and create a custom solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg">
                    Contact Us Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/quotation">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;