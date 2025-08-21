# Projeto de Automacao UI – Cypress

Este diretório contém um projeto simples de automação de testes de interface de usuário utilizando [Cypress](https://www.cypress.io/). O objetivo é demonstrar conhecimentos básicos em automação de testes web, implementando um fluxo de login, navegação e validação em uma aplicação de demonstração (Swag Labs – saucedemo.com).

## Estrutura

- `cypress/fixtures/`: arquivos com dados de teste (por exemplo, usuários e senhas).
- `cypress/integration/`: contém os testes propriamente ditos. Neste exemplo, adicionamos o arquivo `swaglabs_login.spec.js` que automatiza o login e a validação da página de inventário.
- `cypress.json`: arquivo de configuração do Cypress (pode ajustar a URL base).

## Pré-requisitos

- Node.js (versão ≥ 12).
- npm (gerenciador de pacotes Node).

## Instalação

Dentro do diretório raiz do projeto, execute os comandos:

```bash
npm init -y
npm install cypress --save-dev
```

Isso criará a estrutura padrão do Cypress.

## Execução

Para abrir a interface gráfica do Cypress e executar os testes:

```bash
npx cypress open
```

Para executar via linha de comando sem interface:

```bash
npx cypress run
```

## Teste de exemplo

O arquivo `swaglabs_login.spec.js` realiza os seguintes passos:

1. Acessa a página inicial do Swag Labs.
2. Digita usuário válido e senha (`standard_user` e `secret_sauce`).
3. Clica no botão **Login**.
4. Verifica se a URL contém `/inventory` e se a lista de produtos é exibida.

Use este exemplo como base para criar novos fluxos (adicionar itens ao carrinho, realizar checkout, etc.).
