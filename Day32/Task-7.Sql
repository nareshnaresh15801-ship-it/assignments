create the database products;
use products;

create table products(
id int auto_increment primary key,
name varchar(20),
Price int(20),
create_at datetime default current_timestamp);


insert into products(name, price)
values
('Laptop', 55000),
('Bluetooth Speaker', 700),
('Keyboard', 900);