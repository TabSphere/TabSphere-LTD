import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Ticket, 
  Calculator, 
  Bell, 
  User, 
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const ClientDashboard = () => {
  const [clientData, setClientData] = useState(null);
  const [jobOrders, setJobOrders] = useState([]);
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('clientToken');
    const userData = localStorage.getItem('clientData');

    if (!token || !userData) {
      navigate('/client-login');
      return;
    }

    setClientData(JSON.parse(userData));

    // Load user's job orders and tickets
    const allJobOrders = JSON.parse(localStorage.getItem('jobOrders') || '[]');
    const allTickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
    const userEmail = JSON.parse(userData).email;

    setJobOrders(allJobOrders.filter(order => order.email === userEmail));
    setTickets(allTickets.filter(ticket => ticket.email === userEmail));
  }, [navigate]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
      case 'resolved':
        return 'text-green-600 bg-green-100';
      case 'in progress':
        return 'text-blue-600 bg-blue-100';
      case 'pending':
      case 'open':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
      case 'resolved':
        return CheckCircle;
      case 'in progress':
        return Clock;
      case 'pending':
      case 'open':
        return AlertCircle;
      default:
        return Clock;
    }
  };

  const handleViewDetails = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  if (!clientData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Client Dashboard - TabSphere LTD</title>
        <meta name="description" content="Manage your projects, view tickets, and track progress in your TabSphere LTD client dashboard." />
      </Helmet>

      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-blue-900 to-teal-600 rounded-lg p-6 text-white">
              <h1 className="text-3xl font-bold mb-2">Welcome back, {clientData.name}!</h1>
              <p className="text-blue-100">
                Manage your projects and track progress from your personal dashboard.
              </p>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <Link to="/job-order">
              <Card className="card-hover cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">New Job Order</h3>
                  <p className="text-gray-600 text-sm">Submit a new project request</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/support">
              <Card className="card-hover cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Ticket className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Ticket</h3>
                  <p className="text-gray-600 text-sm">Get help with existing projects</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/quotation">
              <Card className="card-hover cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Calculator className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Quote</h3>
                  <p className="text-gray-600 text-sm">Get pricing for new projects</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Job Orders */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Recent Job Orders</span>
                  </CardTitle>
                  <Link to="/job-order">
                    <Button size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      New Order
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  {jobOrders.length > 0 ? (
                    <div className="space-y-4">
                      {jobOrders.slice(0, 3).map((order) => {
                        const StatusIcon = getStatusIcon(order.status || 'pending');
                        return (
                          <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{order.projectTitle}</h4>
                              <p className="text-sm text-gray-600">{order.service}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(order.timestamp).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status || 'pending')}`}>
                                <StatusIcon className="w-3 h-3 inline mr-1" />
                                {order.status || 'Pending'}
                              </span>
                              <Button size="sm" variant="ghost" onClick={handleViewDetails}>
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>No job orders yet</p>
                      <p className="text-sm">Submit your first project request to get started</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Support Tickets */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Ticket className="w-5 h-5" />
                    <span>Support Tickets</span>
                  </CardTitle>
                  <Link to="/support">
                    <Button size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      New Ticket
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  {tickets.length > 0 ? (
                    <div className="space-y-4">
                      {tickets.slice(0, 3).map((ticket) => {
                        const StatusIcon = getStatusIcon(ticket.status || 'open');
                        return (
                          <div key={ticket.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{ticket.subject}</h4>
                              <p className="text-sm text-gray-600">#{ticket.ticketId}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(ticket.timestamp).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status || 'open')}`}>
                                <StatusIcon className="w-3 h-3 inline mr-1" />
                                {ticket.status || 'Open'}
                              </span>
                              <Button size="sm" variant="ghost" onClick={handleViewDetails}>
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Ticket className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>No support tickets</p>
                      <p className="text-sm">Create a ticket if you need assistance</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Account Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Account Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Personal Details</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Name:</span> {clientData.name}</p>
                      <p><span className="text-gray-600">Email:</span> {clientData.email}</p>
                      {clientData.company && (
                        <p><span className="text-gray-600">Company:</span> {clientData.company}</p>
                      )}
                      <p><span className="text-gray-600">Member since:</span> {new Date(clientData.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Account Statistics</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Total Job Orders:</span> {jobOrders.length}</p>
                      <p><span className="text-gray-600">Support Tickets:</span> {tickets.length}</p>
                      <p><span className="text-gray-600">Active Projects:</span> {jobOrders.filter(o => o.status === 'in progress').length}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ClientDashboard;