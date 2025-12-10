SELECT 
    YEAR(hire_date) AS hire_year,
    MONTH(hire_date) AS hire_month_number,
    DATE_FORMAT(hire_date, '%M') AS hire_month,
    COUNT(*) AS hires
FROM employees
WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 24 MONTH)
GROUP BY 
    YEAR(hire_date),
    MONTH(hire_date)
ORDER BY 
    YEAR(hire_date),
    MONTH(hire_date);