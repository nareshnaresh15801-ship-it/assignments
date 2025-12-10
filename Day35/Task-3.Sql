SELECT 
    email,
    TRIM(email) AS trimmed_email
FROM your_table
WHERE email <> TRIM(email);