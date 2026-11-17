import { Bell, Search } from 'lucide-react';

export default function DashboardHeader({ title, subtitle, userName = 'Aisha Bello' }) {
  return (
    <header className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Portal</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
          <Search className="h-4 w-4" />
          Search
        </div>
        <button className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900">
          <Bell className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">AB</div>
          <div>
            <p className="text-sm font-semibold text-slate-800">{userName}</p>
            <p className="text-[11px] text-slate-500">Active</p>
          </div>
        </div>
      </div>
    </header>
  );
}
