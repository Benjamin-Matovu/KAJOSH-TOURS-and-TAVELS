'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, Mail, HelpCircle, ChevronRight, Search, Clock, Shield } from 'lucide-react';

export default function HelpPage() {
  const supportOptions = [
    {
      title: 'WhatsApp Support',
      description: 'Instant support for urgent bookings and queries.',
      icon: <MessageCircle className="w-6 h-6 text-emerald-500" />,
      action: 'Chat Now',
      href: 'https://wa.me/256700000000', // Example number
      color: 'bg-emerald-50 dark:bg-emerald-500/10',
    },
    {
      title: 'Email Support',
      description: 'Detailed inquiries and documentation assistance.',
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      action: 'Send Email',
      href: 'mailto:support@kajoshtours.com',
      color: 'bg-blue-50 dark:bg-blue-500/10',
    },
    {
      title: 'Phone Support',
      description: 'Available Mon-Fri, 9am - 6pm (GMT+3).',
      icon: <Phone className="w-6 h-6 text-purple-500" />,
      action: 'Call Us',
      href: 'tel:+256700000000',
      color: 'bg-purple-50 dark:bg-purple-500/10',
    },
  ];

  const faqs = [
    { q: 'How do I change my booking?', a: 'You can manage your bookings through the "My Account" section or by contacting our support team via WhatsApp.' },
    { q: 'What is your refund policy?', a: 'Refund policies vary by airline and hotel. Most standard bookings are refundable up to 24 hours before departure.' },
    { q: 'Is my data secure?', a: 'Yes, all transactions are encrypted using Kajosh Global security protocols.' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <HelpCircle className="w-4 h-4" /> Support Center
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[#05203c] dark:text-white tracking-tight mb-6">
            How can we <span className="text-primary">help?</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Find answers to common questions or reach out to our dedicated support team 24/7.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-20 relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search for articles, bookings, or topics..."
            className="w-full pl-16 pr-8 py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold text-slate-800 dark:text-white"
          />
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {supportOptions.map((opt, idx) => (
            <a 
              key={idx}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className={`${opt.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                {opt.icon}
              </div>
              <h3 className="text-xl font-black text-[#05203c] dark:text-white mb-3">{opt.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-6">
                {opt.description}
              </p>
              <div className="flex items-center text-primary font-black text-xs uppercase tracking-widest gap-1 group-hover:gap-2 transition-all">
                {opt.action} <ChevronRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-black text-[#05203c] dark:text-white tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center gap-4">
                  <h4 className="font-bold text-[#05203c] dark:text-white text-lg">{faq.q}</h4>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-3 hidden group-hover:block animate-in fade-in duration-300">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Trust */}
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 text-emerald-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4">
            <Shield className="w-4 h-4" /> Trusted Secure Support
          </div>
          <p className="text-slate-400 text-xs font-medium max-w-md">
            Your privacy is our priority. All support conversations are encrypted and handled by Kajosh Global verified agents.
          </p>
        </div>
      </div>
    </div>
  );
}
