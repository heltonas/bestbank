import React from 'react';

const links = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
];

export default function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-slate-600 hover:text-emerald-600 transition-colors"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}