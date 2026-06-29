import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import AppSidebar from "../../AppSidebar";
import NavbarPage from '../layout/navbarpage';
import PageMeta from "../common/PageMeta";

const SidebarLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <PageMeta title="Home Pages" description="Welcome to the fittora"></PageMeta>
      <div className="flex min-h-screen w-full">
        
        <AppSidebar />

        <div className="flex flex-col flex-1 min-w-0">

          <NavbarPage></NavbarPage>

          <main className="flex-1 p-6 bg-background overflow-auto">
            {children}
          </main>

        </div>

      </div>
    </SidebarProvider>
  );
};

export default SidebarLayout;