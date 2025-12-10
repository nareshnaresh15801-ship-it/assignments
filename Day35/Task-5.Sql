SELECT 
    phone,
    REPLACE(phone, '-', '') AS cleaned_phone
FROM employees;