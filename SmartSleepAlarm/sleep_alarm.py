import cv2
import numpy as np
import winsound

# Load haarcascade files
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier('haarcascade_eye.xml')

# Start webcam
cap = cv2.VideoCapture(0)

closed_eyes_frames = 0

while True:
    ret, frame = cap.read()
    if not ret:
        break

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    faces = face_cascade.detectMultiScale(gray, 1.3, 5)

    eyes_detected = 0

    for (x, y, w, h) in faces:
        roi_gray = gray[y:y+h, x:x+w]
        roi_color = frame[y:y+h, x:x+w]

        eyes = eye_cascade.detectMultiScale(roi_gray)

        for (ex, ey, ew, eh) in eyes:
            eyes_detected += 1
            cv2.rectangle(roi_color, (ex, ey), (ex+ew, ey+eh), (0,255,0), 2)

    # Check eyes condition
    if eyes_detected == 0:
        closed_eyes_frames += 1
    else:
        closed_eyes_frames = 0

    # If eyes closed for some time → alarm
    if closed_eyes_frames > 15:
        cv2.putText(frame, "WAKE UP!!!", (50,100),
                    cv2.FONT_HERSHEY_SIMPLEX, 1.5, (0,0,255), 3)

        # Continuous alarm
        winsound.Beep(2500, 1000)

    cv2.imshow('Sleep Alert System', frame)

    # Press Q to exit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
