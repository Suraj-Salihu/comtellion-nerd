import DashboardHeader from '../../components/layout/DashboardHeader';
import { recentActivities } from '../../data/mockData';

export default function AdminActivityLogsPage() {
  return (
    <div>
      <DashboardHeader title="Activity Logs" subtitle="Latest operational actions and audits" userName="Aisha Bello" />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={`${activity.user}-${index}`} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">{activity.user.split(' ').map((part) => part[0]).join('').slice(0,2)}</div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{activity.user}</p>
                <p className="mt-1 text-sm text-slate-600">{activity.action}</p>
              </div>
              <p className="text-xs text-slate-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
