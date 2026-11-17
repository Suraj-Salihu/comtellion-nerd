import DashboardHeader from '../../components/layout/DashboardHeader';

export default function AdminReportsPage() {
  return (
    <div>
      <DashboardHeader title="Reports and Analytics" subtitle="Performance summaries for registrations and revenue" userName="Aisha Bello" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Registration volume', value: '1,284' },
          { label: 'Revenue', value: '₦31.4M' },
          { label: 'Completion rate', value: '76%' },
          { label: 'Pending review', value: '246' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{stat.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
