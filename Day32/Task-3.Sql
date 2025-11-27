create database starline;

use starline;

 create table employees(
  first_name varchar(500),   
  last_name varchar(500),
  salary decimal(10,2),
  hire_date date,
  dept_id integer, 
  active boolean
  );  


      INSERT INTO employees (first_name, last_name, salary, hire_date, dept_id, active) VALUES 
                                                                            
    ('Asha', 'Patel', 70000, '2022-03-01', 1, 1),
     ('Rahul', 'Mehra', 82000, '2021-07-10', 1, 1),
	 ('Karan', 'Singh', 95000, '2019-11-12', 1, 1);

      

     update employees set salary =99000  where first_name="Karan";
