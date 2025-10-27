import React, { useState } from 'react';
import { User, Briefcase } from 'lucide-react';

export default function AuthPanels() {
  const [role, setRole] = useState('seeker');

  function onSubmit(e) {
    e.preventDefault();
    // In a full app this would call backend auth endpoints.
    alert(`Pretend login for ${role}. Backend wiring comes next.`);
  }

  return (
    <section id="auth" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold">Sign in or create an account</h2>
            <p className="mt-3 text-gray-600">Choose your portal to get personalized tools and dashboards.</p>

            <div className="mt-6 inline-flex rounded-lg bg-white p-1 border border-gray-200">
              <button
                onClick={() => setRole('seeker')}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                  role === 'seeker' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <User className="h-4 w-4" /> Job seeker
              </button>
              <button
                onClick={() => setRole('employer')}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                  role === 'employer' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Briefcase className="h-4 w-4" /> Employer
              </button>
            </div>

            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-gray-200">
              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500" placeholder="you@example.com" />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500" placeholder="••••••••" />
              </div>
              {role === 'seeker' ? (
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Upload resume (PDF)</label>
                  <input type="file" accept="application/pdf" className="mt-1 w-full rounded-lg border-gray-300" />
                </div>
              ) : (
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Company name</label>
                  <input type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500" placeholder="Acme Corp" />
                </div>
              )}
              <div className="col-span-1 sm:col-span-2 flex gap-3">
                <button type="submit" className="px-5 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-black">Continue</button>
                <button type="button" className="px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100">Sign in with Google</button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-[38%] space-y-4">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <h3 className="font-semibold">For job seekers</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>AI job matches with skill-gap highlights</li>
                <li>Personalized career roadmap with courses</li>
                <li>Assessments with actionable feedback</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <h3 className="font-semibold">For employers</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>Post jobs and screen candidates faster</li>
                <li>Bias-aware shortlisting and scorecards</li>
                <li>Analytics on time-to-hire and sources</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
