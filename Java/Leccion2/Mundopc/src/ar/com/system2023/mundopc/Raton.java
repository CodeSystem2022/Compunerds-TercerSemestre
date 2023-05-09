/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ar.com.system2023.mundopc;

/**
 *
 * @author kvn
 */
public class Raton extends DispositivoEntrada{
    private final int idRaton;
    private static int ContadorRatones;
    
    public Raton(String tipoEntrada, String marca){
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.ContadorRatones;
    }

    @Override
    public String toString() {
        return "Raton{" + "idRaton=" + idRaton +", "+super.toString()+ '}';
    }
    
    
}
