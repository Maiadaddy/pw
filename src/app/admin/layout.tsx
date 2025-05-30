"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import AdminSidebar from "@/components/admin/sidebar";
import { useAdmin } from "@/context/admin-context";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authenticated, ready } = usePrivy();
  const { isAdmin } = useAdmin();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is admin and redirect if not
  useEffect(() => {
    if (ready) {
      if (!authenticated) {
        router.push("/");
      } else if (!isAdmin) {
        // Redirect non-admin users to dashboard
        router.push("/dashboard");
      } else {
        // Add a small delay to ensure smooth transitions
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [ready, authenticated, router, isAdmin]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('admin-sidebar');
      if (sidebar && !sidebar.contains(event.target as Node) && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  if (!ready || !authenticated || isLoading || !isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-solid rounded-full border-t-transparent animate-spin mb-4"></div>
          <p className="text-gray-400 animate-pulse">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar with toggle functionality */}
      <div
        id="admin-sidebar"
        className={`fixed md:static inset-y-0 left-0 z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out shadow-xl`}
      >
        <AdminSidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col overflow-x-hidden">
        {/* Enhanced Mobile header with improved styling and responsiveness */}
        <div className="md:hidden p-3 flex items-center justify-between border-b border-gray-800/30 bg-black shadow-md sticky top-0 z-10 gradient-border-b">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-lg hover:bg-gray-900 transition-colors"
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <Link href="/admin" className="flex items-center space-x-1.5 sm:space-x-2">
            <Image src="/phoenix-logo.svg" alt="Pnyx Institute Logo" width={28} height={28} className="rounded-full shadow-md" />
            <span className="text-base sm:text-lg font-bold text-primary">Admin Command Center</span>
          </Link>

          <div className="w-8 sm:w-10"></div> {/* Empty div for balanced spacing */}
        </div>

        {/* Main content area */}
        <div className="flex-1 p-3 sm:p-5 md:p-8 lg:p-10 pb-24 md:pb-8 overflow-x-hidden max-w-full mx-auto w-full">
          <div className="bg-black rounded-xl shadow-xl border border-gray-800 p-3 sm:p-5 md:p-6 lg:p-8 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}