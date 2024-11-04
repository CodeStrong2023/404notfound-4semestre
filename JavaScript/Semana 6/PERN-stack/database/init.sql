create table tareas (
    id serial primary key,
    titulo varchar(255) not null,
    descripcion TEXT
)

ALTER TABLE tareas ADD COLUMN usuario_id INTEGER REFERENCES usuarios(id);

--remove unique from titulo
ALTER TABLE tareas DROP CONTRAINT tareas_titulo_key;

CREATE TABLE usuarios (
    id serial primary key,
    name varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null,
    fecha_registro timestamp not null default current_timestamp,
    fecha_actualizacion timestamp not null default current_timestamp
);

alter table usuarios add column gravatar varchar(255);





















