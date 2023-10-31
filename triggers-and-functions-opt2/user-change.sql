-- create table to save changes
create table if not exists "UserChange" (
    id serial primary key,
    userId varchar(255) not null,
    email varchar(255) not null,
    name varchar(255) not null,
    changeType varchar(50) not null,
    changedAt timestamp null
);

-- create function
create or replace function capture_user_changes() returns trigger as $$
begin
    if TG_OP = 'INSERT' then
        insert into "UserChange" (userId, email, name, changeType, changedAt)
        values (NEW.id, NEW.email, NEW.name, 'INSERT', now());
    elsif TG_OP = 'UPDATE' then
        insert into "UserChange" (userId, email, name, changeType, changedAt)
        values (OLD.id, OLD.email, OLD.name, 'UPDATE (Before)', now());

        insert into "UserChange" (userId, email, name, changeType, changedAt)
        values (NEW.id, NEW.email, NEW.name, 'UPDATE (After)', now());
    elsif TG_OP = 'DELETE' then
        insert into "UserChange" (userId, email, name, changeType, changedAt)
        values (OLD.id, OLD.email, OLD.name, 'DELETE', now());
    end if;

    return NEW;
end;
$$ language plpgsql;

-- create trigger
create trigger user_change_trigger
before insert or update or delete on "UserEntities"
for each row
execute function capture_user_changes();
