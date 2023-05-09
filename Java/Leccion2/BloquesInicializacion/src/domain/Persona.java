package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersona;
    
    static{
        System.out.println("Ejercicio de bloque estatico");
        ++Persona.contadorPersona;
        //idPersona = 10; No es estatico por eso el error
    }
    
    { //BLOQUE DE INICIALIZACION NO ESTATICO (contexto dinamico
        System.out.println("Ejecucion de bloque NO estatico");
        this.idPersona = Persona.contadorPersona++; //Incremento el atributo
    }
    
    //los bloques de inicializacion se ejecutan antes del contador 
    
    public Persona(){
        System.out.println("Ejecucion del contructor");
    }
    public int idPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    
}
