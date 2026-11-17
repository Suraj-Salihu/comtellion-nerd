import DashboardHeader from '../../components/layout/DashboardHeader';
import StatCard from '../../components/common/StatCard';
import StatusBadge from '../../components/common/StatusBadge';
import { adminApplicationRows, dashboardStats, recentActivities } from '../../data/mockData';

export default function AdminDashboardPage() {
  return (
    <div>
      <DashboardHeader title="Admin Overview" subtitle="Monitoring operational performance and service delivery" userName="Aisha Bello" />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((item, index) => (
          <StatCard key={item.label} label={item.label} value={item.value} change={item.change} accent={['indigo', 'amber', 'emerald', 'violet'][index]} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Recent applications</h2>
          <div className="mt-5 space-y-4">
            {adminApplicationRows.map((application) => (
              <div key={application.ref} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{application.customer}</p>
                  <p className="text-sm text-slate-500">{application.ref}</p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={application.status} />
                  <StatusBadge status={application.payment} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Recent staff activity</h2>
          <div className="mt-5 space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.action} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <p className="font-medium text-slate-900">{activity.user}</p>
                <p className="mt-1 text-sm text-slate-600">{activity.action}</p>
                <p className="mt-2 text-xs text-slate-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
