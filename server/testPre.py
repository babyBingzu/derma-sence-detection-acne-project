from ultralytics import YOLO

model = YOLO("best.pt")
results = model.predict(
    source="D:/pGuide/Ai-lab-temp/acneweb/derma-sence-detection-acne-project/acne-face-2-18.jpg",
    save=True,      # บันทึกภาพผลลัพธ์
)
# นับจำนวน bounding boxes (จำนวนสิวที่ตรวจพบ)
num_acne = len(results[0].boxes)
print("จำนวนสิวที่ตรวจพบ:", num_acne)