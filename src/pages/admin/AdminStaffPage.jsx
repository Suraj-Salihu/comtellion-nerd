import DashboardHeader from '../../components/layout/DashboardHeader';
import { staffMembers } from '../../data/mockData';

export default function AdminStaffPage() {
  return (
    <div>
      <DashboardHeader title="Staff Management" subtitle="Manage team roles and user access" userName="Aisha Bello" />

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex justify-end">
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Invite staff</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-3 pr-4 font-medium">Name</th>
                <th className="pb-3 pr-4 font-medium">Email</th>
                <th className="pb-3 pr-4 font-medium">Role</th>
                <th className="pb-3 pr-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {staffMembers.map((member) => (
                <tr key={member.email} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 pr-4 font-semibold text-slate-900">{member.name}</td>
                  <td className="py-4 pr-4">{member.email}</td>
                  <td className="py-4 pr-4">{member.role}</td>
                  <td className="py-4 pr-4">{member.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
