'use client';

import Link from 'next/link';
import React, { useState } from 'react';

interface FormData {
  difficulty: 'easy' | 'medium' | 'hard';
  topic: 'Pointers and Array' | 'Linked List' | 'Recursion' | 'Stack' | 'Queues' | 'Searching Algorithms' | 'Sorting Algorithms'| 'Binary trees' | 'Graph';

}

const SettingsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    difficulty: 'easy',
    topic: 'Pointers and Array',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="mx-3 flex max-w-lg flex-col space-y-16 rounded-lg bg-blue-500 bg-opacity-95 p-14 md:mx-auto">
      <div className="text-lg text-white-200 md:text-xl">
        Let the artificial intelligence create a quiz according to your choices.
      </div>
      <div className="space-y-12">
        <div>
          <label
            htmlFor="difficulty"
            className="mb-4 block text-base text-white"
          >
            Difficulty
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full cursor-pointer appearance-none border-b border-t border-b-gray-800 border-t-gray-800 bg-transparent px-1.5 py-4 text-base text-black outline-none transition-all hover:border-b-white hover:border-t-white"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="topic"
            className="mb-4 block text-base text-white"
          >
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full cursor-pointer appearance-none border-b border-t border-b-gray-800 border-t-gray-800 bg-transparent px-1.5 py-4 text-base text-black outline-none transition-all hover:border-b-white hover:border-t-white"
          >
            <option value="Pointers and Array">Pointers and Array</option>
            <option value="Linked List">Linked List</option>
            <option value="Recursion">Recursion</option>
            <option value="Stack">Stack</option>
            <option value="Queues">Queues</option>
            <option value="Searching Algorithms">Searching Algorithms</option>
            <option value="Sorting Algorithms">Sorting Algorithms</option>
            <option value="Binary trees">Binary trees</option>
            <option value="Graph">Graph</option>
          </select>
        </div>
        
      </div>
      <Link
        href={`/quiz?difficulty=${formData.difficulty}&topic=${formData.topic}`}
        className="mx-auto rounded-md border border-gray-700 bg-black bg-opacity-80 px-8 py-3 text-xl text-white transition-all hover:border hover:border-green-500 active:scale-95"
      >
        Start quiz!
      </Link>
    </div>
  );
};

export default SettingsForm;
