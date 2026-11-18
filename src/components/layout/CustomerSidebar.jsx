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
    <aside className="w-full border-b border-slate-200 bg-slate-50 lg:w-72 lg:border-b-0 lg:border-r">
      <div className="flex flex-col gap-3 p-4 lg:space-y-6 lg:p-5">
        <div className="rounded-xl bg-slate-900 p-3 text-white lg:rounded-2xl lg:p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Customer Portal</p>
          <h2 className="mt-1 text-lg font-bold lg:mt-2 lg:text-xl">Welcome back</h2>
        </div>

        <nav aria-label="Customer navigation" className="flex gap-1 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
          {customerNavItems.map((item) => {
            const Icon = iconMap[item.label] || MessageSquareText;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-medium transition lg:w-full lg:gap-3 lg:rounded-xl ${
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
