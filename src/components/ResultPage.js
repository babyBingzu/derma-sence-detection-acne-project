import React from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from './StepIndicator';
import { useSeverity } from '../context/SeverityContext';
import './ResultPage.css';

const severityData = {
    unnotice:{
        level: 0,
        title: <span className="severe-title">ไม่พบสิว</span>,
        description: 'ระดับที่ไม่พบสิว (Clear Skin or Unnoticeable Acne) ไม่พบลักษณะของสิวที่ชัดเจนบนผิวหน้า อาจเป็นเพราะไม่มีสิวเกิดขึ้นจริง หรือมีสิวขนาดเล็กมากจนไม่สามารถมองเห็นหรือสัมผัสได้ชัดเจน'
        },
    mild: {
        level: 1,
        title: <span className="severe-title">รุนแรงน้อย</span>,
        description: 'ระดับความรุนแรงน้อย (Mild Acneระดับสิวที่พบได้ทั่วไป เป็นสิวที่เกิดจากการอุดตันของรูขุมขนและการสะสมของน้ำมันใต้ผิวหนัง โดยทั่วไปจะพบสิวหัวดำ สิวหัวขาว และบางครั้งมีสิวอักเสบเล็กน้อย'
    },
    moderate: {
        level: 2,
        title: <span className="severe-title">รุนแรงปานกลาง</span>,
        description: 'ระดับความรุนแรงปานกลาง (Moderate Acne) เป็นสิวที่มีการอักเสบมากขึ้น โดยมักมีสิวอักเสบหัวแดง สิวหัวหนอง และสิวอุดตันกระจายอยู่หลายตำแหน่งทั่วใบหน้า อาจเริ่มมีรอยแดงหรือรอยดำจากสิว แต่ยังไม่รุนแรงถึงขั้นเป็นสิวซีสต์หรือสิวเป็นก้อนแข็งลึกใต้ผิวหนัง'
    },
    severe: {
        level: 3,
        title: <span className="severe-title">รุนแรงมาก</span>,
        description: 'ระดับความรุนแรงมาก (Severe Acne) เป็นสิวที่มีการอักเสบรุนแรง มักมีสิวหัวหนองขนาดใหญ่ สิวอักเสบแดงลึก สิวซีสต์ (Cystic Acne) หรือสิวเป็นก้อนแข็งใต้ผิวหนัง และอาจมีรอยแผลเป็นหลุมหรือรอยดำจากสิวจำนวนมาก มักพบทั่วใบหน้าและอาจลามไปถึงหน้าอกหรือหลัง ควรพบแพทย์ผิวหนังเพื่อรับการรักษาที่เหมาะสม จำเป็นต้องรักษาอย่างจริงจังและต่อเนื่องเพื่อลดความเสี่ยงของแผลเป็นถาวร'
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