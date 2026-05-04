'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SearchBar } from '../../components/search/SearchBar';
import { MOCK_DESTINATIONS, MOCK_AIRPORTS } from '../../lib/mockData';
import { useSearchStore } from '../../store/searchStore';
import { Plane, DollarSign, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
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
    <div className="flex flex-col min-h-screen">
      <Toaster position="bottom-right" />
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000&h=1200")' }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        <div className="relative z-20 w-full px-4 pt-20">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              Find Your Next Adventure
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Search hundreds of airlines to find the cheapest tickets
            </p>
          </div>
          
          <SearchBar />
        </div>
      </section>

      {/* 2. POPULAR DESTINATIONS SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-textPrimary-light dark:text-textPrimary-dark">
          Popular Destinations
        </h2>
        
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar gap-6">
          {MOCK_DESTINATIONS.map((dest, idx) => (
            <div 
              key={idx}
              onClick={() => handleDestinationClick(dest.iataCode)}
              className="min-w-[280px] h-[360px] rounded-2xl relative overflow-hidden group cursor-pointer snap-start shadow-lg flex-shrink-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${dest.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{dest.city}</h3>
                    <p className="text-gray-300 text-sm">{dest.country}</p>
                  </div>
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    from ${dest.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPLORE BANNER SECTION */}
      <section className="w-full bg-gradient-to-r from-primary to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure where to go?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us inspire you
          </p>
          <Link href="/explore" className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Explore Everywhere
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 4. WHY US SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: DollarSign, title: 'Best Prices', desc: 'We search hundreds of sites to find you the best deal.' },
            { icon: ShieldCheck, title: 'No Hidden Fees', desc: 'The price you see is the price you pay. Always.' },
            { icon: Plane, title: 'Flexible Booking', desc: 'Find flights with free cancellation and flexible dates.' },
            { icon: Clock, title: '24/7 Support', desc: 'Our travel experts are always here to help you.' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-textPrimary-light dark:text-textPrimary-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-textSecondary-light dark:text-textSecondary-dark">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NEWSLETTER SECTION */}
      <section className="bg-gray-50 dark:bg-black/20 py-20 px-4 w-full border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-textPrimary-light dark:text-textPrimary-dark mb-4">
            Get the best flight deals in your inbox
          </h2>
          <p className="text-textSecondary-light dark:text-textSecondary-dark mb-8">
            Subscribe to our newsletter for exclusive offers and travel inspiration.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              required
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark focus:ring-2 focus:ring-primary outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
