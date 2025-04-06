import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import faceScan from '../assets/face_scan.png';
import faceIcon from '../assets/icon_face.png';  // Add this import

const LandingPage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(false);

    const handleStartScan = () => {
        setShowModal(true);
    };

    const handleAccept = () => {
        if (isChecked) {
            setShowModal(false);
            navigate('/scan');
        }
    };

    return (
        <div className="landing-page">
            <div className="content">
                <img src={faceScan} alt="Face Scan" className="face-scan-image" />
                <h1>DermaSense</h1>
                <h3>วิเคราะห์ระดับความรุนแรงของสิวด้วยเทคโนโลยีปัญญาประดิษฐ์ที่มีความแม่นยำและรวดเร็ว <br/>
                    ช่วยให้คุณสามารถวางแผนในการดูแลสุขภาพผิวหน้า <br/>
                    และติดตามการรักษาของคุณอย่างมีประสิทธิภาพมากยิ่งขึ้น</h3>
                <div className="face-diagram">
                    <img src={faceIcon} alt="FaceIcon" />
                </div>
                <button className="start-button" onClick={handleStartScan}>
                    Start your Acne scan
                </button>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h1>ประกาศความเป็นส่วนตัว</h1>
                        <div className="consent-text">
                            <p>ท่านต้องมีอายุไม่ต่ำกว่า 16 ปีเพื่อใช้งานเว็บไซต์ของเรา เราจะดำเนินการประมวลผลข้อมูลส่วนบุคคลของท่านรวมถึงรูปภาพที่ท่านอัปโหลดเพื่อวิเคราะห์สภาพผิวและแนะนำวิธีการดูแลที่เหมาะสม
                                <p>การจัดการรูปภาพและข้อมูล</p>
                                <ul>
                                    <li>รูปภาพของท่านจะถูกใช้เพื่อการวิเคราะห์เท่านั้น</li>
                                    <li>ข้อมูลส่วนบุคคลของท่านจะถูกเก็บไว้เพื่อการวิเคราะห์และการให้คำแนะนำ</li>
                                    <li>ข้อมูลส่วนบุคคลของท่านจะถูกลบออกทันทีหลังการใช้งานเสร็จสิ้น</li>
                                </ul>
                            </p>
                        </div>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <label>ฉันเข้าใจและยอมรับข้อกำหนดและเงื่อนไขทั้งหมด</label>
                        </div>
                        <button
                            className={`accept-button ${!isChecked ? 'disabled' : ''}`}
                            onClick={handleAccept}
                            disabled={!isChecked}
                        >
                            ฉันเข้าใจและยอมรับข้อกำหนดและเงื่อนไข
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;