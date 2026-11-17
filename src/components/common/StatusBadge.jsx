import { statusMeta } from '../../config/site';

export default function StatusBadge({ status, type = 'status' }) {
  const normalized = String(status || '').toLowerCase().replace(/\s+/g, '_');
  const badge = statusMeta[normalized] || {
    label: type === 'payment' ? 'Pending' : 'Unknown',
    color: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${badge.color}`}>
      {badge.label}
    </span>
  );
}
