import { CheckCircle2, Download, FileText } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DashboardHeader from '../../components/layout/DashboardHeader';
import StatusBadge from '../../components/common/StatusBadge';
import { useDemoPortal } from '../../hooks/useDemoPortal';

export default function AdminApplicationDetailPage() {
  const { id } = useParams();
  const { findApplication, updateApplication, updateDocumentStatus, uploadSlip, staffMembers } = useDemoPortal();
  const application = findApplication(id);
  const noteRef = useRef(null);
  const [message, setMessage] = useState('');
  const [completionConfirmed, setCompletionConfirmed] = useState(false);

  if (!application) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-xl font-bold text-slate-900">Application not found</h1>
        <Link to="/admin/applications" className="mt-4 inline-block font-semibold text-indigo-700">Back to applications</Link>
      </div>
    );
  }

  const saveNote = () => {
    updateApplication(application.id, { notes: noteRef.current?.value || '' });
    setMessage('Internal note saved for this demo session.');
  };

  const changeStatus = (status) => {
    updateApplication(application.id, {
      status,
      timelineNote: status === 'correction_required' ? 'Staff requested corrections.' : `Staff updated status to ${status.replaceAll('_', ' ')}.`,
    });
    setMessage(`Application status changed to ${status.replaceAll('_', ' ')}.`);
  };

  const handleSlip = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) {
      setMessage('The demo PDF must be smaller than 20 MB.');
      event.target.value = '';
      return;
    }
    setMessage(uploadSlip(application.id, file) ? 'PDF attached in this browser session. It is not uploaded to a server.' : 'Select a PDF file for the completed slip.');
    event.target.value = '';
  };

  const markCompleted = () => {
    if (application.paymentStatus !== 'paid') {
      setMessage('This demo application cannot be completed until its payment status is paid. Payment status is separate from registration status.');
      return;
    }
    if (application.documents.some((document) => document.status !== 'approved')) {
      setMessage('Approve every submitted document before completing this application.');
      return;
    }
    if (!application.slipUrl) {
      setMessage('Attach the authentic completed registration slip PDF before marking this application complete.');
      return;
    }
    if (window.confirm('Mark this application as completed and make the attached PDF available to the customer?')) {
      updateApplication(application.id, { status: 'completed', slipReleased: true, timelineNote: 'Staff marked the application complete and released the uploaded PDF slip.' });
      setCompletionConfirmed(true);
      setMessage('Completed. The customer can now download the attached slip in this demo session.');
    }
  };

  return (
    <div className="space-y-6">
      <DashboardHeader title="Application review" subtitle="Review customer details, payment, documents, and registration progress" userName="Aisha Bello" />
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Application review</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{application.reference}</h1>
            <p className="mt-1 text-sm text-slate-500">Demo record · changes last only in this page session</p>
          </div>
          <div className="flex items-center gap-3">
            <StatusBadge status={application.status} />
            <StatusBadge status={application.paymentStatus} />
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Customer information</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ['Customer', application.customer],
                ['Email', application.customerEmail],
                ['Phone', application.customerPhone],
                ['Date of birth', application.dateOfBirth],
                ['Sex', application.sex],
                ['NIN', application.nin ? `•••••••${application.nin.slice(-4)}` : 'Not provided'],
                ['Nationality', application.nationality],
                ['Residence', `${application.town || ''} ${application.stateOfResidence || ''} ${application.lga || ''}`.trim()],
                ['Residential address', application.residentialAddress],
                ['Submission date', application.date],
                ['Application reference', application.reference],
                ['Assigned staff', application.assignedStaff],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">{label}</p><p className="mt-1 break-words font-semibold text-slate-900">{value}</p></div>
              ))}
            </div>
            <h3 className="mt-5 font-semibold text-slate-900">Next of kin</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                ['Name', application.nextOfKin.name],
                ['Phone', application.nextOfKin.phone],
                ['Email', application.nextOfKin.email],
              ].map(([label, value]) => <div key={label} className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">{label}</p><p className="mt-1 break-words font-medium text-slate-900">{value}</p></div>)}
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">Assign staff
                <select value={application.assignedStaff} onChange={(event) => updateApplication(application.id, { assignedStaff: event.target.value })} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                  <option>Unassigned</option>
                  {staffMembers.map((staff) => <option key={staff.email}>{staff.name}</option>)}
                </select>
              </label>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">Role access shown here is a demo UI only; enforce all permissions in the backend.</div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Educational and registration details</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {Object.entries(application.education).map(([label, value]) => (
                <div key={label} className="rounded-xl bg-slate-50 p-3"><p className="text-xs capitalize text-slate-500">{label.replaceAll(/([A-Z])/g, ' $1')}</p><p className="mt-1 font-medium text-slate-900">{value}</p></div>
              ))}
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">Supervisor and HOD</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[['Supervisor', application.supervisor], ['Head of Department', application.hod]].map(([label, person]) => (
                <div key={label} className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-1 font-medium text-slate-900">{person.title} {person.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{person.email} · {person.phone}</p>
                </div>
              ))}
            </div>
            {application.coSupervisor && <p className="mt-3 text-sm text-slate-600">Co-supervisor: {application.coSupervisor.name}</p>}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Submitted documents</h2>
            <div className="mt-5 space-y-3">
              {application.documents.map((document) => (
                <div key={document.name} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3"><FileText className="h-4 w-4 shrink-0 text-slate-500" /> <span className="font-medium text-slate-700">{document.name}</span> <StatusBadge status={document.status} /></div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => updateDocumentStatus(application.id, document.name, 'approved')} className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">Approve</button>
                    <button type="button" onClick={() => updateDocumentStatus(application.id, document.name, 'rejected')} className="rounded-lg bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700">Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Application timeline</h2>
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
            <h2 className="text-lg font-bold text-slate-900">Payment record</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-3"><span className="text-slate-500">Payment reference</span><span className="font-semibold text-slate-900">{application.paymentReference}</span></div>
              <div className="flex justify-between gap-3"><span className="text-slate-500">Amount (illustrative demo)</span><span className="font-semibold text-slate-900">{application.amount}</span></div>
              <div className="flex justify-between gap-3"><span className="text-slate-500">Method</span><span className="font-semibold text-slate-900">{application.paymentMethod}</span></div>
              <div className="flex justify-between gap-3"><span className="text-slate-500">Payment status</span><StatusBadge status={application.paymentStatus} /></div>
            </div>
            <p className="mt-4 text-xs text-slate-500">Payment and registration statuses are separate. No real payment was processed.</p>
            {application.paymentStatus !== 'paid' && <button type="button" onClick={() => updateApplication(application.id, { paymentStatus: 'paid' })} className="mt-4 w-full rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">Record payment as paid (demo)</button>}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Internal notes</h2>
            <textarea key={application.id} ref={noteRef} rows="4" defaultValue={application.notes} className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="Internal note for staff" />
            <button type="button" onClick={saveNote} className="mt-3 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Save note</button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Processing actions</h2>
            <div className="mt-5 space-y-3">
              <button type="button" onClick={() => changeStatus('under_review')} className="w-full rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-700">Approve for review</button>
              <button type="button" onClick={() => changeStatus('correction_required')} className="w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">Request corrections</button>
              <button type="button" onClick={() => changeStatus('processing')} className="w-full rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-800">Mark as processing</button>
              <label className="block rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                Upload authentic completed slip (PDF)
                <input type="file" accept="application/pdf,.pdf" onChange={handleSlip} className="mt-3 block w-full cursor-pointer text-sm font-normal text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-3 file:py-2 file:font-semibold file:text-white" />
              </label>
              {application.slipUrl && (
                <a href={application.slipUrl} download={application.slipName} className="flex items-center justify-center gap-2 rounded-xl border border-indigo-200 px-4 py-3 text-sm font-semibold text-indigo-700">
                  <Download className="h-4 w-4" /> Staff preview: {application.slipName}
                </a>
              )}
              <button type="button" onClick={markCompleted} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-800">
                <CheckCircle2 className="h-4 w-4" /> Mark completed and release slip
              </button>
              {application.status === 'completed' && application.slipReleased && (
                <Link to={`/customer/applications/${application.id}`} className="block rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700">Preview customer view (demo)</Link>
              )}
            </div>
            {completionConfirmed && <p className="mt-3 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-800">The uploaded slip is now available in the customer detail view for this session.</p>}
          </div>
        </div>
      </div>
      {message && <p role="status" className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">{message}</p>}
    </div>
  );
}
