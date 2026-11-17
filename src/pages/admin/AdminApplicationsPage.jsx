import { Search } from 'lucide-react';
import DashboardHeader from '../../components/layout/DashboardHeader';
import StatusBadge from '../../components/common/StatusBadge';
import { adminApplicationRows } from '../../data/mockData';

export default function AdminApplicationsPage() {
  return (
    <div>
      <DashboardHeader title="Applications" subtitle="Manage customer registrations and internal review" userName="Aisha Bello" />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-500">
            <Search className="h-4 w-4" />
            <input placeholder="Search application" className="w-full bg-transparent outline-none placeholder:text-slate-400 sm:w-64" />
          </div>
          <div className="flex gap-2">
            <button className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">All</button>
            <button className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">Pending</button>
          </div>
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
              </tr>
            </thead>
            <tbody>
              {adminApplicationRows.map((item) => (
                <tr key={item.ref} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 pr-4 font-semibold text-slate-900">{item.customer}</td>
                  <td className="py-4 pr-4">{item.ref}</td>
                  <td className="py-4 pr-4">{item.date}</td>
                  <td className="py-4 pr-4"><StatusBadge status={item.payment} /></td>
                  <td className="py-4 pr-4"><StatusBadge status={item.status} /></td>
                  <td className="py-4 pr-4">{item.staff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
