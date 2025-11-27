SELECT * FROM employees.employees;
INSERT INTO employees (first_name, last_name, salary, hire_date, active)
VALUES 
('Asha', 'Patel', 70000, '2022-03-01', 1),
('Rahul', 'Mehra', 82000, '2021-07-10', 1),
('Sima', 'Roy', 50000, '2020-11-05', 0),
('Priya', 'Dharsini', 60000, '2021-07-10', 1);

--In this step.We can order asc the employees salary:

select * from employees order by salary asc;