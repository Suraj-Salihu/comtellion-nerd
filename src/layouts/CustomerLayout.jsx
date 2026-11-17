import { Outlet } from 'react-router-dom';
import CustomerSidebar from '../components/layout/CustomerSidebar';

export default function CustomerLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-[1600px] flex-col lg:flex-row">
        <CustomerSidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
