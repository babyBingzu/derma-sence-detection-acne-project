import React from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from './StepIndicator';
import { useSeverity } from '../context/SeverityContext';
import './ResultPage.css';

const severityData = {
    mild: {
        level: 1,
        title: <span className="severe-title">รุนแรงน้อย</span>,
        description: 'ระดับความรุนแรงน้อย (Mild Acne) เป็นสิวที่พบได้บ่อยและสามารถจัดการได้ง่าย โดยมักเกิดจากการอุดตันของรูขุมขนและการสะสมของน้ำมันใต้ผิวหนัง'
    },
    moderate: {
        level: 2,
        title: <span className="severe-title">รุนแรงปานกลาง</span>,
        description: 'ระดับความรุนแรงปานกลาง (Moderate Acne) เป็นสิวที่มีการอักเสบมากขึ้น โดยมักมีสิวอักเสบหัวแดง สิวหัวหนอง และสิวอุดตันกระจายทั่วใบหน้า อาจเริ่มมีรอยแดงหรือรอยดำจากสิว แต่ยังไม่รุนแรงถึงขั้นเป็นสิวซีสต์หรือสิวเป็นก้อนแข็งลึกใต้ผิวหนัง'
    },
    severe: {
        level: 3,
        title: <span className="severe-title">รุนแรงมาก</span>,
        description: 'ระดับความรุนแรงมาก (Severe Acne) เป็นสิวที่มีการอักเสบรุนแรง มักมีสิวหัวหนองขนาดใหญ่ สิวอักเสบแดงลึก สิวซีสต์ (Cystic Acne) หรือสิวเป็นก้อนแข็งใต้ผิวหนัง และอาจมีรอยแผลเป็นหลุมหรือรอยดำจากสิวจำนวนมาก มักพบทั่วใบหน้าและอาจลามไปถึงหน้าอกหรือหลัง ควรพบแพทย์ผิวหนังเพื่อรับการรักษาที่เหมาะสม'
    }
};

const ResultPage = () => {
    const navigate = useNavigate();
    const { severity } = useSeverity();
    const data = severityData[ severity || 'severe']; //ใช้รับค่าตรงนี้

    return (
        <div className="result-page">
            <StepIndicator currentStep={2} />
            <h2>ระดับความรุนแรงของสิวคุณ</h2>
            <div className="severity-circle">
                <span>{data.level}</span>
            </div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <button 
                className="treatment-button" 
                onClick={() => navigate(`/treatment/${severity || 'mild'}`)}
            >
                แนะนำการรักษา
            </button>
        </div>
    );
};

export default ResultPage;