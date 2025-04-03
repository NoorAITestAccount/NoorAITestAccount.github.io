import React, { useState } from 'react';
import { BookOpen, Search, MessageSquare, AlertCircle } from 'lucide-react';
import QuestionForm from './components/QuestionForm';
import ExampleResponse from './components/ExampleResponse';

function App() {
  const [question, setQuestion] = useState('');
  const [subject, setSubject] = useState('math');
  const [showResponse, setShowResponse] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResponse(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Learning Guide</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learn Through Examples
          </h1>
          <p className="text-lg text-gray-600">
            Get help understanding concepts through similar examples and explanations
          </p>
        </div>

        <QuestionForm
          question={question}
          subject={subject}
          onQuestionChange={setQuestion}
          onSubjectChange={setSubject}
          onSubmit={handleSubmit}
        />

        {showResponse && (
          <ExampleResponse
            subject={subject}
            question={question}
          />
        )}

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-blue-600 mt-1" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">How it works</h3>
              <ul className="mt-2 text-gray-600 space-y-2">
                <li className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  We analyze your question
                </li>
                <li className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Provide similar examples with detailed explanations
                </li>
                <li className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Guide you to understand the concept
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;