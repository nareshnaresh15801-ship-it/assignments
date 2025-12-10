-- create database Assign
-- use Assign
CREATE TABLE employees (
  emp_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(150),
  phone VARCHAR(50),         
  emp_code VARCHAR(10),      
  hire_date DATE,
  last_login DATETIME,
  notes TEXT,
  dept_id INT,
  salary DECIMAL(10,2),
  active BOOLEAN DEFAULT 1
);

INSERT INTO employees (first_name,last_name,email,phone,emp_code,hire_date,last_login,notes,dept_id,salary,active) VALUES
('Asha','Patel','  ASHA.PATEL@example.com ','+91-80-1234-5678','E1', '2022-03-01','2024-11-20 09:12:30',' new hire ',1,70000,1),
('Rahul','Mehra','rahul.mehra@EXAMPLE.com','(080) 1234 5679','E02', '2021-07-10','2024-11-18 18:05:00','On probation',1,82000,1),
('Karan','Singh','karan.singh@example.com','080.1234.5680',' 003','2019-11-12','2024-10-02 08:00:00',' senior',1,95000,1),
('Sneha','Desai','sneha.desai@example.com','+91 80 1234 5681','4','2020-04-15','2024-09-30 12:00:00',' remote ',1,60000,1),
('Vikram','Rao',' vikram.rao@example.com  ','080-1234-5682','005','2018-08-05','2024-11-21 07:45:00','on leave',1,78000,1),
('Priya','Iyer','priya.iyer@example.com','+918012345683','E006','2023-01-10','2024-11-21 10:10:10',' probation ',1,88000,1),

('Sima','Roy','SIMa.Roy@example.com','(022)-555-0100','HR1','2020-11-05','2024-11-20 11:20:00',' HR lead',2,50000,1),
('Anita','Kapoor','anita.kapoor@example.com','022 555 0101','002','2022-06-20','2024-11-19 09:00:00','',2,52000,1),
('Pooja','Seth','pooja.seth@example.com','022.555.0102','003','2021-02-17','2024-11-18 08:00:00',' part-time ',2,48000,1),
('Deepak','Chauhan','deepak.chauhan@example.com','+91-22-555-0103','004','2019-03-11','2024-11-16 16:45:00','inactive',2,55000,0),
('Farah','Qureshi','farah.qureshi@example.com','+91 22 5550 104','005','2023-02-18','2024-11-17 09:30:00','new',2,54000,1);

select * from employees where year(hire_date) = 2022;
SELECT * FROM assign.employees;