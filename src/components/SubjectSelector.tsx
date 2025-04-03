import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface SubjectSelectorProps {
  subjects: Subject[];
  selected: string;
  onSelect: (id: string) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ subjects, selected, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {subjects.map((subject) => {
        const Icon = subject.icon;
        return (
          <button
            key={subject.id}
            onClick={() => onSelect(subject.id)}
            className={`p-4 rounded-lg flex flex-col items-center justify-center transition-all ${
              selected === subject.id
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-indigo-50'
            }`}
          >
            <Icon className="h-8 w-8 mb-2" />
            <span className="font-medium">{subject.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default SubjectSelector;