# Cypress Cucumber Web API Automation

Este projeto foi desenvolvido utilizando os Frameworks Cypress e Cucumber para criar testes automatizados de aplicações WEB e API, seguindo a abordagem BDD (Behavior-Driven Development).

## Tecnologias Utilizadas
- **Cypress**: Framework para automação de testes de aplicações WEB e API.
- **Cucumber**: Ferramenta para testes BDD, utilizando a linguagem Gherkin.
- **JavaScript**: Linguagem usada.

## Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:
- **Node.js** (v18 ou superior)
- **npm** (v9 ou superior)
- Um editor de texto, como **Visual Studio Code**

## Configuração do Ambiente
1. **Clone este repositório:**
   ```bash
   git clone https://github.com/carlospalmeirajr/cypress.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd cypress
   ```

3. **Navegue até o diretório do projeto:**
   ```bash  
   npm install
   ```

## Execução dos Testes
Testes Interativos:
Para abrir a interface do Cypress e rodar os testes interativamente:
```bash  
   npm run open
   ```

## Testes no Terminal:
Para rodar os testes diretamente no terminal (modo headless):
```bash  
   npm run headless
   ```

## Localização dos Arquivos de Teste:
Os arquivos .feature (cenários em Gherkin) estão localizados na pasta:
```bash  
   cypress/e2e/features/
   ```

## Estrutura do Projeto
A estrutura do projeto segue uma organização lógica para facilitar a navegação e o desenvolvimento:
```bash  
   cypress-cucumber-web-api-JS/
├── cypress/
│   ├── e2e/                       # Pasta principal para os testes
│   │   ├── features/              # Cenários BDD em Gherkin
│   │   │   ├── api.feature
│   │   │   └── web.feature
│   │   ├── step_definitions/      # Definições dos passos
│   │   │   ├── login.js
│   │   │   ├── search.js
│   │   │   ├── cart.js
│   │   │   └── payment.js
│   ├── screenshots/               # Capturas de tela geradas automaticamente
│   ├── fixtures/                  # Dados estáticos para testes (ex.: JSON)
│   │   └── example.json
│   ├── support/                   # Arquivos de suporte para os testes
│   │   ├── commands.js            # Comandos customizados do Cypress
│   │   ├── e2e.js                 # Configurações globais (hooks Before/After)
│   │   └── locators.js            # Centralização de seletores do projeto
├── node_modules/                  # Dependências do projeto (não versionar)
├── .gitignore                     # Ignorar node_modules e outros arquivos
├── cypress.config.js              # Configurações do Cypress
├── package.json                   # Configurações e dependências do projeto
├── package-lock.json              # Controle de versões das dependências
└── README.md                      # Instruções para instalar e executar os testes

   ```

## Capturas de Tela
Durante a execução dos testes, capturas de tela são geradas automaticamente para evidenciar pontos de validação nos cenários. Essas capturas podem ser encontradas na pasta:
```bash  
   cypress/screenshots/
   ```

## Observação
Este projeto foi desenvolvido com foco em demonstrar as habilidades técnicas no uso do Cypress, Cucumber e JavaScript para automação de testes. As capturas de tela e logs de execução foram incluídos para melhorar a rastreabilidade e garantir a qualidade dos testes.

Autor: Carlos Palmeira Mello Júnior
