import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Cookie, Settings, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CookiePolicy = () => {
  const { toast } = useToast();

  const handleCookieSettings = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Cookie Policy - TabSphere LTD Website Cookies</title>
        <meta name="description" content="TabSphere LTD Cookie Policy - Learn about how we use cookies and similar technologies on our website to enhance your browsing experience." />
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
                <Cookie className="w-16 h-16 text-blue-900 mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
                <p className="text-lg text-gray-600">
                  Last updated: January 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners about how users interact with their sites.
                </p>

                <h2>2. How We Use Cookies</h2>
                <p>
                  TabSphere LTD uses cookies to enhance your browsing experience, analyze website traffic, and provide personalized content. We use both first-party cookies (set by our website) and third-party cookies (set by external services).
                </p>

                <h2>3. Types of Cookies We Use</h2>
                
                <h3>3.1 Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Examples:</strong></p>
                  <ul className="mb-0">
                    <li>Session management cookies</li>
                    <li>Security and authentication cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>

                <h3>3.2 Analytics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Examples:</strong></p>
                  <ul className="mb-0">
                    <li>Google Analytics cookies</li>
                    <li>Page view tracking</li>
                    <li>User behavior analysis</li>
                  </ul>
                </div>

                <h3>3.3 Functional Cookies</h3>
                <p>
                  These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Examples:</strong></p>
                  <ul className="mb-0">
                    <li>Language preference cookies</li>
                    <li>Theme and layout preferences</li>
                    <li>Chat widget cookies</li>
                  </ul>
                </div>

                <h3>3.4 Marketing Cookies</h3>
                <p>
                  These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users. We only use these cookies with your explicit consent.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Examples:</strong></p>
                  <ul className="mb-0">
                    <li>Advertising network cookies</li>
                    <li>Social media tracking pixels</li>
                    <li>Retargeting cookies</li>
                  </ul>
                </div>

                <h2>4. Third-Party Cookies</h2>
                <p>We may use the following third-party services that set cookies:</p>
                
                <h3>4.1 Google Analytics</h3>
                <p>
                  We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect information about how you use our website.
                </p>
                <p>
                  <strong>Purpose:</strong> Website analytics and performance monitoring<br />
                  <strong>Data collected:</strong> Page views, session duration, bounce rate, demographics<br />
                  <strong>Retention period:</strong> 26 months<br />
                  <strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:underline">Google Analytics Opt-out Browser Add-on</a>
                </p>

                <h3>4.2 Social Media Platforms</h3>
                <p>
                  Our website may include social media features and widgets. These features may collect your IP address and page information and may set cookies to enable proper functionality.
                </p>

                <h3>4.3 Live Chat Services</h3>
                <p>
                  We use live chat services to provide customer support. These services may set cookies to maintain chat sessions and improve user experience.
                </p>

                <h2>5. Cookie Consent</h2>
                <p>
                  When you first visit our website, you'll see a cookie banner asking for your consent to use non-essential cookies. You can:
                </p>
                <ul>
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                </ul>
                <p>
                  Essential cookies are automatically enabled as they are necessary for the website to function. You can change your cookie preferences at any time using our cookie settings.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Settings className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-900 mb-0">Manage Cookie Preferences</h3>
                  </div>
                  <p className="text-blue-800 mb-4">
                    You can update your cookie preferences at any time by clicking the button below.
                  </p>
                  <Button onClick={handleCookieSettings} className="bg-blue-600 hover:bg-blue-700">
                    Cookie Settings
                  </Button>
                </div>

                <h2>6. Managing Cookies in Your Browser</h2>
                <p>
                  You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience and some functionality may not work as intended.
                </p>

                <h3>Browser-Specific Instructions:</h3>
                <ul>
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>

                <h2>7. Cookie Retention</h2>
                <p>Different types of cookies have different retention periods:</p>
                <ul>
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain until expiry date or manual deletion</li>
                  <li><strong>Analytics cookies:</strong> Typically 2 years</li>
                  <li><strong>Marketing cookies:</strong> Vary by provider, typically 30 days to 2 years</li>
                </ul>

                <h2>8. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
                </p>

                <h2>9. Your Rights</h2>
                <p>Under data protection laws, you have rights regarding cookies and personal data:</p>
                <ul>
                  <li>Right to be informed about cookie usage</li>
                  <li>Right to consent to non-essential cookies</li>
                  <li>Right to withdraw consent at any time</li>
                  <li>Right to access data collected through cookies</li>
                  <li>Right to request deletion of cookie data</li>
                </ul>

                <h2>10. Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-900" />
                      <span><strong>Email:</strong> privacy@tabsphere.com</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Cookie className="w-5 h-5 text-blue-900 mt-0.5" />
                      <div>
                        <strong>Data Protection Officer:</strong><br />
                        TabSphere LTD<br />
                        London, United Kingdom
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Cookie-Free Browsing</h3>
                  <p className="text-green-800">
                    If you prefer to browse without cookies, you can disable them in your browser settings. However, please note that some features of our website may not function properly without cookies.
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

export default CookiePolicy;