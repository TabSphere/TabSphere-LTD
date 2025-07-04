import React from 'react';
import { CheckCircle } from 'lucide-react';

const QuotationProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {[...Array(totalSteps)].map((_, i) => {
          const step = i + 1;
          return (
            <div
              key={step}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step <= currentStep
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'border-gray-300 text-gray-500'
              }`}
            >
              {step < currentStep ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <span className="font-medium">{step}</span>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuotationProgressBar;