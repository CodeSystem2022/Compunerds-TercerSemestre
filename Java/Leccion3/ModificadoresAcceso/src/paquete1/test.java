
package paquete1;

import paquete2.Clase4;

public class test {
    public static void main(String[] args) {
        ClaseHija2 claseH2 = new ClaseHija2();
        claseH2.atributoDefault = "Cambio desde la prueba";
        System.out.println("claseH2 atributo default = "+claseH2.atributoDefault);
        
        Clase4 claseH4 = new Clase4("Publico");
        System.out.print(claseH4.getAtributoPrivate());
        claseH4.setAtributoPrivate("Cambio");
        System.out.println("ClaseH4 = " + claseH4.getAtributoPrivate());
    }
}
