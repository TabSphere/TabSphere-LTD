import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Shield, Zap, Users, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Software & SaaS Solutions',
      description: 'Custom software development and SaaS platforms tailored to your business needs.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Palette,
      title: 'Creative & Brand Design',
      description: 'Stunning visual identities and brand experiences that captivate your audience.',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      color: 'from-lime-500 to-lime-600'
    },
    {
      icon: Zap,
      title: 'Web & E-commerce Development',
      description: 'High-performance websites and e-commerce platforms that drive results.',
      color: 'from-rose-500 to-rose-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Ltd',
      content: 'TabSphere transformed our digital presence completely. Their expertise in software development is unmatched.',
      avatar: 'Professional woman with short brown hair'
    },
    {
      name: 'Michael Chen',
      company: 'E-Commerce Plus',
      content: 'Outstanding e-commerce platform development. Our sales increased by 300% after the launch.',
      avatar: 'Asian businessman in suit'
    },
    {
      name: 'Emma Williams',
      company: 'Creative Agency',
      content: 'The brand design work exceeded our expectations. TabSphere truly understands modern design trends.',
      avatar: 'Young woman with blonde hair'
    }
  ];

  return (
    <>
      <Helmet>
        <title>TabSphere LTD - Leading UK Digital Innovation Company</title>
        <meta name="description" content="TabSphere LTD is a leading UK-based digital innovation company specializing in software development, web design, cybersecurity, and creative solutions for businesses worldwide." />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg hero-pattern">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Digital Innovation
                <br />
                <span className="text-gradient">Redefined</span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We're TabSphere LTD, a leading UK-based digital innovation company delivering cutting-edge technology solutions that transform businesses worldwide.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
                    View Our Work
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </motion.div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From software development to cybersecurity, we offer comprehensive digital solutions that drive business growth and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full card-hover cursor-pointer bg-white">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-12"
            >
              <Link to="/services">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  Explore All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="text-gradient">TabSphere?</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We combine technical expertise with creative innovation to deliver solutions that exceed expectations and drive real business results.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Expert team with 5+ years of experience',
                    'Cutting-edge technology and best practices',
                    '24/7 support and maintenance',
                    'GDPR compliant and secure solutions',
                    'Proven track record with 500+ projects'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  alt="Modern office with team collaboration"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                 src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about working with TabSphere.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-effect border-white/20 h-full">
                    <CardContent className="p-6">
                      <p className="text-white/90 mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center space-x-4">
                        <img 
                          alt={`${testimonial.name} profile picture`}
                          className="w-12 h-12 rounded-full object-cover"
                         src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d" />
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-white/70 text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Let's discuss how TabSphere can help you achieve your digital goals. Get in touch today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/quotation">
                  <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 text-lg">
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

export default Home;