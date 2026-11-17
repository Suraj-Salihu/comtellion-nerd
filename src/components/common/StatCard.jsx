export default function StatCard({ label, value, change, accent = 'indigo' }) {
  const accentMap = {
    indigo: 'from-indigo-500 to-indigo-600',
    emerald: 'from-emerald-500 to-emerald-600',
    blue: 'from-sky-500 to-sky-600',
    amber: 'from-amber-500 to-amber-600',
    violet: 'from-violet-500 to-violet-600',
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`mb-4 h-2 w-16 rounded-full bg-gradient-to-r ${accentMap[accent] || accentMap.indigo}`} />
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <h3 className="text-3xl font-bold tracking-tight text-slate-900">{value}</h3>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">{change}</span>
      </div>
    </div>
  );
}
