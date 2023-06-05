from ManejoArchivos import ManejoArchivos

# 1.5 Uso de with, archivos y contexto Manager Parte 1
# Manejo de contexto with:sintaxis simplificada,abre y cierra el archivo
with open('prueba.txt', 'r', encoding='utf-8') as archivo:
    print(archivo.read())

# No hace falta ni el try, ni el finally
# en el contexto de with lo que se ejecuta de manera automatica
# utiliza diferentes metodos: __enter__ este es el que abre
# ahora el siguiente metodo es el que cierra: __exit__

# 1.6 Uso de with, archivos y contexto Manager Parte 2
with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())
