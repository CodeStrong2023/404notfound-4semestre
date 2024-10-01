import pygame

pygame.init()

# Configuración de pantalla
screen = pygame.display.set_mode((800,600))
clock = pygame.time.Clock()
running = True
dt = 0  # Delta Time

# Posición del jugador
player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)

# Velocidad del jugador
player_speed = 5

# Bucle principal

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:  # Si detecta que el usuario cierra la pantalla con QUIT
            running = False  # Si es falso el programa se cierra

# Detectar las teclas para presionar
    keys = pygame.key.get_pressed()  # Pressed va cambiando las teclas que vamos presionando

    # Movimiento del jugador
    if keys[pygame.K_LEFT]:  # Se presiona la tecla de la izquierda
        player_pos.x -= player_speed
    if keys[pygame.K_RIGHT]:  # Se presiona la tecla de la derecha
        player_pos.y += player_speed
    if keys[pygame.K_DOWN]:  # Se presiona la tecla hacia abajo
        player_pos.y -= player_speed
    if keys[pygame.K_UP]:  # Se presiona la tecla hacia arriba
        player_pos.x += player_speed

    # Limpiar la pantalla
    screen.fill("green")

    # Dibujar el jugador (en este caso es un círculo rojo)
    pygame.draw.circle(screen, (255, 0, 0), (int(player_pos.x), int(player_pos.y)), 10)

    # Actualizar pantalla
    pygame.display.flip()

    # Control de velocidad del jugador, frames por segundo
    clock.tick(60)


pygame.quit()  # Aquí termina nuestro programa


