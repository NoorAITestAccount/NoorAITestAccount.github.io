import React from 'react';
import { Lightbulb as LightBulb, CheckCircle } from 'lucide-react';

interface ExampleResponseProps {
  subject: string;
  question: string;
}

function ExampleResponse({ subject, question }: ExampleResponseProps) {
  // This is a mock example. In a real application, you would generate
  // relevant examples based on the subject and question
  const getExamples = () => {
    switch (subject) {
      case 'math':
        return [
          {
            title: 'Similar Problem #1',
            problem: 'If x + 5 = 12, what is x?',
            solution: 'x = 7',
            explanation: [
              'Start with the equation: x + 5 = 12',
              'Subtract 5 from both sides to isolate x',
              'x = 12 - 5',
              'Therefore, x = 7'
            ]
          },
          {
            title: 'Similar Problem #2',
            problem: 'If 2x + 3 = 15, what is x?',
            solution: 'x = 6',
            explanation: [
              'Start with the equation: 2x + 3 = 15',
              'Subtract 3 from both sides: 2x = 12',
              'Divide both sides by 2',
              'Therefore, x = 6'
            ]
          }
        ];
      default:
        return [
          {
            title: 'Example Problem',
            problem: 'Sample problem related to your question',
            solution: 'Sample solution',
            explanation: ['Step 1', 'Step 2', 'Step 3']
          }
        ];
    }
  };

  const examples = getExamples();

  return (
    <div className="mt-8 space-y-6">
      <div className="bg-blue-50 p-4 rounded-md">
        <div className="flex items-center mb-2">
          <LightBulb className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Learning Through Examples</h3>
        </div>
        <p className="text-gray-600">
          Here are similar problems with detailed explanations to help you understand the concept.
        </p>
      </div>

      {examples.map((example, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-lg font-medium text-gray-900 mb-4">{example.title}</h4>
          
          <div className="mb-4">
            <h5 className="text-sm font-medium text-gray-700 mb-2">Problem:</h5>
            <p className="text-gray-900">{example.problem}</p>
          </div>

          <div className="mb-4">
            <h5 className="text-sm font-medium text-gray-700 mb-2">Solution:</h5>
            <p className="text-gray-900">{example.solution}</p>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-700 mb-2">Explanation:</h5>
            <ul className="space-y-2">
              {example.explanation.map((step, stepIndex) => (
                <li key={stepIndex} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExampleResponse;