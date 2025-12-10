SELECT product_name, price, calculate_tax(price) AS tax
FROM products;