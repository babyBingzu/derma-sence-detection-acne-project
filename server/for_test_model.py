from ultralytics import YOLO

model = YOLO("best.pt")
results = model.predict(
    source="",
    save=True,      # บันทึกภาพผลลัพธ์
)
# นับจำนวน bounding boxes (จำนวนสิวที่ตรวจพบ)
num_acne = len(results[0].boxes)
print("จำนวนสิวที่ตรวจพบ:", num_acne)
