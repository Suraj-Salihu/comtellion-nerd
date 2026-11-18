import { ArrowRight, BadgeCheck, BookOpen, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqItems, serviceCards, steps } from '../../data/mockData';
import { contactInfo } from '../../config/site';

export default function HomePage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
              Comtellion NERD Portal
            </span>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Educational Registration, Made Easier.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Comtellion Services assists customers with NERD registration, academic records upload, verification and clearance, and clearance slip issuance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/register" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
                Start Registration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/track" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
                Track Application
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-7 text-white shadow-lg sm:p-9">
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-indigo-800/50 to-transparent" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">NERD services</p>
              <h2 className="mt-3 max-w-md text-3xl font-bold">Support at each stage of the process</h2>
              <ul className="mt-7 space-y-4">
                {['Registration', 'Academic records upload', 'Verification and clearance', 'Clearance slip issuance'].map((service, index) => (
                  <li key={service} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-bold text-slate-900">{index + 1}</span>
                    <span className="font-medium text-slate-100">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Introduction</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Purpose-built for a smoother registration journey</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <BookOpen className="h-10 w-10 rounded-xl bg-indigo-50 p-2 text-indigo-700" />
              <h3 className="mt-5 text-xl font-semibold text-slate-900">Digital-first registration</h3>
              <p className="mt-2 text-slate-600">Prepare the registration details provided by Comtellion and follow up on the processing steps.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <ShieldCheck className="h-10 w-10 rounded-xl bg-emerald-50 p-2 text-emerald-700" />
              <h3 className="mt-5 text-xl font-semibold text-slate-900">Trusted process flow</h3>
              <p className="mt-2 text-slate-600">Keep the NERD registration information and the supplied academic documents together for processing.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Users className="h-10 w-10 rounded-xl bg-sky-50 p-2 text-sky-700" />
              <h3 className="mt-5 text-xl font-semibold text-slate-900">Customer-first experience</h3>
              <p className="mt-2 text-slate-600">Contact Comtellion directly for questions about requirements, processing, and clearance slip availability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">A simple process for every application</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">0{index + 1}</div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{step}</h3>
                <p className="mt-3 text-slate-600">Each step is designed to keep customers informed while staff review applications with clarity and consistency.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Why register with us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Benefits designed for convenient, secure processing</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              'Online account management',
              'Upload documents securely',
              'Track application progress',
              'Easy payment processing status',
            ].map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                <BadgeCheck className="h-6 w-6 text-indigo-300" />
                <p className="mt-4 text-base font-medium text-slate-100">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Available services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">NERD services offered by Comtellion</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">{card.status}</div>
                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">FAQs</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Comtellion Services · Uniport</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Need help with your application?</h2>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <a href={`mailto:${contactInfo.email}`} className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300">{contactInfo.email}</a>
              <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`} className="rounded-md bg-brand-teal px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90">WhatsApp support</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
