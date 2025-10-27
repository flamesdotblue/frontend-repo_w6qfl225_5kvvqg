import React from 'react';
import { Check } from 'lucide-react';

function PlanCard({ title, price, period, features, cta1, cta2, highlight }) {
  return (
    <div className={`rounded-2xl border p-6 bg-white ${highlight ? 'border-violet-300 shadow-violet-200 shadow-xl' : 'border-gray-200'}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-3 flex items-end gap-1">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-500">/{period}</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 grid grid-cols-2 gap-2">
        <button className="px-4 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-black">{cta1}</button>
        <button className="px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100">{cta2}</button>
      </div>
    </div>
  );
}

export default function PricingPlans() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Simple subscriptions for growth</h2>
          <p className="mt-3 text-gray-600">Choose a plan that fits your journey. Pay via Stripe or Razorpay.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PlanCard
            title="Freemium (Seeker)"
            price="₹0"
            period="mo"
            features={[
              'AI job recommendations (limited)',
              'Basic resume insights',
              'Community access',
            ]}
            cta1="Subscribe (Stripe)"
            cta2="Subscribe (Razorpay)"
          />
          <PlanCard
            title="Premium (Seeker)"
            price="₹499–₹2,999"
            period="mo"
            features={[
              'Unlimited AI matches and roadmaps',
              'Detailed assessments and coaching',
              'Priority employer visibility',
            ]}
            cta1="Subscribe (Stripe)"
            cta2="Subscribe (Razorpay)"
            highlight
          />
          <PlanCard
            title="Employer Plans"
            price="₹30K–₹2.5L"
            period="mo"
            features={[
              'Unlimited job postings',
              'AI screening and scorecards',
              'Analytics and ATS integrations',
            ]}
            cta1="Start now (Stripe)"
            cta2="Start now (Razorpay)"
          />
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">Prices are indicative. Taxes may apply. Manage billing in your account settings.</p>
      </div>
    </section>
  );
}
