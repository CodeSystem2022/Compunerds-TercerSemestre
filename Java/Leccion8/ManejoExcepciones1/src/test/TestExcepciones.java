/**
 *
 * @author Giuliana Dealbera Etchechoury
 */
package test;

import static aritmetica.Aritmetica.division;
import excepciones.OperacionExcepcion;


public class TestExcepciones {
    public static void main(String[] args) {
        //int resultado = 10/0;
        //System.out.println("resultado = " + resultado);
        
        int resultado = 0;
        try{ 
//          resultado = 10/0;
            resultado = division(10,0);
        } catch(OperacionExcepcion e){
            System.out.println("Ocurrió un error de tipo OperacionExcepcion"); //repotando la excepcion
            System.out.println(e.getMessage());
        } catch(Exception e){  // Se puede hacer varios catch RESPETANDO las jerarquias. La mayor va abajo.
            System.out.println("Ocurrió un ERROR");
            e.printStackTrace(System.out); //se conoce como pila de excepciones
            System.out.println(e.getMessage());
        } 
        finally{
            System.out.println("Se revisó la división entre cero"); // SIEMPRE se ejecuta
        }
        System.out.println("La variable de resultado tiene como valor: " + resultado);
    }
}
