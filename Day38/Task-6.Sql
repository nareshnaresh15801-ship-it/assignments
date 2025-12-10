SELECT 
    order_id,
    product_id,
    quantity,
    unit_price,
    total_price(quantity, unit_price) AS total_amount
FROM order_items;