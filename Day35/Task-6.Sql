CREATE TABLE employee_contacts_clean (
    emp_id INT PRIMARY KEY,
    full_name VARCHAR(100),
    clean_email VARCHAR(100),
    clean_phone VARCHAR(20)
);
INSERT INTO employee_contacts_clean (emp_id, full_name, clean_email, clean_phone)
SELECT
    emp_id,
    full_name,
    LOWER(TRIM(email)) AS clean_email,
    REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(
        REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(
        phone, ' ', ''), '-', ''), '(', ''), ')', ''), '+', ''),
        '.', ''), '/', ''), '*', ''), '#', ''), '_' , '') AS clean_phone
FROM employee_contacts;