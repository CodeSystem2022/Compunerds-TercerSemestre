import psycopg2 as bd #esto es para poder conectarnos a Postgres
conexion = bd.connect(
    user='carla',
    password='12345',
    host='localhost',
    port='5432',
    database='test_bd')
try:
    #conexion.autocommit= False // esto directamente no deberia estar
    cursor = conexion.cursor()
    sentencia= 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    valores= ('maria', 'Esparza', 'mesparza@mail.com')
    cursor.execute(sentencia, valores)
    conexion.commit() #hacemos el commit manualmente
    print('Termina la transaccion')

except Exception as e:
    conexion.rollback()
    print(f'Ocurrio un error, se hizo un rollback: {e}')
finally:
    conexion.close()