import { Home, SearchX } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
          <SearchX className="h-8 w-8" />
        </div>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900">404</h1>
        <p className="mt-3 text-xl font-semibold text-slate-800">Page not found</p>
        <p className="mt-2 text-slate-600">The page you are looking for might have moved or no longer exists.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
          <Home className="h-4 w-4" />
          Return home
        </Link>
      </div>
    </div>
  );
}
