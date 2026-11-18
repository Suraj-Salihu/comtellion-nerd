import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, ShieldAlert, Upload, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/common/FormInput';
import FormSelect from '../../components/common/FormSelect';
import { useDemoPortal } from '../../hooks/useDemoPortal';

const steps = ['Bio-data', 'Contact & Next of Kin', 'Academic Data', 'Supervisors', 'Documents', 'Review'];

const initialForm = {
  title: '', email: '', firstName: '', middleName: '', surname: '', sex: '', dateOfBirth: '', nin: '',
  nationality: 'Nigerian', stateOfResidence: '', lga: '', town: '', residentialAddress: '', phone: '',
  nextOfKinName: '', nextOfKinPhone: '', nextOfKinEmail: '', institution: '', faculty: '', department: '',
  programmeCategory: 'Undergraduate', programmeType: '', matricNumber: '', courseOfStudy: '',
  supervisorTitle: '', supervisorFirstName: '', supervisorMiddleName: '', supervisorSurname: '',
  supervisorPhone: '', supervisorEmail: '', projectTopic: '',
  coSupervisorTitle: '', coSupervisorFirstName: '', coSupervisorMiddleName: '', coSupervisorSurname: '',
  coSupervisorPhone: '', coSupervisorEmail: '',
  hodTitle: '', hodFirstName: '', hodMiddleName: '', hodSurname: '', hodPhone: '', hodEmail: '',
};

const requiredByStep = [
  ['title', 'email', 'firstName', 'surname', 'sex', 'dateOfBirth', 'nin'],
  ['nationality', 'stateOfResidence', 'lga', 'town', 'residentialAddress', 'phone', 'nextOfKinName', 'nextOfKinPhone', 'nextOfKinEmail'],
  ['institution', 'faculty', 'department', 'programmeCategory', 'programmeType', 'matricNumber', 'courseOfStudy'],
  ['supervisorTitle', 'supervisorFirstName', 'supervisorSurname', 'supervisorPhone', 'supervisorEmail', 'projectTopic', 'hodTitle', 'hodFirstName', 'hodSurname', 'hodPhone', 'hodEmail'],
  ['passport', 'identity', 'academicCertificate', 'projectWork'],
];

const fieldGroups = [
  [
    { name: 'title', label: 'Title', type: 'select', options: ['Mr', 'Miss'] },
    { name: 'email', label: 'Email address', type: 'email' },
    { name: 'firstName', label: 'First name' },
    { name: 'middleName', label: 'Middle name' },
    { name: 'surname', label: 'Surname' },
    { name: 'sex', label: 'Sex', type: 'select', options: ['Male', 'Female'] },
    { name: 'dateOfBirth', label: 'Date of birth', type: 'date' },
    { name: 'nin', label: 'NIN (11 digits)', maxLength: 11, inputMode: 'numeric', pattern: '[0-9]{11}', helper: 'Enter exactly 11 digits. This value stays in this browser session only.' },
  ],
  [
    { name: 'nationality', label: 'Nationality' },
    { name: 'stateOfResidence', label: 'State of residence' },
    { name: 'lga', label: 'LGA' },
    { name: 'town', label: 'Town / City' },
    { name: 'residentialAddress', label: 'Residential address', wide: true },
    { name: 'phone', label: 'Phone number', type: 'tel' },
    { name: 'nextOfKinName', label: 'Next of kin full name' },
    { name: 'nextOfKinPhone', label: 'Next of kin phone', type: 'tel' },
    { name: 'nextOfKinEmail', label: 'Next of kin email', type: 'email' },
  ],
  [
    { name: 'institution', label: 'Institution' },
    { name: 'faculty', label: 'Faculty' },
    { name: 'department', label: 'Department' },
    { name: 'programmeCategory', label: 'Programme category', type: 'select', options: ['Undergraduate'] },
    { name: 'programmeType', label: 'Programme type', placeholder: 'e.g. B.Sc, B.A, B.Eng' },
    { name: 'matricNumber', label: 'Matriculation number' },
    { name: 'courseOfStudy', label: 'Course of study' },
  ],
];

const personFields = (prefix, title) => [
  { name: `${prefix}Title`, label: `${title} academic title`, type: 'select', options: ['Prof.', 'Dr.', 'Mr.', 'Mrs.', 'Miss'] },
  { name: `${prefix}FirstName`, label: `${title} first name` },
  { name: `${prefix}MiddleName`, label: `${title} middle name` },
  { name: `${prefix}Surname`, label: `${title} surname` },
  { name: `${prefix}Phone`, label: `${title} phone`, type: 'tel' },
  { name: `${prefix}Email`, label: `${title} email`, type: 'email' },
];

const documentFields = [
  { name: 'passport', label: 'Passport photo', accept: 'image/*' },
  { name: 'identity', label: 'Means of ID (NIN)', accept: 'image/*,.pdf' },
  { name: 'academicCertificate', label: 'Project certification page / degree certificate', accept: 'image/*,.pdf' },
  { name: 'projectWork', label: 'Full project work', accept: '.pdf,.doc,.docx' },
];

function Field({ field, value, onChange, required }) {
  if (field.type === 'select') {
    return (
      <FormSelect
        label={field.label}
        name={field.name}
        value={value}
        onChange={onChange}
        required={required}
        options={[
          { value: '', label: 'Select an option' },
          ...field.options.map((option) => ({ value: option, label: option })),
        ]}
      />
    );
  }

  return (
    <div className={field.wide ? 'md:col-span-2' : ''}>
      <FormInput
        label={field.label}
        name={field.name}
        type={field.type || 'text'}
        value={value}
        onChange={onChange}
        placeholder={field.placeholder || field.label}
        required={required}
        maxLength={field.maxLength}
        inputMode={field.inputMode}
        pattern={field.pattern}
      />
      {field.helper && <p className="mt-1 text-xs text-slate-500">{field.helper}</p>}
    </div>
  );
}

export default function NerdApplicationPage() {
  const { createApplication } = useDemoPortal();
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState({});
  const [notice, setNotice] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [createdApplicationId, setCreatedApplicationId] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const updateFile = (name, file) => {
    setFiles((previous) => ({ ...previous, [name]: file || null }));
  };

  const continueStep = (event) => {
    event.preventDefault();
    const missingField = requiredByStep[currentStep]?.find((name) => {
      if (currentStep === 4) return !files[name];
      return !String(form[name] || '').trim();
    });

    if (missingField) {
      setNotice('Complete the required fields in this section before continuing. These demo form requirements should be confirmed by Comtellion before production.');
      return;
    }

    setNotice('');
    setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
  };

  const saveDraft = () => {
    setNotice('This draft remains only in the current page session; it has not been saved or sent.');
  };

  const submitDemo = () => {
    const application = createApplication(form, files);
    setCreatedApplicationId(application.id);
    setSubmitted(true);
  };

  const currentFields = currentStep < 3
    ? fieldGroups[currentStep]
    : currentStep === 3
      ? [
          ...personFields('supervisor', 'Supervisor'),
          { name: 'projectTopic', label: 'Project topic' },
          ...personFields('coSupervisor', 'Co-supervisor (optional)').map((field) => ({ ...field, optional: true })),
          ...personFields('hod', 'Head of Department'),
        ]
      : [];

  const maskedNin = form.nin ? `•••••••${form.nin.slice(-4)}` : 'Not entered';

  if (submitted) {
    return (
      <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-teal" />
        <h1 className="mt-5 text-2xl font-bold text-slate-900">Demo application created</h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">Reference: <strong>{createdApplicationId}</strong>. This record and its document names exist only in this browser session; no personal information or files were uploaded to a server.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to={`/customer/applications/${createdApplicationId}`} className="rounded-md border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">View customer application</Link>
          <Link to={`/admin/applications/${createdApplicationId}`} className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700">Open staff review</Link>
          <button type="button" onClick={() => { setSubmitted(false); setCurrentStep(0); }} className="rounded-md border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">Start another demo</button>
        </div>
      </section>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">NERD Registration</p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Registration details</h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">Form fields are based on the details supplied by Comtellion. Confirm requirements, formats, and document limits with the service team before launch.</p>
          </div>
          <div className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700">Step {currentStep + 1} of {steps.length}</div>
        </div>

        <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <li key={step} aria-current={index === currentStep ? 'step' : undefined} className={`rounded-lg border px-3 py-2 text-xs font-semibold ${index === currentStep ? 'border-indigo-200 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-slate-50 text-slate-500'}`}>
              {String(index + 1).padStart(2, '0')} · {step}
            </li>
          ))}
        </ol>
      </div>

      <form onSubmit={continueStep} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" noValidate={false}>
        {currentStep < 4 && (
          <section className="space-y-5">
            <h2 className="text-xl font-bold text-slate-900">{steps[currentStep]}</h2>
            {currentStep === 3 && <p className="text-sm text-slate-500">Co-supervisor details are optional, as specified in the supplied form.</p>}
            <div className="grid gap-5 md:grid-cols-2">
              {currentFields.map((field) => (
                <Field
                  key={field.name}
                  field={field}
                  value={form[field.name]}
                  onChange={updateField}
                  required={!field.optional && requiredByStep[currentStep]?.includes(field.name)}
                />
              ))}
            </div>
            {currentStep === 2 && <p className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">Programme category is shown as Undergraduate, following the supplied registration form. Confirm if other categories should be offered.</p>}
          </section>
        )}

        {currentStep === 4 && (
          <section className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Supporting documents</h2>
              <p className="mt-2 text-sm text-slate-600">Choose the four documents listed in the supplied checklist. Files are held in page memory only and are not uploaded.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {documentFields.map((field) => (
                <div key={field.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <label className="block text-sm font-semibold text-slate-800">
                    {field.label}<span className="ml-1 text-rose-600">*</span>
                    <input
                      type="file"
                      accept={field.accept}
                      onChange={(event) => updateFile(field.name, event.target.files?.[0] || null)}
                      className="mt-3 block w-full cursor-pointer text-sm text-slate-600 file:mr-3 file:rounded-md file:border-0 file:bg-indigo-600 file:px-3 file:py-2 file:font-semibold file:text-white hover:file:bg-indigo-700"
                    />
                  </label>
                  {files[field.name] && (
                    <div className="mt-3 flex items-center justify-between gap-3 rounded-lg bg-white p-2 text-xs text-slate-600">
                      <span className="flex min-w-0 items-center gap-2"><FileText className="h-4 w-4 shrink-0" /><span className="truncate">{files[field.name].name}</span></span>
                      <button type="button" onClick={() => updateFile(field.name, null)} aria-label={`Remove ${field.label}`} className="rounded p-1 text-slate-500 hover:bg-rose-50 hover:text-rose-700"><X className="h-4 w-4" /></button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" />
              <p>These files contain sensitive identity and academic information. Do not select real documents in this demo.</p>
            </div>
          </section>
        )}

        {currentStep === 5 && (
          <section className="space-y-5">
            <h2 className="text-xl font-bold text-slate-900">Review your information</h2>
            <p className="text-sm text-slate-600">Sensitive identifiers are masked here. Nothing on this page is submitted to a server.</p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ['Applicant', `${form.title} ${form.firstName} ${form.middleName} ${form.surname}`.trim()],
                ['Email', form.email],
                ['NIN', maskedNin],
                ['Phone', form.phone],
                ['Institution', form.institution],
                ['Faculty / Department', `${form.faculty} / ${form.department}`],
                ['Programme', `${form.programmeCategory} · ${form.programmeType}`],
                ['Course of study', form.courseOfStudy],
                ['Supervisor', `${form.supervisorTitle} ${form.supervisorFirstName} ${form.supervisorSurname}`.trim()],
                ['Project topic', form.projectTopic],
                ['Head of Department', `${form.hodTitle} ${form.hodFirstName} ${form.hodSurname}`.trim()],
                ['Documents selected', `${Object.values(files).filter(Boolean).length} of ${documentFields.length}`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
                  <p className="mt-1 break-words font-semibold text-slate-900">{value || 'Not provided'}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900">
              Submitting this demo will not send your data, process payment, or create an official NERD registration.
            </div>
          </section>
        )}

        {notice && <p role="status" className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">{notice}</p>}

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <button type="button" onClick={() => { setNotice(''); setCurrentStep((step) => Math.max(step - 1, 0)); }} disabled={currentStep === 0} className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={saveDraft} className="rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300">Keep in this session</button>
            {currentStep < steps.length - 1 ? (
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button type="button" onClick={submitDemo} className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
                <Upload className="h-4 w-4" /> Submit demo only
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}