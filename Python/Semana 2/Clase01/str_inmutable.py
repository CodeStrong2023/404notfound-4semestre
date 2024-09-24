# LAS CADENAS O TIPO STRING SON INMUTABLES, CADA VEZ QUE MODIFICAMOS UNA CADENA SE GENERA UN NUEVO OBJETO O CADENA.
# help(str.capitalize)

mensaje1 = 'hola mundo'
mensaje2 = mensaje1.capitalize()  # Cambia la primer letra a mayúscula
print(f'Mensaje1: {mensaje1}, id: {id(mensaje1)}')
print(f'Mensaje2: {mensaje2}, id: {id(mensaje2)}')

mensaje1 += ' Adios'
print(f'Mensaje1: {mensaje1}, id: {id(mensaje1)}')

