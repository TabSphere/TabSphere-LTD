import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send, ArrowRight, ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import QuotationProgressBar from '@/components/quotation/QuotationProgressBar';
import Step1_ProjectType from '@/components/quotation/Step1_ProjectType';
import Step2_ProjectDetails from '@/components/quotation/Step2_ProjectDetails';
import Step3_TechnicalRequirements from '@/components/quotation/Step3_TechnicalRequirements';
import Step4_ContactInfo from '@/components/quotation/Step4_ContactInfo';

const QuotationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    services: [],
    projectTitle: '',
    description: '',
    features: '',
    timeline: '',
    budget: '',
    platforms: [],
    integrations: '',
    hosting: '',
    maintenance: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const totalSteps = 4;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (name, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked 
        ? [...prev[name], value]
        : prev[name].filter(item => item !== value)
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const quotations = JSON.parse(localStorage.getItem('quotations') || '[]');
      const newQuotation = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      quotations.push(newQuotation);
      localStorage.setItem('quotations', JSON.stringify(quotations));

      const emailData = {
        ...formData,
        services: formData.services.join(', '),
        platforms: formData.platforms.join(', '),
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_QUOTATION_TEMPLATE_ID',
        emailData,
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Quotation Request Submitted! 📋",
        description: "We'll prepare a detailed quote and send it to you within 48 hours. A confirmation has been sent to your email.",
        duration: 5000,
      });

      setFormData({
        projectType: '', services: [], projectTitle: '', description: '', features: '',
        timeline: '', budget: '', platforms: [], integrations: '', hosting: '',
        maintenance: '', name: '', email: '', phone: '', company: '', website: ''
      });
      setCurrentStep(1);
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error Submitting Request",
        description: "Your request was saved, but we couldn't send the email. Please contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Request Quote - TabSphere LTD Project Quotation</title>
        <meta name="description" content="Get a detailed quote for your digital project from TabSphere LTD. Multi-step form to provide accurate pricing for your specific requirements." />
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
                  Request Project Quote
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Get a detailed, personalized quote for your project. This multi-step form helps us understand your needs and provide accurate pricing.
                </p>
              </div>

              <QuotationProgressBar currentStep={currentStep} totalSteps={totalSteps} />

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Step {currentStep} of {totalSteps}:{' '}
                    {currentStep === 1 && 'Project Type & Services'}
                    {currentStep === 2 && 'Project Details'}
                    {currentStep === 3 && 'Technical Requirements'}
                    {currentStep === 4 && 'Contact Information'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={currentStep === totalSteps ? handleSubmit : (e) => e.preventDefault()}>
                    {currentStep === 1 && (
                      <Step1_ProjectType
                        formData={formData}
                        handleSelectChange={handleSelectChange}
                        handleMultiSelectChange={handleMultiSelectChange}
                      />
                    )}
                    {currentStep === 2 && (
                      <Step2_ProjectDetails
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSelectChange={handleSelectChange}
                      />
                    )}
                    {currentStep === 3 && (
                      <Step3_TechnicalRequirements
                        formData={formData}
                        handleMultiSelectChange={handleMultiSelectChange}
                        handleSelectChange={handleSelectChange}
                        handleInputChange={handleInputChange}
                      />
                    )}
                    {currentStep === 4 && (
                      <Step4_ContactInfo
                        formData={formData}
                        handleInputChange={handleInputChange}
                      />
                    )}

                    <div className="flex justify-between mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={currentStep === 1 ? 'invisible' : ''}
                      >
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Previous
                      </Button>

                      {currentStep < totalSteps ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-gradient-to-r from-blue-900 to-teal-600 hover:from-blue-800 hover:to-teal-500"
                        >
                          Next
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          className="bg-gradient-to-r from-blue-900 to-teal-600 hover:from-blue-800 hover:to-teal-500"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            'Submitting Request...'
                          ) : (
                            <>
                              Submit Quote Request
                              <Send className="ml-2 w-4 h-4" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
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

export default QuotationForm;