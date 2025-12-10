SELECT
    start_date,
    end_date,
    TIMESTAMPDIFF(YEAR, start_date, end_date) AS diff_years,
    TIMESTAMPDIFF(MONTH, start_date, end_date) AS diff_months,
    DATEDIFF(end_date, start_date) AS diff_days
FROM (
    SELECT 
        '2000-05-15' AS start_date,
        '2025-12-10' AS end_date
) AS dates;