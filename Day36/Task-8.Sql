DELIMITER $$

CREATE FUNCTION format_string(input_text VARCHAR(255))
RETURNS VARCHAR(255)
DETERMINISTIC
BEGIN
    DECLARE cleaned VARCHAR(255);

    SET cleaned = LOWER(TRIM(input_text));

    -- Capitalize first letter
    RETURN CONCAT(UCASE(LEFT(cleaned, 1)), SUBSTRING(cleaned, 2));
END $$

DELIMITER ;