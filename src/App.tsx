import React, { useState } from 'react';
import { BookOpen, Brain, Calculator, ChevronRight, History } from 'lucide-react';
import ExampleCard from './components/ExampleCard';
import SubjectSelector from './components/SubjectSelector';

function App() {
  const [selectedSubject, setSelectedSubject] = useState('math');

  const subjects = [
    { id: 'math', name: 'Mathematics', icon: Calculator },
    { id: 'science', name: 'Science', icon: Brain },
    { id: 'history', name: 'History', icon: History },
    { id: 'english', name: 'English', icon: BookOpen },
  ];

  const examples = {
    math: [
      {
        question: "How do you solve: 2x + 5 = 13?",
        steps: [
          "First, subtract 5 from both sides: 2x = 8",
          "Then divide both sides by 2: x = 4",
          "Check: 2(4) + 5 = 13 ✓"
        ],
        similar: "Try this: 3x + 2 = 14"
      },
      {
        question: "What is the area of a triangle with base 6 and height 8?",
        steps: [
          "Use the formula: Area = (base × height) ÷ 2",
          "Plug in values: Area = (6 × 8) ÷ 2",
          "Solve: Area = 48 ÷ 2 = 24 square units"
        ],
        similar: "Try finding the area of a triangle with base 4 and height 10"
      }
    ],
    science: [
      {
        question: "What is the difference between potential and kinetic energy?",
        steps: [
          "Potential energy is stored energy (e.g., a ball at the top of a hill)",
          "Kinetic energy is energy in motion (e.g., a rolling ball)",
          "Energy can transform between these forms"
        ],
        similar: "Consider a pendulum's energy transformations"
      }
    ],
    history: [
      {
        question: "What led to the Industrial Revolution?",
        steps: [
          "Technological innovations (steam engine)",
          "Agricultural improvements",
          "Population growth in cities",
          "New manufacturing processes"
        ],
        similar: "Consider how the Digital Revolution started"
      }
    ],
    english: [
      {
        question: "How do you identify the theme of a story?",
        steps: [
          "Look for recurring ideas or concepts",
          "Analyze character development",
          "Consider the conflict and resolution",
          "Think about the lesson learned"
        ],
        similar: "Try identifying themes in 'The Three Little Pigs'"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Learning by Example</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Select a Subject</h2>
          <SubjectSelector 
            subjects={subjects}
            selected={selectedSubject}
            onSelect={setSelectedSubject}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {examples[selectedSubject].map((example, index) => (
            <ExampleCard key={index} {...example} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;