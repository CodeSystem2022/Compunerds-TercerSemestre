package test;

public class TestArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(3,4,5);
        imprimirNumeros(7,8,9);
        variosParametros("Juan","Soria" 10, 11, 12);
    }   
    
    private static void variosParametros(String nombre,String apellido, int ...numeros){
        System.out.println("Nombre : "+nombre);
        System.out.println("Apellido : "+apellido);
        imprimirNumeros(numeros);
    }
    
    private static void imprimirNumeros(int ...numeros){
            for (int i = 0; i < numeros.length; i++) {
                System.out.println("Elementos : "+numeros[i]);
            }
      
    }
}
