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
                mostrarMenu();//este sera el metodo que devolvera un booleano
                salir=ejecutarOpciones(consola,estudianteDao);//esto arroja una excepcion
                
            }catch(Exception e){
                System.out.println("ocurrio un error al ejecutar la operacion "+e.getMessage());
            }
        }//fin while
    }//fin  main
    
    private static void mostrarMenu(){
        System.out.println("""
                           """);
    }
}

