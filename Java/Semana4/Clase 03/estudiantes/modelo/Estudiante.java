package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity //Indica que la clase es una clase entidad = Tabla de datos

//boilerplate - CodigoRepetitivo  (Son los codigos de constructores)
@Data //Genera los metodos get y set
@NoArgsConstructor //Constructor sin argumetos
@AllArgsConstructor //Constructor con todos los argumentos
@ToString //Metodos to String
public class Estudiante {
    @Id // Agrega el orden de llave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEstudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
}
