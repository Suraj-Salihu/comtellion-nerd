export const faqItems = [
  {
    question: 'What is the NERD registration service?',
    answer:
      'The Comtellion NERD portal is a digital registration support platform that helps customers complete and track their educational registration applications online.',
  },
  {
    question: 'Can I upload supporting documents online?',
    answer:
      'Yes. Customers can upload required documents through the portal and monitor document review status from their dashboard.',
  },
  {
    question: 'How do I track my application?',
    answer:
      'Use the application tracking page and enter your reference number to review your current application status and progress.',
  },
  {
    question: 'Do I have to pay before submitting?',
    answer:
      'The portal supports a mock payment flow for demo purposes. Customers can pay after completing their application details and documents.',
  },
];

export const steps = [
  'Create an account',
  'Complete your application',
  'Upload required documents',
  'Make payment',
  'Wait for review',
  'Download your slip',
];

export const serviceCards = [
  { title: 'NERD Registration', status: 'Available', description: 'Digital application support for NERD registrations and document processing.' },
  { title: 'NYSC Registration', status: 'Coming Soon', description: 'Support for NYSC-related educational registration workflows in future releases.' },
  { title: 'JAMB Services', status: 'Coming Soon', description: 'Planned educational and application support services for future expansion.' },
  { title: 'Other Educational Services', status: 'Coming Soon', description: 'Designed to accommodate future educational services beyond the initial rollout.' },
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
