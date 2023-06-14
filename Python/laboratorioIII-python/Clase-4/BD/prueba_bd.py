import psycopg2 # esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(
    user='postgresSQL',
    password='admin',
    host='localhost',
    port='27017',
    database='test_db'
)

cursor = conexion.cursor()
sentancia = "SELECT * FROM persona"
cursor.execute(sentancia) # de esta manera ejecutamos la sentencia
registro = cursor.fetchall() # recuperamos todos los registros q seran una lista
print(registro)

cursor.close()
conexion.close()