package paquete1;

public class Clase1 {
    public String atributoPublic = "Valor de atributo publio";
    
    public Clase1(){
        System.out.println("Constructor public");
    }
    
    protected Clase1(String atributoPublic){
        System.out.println("Constructor protected");
    }
    
        public void metodoPublico(){
        System.out.println("Metodo public");
    }
    
    protected void metodoProtected(){
        System.out.println("Metodo protected");
    }
}
