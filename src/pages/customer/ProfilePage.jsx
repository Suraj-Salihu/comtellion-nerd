import { Save } from 'lucide-react';
import DashboardHeader from '../../components/layout/DashboardHeader';

export default function ProfilePage() {
  return (
    <div>
      <DashboardHeader title="Profile" subtitle="Manage your account details" />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            First name
            <input defaultValue="Ada" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Last name
            <input defaultValue="Okafor" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
          </label>
          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            Email address
            <input defaultValue="ada.okafor@email.com" type="email" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
          </label>
          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            Phone number
            <input defaultValue="0802 000 0000" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
          </label>
        </div>

        <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
          <Save className="h-4 w-4" />
          Save changes
        </button>
      </div>
    </div>
  );
}
