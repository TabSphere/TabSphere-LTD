import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home.jsx';
import About from '@/pages/About.jsx';
import Services from '@/pages/Services.jsx';
import Portfolio from '@/pages/Portfolio.jsx';
import Blog from '@/pages/Blog.jsx';
import Contact from '@/pages/Contact.jsx';
import ClientLogin from '@/pages/ClientLogin.jsx';
import ClientDashboard from '@/pages/ClientDashboard.jsx';
import JobOrderForm from '@/pages/JobOrderForm.jsx';
import SupportTicket from '@/pages/SupportTicket.jsx';
import QuotationForm from '@/pages/QuotationForm.jsx';
import PrivacyPolicy from '@/pages/PrivacyPolicy.jsx';
import TermsOfService from '@/pages/TermsOfService.jsx';
import CookiePolicy from '@/pages/CookiePolicy.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/client-login" element={<ClientLogin />} />
            <Route path="/dashboard" element={<ClientDashboard />} />
            <Route path="/job-order" element={<JobOrderForm />} />
            <Route path="/support" element={<SupportTicket />} />
            <Route path="/quotation" element={<QuotationForm />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;