package domain;


public class Gerente extends empleado{
    private String departamento;
    
    public Gerente(String nombre, double sueldo, String departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    
    @Override
    
    public String ObetenerDetalles(){
        return super.ObetenerDetalles()+", Departamento: "+this.departamento;
    }
}
