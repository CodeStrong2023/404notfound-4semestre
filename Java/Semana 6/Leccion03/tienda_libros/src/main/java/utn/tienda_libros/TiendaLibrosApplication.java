package utn.tienda_libros;

import org.springFramework.boot.WebApplicationType;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;
import java.awt.EventQueue;

@SpringBootApplication
public class TiendaLibrosApplication {

	public static void main(String[] args) {
		SpringApplication.run(TiendaLibrosApplication.class, args);
	}
		ConfigurationApplicationContext contextoSpring=
			new SpringApplicationBuilder(TiendaLibrosApplication.class)
				.headless(false)
				.web(WebApplicationType.NONE)
				.run(args);

		//Ejecutamos el código para cargar el formulario
		EventQueue.invokeLater(() -> {
			//Obtenemos el objeto from a través del spring
			LibroFrom libroFrom = contextoSpring.getBrean(LibroFrom.class);
	});
}
