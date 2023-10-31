create table if not exists "UserEntities" (
    id serial primary key,
    email varchar(255) not null,
    name varchar(255) not null,
    createdAt timestamp not null,
    updatedAt timestamp null
);
