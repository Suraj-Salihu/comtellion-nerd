export const faqItems = [
  {
    question: 'What NERD services does Comtellion provide?',
    answer:
      'Comtellion lists NERD registration, academic records upload, verification and clearance, and clearance slip issuance among its services.',
  },
  {
    question: 'Which documents are listed for this registration?',
    answer:
      'The checklist supplied by Comtellion includes a passport photo, means of ID (NIN), project certification page or degree certificate, and the full project work in PDF or Word format.',
  },
  {
    question: 'How do I send my registration details to Comtellion?',
    answer:
      'The details supplied direct customers to Comtellion via WhatsApp at +234 803 636 4588 and documents to comtellion@gmail.com. Online submission and tracking in this portal are demo-only until connected to a backend.',
  },
  {
    question: 'Is this the official NERD portal?',
    answer:
      'No. This is Comtellion Services’ customer registration support portal. Comtellion is not the owner or operator of the official NERD platform.',
  },
];

export const steps = [
  'Create a customer account',
  'Complete the NERD registration details',
  'Prepare the listed supporting documents',
  'Send the details to Comtellion for processing',
  'Follow up with Comtellion about verification and clearance',
  'Receive the clearance slip when issued',
];

export const serviceCards = [
  { title: 'NERD Registration', status: 'Comtellion service', description: 'Support to prepare and submit customer details for NERD registration.' },
  { title: 'Academic Records Upload', status: 'Comtellion service', description: 'Assistance with the academic records upload step.' },
  { title: 'Verification & Clearance', status: 'Comtellion service', description: 'Support through verification and clearance processing.' },
  { title: 'Clearance Slip Issuance', status: 'Comtellion service', description: 'Follow-up for the clearance slip after it is issued.' },
];

export const customerApplications = [
  {
    id: 'APP-1042',
    service: 'NERD Registration',
    submittedAt: '2026-11-01',
    paymentStatus: 'paid',
    status: 'under_review',
    amount: '₦24,000',
    customer: 'Ada Okafor',
    reference: 'CT-202611-1042',
  },
  {
    id: 'APP-1043',
    service: 'NERD Registration',
    submittedAt: '2026-11-05',
    paymentStatus: 'pending',
    status: 'submitted',
    amount: '₦24,000',
    customer: 'Chike Nwosu',
    reference: 'CT-202611-1043',
  },
  {
    id: 'APP-1047',
    service: 'NERD Registration',
    submittedAt: '2026-11-09',
    paymentStatus: 'paid',
    status: 'processing',
    amount: '₦24,000',
    customer: 'Maryam Yusuf',
    reference: 'CT-202611-1047',
  },
  {
    id: 'APP-1051',
    service: 'NERD Registration',
    submittedAt: '2026-11-12',
    paymentStatus: 'paid',
    status: 'completed',
    amount: '₦24,000',
    customer: 'Tobi Adebayo',
    reference: 'CT-202611-1051',
  },
  {
    id: 'APP-1058',
    service: 'NERD Registration',
    submittedAt: '2026-11-14',
    paymentStatus: 'failed',
    status: 'correction_required',
    amount: '₦24,000',
    customer: 'Grace Eze',
    reference: 'CT-202611-1058',
  },
];

export const paymentHistory = [
  { id: 'PY-2001', amount: '₦24,000', date: '2026-11-01', method: 'Card', status: 'paid' },
  { id: 'PY-2002', amount: '₦7,500', date: '2026-11-05', method: 'Bank Transfer', status: 'pending' },
  { id: 'PY-2003', amount: '₦12,000', date: '2026-11-09', method: 'Wallet', status: 'paid' },
  { id: 'PY-2004', amount: '₦5,000', date: '2026-11-14', method: 'Card', status: 'failed' },
];

export const documents = [
  { name: 'Passport Photograph', type: 'Image', status: 'approved', uploadedAt: '2026-11-01' },
  { name: 'Academic Certificate', type: 'PDF', status: 'under_review', uploadedAt: '2026-11-03' },
  { name: 'Birth Certificate', type: 'PDF', status: 'uploaded', uploadedAt: '2026-11-05' },
  { name: 'ID Card', type: 'Image', status: 'rejected', uploadedAt: '2026-11-07' },
];

export const notifications = [
  { id: 1, title: 'Application under review', detail: 'Your NERD application has moved to review stage.', time: '2 hours ago', read: false },
  { id: 2, title: 'Payment confirmed', detail: 'Your payment for APP-1047 was confirmed successfully.', time: '1 day ago', read: true },
  { id: 3, title: 'Document required', detail: 'Please upload a clearer copy of your birth certificate.', time: '3 days ago', read: false },
];

export const staffMembers = [
  { name: 'Aisha Bello', email: 'aisha@comtellion.com', role: 'Super Admin', status: 'Active' },
  { name: 'Kelechi Okafor', email: 'kelechi@comtellion.com', role: 'Manager', status: 'Active' },
  { name: 'Emmanuel Ibe', email: 'emmanuel@comtellion.com', role: 'Registration Officer', status: 'Active' },
  { name: 'Ruth Adeyemi', email: 'ruth@comtellion.com', role: 'Finance Officer', status: 'Inactive' },
];

export const recentActivities = [
  { user: 'Aisha Bello', action: 'Reviewed application APP-1042', time: '10 minutes ago' },
  { user: 'Emmanuel Ibe', action: 'Updated status for APP-1058', time: '46 minutes ago' },
  { user: 'Ruth Adeyemi', action: 'Recorded payment for PY-2003', time: '2 hours ago' },
];

export const adminApplicationRows = [
  { customer: 'Ada Okafor', ref: 'CT-202611-1042', date: '2026-11-01', payment: 'paid', status: 'under_review', staff: 'Emmanuel Ibe' },
  { customer: 'Chike Nwosu', ref: 'CT-202611-1043', date: '2026-11-05', payment: 'pending', status: 'submitted', staff: 'Unassigned' },
  { customer: 'Maryam Yusuf', ref: 'CT-202611-1047', date: '2026-11-09', payment: 'paid', status: 'processing', staff: 'Aisha Bello' },
  { customer: 'Grace Eze', ref: 'CT-202611-1058', date: '2026-11-14', payment: 'failed', status: 'correction_required', staff: 'Kelechi Okafor' },
];

export const dashboardStats = [
  { label: 'Total applications', value: '1,284', change: '+12.4%' },
  { label: 'Pending applications', value: '246', change: '+8.2%' },
  { label: 'Completed', value: '968', change: '+16.1%' },
  { label: 'Total revenue', value: '₦31.4M', change: '+9.7%' },
];
