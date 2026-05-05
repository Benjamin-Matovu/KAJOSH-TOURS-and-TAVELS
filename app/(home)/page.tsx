'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SearchBar } from '../../components/search/SearchBar';
import { MOCK_DESTINATIONS, MOCK_AIRPORTS } from '../../lib/mockData';
import { useSearchStore } from '../../store/searchStore';
import { Plane, DollarSign, ShieldCheck, Clock, ArrowRight, Globe } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function HomePage() {
  const { setDestination } = useSearchStore();
  const [email, setEmail] = useState('');

  const handleDestinationClick = (iataCode: string) => {
    const airport = MOCK_AIRPORTS.find(a => a.iataCode === iataCode);
    if (airport) {
      setDestination(airport);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Toaster position="bottom-right" />
      
      {/* 1. HERO SECTION (Skyscanner Style) */}
      <section className="relative w-full bg-[#05203c] pt-24 pb-32">
        <div className="max-w-7xl mx-auto">
          <SearchBar />
        </div>
      </section>

      {/* 2. CATEGORY QUICK LINKS */}
      <section className="max-w-7xl mx-auto w-full px-4 -mt-12 relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/hotels" className="bg-[#05203c] hover:bg-[#072d54] text-white p-6 rounded-xl flex items-center gap-4 transition-all shadow-xl group border border-white/5">
            <div className="p-3 bg-white/10 rounded-lg group-hover:bg-primary transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <span className="font-bold text-lg">Hotels</span>
          </Link>

          <Link href="/car-hire" className="bg-[#05203c] hover:bg-[#072d54] text-white p-6 rounded-xl flex items-center gap-4 transition-all shadow-xl group border border-white/5">
            <div className="p-3 bg-white/10 rounded-lg group-hover:bg-primary transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <span className="font-bold text-lg">Car Hire</span>
          </Link>

          <Link href="/explore" className="bg-[#05203c] hover:bg-[#072d54] text-white p-6 rounded-xl flex items-center gap-4 transition-all shadow-xl group border border-white/5">
            <div className="p-3 bg-white/10 rounded-lg group-hover:bg-primary transition-colors">
              <Globe className="w-6 h-6" />
            </div>
            <span className="font-bold text-lg">Explore Everywhere</span>
          </Link>
        </div>
      </section>

      {/* 3. BIG EXPLORE IMAGE SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="relative h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          
          <div className="absolute inset-y-0 left-0 p-12 flex flex-col justify-center max-w-xl">
            <h2 className="text-white text-lg font-bold mb-4 uppercase tracking-[0.2em]">Can't decide where to go?</h2>
            <h3 className="text-white text-5xl md:text-7xl font-black mb-8 leading-tight">Explore the<br/>world</h3>
            <Link href="/explore" className="inline-flex items-center bg-white text-[#05203c] px-10 py-4 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all w-fit shadow-xl">
              Explore now
            </Link>
          </div>
        </div>
      </section>

      {/* 4. POPULAR DESTINATIONS */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full border-t border-slate-100">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black text-[#05203c] tracking-tight">Popular Destinations</h2>
          <Link href="/explore" className="text-primary font-bold hover:underline">View All Destinations</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_DESTINATIONS.slice(0, 4).map((dest, idx) => (
            <div 
              key={idx}
              onClick={() => handleDestinationClick(dest.iataCode)}
              className="rounded-[2rem] relative overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="h-[300px] overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${dest.image})` }}
                />
              </div>
              <div className="p-6 bg-white border-t border-slate-50">
                <h3 className="text-2xl font-black text-[#05203c] mb-1">{dest.city}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">{dest.country}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">From</span>
                  <span className="text-xl font-black text-primary">${dest.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
