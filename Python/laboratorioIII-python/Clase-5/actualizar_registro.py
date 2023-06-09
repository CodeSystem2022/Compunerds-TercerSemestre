import psycopg2 #esto es para poder conectarnos a Postgres
conexion = psycopg2.connect(
    user='carla',
    password='12345',
    host='localhost',
    port='5432',
    database='test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'

            valores = ('Juan Carlos', 'Roldan', 'rcarlos@mail.com', 1) #es una tupla de tuplas
            cursor.execute(sentencia, valores) #de esta manera ejecutamos la sentencia

            registros_actualizados = cursor.rowcount

            print(f'Los registros actualizados son: {registros_actualizados}')
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()