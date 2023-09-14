import pygame
import sys

# Inicialize o Pygame
pygame.init()

# Tamanho do bigode
divisor = 2.5

# Defina as dimensões da janela
largura = 800
altura = 600

# Crie uma janela
janela = pygame.display.set_mode((largura, altura))

# Defina o título da janela
pygame.display.set_caption('Exibindo uma imagem')

# Carregue uma imagem
imagem = pygame.image.load('Python/bigode.png')

# Obtenha as dimensões da imagem
largura_imagem, altura_imagem = imagem.get_size()

# Redimensione a imagem para caber na tela
fator_escala = min((largura / largura_imagem)/divisor, (altura / altura_imagem)/divisor)
nova_largura = int(largura_imagem * fator_escala)
nova_altura = int(altura_imagem * fator_escala)
imagem_redimensionada = pygame.transform.scale(imagem, (nova_largura, nova_altura))

# Calcule a posição para centralizar a imagem na janela
posicao_imagem = ((largura - nova_largura) // 2, (altura - nova_altura) // 2)

# Loop principal
while True:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Preencha a janela com uma cor de fundo (opcional)
    janela.fill((255, 255, 255))

    # Desenhe a imagem redimensionada na janela
    janela.blit(imagem_redimensionada, posicao_imagem)

    # Atualize a tela
    pygame.display.update()
