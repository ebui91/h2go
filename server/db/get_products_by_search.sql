SELECT * FROM products
WHERE name LIKE '%' + $1 + '%';
