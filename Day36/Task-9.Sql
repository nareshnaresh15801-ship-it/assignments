SELECT
    full_name,
    SUBSTRING(full_name, 1, CHARINDEX(' ', full_name) - 1) AS first_name,
    SUBSTRING(full_name, CHARINDEX(' ', full_name) + 1, LEN(full_name)) AS last_name,
    CONCAT(
        SUBSTRING(full_name, 1, 1),
        SUBSTRING(
            SUBSTRING(full_name, CHARINDEX(' ', full_name) + 1, LEN(full_name)),
            1,
            1
        )
    ) AS initials
FROM your_table;
