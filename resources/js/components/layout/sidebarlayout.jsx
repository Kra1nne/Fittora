import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import AppSidebar from "../../AppSidebar";

const SidebarLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        
        <AppSidebar />

        <div className="flex flex-col flex-1 min-w-0">

          <header className="h-16 border-b bg-white flex items-center px-4 shadow-sm">
            <SidebarTrigger />
            <h1 className="ml-4 text-lg font-semibold">
              Dashboard
            </h1>
          </header>

          <main className="flex-1 p-6 bg-gray-50 overflow-auto">
            {children}
          </main>

        </div>

      </div>
    </SidebarProvider>
  );
};

export default SidebarLayout;