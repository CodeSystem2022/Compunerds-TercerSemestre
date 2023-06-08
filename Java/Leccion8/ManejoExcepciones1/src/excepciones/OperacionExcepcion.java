/**
 *
 * @author Giuliana Dealbera Etchechoury
 */
package excepciones;

//public class OperacionExcepcion extends Exception {
//    //Constructor
//    public OperacionExcepcion(String mensaje){
//        super(mensaje);
//    }
//}

public class OperacionExcepcion extends RuntimeException { // la diferencia radica en el compilador. No obliga a procesar este tipo de excep.
    //Constructor
    public OperacionExcepcion(String mensaje){
        super(mensaje);
    }
}