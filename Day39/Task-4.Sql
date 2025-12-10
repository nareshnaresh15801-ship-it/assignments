CREATE TABLE payroll (
    emp_id INT,
    name VARCHAR(50),
    salary DECIMAL(10,2)
);
DELIMITER $$
CREATE PROCEDURE salary_range(IN min_sal DECIMAL(10,2), IN max_sal DECIMAL(10,2))
BEGIN
    SELECT * FROM payroll
    WHERE salary BETWEEN min_sal AND max_sal;
END $$
DELIMITER ;
CALL salary_range(20000, 50000);