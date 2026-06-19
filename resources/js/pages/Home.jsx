import PageMeta from "../components/common/PageMeta";
import Navbar from "@/components/layout/navbar";
import background from "../assets/img/wardrobe.jpg";
import tshirt from '../assets/img/shirts.png';
import { Button } from "../components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ui/theme-provider";



const Home = () => {
    const { theme } = useTheme();

    const isDark =
        theme === "dark" ||
        (theme === "system" &&
            window.matchMedia("(prefers-color-scheme: light)").matches);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();

        img.onload = () => {
            setLoading(false);
        };

        img.onerror = () => setLoading(false);
        img.src = background;
        img.src = tshirt;
    }, []);
    
    return (
        <main>
            <section className="h-screen bg-cover bg-center"
                    style={{
                        backgroundImage: loading ? "none" : `url(${isDark ? tshirt : background})`,
                    }}>
                <PageMeta title="Home" description="Welcome to the fittora"></PageMeta>
                <header>
                    <Navbar></Navbar>
                </header>
                <div>
                    {loading ? (
                        <div className="absolute lg:right-60  top-1/2 -translate-y-1/2 text-white px-10">
                            <div className="space-y-2.5">
                                <Skeleton className="h-4 w-50 md:ful" />
                                <Skeleton className="h-20 w-60 md:w-150 " />
                                <Skeleton className="h-8 w-34 md:w-30"/>
                            </div>
                        </div>
                    ) : (
                        <div className="absolute md:right-40  top-1/2 -translate-y-1/2 text-white px-10">
                            <p className="font-extrabold tracking-widest">The Tailor's Standard</p>
                            <h1 className="text-4xl md:text-6xl font-bold">The Art of the Perfect Fit</h1>
                            <Button size="lg" className="mt-3 rounded-lg shadow-2xl">
                                <Link to="/collection">Shop Collection</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </section>
            <section>
                
            </section>
        </main>
    );
}

export default Home;