#manejo de contexto with:sintaxis simplificada, abre y cierrra el archivo
with open('prueba.txt', 'r',encoding='utf8') as archivo:
    print(archivo.read())
#no hace falta ni el try ni el finally
# en el contexto with lo que se ejecuta de  manera automatica son los metodos: __enter__ y __exit__