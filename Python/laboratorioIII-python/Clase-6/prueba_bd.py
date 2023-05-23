import psycopg2 #esto es para poder conectarnos a Postgres
conexion = psycopg2.connect(
    user='postgres',
    password='4271369.',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' # el asterisco indica todo el archivo pero se puede seleccionar una columna o fila o ID
            id_persona= input('Digite un nro para el id_persona: ')
            cursor.execute(sentencia, (id_persona,)) #de esta manera ejecutamos la sentencia
            registros = cursor.fetchone()#recuperamos todos los registros que seran una lista si ponemos fetchone solo uno
            print(registros)

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()