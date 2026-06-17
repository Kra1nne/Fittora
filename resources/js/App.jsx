import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Craft from "./pages/Craft";
import Location from "./pages/Location";
import Collection from "./pages/Collection";
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
                <Route path="/craft" element={<Craft/>}/>
                <Route path="/collection" element={<Collection/>}/>
                <Route path="/location" element={<Location/>}/>

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