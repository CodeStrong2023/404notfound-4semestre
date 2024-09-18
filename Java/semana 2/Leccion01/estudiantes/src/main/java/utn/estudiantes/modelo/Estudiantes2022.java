package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity // Clase de entidad que representa una tabla de datos.
// Boilerplate - Repetitivo.
@Data // Crea los métodos get y set.
@NoArgsConstructor // Nos agrega el conocido constructor vacío, sin argumentos.
@AllArgsConstructor // Constructor con todos los argumentos.
@ToString // Agrega el to string.
public class Estudiantes2022 {
    @Id // Agrega el orden del número de la llave primaria.
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Indica como se va a generar el valor de la llave primaria.
    private Integer idestudiantes2022;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;


    // Getters
    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getTelefono() {
        return telefono;
    }

    public String getEmail() {
        return email;
    }

    // Setters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public void setEmail(String email) {
        this.email = email;
    }


}
