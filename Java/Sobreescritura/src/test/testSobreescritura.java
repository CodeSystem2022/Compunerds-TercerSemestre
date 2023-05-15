package test;

import domain.*;

public class testSobreescritura {
    public static void main(String[] args) {
        empleado empleado1 = new empleado("Juan" , 10000);
        imprimir(empleado1);
        //System.out.println("empleado1 = "+ empleado1.ObetenerDetalles());
        Gerente empleado2 = new Gerente("Jose", 5000, "Sistemas");
        imprimir(empleado1);
        //System.out.println("Gerente = "+ gerente1.ObetenerDetalles());
    }
    
    public static void imprimir(empleado Empleado){
        String detalles = Empleado.ObetenerDetalles();
        System.out.println("detalles  = " + detalles);
    }
}
