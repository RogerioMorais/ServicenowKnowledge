# Perguntas e Respostas para Treino - CSA ServiceNow

## Objetivo
Este arquivo contém perguntas tipo prova com respostas curtas, pensado para revisão rápida e autoavaliação.

---

## 1. Conceitos gerais

### 1. O que é a ServiceNow?
Resposta: É uma plataforma de automação e transformação digital baseada em nuvem.

### 2. Qual é o conceito central da plataforma?
Resposta: Trabalhar com dados organizados em tabelas, registros e campos.

### 3. O que significa Single Platform?
Resposta: Significa que a plataforma oferece uma base única para diversos processos e aplicações.

---

## 2. Modelo de dados

### 4. O que é uma Table?
Resposta: É a estrutura de armazenamento de dados.

### 5. O que é um Record?
Resposta: É uma linha da tabela, ou seja, um registro.

### 6. O que é um Field?
Resposta: É uma coluna da tabela.

### 7. O que é um Value?
Resposta: É o conteúdo armazenado em um campo.

### 8. O que é o sys_id?
Resposta: É o identificador único de cada registro.

### 9. O que representa INC0010001?
Resposta: É o número de um incidente, não a chave primária.

---

## 3. Usuários, grupos e roles

### 10. O que é um User?
Resposta: É uma pessoa que acessa a plataforma.

### 11. O que é um Group?
Resposta: É um conjunto de usuários usado para organização e atribuição.

### 12. O que é uma Role?
Resposta: É o conjunto de permissões que define o que um usuário pode fazer.

### 13. Qual é a relação entre User, Group e Role?
Resposta: Um usuário pertence a um grupo e recebe permissões por meio de roles.

---

## 4. RBAC e ACL

### 14. O que significa RBAC?
Resposta: Role-Based Access Control, controle de acesso baseado em roles.

### 15. O que é uma ACL?
Resposta: É uma regra que controla o acesso a dados, registros e campos.

### 16. Role e ACL têm a mesma função?
Resposta: Não. A role define permissões; a ACL define se o acesso é permitido.

---

## 5. Instâncias e ambientes

### 17. Quais são os principais ambientes?
Resposta: Development, Test e Production.

### 18. Para que serve a Development?
Resposta: Para criar, configurar e testar soluções.

### 19. Para que serve a Test?
Resposta: Para validar alterações antes de ir para produção.

### 20. O que é a Production?
Resposta: É o ambiente real com dados operacionais.

### 21. O que é a PDI?
Resposta: É uma Personal Developer Instance usada para estudo e experimentos.

---

## 6. Configuration e Customization

### 22. O que é Configuration?
Resposta: É adaptar a plataforma com recursos nativos.

### 23. O que é Customization?
Resposta: É criar algo novo ou específico que não existe nativamente.

### 24. Qual é a diferença principal entre os dois?
Resposta: Configuration usa recursos padrão; customization cria novas funcionalidades.

---

## 7. Dados e relacionamentos

### 25. O que é um Reference Field?
Resposta: É um campo que aponta para outro registro em outra tabela.

### 26. O que é um Import Set?
Resposta: É um conjunto de dados importados para a plataforma.

### 27. O que é uma Transform Map?
Resposta: É o mecanismo que mapeia dados do Import Set para a tabela alvo.

### 28. O que é a CMDB?
Resposta: É a Configuration Management Database, que armazena CIs e suas relações.

---

## 8. Lists, Forms, Views e Filters

### 29. O que é uma List?
Resposta: É uma visualização com vários registros.

### 30. O que é um Form?
Resposta: É a tela de detalhamento de um registro.

### 31. O que é uma View?
Resposta: É uma forma diferente de apresentar dados sem alterar os registros.

### 32. O que é um Filter?
Resposta: É uma busca que aplica critérios a uma lista de registros.

### 33. O que é Dot-Walking?
Resposta: É a navegação entre tabelas relacionadas.

---

## 9. Self-service e portais

### 34. Qual é a URL do Employee Center?
Resposta: /esc.

### 35. Qual é a URL do Service Portal?
Resposta: /sp.

### 36. Qual é a URL do Knowledge Portal?
Resposta: /kb.

### 37. Para que serve o Employee Center?
Resposta: Para centralizar acesso a serviços, conhecimento e solicitações.

---

## 10. Knowledge Management

### 38. O que é uma Knowledge Base?
Resposta: É um repositório de artigos e conteúdos de apoio.

### 39. Quais tipos de conteúdo podem existir em um artigo?
Resposta: Tutoriais, FAQs, procedimentos e soluções.

### 40. Qual é o fluxo de vida de um artigo?
Resposta: Draft, Approval, Published e Retired.

### 41. O que são User Criteria?
Resposta: São critérios que controlam o acesso a conteúdos.

---

## 11. Service Catalog

### 42. O que significa One-Stop Shopping?
Resposta: Significa que o usuário encontra tudo em um único ponto para solicitar serviços.

### 43. O que é um Catalog Item?
Resposta: É um item do catálogo que pode ser solicitado.

### 44. O que é uma Variable?
Resposta: É um campo dinâmico utilizado em um item de catálogo.

### 45. O que representa a estrutura REQ → RITM → SCTASK?
Resposta: Pedido completo, item solicitado e tarefa de atendimento.

---

## 12. Automação e produtividade

### 46. O que são Notifications?
Resposta: São mensagens automáticas enviadas em resposta a eventos.

### 47. O que é o Outbox?
Resposta: É o local onde os e-mails enviados podem ser visualizados.

### 48. Usuário inativo recebe notification?
Resposta: Não, normalmente não.

### 49. Notification substitui ACL?
Resposta: Não.

---

## 13. Scripting e lógica

### 50. Qual é a diferença entre Client Side e Server Side?
Resposta: Client Side é no navegador; Server Side é no servidor.

### 51. O que faz um UI Policy?
Resposta: Controla o comportamento visual e a apresentação do formulário.

### 52. O que faz um Data Policy?
Resposta: Garante integridade dos dados independentemente da origem.

### 53. O que é um Client Script?
Resposta: É um script executado no navegador.

### 54. O que é um Business Rule?
Resposta: É uma regra de lógica de negócio executada no servidor.

### 55. Qual é a diferença clássica entre UI Policy e Data Policy?
Resposta: UI Policy atua na interface; Data Policy garante o dado.

---

## 14. Alterações e transporte

### 56. O que é um Update Set?
Resposta: É um agrupamento de alterações para transporte entre instâncias.

### 57. O que é o ATF?
Resposta: É o Automated Test Framework para testes automatizados.

### 58. O que é Application Scope?
Resposta: É um mecanismo que isola aplicações e artefatos.

---

## 15. Segurança

### 59. O que é o Shared Responsibility Model?
Resposta: É o modelo que divide responsabilidades de segurança entre ServiceNow e o cliente.

### 60. O que a ServiceNow é responsável?
Resposta: Infraestrutura, operação da plataforma, disponibilidade e patches.

### 61. O que o cliente é responsável?
Resposta: Dados, governança, controle de acesso, políticas internas e confidencialidade.

### 62. O que é Encryption At Rest?
Resposta: É a criptografia de dados armazenados.

### 63. O que é Encryption In Transit?
Resposta: É a criptografia de dados durante a transmissão.

### 64. Qual tecnologia é usada para proteger dados em trânsito?
Resposta: TLS.

### 65. O que são Infrastructure Logs?
Resposta: São logs da infraestrutura da plataforma.

### 66. O que são Application Logs?
Resposta: São logs das atividades da instância do cliente.

---

## 17. Perguntas de revisão final

### 67. Qual é o fluxo de importação de dados?
Resposta: Data Source → Import Set → Transform Map → Target Table.

### 68. Qual é o fluxo de solicitação no Service Catalog?
Resposta: REQ → RITM → SCTASK.

### 69. Qual é o fluxo básico de acesso?
Resposta: User → Group → Role → ACL.

### 70. Quais são os principais portais?
Resposta: Employee Center, Service Portal e Knowledge Portal.
