import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brand, publicNavItems } from '../../config/site';

export default function PublicNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={`${brand.name} NERD Portal home`}>
          <div className="leading-tight">
            <div className="text-lg font-extrabold text-[#14345f]">
              {brand.shortName} <span className="italic text-brand-gold">Services</span>
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-teal">NERD Registration Portal</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {publicNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-indigo-700' : 'text-slate-600 hover:text-indigo-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-300">
            Login
          </Link>
          <Link to="/register" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
            Start Registration
          </Link>
        </div>

        <button className="rounded-lg border border-slate-200 p-2 md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {publicNavItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                {item.label}
              </NavLink>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="mt-2 rounded-lg border border-slate-200 px-3 py-2 text-center text-sm font-semibold text-slate-700">
              Login
            </Link>
            <Link to="/register" onClick={() => setOpen(false)} className="rounded-lg bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white">
              Start Registration
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
