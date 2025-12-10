CREATE VIEW student_department_view AS
SELECT 
    s.student_id,
    s.student_name,
    d.department_name
FROM 
    students s
JOIN 
    departments d
ON 
    s.department_id = d.department_id;