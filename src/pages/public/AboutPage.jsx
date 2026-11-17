import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">About</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">About Comtellion Services</h1>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-lg leading-8 text-slate-700">
            Comtellion Services supports customers who want a smoother, more transparent way to submit and monitor educational registrations. The Comtellion NERD Portal provides a digital front-end for customers to create accounts, complete application forms, upload documents, pay fees, and track progress in one organised place.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            The platform is intentionally designed to be scalable for future educational programs beyond NERD registration, while remaining clearly separated from the official government portal. This ensures customers understand that Comtellion is a service partner and support platform, not the official registration authority.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8 text-slate-100 shadow-lg">
          <h2 className="text-2xl font-bold">What the portal supports</h2>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li>• Secure online registration support</li>
            <li>• Application tracking and updates</li>
            <li>• Document uploads and review</li>
            <li>• Payment status visibility</li>
            <li>• Future expansion for other services</li>
          </ul>
          <Link to="/services" className="mt-8 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900">
            Explore services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
