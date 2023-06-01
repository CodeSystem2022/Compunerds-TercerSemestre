import logging as log



"""
Clase 7: Capa de Datos 'Logging y Postgresql Parte 1'
Laboratorio III: PYTHON
Team: CompuNerds
Scrum Master: Nicolas Segovia
"""

# 7.1 Explicación con el diagrama de clase UML (Tarea: hacer el diagrama UML) - Alumno: Giuliana Dealbera Etchechoury

<diagram program="umletino" version="15.1"><zoom_level>10</zoom_level><element><id>UMLClass</id><coordinates><x>140</x><y>50</y><w>220</w><h>230</h></coordinates><panel_attributes>Conexión
--
_-DATABASE_
_-USERNAME: String_
_-PASSWORD: String_
_-DB PORT: String_
_-HOST: String_
_-conexion: conection_
-cursos: Cursor_
--
_+obetenerConexion(cls): Connection_
_+obtenerCursor(cls): Cursor_
_cerrar(cls)_
--
Responsabilidades:
Administrar la conexión a la base 
de datos
</panel_attributes><additional_attributes></additional_attributes></element><element><id>UMLClass</id><coordinates><x>520</x><y>50</y><w>210</w><h>170</h></coordinates><panel_attributes>Persona
--
-id_persona: int
-nombre: String
-apellido: String
-email: String
--
+__str__(): String
+metodo Get/Set de cada atributo
--
Responsabilidades:
Crear objetos de la entidad de 
Persona</panel_attributes><additional_attributes></additional_attributes></element><element><id>UMLClass</id><coordinates><x>510</x><y>410</y><w>230</w><h>200</h></coordinates><panel_attributes>PersonaDuo
--
_-SELECCIONAR: String_
_-INSERTAR: String_
_-ACTUALIZAR: String_
_-ELIMINAR: String_
--
_+seleccionar(cls)_
_+insertar(cls, persona)_
_+actualizar(cls, persona)_
_+eliminar(cls, persona)_
--
Responsabilidades:
Realizar las operaciones sobre la base 
de datos de la entidad Persona</panel_attributes><additional_attributes></additional_attributes></element><element><id>Relation</id><coordinates><x>620</x><y>210</y><w>30</w><h>220</h></coordinates><panel_attributes>lt=&lt;&lt;&lt;&lt;-</panel_attributes><additional_attributes>10;200;10;10</additional_attributes></element><element><id>Relation</id><coordinates><x>240</x><y>270</y><w>290</w><h>270</h></coordinates><panel_attributes>lt=&lt;&lt;&lt;&lt;-</panel_attributes><additional_attributes>270;250;10;250;10;10</additional_attributes></element><element><id>UMLClass</id><coordinates><x>120</x><y>0</y><w>100</w><h>30</h></coordinates><panel_attributes>acceso_datos</panel_attributes><additional_attributes></additional_attributes></element><element><id>UMLClass</id><coordinates><x>120</x><y>30</y><w>650</w><h>600</h></coordinates><panel_attributes></panel_attributes><additional_attributes></additional_attributes></element></diagram>

# 7.2 Manejo de logging: Parte 1 - Alumno: Kevin Sosa

#Llamamos a la configuracion basica.
if __name__ == '__main__':
    log.basicConfig(level=log.INFO)
    log.debug('Mensaje a nivel debug')
    log.info('Mensaje a nivel info')
    log.warning('Mensaje a nivel warning')
    log.error('Mensaje a nivel error')
    log.warning('Mensaje a nivel critical')
    
# 7.3 Manejo de logging: Parte 2 - Alumno:


# 7.5 Video de otro proyecto llamado: Partículas - Alumno:
