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
    <aside className="w-full border-b border-slate-200 bg-slate-950 text-slate-200 lg:w-72 lg:border-b-0 lg:border-r">
      <div className="flex flex-col gap-3 p-4 lg:space-y-6 lg:p-5">
        <div className="rounded-xl bg-indigo-600 p-3 text-white lg:rounded-2xl lg:p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-100">Admin</p>
          <h2 className="mt-1 text-lg font-bold lg:mt-2 lg:text-xl">Comtellion Team</h2>
        </div>

        <nav aria-label="Admin navigation" className="flex gap-1 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
          {adminNavItems.map((item) => {
            const Icon = iconMap[item.label] || LayoutDashboard;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-medium transition lg:w-full lg:gap-3 lg:rounded-xl ${
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
