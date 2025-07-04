import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const ClientLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if user exists in localStorage
      const users = JSON.parse(localStorage.getItem('clientUsers') || '[]');
      const user = users.find(u => u.email === loginData.email && u.password === loginData.password);

      if (user) {
        // Store login session
        localStorage.setItem('clientToken', 'mock-jwt-token');
        localStorage.setItem('clientData', JSON.stringify(user));

        toast({
          title: "Login Successful! 🎉",
          description: "Welcome back to your dashboard.",
          duration: 3000,
        });

        navigate('/dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Login Error",
        description: "Something went wrong. Please try again.",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (registerData.password !== registerData.confirmPassword) {
        toast({
          title: "Registration Failed",
          description: "Passwords do not match.",
          duration: 5000,
        });
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Store user in localStorage
      const users = JSON.parse(localStorage.getItem('clientUsers') || '[]');
      const newUser = {
        id: Date.now(),
        name: registerData.name,
        email: registerData.email,
        company: registerData.company,
        password: registerData.password,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      localStorage.setItem('clientUsers', JSON.stringify(users));

      // Auto login
      localStorage.setItem('clientToken', 'mock-jwt-token');
      localStorage.setItem('clientData', JSON.stringify(newUser));

      toast({
        title: "Registration Successful! 🎉",
        description: "Your account has been created. Welcome to TabSphere!",
        duration: 3000,
      });

      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Registration Error",
        description: "Something went wrong. Please try again.",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Client Login - TabSphere LTD Dashboard Access</title>
        <meta name="description" content="Access your TabSphere LTD client dashboard to manage projects, submit tickets, and track your digital solutions." />
      </Helmet>

      <div className="min-h-screen pt-16 bg-gray-50">
        <section className="py-20">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Portal</h1>
                <p className="text-gray-600">Access your dashboard and manage your projects</p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="register">Register</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-4">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={loginData.email}
                              onChange={handleLoginChange}
                              placeholder="your@email.com"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="password"
                              name="password"
                              type={showPassword ? 'text' : 'password'}
                              required
                              value={loginData.password}
                              onChange={handleLoginChange}
                              placeholder="Enter your password"
                              className="pl-10 pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-900 to-teal-600 hover:from-blue-800 hover:to-teal-500"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Signing In...' : 'Sign In'}
                        </Button>
                      </form>

                      <div className="text-center">
                        <button
                          onClick={() => toast({
                            title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                            duration: 3000,
                          })}
                          className="text-sm text-blue-900 hover:underline"
                        >
                          Forgot your password?
                        </button>
                      </div>
                    </TabsContent>

                    <TabsContent value="register" className="space-y-4">
                      <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={registerData.name}
                              onChange={handleRegisterChange}
                              placeholder="Your full name"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="register-email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="register-email"
                              name="email"
                              type="email"
                              required
                              value={registerData.email}
                              onChange={handleRegisterChange}
                              placeholder="your@email.com"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={registerData.company}
                            onChange={handleRegisterChange}
                            placeholder="Your company (optional)"
                          />
                        </div>

                        <div>
                          <Label htmlFor="register-password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="register-password"
                              name="password"
                              type={showPassword ? 'text' : 'password'}
                              required
                              value={registerData.password}
                              onChange={handleRegisterChange}
                              placeholder="Create a password"
                              className="pl-10 pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="confirmPassword">Confirm Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="confirmPassword"
                              name="confirmPassword"
                              type="password"
                              required
                              value={registerData.confirmPassword}
                              onChange={handleRegisterChange}
                              placeholder="Confirm your password"
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-900 to-teal-600 hover:from-blue-800 hover:to-teal-500"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Creating Account...' : 'Create Account'}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Need help? <Link to="/contact" className="text-blue-900 hover:underline">Contact our support team</Link>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClientLogin;