package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.Estudiantes2022;
import utn.estudiantes.servicio.EstudianteServicio;

import java.util.List;
import java.util.Scanner;

@SpringBootApplication  // Anotación para ejecutar
public class EstudiantesApplication implements CommandLineRunner { // Ejecutamos la app por consola e implementamos el método.

	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);

	String nl = System.lineSeparator(); // Salto de línea.

	public static void main(String[] args) {
		logger.info("Iniciando la aplicación...");
		// Levantar la fábrica de Spring
		SpringApplication.run(EstudiantesApplication.class, args);
		logger.info("Aplicación Finalizada!");
	}
	@Override
	public void run(String... args) throws Exception {
		logger.info(nl+"Ejecutando el método run de Spring...");
		var salir = false;
		var consola = new Scanner(System.in);
		while(!salir){
			mostrarMenu();
			salir = ejecutarOpciones(consola);
			logger.info(nl);
		} // Fin ciclo while
	}

	private void mostrarMenu(){
		//logger.info(nl);
		logger.info("""
					****** Sistema de Estudiantes ******
					1. Listar Estudiantes
					2. Buscar Estudiante
					3. Agregar Estudiante
					4. Modificar Estudiante
					5. Eliminar Estudiante
					6. Salir
					Elija una opción:""");
	}

	private boolean ejecutarOpciones(Scanner consola) {
		var salir = false;
		try {
			var opcion = Integer.parseInt(consola.nextLine());

			switch (opcion) {
				case 1 -> {
					// Listar estudiantes
					logger.info(nl + "Listado de Estudiantes: ");
					List<Estudiantes2022> estudiantes = estudianteServicio.listarEstudiantes();
					estudiantes.forEach(estudiante -> logger.info(estudiante.toString()));
				}
				case 2 -> { // Buscar estudiante por id
					try {
						logger.info("Digite el ID del estudiante a buscar: ");
						var idEstudiante = Integer.parseInt(consola.nextLine());
						Estudiantes2022 estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
						if (estudiante != null)
							logger.info("Estudiante encontrado: " + estudiante + nl);
						else
							logger.info("Estudiante NO encontrado: " + idEstudiante + nl);
					} catch (Exception e) {
						logger.error("ERROR: ID no válido. Ingrese el ID del estudiante." +nl);
					}
				}
				case 3 -> { // Agregar estudiante
					logger.info("Agregar estudiante: " + nl);
					logger.info("Nombre: ");
					var nombre = consola.nextLine();
					logger.info("Apellido: ");
					var apellido = consola.nextLine();
					logger.info("Telefono: ");
					var telefono = consola.nextLine();
					logger.info("Email: ");
					var email = consola.nextLine();
					// Crear el objeto estudiante sin el Id
					var estudiante = new Estudiantes2022();
					estudiante.setNombre(nombre);
					estudiante.setApellido(apellido);
					estudiante.setTelefono(telefono);
					estudiante.setEmail(email);
					estudianteServicio.guardarEstudiante(estudiante);
					logger.info("Estudiante agregado: " + estudiante + nl);
				}
				case 4 -> { // Modificar estudiante
					try {
						logger.info("Modificar estudiante: " + nl);
						logger.info("Ingrese el ID estudiante: ");
						var idEstudiante = Integer.parseInt(consola.nextLine());
						// Buscamos el estudiante a modificar
						Estudiantes2022 estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
						if (estudiante != null) {
							logger.info("Nombre: ");
							var nombre = consola.nextLine();
							logger.info("Apellido: ");
							var apellido = consola.nextLine();
							logger.info("Telefono: ");
							var telefono = consola.nextLine();
							logger.info("Email: ");
							var email = consola.nextLine();
							estudiante.setNombre(nombre);
							estudiante.setApellido(apellido);
							estudiante.setTelefono(telefono);
							estudiante.setEmail(email);
							estudianteServicio.guardarEstudiante(estudiante);
							logger.info("Estudiante modificado: " + estudiante + nl);
						} else
							logger.info("Estudiante NO encontrado con el id: " + idEstudiante + nl);

					} catch (Exception e) {
						logger.error("ERROR: ID no válido. Debe ingrese el ID del estudiante."+nl);
					}
				}
				case 5 -> { // Eliminar estudiantes
					try {
						logger.info("Eliminar estudiante: " + nl);
						logger.info("Digite el ID del estudiante: ");
						var idEstudiante = Integer.parseInt(consola.nextLine());
						// Buscamos el id estudiante a eliminar
						var estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
						if (estudiante != null) {
							estudianteServicio.eliminarEstudiante(estudiante);
							logger.info("Estudiante eliminado: " + estudiante + nl);
						} else
							logger.info("Estudiante NO encontrado con id: " + idEstudiante + nl);

					} catch (Exception e) {
						logger.error("ERROR: ID no válido. Debe ingrese el ID del estudiante."+nl);
					}
				}
				case 6 -> { // Salir
					logger.info("Hasta pronto!" + nl + nl);
					salir = true;
				}
				default -> logger.info("Opción no reconocida: " + opcion + nl);
			}
		} catch (Exception e) {
			logger.error("ERROR: Opción no válida. Debe ingresar un número."+nl);
		}
		return salir;
	} // Fin método ejecutarOpciones
} // Fin clase EstudiantesApplication
