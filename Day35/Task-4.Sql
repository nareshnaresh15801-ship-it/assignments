SELECT 
    emp_code,
    LPAD(emp_code, 4, '0') AS padded_emp_code
FROM employees;