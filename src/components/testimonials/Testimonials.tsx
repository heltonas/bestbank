import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "This tool has completely transformed how we handle our monthly reconciliation. What used to take hours now takes minutes.",
    author: {
      name: "Sarah J.",
      role: "Financial Controller",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
    }
  },
  {
    quote: "The accuracy is impressive. We've processed hundreds of statements without a single error.",
    author: {
      name: "Mark T.",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
    }
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}