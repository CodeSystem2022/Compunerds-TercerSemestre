from Persona import Persona
from conexion import Conexion
from logger_base import log
import sys


class PersonaDAO:
    """
    DAO significa: Data Access Object
    CRUD significa:
        Create -> Insertar
        Read -> Leer
        Update -> Actualizar
        Delete -> Eliminar
    """

    _SELECCIONAR = "SELECT * FROM persona ORDER BY id_persona"
    _INSERTAR = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
    _ACTUALIZAR = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
    _ELIMINAR = "DELETE FROM persona WHERE id_persona=%s"

    @classmethod
    def seleccionar(cls):
        with Conexion.obtenerConexion() as conn:
            with Conexion.obtenerCursor(conn) as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                personas = []
                for registro in registros:
                    persona = Persona(
                        registro[0], registro[1], registro[2], registro[3]
                    )
                    personas.append(persona)
                return personas


if __name__ == "__main__":
    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)
