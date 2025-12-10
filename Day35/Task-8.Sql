DELIMITER $$

CREATE PROCEDURE generate_usernames()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE emp_id INT;
    DECLARE f VARCHAR(50);
    DECLARE l VARCHAR(50);
    DECLARE base_username VARCHAR(50);
    DECLARE final_username VARCHAR(50);
    DECLARE suffix INT;

    
    DECLARE cur CURSOR FOR 
    SELECT employee_id, first_name, last_name FROM employees;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO emp_id, f, l;
        IF done = 1 THEN 
            LEAVE read_loop;
        END IF;

        
        SET base_username = CONCAT(
            LOWER(SUBSTRING(f, 1, 3)),
            LOWER(SUBSTRING(l, 1, 3)),
            LPAD(emp_id, 4, '0')
        );

        SET final_username = base_username;
        SET suffix = 1;

        
        WHILE EXISTS (SELECT 1 FROM employees WHERE username = final_username) DO
            SET final_username = CONCAT(base_username, '_', suffix);
            SET suffix = suffix + 1;
        END WHILE;

    
        UPDATE employees
        SET username = final_username
        WHERE employee_id = emp_id;

    END LOOP;

    CLOSE cur;
END $$

DELIMITER ;


--Run The Table
CALL generate_usernames();