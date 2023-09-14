import cv2
import mediapipe as mp
import numpy as np

# Carregue a imagem PNG que você deseja seguir o nariz
imagem_png = cv2.imread('Python/bigode.png', -1)  # Certifique-se de fornecer o caminho correto para sua imagem

# Inicialize a webcam e o reconhecimento de rosto
webcam = cv2.VideoCapture(0)
reconhecimento_rosto = mp.solutions.face_detection
reconhecedor_rosto = reconhecimento_rosto.FaceDetection()

while webcam.isOpened():
    validacao, frame = webcam.read()
    if not validacao:
        break
    lista_Rostos = reconhecedor_rosto.process(frame)

    if lista_Rostos.detections:
        for rosto in lista_Rostos.detections:
            # Obtenha as coordenadas do retângulo delimitador do rosto
            bboxC = rosto.location_data.relative_bounding_box
            h, w, c = frame.shape

            # Calcule a posição do nariz em relação ao retângulo do rosto
            x, y = int(bboxC.xmin * w), int(bboxC.ymin * h)
            x_nariz, y_nariz = int(x + bboxC.width * w / 2), int(y + bboxC.height * h)

            # Redimensione a imagem PNG para corresponder ao tamanho da região do nariz
            altura, largura, _ = imagem_png.shape
            nova_imagem_png = cv2.resize(imagem_png, (x_nariz - x, y_nariz - y))

            # Calcule as coordenadas para colar a imagem PNG no nariz
            y1, y2 = y, y + nova_imagem_png.shape[0]
            x1, x2 = x, x + nova_imagem_png.shape[1]

            # Verifique os limites para garantir que a imagem PNG não saia do quadro
            if y2 > h:
                y2 = h
                y1 = h - nova_imagem_png.shape[0]
            if x2 > w:
                x2 = w
                x1 = w - nova_imagem_png.shape[1]

            # Cole a imagem PNG redimensionada no nariz
            overlay = frame.copy()
            roi = frame[y1:y2, x1:x2]

            # Aplique uma transformação de rotação à imagem PNG
            angulo_de_rotacao = 0  # Ajuste o ângulo de rotação conforme necessário
            matriz_de_rotacao = cv2.getRotationMatrix2D((nova_imagem_png.shape[1] / 2, nova_imagem_png.shape[0] / 2), angulo_de_rotacao, 1)
            nova_imagem_png = cv2.warpAffine(nova_imagem_png, matriz_de_rotacao, (nova_imagem_png.shape[1], nova_imagem_png.shape[0]))

            alpha = nova_imagem_png[:, :, 3] / 255.0
            for c in range(0, 3):
                overlay[y1:y2, x1:x2, c] = (1 - alpha) * roi[:, :, c] + alpha * nova_imagem_png[:, :, c]
            frame = overlay

    cv2.imshow("Teste", frame)
    if cv2.waitKey(5) == 27: # 27 é a tecla (Esc) e o 5 é o tempo entre cada "execução"
        break

webcam.release()
cv2.destroyAllWindows()
