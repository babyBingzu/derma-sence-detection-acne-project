from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse, StreamingResponse
import cv2
import numpy as np
from ultralytics import YOLO
import io
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
model = YOLO("best.pt")  # โหลดโมเดล YOLO
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # อนุญาตทุกโดเมน หรือระบุเป็น ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],  # อนุญาตทุก Method (GET, POST, PUT, DELETE)
    allow_headers=["*"],  # อนุญาตทุก Header
)

@app.post("/detect_acne/")
async def detect_acne(file: UploadFile = File(...)):
    # อ่านภาพจากไฟล์
    contents = await file.read()
    nparr = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # ตรวจจับสิวด้วย YOLO
    results = model(img)
    
    # วาด Bounding Box ลงบนภาพ
    for box in results[0].boxes:
        x1, y1, x2, y2 = map(int, box.xyxy[0])
        cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)

    num_acne = len(results[0].boxes)  # นับจำนวนสิวที่ตรวจพบ
    return JSONResponse(content={"num_acne": num_acne})