import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from "@/Components/ui/sidebar";

import {
    Home,
    Users,
} from "lucide-react";

const sideBarItem = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: <Home />
  },
  {
    name: 'Users',
    url: '/user',
    icon: <Users />
  }
] 
const AppSidebar = () => {
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
        <div className="p-4 flex justify-center font-bold text-xl">
          {isCollapsed ? "F" : "Fittora"}
        </div>

          <SidebarGroupContent className="py-3">
            <SidebarMenu>
              {sideBarItem.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={`flex items-center ${
                        isCollapsed ? "justify-center" : "gap-2"
                      }`}
                    >
                      {item.icon}

                      {!isCollapsed && (
                        <span>{item.name}</span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;