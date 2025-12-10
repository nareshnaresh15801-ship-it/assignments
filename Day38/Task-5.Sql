SELECT 
    order_id,
    product_id,
    qty,
    price,
    total_price(qty, price) AS total_amount
FROM order_items;