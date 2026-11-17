import { useState } from 'react';
import { Search, ShieldCheck } from 'lucide-react';

const mockApplications = [
  {
    reference: 'CT-202611-1042',
    name: 'Ada Okafor',
    service: 'NERD Registration',
    status: 'Under Review',
    updated: '2 days ago',
    note: 'Your application is being reviewed by our registration team.',
  },
  {
    reference: 'CT-202611-1051',
    name: 'Tobi Adebayo',
    service: 'NERD Registration',
    status: 'Completed',
    updated: 'Today',
    note: 'Your completed slip is ready for download.',
  },
];

export default function TrackApplicationPage() {
  const [reference, setReference] = useState('CT-202611-1042');
  const [result, setResult] = useState(mockApplications[0]);

  const handleSearch = () => {
    const match = mockApplications.find((item) => item.reference.toLowerCase() === reference.trim().toLowerCase());
    setResult(match || null);
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Track Application</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">Check the status of your application</h1>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={reference}
            onChange={(event) => setReference(event.target.value)}
            placeholder="Enter application reference"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
          <button type="button" onClick={handleSearch} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
            <ShieldCheck className="h-4 w-4" />
            Demo lookup only
          </div>
          {result ? (
            <div className="mt-5 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm uppercase tracking-[0.2em] text-slate-500">Reference</span>
                <span className="text-lg font-semibold text-slate-900">{result.reference}</span>
              </div>
              <p className="text-slate-700">Applicant: <span className="font-medium text-slate-900">{result.name}</span></p>
              <p className="text-slate-700">Service: <span className="font-medium text-slate-900">{result.service}</span></p>
              <p className="text-slate-700">Status: <span className="font-medium text-slate-900">{result.status}</span></p>
              <p className="text-slate-700">Last updated: <span className="font-medium text-slate-900">{result.updated}</span></p>
              <p className="rounded-xl border border-slate-200 bg-white p-3 text-slate-700">{result.note}</p>
            </div>
          ) : (
            <p className="mt-5 text-slate-600">No record found for the entered application reference. Please confirm the reference and try again.</p>
          )}
        </div>
      </div>
    </section>
  );
}
