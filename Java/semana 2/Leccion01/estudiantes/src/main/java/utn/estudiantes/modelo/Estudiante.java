package utn.estudiantes.modelo;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@entity
//boilerPlate - repetitivo
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Estudiante {
    @id;
    @GeneratedValue(strategy= GenerationType.IDENTITY);
    private Integer idEstudiante;
    private String nombre ;
    private String apellido;
    private String telefono;
    private String email;


}
