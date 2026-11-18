import { Link } from 'react-router-dom';
import { brand, contactInfo } from '../../config/site';

export default function PublicFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div>
              <div className="text-lg font-bold text-white">{brand.name}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">NERD Registration Portal</div>
            </div>
          </div>
          <p className="text-sm text-slate-400">{brand.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Company</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Support</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link to="/track">Track application</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Create account</Link></li>
            <li><Link to="/forgot-password">Reset password</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>{contactInfo.email}</li>
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-xs text-slate-500 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {brand.shortName}. All rights reserved.</p>
          <p>Designed for educational registration support.</p>
        </div>
      </div>
    </footer>
  );
}
