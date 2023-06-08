/**
 *
 * @author Giuliana Dealbera etchechoury
 */
package aritmetica;

import excepciones.OperacionExcepcion;


public class Aritmetica {
    public static int division(int numerador, int denominador){ 
//          throws OperacionExcepcion{ ( !! con el runtime no hace falta agregar esto)
        if(denominador == 0){
            throw new OperacionExcepcion("División entre cero");
        }
        return numerador / denominador;
    }
}
