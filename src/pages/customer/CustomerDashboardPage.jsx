import { Link } from 'react-router-dom';
import { ArrowRight, Bell, CreditCard, FileText, Plus, Wallet } from 'lucide-react';
import DashboardHeader from '../../components/layout/DashboardHeader';
import StatCard from '../../components/common/StatCard';
import StatusBadge from '../../components/common/StatusBadge';
import { customerApplications, notifications } from '../../data/mockData';

export default function CustomerDashboardPage() {
  return (
    <div>
      <DashboardHeader title="Overview" subtitle="Your registration activity at a glance" />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total applications" value="5" change="+2" accent="indigo" />
        <StatCard label="Pending applications" value="2" change="+1" accent="amber" />
        <StatCard label="Completed" value="1" change="+1" accent="emerald" />
        <StatCard label="Payment status" value="3/5" change="Paid" accent="violet" />
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Recent applications</h2>
            <Link to="/customer/applications" className="text-sm font-semibold text-indigo-700">View all</Link>
          </div>
          <div className="space-y-4">
            {customerApplications.slice(0, 3).map((item) => (
              <div key={item.id} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-semibold text-slate-900">{item.service}</p>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{item.id} • {item.submittedAt}</p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={item.paymentStatus} />
                  <Link to={`/customer/applications/${item.id}`} className="text-sm font-semibold text-indigo-700">Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Quick actions</h2>
          <div className="mt-5 space-y-3">
            <Link to="/customer/applications/new" className="flex items-center justify-between rounded-2xl bg-indigo-50 p-4 text-slate-900">
              <span className="flex items-center gap-3 font-medium"><Plus className="h-4 w-4" /> New application</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/customer/payments" className="flex items-center justify-between rounded-2xl bg-emerald-50 p-4 text-slate-900">
              <span className="flex items-center gap-3 font-medium"><Wallet className="h-4 w-4" /> Payments</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/customer/documents" className="flex items-center justify-between rounded-2xl bg-sky-50 p-4 text-slate-900">
              <span className="flex items-center gap-3 font-medium"><FileText className="h-4 w-4" /> Documents</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Recent notifications</h2>
            <Bell className="h-5 w-5 text-slate-500" />
          </div>
          <div className="space-y-4">
            {notifications.map((item) => (
              <div key={item.id} className={`rounded-2xl border p-3 ${item.read ? 'border-slate-200 bg-slate-50' : 'border-indigo-200 bg-indigo-50'}`}>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  {!item.read && <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />}
                </div>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                <p className="mt-2 text-xs text-slate-500">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Payment status</h2>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-slate-600" />
                <span className="font-medium text-slate-700">Current balance</span>
              </div>
              <span className="font-semibold text-slate-900">₦0.00</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-emerald-50 p-4">
              <span className="font-medium text-emerald-700">Paid applications</span>
              <span className="font-semibold text-emerald-700">3</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-amber-50 p-4">
              <span className="font-medium text-amber-700">Pending fees</span>
              <span className="font-semibold text-amber-700">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
