import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Mail, Phone } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - TabSphere LTD Legal Terms</title>
        <meta name="description" content="TabSphere LTD Terms of Service - Legal terms and conditions for using our digital innovation services and website." />
      </Helmet>

      <div className="min-h-screen pt-16 bg-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <FileText className="w-16 h-16 text-blue-900 mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                <p className="text-lg text-gray-600">
                  Last updated: January 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>1. Agreement to Terms</h2>
                <p>
                  By accessing and using TabSphere LTD's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2>2. Company Information</h2>
                <p>
                  TabSphere LTD is a company registered in the United Kingdom, specializing in digital innovation services including software development, web design, cybersecurity, and creative solutions.
                </p>

                <h2>3. Services Description</h2>
                <p>TabSphere LTD provides the following services:</p>
                <ul>
                  <li>Software and SaaS development</li>
                  <li>Web and e-commerce development</li>
                  <li>Creative and brand design</li>
                  <li>Computer cleaning and maintenance</li>
                  <li>Cybersecurity and compliance services</li>
                  <li>Digital consulting and support</li>
                </ul>

                <h2>4. Service Terms</h2>
                <h3>4.1 Project Agreements</h3>
                <p>
                  All projects are subject to separate written agreements that outline specific deliverables, timelines, and payment terms. These project agreements supplement but do not replace these Terms of Service.
                </p>

                <h3>4.2 Scope of Work</h3>
                <p>
                  The scope of work for each project will be clearly defined in the project agreement. Any changes to the scope must be agreed upon in writing and may result in additional charges.
                </p>

                <h3>4.3 Timeline and Delivery</h3>
                <p>
                  Project timelines are estimates based on the information provided and agreed scope. Delays caused by client feedback, content provision, or scope changes may affect delivery dates.
                </p>

                <h2>5. Payment Terms</h2>
                <h3>5.1 Pricing and Invoicing</h3>
                <p>
                  All prices are quoted in British Pounds (GBP) and are exclusive of VAT unless otherwise stated. Invoices are typically issued according to project milestones or monthly for ongoing services.
                </p>

                <h3>5.2 Payment Schedule</h3>
                <p>
                  Payment terms are typically 30 days from invoice date unless otherwise agreed. Late payments may incur interest charges at a rate of 8% above the Bank of England base rate.
                </p>

                <h3>5.3 Refunds</h3>
                <p>
                  Refunds are considered on a case-by-case basis. Work completed and delivered according to specifications is generally non-refundable.
                </p>

                <h2>6. Intellectual Property</h2>
                <h3>6.1 Client Content</h3>
                <p>
                  Clients retain ownership of all content, data, and materials provided to TabSphere LTD. By providing content, clients grant us a license to use it for the purpose of delivering services.
                </p>

                <h3>6.2 Developed Work</h3>
                <p>
                  Upon full payment, clients receive ownership of custom-developed work, excluding any pre-existing intellectual property, third-party components, or our proprietary methodologies.
                </p>

                <h3>6.3 Portfolio Rights</h3>
                <p>
                  TabSphere LTD reserves the right to showcase completed work in our portfolio and marketing materials unless otherwise agreed in writing.
                </p>

                <h2>7. Client Responsibilities</h2>
                <p>Clients are responsible for:</p>
                <ul>
                  <li>Providing accurate and complete project requirements</li>
                  <li>Timely provision of content, feedback, and approvals</li>
                  <li>Ensuring they have rights to all provided materials</li>
                  <li>Maintaining backups of their data and content</li>
                  <li>Compliance with applicable laws and regulations</li>
                </ul>

                <h2>8. Warranties and Disclaimers</h2>
                <h3>8.1 Service Warranty</h3>
                <p>
                  We warrant that our services will be performed with reasonable skill and care in accordance with industry standards. We provide a 30-day warranty on delivered work for defects in workmanship.
                </p>

                <h3>8.2 Disclaimers</h3>
                <p>
                  Except as expressly stated, all services are provided "as is" without warranties of any kind. We do not guarantee specific results, rankings, or performance metrics unless explicitly agreed in writing.
                </p>

                <h2>9. Limitation of Liability</h2>
                <p>
                  TabSphere LTD's liability for any claim arising from our services is limited to the amount paid for the specific service giving rise to the claim. We are not liable for indirect, consequential, or punitive damages.
                </p>

                <h2>10. Confidentiality</h2>
                <p>
                  We maintain strict confidentiality regarding client information and projects. We will not disclose confidential information to third parties without written consent, except as required by law.
                </p>

                <h2>11. Termination</h2>
                <h3>11.1 Termination by Client</h3>
                <p>
                  Clients may terminate services with 30 days written notice. Payment is due for all work completed up to the termination date.
                </p>

                <h3>11.2 Termination by TabSphere</h3>
                <p>
                  We may terminate services immediately for non-payment, breach of terms, or if continuation would be illegal or impractical.
                </p>

                <h2>12. Force Majeure</h2>
                <p>
                  Neither party shall be liable for delays or failures in performance resulting from circumstances beyond their reasonable control, including but not limited to natural disasters, government actions, or technical failures.
                </p>

                <h2>13. Data Protection</h2>
                <p>
                  We process personal data in accordance with our Privacy Policy and applicable data protection laws, including GDPR. Clients are responsible for ensuring their own compliance with data protection requirements.
                </p>

                <h2>14. Governing Law</h2>
                <p>
                  These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the English courts.
                </p>

                <h2>15. Modifications</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be posted on our website with an updated effective date. Continued use of our services constitutes acceptance of modified terms.
                </p>

                <h2>16. Severability</h2>
                <p>
                  If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                </p>

                <h2>17. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-900" />
                      <span><strong>Email:</strong> legal@tabsphere.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-900" />
                      <span><strong>Phone:</strong> +44 20 1234 5678</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-blue-900 mt-0.5" />
                      <div>
                        <strong>Legal Department:</strong><br />
                        TabSphere LTD<br />
                        London, United Kingdom
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Notice</h3>
                  <p className="text-blue-800">
                    These terms constitute the entire agreement between you and TabSphere LTD regarding the use of our services. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsOfService;