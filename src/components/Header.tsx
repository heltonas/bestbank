import React from 'react';
import { FileSpreadsheet, Clock } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

export default function Header() {
  return (
    <header className="container mx-auto px-4 pt-24 pb-24 text-center">
      <div className="flex justify-center mb-6">
        <FileSpreadsheet className="h-16 w-16 text-emerald-600" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
        Convert Bank Statements into <span className="text-emerald-600">Excel</span>
        <br className="hidden md:block" /> in Seconds
      </h1>
      <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
        Stop wasting hours manually converting PDF bank statements. Our tool does it instantly, accurately, and securely.
      </p>
      
      <WaitlistForm />
      
      <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
        <Clock className="h-4 w-4" />
        Coming Soon - Get Early Access
      </p>
    </header>
  );
}