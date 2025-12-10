create database br;

use br;

CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    salary DECIMAL(10,2),
    hire_date DATE
);
INSERT INTO employees (emp_name, department, salary, hire_date) VALUES
('Arun Kumar', 'IT', 45000.00, '2022-03-15'),
('Priya Sharma', 'HR', 38000.00, '2021-11-10'),
('Vikas Menon', 'Finance', 52000.00, '2020-07-25'),
('Sneha Reddy', 'Marketing', 41000.00, '2023-01-05'),
('Rohan Singh', 'IT', 60000.00, '2019-09-18');
SELECT * FROM br.employees;

-- We can filter the employees salary >30000:

select emp_name,salary from employees where salary >30000;