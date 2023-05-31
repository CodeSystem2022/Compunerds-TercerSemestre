import logging as log



"""
Clase 7: Capa de Datos 'Logging y Postgresql Parte 1'
Laboratorio III: PYTHON
Team: CompuNerds
Scrum Master: Nicolas Segovia
"""

# 7.1 Explicación con el diagrama de clase UML (Tarea: hacer el diagrama UML) - Alumno:


# 7.2 Manejo de logging: Parte 1 - Alumno: Kevin Sosa

#Llamamos a la configuracion basica.
if __name__ == '__main__':
    log.basicConfig(level=log.INFO)
    log.debug('Mensaje a nivel debug')
    log.info('Mensaje a nivel info')
    log.warning('Mensaje a nivel warning')
    log.error('Mensaje a nivel error')
    log.warning('Mensaje a nivel critical')
    
# 7.4 Manejo de logging: Parte 2 - Alumno: Kiara Castañeda
log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%I:%M:%S %P',
                handlers=[
                    log.FileHandler('capa_datos.log'),
                    log.StreamHandler()
                ])


# 7.5 Video de otro proyecto llamado: Partículas - Alumno:
