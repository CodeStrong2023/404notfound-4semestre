package UTN.datos;

import UTN.dominio.Estudiante;

import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDAO {
    // Método listar
    public List<Estudiante> listarEstudiantes() {
        List<Estudiante> estudiantes = new ArrayList<>();
        // Creamos algunos objetos que son ncesarios para comunicarnos con la base de datos
        PreparedStatement ps; //Envia la sentencia a la base de datos
        ResultSet rs; //Obtenemos el resultado de la base de datos
        //creamos un objeto del tipo conexion
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 ORDER BY idestudiantes2022";
        try {
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2022"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setEmail(rs.getString("email"));
                // Falta agregarlo a la lista
                estudiantes.add(estudiante);
            }
        } catch (Exception e) {
            System.out.println("ocurrio un error al seleccionar datos: " + e.getMessage());
        } finally {
            try {
                con.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión: " + e.getMessage());
            }
        } // Fin finally
        return estudiantes;
    } // Fin método listar

    // Método para buscar por id.
    public boolean buscarEstudiantesId(Estudiante estudiante) {
        PreparedStatement ps;
        ResultSet rs;
        Connection conexion = getConnection();
        String sql = "SELECT * FROM estudiantes2024 WHERE idestudiantes2024=?";
        try {
            ps = conexion.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();

            if (rs.next()) {
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true;
            }
        } catch (Exception e) {
            System.out.println("Ocurrió un error al buscar estudiante: " + e.getMessage());
        }
        finally {
            try {
                conexion.close();
            } catch (Exception e) {
                System.out.println("Ocurrió un error al cerrar la conexión: " + e.getMessage());
            }
        } // Fin finally
        return false;
    } // Fin método buscarEstudiantesId

    //metodo agregar un nuevo estudiante
    public boolean agregarEstudiantes(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "INSERT INTO estudiantes2022 (nombre, apellido, telefono, email) VALUES (?, ?, ? ,?)";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;
        }catch (Exception e){
            System.out.println("Ocurrio un error al agregar el estudiante: " + e.getMessage());
        }//Fin catch
        finally {
            try {
                con.close();
            } catch (Exception e){
                System.out.println("Error al cerrar la conexión: "+e.getMessage());
            }//Fin catch
        }//Fin finally
        return false;
    }//Fin método agregarEstudiante

    // Método para modificar estudiante
    public boolean modificarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "UPDATE estudiantes2022 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiantes2022=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setString(5, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e){
            System.out.println("Error al modificar estudiante: "+e.getMessage());
        }//Fin catch
        finally {
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Error al cerrar la conexión: "+e.getMessage());
            }//Fin catch
        }//Fin finally
        return false;
    }// Fin método modificarEstudiante

    public boolean eliminarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "DELETE FROM estudiantes2022 WHERE idestudiantes2022=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e){
            System.out.println("Error al eliminar estudiante: "+e.getMessage());
        } // Fin catch
        finally {
            try {
                con.close();
            } catch (Exception e){
                System.out.println("Error al cerrar la conexión: "+e.getMessage());
            } // Fin catch
        } // Fin finally
        return false;
    } // Fin método eliminarEstudiante

    public static void main(String[] args) {
        var estudianteDao = new EstudianteDAO();

        // Agregar estudiante
        //var nuevoEstudiante = new Estudiante("Carlos", "Lara", "299 8589434", "carlos@mail.com");
        //var agregado = estudianteDao.agregarEstudiantes(nuevoEstudiante);
        //if (agregado)
        //   System.out.println("Estudiante agregado: " + nuevoEstudiante);
          //else
            //System.out.println("No se ha agregado estudiante: " + nuevoEstudiante);

        // Eliminar estudiante con id 3
        //var estudianteEliminar = new Estudiante(3);
        //var eliminado = estudianteDao.eliminarEstudiante(estudianteEliminar);
        //if(eliminado)
        //    System.out.println("Estudiante eliminado: "+estudianteEliminar);
        //else
        //    System.out.println("No se eliminó el estudiante: "+estudianteEliminar);

        // Listar los estudiantes
        System.out.println("Listado de Estudiantes: ");
        List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println); // Función para imprimir lambda

        // Buscar estudiantes por el id.
        // var estudiante1 = new Estudiante(1);
        //System.out.println("Estudiante antes de la búsqueda: " + estudiante1);
        //var encontrado = estudianteDao.buscarEstudiantesId(estudiante1);
        //if (encontrado)
        //System.out.println("Estudiante encontrado: " + estudiante1);
            //else
            //System.out.println("No se encontro el estudiante: " + estudiante1.getIdEstudiante());

    }
}