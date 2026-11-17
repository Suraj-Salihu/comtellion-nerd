import { CheckCircle2, FileText, MessageSquareText } from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';
import { adminApplicationRows } from '../../data/mockData';

export default function AdminApplicationDetailPage() {
  const application = adminApplicationRows[0];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Application review</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{application.ref}</h1>
          </div>
          <div className="flex items-center gap-3">
            <StatusBadge status={application.status} />
            <StatusBadge status={application.payment} />
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Customer information</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Name</p><p className="mt-1 font-semibold text-slate-900">{application.customer}</p></div>
              <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Submission date</p><p className="mt-1 font-semibold text-slate-900">{application.date}</p></div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Uploaded documents</h2>
            <div className="mt-5 space-y-3">
              {[ 'Passport photo', 'Academic certificate', 'Birth certificate' ].map((name) => (
                <div key={name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center gap-3"><FileText className="h-4 w-4 text-slate-500" /> <span className="font-medium text-slate-700">{name}</span></div>
                  <button className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">Review</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Internal notes</h2>
            <textarea rows="6" className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" defaultValue="Applicant requires a clearer copy of birth certificate before final review." />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Actions</h2>
            <div className="mt-5 space-y-3">
              <button className="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white">Assign staff</button>
              <button className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">Request correction</button>
              <button className="w-full rounded-full border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Mark as processing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
