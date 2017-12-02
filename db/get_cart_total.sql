SELECT SUM(product_price)
FROM cart
WHERE user_id= $1;
