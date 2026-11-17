import { steps } from '../../data/mockData';

export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">How it works</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">A smooth, guided application process</h1>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step} className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">{index + 1}</div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">{step}</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Customers go through a clear digital journey: create their account, complete the application, submit supporting documents, pay the required amount, and receive updates as the application is reviewed and processed.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
