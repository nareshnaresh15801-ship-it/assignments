CREATE VIEW high_scorers AS
SELECT 
    student_name,
    marks
FROM 
    students
WHERE 
    marks > 80;