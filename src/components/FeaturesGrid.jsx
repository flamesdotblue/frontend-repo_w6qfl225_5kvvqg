import React from 'react';
import { Brain, Briefcase, LineChart, Shield, Languages, FileText } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-6 w-6 text-violet-500" />,
    title: 'AI Resume Understanding',
    desc: 'Semantic parsing of PDFs to extract skills, experience, and aspirations for accurate matching and guidance.',
  },
  {
    icon: <Briefcase className="h-6 w-6 text-sky-500" />,
    title: 'Job Matching Engine',
    desc: 'Recommends roles with high match scores using vector similarity and GPT insights with bias mitigation prompts.',
  },
  {
    icon: <FileText className="h-6 w-6 text-amber-500" />,
    title: 'Assessments & Feedback',
    desc: 'Bias-aware quizzes for personality and skills with actionable HR-style feedback to reduce hiring friction.',
  },
  {
    icon: <LineChart className="h-6 w-6 text-emerald-500" />,
    title: 'Employer Analytics',
    desc: 'Track time-to-hire, conversion funnels, and source effectiveness with exportable reports for stakeholders.',
  },
  {
    icon: <Shield className="h-6 w-6 text-fuchsia-500" />,
    title: 'Privacy & Compliance',
    desc: 'DPDPA-ready defaults and ethical AI guidelines to detect and mitigate potential bias in evaluations.',
  },
  {
    icon: <Languages className="h-6 w-6 text-indigo-500" />,
    title: 'Multilingual UX',
    desc: 'Vernacular support for Hindi and regional languages so talent across India can access equal opportunity.',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything you need to recruit and grow careers
          </h2>
          <p className="mt-3 text-gray-600">
            From resume intake to job matching, assessments, and analytics — OpportuNext is built to help both sides of the hiring marketplace.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition bg-white">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-50 mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
