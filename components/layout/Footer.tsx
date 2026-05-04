import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-black text-xl mb-6">KAJOSH TOURS</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Redefining global travel with premium flight experiences and unparalleled support. Your journey starts here.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-black text-white tracking-widest uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link href="/help" className="hover:text-primary transition-colors font-medium">Help Center</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors font-medium">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black text-white tracking-widest uppercase mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="hover:text-primary transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors font-medium">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors font-medium">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black text-white tracking-widest uppercase mb-6">Contact</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-2">
                <span>+256 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <span>support@kajosh.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Kajosh Tours. Built for the modern traveler.
          </p>
        </div>
      </div>
    </footer>
  );
}
