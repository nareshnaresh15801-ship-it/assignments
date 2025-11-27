create database  company_nar;
use company_nar;

create table employees(
emp_id int primary key auto_increment,
first_name varchar(50),
salary decimal(5,3)
);

select * from  employees;

insert into employees (emp_id , first_name, salary)
values (  4, "naresh" ,15.12),
 (2,"Vishal",12.22),
 (3,"Vicky",13.22)
