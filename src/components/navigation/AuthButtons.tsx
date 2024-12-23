import React from 'react';

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <button className="text-slate-600 hover:text-emerald-600 transition-colors">
        Log in
      </button>
      <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
        Sign up
      </button>
    </div>
  );
}