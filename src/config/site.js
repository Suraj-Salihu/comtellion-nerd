export const brand = {
  name: 'Comtellion Services',
  portalName: 'Comtellion NERD Portal',
  shortName: 'Comtellion',
  tagline: 'Your trusted partner for essential services in Nigeria',
  colors: {
    blue: '#1246a0',
    teal: '#1b7d80',
    gold: '#e8b323',
  },
};

export const contactInfo = {
  email: 'comtellion@gmail.com',
  phone: '+234 803 636 4588',
  whatsapp: '+2348036364588',
  address: 'Shop 4 behind Post NCE/Sandwich Office, Park in Choba Campus, Uniport',
};

export const publicNavItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Contact', to: '/contact' },
];

export const customerNavItems = [
  { label: 'Overview', to: '/customer/dashboard' },
  { label: 'My Applications', to: '/customer/applications' },
  { label: 'New Application', to: '/customer/applications/new' },
  { label: 'Payments', to: '/customer/payments' },
  { label: 'Documents', to: '/customer/documents' },
  { label: 'Notifications', to: '/customer/notifications' },
  { label: 'Profile', to: '/customer/profile' },
  { label: 'Help and Support', to: '/customer/help' },
  { label: 'Logout', to: '/' },
];

export const adminNavItems = [
  { label: 'Overview', to: '/admin/dashboard' },
  { label: 'Applications', to: '/admin/applications' },
  { label: 'Payments', to: '/admin/payments' },
  { label: 'Customers', to: '/admin/customers' },
  { label: 'Staff', to: '/admin/staff' },
  { label: 'Notifications', to: '/admin/notifications' },
  { label: 'Reports', to: '/admin/reports' },
  { label: 'Activity Logs', to: '/admin/activity-logs' },
  { label: 'Settings', to: '/admin/settings' },
];

export const statusMeta = {
  draft: { label: 'Draft', color: 'bg-slate-100 text-slate-700 border-slate-200' },
  submitted: { label: 'Submitted', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  under_review: { label: 'Under Review', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  correction_required: { label: 'Correction Required', color: 'bg-orange-100 text-orange-700 border-orange-200' },
  processing: { label: 'Processing', color: 'bg-violet-100 text-violet-700 border-violet-200' },
  completed: { label: 'Completed', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  cancelled: { label: 'Cancelled', color: 'bg-rose-100 text-rose-700 border-rose-200' },
  pending: { label: 'Pending', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  paid: { label: 'Paid', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  failed: { label: 'Failed', color: 'bg-rose-100 text-rose-700 border-rose-200' },
  refunded: { label: 'Refunded', color: 'bg-slate-100 text-slate-700 border-slate-200' },
  uploaded: { label: 'Uploaded', color: 'bg-sky-100 text-sky-700 border-sky-200' },
  approved: { label: 'Approved', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  rejected: { label: 'Rejected', color: 'bg-rose-100 text-rose-700 border-rose-200' },
};
