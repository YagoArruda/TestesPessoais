import cv2
import mediapipe as mp

import tkinter as tk

#detectando (0,1....) e "inicializando" a webcan
webcam = cv2.VideoCapture(0)

reconhecimento_rosto = mp.solutions.face_detection
desenho = mp.solutions.drawing_utils
reconhecedor_rosto = reconhecimento_rosto.FaceDetection()

while webcam.isOpened():
    validacao, frame = webcam.read()
    if not validacao:
        break
    lista_Rostos = reconhecedor_rosto.process(frame)

    if lista_Rostos.detections:
        for rosto in lista_Rostos.detections:
            desenho.draw_detection(frame, rosto)

    cv2.imshow("Teste", frame)
    if cv2.waitKey(5) == 27: #27 é a tecla (Esc) e o 5 é o tempo entre cada "execução"
        break
webcam.release()
cv2.destroyAllWindows()