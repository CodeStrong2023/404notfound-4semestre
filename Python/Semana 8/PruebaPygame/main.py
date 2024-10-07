# Ejemplo de pantalla en pygame
import pygame

# Configuración de pygme
pygame.init()  # Inicializamos nuestra librería
screen = pygame.display.set_mode((800, 600))  # Dimensiones de la pantalla(tupla)
clock = pygame.time.Clock()  # Para que se sostenga abierta la pantalla, si no que abra y cierre automáticamente.
running = True  # Mientras el programa este corriendo en true, se mantenga abierto el programa

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:  # Si detecta que el usuario cierra la pantalla con QUIT
            running = False  # Si es falso el programa se cierra

screen.fill("purple")  # Cuando se cierre la pantalla se pone en color púrpura

pygame.display.flip()  # Actualiza la pantalla

clock.tick(60)  # El tiempo en que se actualiza la pantalla, 60 fotogramas por segundo

pygame.quit()  # Para cerrar el programa
