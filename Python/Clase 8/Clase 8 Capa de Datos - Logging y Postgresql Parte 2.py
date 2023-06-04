"""
Clase 8: Capa de Datos Logging y Postgresql Parte 2
Laboratorio III: PYTHON
Team: CompuNerds
Scrum Master: Kevin Sosa
"""
from logger_base import log


#  8.1 Creación de la Clase Persona -- Alumno :


# 8.2 Prueba de la Clase Persona - Alumno: Nicolas Segovia

if __name__ == "__main__":
    persona1 = Persona(1, "Juan", "Perez", "jperez@mail.com")
    log.debug(persona1)
    persona2 = Persona(nombre="Jose", apellido="Lopez", email="jlopez@mail.com")
    log.debug(persona1)
    persona3 = Persona(id_persona=1)
    log.debug(persona1)

    # 8.3 Creación de la Clase Conexion: Parte 1, 2 y 3 - Alumno:

    # 8.4 Comienzo de la creación de la Clase PersonaDAO - Alumno:
