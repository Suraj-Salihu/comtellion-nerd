import DashboardHeader from '../../components/layout/DashboardHeader';
import StatusBadge from '../../components/common/StatusBadge';
import { paymentHistory } from '../../data/mockData';

export default function AdminPaymentsPage() {
  return (
    <div>
      <DashboardHeader title="Payments" subtitle="Review all transaction activity and payment statuses" userName="Aisha Bello" />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-3 pr-4 font-medium">Customer</th>
                <th className="pb-3 pr-4 font-medium">Reference</th>
                <th className="pb-3 pr-4 font-medium">Amount</th>
                <th className="pb-3 pr-4 font-medium">Method</th>
                <th className="pb-3 pr-4 font-medium">Date</th>
                <th className="pb-3 pr-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((item) => (
                <tr key={item.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 pr-4 font-semibold text-slate-900">Ada Okafor</td>
                  <td className="py-4 pr-4">{item.id}</td>
                  <td className="py-4 pr-4">{item.amount}</td>
                  <td className="py-4 pr-4">{item.method}</td>
                  <td className="py-4 pr-4">{item.date}</td>
                  <td className="py-4 pr-4"><StatusBadge status={item.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
