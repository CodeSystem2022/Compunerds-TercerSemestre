package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;

public class testEnumeraciones {
    public static void main(String[] args) {
       // System.out.println("Dia 1: "+Dias.LUNES);
       // indicarSemana(Dias.LUNES);
        System.out.println("Continente nr 4 : " + Continentes.AMERICA);
        System.out.println("Nr de paises en el 4to continente : " +Continentes.AMERICA.getPaises());
        System.out.println("Nr de habitantes en el 4to continente : " +Continentes.AMERICA.getHabitantes());
    }
    
    private static void indicarSemana(Dias dias){
        switch(dias){
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
            case MIERCOLES:
                System.out.println("Tercer dia de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto dia de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto dia de la semana");
                break;
            case SABADO:
                System.out.println("Sexto dia de la semana");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana");
                break;    
        }
    }

    private static void indicarSemanas(Dias dias) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    
}
