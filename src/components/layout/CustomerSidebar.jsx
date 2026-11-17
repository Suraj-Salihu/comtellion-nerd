import { CreditCard, FileText, HelpCircle, LayoutDashboard, LogOut, MessageSquareText, UserRound, PlusCircle, Bell } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { customerNavItems } from '../../config/site';

const iconMap = {
  'Overview': LayoutDashboard,
  'My Applications': FileText,
  'New Application': PlusCircle,
  'Payments': CreditCard,
  'Documents': FileText,
  'Notifications': Bell,
  'Profile': UserRound,
  'Help and Support': HelpCircle,
  'Logout': LogOut,
};

export default function CustomerSidebar() {
  return (
    <aside className="w-full border-r border-slate-200 bg-slate-50 lg:w-72">
      <div className="space-y-6 p-5">
        <div className="rounded-2xl bg-slate-900 p-4 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Customer Portal</p>
          <h2 className="mt-2 text-xl font-bold">Welcome back</h2>
        </div>

        <nav className="space-y-1">
          {customerNavItems.map((item) => {
            const Icon = iconMap[item.label] || MessageSquareText;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
