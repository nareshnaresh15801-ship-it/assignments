CREATE TABLE salaries (
    emp_id INT,
    salary DECIMAL(10,2)
);
DELIMITER $$
CREATE PROCEDURE highest_salary(OUT max_sal DECIMAL(10,2))
BEGIN
    SELECT MAX(salary) INTO max_sal FROM salaries;
END $$
DELIMITER ;
CALL highest_salary(@result);
SELECT @result;