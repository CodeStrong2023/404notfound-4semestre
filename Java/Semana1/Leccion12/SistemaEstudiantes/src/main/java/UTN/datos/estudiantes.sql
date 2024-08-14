/*comenzamos con CRUD: create(insertar), read(leer) ,update (actualizar),delete(eliminar)
listar los estudiantes(read)*/
SELECT * FROM estudiantes2022;
/*insertar estudiante*/
insert into estudiantes2022(nombre, apellido , telefono, email) values ("juan", "perez","2614545456","juan@gmail.com");
/*update(modificar)*/
update estudiantes2022 set nombre="juan carlos", apellido="garcia" where idestudiantes2022=1;
/*delete(eliminar)*/
delete from estudiantes2022 where idestudiantes2022=3;
/*para modificar el idestudiantes2022 y comience en 1*/
alter table estudiantes2022 auto_increment=1;





















