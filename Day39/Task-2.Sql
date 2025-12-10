CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT
);
DELIMITER $$
CREATE PROCEDURE employees_by_dept(IN d_id INT)
BEGIN
    SELECT * FROM employees WHERE dept_id = d_id;
END $$
DELIMITER ;
CALL employees_by_dept(2);
