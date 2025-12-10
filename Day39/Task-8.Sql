CREATE TABLE user_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    login_time DATETIME
);
DELIMITER $$
CREATE PROCEDURE log_login(IN uname VARCHAR(50))
BEGIN
    INSERT INTO user_log(username, login_time)
    VALUES(uname, NOW());
END $$
DELIMITER ;
CALL log_login('Naresh');