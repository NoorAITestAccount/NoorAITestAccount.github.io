import React from 'react';
import { Send } from 'lucide-react';

interface QuestionFormProps {
  question: string;
  subject: string;
  onQuestionChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const subjects = [
  'math',
  'science',
  'english',
  'history',
  'physics',
  'chemistry',
  'biology',
  'literature'
];

function QuestionForm({
  question,
  subject,
  onQuestionChange,
  onSubjectChange,
  onSubmit
}: QuestionFormProps) {
  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Select Subject
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => onSubjectChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {subjects.map((sub) => (
            <option key={sub} value={sub}>
              {sub.charAt(0).toUpperCase() + sub.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
          Your Question
        </label>
        <textarea
          id="question"
          value={question}
          onChange={(e) => onQuestionChange(e.target.value)}
          placeholder="Enter your question here..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        <Send className="h-5 w-5 mr-2" />
        Get Example Solutions
      </button>
    </form>
  );
}

export default QuestionForm;