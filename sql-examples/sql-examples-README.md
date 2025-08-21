# Exemplos de Validação SQL

Este diretório contém exemplos de consultas SQL usadas para validar dados em bancos de dados relacionais. As queries estão escritas no arquivo `query_examples.sql` e podem ser executadas em qualquer SGBD compatível com SQL ANSI (por exemplo, PostgreSQL, MySQL ou SQLite).

## Objetivo

Demonstrar como:

- Contar registros totais e registros com dados ausentes.
- Verificar valores permitidos em colunas categóricas.
- Identificar registros com valores inconsistentes (por exemplo, montantes negativos).

## Estrutura

```
sql-examples/
├── README.md         # Este documento
└── query_examples.sql # Conjunto de queries de validação
```

## Como usar

1. Crie ou conecte-se ao seu banco de dados.
2. Carregue os seus dados nas tabelas correspondentes (no exemplo, usa-se uma tabela chamada `orders`).
3. Execute os comandos SQL contidos em `query_examples.sql`.
4. Analise os resultados para identificar problemas de integridade nos dados.

As consultas são autoexplicativas e podem ser adaptadas para outras tabelas ou cenários.
