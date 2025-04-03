import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExampleCardProps {
  question: string;
  steps: string[];
  similar: string;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ question, steps, similar }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{question}</h3>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-indigo-600 hover:text-indigo-700"
        >
          <span className="font-medium">View Solution</span>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-4">
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-900">Practice Problem:</p>
              <p className="mt-1 text-gray-600">{similar}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExampleCard;