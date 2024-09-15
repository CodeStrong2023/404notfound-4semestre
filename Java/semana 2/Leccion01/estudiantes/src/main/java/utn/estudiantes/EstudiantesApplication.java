package utn.estudiantes;

import java.util.List;
import java.util.Scanner;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import utn.estudiantes.modelo.Estudiantes2023;
import utn.estudiantes.servicio.EstudianteServicio;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner{

	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);

	String nl = System.lineSeparator();

	public static void main(String[] args) {
		logger.info("Iniciando la aplicación...");
		SpringApplication.run(EstudiantesApplication.class, args);
		logger.info("Aplicación finalizada");
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info(nl+ "Ejecutando el metodo run en Spring" + nl);
		var salir = false;
		var consola = new Scanner(System.in);
		while(!salir){
			mostrarMenu();
			salir = ejecutarOpciones(consola);
			logger.info(nl);
		}
	}

	private void mostrarMenu(){
		logger.info(nl);
		logger.info("""
					******* Sistema de Estudiantes *******
					1.Listar estudiante
					2.Buscar estudiante
					3.Agregar estudiante
					4. Modificar estudiante
					5. Eliminar estudiante
					6. Salir
					Elija una opcion>""");
	}

	private boolean ejecutarOpciones(Scanner consola){
		var opcion = Integer.parseInt(consola.nextLine());
		var salir = false;
		switch (opcion) {
			case 1: // Listar
				logger.info(nl+"Listado de Estudiantes: " + nl);
				List<Estudiantes2023> estudiantes = estudianteServicio.listarEstudiantes();
				estudiantes.forEach((estudiante -> logger.info(estudiante.toString()+nl)));
				break;
			case 2: //buscar
				logger.info("Digite el id estudiante a buscar: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				Estudiantes2023 estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if(estudiante != null){
					logger.info("Estudiante encontrado: " + estudiante + nl);
				}else{
					logger.info("Estudiante no encontrado: " + estudiante + nl);
				}
				break;
			case 3: //agregar 
				logger.info("Agregar estudiante: " + nl);
				logger.info("Nombre: ");
				var nombre = consola.nextLine();
				logger.info("Apellido: ");
				var apellido = consola.nextLine();
				logger.info("Telefono: ");
				var telefono = consola.nextLine();
				logger.info("Email: ");
				var email = consola.nextLine();
				var estudiante1 = new Estudiantes2023();
				estudiante1.setNombre(nombre);
				estudiante1.setApellido(apellido);
				estudiante1.setTelefono(telefono);
				estudiante1.setEmail(email);
				estudianteServicio.guardarEstudiante(estudiante1);
				logger.info("Estudiante agregado: " + estudiante1 + nl);
		               }
	  }

}
