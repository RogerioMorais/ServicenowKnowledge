# Material Consolidado para Estudo da CSA ServiceNow

## Objetivo
Este arquivo reúne os conceitos mais importantes da plataforma ServiceNow em uma versão mais enxuta, com foco em revisão rápida e alta retenção para a prova CSA.

---

## 1. Visão geral da plataforma
A ServiceNow é uma plataforma de automação e transformação digital baseada em nuvem. Ela é usada para gerenciar processos de negócio, serviços e operações com baixo código.

### Pontos-chave
- Single Platform
- One Data Model
- One Architecture
- Low Code
- Automation
- AI & ML

---

## 2. Modelo de dados da plataforma
Na ServiceNow, praticamente tudo é armazenado em tabelas.

### Estrutura base
```text
Database → Table → Record → Field → Value
```

### Conceitos essenciais
- Table: estrutura de armazenamento
- Record: linha da tabela
- Field: coluna da tabela
- Value: conteúdo do campo

### Exemplos comuns
- incident
- task
- sys_user
- cmdb_ci

---

## 3. Usuários, grupos e roles
### User
Representa uma pessoa que acessa a plataforma.

### Group
Agrupa usuários para fins de organização e atribuição.

### Role
Define permissões de acesso.

### Regra de ouro
```text
User → Group → Role → Permissions → ACL
```

---

## 4. RBAC e ACLs
### RBAC
O controle de acesso é baseado em roles.

### ACL
Define se um usuário pode ler, gravar, atualizar ou excluir um registro ou campo.

### Diferença rápida
- Role = função/permissão
- ACL = regra de acesso ao dado

---

## 5. Instâncias e ambientes
### Tipos principais
- Development: configurar e criar soluções
- Test: validar alterações
- Production: ambiente real com dados operacionais

### PDI
Personal Developer Instance, usada para estudo, testes e laboratório.

### Fluxo comum
```text
Development → Test → Production
```

---

## 6. Configuration vs Customization
### Configuration
Ajuste usando recursos nativos da plataforma.

### Customization
Criação de algo novo ou específico, geralmente com maior impacto.

### Resumo rápido
- Configuration: mais simples, menos risco, melhor para upgrades
- Customization: mais complexo, maior manutenção e risco

---

## 7. Dados e relacionamentos
### Reference Field
Relaciona uma tabela a outra.

### Exemplos de relacionamento
- One-to-many
- Many-to-many

### Import Set e Transform Map
Fluxo de importação de dados:
```text
Data Source → Import Set → Transform Map → Target Table
```

### CMDB e CIs
A CMDB armazena Configuration Items e seus relacionamentos.

---

## 8. Lists, Forms, Views e Filters
### List
Mostra vários registros.

### Form
Mostra detalhes de um registro.

### View
Altera a forma de apresentação sem mudar o dado.

### Filter
Localiza registros com base em campo, operador e valor.

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

### Artigos podem conter
- tutoriais
- FAQs
- procedimentos
- soluções

### Workflow do artigo
```text
Draft → Approval → Published → Retired
```

### User Criteria
Controlam acesso aos conteúdos.

### Tipos comuns
- Can Read
- Can't Read
- Can Contribute
- Can't Contribute

---

## 11. Service Catalog
### Conceito
One-Stop Shopping.

### Estrutura da solicitação
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
Enviam mensagens automaticamente em eventos da plataforma.

### Estrutura básica
- When to Send
- Who Will Receive
- What It Will Contain

### Observações importantes
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
- UI Policy: comportamento visual
- Data Policy: integridade dos dados
- Client Script: JavaScript no formulário
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
A segurança é compartilhada entre ServiceNow e o cliente.

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

## 16. Pontos de memorização mais importantes
- sys_id = identificador único do registro
- INC0010001 = número do incidente, não é a chave primária
- /esc = Employee Center
- /sp = Service Portal
- /kb = Knowledge Portal
- REQ → RITM → SCTASK
- Data Source → Import Set → Transform Map → Target Table
- User → Group → Role → ACL

---

## 17. Checklist de revisão final
Antes da prova, confirme que você consegue:
- diferenciar Table, Record, Field e Value
- explicar User, Group e Role
- entender RBAC e ACL
- distinguir Configuration de Customization
- lembrar REQ, RITM e SCTASK
- identificar os portais /esc, /sp e /kb
- diferenciar UI Policy e Data Policy
- entender o papel de Notifications e Update Sets
- reconhecer conceitos básicos de segurança e criptografia

---

## 18. Estratégia de estudo recomendada
1. Revise este material em blocos curtos
2. Foque nos conceitos que mais aparecem em prova
3. Repetir em voz alta as definições principais
4. Responder perguntas tipo prova sem consultar o material
