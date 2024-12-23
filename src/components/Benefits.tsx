import React from 'react';
import { Zap, Shield, ArrowRight } from 'lucide-react';
import BenefitCard from './BenefitCard';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Convert statements in seconds, not hours. Save valuable time for what matters.'
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Your data is encrypted and secure. We never store your statements.'
  },
  {
    icon: ArrowRight,
    title: '100% Accurate',
    description: 'Perfect conversion accuracy with smart data recognition technology.'
  }
];

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}