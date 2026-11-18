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
            Comtellion Services is a service provider located at the University of Port Harcourt campus. Its website lists NERD registration, academic records upload, verification and clearance, and clearance slip issuance among the services it provides.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            This separate NERD portal is intended to help customers prepare their details and documents for Comtellion’s service process. Comtellion Services is not the owner or operator of the official NERD platform.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8 text-slate-100 shadow-lg">
          <h2 className="text-2xl font-bold">NERD registration support</h2>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li>• Registration</li>
            <li>• Academic records upload</li>
            <li>• Verification and clearance</li>
            <li>• Clearance slip issuance</li>
          </ul>
          <Link to="/services" className="mt-8 inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900">
            View NERD services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
