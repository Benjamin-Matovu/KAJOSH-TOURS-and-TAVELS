'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { flights } from '@/lib/mock/flights';
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Calendar, 
  CreditCard, 
  PlaneTakeoff, 
  PlaneLanding, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';
import { format } from 'date-fns';

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const flightId = params.flightId as string;
  
  const flight = flights.find(f => f.id === flightId) || flights[0];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    passportNumber: '',
    nationality: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would save this to state/DB and move to payment
    // Redirecting to confirmation directly for now as per user flow request
    router.push(`/book/confirmation`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Progress Stepper */}
        <div className="mb-12 flex items-center justify-center space-x-4 text-sm font-medium">
          <div className="flex items-center text-primary">
            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2 shadow-lg shadow-primary/30">1</span>
            <span>Passenger Details</span>
          </div>
          <div className="h-px w-12 bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex items-center text-slate-400">
            <span className="w-8 h-8 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center mr-2">2</span>
            <span>Payment</span>
          </div>
          <div className="h-px w-12 bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex items-center text-slate-400">
            <span className="w-8 h-8 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center mr-2">3</span>
            <span>Confirmation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
                {/* Primary Passenger Section */}
              <section className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="flex items-center space-x-4 mb-10 pb-6 border-b border-slate-50 dark:border-slate-800">
                  <div className="p-3 bg-slate-800 text-white rounded-2xl shadow-lg shadow-slate-800/20">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Primary Passenger</h2>
                    <p className="text-sm font-medium text-slate-400">Enter details exactly as they appear on your passport.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="e.g. John"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-bold"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="e.g. Doe"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-bold"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      Date of Birth
                    </label>
                    <input
                      required
                      type="date"
                      name="dob"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-bold"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center">
                      <CreditCard className="w-3.5 h-3.5 mr-1.5" />
                      Passport Number
                    </label>
                    <input
                      required
                      type="text"
                      name="passportNumber"
                      placeholder="e.g. A1234567"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-bold uppercase"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center">
                      <Globe className="w-3.5 h-3.5 mr-1.5" />
                      Nationality
                    </label>
                    <select
                      required
                      name="nationality"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-bold"
                      onChange={handleInputChange}
                    >
                      <option value="">Select Nationality</option>
                      <option value="UG">Uganda</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AE">United Arab Emirates</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Contact Info Section */}
              <section className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="flex items-center space-x-4 mb-10 pb-6 border-b border-slate-50 dark:border-slate-800">
                  <div className="p-3 bg-slate-800 text-white rounded-2xl shadow-lg shadow-slate-800/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Contact Information</h2>
                    <p className="text-sm font-medium text-slate-400">Confirmation details will be sent here.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full pl-16 pr-6 py-4 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-bold"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+256 700 000 000"
                        className="w-full pl-16 pr-6 py-4 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-bold"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Special Requests Section */}
              <section className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-slate-800 text-white rounded-2xl shadow-lg shadow-slate-800/20">
                    <Info className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Special Requests</h2>
                </div>
                <textarea
                  name="specialRequests"
                  rows={4}
                  placeholder="Need assistance, wheelchair access, or specific meal requirements?"
                  className="w-full px-8 py-6 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none resize-none font-bold"
                  onChange={handleInputChange}
                ></textarea>
              </section>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                
                <div className="flex items-center text-sm font-bold text-slate-400 mb-6 sm:mb-0 relative z-10">
                  <ShieldCheck className="w-6 h-6 mr-3 text-primary" />
                  Encrypted secure checkout for your safety.
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-primary/30 flex items-center justify-center group relative z-10 active:scale-95"
                >
                  Continue to Payment
                  <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar: Flight Summary */}
          <aside className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 sticky top-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-50 dark:border-slate-800 pb-4">
                Flight Summary
              </h3>
              
              {/* Route Info */}
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-primary">{flight.origin}</span>
                    <span className="text-xs text-slate-400 font-medium">Departure</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-1">
                      {format(new Date(flight.segments[0].departureTime), 'HH:mm')}
                    </span>
                  </div>
                  <div className="flex flex-col items-center flex-1 px-4 mt-2">
                    <PlaneTakeoff className="w-4 h-4 text-slate-300 mb-1" />
                    <div className="w-full h-px border-t border-dashed border-slate-200 dark:border-slate-800 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-full border border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 font-bold whitespace-nowrap">
                        {Math.floor(flight.totalDurationMinutes / 60)}h {flight.totalDurationMinutes % 60}m
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-primary">{flight.destination}</span>
                    <span className="text-xs text-slate-400 font-medium text-right">Arrival</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-1">
                      {format(new Date(flight.segments[flight.segments.length - 1].arrivalTime), 'HH:mm')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-bold py-3 px-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {format(new Date(flight.departureDate), 'EEE, dd MMM yyyy')}
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    {flight.stops === 0 ? 'Non-stop' : `${flight.stops} Stop${flight.stops > 1 ? 's' : ''}`}
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 pt-6 border-t border-slate-50 dark:border-slate-800">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Base Fare (1 Adult)</span>
                  <span className="text-slate-900 dark:text-white font-medium">${flight.price.breakdown.baseFare}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Taxes & Fees</span>
                  <span className="text-slate-900 dark:text-white font-medium">${flight.price.breakdown.taxes + flight.price.breakdown.fees}</span>
                </div>
                <div className="flex justify-between items-center pt-4 mt-4 border-t-2 border-primary/10">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">Total Amount</span>
                  <span className="text-2xl font-black text-primary">${flight.price.amount}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center text-xs text-green-600 font-bold bg-green-50 dark:bg-green-900/10 p-3 rounded-xl border border-green-100 dark:border-green-900/20">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Best Price Guaranteed
                </div>
                <div className="flex items-center text-xs text-blue-600 font-bold bg-blue-50 dark:bg-blue-900/10 p-3 rounded-xl border border-blue-100 dark:border-blue-900/20">
                  <PlaneLanding className="w-4 h-4 mr-2" />
                  {flight.cabinClass.charAt(0).toUpperCase() + flight.cabinClass.slice(1)} Cabin
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl">
              <h4 className="font-bold mb-2">Need Assistance?</h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">Our travel experts are available 24/7 to help you with your booking.</p>
              <div className="flex items-center text-primary font-bold text-sm">
                <Phone className="w-4 h-4 mr-2" />
                +256 700 000 000
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
