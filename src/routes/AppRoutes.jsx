import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import AuthLayout from '../layouts/AuthLayout';
import CustomerLayout from '../layouts/CustomerLayout';
import AdminLayout from '../layouts/AdminLayout';
import HomePage from '../pages/public/HomePage';
import AboutPage from '../pages/public/AboutPage';
import ServicesPage from '../pages/public/ServicesPage';
import HowItWorksPage from '../pages/public/HowItWorksPage';
import ContactPage from '../pages/public/ContactPage';
import TrackApplicationPage from '../pages/public/TrackApplicationPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';
import CustomerDashboardPage from '../pages/customer/CustomerDashboardPage';
import NewApplicationPage from '../pages/customer/NewApplicationPage';
import ApplicationListPage from '../pages/customer/ApplicationListPage';
import ApplicationDetailPage from '../pages/customer/ApplicationDetailPage';
import PaymentsPage from '../pages/customer/PaymentsPage';
import DocumentsPage from '../pages/customer/DocumentsPage';
import NotificationsPage from '../pages/customer/NotificationsPage';
import ProfilePage from '../pages/customer/ProfilePage';
import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import AdminApplicationsPage from '../pages/admin/AdminApplicationsPage';
import AdminApplicationDetailPage from '../pages/admin/AdminApplicationDetailPage';
import AdminPaymentsPage from '../pages/admin/AdminPaymentsPage';
import AdminCustomersPage from '../pages/admin/AdminCustomersPage';
import AdminStaffPage from '../pages/admin/AdminStaffPage';
import AdminNotificationsPage from '../pages/admin/AdminNotificationsPage';
import AdminReportsPage from '../pages/admin/AdminReportsPage';
import AdminActivityLogsPage from '../pages/admin/AdminActivityLogsPage';
import AdminSettingsPage from '../pages/admin/AdminSettingsPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/track" element={<TrackApplicationPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Route>

      <Route path="/customer" element={<CustomerLayout />}>
        <Route path="dashboard" element={<CustomerDashboardPage />} />
        <Route path="applications" element={<ApplicationListPage />} />
        <Route path="applications/new" element={<NewApplicationPage />} />
        <Route path="applications/:id" element={<ApplicationDetailPage />} />
        <Route path="payments" element={<PaymentsPage />} />
        <Route path="documents" element={<DocumentsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="help" element={<CustomerDashboardPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="applications" element={<AdminApplicationsPage />} />
        <Route path="applications/:id" element={<AdminApplicationDetailPage />} />
        <Route path="payments" element={<AdminPaymentsPage />} />
        <Route path="customers" element={<AdminCustomersPage />} />
        <Route path="staff" element={<AdminStaffPage />} />
        <Route path="notifications" element={<AdminNotificationsPage />} />
        <Route path="reports" element={<AdminReportsPage />} />
        <Route path="activity-logs" element={<AdminActivityLogsPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
