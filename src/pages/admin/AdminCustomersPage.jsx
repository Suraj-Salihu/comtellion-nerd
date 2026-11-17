import DashboardHeader from '../../components/layout/DashboardHeader';
import { staffMembers } from '../../data/mockData';

export default function AdminCustomersPage() {
  return (
    <div>
      <DashboardHeader title="Customer Management" subtitle="View customer accounts and registration activity" userName="Aisha Bello" />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-3 pr-4 font-medium">Customer name</th>
                <th className="pb-3 pr-4 font-medium">Email</th>
                <th className="pb-3 pr-4 font-medium">Phone</th>
                <th className="pb-3 pr-4 font-medium">Registration date</th>
                <th className="pb-3 pr-4 font-medium">Applications</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Ada Okafor', email: 'ada.okafor@email.com', phone: '0802 000 0000', date: '2026-10-02', count: 2 },
                { name: 'Chike Nwosu', email: 'chike.nwosu@email.com', phone: '0803 000 0000', date: '2026-09-12', count: 1 },
                { name: 'Maryam Yusuf', email: 'maryam.yusuf@email.com', phone: '0805 000 0000', date: '2026-11-01', count: 3 },
              ].map((customer) => (
                <tr key={customer.email} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 pr-4 font-semibold text-slate-900">{customer.name}</td>
                  <td className="py-4 pr-4">{customer.email}</td>
                  <td className="py-4 pr-4">{customer.phone}</td>
                  <td className="py-4 pr-4">{customer.date}</td>
                  <td className="py-4 pr-4">{customer.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
