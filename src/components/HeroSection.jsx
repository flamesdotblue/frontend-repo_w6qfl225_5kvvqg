import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <Rocket className="h-4 w-4 text-violet-300" />
          <span className="text-xs uppercase tracking-wider text-violet-200">AI-powered recruitment</span>
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1]">
          OpportuNext
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-sky-300 to-amber-200">
            Match talent. Grow careers. Hire smarter.
          </span>
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Role-based portals for job seekers and employers. Resume understanding, AI job matching, career roadmaps, assessments, and analytics — all in one platform.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#auth" className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-sky-500 text-white font-medium shadow-lg shadow-violet-500/30 hover:opacity-95 transition">
            Get started
          </a>
          <a href="#features" className="px-6 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 transition">
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
