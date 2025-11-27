select * from  employees .employees;
INSERT INTO employees (first_name, last_name, salary, hire_date, dept_id, active) VALUES 
('Asha', 'Patel', 70000, '2022-03-01', 1, 1),
('Rahul', 'Mehra', 82000, '2021-07-10', 1, 1),
('Karan', 'Singh', 95000, '2019-11-12', 1, 1);

-- delete employees table hire year < 2021;


 select * from  employees where hire_date <"2021-07-01";

