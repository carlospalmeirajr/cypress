Feature: API Test

  Scenario: Validar response da API
    When Eu envio uma requisição para o endpoint Trello API
    Then Eu exibo o conteúdo do campo "name" da estrutura "list"
