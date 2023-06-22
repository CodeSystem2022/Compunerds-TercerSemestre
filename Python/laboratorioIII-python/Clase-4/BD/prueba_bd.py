import psycopg2 # esto es para poder conectarnos a Postgres database

conexion = psycopg2.connect(
    user='carla', ##SE DEBE MODIFICAR SEGUN EL NOMBRE DE USUARIO DE SU PROPIA CUENTA DE POSTGRES
    password='12345',##SE DEBE MODIFICAR SEGUN LA CONTRASEÑA DE SU CUENTA DE POSTGRES
    host='localhost',##SE DEBE MODIFICAR SEGUN EL NOMBRE DE SU HOST LOCAL
    port='5432',##SE DEBE MODIRFICAR SEGUN SU NUMERO DE PUERTO
    database='test_bd'
)

cursor = conexion.cursor()
##definimos la sentencia que queremos que se ejecute
sentancia = "SELECT * FROM persona"
cursor.execute(sentancia) # de esta manera ejecutamos la sentencia
registro = cursor.fetchall() # recuperamos todos los registros q seran una lista
print(registro)##imprimimos los registros

cursor.close()##cerramos el objeto cursor
conexion.close()##cerramos la conexion