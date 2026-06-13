import PageMeta from "../components/common/PageMeta";
import Navbar from "@/components/layout/navbar";

const Home = () => {
    return (
        <main>
            <PageMeta title="Home" description="Welcome to the fittora"></PageMeta>
            <header>
                <Navbar></Navbar>
            </header>
            
        </main>
    );
}

export default Home;