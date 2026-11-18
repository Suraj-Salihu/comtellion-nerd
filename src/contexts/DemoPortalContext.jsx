import { useEffect, useRef, useState } from 'react';
import { DemoPortalContext } from './DemoPortalContextValue';
import { adminApplicationRows, customerApplications, paymentHistory, staffMembers } from '../data/mockData';

const demoDocuments = [
  'Passport photo',
  'Means of ID (NIN)',
  'Project certification page / degree certificate',
  'Full project work',
];

const submittedDocumentLabels = {
  passport: 'Passport photo',
  identity: 'Means of ID (NIN)',
  academicCertificate: 'Project certification page / degree certificate',
  projectWork: 'Full project work',
};

const sampleEducation = {
  institution: 'Demo University',
  faculty: 'Sample Faculty',
  department: 'Sample Department',
  programme: 'Undergraduate · B.Sc',
  matricNumber: 'DEMO/2022/1042',
  course: 'Sample Course',
  projectTopic: 'Sample project topic for demonstration',
};

function createDemoApplications() {
  return customerApplications.map((item, index) => {
    const adminRecord = adminApplicationRows.find((row) => row.ref === item.reference);

    return {
      ...item,
      date: item.submittedAt,
      assignedStaff: adminRecord?.staff || 'Unassigned',
      customerEmail: `${item.customer.toLowerCase().replaceAll(' ', '.')}@example.test`,
      customerPhone: '+234 000 000 0000',
      title: 'Mr',
      dateOfBirth: '2000-01-01',
      sex: 'Not specified',
      nationality: 'Nigerian',
      stateOfResidence: 'Rivers',
      lga: 'Demo LGA',
      residentialAddress: 'Demo address, sample record only',
      nextOfKin: { name: 'Demo Next of Kin', phone: '+234 000 000 0000', email: 'nextofkin@example.test' },
      education: { ...sampleEducation },
      supervisor: { name: 'Demo Supervisor', title: 'Dr.', email: 'supervisor@example.test', phone: '+234 000 000 0000' },
      hod: { name: 'Demo Head of Department', title: 'Prof.', email: 'hod@example.test', phone: '+234 000 000 0000' },
      coSupervisor: null,
      documents: demoDocuments.map((name) => ({ name, status: 'uploaded' })),
      notes: '',
      paymentReference: paymentHistory[index % paymentHistory.length].id,
      paymentMethod: paymentHistory[index % paymentHistory.length].method,
      slipName: '',
      slipUrl: '',
      slipReleased: false,
      timeline: [{ status: item.status, date: item.submittedAt, note: 'Demo application record created.' }],
      isDemo: true,
    };
  });
}

export function DemoPortalProvider({ children }) {
  const [applications, setApplications] = useState(createDemoApplications);
  const slipUrls = useRef(new Set());

  useEffect(() => () => slipUrls.current.forEach((url) => URL.revokeObjectURL(url)), []);

  const findApplication = (idOrReference) => applications.find(
    (application) => application.id === idOrReference || application.reference === idOrReference,
  );

  const createApplication = (form, files) => {
    const now = new Date();
    const createdAt = now.toISOString().slice(0, 10);
    const id = `APP-DEMO-${now.getTime()}`;
    const reference = `CT-DEMO-${now.getTime()}`;
    const fullName = [form.title, form.firstName, form.middleName, form.surname].filter(Boolean).join(' ');
    const newApplication = {
      id,
      reference,
      customer: fullName,
      customerEmail: form.email,
      customerPhone: form.phone,
      title: form.title,
      firstName: form.firstName,
      middleName: form.middleName,
      surname: form.surname,
      dateOfBirth: form.dateOfBirth,
      sex: form.sex,
      nin: form.nin,
      nationality: form.nationality,
      stateOfResidence: form.stateOfResidence,
      lga: form.lga,
      town: form.town,
      residentialAddress: form.residentialAddress,
      nextOfKin: { name: form.nextOfKinName, phone: form.nextOfKinPhone, email: form.nextOfKinEmail },
      education: {
        institution: form.institution,
        faculty: form.faculty,
        department: form.department,
        programme: `${form.programmeCategory} · ${form.programmeType}`,
        matricNumber: form.matricNumber,
        course: form.courseOfStudy,
        projectTopic: form.projectTopic,
      },
      supervisor: {
        name: [form.supervisorFirstName, form.supervisorMiddleName, form.supervisorSurname].filter(Boolean).join(' '),
        title: form.supervisorTitle,
        email: form.supervisorEmail,
        phone: form.supervisorPhone,
      },
      coSupervisor: form.coSupervisorFirstName ? {
        name: [form.coSupervisorFirstName, form.coSupervisorMiddleName, form.coSupervisorSurname].filter(Boolean).join(' '),
        title: form.coSupervisorTitle,
        email: form.coSupervisorEmail,
        phone: form.coSupervisorPhone,
      } : null,
      hod: {
        name: [form.hodFirstName, form.hodMiddleName, form.hodSurname].filter(Boolean).join(' '),
        title: form.hodTitle,
        email: form.hodEmail,
        phone: form.hodPhone,
      },
      documents: Object.entries(files).map(([name, file]) => ({
        name: submittedDocumentLabels[name] || name,
        fileName: file.name,
        status: 'uploaded',
      })),
      status: 'submitted',
      paymentStatus: 'pending',
      amount: 'Not configured',
      paymentReference: 'Not paid',
      paymentMethod: 'Not specified',
      assignedStaff: 'Unassigned',
      date: createdAt,
      submittedAt: createdAt,
      notes: '',
      slipName: '',
      slipUrl: '',
      slipReleased: false,
      timeline: [{ status: 'submitted', date: createdAt, note: 'Customer submitted a demo application in this browser session.' }],
      isDemo: true,
    };

    setApplications((current) => [newApplication, ...current]);
    return newApplication;
  };

  const updateApplication = (idOrReference, updates) => {
    setApplications((current) => current.map((application) => {
      if (application.id !== idOrReference && application.reference !== idOrReference) return application;

      const { timelineNote, ...applicationUpdates } = updates;
      const next = { ...application, ...applicationUpdates };
      if (updates.status && updates.status !== application.status) {
        next.timeline = [
          ...application.timeline,
          { status: updates.status, date: new Date().toISOString().slice(0, 10), note: timelineNote || 'Updated by demo staff.' },
        ];
      }
      return next;
    }));
  };

  const updateDocumentStatus = (idOrReference, documentName, status) => {
    const application = findApplication(idOrReference);
    if (!application) return;

    updateApplication(idOrReference, {
      documents: application.documents.map((document) => (
        document.name === documentName ? { ...document, status } : document
      )),
    });
  };

  const uploadSlip = (idOrReference, file) => {
    const application = findApplication(idOrReference);
    if (!application || !file) return false;

    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    if (!isPdf) return false;

    if (application.slipUrl) {
      URL.revokeObjectURL(application.slipUrl);
      slipUrls.current.delete(application.slipUrl);
    }
    const slipUrl = URL.createObjectURL(file);
    slipUrls.current.add(slipUrl);
    updateApplication(idOrReference, {
      slipName: file.name,
      slipUrl,
      slipReleased: false,
      slipUploadedAt: new Date().toISOString().slice(0, 10),
    });
    return true;
  };

  return (
    <DemoPortalContext.Provider value={{ applications, findApplication, createApplication, updateApplication, updateDocumentStatus, uploadSlip, staffMembers }}>
      {children}
    </DemoPortalContext.Provider>
  );
}

