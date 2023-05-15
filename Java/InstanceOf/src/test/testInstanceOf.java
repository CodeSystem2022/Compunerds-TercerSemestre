package test;

import domain.*;

public class testInstanceOf {
    public static void main(String[] args) {
        empleado empleado1 = new empleado("Juan" , 10000);
        determinarTipo(empleado1);
        //Gerente gerente1 = new Gerente("Jose", 5000, "Sistemas");
        //determinarTipo(gerente1);
    }
    
    public static void determinarTipo(empleado Empleado){
        if(Empleado instanceof Gerente){
            System.out.println("Es de tipo gerente");
            //Gerente gerente = (Gerente)Empleado;
            //gerente.getDepartamento();
        }
        else if(Empleado instanceof empleado){
            System.out.println("Es de tipo empleado");
            //Gerente gerente = (Gerente)Empleado;
            //System.out.println("Gerente = "+gerente.getDepartamento());
        }
        else if(Empleado instanceof Object){
            System.out.println("Es de tipo Object");
        }
    }
}
