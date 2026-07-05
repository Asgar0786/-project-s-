import cv2
import mediapipe as mp
import pyautogui
import math
import time

# Mediapipe hands setup
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(max_num_hands=1)
mp_draw = mp.solutions.drawing_utils

# Video capture
cap = cv2.VideoCapture(0)

# Get screen size for cursor mapping
screen_width, screen_height = pyautogui.size()

# Gesture cooldown flag
gesture_cooldown = False

def calc_distance(p1, p2):
    return math.sqrt((p2[0]-p1[0])**2 + (p2[1]-p1[1])**2)

def finger_extended(handLms, finger_tip, finger_mcp):
    # Simple logic: if tip is above mcp (for vertical orientation)
    return handLms.landmark[finger_tip].y < handLms.landmark[finger_mcp].y

while True:
    ret, frame = cap.read()
    if not ret:
        break

    frame = cv2.flip(frame, 1)  # Mirror image
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    result = hands.process(rgb)

    h, w, c = frame.shape

    if result.multi_hand_landmarks:
        for handLms in result.multi_hand_landmarks:
            mp_draw.draw_landmarks(frame, handLms, mp_hands.HAND_CONNECTIONS)

            # Finger tips & MCPs
            thumb_tip = handLms.landmark[mp_hands.HandLandmark.THUMB_TIP]
            index_tip = handLms.landmark[mp_hands.HandLandmark.INDEX_FINGER_TIP]
            middle_tip = handLms.landmark[mp_hands.HandLandmark.MIDDLE_FINGER_TIP]
            ring_tip = handLms.landmark[mp_hands.HandLandmark.RING_FINGER_TIP]
            pinky_tip = handLms.landmark[mp_hands.HandLandmark.PINKY_TIP]

            index_mcp = handLms.landmark[mp_hands.HandLandmark.INDEX_FINGER_MCP]
            middle_mcp = handLms.landmark[mp_hands.HandLandmark.MIDDLE_FINGER_MCP]

            # Convert to pixel coordinates
            index_pos = (int(index_tip.x * w), int(index_tip.y * h))
            middle_pos = (int(middle_tip.x * w), int(middle_tip.y * h))

            # ----- Cursor control using index finger -----
            cursor_x = int(index_tip.x * screen_width)
            cursor_y = int(index_tip.y * screen_height)
            pyautogui.moveTo(cursor_x, cursor_y, duration=0.01)
            cv2.circle(frame, index_pos, 10, (255,0,0), cv2.FILLED)
            cv2.putText(frame, "Index Finger - Cursor", (10, h-20),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255,0,0), 2)

            # ----- Pinch (Thumb + Index) for click -----
            thumb_pos = (int(thumb_tip.x * w), int(thumb_tip.y * h))
            if calc_distance(thumb_pos, index_pos) < 30:
                pyautogui.click()
                cv2.putText(frame, "Click!", (10, h-50),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0,0,255), 2)

            # ----- Middle finger extended → Close app -----
            if finger_extended(handLms, mp_hands.HandLandmark.MIDDLE_FINGER_TIP,
                               mp_hands.HandLandmark.MIDDLE_FINGER_MCP):
                pyautogui.hotkey('alt', 'f4')
                cv2.putText(frame, "Middle Finger - Closing App", (10, 50),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0,255,0), 2)

    cv2.imshow("Hand Gesture Control", frame)

    if cv2.waitKey(1) & 0xFF == 27:  # ESC key to exit
        break

cap.release()
cv2.destroyAllWindows()
