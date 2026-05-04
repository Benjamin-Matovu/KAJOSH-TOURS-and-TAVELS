import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-borderC-light dark:border-borderC-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-textPrimary-light dark:text-textPrimary-dark tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-base text-textSecondary hover:text-primary">About</Link></li>
              <li><Link href="/help" className="text-base text-textSecondary hover:text-primary">Help</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-textPrimary-light dark:text-textPrimary-dark tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-base text-textSecondary hover:text-primary">Privacy</Link></li>
              <li><Link href="/terms" className="text-base text-textSecondary hover:text-primary">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-textPrimary-light dark:text-textPrimary-dark tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-base text-textSecondary hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-borderC-light dark:border-borderC-dark pt-8 flex items-center justify-between">
          <p className="text-base text-textSecondary xl:text-center">
            &copy; {new Date().getFullYear()} Kajosh Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
