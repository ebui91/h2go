INSERT INTO users (authid, name) VALUES ($1, $2);
SELECT FROM users WHERE authid= $1;
