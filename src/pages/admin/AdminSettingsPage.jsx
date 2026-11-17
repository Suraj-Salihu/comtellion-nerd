import DashboardHeader from '../../components/layout/DashboardHeader';

export default function AdminSettingsPage() {
  return (
    <div>
      <DashboardHeader title="Settings" subtitle="Configure registry and operational preferences" userName="Aisha Bello" />

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Business profile</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-700">
            <label className="block">
              Business name
              <input defaultValue="Comtellion Services" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
            </label>
            <label className="block">
              Portal name
              <input defaultValue="Comtellion NERD Portal" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
            </label>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Notification preferences</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-700">
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Email updates</label>
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> SMS alerts</label>
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> WhatsApp notifications</label>
          </div>
        </div>
      </div>
    </div>
  );
}
