select id,
 first_name,
 hire_date, 
DATADIFF(NOW(), hire_date) as days_since_hired
 from employees
 where id = 1;
SELECT * FROM assign.employees;
