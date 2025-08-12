import WelcomePage from "./pages/WelcomePage";
import MainAppPage from "./pages/MainAppPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/app" element={<MainAppPage />} />
            </Routes>
        </Router>
    );
}