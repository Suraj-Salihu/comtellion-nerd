import { FileText } from 'lucide-react';
import DashboardHeader from '../../components/layout/DashboardHeader';
import StatusBadge from '../../components/common/StatusBadge';
import { documents } from '../../data/mockData';

export default function DocumentsPage() {
  return (
    <div>
      <DashboardHeader title="Documents" subtitle="Manage uploaded files and review status" />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {documents.map((doc) => (
          <div key={doc.name} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-100 p-2 text-slate-700"><FileText className="h-4 w-4" /></div>
                <div>
                  <p className="font-semibold text-slate-900">{doc.name}</p>
                  <p className="text-xs text-slate-500">{doc.type}</p>
                </div>
              </div>
              <StatusBadge status={doc.status} />
            </div>
            <p className="mt-4 text-sm text-slate-500">Uploaded on {doc.uploadedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
