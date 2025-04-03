import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ScanPage from './components/ScanPage';
import ResultPage from './components/ResultPage';
import TreatmentPage from './components/TreatmentPage';
import './App.css';
import { SeverityProvider } from './context/SeverityContext';
import MildTreatment from './components/treatments/MildTreatment';
import ModerateTreatment from './components/treatments/ModerateTreatment';
import SevereTreatment from './components/treatments/SevereTreatment';

function App() {
    return (
        <SeverityProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/scan" element={<ScanPage />} />
                    <Route path="/result" element={<ResultPage />} />
                    <Route path="/treatment/mild" element={<MildTreatment />} />
                    <Route path="/treatment/moderate" element={<ModerateTreatment />} />
                    <Route path="/treatment/severe" element={<SevereTreatment />} />
                </Routes>
            </Router>
        </SeverityProvider>
    );
}

export default App;
