import React from 'react';
import StepIndicator from './StepIndicator';
import './TreatmentPage.css';

const TreatmentPage = () => {
    return (
        <div className="treatment-page">
            <StepIndicator currentStep={3} />
            <button className="home-button" onClick={() => window.location.href = '/'}>
                กลับสู่หน้าหลัก
            </button>
        </div>
    );
};

export default TreatmentPage;