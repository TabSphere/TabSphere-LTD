import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Technology' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'security', name: 'Security' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of SaaS Development in 2024',
      excerpt: 'Exploring emerging trends and technologies that will shape the Software-as-a-Service landscape in the coming year.',
      category: 'technology',
      author: 'James Mitchell',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'Modern SaaS dashboard with futuristic design elements and data visualization',
      featured: true
    },
    {
      id: 2,
      title: 'GDPR Compliance for Small Businesses',
      excerpt: 'A comprehensive guide to understanding and implementing GDPR requirements for small and medium enterprises.',
      category: 'security',
      author: 'Sarah Thompson',
      date: '2024-01-10',
      readTime: '8 min read',
      image: 'GDPR compliance checklist with security icons and legal documents',
      featured: false
    },
    {
      id: 3,
      title: 'UI/UX Design Trends That Convert',
      excerpt: 'Discover the latest design trends that not only look great but also drive user engagement and conversions.',
      category: 'design',
      author: 'Emma Rodriguez',
      date: '2024-01-08',
      readTime: '6 min read',
      image: 'Modern UI design mockups with trendy color schemes and layouts',
      featured: true
    },
    {
      id: 4,
      title: 'Building Scalable E-commerce Platforms',
      excerpt: 'Best practices for creating e-commerce solutions that can grow with your business and handle increased traffic.',
      category: 'technology',
      author: 'David Chen',
      date: '2024-01-05',
      readTime: '7 min read',
      image: 'E-commerce platform architecture diagram with scalability indicators',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Transformation for Traditional Businesses',
      excerpt: 'How established businesses can successfully navigate the digital transformation journey without disrupting operations.',
      category: 'business',
      author: 'James Mitchell',
      date: '2024-01-03',
      readTime: '9 min read',
      image: 'Traditional business transforming to digital with technology integration',
      featured: false
    },
    {
      id: 6,
      title: 'Cybersecurity Best Practices for Remote Teams',
      excerpt: 'Essential security measures and tools to protect your business when employees work from various locations.',
      category: 'security',
      author: 'Sarah Thompson',
      date: '2023-12-28',
      readTime: '6 min read',
      image: 'Remote team security setup with VPN and encrypted connections',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReadMore = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - TabSphere LTD Insights & Updates</title>
        <meta name="description" content="Stay updated with the latest insights on technology, design, business, and cybersecurity from TabSphere LTD's expert team." />
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
                Our <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Insights, trends, and expert advice on technology, design, business strategy, and digital innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-6 items-center justify-between"
            >
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`${
                      selectedCategory === category.id 
                        ? 'bg-gradient-to-r from-blue-900 to-teal-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {filteredPosts.filter(post => post.featured).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full card-hover group">
                    <div className="relative overflow-hidden">
                      <img  
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                       src="https://images.unsplash.com/photo-1702819073926-d9225ebd1760" />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-900 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        className="group-hover:bg-blue-900 group-hover:text-white transition-colors"
                        onClick={handleReadMore}
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* All Posts Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">All Articles</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full card-hover group">
                    <div className="relative overflow-hidden">
                      <img  
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                       src="https://images.unsplash.com/photo-1702819073926-d9225ebd1760" />
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium capitalize">
                        {post.category}
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={handleReadMore}
                          className="group-hover:text-blue-900"
                        >
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Stay Updated
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Subscribe to our newsletter and get the latest insights on technology, design, and business strategy delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button 
                  className="bg-white text-blue-900 hover:bg-gray-100"
                  onClick={() => toast({
                    title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                    duration: 3000,
                  })}
                >
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;