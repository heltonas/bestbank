import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
      <div className="flex flex-col items-center text-center">
        <div className="bg-emerald-50 p-4 rounded-full mb-6">
          <Icon className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-slate-800">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}