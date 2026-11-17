import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import FormInput from '../../components/common/FormInput';
import FormSelect from '../../components/common/FormSelect';

const steps = ['Personal Information', 'Educational Information', 'Registration Details', 'Document Upload', 'Review and Confirmation'];

const initialForm = {
  firstName: '',
  middleName: '',
  lastName: '',
  dob: '',
  gender: 'Male',
  phone: '',
  email: '',
  state: 'Lagos',
  lga: 'Ikeja',
  address: '',
  institution: '',
  qualification: 'SSCE',
  graduationYear: '',
  programme: 'NERD Registration',
};

export default function NewApplicationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState(initialForm);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setCurrentStep((value) => Math.min(value + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((value) => Math.max(value - 1, 0));

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">New application</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">NERD Registration form</h1>
          </div>
          <div className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700">Step {currentStep + 1} of {steps.length}</div>
        </div>

        <div className="grid gap-2 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className={`rounded-xl border px-3 py-2 text-xs font-semibold ${index === currentStep ? 'border-indigo-200 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-slate-50 text-slate-500'}`}>
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {currentStep === 0 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-slate-900">Personal Information</h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <FormInput label="First name" name="firstName" value={form.firstName} onChange={updateField} placeholder="First name" required />
              <FormInput label="Middle name" name="middleName" value={form.middleName} onChange={updateField} placeholder="Middle name" />
              <FormInput label="Last name" name="lastName" value={form.lastName} onChange={updateField} placeholder="Last name" required />
              <FormInput label="Date of birth" type="date" name="dob" value={form.dob} onChange={updateField} required />
              <FormSelect label="Gender" name="gender" value={form.gender} onChange={updateField} options={[{ value: 'Male', label: 'Male' }, { value: 'Female', label: 'Female' }, { value: 'Other', label: 'Other' }]} />
              <FormInput label="Phone number" name="phone" value={form.phone} onChange={updateField} placeholder="0802 000 0000" required />
              <FormInput label="Email address" type="email" name="email" value={form.email} onChange={updateField} placeholder="user@example.com" required />
              <FormInput label="State of origin" name="state" value={form.state} onChange={updateField} placeholder="State" required />
              <FormInput label="LGA" name="lga" value={form.lga} onChange={updateField} placeholder="LGA" required />
              <div className="md:col-span-2 xl:col-span-3">
                <FormInput label="Residential address" name="address" value={form.address} onChange={updateField} placeholder="Residential address" required />
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-slate-900">Educational Information</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <FormInput label="Institution" name="institution" value={form.institution} onChange={updateField} placeholder="Institution name" required />
              <FormSelect label="Qualification" name="qualification" value={form.qualification} onChange={updateField} options={[{ value: 'SSCE', label: 'SSCE' }, { value: 'OND', label: 'OND' }, { value: 'HND', label: 'HND' }, { value: 'BSc', label: 'BSc' }]} />
              <FormInput label="Graduation year" type="number" name="graduationYear" value={form.graduationYear} onChange={updateField} placeholder="2023" />
              <FormSelect label="Programme" name="programme" value={form.programme} onChange={updateField} options={[{ value: 'NERD Registration', label: 'NERD Registration' }, { value: 'NYSC Registration', label: 'NYSC Registration' }, { value: 'JAMB Services', label: 'JAMB Services' }]} />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-slate-900">Registration Details</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <FormSelect label="Service type" name="programme" value={form.programme} onChange={updateField} options={[{ value: 'NERD Registration', label: 'NERD Registration' }, { value: 'NYSC Registration', label: 'NYSC Registration' }, { value: 'JAMB Services', label: 'JAMB Services' }]} />
              <FormInput label="Preferred payment method" name="paymentMethod" value="Card" onChange={updateField} placeholder="Card" />
              <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                This is a mock registration flow. It is designed to be easy to swap with real backend validation and official registration requirements later.
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-slate-900">Document Upload</h2>
            <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <FileText className="mx-auto h-10 w-10 text-slate-400" />
              <p className="mt-4 text-lg font-semibold text-slate-700">Upload supporting documents</p>
              <p className="mt-2 text-sm text-slate-500">PDF, JPG, PNG and other documents may be attached here in the future.</p>
              <label className="mt-5 inline-flex cursor-pointer rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
                <input type="file" className="hidden" multiple />
                Select files
              </label>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-slate-900">Review and Confirmation</h2>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-sm text-slate-500">Applicant</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">{form.firstName} {form.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Service</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">{form.programme}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
                Please review the information before you submit this demo application.
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button type="button" onClick={prevStep} disabled={currentStep === 0} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40">
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <div className="flex gap-3">
            <button type="button" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300">Save draft</button>
            <button type="button" onClick={nextStep} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
              {currentStep === steps.length - 1 ? 'Submit application' : 'Continue'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
