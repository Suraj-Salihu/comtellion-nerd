import { Download, FileText, MessageSquareText, Wallet } from 'lucide-react';
import { useParams } from 'react-router-dom';
import StatusBadge from '../../components/common/StatusBadge';
import { customerApplications } from '../../data/mockData';

export default function ApplicationDetailPage() {
  const { id } = useParams();
  const application = customerApplications.find((item) => item.id === id) || customerApplications[0];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Application details</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{application.id}</h1>
          </div>
          <div className="flex items-center gap-3">
            <StatusBadge status={application.status} />
            <StatusBadge status={application.paymentStatus} />
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Application summary</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Service</p><p className="mt-1 font-semibold text-slate-900">{application.service}</p></div>
              <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Submission date</p><p className="mt-1 font-semibold text-slate-900">{application.submittedAt}</p></div>
              <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Amount</p><p className="mt-1 font-semibold text-slate-900">{application.amount}</p></div>
              <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Reference</p><p className="mt-1 font-semibold text-slate-900">{application.reference}</p></div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Submitted documents</h2>
            <div className="mt-5 space-y-3">
              {['Passport Photograph', 'Academic Certificate', 'Birth Certificate'].map((name) => (
                <div key={name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center gap-3"><FileText className="h-4 w-4 text-slate-500" /> <span className="font-medium text-slate-700">{name}</span></div>
                  <StatusBadge status="approved" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Payment information</h2>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="text-slate-500">Method</span><span className="font-semibold text-slate-900">Card</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="text-slate-500">Status</span><StatusBadge status={application.paymentStatus} /></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="text-slate-500">Amount</span><span className="font-semibold text-slate-900">{application.amount}</span></div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Processing timeline</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="flex gap-3"><div className="mt-1 h-2 w-2 rounded-full bg-indigo-600" /><div><p className="font-semibold text-slate-900">Submitted</p><p>2026-11-01</p></div></div>
              <div className="flex gap-3"><div className="mt-1 h-2 w-2 rounded-full bg-amber-500" /><div><p className="font-semibold text-slate-900">Under review</p><p>2026-11-03</p></div></div>
              <div className="flex gap-3"><div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /><div><p className="font-semibold text-slate-900">Completed</p><p>Pending completion</p></div></div>
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
            <Download className="h-4 w-4" />
            Download slip
          </button>
        </div>
      </div>
    </div>
  );
}
