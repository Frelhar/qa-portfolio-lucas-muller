# Plano de Teste – Swag Labs (saucedemo.com)

## Objetivo
Garantir que as principais funcionalidades do site Swag Labs (sistema de e‑commerce de demonstração) funcionem conforme esperado para um usuário final, priorizando a experiência de compra sem erros.

## Escopo

### Dentro do escopo
- **Autenticação de usuários** (login válido, login inválido, login sem dados).
- **Funcionalidades de carrinho**: adicionar item, remover item, remoção ao final da compra, contagem de itens.
- **Processo de checkout** (com itens, sem itens, sem dados obrigatórios).
- **Navegação entre páginas**: inventário, carrinho e checkout.
- **Mensagens de erro e validação de campos.**

### Fora do escopo
- Testes de performance (tempo de resposta).
- Testes de compatibilidade entre navegadores.
- Testes de segurança (SQL injection, XSS).
- Testes de responsividade em dispositivos móveis.

## Ambiente de teste
- Sistema operacional: **Windows 10**.
- Navegadores: **Google Chrome 130** (versão usada na execução inicial).
- URL da aplicação: **https://www.saucedemo.com/**.
- Contas de teste: `standard_user` / `secret_sauce` (usuário válido), usuário inválido (exemplo `locked_out_user` / `wrong_password`).

## Critérios de entrada
- Ambiente de teste configurado e acessível.
- Usuários de teste criados e válidos.
- Casos de teste revisados e aprovados.

## Critérios de saída
- Todos os casos de teste executados.
- Todos os bugs críticos e altos identificados e reportados.
- Aceitação do cliente/equipe de produto.

## Cronograma (projeção)
| Atividade             | Responsável      | Data            |
|---------------------- |------------------|-----------------|
| Preparação de casos   | Lucas Müller     | 19/08/2025      |
| Execução de testes    | Lucas Müller     | 20–21/08/2025   |
| Reporte de bugs       | Lucas Müller     | conforme encontrado |
| Revisão/encerramento  | Lucas Müller     | 22/08/2025      |

## Riscos
- Ambiente instável ou indisponível.
- Dados de testes inconsistentes.
- Requisitos incompletos para algumas funcionalidades.

## Tipos de teste aplicados
- **Funcional** (caminho feliz e negativo).
- **Regressão** (assegurar que correções não quebrem fluxos já testados).
- **Exploratório** (explorar comportamentos não cobertos pelos casos de teste).
