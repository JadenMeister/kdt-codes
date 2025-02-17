import json
import os

students = [
  "김민지",
  "김요훈",
  "김윤지",
  "김재승",
  "손정민",
  "안은별",
  "윤종환",
  "최정민",
  "최현준",
  "전선일",
]


os.makedirs('student-info', exist_ok = True)

for member in students:
  with open(f'student-info/{member}.json', 'w', encoding="utf-8") as f:json.dump({"name":member}, f, ensure_ascii=False, indent=2)
  
  print("디렉토리 확인")