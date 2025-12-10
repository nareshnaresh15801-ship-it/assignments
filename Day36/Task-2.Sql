
SELECT 
    name,
    birthdate,
    CASE
        WHEN DATE_FORMAT(birthdate, '%m-%d') >= DATE_FORMAT(CURDATE(), '%m-%d')
        THEN STR_TO_DATE(CONCAT(YEAR(CURDATE()), '-', DATE_FORMAT(birthdate, '%m-%d')), '%Y-%m-%d')
        ELSE STR_TO_DATE(CONCAT(YEAR(CURDATE()) + 1, '-', DATE_FORMAT(birthdate, '%m-%d')), '%Y-%m-%d')
    END AS next_birthday
FROM employees;