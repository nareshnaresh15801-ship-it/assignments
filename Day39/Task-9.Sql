CREATE TABLE sales (
    sale_id INT,
    amount DECIMAL(10,2),
    sale_date DATE
);
DELIMITER $$
CREATE PROCEDURE month_sales(IN month_no INT, IN year_no INT)
BEGIN
    SELECT SUM(amount) AS total_sales
    FROM sales
    WHERE MONTH(sale_date) = month_no
      AND YEAR(sale_date) = year_no;
END $$
DELIMITER ;
CALL month_sales(12, 2025);