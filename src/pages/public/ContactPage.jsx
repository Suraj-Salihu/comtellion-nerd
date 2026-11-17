import { Mail, MapPin, PhoneCall, Send } from 'lucide-react';
import { contactInfo } from '../../config/site';

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Contact</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">Contact Comtellion support</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-indigo-50 p-3 text-indigo-700"><Mail className="h-5 w-5" /></div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</p>
              <p className="mt-2 text-base font-medium text-slate-800">{contactInfo.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700"><PhoneCall className="h-5 w-5" /></div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Phone</p>
              <p className="mt-2 text-base font-medium text-slate-800">{contactInfo.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-sky-50 p-3 text-sky-700"><MapPin className="h-5 w-5" /></div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Location</p>
              <p className="mt-2 text-base font-medium text-slate-800">{contactInfo.address}</p>
            </div>
          </div>

          <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`} className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600">
            <Send className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>

        <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Full name
              <input className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="Your name" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Email
              <input type="email" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="your@email.com" />
            </label>
          </div>
          <label className="mt-5 block text-sm font-medium text-slate-700">
            Subject
            <input className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="How can we help?" />
          </label>
          <label className="mt-5 block text-sm font-medium text-slate-700">
            Message
            <textarea rows="6" className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" placeholder="Tell us more about your request" />
          </label>
          <button type="button" className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">Send message</button>
        </form>
      </div>
    </section>
  );
}
