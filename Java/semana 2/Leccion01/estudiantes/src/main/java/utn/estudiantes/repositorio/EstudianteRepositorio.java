package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;
import utn.estudiantes.modelo.Estudiante2022;

// @Repository Antiguamente se utilizaba en lugar de extender la interface de jpaRepository.
public interface EstudianteRepositorio extends JpaRepository<Estudiante2022, Integer> {
}
