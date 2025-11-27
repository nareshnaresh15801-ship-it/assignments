SELECT * FROM products.products;

insert into products(name, price)
values('Laptop', 30000),
('Light', 100);

-- select * from products where Price > 500;

-- update products 
-- set name ='name'
-- where id = 2;

--Order by price:

SELECT *
FROM products
ORDER BY price DESC
LIMIT 3;