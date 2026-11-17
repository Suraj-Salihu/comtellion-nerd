import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-5xl rounded-[32px] bg-white p-8 shadow-xl sm:p-10">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Create account</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Register for the Comtellion NERD Portal</h1>
      </div>

      <form className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            First name
            <input className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="First name" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Last name
            <input className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="Last name" />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Email address
            <input type="email" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="email@example.com" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Phone number
            <input className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="0802 000 0000" />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Password
            <input type="password" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="Create a password" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Confirm password
            <input type="password" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="Confirm password" />
          </label>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 rounded border-slate-300" />
            <span>
              I agree to the terms and privacy policy and understand that this is a demo account setup screen for future Supabase Auth integration.
            </span>
          </label>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          <CheckCircle2 className="h-5 w-5" />
          Your account can be used for mock application submission in the portal.
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/customer/dashboard" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
            Create account
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/login" className="flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300">
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
}
