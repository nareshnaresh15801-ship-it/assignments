CREATE TABLE student_info (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    phone VARCHAR(20)
);
DELIMITER $$
CREATE PROCEDURE update_phone(IN sid INT, IN new_phone VARCHAR(20))
BEGIN
    UPDATE student_info SET phone = new_phone WHERE id = sid;
END $$
DELIMITER ;
CALL update_phone(1, '9876543210');