CREATE VIEW customer_order_summary AS
SELECT 
    customer_id,
    COUNT(*) AS total_orders,
    SUM(order_total) AS total_spent
FROM orders
GROUP BY customer_id;