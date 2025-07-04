import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver groundbreaking solutions.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Our clients success is our success. We build lasting partnerships based on trust and exceptional service.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer experience.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'While based in the UK, we serve clients worldwide, bringing local expertise to global challenges.'
    }
  ];

  const team = [
    {
      name: 'James Mitchell',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 10+ years in digital innovation and business strategy.',
      avatar: 'Professional businessman with dark hair in suit'
    },
    {
      name: 'Sarah Thompson',
      role: 'CTO',
      bio: 'Technical expert specializing in software architecture and emerging technologies.',
      avatar: 'Professional woman with red hair in business attire'
    },
    {
      name: 'David Chen',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating scalable and efficient solutions.',
      avatar: 'Asian software developer with glasses'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Design Director',
      bio: 'Creative professional with expertise in UX/UI design and brand development.',
      avatar: 'Hispanic woman designer with creative background'
    }
  ];

  const milestones = [
    { year: '2019', event: 'TabSphere LTD founded in London' },
    { year: '2020', event: 'Reached 50+ successful projects' },
    { year: '2021', event: 'Expanded to cybersecurity services' },
    { year: '2022', event: 'Achieved 100+ client milestone' },
    { year: '2023', event: 'Launched SaaS development division' },
    { year: '2024', event: 'Celebrating 500+ completed projects' }
  ];

  return (
    <>
      <Helmet>
        <title>About TabSphere LTD - Our Story & Mission</title>
        <meta name="description" content="Learn about TabSphere LTD's journey, mission, and the expert team behind our innovative digital solutions. Discover our values and commitment to excellence." />
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
                About <span className="text-gradient">TabSphere</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                We're a passionate team of digital innovators, dedicated to transforming businesses through cutting-edge technology solutions and creative excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    Founded in 2019 in the heart of London, TabSphere LTD emerged from a simple yet powerful vision: to bridge the gap between innovative technology and real-world business challenges.
                  </p>
                  <p>
                    What started as a small team of passionate developers and designers has grown into a comprehensive digital innovation company, serving clients across the UK and beyond. We've maintained our startup agility while building enterprise-level expertise.
                  </p>
                  <p>
                    Today, we're proud to have completed over 500 projects, helped 150+ businesses transform digitally, and built a reputation for excellence in software development, web design, cybersecurity, and creative solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img  
                  alt="TabSphere office space with team working"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                 src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Target className="w-16 h-16 text-blue-900 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their audiences. We believe technology should be accessible, reliable, and transformative.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <Globe className="w-16 h-16 text-teal-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600">
                  To be the leading digital innovation partner for businesses worldwide, recognized for our technical excellence, creative solutions, and unwavering commitment to client success in an ever-evolving digital landscape.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we work with our clients and each other.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full card-hover">
                    <CardContent className="p-6 text-center">
                      <value.icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together years of experience in technology, design, and business strategy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full card-hover">
                    <CardContent className="p-6 text-center">
                      <img  
                        alt={`${member.name} profile picture`}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                       src="https://images.unsplash.com/photo-1611762342062-86e06a30eb41" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-900 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones that have shaped TabSphere into the company we are today.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-900 to-teal-600"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-900 mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-900 to-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;