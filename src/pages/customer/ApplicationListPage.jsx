import { useState } from 'react';
import { Edit3, Eye, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../../components/layout/DashboardHeader';
import StatusBadge from '../../components/common/StatusBadge';
import { customerApplications } from '../../data/mockData';

export default function ApplicationListPage() {
  const [query, setQuery] = useState('');

  const filtered = customerApplications.filter((application) =>
    application.id.toLowerCase().includes(query.toLowerCase()) ||
    application.customer.toLowerCase().includes(query.toLowerCase()) ||
    application.service.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <DashboardHeader title="My Applications" subtitle="Track and manage your registrations" />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-500">
            <Search className="h-4 w-4" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search applications"
              className="w-full bg-transparent outline-none placeholder:text-slate-400 sm:w-64"
            />
          </div>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Filter</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-3 pr-4 font-medium">Reference</th>
                <th className="pb-3 pr-4 font-medium">Service</th>
                <th className="pb-3 pr-4 font-medium">Submitted</th>
                <th className="pb-3 pr-4 font-medium">Payment</th>
                <th className="pb-3 pr-4 font-medium">Status</th>
                <th className="pb-3 pr-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 pr-4 font-semibold text-slate-900">{item.id}</td>
                  <td className="py-4 pr-4">{item.service}</td>
                  <td className="py-4 pr-4">{item.submittedAt}</td>
                  <td className="py-4 pr-4"><StatusBadge status={item.paymentStatus} /></td>
                  <td className="py-4 pr-4"><StatusBadge status={item.status} /></td>
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-3">
                      <Link to={`/customer/applications/${item.id}`} className="flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-1.5 text-indigo-700"><Eye className="h-3.5 w-3.5" /> View</Link>
                      <button className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1.5 text-slate-700"><Edit3 className="h-3.5 w-3.5" /> Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
