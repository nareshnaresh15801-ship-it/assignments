CREATE OR REPLACE VIEW vw_valid_phones AS
SELECT 
    employee_id,
    first_name,
    last_name,
    phone AS raw_phone,

    
    REPLACE(
        REPLACE(
            REPLACE(
                REPLACE(phone, ' ', ''), 
            '-', ''), 
        '(', ''), 
    ')', '') AS cleaned_phone,


    REGEXP_REPLACE(phone, '[^0-9]', '') AS digits_only,

    
    CASE 
        WHEN LENGTH(REGEXP_REPLACE(phone, '[^0-9]', '')) BETWEEN 10 AND 15 THEN
            CONCAT('+', REGEXP_REPLACE(phone, '[^0-9]', ''))
        ELSE 
            'INVALID'
    END AS e164_phone,

    CASE 
        WHEN LENGTH(REGEXP_REPLACE(phone, '[^0-9]', '')) BETWEEN 10 AND 15 
            THEN 'VALID'
        ELSE 'INVALID'
    END AS phone_status

FROM employees;