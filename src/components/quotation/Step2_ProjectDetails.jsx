import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const budgetRanges = [
  'Under £5,000',
  '£5,000 - £15,000',
  '£15,000 - £50,000',
  '£50,000 - £100,000',
  'Over £100,000',
  'To be discussed'
];

const timelines = [
  'ASAP (Rush)',
  '1-2 weeks',
  '1 month',
  '2-3 months',
  '3-6 months',
  '6+ months',
  'Flexible'
];

const Step2_ProjectDetails = ({ formData, handleInputChange, handleSelectChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="projectTitle">Project Title *</Label>
        <Input
          id="projectTitle"
          name="projectTitle"
          type="text"
          required
          value={formData.projectTitle}
          onChange={handleInputChange}
          placeholder="Brief title for your project"
        />
      </div>

      <div>
        <Label htmlFor="description">Project Description *</Label>
        <Textarea
          id="description"
          name="description"
          required
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe your project goals, target audience, and key objectives..."
          rows={5}
        />
      </div>

      <div>
        <Label htmlFor="features">Key Features & Functionality</Label>
        <Textarea
          id="features"
          name="features"
          value={formData.features}
          onChange={handleInputChange}
          placeholder="List the main features and functionality you need..."
          rows={4}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="timeline">Desired Timeline</Label>
          <Select onValueChange={(value) => handleSelectChange('timeline', value)} value={formData.timeline}>
            <SelectTrigger>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelines.map((timeline) => (
                <SelectItem key={timeline} value={timeline}>
                  {timeline}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="budget">Budget Range</Label>
          <Select onValueChange={(value) => handleSelectChange('budget', value)} value={formData.budget}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Step2_ProjectDetails;