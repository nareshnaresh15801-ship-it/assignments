SELECT * FROM products.products;

insert into products(name, price)
values('Laptop', 30000),
('Light', 100);

--In this step. we can list > price:

select * from products where Price > 500;