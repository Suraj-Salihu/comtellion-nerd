import { Download, FileText } from 'lucide-react';
import { useParams } from 'react-router-dom';
import StatusBadge from '../../components/common/StatusBadge';
import { useDemoPortal } from '../../hooks/useDemoPortal';

export default function ApplicationDetailPage() {
  const { id } = useParams();
  const { findApplication } = useDemoPortal();
  const application = findApplication(id);

  if (!application) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-xl font-bold text-slate-900">Application not found</h1>
        <p className="mt-2 text-slate-600">Return to your applications list and choose a valid application.</p>
      </div>
    );
  }

  const canDownloadSlip = application.status === 'completed' && application.slipReleased && application.slipUrl;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Application details</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{application.reference}</h1>
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
              <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Submission date</p><p className="mt-1 font-semibold text-slate-900">{application.date}</p></div>
              <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Amount (demo record)</p><p className="mt-1 font-semibold text-slate-900">{application.amount}</p></div>
              <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Reference</p><p className="mt-1 font-semibold text-slate-900">{application.reference}</p></div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Submitted documents</h2>
            <div className="mt-5 space-y-3">
              {application.documents.map((document) => (
                <div key={document.name} className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3"><FileText className="h-4 w-4 text-slate-500" /> <span className="font-medium text-slate-700">{document.name}</span></div>
                  <StatusBadge status={document.status} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Application updates</h2>
            <div className="mt-5 space-y-4">
              {application.timeline.map((event, index) => (
                <div key={`${event.status}-${event.date}-${index}`} className="flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-600" />
                  <div><div className="flex flex-wrap items-center gap-2"><StatusBadge status={event.status} /><span className="text-xs text-slate-500">{event.date}</span></div><p className="mt-1 text-sm text-slate-600">{event.note}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Payment information</h2>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="text-slate-500">Payment reference</span><span className="font-semibold text-slate-900">{application.paymentReference}</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="text-slate-500">Method</span><span className="font-semibold text-slate-900">{application.paymentMethod}</span></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="text-slate-500">Status</span><StatusBadge status={application.paymentStatus} /></div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-3"><span className="text-slate-500">Amount (demo)</span><span className="font-semibold text-slate-900">{application.amount}</span></div>
              <p className="text-xs text-slate-500">This demo payment record is illustrative; no transaction was made.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Processing timeline</h2>
            <p className="mt-4 text-sm text-slate-500">See the application updates panel for this record’s current timeline.</p>
          </div>

          {canDownloadSlip ? (
            <a href={application.slipUrl} download={application.slipName} className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700">
              <Download className="h-4 w-4" /> Download completed slip (PDF)
            </a>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              The completed slip will be available here after staff complete their review and release the PDF.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
