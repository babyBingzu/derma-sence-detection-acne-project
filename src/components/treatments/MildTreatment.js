import React from 'react';
import StepIndicator from '../StepIndicator';

const MildTreatment = () => {
    return (
        <div className="treatment-page">
            <StepIndicator currentStep={3} />
            <h2>แนะนำการรักษาสิวระดับน้อย</h2>
            <div className="treatment-content">
                <p>การดูแลรักษาสิวระดับน้อย</p>
                <ul>
                    <li>ล้างหน้าวันละ2ครั้งด้วยผลิตภัณฑ์ที่เหมาะกับสภาพผิว</li>
                    <li>ใช้ผลิตภัณฑ์ที่มีส่วนประกอบ เช่น เบนโซอิลเพอร์ออกไซด์ความเข้มข้น 2.5% , กรดซาลิไซลิกความเข้มข้น 0.5-2%</li>
                    <li>หลีกเลี่ยงการบีบหรือแกะสิวเพื่อป้องกันการเกิดรอยแผลเป็น</li>
                    <li>ทาครีมกันแดดที่ไม่อุดตันรูขุมขน(Non-comedogenic sunscreen)</li>
                </ul>
                <p>สิวระดับนี้สามารถรักษาได้ง่าย หากดูแลผิวอย่างถูกวิธีและสม่ำเสมอค่ะ!</p>
            </div>
            <button className="home-button" onClick={() => window.location.href = '/'}>
                กลับสู่หน้าหลัก
            </button>
        </div>
    );
};

export default MildTreatment;