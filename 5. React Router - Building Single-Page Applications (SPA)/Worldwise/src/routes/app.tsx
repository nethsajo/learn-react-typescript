import { Map } from '@/features/app/map';
import { Sidebar } from '@/features/app/sidebar';

export default function AppPage() {
  return (
    <div className="flex h-full flex-col lg:flex-row lg:p-6">
      <Sidebar />
      <Map />
    </div>
  );
}
