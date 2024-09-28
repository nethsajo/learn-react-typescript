import { Map } from '@/features/app/map';
import { Sidebar } from '@/features/app/sidebar';

export default function AppPage() {
  return (
    <div className="flex h-full flex-col overflow-hidden lg:flex-row lg:rounded-md lg:border lg:border-gray-300">
      <Sidebar />
      <Map />
    </div>
  );
}
