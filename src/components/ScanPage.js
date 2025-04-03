import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from './StepIndicator';
import './ScanPage.css';
import { useSeverity } from '../context/SeverityContext';

const ScanPage = () => {
    const navigate = useNavigate();
    const { setSeverity } = useSeverity();
    const [selectedImage, setSelectedImage] = useState(null);
    const [showPreview, setShowPreview] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
                setShowPreview(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReUpload = () => {
        setSelectedImage(null);
        setShowPreview(false);
    };

    const handleNext = () => {
        // Here you would normally process the image and determine severity
        const severities = ['mild', 'moderate', 'severe'];
        const randomSeverity = severities[Math.floor(Math.random() * severities.length)];
        setSeverity(randomSeverity);
        navigate('/result');
    };

    return (
        <div className="scan-page">
            <StepIndicator currentStep={1} />
            <h2>ภาพเซลฟี่ 1 รูป</h2>
            <p className="instruction-text">เพื่อการวิเคราะห์ที่แม่นยำและแม่นยำมากขึ้น โปรดปฏิบัติตามคำแนะนำดังต่อไปนี้</p>
            <ul>
                <li>ถอดแว่นตา</li>
                <li>รวบผมที่ปิดใบหน้าและผิวบริเวณใบหน้า</li>
                <li>อยู่ในที่ที่มีแสงสว่างอย่างเพียงพอ</li>
                <li>มองตรงและถ่ายหน้าตรง</li>
            </ul>
            <div className="upload-box">
                <p className="acne-scan-title">Acne scan</p>
                <p>จำเป็นต้องเข้าถึงรูปภาพของคุณเพื่อทำการวิเคราห์รูปภาพของคุณจะใช้เพื่อการวิเคราะห์เท่านั้น รูปภาพจะไม่ถูกเก็บไว้ในระบบและถูกลบออกหลังจากการวิเคราะห์เสร้จสิ้น</p>
            </div>
            {!showPreview ? (
                <>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        id="image-upload"
                        hidden
                    />
                    <label htmlFor="image-upload" className="upload-button">
                        อัพโหลดรูปภาพของคุณ
                    </label>
                </>
            ) : (
                <div className="preview-container">
                    <img src={selectedImage} alt="Preview" className="image-preview" />
                    <div className="button-group">
                        <button className="re-upload-button" onClick={handleReUpload}>
                            อัพโหลดใหม่
                        </button>
                        <button className="next-button" onClick={handleNext}>
                            ถัดไป
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScanPage;