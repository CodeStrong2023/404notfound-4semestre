from capa_datos_persona.usuario_dao import UsuarioDAO
from logger_base import log

opcion = None
while opcion != 5:
    print('Opciones:')
    print('1. Listar usuarios')
    print('2. Agregar Usuario')
    print('3. Modificar Usuario')
    print('4. Eliminar usuario')
    print('5. Salir')
    opcion = int(input('Digite la opción (1-5): '))
    if opcion == 1:
      usuarios = UsuarioDAO.seleccionar()
      for usuario in usuarios:
        log.info(usuario)

else:
  log.info('Salimos de la aplicación, Hasta pronto!!!')
