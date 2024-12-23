import React from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, Package, LogOut } from "lucide-react";
import { useAuthStore } from "@/contexts/authContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: LayoutProps) {
  const navigate = useNavigate();
  const { logout, user } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Package className="h-8 w-8 text-red-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Painel Admin</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">{user?.name}</span>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 hover:text-gray-900"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="mt-5 px-2">
            <button
              onClick={() => navigate("/dashboard")}
              className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 w-full"
            >
              <LayoutDashboard className="mr-3 h-6 w-6" />
              Painel
            </button>
            <button
              onClick={() => navigate("/plans")}
              className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 w-full"
            >
              <Package className="mr-3 h-6 w-6" />
              Planos
            </button>
            <button
              onClick={() => navigate("/subscriptions")}
              className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 w-full"
            >
              <Users className="mr-3 h-6 w-6" />
              Assinaturas
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
