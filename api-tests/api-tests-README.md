# Testes de API – JSONPlaceholder

Este projeto demonstra como elaborar testes de API utilizando **Python** e a biblioteca `requests`. A API escolhida é o serviço gratuito **JSONPlaceholder**, que fornece endpoints REST para experimentação de requisições.

## Objetivos

* Validar se os endpoints HTTP retornam status **200 OK**.
* Garantir que campos específicos do JSON (por exemplo, `userId`, `id` e `title`) contenham os valores esperados.
* Exibir mensagens de sucesso ou falha para cada verificação.

## Estrutura do diretório

```
api-tests/
├── README.md                # Este arquivo
└── test_jsonplaceholder.py  # Script de teste da API
```

## Como executar

1. Certifique-se de ter o **Python 3.8** (ou superior) instalado.
2. Instale a dependência necessária:

   ```bash
   pip install requests
   ```

3. Execute o script de teste a partir da pasta `api-tests`:

   ```bash
   python test_jsonplaceholder.py
   ```

O console mostrará o resultado de cada verificação (“SUCESSO” ou “FALHA”) e uma mensagem final indicando se todos os testes passaram.

## Detalhes do script

O arquivo `test_jsonplaceholder.py` realiza uma requisição **GET** ao seguinte endpoint:

```
https://jsonplaceholder.typicode.com/posts/1
```

Em seguida, ele verifica:

1. **Status code**: deve ser **200**.
2. **ID do post** (`id`): deve ser **1**.
3. **Usuário** (`userId`): deve ter um valor válido (igual a `1` no exemplo).
4. **Título** (`title`): não pode ser vazio.

Esse exemplo simples serve de base para testes mais avançados e pode ser estendido para outros endpoints ou integrado com frameworks de testes como `pytest`, `unittest` ou relatórios em HTML.
