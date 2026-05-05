'use client';

import React, { useEffect, useState } from 'react';
import { CarHireSearchBar } from '../../components/search/CarHireSearchBar';
import { supabase } from '../../lib/supabase';
import { ShieldCheck, Star, Users, Briefcase, Gauge, Fuel, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface CarCategory {
  id: string;
  name: string;
  type: string;
  price_per_day: number;
  image_url: string;
  capacity: number;
  luggage: number;
}

export default function CarHirePage() {
  const [categories, setCategories] = useState<CarCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      if (!supabase) {
        setCategories([
          { id: '1', name: 'Volkswagen Golf', type: 'Economy', price_per_day: 45, capacity: 5, luggage: 2, image_url: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000' },
          { id: '2', name: 'Toyota RAV4', type: 'SUV', price_per_day: 75, capacity: 5, luggage: 4, image_url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000' },
          { id: '3', name: 'Mercedes-Benz E-Class', type: 'Luxury', price_per_day: 120, capacity: 5, luggage: 3, image_url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000' },
          { id: '4', name: 'Ford Transit', type: 'Van', price_per_day: 95, capacity: 9, luggage: 6, image_url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000' },
        ]);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('car_categories')
          .select('*')
          .limit(4);
        
        if (error) throw error;
        if (data) setCategories(data);
      } catch (err) {
        console.error('Error fetching cars:', err);
        // Fallback to mock data
        setCategories([
          { id: '1', name: 'Volkswagen Golf', type: 'Economy', price_per_day: 45, capacity: 5, luggage: 2, image_url: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000' },
          { id: '2', name: 'Toyota RAV4', type: 'SUV', price_per_day: 75, capacity: 5, luggage: 4, image_url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000' },
          { id: '3', name: 'Mercedes-Benz E-Class', type: 'Luxury', price_per_day: 120, capacity: 5, luggage: 3, image_url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000' },
          { id: '4', name: 'Ford Transit', type: 'Van', price_per_day: 95, capacity: 9, luggage: 6, image_url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000' },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="absolute inset-0 bg-[#05203c]/70 backdrop-blur-[1px]" />
        
        <div className="relative z-10 w-full text-center px-4 pt-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Rent a car for<br/><span className="text-primary">any journey</span>
          </h1>
          <p className="text-white/80 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Compare deals from top car hire companies and find the perfect ride at the best price.
          </p>
          <CarHireSearchBar />
          
          <div className="mt-8 flex items-center justify-center gap-8 text-white/60 text-sm font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Free cancellation
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> No hidden fees
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> 24/7 support
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOP CATEGORIES */}
      <section className="max-w-7xl mx-auto w-full px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#05203c] tracking-tight mb-4">Top Car Categories</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">From compact city cars to spacious SUVs, we have the right vehicle for every need.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="group bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col">
              <div className="mb-6 h-40 flex items-center justify-center">
                <img src={cat.image_url} alt={cat.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 block">{cat.type}</span>
                <h3 className="text-xl font-black text-[#05203c] mb-4">{cat.name}</h3>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                    <Users className="w-4 h-4" /> {cat.capacity}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                    <Briefcase className="w-4 h-4" /> {cat.luggage}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                    <Gauge className="w-4 h-4" /> Auto
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                    <Fuel className="w-4 h-4" /> Hybrid
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">From</span>
                  <span className="text-2xl font-black text-primary">${cat.price_per_day}<span className="text-xs text-slate-400 font-bold">/day</span></span>
                </div>
                <button className="p-3 bg-slate-50 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY RENT WITH US */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000" alt="Car Rental" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#05203c] p-10 rounded-[3rem] shadow-2xl hidden lg:block">
              <div className="text-white text-4xl font-black mb-2">500+</div>
              <div className="text-white/60 font-bold uppercase tracking-widest text-xs">Rental Partners</div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-[#05203c] tracking-tight leading-tight">The easiest way to rent a car</h2>
            <p className="text-slate-500 text-lg font-medium">We search and compare over 500 car hire companies to find you the absolute best deals, with no hidden costs and 24/7 customer support.</p>
            
            <div className="space-y-6">
              {[
                { title: 'Free Cancellation', desc: 'Up to 48 hours before pick-up on most bookings.' },
                { title: 'Clean and Safe', desc: 'All our partners follow strict safety and hygiene protocols.' },
                { title: 'Price Match Guarantee', desc: "Find a lower price and we'll match it." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#05203c] mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
