# Plano de Teste – DemoQA (demoqa.com)

**Objetivo**

Garantir que as principais funcionalidades das seções **Elements** do site DemoQA funcionem de acordo com o esperado, proporcionando ao usuário final interação correta com formulários, seleções e botões.

**Escopo**

*Dentro do escopo*

- **Text Box**: Validação de preenchimento de campos (Nome, Email, Endereço Atual, Endereço Permanente) e exibição dos dados submetidos.
- **Check Box**: Seleção e desmarcação de árvores de itens, confirmação dos itens selecionados.
- **Radio Button**: Seleção de cada opção (Yes, Impressive, No) e mensagens de retorno.
- **Web Tables**: Adição, edição e exclusão de linhas; validação de dados exibidos.
- **Buttons**: Cliques simples, duplo clique e clique com botão direito e mensagens geradas.
- **Links**: Verificação de redirecionamento (nova guia/mesma guia) e status das URLs (válidos e quebrados).
- **Upload and Download**: Teste de upload de arquivo permitido e download de arquivo.
- **Dynamic Properties**: Verificação de botões que habilitam, mudam de cor ou tornam‑se visíveis após delay.

*Fora do escopo*

- Testes de performance, segurança e responsividade em dispositivos móveis.
- Testes cross‑browser (apenas Chrome será considerado).
- Testes de acessibilidade e localização.

**Ambiente de teste**

- **Sistema operacional**: Windows 10
- **Navegador**: Google Chrome 130 (ou superior)
- **URL base**: [https://demoqa.com](https://demoqa.com)
- **Usuário de teste**: Não requer login; campos serão preenchidos com dados fictícios.

**Critérios de entrada**

- Ambiente configurado e acessível (internet estável, browser instalado).
- Planos e casos de teste documentados e revisados.
- Dados de teste disponíveis (ex.: nomes, e‑mails, endereços, arquivos para upload).

**Critérios de saída**

- Todos os casos de teste executados ao menos uma vez.
- Nenhum defeito crítico pendente; defeitos menores documentados.
- Plano de testes e resultados revisados e aprovados.

**Cronograma (estimado)**

| Etapa                            | Responsável     | Data/Período           |
|---------------------------------|------------------|------------------------|
| Elaboração de casos de teste  | Lucas Müller     | 20/08/2025             |
| Execução dos testes           | Lucas Müller     | 21/08/2025             |
| Registro de bugs               | Lucas Müller     | Durante execução      |
| Revisão e fechamento           | Lucas Müller     | 22/08/2025             |

**Riscos**

- Bloqueio ou interferência de anúncios e pop‑ups que podem atrapalhar a visualização dos componentes.
- Mudanças no site (conteúdo dinâmico ou atualizações) durante o período de teste.
- Possíveis inconsistências de rede que afetem a resposta de links e downloads.

**Tipos de teste aplicados**

- **Funcional**: verificação se as funcionalidades respondem conforme especificação.
- **Regressão**: reaplicação de casos após correção de defeitos.
- **Exploratório**: execução sem roteiro fixo para descoberta de comportamentos inesperados.
