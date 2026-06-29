import { NavLink, Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";


const navigationItems = [
  { name: "Home", url: "/" },
  { name: "The Craft", url: "/craft" },
  { name: "Collection", url: "/collection" },
  { name: "Location", url: "/location" },
];


const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky py-5 left-0 right-0 top-0 z-50 bg-background shadow-md">
      
       {/* Logo */}
        <div className="text-2xl font-bold">
            <NavLink to="/" className="text-primary">Fittora</NavLink>
        </div>
        <div className="hidden md:flex gap-5 ">
                {navigationItems.map((item) => (                
                    <div key={item.url}>
                        <NavLink className={({isActive}) => isActive ? "font-bold text-primary" : "text-black text-semibold hover:text-primary hover:scale-105 transition-all duration-200 inline-block dark:text-white dark:hover:text-green-500"} to={item.url}>{item.name}</NavLink>
                    </div>
            ))}
        </div>
        <div className="hidden md:flex gap-2">
             <div>
                <ModeToggle></ModeToggle>
            </div>
            <Button className="rounded-full">
                <Link to="/signin">Sign In</Link>
            </Button>
            <Button  className="rounded-full" variant="outline" >
                <Link to="/signup">Sign Up</Link>
            </Button>
        </div>
    

        <div className="flex md:hidden gap-2">
            <ModeToggle></ModeToggle>
            <button onClick={() => setOpen(prev => !prev)}><Menu/></button>
        </div>
        
        {open && (
            <div className="md:hidden absolute top-13 left-0 w-full dark:bg-black bg-white shadow-md">
            <div className="flex flex-col p-4 gap-3">
                 {navigationItems.map((item) => (                
                        <div key={item.url}>
                            <NavLink className={({isActive}) => isActive ? " font-bold text-primary" : "text-gray-700 text-semibold hover:text-primary hover:scale-105 transition-all duration-200 inline-block dark:text-white dark:hover:text-green-500"} to={item.url}>{item.name}</NavLink>
                        </div>
                ))}
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
            </div>
        )}

    </header>
  );
};

export default Navbar;