/**
 *
 * @author Giuliana Dealbera Etchechoury
 */
package test;


public class TestExcepciones {
    public static void main(String[] args) {
        //int resultado = 10/0;
        //System.out.println("resultado = " + resultado);
        
        int resultado = 0;
        try{
            resultado = 10/0;
        } catch(Exception e){
            System.out.println("Ocurrió un ERROR");
            e.printStackTrace(System.out); //se conoce como pila de excepciones
        }
        System.out.println("La variable de resultado tiene como valor: " + resultado);
    }
}
