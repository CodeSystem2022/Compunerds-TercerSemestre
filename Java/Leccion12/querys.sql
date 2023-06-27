-- Comenzamos con CRUD: create(insertar), read(leer), update(actualizar), delete(eliminar)
-- Listar los estudiantes (read)
SELECT * FROM estudiantes2022;

-- Insertar estudiante
INSERT INTO estudiantes2022 (nombre, apellido, telefono, email) VALUES ("Nicolas", "Segovia", "2614545456", "nico@email.com");

-- Update (modificar/actualizar)
UPDATE estudiantes2022 SET nombre="Nicolas", apellido="Segovia", email="nico@email.com" WHERE idestudiantes2022= 1;

-- Delete (eliminar) 
 DELETE FROM estudiantes2022 WHERE idestudiantes2022 IN (2, 4);
 
 -- Para modificar el estudiantes2022 y comience en 1
 ALTER TABLE estudiantes2022 AUTO_INCREMENT = 1;