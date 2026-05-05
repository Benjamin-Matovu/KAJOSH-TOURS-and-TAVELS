'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plane, Mail, Lock, ArrowRight, Loader2, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { supabase } from '../../lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSocialLogin = async (provider: 'google' | 'apple' | 'facebook') => {
    if (!supabase) {
      toast.error('Authentication is not configured');
      return;
    }
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || `Failed to sign in with ${provider}`);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!supabase) {
      toast.error('Authentication is not configured');
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      toast.success('Welcome back to Kajosh Tours!');
      router.push('/');
    } catch (error: any) {
      toast.error(error.message || 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 pt-24 pb-12 overflow-hidden">
      <Toaster position="top-center" />
      
      {/* Immersive Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000")' }}
      />
      <div className="absolute inset-0 bg-[#05203c]/40 backdrop-blur-[4px]" />

      {/* Centralized Card */}
      <div className="w-full max-w-[460px] relative z-10 animate-in fade-in zoom-in-95 duration-500 max-h-[95vh] overflow-y-auto no-scrollbar">
        <div className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-black/20 overflow-hidden border border-white/20 dark:border-slate-800">
          <div className="p-8 md:p-10">
            {/* Branding */}
            <div className="text-center mb-6">
              <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
                <div className="p-1.5 bg-[#05203c] rounded-lg text-white shadow-lg">
                  <Plane className="w-5 h-5" />
                </div>
                <span className="font-black text-xl text-[#05203c] dark:text-white tracking-tighter transition-colors">KAJOSH TOURS</span>
              </Link>
              <h1 className="text-2xl font-black text-[#05203c] dark:text-white tracking-tight mb-1 transition-colors">Welcome Back</h1>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-xs transition-colors">Sign in to continue your journey.</p>
            </div>

            {/* Social Logins with REAL Icons */}
            <div className="space-y-2.5 mb-6">
              <button 
                onClick={() => handleSocialLogin('google')}
                className="w-full flex items-center justify-center gap-3 py-3 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm active:scale-[0.98] group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.26 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.09H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.91l3.66-2.8z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.09l3.66 2.84c.87-2.6 3.3-4.55 6.16-4.55z" fill="#EA4335"/>
                </svg>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Continue with Google</span>
              </button>
              
              <div className="grid grid-cols-2 gap-2.5">
                <button 
                  onClick={() => handleSocialLogin('apple')}
                  className="flex items-center justify-center gap-2 py-3 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm active:scale-[0.98]"
                >
                  <svg className="w-5 h-5 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.84-3.12 1.87-2.39 5.98.66 7.42-.64 1.59-1.46 3.14-2.71 3.75zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Apple</span>
                </button>
                <button 
                  onClick={() => handleSocialLogin('facebook')}
                  className="flex items-center justify-center gap-2 py-3 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm active:scale-[0.98]"
                >
                  <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Facebook</span>
                </button>
              </div>
            </div>

            <div className="relative mb-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
              </div>
              <span className="relative px-3 bg-white dark:bg-slate-900 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 transition-colors">Or email</span>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-3.5">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-50 dark:border-slate-800 rounded-xl focus:bg-white dark:focus:bg-slate-800 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-slate-800 dark:text-white placeholder:text-slate-400 text-sm"
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-50 dark:border-slate-800 rounded-xl focus:bg-white dark:focus:bg-slate-800 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-slate-800 dark:text-white placeholder:text-slate-400 text-sm"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-[10px] font-black text-slate-400 dark:text-slate-500 hover:text-primary transition-colors uppercase tracking-widest">
                  Forgot password?
                </Link>
              </div>

              <button
                disabled={isLoading}
                className="w-full bg-[#05203c] dark:bg-primary text-white py-3.5 rounded-xl font-black text-base hover:opacity-90 transition-all shadow-lg shadow-blue-900/10 flex items-center justify-center group active:scale-[0.98] disabled:opacity-70 mt-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                New here?{' '}
                <Link href="/signup" className="text-primary font-black hover:underline">
                  Create account
                </Link>
              </p>
            </div>
          </div>

          {/* Security Footer */}
          <div className="bg-slate-50/50 dark:bg-slate-900/50 p-4 flex items-center justify-center gap-2 border-t border-slate-100 dark:border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Encrypted by Kajosh Global
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
