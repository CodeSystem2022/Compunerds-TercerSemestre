import psycopg2 # esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(
    user = "postgres",
    password = "admin",
    host = "127.0.0.1",
    database = "test_bd"
)

cursor = conexion.cursor()
sentancia = "SELECT * FORM persona"
cursor.execute(sentancia) # de esta manera ejecutamos la sentencia
registro = cursor.fetchall() # recuperamos todos los registros q seran una lista
print(registro)

cursor.close()
conexion.close()