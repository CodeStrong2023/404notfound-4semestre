package UTN.presentacion;

import UTN.conexion.Conexion;
import UTN.datos.EstudianteDAO;
import UTN.dominio.Estudiante;
import java.util.Scanner;

public class SistemaEstudiantesApp{
    public static void main(String[] args){
        var salir=false; //recuerden esto ya lo hicimos antes
        var consola=new Scanner(System.in);//para leer informacion de la consola
        //se crea una instancia de la clase servicio, esto lo hacemos fuera del ciclo
        var estudianteDao=new EstudianteDAO();//esta instancia debe hacerse una vez
        while(!salir){
            try{
                mostrarMenu();//Mostramos el menú
                //Este sera el metodo ejecutarOpciones que devolvera un booleano
                salir=ejecutarOpciones(consola,estudianteDao);//esto arroja una excepcion
                
            }catch(Exception e){
                System.out.println("ocurrio un error al ejecutar la operacion "+e.getMessage());
            }
        }//fin while
    }//fin  main
    
    private static void mostrarMenu(){
        System.out.print("""
                         ******* Sistema de Estudiantes *******
                         1. Listar Estudiantes
                         2. Buscar Estudiantes
                         3. Agregar Estudiante
                         4. Modificar Estudiante
                         5. Eliminar Estudiante
                         6. Salir
                         Elige una opción:
                         """);
    }
    //Método para ejecutar las opciones, va a regresar un valor booleano, ya que es el que
    //puede modificar el valor de la variable salir, si es verdadero termina el ciclo while
    private static boolean ejecutarOpciones(Scanner consola, EstudianteDAO estudianteDAO){
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion){
            case 1 ->{//Listar Estudiantes
                System.out.println("Listado de Estudiantes...");
                //No muestra la información, solo recupera la info y regresa una lista
                var estudiantes =  estudianteDAO.listarEstudiantes();//Recibe el listado
                //Vamos a iterar cada objeto tipo estudiante
                estudiantes.forEach(System.out::println);//Para imprimir la lista
            }//Fin caso 1
            case 2 ->{//Buscarestudiante por id
                System.out.println("Introduce el id_estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var encontrado = estudianteDAO.buscarEstudiantePorId(estudiante);
                if(encontrado)
                    System.out.println("Estudiante encontrado: "+estudiante);
                else
                    System.out.println("Estudiante NO emcontrado: "+estudiante);
            }//Fin caso 2
        }
    }
}

