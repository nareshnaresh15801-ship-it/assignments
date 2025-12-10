SELECT 
    event_name,
    event_date,
    DATEDIFF(event_date, CURDATE()) AS days_left
FROM events;