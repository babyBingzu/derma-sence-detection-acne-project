import React from 'react';
import StepIndicator from '../StepIndicator';

const SevereTreatment = () => {
    return (
        <div className="treatment-page">
            <StepIndicator currentStep={3} />
            <h2>แนะนำการรักษาสิวระดับรุนแรง</h2>
            <div className="treatment-content">
                <p>การดูแลรักษาสิวระดับรุนแรง</p>
                <ul>
                    <li>สิวรุนแรงควรได้รับการรักษาโดยแพทย์ อาจต้องใช้ยาทาหรือยากิน เช่น ยาปฏิชีวนะ (Antibiotics), Isotretinoin หรือ ยาฮอร์โมน</li>
                    <li>ลดอาหารที่มีน้ำตาลสูง ของทอด นมวัว และดื่มน้ำให้เพียงพอ</li>
                    <li>หลีกเลี่ยงการแกะเกา หรือบีบสิว</li>
                    <li>ใช้ผลิตภัณฑ์ที่แพทย์แนะนำอย่างเคร่งครัด</li>
                    <li>ใช้ครีมกันแดดที่เหมาะกับผิวเป็นสิวเพื่อป้องกันรอยดำจากสิว</li>
                </ul>
                <p>การรักษาสิวรุนแรงอาจใช้เวลานานควรอดทนและปฏิบัติตามคำแนะนำของแพทย์อย่างเคร่งครัดเพื่อป้องกันการเกิดแผลเป็นถาวร😊</p>
            </div>
            <button className="home-button" onClick={() => window.location.href = '/'}>
                กลับสู่หน้าหลัก
            </button>
        </div>
    );
};

export default SevereTreatment;