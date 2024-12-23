import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-slate-600 mb-4">{quote}</p>
      <div className="flex items-center">
        <img
          src={author.image}
          alt={author.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <p className="font-semibold">{author.name}</p>
          <p className="text-sm text-slate-500">{author.role}</p>
        </div>
      </div>
    </div>
  );
}