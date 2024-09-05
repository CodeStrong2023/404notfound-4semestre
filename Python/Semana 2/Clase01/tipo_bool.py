
# Bool contiene los valores de True y False
# Los tipos numéricos, es false para el 0 (cero), true pra los demás valores.

valor = 0
resultado = bool(valor)
print(f'El valor: {valor}, Resultado: {resultado}')

valor = 0.1
resultado = bool(valor)
print(f'El valor: {valor}, Resultado: {resultado}')

# Tipo String -> False '' cadena vacía, True demás valores.
valor = ''
resultado = bool(valor)
print(f'El valor: {valor}, Resultado: {resultado}')

valor = 'Hola'
resultado = bool(valor)
print(f'El valor: {valor}, Resultado: {resultado}')

# Lista.
valor = []
resultado = bool(valor)
print(f"Valor: {valor}, resultado: {resultado}")

valor = [2, 4, 6]
resultado = bool(valor)
print(f"Valor: {valor}, resultado: {resultado}")

# Tupla.
valor = ()
resultado = bool(valor)
print(f"Valor: {valor}, resultado: {resultado}")

# Tupla.
valor = (5,)
resultado = bool(valor)
print(f"Valor: {valor}, resultado: {resultado}")

# Diccionario.
valor = {}
resultado = bool(valor)
print(f"Valor: {valor}, resultado: {resultado}")

valor = {"Nombre": "Juan", "Apellido": "Perez"}
resultado = bool(valor)
print(f"Valores: {valor}, resultado: {resultado}")