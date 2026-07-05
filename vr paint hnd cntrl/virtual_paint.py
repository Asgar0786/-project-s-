import cv2
import mediapipe as mp
import numpy as np
import math

# Mediapipe hands setup
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(max_num_hands=1)
mp_draw = mp.solutions.drawing_utils

# Colors
colors = [(255,0,0), (0,255,0), (0,0,255), (0,0,0)]  # Blue, Green, Red, Eraser
color_index = 0

# Video capture
cap = cv2.VideoCapture(0)

# Read one frame to get size
ret, temp_frame = cap.read()
if not ret:
    print("Webcam not detected!")
    exit()
h, w, c = temp_frame.shape

# Canvas setup (match webcam size)
canvas = np.zeros((h, w, 3), dtype=np.uint8)

def calc_distance(p1, p2):
    return math.sqrt((p2[0]-p1[0])**2 + (p2[1]-p1[1])**2)

prev_x, prev_y = 0, 0

while True:
    ret, frame = cap.read()
    if not ret:
        break

    frame = cv2.flip(frame, 1)  # Mirror image
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    result = hands.process(rgb)

    if result.multi_hand_landmarks:
        for handLms in result.multi_hand_landmarks:
            mp_draw.draw_landmarks(frame, handLms, mp_hands.HAND_CONNECTIONS)

            # Finger tips positions
            index_tip = handLms.landmark[mp_hands.HandLandmark.INDEX_FINGER_TIP]
            thumb_tip = handLms.landmark[mp_hands.HandLandmark.THUMB_TIP]
            pinky_tip = handLms.landmark[mp_hands.HandLandmark.PINKY_TIP]

            index_pos = (int(index_tip.x * w), int(index_tip.y * h))
            thumb_pos = (int(thumb_tip.x * w), int(thumb_tip.y * h))
            pinky_pos = (int(pinky_tip.x * w), int(pinky_tip.y * h))

            # ----- Pinch (Thumb+Index) to change color -----
            if calc_distance(index_pos, thumb_pos) < 40:
                color_index = (color_index + 1) % len(colors)

            # ----- Draw on canvas using index finger -----
            if prev_x == 0 and prev_y == 0:
                prev_x, prev_y = index_pos

            cv2.line(canvas, (prev_x, prev_y), index_pos, colors[color_index], 5)
            prev_x, prev_y = index_pos

            # ----- Fist (Thumb+Pinky) to clear canvas -----
            if calc_distance(thumb_pos, pinky_pos) < 40:
                canvas = np.zeros((h, w, 3), dtype=np.uint8)

    else:
        prev_x, prev_y = 0, 0  # Reset if no hand

    # Overlay canvas on frame
    frame = cv2.addWeighted(frame, 0.5, canvas, 0.5, 0)
    cv2.putText(frame, "Pinch (Thumb+Index) to change color | Fist to clear", (10,30),
                cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255,255,255), 2)

    cv2.imshow("Virtual Drawing", frame)

    if cv2.waitKey(1) & 0xFF == 27:  # ESC key
        break

cap.release()
cv2.destroyAllWindows()
