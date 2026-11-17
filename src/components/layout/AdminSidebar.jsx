import { BarChart3, BellRing, CreditCard, FileText, FolderCog, LayoutDashboard, Settings, ShieldCheck, Users, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { adminNavItems } from '../../config/site';

const iconMap = {
  Overview: LayoutDashboard,
  Applications: FileText,
  Payments: CreditCard,
  Customers: Users,
  Staff: ShieldCheck,
  Notifications: BellRing,
  Reports: BarChart3,
  'Activity Logs': FolderCog,
  Settings: Settings,
};

export default function AdminSidebar() {
  return (
    <aside className="w-full border-r border-slate-200 bg-slate-950 text-slate-200 lg:w-72">
      <div className="space-y-6 p-5">
        <div className="rounded-2xl bg-indigo-600 p-4 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-100">Admin</p>
          <h2 className="mt-2 text-xl font-bold">Comtellion Team</h2>
        </div>

        <nav className="space-y-1">
          {adminNavItems.map((item) => {
            const Icon = iconMap[item.label] || LayoutDashboard;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            );
          })}
          <NavLink to="/" className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
            <LogOut className="h-4 w-4" />
            Exit portal
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}
