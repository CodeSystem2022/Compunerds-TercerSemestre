# r es de read, a es de append, w es de write, x crea un archivo,t especifica el tipo de archivo (texto o text), b tipo de archivo binario, w+ se utiliza para leer y tambien escribir informacion,r+ para escribir y leer informacion
archivo = open('prueba.txt', 'r', encoding='utf-8')
# print(archivo.read())
# print(archivo.read(5))#muestra las 5 primeras letras de la primer palabra
print(archivo.readline())  # lee la linea completa

##vamos a iterar el archivo, cada una de las lineas
##for linea in archivo:
    ##print(linea) ##iteramos todos los elementos del archivo
print(archivo.readlines()[3])##accedemos al archivo como si fuera una lista

#anexamos informacion,copiamos a otro
archivo2=open('copia.txt','a',encoding='utf8')
archivo2.write(archivo.read())
archivo.close()#cerramos el primer archivo
archivo2.close()#cerramos el segundo aechivo
print('Se ha terminado el proceso de leer y copiar archivos\n')
