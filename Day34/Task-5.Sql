create database naresh;
use naresh;
 create table demo_types (
id int auto_increment primary key,
full_name varchar(100),
age int,
salary decimal(10,2),
hire_date date,
login_time datetime,
active boolean
);

insert into  demo_types (full_name , age , salary, hire_date , login_time, active)
values
 ("arun", 18 , 72000.50, '2022-03-01', now(), 1 ),
("rahul", 33, 82000, '2021-07-15' , '2023-05-01 14:30:00', 1),
('sima roy' , 29, 50000, '2020-11-01',now(), 0),
("danush", 29, 30000, '2020-11-01', now(), 1);

-- Show top 5 highest salaries:

select full_name, salary from demo_types where salary >=50000;