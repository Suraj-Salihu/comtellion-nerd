import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[32px] bg-white shadow-xl lg:grid-cols-[1.1fr_0.9fr]">
      <div className="hidden bg-slate-900 p-8 text-white lg:flex lg:flex-col lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">Comtellion NERD Portal</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight">Welcome back to your portal.</h1>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
          <div className="flex items-center gap-2 text-emerald-300">
            <ShieldCheck className="h-5 w-5" />
            Demo login screen only
          </div>
          <p className="mt-3 text-sm text-slate-300">This interface is ready for future Supabase authentication and role-based access.</p>
        </div>
      </div>

      <div className="p-8 sm:p-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Login</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Access your account</h2>
        </div>

        <form className="space-y-5">
          <label className="block text-sm font-medium text-slate-700">
            Email address
            <input type="email" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="name@example.com" />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Password
            <input type="password" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="Your password" />
          </label>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="rounded border-slate-300" />
              Remember me
            </label>
            <Link to="/forgot-password" className="font-medium text-indigo-700 hover:text-indigo-800">Forgot password?</Link>
          </div>

          <Link to="/customer/dashboard" className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
            Login to dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don’t have an account?{' '}
          <Link to="/register" className="font-semibold text-indigo-700 hover:text-indigo-800">Create one</Link>
        </p>
      </div>
    </div>
  );
}
