CREATE TABLE products (
    product_id INT PRIMARY KEY,
    name VARCHAR(50),
    price DECIMAL(10,2)
);
DELIMITER $$
CREATE PROCEDURE increase_price(
    IN pid INT,
    IN percent_inc DECIMAL(10,2)
)
BEGIN
    UPDATE products
    SET price = price + (price * (percent_inc / 100))
    WHERE product_id = pid;
END $$
DELIMITER ;
CALL increase_price(101, 10);