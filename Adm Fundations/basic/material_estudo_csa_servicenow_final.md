# Material de Estudo Final - CSA ServiceNow

## Objetivo
Este material reúne os conceitos mais importantes da plataforma ServiceNow em uma versão mais organizada, objetiva e voltada para revisão rápida antes da prova CSA.

---

## 1. O que é a ServiceNow
A ServiceNow é uma plataforma de automação e transformação digital baseada em nuvem. Ela permite criar serviços digitais, automatizar processos e centralizar dados em uma única plataforma.

### Conceitos fundamentais
- Single Platform
- One Data Model
- One Architecture
- Low Code
- Automation
- AI e ML

---

## 2. Modelo de dados da plataforma
Na ServiceNow, praticamente tudo é armazenado em tabelas.

### Estrutura base
```text
Database → Table → Record → Field → Value
```

### Definições rápidas
- Table: estrutura de armazenamento
- Record: linha da tabela
- Field: coluna da tabela
- Value: conteúdo armazenado

### Exemplos comuns
- incident
- task
- sys_user
- cmdb_ci

### Ponto de prova
O identificador único de um registro é o sys_id.

---

## 3. Usuários, grupos e roles
### User
Representa uma pessoa que acessa a plataforma.

### Group
Agrupa usuários para organização, atribuição e notificações.

### Role
Define permissões de acesso.

### Fluxo básico de acesso
```text
User → Group → Role → Permission → ACL
```

### Regra prática
Roles controlam o que a pessoa pode fazer. ACLs controlam o que ela pode acessar.

---

## 4. RBAC e ACLs
### RBAC
O modelo de segurança é baseado em roles.

### ACL
Define regras de acesso a dados, registros e campos.

### Diferença essencial
- Role: função/permissão
- ACL: regra de acesso

---

## 5. Instâncias ServiceNow
### Tipos principais
- Development: ambiente para criar e configurar
- Test: ambiente para validar alterações
- Production: ambiente real com dados operacionais

### PDI
Personal Developer Instance, usada para aprendizado, testes e experimentos.

### Fluxo comum
```text
Development → Test → Production
```

---

## 6. Configuration vs Customization
### Configuration
Ajuste usando recursos nativos da plataforma.

### Customization
Criação de algo novo, geralmente com maior complexidade.

### Resumo rápido
- Configuration: menos risco, menos impacto em upgrades
- Customization: maior esforço, maior manutenção e risco

---

## 7. Dados e relacionamentos
### Reference Field
Relaciona uma tabela com outra.

### Exemplos de relacionamento
- One-to-many
- Many-to-many

### Importação de dados
```text
Data Source → Import Set → Transform Map → Target Table
```

### CMDB
Armazena Configuration Items e suas relações.

### CSDM
Modelo comum de dados para serviços.

---

## 8. Lists, Forms, Views e Filters
### List
Mostra vários registros de uma tabela.

### Form
Mostra os detalhes de um registro.

### View
Altera a forma de apresentação sem mudar os dados.

### Filter
Busca registros com base em campo, operador e valor.

### Dot-Walking
Permite navegar entre tabelas relacionadas.

---

## 9. Self-service e portais
### Portais principais
- Employee Center: /esc
- Service Portal: /sp
- Knowledge Portal: /kb

### Uso prático
- Employee Center: portal principal para colaboradores
- Service Portal: autoatendimento tradicional
- Knowledge Portal: busca e leitura de conhecimento

---

## 10. Knowledge Management
### Knowledge Base
Repositório de artigos e conteúdos de apoio.

### Tipos de conteúdo
- tutoriais
- FAQs
- procedimentos
- soluções

### Workflow do artigo
```text
Draft → Approval → Published → Retired
```

### User Criteria
Controlam o acesso ao conteúdo.

### Tipos comuns
- Can Read
- Can't Read
- Can Contribute
- Can't Contribute

### Pegadinha comum
Se não houver Can Read, o conteúdo pode ficar acessível para todos.

---

## 11. Service Catalog
### Conceito principal
One-Stop Shopping.

### Estrutura de solicitação
```text
REQ → RITM → SCTASK
```

### Significado
- REQ: pedido completo
- RITM: item solicitado
- SCTASK: tarefa de atendimento

### Componentes principais
- Catalog Item
- Variables
- Variable Sets
- Record Producers
- Order Guides

---

## 12. Automação e produtividade
### Notifications
Enviam mensagens automaticamente quando eventos acontecem.

### Estrutura básica
- When to Send
- Who Will Receive
- What It Will Contain

### Pontos importantes
- Usuário inativo não recebe notificação
- Notification não substitui ACL

### Outras ferramentas
- Visualization Designer
- Predictive Intelligence
- Sidebar Collaboration

---

## 13. Scripting e lógica aplicada
### Diferença principal
```text
Client Side = navegador / interface
Server Side = servidor / banco de dados
```

### Ferramentas principais
- UI Policy: altera comportamento visual do formulário
- Data Policy: garante integridade dos dados
- Client Script: JavaScript no navegador
- Business Rule: lógica de negócio no servidor
- UI Action: botões e ações
- Script Include: código reutilizável

### Regra de prova
- UI Policy = interface
- Data Policy = dados
- Client Script = navegador
- Business Rule = servidor

---

## 14. Alterações e transporte entre ambientes
### Update Sets
Agrupam alterações para serem movidas entre instâncias.

### ATF
Automated Test Framework para testes automatizados.

### Application Scope
Isola aplicações e seus artefatos.

---

## 15. Segurança da instância
### Shared Responsibility Model
A segurança é dividida entre ServiceNow e o cliente.

### ServiceNow é responsável por
- infraestrutura
- disponibilidade
- segurança da plataforma base
- patches

### Cliente é responsável por
- dados
- governança
- controle de acesso
- políticas internas
- confidencialidade

### Criptografia
- At Rest: dados armazenados
- In Transit: dados trafegando

### Tecnologia comum
- TLS

### Logging
- Infrastructure Logs
- Application Logs

---

## 16. Pontos que mais caem na prova
- sys_id = identificador único do registro
- INC0010001 = número do incidente, não é a chave primária
- /esc = Employee Center
- /sp = Service Portal
- /kb = Knowledge Portal
- REQ → RITM → SCTASK
- Data Source → Import Set → Transform Map → Target Table
- User → Group → Role → ACL

---

## 17. Checklist final de revisão
Antes da prova, confirme que você consegue:
- diferenciar Table, Record, Field e Value
- explicar User, Group e Role
- compreender RBAC e ACL
- distinguir Configuration de Customization
- lembrar REQ, RITM e SCTASK
- identificar os portais /esc, /sp e /kb
- diferenciar UI Policy e Data Policy
- entender Notifications e Update Sets
- reconhecer conceitos básicos de segurança

---

## 18. Estratégia de estudo recomendada
1. Revise os conceitos em blocos curtos
2. Foque nos tópicos que mais aparecem em prova
3. Repita as definições em voz alta
4. Faça perguntas tipo prova sem consultar o material
