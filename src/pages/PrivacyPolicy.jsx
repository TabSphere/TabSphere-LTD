import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - TabSphere LTD Data Protection</title>
        <meta name="description" content="TabSphere LTD Privacy Policy - Learn how we collect, use, and protect your personal data in compliance with GDPR and UK data protection laws." />
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
                <Shield className="w-16 h-16 text-blue-900 mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                <p className="text-lg text-gray-600">
                  Last updated: January 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  TabSphere LTD ("we," "our," or "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                </p>

                <h2>2. Information We Collect</h2>
                <h3>2.1 Personal Information</h3>
                <p>We may collect the following types of personal information:</p>
                <ul>
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Company information and job title</li>
                  <li>Project requirements and specifications</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>

                <h3>2.2 Technical Information</h3>
                <p>We automatically collect certain technical information, including:</p>
                <ul>
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use your personal information for the following purposes:</p>
                <ul>
                  <li>Providing and delivering our services</li>
                  <li>Processing payments and managing accounts</li>
                  <li>Communicating about projects and support</li>
                  <li>Improving our services and website</li>
                  <li>Marketing and promotional communications (with consent)</li>
                  <li>Legal compliance and fraud prevention</li>
                </ul>

                <h2>4. Legal Basis for Processing</h2>
                <p>Under GDPR, we process your personal data based on:</p>
                <ul>
                  <li><strong>Contract:</strong> To fulfill our contractual obligations</li>
                  <li><strong>Legitimate Interest:</strong> For business operations and improvements</li>
                  <li><strong>Consent:</strong> For marketing communications and cookies</li>
                  <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
                </ul>

                <h2>5. Data Sharing and Disclosure</h2>
                <p>We may share your information with:</p>
                <ul>
                  <li>Service providers and subcontractors</li>
                  <li>Payment processors and financial institutions</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners (with your consent)</li>
                </ul>
                <p>We do not sell, rent, or trade your personal information to third parties.</p>

                <h2>6. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>

                <h2>7. Data Retention</h2>
                <p>
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Typically:
                </p>
                <ul>
                  <li>Client data: Duration of relationship plus 7 years</li>
                  <li>Marketing data: Until you withdraw consent</li>
                  <li>Website analytics: 26 months</li>
                  <li>Support tickets: 3 years after resolution</li>
                </ul>

                <h2>8. Your Rights</h2>
                <p>Under GDPR and UK data protection law, you have the right to:</p>
                <ul>
                  <li><strong>Access:</strong> Request copies of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your data</li>
                  <li><strong>Restriction:</strong> Limit how we process your data</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing or cookies</li>
                </ul>

                <h2>9. Cookies and Tracking</h2>
                <p>
                  Our website uses cookies and similar technologies to enhance your experience. We use:
                </p>
                <ul>
                  <li><strong>Essential cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics cookies:</strong> To understand website usage</li>
                  <li><strong>Marketing cookies:</strong> For targeted advertising (with consent)</li>
                </ul>
                <p>You can manage cookie preferences through your browser settings or our cookie banner.</p>

                <h2>10. International Transfers</h2>
                <p>
                  Your data may be transferred to and processed in countries outside the UK/EEA. We ensure adequate protection through:
                </p>
                <ul>
                  <li>Adequacy decisions by the UK/EU authorities</li>
                  <li>Standard contractual clauses</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>

                <h2>11. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>

                <h2>12. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services constitutes acceptance of the updated policy.
                </p>

                <h2>13. Contact Information</h2>
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-900" />
                      <span><strong>Email:</strong> privacy@tabsphere.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-900" />
                      <span><strong>Phone:</strong> +44 20 1234 5678</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-900 mt-0.5" />
                      <div>
                        <strong>Data Protection Officer:</strong><br />
                        TabSphere LTD<br />
                        London, United Kingdom
                      </div>
                    </div>
                  </div>
                </div>

                <h2>14. Supervisory Authority</h2>
                <p>
                  You have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe we have not handled your personal data in accordance with data protection law.
                </p>
                <p>
                  <strong>ICO Website:</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:underline">ico.org.uk</a><br />
                  <strong>ICO Helpline:</strong> 0303 123 1113
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;