import WelcomePage from "./pages/WelcomePage";
import MainAppPage from "./pages/MainAppPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function App() {
    return (
        <PrimeReactProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/app" element={<MainAppPage />} />
                </Routes>
            </Router>
        </PrimeReactProvider>
    );
}