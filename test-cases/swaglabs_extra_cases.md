# Casos de Teste Adicionais – Swag Labs (saucedemo.com)

| ID | Título | Pré-condições | Passos | Resultado esperado |
|---|---|---|---|---|
| CT-SORT-001 | Ordenar produtos por Nome (Z → A) | Usuário autenticado | 1. Na página de inventário, abrir o seletor de ordenação. 2. Selecionar "Name (Z to A)". | A lista deve ser reorganizada de modo que os produtos apareçam em ordem alfabética inversa; o item "Test.allTheThings() T‑Shirt (Red)" deve ser o primeiro. |
| CT-SORT-002 | Ordenar produtos por Preço (baixo → alto) | Usuário autenticado | 1. Na página de inventário, abrir o seletor de ordenação. 2. Selecionar "Price (low to high)". | A lista deve ser reorganizada do menor preço para o maior; o item "Sauce Labs Onesie" (US$7.99) deve aparecer primeiro. |
| CT-SORT-003 | Ordenar produtos por Preço (alto → baixo) | Usuário autenticado | 1. Na página de inventário, abrir o seletor de ordenação. 2. Selecionar "Price (high to low)". | A lista deve ser reorganizada do maior preço para o menor; o item "Sauce Labs Fleece Jacket" (US$49.99) deve aparecer primeiro. |
| CT-MENU-001 | Reset App State limpa carrinho | Usuário autenticado com item no carrinho | 1. Adicionar um item ao carrinho. 2. Abrir o menu lateral clicando no ícone de hambúrguer. 3. Clicar em "Reset App State". | O carrinho deve ser esvaziado ( ícone do carrinho volta a zero) e os botões de itens retornam a "Add to cart". |
| CT-MENU-002 | Logout encerra sessão | Usuário autenticado | 1. Abrir o menu lateral. 2. Clicar em "Logout". | O usuário deve ser redirecionado para a página de login; a sessão anterior é encerrada. |
| CT-MENU-003 | About redireciona para site externo | Usuário autenticado | 1. Abrir o menu lateral. 2. Clicar em "About". | O navegador deve abrir a página institucional de Sauce Labs em nova guia ou na mesma guia. |
