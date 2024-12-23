import React from 'react';
import { FileSpreadsheet } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <FileSpreadsheet className="h-8 w-8 text-emerald-600" />
        <div className="absolute -bottom-1 -right-1 bg-slate-600 text-[8px] text-white px-1 rounded-sm font-mono">
          PDF
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl leading-tight">BestBank</span>
        <span className="text-sm text-slate-600 leading-tight">Statement Converter</span>
      </div>
    </div>
  );
}