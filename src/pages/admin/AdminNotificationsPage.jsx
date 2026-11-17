import DashboardHeader from '../../components/layout/DashboardHeader';

export default function AdminNotificationsPage() {
  return (
    <div>
      <DashboardHeader title="Notifications" subtitle="Broadcast updates to customers and staff" userName="Aisha Bello" />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.5fr]">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Message title
              <input className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="Application update" />
            </label>
            <label className="mt-5 block text-sm font-medium text-slate-700">
              Message body
              <textarea rows="6" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="Write a notification message" />
            </label>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h2 className="text-lg font-semibold text-slate-900">Audience</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <label className="flex items-center gap-2"><input type="checkbox" /> All customers</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Pending applications</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Staff updates</label>
            </div>
            <button className="mt-6 w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white">Send notification</button>
          </div>
        </div>
      </div>
    </div>
  );
}
