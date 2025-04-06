import React from 'react';
import StepIndicator from '../StepIndicator';

const ModerateTreatment = () => {
    return (
        <div className="treatment-page">
            <StepIndicator currentStep={3} />
            <h2>แนะนำการรักษาสิวระดับปานกลาง</h2>
            <div className="treatment-content">
                <p>การดูแลรักษาสิวระดับปานกลาง</p>
                <ul>
                    <li>ล้างหน้าวันละ 2 ครั้งด้วยผลิตภัณฑ์สำหรับผิวที่เป็นสิว</li>
                    <li>เลือกผลิตภัณฑ์ที่มี Benzoyl Peroxide, Salicylic Acid หรือ Niacinamide ช่วยลดการอักเสบและสิวอุดตัน</li>
                    <li>ใช้กันแดดสูตรสำหรับผิวเป็นสิวเพื่อลดการระคายเคืองจากแสงแดด</li>
                    <li>ควบคุมอาหารหลีกเลี่ยงของทอด น้ำตาล และนอนหลับพักผ่อนให้เพียงพอ</li>
                    <li>หากสิวไม่ลดลงใน 2-3 เดือน ควรปรึกษาแพทย์เพื่อรับยารักษาสิวที่เหมาะสม</li>
                </ul>
                <p>Tip : หากต้องการให้สิวดีขึ้นเร็วขึ้น ควรใช้ผลิตภัณฑ์อย่างสม่ำเสมอและใจเย็นกับกระบวนการรักษา</p>
            </div>
            <button className="home-button" onClick={() => window.location.href = '/'}>
                กลับสู่หน้าหลัก
            </button>
        </div>
    );
};

export default ModerateTreatment;