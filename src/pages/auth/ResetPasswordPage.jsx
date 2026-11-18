import { CheckCircle2, LockKeyhole } from 'lucide-react';

export default function ResetPasswordPage() {
  return (
    <div className="mx-auto max-w-xl rounded-[32px] bg-white p-8 shadow-xl sm:p-10">
      <div className="mb-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <LockKeyhole className="h-6 w-6" />
        </div>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Update password</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Set a new password</h1>
      </div>

      <form className="space-y-5">
        <label className="block text-sm font-medium text-slate-700">
          New password
          <input type="password" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="New password" />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Confirm new password
          <input type="password" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="Confirm new password" />
        </label>

        <button type="button" className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
          Reset password
        </button>
      </form>

      <div className="mt-6 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
        <CheckCircle2 className="h-4 w-4" />
        Password reset flow is mock-only until Supabase auth is connected.
      </div>
    </div>
  );
}
