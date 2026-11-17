import { ArrowLeft, KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-xl rounded-[32px] bg-white p-8 shadow-xl sm:p-10">
      <div className="mb-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
          <KeyRound className="h-6 w-6" />
        </div>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Reset access</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Forgot your password?</h1>
      </div>

      <form className="space-y-5">
        <label className="block text-sm font-medium text-slate-700">
          Email address
          <input type="email" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="name@example.com" />
        </label>

        <button type="button" className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
          Send reset link
        </button>
      </form>

      <Link to="/login" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" />
        Back to login
      </Link>
    </div>
  );
}
