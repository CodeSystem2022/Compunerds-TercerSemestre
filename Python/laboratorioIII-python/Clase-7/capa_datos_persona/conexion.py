import psycopg2 as bd
from logger_base import log
import sys

class Conexion:
    _DATABASE='test_bd'
    _USERNAME='carla'
    _PASSWORD='12345'
    _DB_PORT='5432'
    _HOST='localhost'
    _conexion= None
    _cursor= None

@classmethod
def obtenerConexion(cls):
    if cls._conexion is None:
        try:
            cls._conexion = bd.connect(host=cls._HOST,
                                       user=cls._USERNAME,
                                       password=cls._PASSWORD,
                                       port=cls._DB_PORT,
                                       database=cls._DATABASE)
            log.debug(f'Conexion exitosa:{cls._conexion}')
            return cls._conexion
        except Exception as e:
            log.error(f'Ocurrio un error: {e}')
            sys.exit()
    else:
        return cls._conexion