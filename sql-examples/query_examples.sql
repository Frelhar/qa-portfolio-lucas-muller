-- Contar o total de pedidos
SELECT COUNT(*) AS total_pedidos
FROM orders;

-- Verificar pedidos sem usuário associado (campo user_id nulo)
SELECT COUNT(*) AS pedidos_sem_usuario
FROM orders
WHERE user_id IS NULL;

-- Contar pedidos por status para validar valores permitidos
SELECT status, COUNT(*) AS quantidade
FROM orders
GROUP BY status;
-- Espera-se que 'status' contenha apenas: 'pending', 'shipped', 'delivered', 'cancelled'.

-- Identificar pedidos com valor negativo (deve retornar zero linhas)
SELECT id, amount
FROM orders
WHERE amount < 0;
