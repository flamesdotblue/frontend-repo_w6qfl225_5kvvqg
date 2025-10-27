import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import FeaturesGrid from './components/FeaturesGrid.jsx';
import AuthPanels from './components/AuthPanels.jsx';
import PricingPlans from './components/PricingPlans.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight">OpportuNext</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#auth" className="text-gray-600 hover:text-gray-900">Login</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-black">Get started</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <FeaturesGrid />
        <AuthPanels />
        <PricingPlans />
      </main>

      <footer className="py-10 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} OpportuNext. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
