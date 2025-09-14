# React Forms Steps

## Descrição

Este projeto é uma extensão do conceito de formulários em React, focando em formulários multi-etapas (“step forms” ou “wizard forms”). Ele permite a construção de fluxos de entrada de dados complexos, onde o usuário avança por diferentes telas ou etapas, cada uma com campos e validações próprias.

## Tecnologias Utilizadas

- **React** (Create React App)
- **React Hook Form** ou Formik para gerenciamento de formulários
- **Yup** para validação de campos
- **Styled Components** ou CSS Modules (se aplicável)
- Componentização de etapas e navegação entre elas
- Gerenciamento de estado global/local para persistência dos dados entre etapas

## Funcionalidades

- Suporte a múltiplas etapas configuráveis
- Validação individual de cada etapa antes do avanço
- Componentes reutilizáveis para campos, botões e navegação
- Persistência dos dados preenchidos durante o fluxo
- Navegação entre etapas: avançar, retroceder e reiniciar formulário
- Feedback visual de progresso (barra de etapas, breadcrumbs, etc.)

## Como usar

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/fabiocberg/react-forms-steps.git
    cd react-forms-steps
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3. **Rode o app:**
    ```bash
    npm start
    # ou
    yarn start
    ```
    O app estará disponível em `http://localhost:3000`.

## Exemplo de fluxo

```plaintext
[Etapa 1: Dados Pessoais]
Nome: [__________]
E-mail: [__________]
[Próximo]

[Etapa 2: Endereço]
CEP: [_____ - ___]
Endereço: [__________]
[Voltar] [Próximo]

[Etapa 3: Revisão]
Confirme seus dados:
Nome: Fulano
E-mail: fulano@email.com
Endereço: Rua Exemplo, 123
[Voltar] [Enviar]
```

Cada etapa possui validações próprias e os dados são mantidos durante o processo.

## Estrutura de Pastas

```
src/
├── components/        # Componentes de etapas, campos e navegação
├── steps/             # Definição das etapas e seus schemas
├── services/          # Integração com APIs, se necessário
├── App.js             # Componente principal
└── index.js           # Inicialização da aplicação
```

## Personalização

- Adicione/remova etapas conforme o fluxo desejado
- Personalize validações e feedbacks visuais
- Integre com APIs para salvar ou buscar dados

## Licença

MIT

---

> Este projeto serve como base para criação de fluxos multi-etapas modernos e reutilizáveis em aplicações React.