'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Download, 
  Home, 
  Calendar, 
  MapPin, 
  User, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  Ticket,
  ExternalLink,
  Printer
} from 'lucide-react';

export default function ConfirmationPage() {
  const [pnr, setPnr] = useState('');

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(chars.length * Math.random()));
    }
    setPnr(result);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-50 dark:bg-green-900/10 text-green-500 mb-6 shadow-xl shadow-green-500/10 ring-8 ring-green-500/5">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md mx-auto">
            Your flight has been successfully booked. A confirmation email has been sent to your inbox.
          </p>
        </div>

        <div className="space-y-6">
          {/* Booking ID Card */}
          <div className="bg-primary text-white rounded-3xl p-8 shadow-2xl shadow-primary/20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
            <div className="z-10 text-center md:text-left mb-6 md:mb-0">
              <span className="text-primary-foreground/60 text-sm font-bold uppercase tracking-widest">Booking Reference (PNR)</span>
              <h2 className="text-5xl font-black tracking-tighter mt-1">{pnr}</h2>
            </div>
            <div className="z-10 flex flex-col items-center md:items-end">
              <div className="flex -space-x-2 mb-3">
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-white/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-primary-foreground/80 font-medium">1 Passenger • Economy</p>
            </div>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center text-primary mb-4 font-bold">
                <Ticket className="w-5 h-5 mr-2" />
                Flight Details
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center mr-3 mt-1">
                    <Calendar className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Date & Time</p>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Mon, 15 Jun 2026 • 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center mr-3 mt-1">
                    <MapPin className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Route</p>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Entebbe (EBB) → London (LHR)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center text-primary mb-4 font-bold">
                <ShieldCheck className="w-5 h-5 mr-2" />
                Booking Info
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center mr-3 mt-1">
                    <User className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Primary Traveler</p>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">John Doe</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center mr-3 mt-1">
                    <Mail className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Contact Email</p>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">john.doe@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">What happens next?</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mt-0.5 mr-4 font-bold text-xs">1</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-900 dark:text-white block mb-1">Check your email</strong>
                  We've sent your e-ticket and receipt to your registered email address.
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mt-0.5 mr-4 font-bold text-xs">2</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-900 dark:text-white block mb-1">Online Check-in</strong>
                  Online check-in opens 48 hours before departure. You'll receive a reminder.
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mt-0.5 mr-4 font-bold text-xs">3</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <strong className="text-slate-900 dark:text-white block mb-1">Travel Documents</strong>
                  Ensure your passport is valid for at least 6 months and check visa requirements.
                </div>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link 
              href="/"
              className="flex-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 px-6 py-4 rounded-2xl font-bold flex items-center justify-center border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <button className="flex-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 px-6 py-4 rounded-2xl font-bold flex items-center justify-center border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
              <Download className="w-5 h-5 mr-2" />
              Download Receipt
            </button>
            <button className="flex-1 bg-primary text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-primary-hover transition-all shadow-xl shadow-primary/20">
              Manage Booking
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Footer Assistance */}
          <div className="text-center py-8 border-t border-slate-100 dark:border-slate-800 mt-12 flex flex-col items-center">
            <p className="text-slate-400 text-sm mb-4">Need to make changes to your booking?</p>
            <div className="flex items-center space-x-6">
              <button className="text-primary text-sm font-bold flex items-center hover:underline">
                <Printer className="w-4 h-4 mr-1.5" />
                Print Ticket
              </button>
              <button className="text-primary text-sm font-bold flex items-center hover:underline">
                <ExternalLink className="w-4 h-4 mr-1.5" />
                Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
