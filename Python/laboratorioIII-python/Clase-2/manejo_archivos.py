#declaramos una variable
try:
    archivo=open('prueba.txt','w', encoding='utf-8')#la w es de write
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción,ejecución y producción \n')
    archivo.write('Las letras son:\n r read leer, \na append anexa, \nw write escribe, \nx crea un archivo')
    archivo.write(
        '\nt esta es para texto o text, \nb archivos binarios, \nw+ lee y escribe')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally:##siempre se ejecuta
    archivo.close()#Con esto se debe cerrar el archivo