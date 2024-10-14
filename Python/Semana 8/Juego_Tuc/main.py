import sys
import pygame

from constantes import SCREEN_WIDTH, SCREEN_HEIGTH ,ASSETS_PATH, IMPERIAL_MARCH_PATH,START_IMAGE_PATH, ESTRELLA_PATH, FONDO1_PATH

def mostrar_pantalla_inicio(screen):
    # Cargar y mostrar la imágen de inicio
    imagen_inicio = pygame.image.load(START_IMAGE_PATH)
    imagen_inicio = pygame.transform.scale(imagen_inicio, (SCREEN_WIDTH, SCREEN_HEIGHT))
    screen.blit(imagen_inicio, (0, 0))
    pygame.display.flip()

    # Reproducir audio
    pygame.mixer.music.load(IMPERIAL_MARCH_PATH)
    pygame.mixer.music.play()

    # Esperar a que termine el audio
    while pygame.mixer.music.get_busy():
        for event in pygame.event.get():
            if event.Type.QUIT:
                pygame.quit()
                sys.exit()
        # Actualizar pantalla
        screen.blit(imagen_inicio, (0, 0))
        pygame.display.flip()

    def main():
        pygame.init()
        screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
        pygame.display.set_caption('Amenaza Fantasma')

        # Cargar los recursos del juego
        icon=pygame.image.load(f'{ASSETS_PATH}/images/fondo001.jfif')
        pygame.display.set_icon(icon)

        fondo = pygame.image.load(f'{ASSES_PATH}/images/fond3.jpg')
        fondo = pygame.transform.scale(fondo, (SCREEN_WIDTH, SCREEN_HEIGHT))

        estrella = pygame.image.load(ESTRELLA_PATH)
        estrella = pygame.transform.scale(fondo1, (SCREEN_WIDTH, SCREEN_HEIGHT))

        fondo1 = pygame.image.load(FONDO1_PATH)
        fondo1 = pygame.transform.scale(fondo1( SCREEN_WIDTH, SCREEN_HEIGHT))

        sonido_laser = pygame.mixer.Sound(f' {ASSETS_PATH}/sound/explocion.mp3')

        personaje = Personaje (SCREEN_WIDTH //2, SCREEN_HEIGTH // 2)
        Enemigos = []
        explociones = []
        puntos = 0
        nivel = 1

        Clock = pygame.time.Clock()
        running = True

        #icinializar el fondo actual con el fondo original

        fondo_actual = fondo
