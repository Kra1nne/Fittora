import React from 'react'
import { SidebarTrigger } from '@/Components/ui/sidebar';
import { ModeToggle } from '../ui/mode-toggle';
import { User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const NavbarPage = () => {
  return (
    <header className="h-16 text-foreground border-b bg-background flex justify-between items-center px-2 md:px-8 shadow-sm">
        <div className='flex'>
            <SidebarTrigger />
            <h1 className="ml-4 text-lg font-semibold hidden md:block">
                Welcome John Doe
            </h1>
        </div>
        <div className='flex gap-5 items-center'>
           <ModeToggle></ModeToggle>
           <div className='border border-black p-2 rounded-full cursor-pointer'>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                        <User />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                        <DropdownMenuItem>Log out</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
           </div>
        </div>
    </header>
  )
}

export default NavbarPage
