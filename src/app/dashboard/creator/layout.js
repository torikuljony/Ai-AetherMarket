import CreatorSidebar from "@/components/dashboard/CreatorSidebar";


export default function CreatorLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">

      <div className="flex">
        {/* Sidebar */}
        <CreatorSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
