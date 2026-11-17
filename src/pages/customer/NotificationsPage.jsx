import DashboardHeader from '../../components/layout/DashboardHeader';
import { notifications } from '../../data/mockData';

export default function NotificationsPage() {
  return (
    <div>
      <DashboardHeader title="Notifications" subtitle="Important updates and application alerts" />

      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {notifications.map((item) => (
          <div key={item.id} className={`rounded-2xl border p-4 ${item.read ? 'border-slate-200 bg-slate-50' : 'border-indigo-200 bg-indigo-50'}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
              </div>
              {!item.read && <span className="rounded-full bg-indigo-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-700">New</span>}
            </div>
            <p className="mt-3 text-xs text-slate-500">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
