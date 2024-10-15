package utn.tienda_libros.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idLibro;
    String nombreLibro;
    String autor;
    Double precio;
    Integer existencias;

    public Libro() {
        // Constructor sin parámetros
    }

    public Libro(Integer idLibro, String nombreLibro, String autor, Double precio, Integer existencias) {
        this.idLibro = idLibro;
        this.nombreLibro = nombreLibro;
        this.autor = autor;
        this.precio = precio;
        this.existencias = existencias;
    }

    // Getters
    public Integer getIdLibro() {
        return idLibro;
    }

    public String getNombreLibro() {
        return nombreLibro;
    }

    public String getAutor() {
        return autor;
    }

    public double getPrecio() {
        return precio;
    }

    public int getExistencias() {
        return existencias;
    }

    // Setters
    public void setIdLibro(Integer idLibro) {
        this.idLibro = idLibro;
    }

    public void setNombreLibro(String nombreLibro) {
        this.nombreLibro = nombreLibro;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public void setExistencias(Integer existencias) {
        this.existencias = existencias;
    }
}
