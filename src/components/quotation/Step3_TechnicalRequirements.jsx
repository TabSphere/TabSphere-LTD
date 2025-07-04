import React from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const platformOptions = [
  'Web (Desktop)',
  'Mobile (iOS)',
  'Mobile (Android)',
  'Progressive Web App',
  'Desktop Application',
  'API/Backend Only'
];

const Step3_TechnicalRequirements = ({ formData, handleMultiSelectChange, handleSelectChange, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Target Platforms</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {platformOptions.map((platform) => (
            <label key={platform} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.platforms.includes(platform)}
                onChange={(e) => handleMultiSelectChange('platforms', platform, e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{platform}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="integrations">Third-party Integrations</Label>
        <Textarea
          id="integrations"
          name="integrations"
          value={formData.integrations}
          onChange={handleInputChange}
          placeholder="List any third-party services, APIs, or systems you need to integrate with..."
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="hosting">Hosting Requirements</Label>
        <Textarea
          id="hosting"
          name="hosting"
          value={formData.hosting}
          onChange={handleInputChange}
          placeholder="Do you have existing hosting? Any specific hosting requirements or preferences?"
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="maintenance">Ongoing Maintenance</Label>
        <Select onValueChange={(value) => handleSelectChange('maintenance', value)} value={formData.maintenance}>
          <SelectTrigger>
            <SelectValue placeholder="Select maintenance preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No ongoing maintenance needed</SelectItem>
            <SelectItem value="basic">Basic maintenance (updates, backups)</SelectItem>
            <SelectItem value="standard">Standard maintenance (monitoring, support)</SelectItem>
            <SelectItem value="premium">Premium maintenance (24/7 support, optimization)</SelectItem>
            <SelectItem value="discuss">Let's discuss options</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Step3_TechnicalRequirements;