package utn.estudiantes.servicio;

import utn.estudiantes.modelo.Estudiante2022;

import java.util.List;

public interface IEstudianteServicio {
    public List<Estudiante2022> listarEstudiantes();
    public Estudiante2022 buscarEstudiantePorId(Integer idEstudiante2022);
    public void guardarEstudiante(Estudiante2022 estudiante);
    public void eliminarEstudiante(Estudiante2022 estudiante);
}
