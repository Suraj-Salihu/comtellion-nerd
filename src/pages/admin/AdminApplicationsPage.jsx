import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../../components/layout/DashboardHeader';
import StatusBadge from '../../components/common/StatusBadge';
import { useDemoPortal } from '../../hooks/useDemoPortal';

export default function AdminApplicationsPage() {
  const { applications } = useDemoPortal();
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const visibleApplications = useMemo(() => applications.filter((application) => {
    const matchesQuery = [application.customer, application.reference, application.id]
      .some((value) => value.toLowerCase().includes(query.toLowerCase()));
    return matchesQuery && (statusFilter === 'all' || application.status === statusFilter);
  }), [applications, query, statusFilter]);

  return (
    <div>
      <DashboardHeader title="Applications" subtitle="Manage customer registrations and internal review" userName="Aisha Bello" />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-500">
            <Search className="h-4 w-4" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search customer or reference" className="w-full bg-transparent outline-none placeholder:text-slate-400 sm:w-64" />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            Status
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
              <option value="all">All statuses</option>
              <option value="submitted">Submitted</option>
              <option value="under_review">Under review</option>
              <option value="correction_required">Correction required</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </label>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-3 pr-4 font-medium">Customer</th>
                <th className="pb-3 pr-4 font-medium">Reference</th>
                <th className="pb-3 pr-4 font-medium">Submission date</th>
                <th className="pb-3 pr-4 font-medium">Payment</th>
                <th className="pb-3 pr-4 font-medium">Status</th>
                <th className="pb-3 pr-4 font-medium">Assigned staff</th>
                <th className="pb-3 pr-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleApplications.map((item) => (
                <tr key={item.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 pr-4 font-semibold text-slate-900">{item.customer}</td>
                  <td className="py-4 pr-4">{item.reference}</td>
                  <td className="py-4 pr-4">{item.date}</td>
                  <td className="py-4 pr-4"><StatusBadge status={item.paymentStatus} /></td>
                  <td className="py-4 pr-4"><StatusBadge status={item.status} /></td>
                  <td className="py-4 pr-4">{item.assignedStaff}</td>
                  <td className="py-4 pr-4"><Link className="font-semibold text-indigo-700 hover:text-indigo-900" to={`/admin/applications/${item.id}`}>Review</Link></td>
                </tr>
              ))}
              {visibleApplications.length === 0 && <tr><td className="py-8 text-center text-slate-500" colSpan="7">No applications match these filters.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
