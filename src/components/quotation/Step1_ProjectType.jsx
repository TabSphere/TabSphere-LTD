import React from 'react';

const projectTypes = [
  { value: 'website', label: 'Website Development', description: 'Corporate websites, portfolios, landing pages' },
  { value: 'ecommerce', label: 'E-commerce Platform', description: 'Online stores, marketplaces, payment systems' },
  { value: 'webapp', label: 'Web Application', description: 'Custom web apps, dashboards, SaaS platforms' },
  { value: 'mobile', label: 'Mobile Application', description: 'iOS and Android mobile apps' },
  { value: 'design', label: 'Design Services', description: 'UI/UX design, branding, graphics' },
  { value: 'other', label: 'Other Services', description: 'Consulting, maintenance, custom solutions' }
];

const serviceOptions = [
  'Frontend Development',
  'Backend Development',
  'Database Design',
  'API Development',
  'UI/UX Design',
  'Mobile Development',
  'E-commerce Setup',
  'Payment Integration',
  'SEO Optimization',
  'Security Implementation',
  'Cloud Hosting',
  'Maintenance & Support'
];

const Step1_ProjectType = ({ formData, handleSelectChange, handleMultiSelectChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">What type of project do you need?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectTypes.map((type) => (
            <div
              key={type.value}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.projectType === type.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleSelectChange('projectType', type.value)}
            >
              <h4 className="font-medium text-gray-900 mb-1">{type.label}</h4>
              <p className="text-sm text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Which services do you need?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={(e) => handleMultiSelectChange('services', service, e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{service}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1_ProjectType;