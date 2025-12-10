CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer VARCHAR(50),
    price DECIMAL(10,2),
    qty INT
);
DELIMITER $$
CREATE PROCEDURE add_order(
    IN cust VARCHAR(50),
    IN pr DECIMAL(10,2),
    IN q INT
)
BEGIN
    INSERT INTO orders(customer, price, qty)
    VALUES (cust, pr, q);
END $$
DELIMITER ;
CALL add_order('Raj', 350, 3);