'use client';

import React, { useEffect, useState } from 'react';
import { HotelSearchBar } from '../../components/search/HotelSearchBar';
import { supabase } from '../../lib/supabase';
import { Star, MapPin, ShieldCheck, Heart, Coffee, Wifi, Waves } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Hotel {
  id: string;
  name: string;
  city: string;
  price: number;
  rating: number;
  image_url: string;
}

export default function HotelsPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHotels() {
      if (!supabase) {
        setHotels([
          { id: '1', name: 'Grand Royal Oasis', city: 'Dubai, UAE', price: 299, rating: 4.9, image_url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000' },
          { id: '2', name: 'Azure Bay Resort', city: 'Maldives', price: 450, rating: 4.8, image_url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000' },
          { id: '3', name: 'The Skyline Suites', city: 'New York, USA', price: 320, rating: 4.7, image_url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000' },
        ]);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('hotels')
          .select('*')
          .limit(6);
        
        if (error) throw error;
        if (data) setHotels(data);
      } catch (err) {
        console.error('Error fetching hotels:', err);
        setHotels([
          { id: '1', name: 'Grand Royal Oasis', city: 'Dubai, UAE', price: 299, rating: 4.9, image_url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000' },
          { id: '2', name: 'Azure Bay Resort', city: 'Maldives', price: 450, rating: 4.8, image_url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000' },
          { id: '3', name: 'The Skyline Suites', city: 'New York, USA', price: 320, rating: 4.7, image_url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000' },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchHotels();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[580px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="absolute inset-0 bg-[#05203c]/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 w-full text-center px-4 pt-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Find the perfect<br/><span className="text-primary">stay</span> for your trip
          </h1>
          <p className="text-white/80 text-xl font-medium mb-12 max-w-2xl mx-auto">
            From boutique escapes to luxury resorts, discover hotels that make every journey unforgettable.
          </p>
          <HotelSearchBar />
        </div>
      </section>

      {/* 2. CATEGORY QUICK LINKS (Optional, but looks good) */}
      <section className="max-w-7xl mx-auto w-full px-4 py-12">
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {['Luxury', 'Boutique', 'All-Inclusive', 'Family-Friendly', 'Beachfront', 'Pet-Friendly'].map((cat) => (
            <button key={cat} className="px-8 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-[#05203c] whitespace-nowrap hover:border-primary hover:text-primary transition-all shadow-sm">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. FEATURED HOTELS */}
      <section className="max-w-7xl mx-auto w-full px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-[#05203c] tracking-tight mb-2">Featured Stays</h2>
            <p className="text-slate-500 font-medium italic">Hand-picked properties with exceptional service.</p>
          </div>
          <Link href="/hotels/search" className="text-primary font-bold hover:underline">View all hotels</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={hotel.image_url} 
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <button className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-white hover:text-red-500 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 flex gap-2">
                  <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-black text-[#05203c]">{hotel.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">{hotel.city}</span>
                </div>
                <h3 className="text-2xl font-black text-[#05203c] mb-6 group-hover:text-primary transition-colors">{hotel.name}</h3>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-2 bg-slate-50 rounded-lg text-slate-400"><Wifi className="w-4 h-4" /></div>
                  <div className="p-2 bg-slate-50 rounded-lg text-slate-400"><Coffee className="w-4 h-4" /></div>
                  <div className="p-2 bg-slate-50 rounded-lg text-slate-400"><Waves className="w-4 h-4" /></div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Price from</span>
                    <span className="text-3xl font-black text-primary">${hotel.price}<span className="text-sm text-slate-400 font-bold">/night</span></span>
                  </div>
                  <button className="bg-[#05203c] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg active:scale-95">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TRUST SECTION */}
      <section className="bg-[#05203c] py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="p-5 bg-white/10 rounded-[2rem] mb-6">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-white text-xl font-black mb-3">Secure Booking</h3>
            <p className="text-white/60">Your data is always encrypted and protected.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-5 bg-white/10 rounded-[2rem] mb-6">
              <Star className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-white text-xl font-black mb-3">Best Rate Guarantee</h3>
            <p className="text-white/60">Found a lower price? We'll match it instantly.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-5 bg-white/10 rounded-[2rem] mb-6">
              <Coffee className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-white text-xl font-black mb-3">24/7 Support</h3>
            <p className="text-white/60">Our experts are here to help anytime, anywhere.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
