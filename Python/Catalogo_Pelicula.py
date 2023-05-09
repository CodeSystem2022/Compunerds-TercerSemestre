#Pelicula.py
class Pelicula:
    def __int__(self, nombre):
        self._nombre = nombre

    def __str__(self):
        return f'Pelicula: {self._nombre}'

    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self, nombre):
        self._nombre = nombre
        
 
 #Catalogo_Peliculas.py
 import os

class CatalogoPeliculas:

    ruta_archivo = 'pelicula.txt'

    @classmethod
    def agregar_peliculas(cls, pelicula):
        with open(cls.ruta_archivo, 'a', encoding='utf8') as archivo:
            archivo.write('f{pelicula.nombre}\n')

    @classmethod
    def listar_peliculas(cls):
        with open(cls.ruta_archivo, 'r', encoding='utf8') as archivo:
            print(f'Catalogo de peliculas ' .center(50, '-'))
            print(archivo.read())


    @classmethod
    def eliminar_peliculas(cls):
        os.remove(cls.ruta_archivo)
        print(f'archivo eliminado : {cls.ruta_archivo}')
        
        
#test_catalogo_pelicula
from dominio.Peliculas import Pelicula
from servicio.catalogo_peliculas import CatalogoPeliculas as cp

opcion = None
while opcion != 4:
    try:
        print('Opcines: ')
        print('1. Agregar Pelicula')
        print('2. Listar las peliculas')
        print('3. Eliminar catalogo de peliculas')
        print('4. Salir')
        opcion = int(input('Digite una opcion de menu  (1-4): '))
        if opcion == 1:
            nombre_pelicula = input('Digite el nombre de la pelicula: ')
            pelicula = Pelicula(nombre_pelicula)
            cp.agregar_peliculas(pelicula)
        elif opcion == 2:
            cp.listar_peliculas()
        elif opcion ==3:
            cp.eliminar_peliculas()
    except Exception as e:
        print(f'Ocurrio un error de tipo: {e}')
        opcion = None
    else:
        print('Salimos del programa...')
