from psycopg2 import pool
import psycopg2 as bd
from logger_base import log
import sys

class Conexion:
    _DATABASE = 'test_bd'
    _USERNAME = 'carla'
    _PASSWORD = '12345'
    _DB_PORT = '5432'
    _HOST = 'localhost'
    # _conexion = None
    # _cursor = None
    _MIN_CONN= 1
    _MAX_CONN= 5
    _pool= None

    @classmethod
    def obtenerConexion(cls):
        # if cls._conexion is None:
        #     try:
        #         cls._conexion = bd.connect(host=cls._HOST,
        #                                    user=cls._USERNAME,
        #                                    password=cls._PASSWORD,
        #                                    port=cls._DB_PORT,
        #                                    database=cls._DATABASE)
        #         log.debug(f'Conexion exitosa:{cls._conexion}')
        #         return cls._conexion
        #     except Exception as e:
        #         log.error(f'Ocurrio un error: {e}')
        #         sys.exit()
        # else:
        #     return cls._conexion
        conexion=cls.obtenerPool().getconn()
        log.debug(f'Conexion obtenida del pool:{conexion}')
        return conexion

    @classmethod
    def obtenerCursor(cls,conexion):
        # if cls._cursor is None:
        #     try:
        #         cls._cursor = cls.obtenerConexion().cursor()
        #         log.debug(f'Se abrio correctamente el cursor: {cls._cursor}')
        #         return cls._cursor
        #     except Exception as e:
        #         log.error(f'Ocurrio un error: {e}')
        #         sys.exit()
        # else:
        #     return cls._cursor
        pass
    @classmethod
    def obtenerPool(cls):
        if cls._pool is None:
            try:
                cls._pool = pool.SimpleConnectionPool(
                    cls._MIN_CONN,
                    cls._MAX_CONN,
                    host=cls._HOST,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    port=cls._DB_PORT,
                    database=cls._DATABASE
                )
                log.debug(f'Creacion del pool exitosa: {cls._pool}')
                return cls._pool
            except Exception as e:
                log.error(f'Ocurrio un error al obtener el pool:{e}')
                sys.exit()
        else:
            return cls._pool
# clase 11
    @classmethod
    def liberarConexion(cls, conexion):
        cls.obtenerPool().putconn(conexion)
        log.debug(f'Regresamos la conexión del pool: {conexion}')

    @classmethod
    def cerrarConexiones(cls):
        cls.obtenerPool().closeall()

if __name__ == '__main__':
    # Conexion.obtenerConexion()
    # Conexion.obtenerCursor()
    conexion1=Conexion.obtenerConexion()
    Conexion.liberarConexion(conexion1)
    conexion2=Conexion.obtenerConexion()
    Conexion.liberarConexion(conexion2)