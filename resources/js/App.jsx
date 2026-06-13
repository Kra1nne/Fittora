import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import SignIpPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Analytics from "./pages/dashboard/analytics";
import ResetPage from "./pages/auth/ResetPage";
import OTPPage from "./pages/auth/OTPPage";
import NewPasswordPage from "./pages/auth/NewPasswordPage";

function App() {
    return (
        <>
            <Routes>
                {/* Landing Page */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>

                {/* Auth */}
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/signin" element={<SignIpPage/>}/>
                <Route path="/forgot-password" element={<ResetPage/>}/>
                <Route path="/otp" element={<OTPPage/>}/>
                <Route path="/new-password" element={<NewPasswordPage/>}/>

                {/* Pages */}
                <Route path="/analytics" element={<Analytics/>} />
            </Routes>
        </>
    );
}

export default App;