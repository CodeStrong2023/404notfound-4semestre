package utn.estudiantes.modelo;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@entity
public class Estudiante {
    @id;
    @GeneratedValue(strategy= GenerationType.IDENTITY);
    private Integer idEstudiante;

}
