import PageMeta from "../components/common/PageMeta";
import Navbar from "@/components/layout/navbar";
import background from "../assets/img/wardrobe.jpg";
import { Button } from "../components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const Home = () => {
    const [loading, setLoading] = useState(false);
    
    return (
        <main>
            <section className="h-screen bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${background})`,
                    }}>
                <PageMeta title="Home" description="Welcome to the fittora"></PageMeta>
                <header>
                    <Navbar></Navbar>
                </header>
                <div>
                    <div className="absolute md:right-40  top-1/2 -translate-y-1/2 text-white px-10">
                        <p className="font-extrabold tracking-widest">The Tailor's Standard</p>
                        <h1 className="text-4xl md:text-6xl font-bold">The Art of the Perfect Fit</h1>
                        <Button size="lg" className="mt-3 rounded-lg shadow-2xl">Shop Collection</Button>
                    </div>
                </div>
            </section>
            <section>
                
            </section>
        </main>
    );
}

export default Home;