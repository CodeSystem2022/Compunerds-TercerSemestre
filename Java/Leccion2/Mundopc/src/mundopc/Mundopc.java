/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package mundopc;

import ar.com.system2023.mundopc.*;

/**
 *
 * @author kvn
 */
public class Mundopc {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP" , 13); //Importar clase
        Teclado tecladoHP = new Teclado("Bluetooh", "HP ");
        Raton ratonHP = new Raton("Bluetooh", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        //
        Monitor monitorLG = new Monitor("LG" , 32); //Importar clase
        Teclado tecladoLG = new Teclado("Bluetooh", "LG");
        Raton ratonLG = new Raton("Bluetooh", "LG");
        Computadora computadoraLG = new Computadora("Computadora LG", monitorLG, tecladoLG, ratonLG);
        //
         //
        Monitor monitorLenovo = new Monitor("Lenovo" , 30); //Importar clase
        Teclado tecladoLenovo = new Teclado("Bluetooh", "Lenovo");
        Raton ratonLenovo = new Raton("Bluetooh", "Lenovo");
        Computadora computadoraLenovo = new Computadora("Computadora Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);
         //
        Monitor monitorMax = new Monitor("Max" , 32); //Importar clase
        Teclado tecladoMax = new Teclado("USB", "Max");
        Raton ratonMax = new Raton("USB", "Max");
        Computadora computadoraMax = new Computadora("Computadora Max", monitorMax, tecladoMax, ratonMax);
         //
        Monitor monitorGenius = new Monitor("Genius" , 19); //Importar clase
        Teclado tecladoGenius = new Teclado("PS/2", "Genius");
        Raton ratonGenius = new Raton("PS/2", "LG");
        Computadora computadoraGenius = new Computadora("Computadora Genius", monitorGenius, tecladoGenius, ratonGenius);
       //
        Computadora computadoraVarias = new Computadora("Computadora diferentes marcas", monitorHP, tecladoLG, ratonLG);
        
        Orden orden1 = new Orden();
        Orden orden2 = new Orden();
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraLG);
        orden1.agregarComputadora(computadoraGenius);
        orden1.agregarComputadora(computadoraMax);
        orden1.agregarComputadora(computadoraMax);
        orden1.agregarComputadora(computadoraVarias);
        orden1.agregarComputadora(computadoraVarias);
        orden1.agregarComputadora(computadoraLG);
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraLenovo);
        orden1.agregarComputadora(computadoraLenovo);
        orden2.agregarComputadora(computadoraLG);
        orden2.agregarComputadora(computadoraVarias);
        orden1.mostrarOrden();
        orden2.mostrarOrden();
    }
}
