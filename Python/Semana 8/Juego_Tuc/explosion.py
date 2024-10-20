import pygame
import os
from constantes import ASSETS_PATH

class Explosion:

    def __init__(self, x, y):
        self.images = [pygame.image.load(os.path.join(ASSETS_PATH, "images/explosion0.png")) for in range (9)]
        self.index = 0
        self.image = self.image.get_rect(center=(x, y))
        self.frame_rate=0
        self.max_frames = 9

    def actualizar(self):
        self.frame_rate
        self.frame_rate>=self.max_frames:
        self.frame_rate=0
        self.index+=1
        if self.index>=len(self.images):
            return False
        return True
    def dibujar(self, screen):
        screen.blit(self.image, self.image.get_rect())  