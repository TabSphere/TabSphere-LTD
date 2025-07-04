import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'software', name: 'Software & SaaS' },
    { id: 'web', name: 'Web Development' },
    { id: 'design', name: 'Design' },
    { id: 'ecommerce', name: 'E-commerce' }
  ];

  const projects = [
    {
      id: 1,
      title: 'FinTech SaaS Platform',
      category: 'software',
      description: 'A comprehensive financial management platform for small businesses with real-time analytics and automated reporting.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'Modern fintech dashboard with charts and financial data visualization',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce Marketplace',
      category: 'ecommerce',
      description: 'Multi-vendor marketplace with advanced search, payment processing, and vendor management system.',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
      image: 'Clean e-commerce website with product listings and shopping cart',
      featured: true
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      category: 'software',
      description: 'GDPR-compliant patient management system with appointment scheduling and medical records.',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
      image: 'Healthcare dashboard with patient data and appointment calendar',
      featured: false
    },
    {
      id: 4,
      title: 'Brand Identity for Tech Startup',
      category: 'design',
      description: 'Complete brand identity including logo, color palette, typography, and marketing materials.',
      technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
      image: 'Modern brand identity showcase with logo variations and color palette',
      featured: false
    },
    {
      id: 5,
      title: 'Restaurant Chain Website',
      category: 'web',
      description: 'Responsive website with online ordering, location finder, and menu management system.',
      technologies: ['React', 'Node.js', 'Stripe', 'Google Maps API'],
      image: 'Restaurant website with food photography and online ordering interface',
      featured: true
    },
    {
      id: 6,
      title: 'Property Management Portal',
      category: 'software',
      description: 'Comprehensive property management solution with tenant portals and maintenance tracking.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS S3'],
      image: 'Property management dashboard with building listings and tenant information',
      featured: false
    },
    {
      id: 7,
      title: 'Fashion E-commerce Store',
      category: 'ecommerce',
      description: 'High-end fashion retailer with AR try-on features and personalized recommendations.',
      technologies: ['React', 'Shopify Plus', 'AR.js', 'Machine Learning'],
      image: 'Luxury fashion e-commerce site with model photography and product gallery',
      featured: false
    },
    {
      id: 8,
      title: 'Educational Platform UI/UX',
      category: 'design',
      description: 'User experience design for online learning platform with interactive course materials.',
      technologies: ['Figma', 'Principle', 'Adobe XD', 'InVision'],
      image: 'Educational platform interface with course videos and progress tracking',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleViewProject = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - TabSphere LTD Case Studies & Projects</title>
        <meta name="description" content="Explore TabSphere LTD's portfolio of successful digital projects including software development, web design, e-commerce solutions, and creative design work." />
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
                Our <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Discover how we've helped businesses transform digitally through innovative solutions and creative excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className={`${
                    activeFilter === category.id 
                      ? 'bg-gradient-to-r from-blue-900 to-teal-600' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
                >
                  <Card className="h-full card-hover group">
                    <div className="relative overflow-hidden">
                      <img  
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                       src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-900 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={handleViewProject}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={handleViewProject}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Success Metrics</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our portfolio demonstrates consistent delivery of high-quality solutions that drive real business results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Projects Completed', description: 'Successfully delivered across all service areas' },
                { number: '98%', label: 'Client Satisfaction', description: 'Based on post-project surveys and feedback' },
                { number: '150+', label: 'Happy Clients', description: 'Businesses we\'ve helped transform digitally' },
                { number: '24/7', label: 'Support Available', description: 'Ongoing maintenance and support services' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-gray-600 text-sm">{stat.description}</div>
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
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Let's create something amazing together. Start your digital transformation journey with TabSphere today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                  Get Free Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;