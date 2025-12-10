DELIMITER $$
CREATE PROCEDURE calc_bill(
    IN price DECIMAL(10,2),
    IN qty INT,
    OUT total DECIMAL(10,2)
)
BEGIN
    SET total = price * qty;
END $$
DELIMITER ;
CALL calc_bill(100, 5, @bill);
SELECT @bill;