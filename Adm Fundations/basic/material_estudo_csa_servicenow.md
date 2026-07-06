# Material de Estudo Consolidado - CSA ServiceNow

## Objetivo
Este material reúne os principais conceitos estudados nos módulos de fundamentos e administração da ServiceNow para revisão rápida da prova CSA.

---

# 1. Visão Geral da Plataforma

A ServiceNow é uma plataforma de Application Platform as a Service (aPaaS), baseada em nuvem, utilizada para automação de processos e transformação digital.

## Princípios centrais
- Single Platform
- One Data Model
- One Architecture

## Capacidades principais
- Automation
- Engagement
- AI & ML
- Low Code
- Security

---

# 2. Modelo de Dados da Plataforma

Na ServiceNow, praticamente tudo é armazenado em tabelas.

## Estrutura fundamental
```text
Database
└── Table
    └── Record
        └── Field
            └── Value
```

## Conceitos-chave
- Table: estrutura de armazenamento
- Record: linha da tabela
- Field: coluna da tabela
- Value: conteúdo armazenado

### Exemplos
- incident
- task
- sys_user
- cmdb_ci

---

# 3. Usuários, Grupos e Roles

## User
Representa uma pessoa que acessa a plataforma.

## Group
Representa uma coleção de usuários.

Exemplos:
- Service Desk
- Knowledge Authors
- HR Administrators

## Role
Define permissões de acesso.

## RBAC
A segurança é baseada em Roles.

### Fluxo típico
```text
User → Group → Role → Permissions → ACL → Data Access
```

### Melhores práticas
```text
Role → Group → User
```

### Herança de roles
Uma role pode conter outras roles.

---

# 4. Personas da Plataforma

## System Administrator
Responsável pela administração da instância.

## Specialized Administrator
Administra áreas específicas, como Knowledge, HR, Reports, Web Services.

## Process User
Executa processos de negócio, como ITSM, Change Management.

## Approver
Aprova ou rejeita registros.

## Requester (ESS)
Usuário que consome serviços e abre solicitações.

---

# 5. Instâncias e Ambiente

## Instance
Cópia isolada da plataforma para um cliente.

## Tipos de instância
- Development: para configurar e desenvolver
- Test: para validar alterações
- Production: ambiente real com dados operacionais

## PDI
Personal Developer Instance, utilizada para aprendizado, treinamento e testes.

## Baseline Implementation
Conjunto de aplicações e configurações padrão de uma instância antes das customizações.

---

# 6. Configuration vs Customization

## Configuration
Ajuste da plataforma usando recursos nativos.

### Características
- Sem código ou pouco código
- Menor impacto em upgrades
- Mais simples de manter

## Customization
Criação de funcionalidades novas, geralmente com código.

### Características
- Maior complexidade
- Maior risco em upgrades
- Mais difícil de manter

---

# 7. Dados e Relacionamentos

## Reference Field
Relaciona uma tabela com outra.

Exemplo:
```text
Incident → Caller → sys_user
```

## Tipos de relacionamento
- One-to-Many
- Many-to-Many

## Herança de tabelas
Tabelas podem herdar comportamento e estrutura de outras tabelas.

## Import Sets e Transform Maps
Fluxo de importação:
```text
Data Source → Import Set → Transform Map → Target Table
```

## CMDB e CIs
A CMDB armazena Configuration Items e suas relações.

## Dependency Views
Mostram dependências entre CIs.

## CSDM
Common Service Data Model, modelo comum de dados para serviços.

## Discovery e Service Mapping
Descoberta automática de infraestrutura e mapeamento de dependências.

---

# 8. Listas, Forms, Views e Filters

## Lists
Apresentam múltiplos registros de uma tabela.

## Forms
Apresentam detalhe de um único registro.

## Views
Permitem alterar a apresentação de listas e formulários sem mudar os dados.

## Filters
Permitem localizar registros com base em campos, operadores e valores.

### Estrutura de um filtro
```text
Field + Operator + Value
```

## Dot-Walking
Permite navegar entre relacionamentos de tabelas em filtros, relatórios e scripts.

## Related Lists
Listas associadas a um registro principal.

## Templates
Permitem criar registros com valores pré-definidos.

---

# 9. Self-Service e Portais

## Portais principais
- Employee Center: /esc
- Service Portal: /sp
- Knowledge Portal: /kb

## Employee Center
Portal principal para colaboradores.

## Service Portal
Portal tradicional para autoatendimento.

## Knowledge Portal
Portal voltado para pesquisa e navegação de conhecimento.

---

# 10. Knowledge Management

## Knowledge Base
Repositório de artigos.

## Artigos
Podem conter tutoriais, FAQs, procedimentos e soluções.

## Workflow do artigo
```text
Draft → Approval → Published → Retired
```

## User Criteria
Controlam acesso a conteúdos e artigos.

### Tipos principais
- Can Read
- Can't Read
- Can Contribute
- Can't Contribute

### Pegadinha importante
Se não existir "Can Read", o conteúdo pode ficar acessível para todos.

### Match All
- Marcado = AND
- Desmarcado = OR

---

# 11. Service Catalog

## Conceito
One-Stop Shopping.

## Estrutura de solicitação
```text
REQ → RITM → SCTASK
```

### REQ
Pedido completo.

### RITM
Item solicitado.

### SCTASK
Tarefa de atendimento.

## Catalog Items
Itens do catálogo, como notebook, VPN, software etc.

## Variables
Campos dinâmicos de um item de catálogo.

## Variable Sets
Conjuntos reutilizáveis de variáveis.

## Record Producers
Criam registros em tabelas de forma simplificada a partir do catálogo.

## Order Guides
Guia para solicitar múltiplos itens de uma vez.

---

# 12. Productive Features

## Notifications
Envio automático de mensagens em eventos da plataforma.

### Estrutura de uma notification
- When to Send
- Who Will Receive
- What It Will Contain

### Possíveis gatilhos
- Record Created
- Record Updated
- Event Fired
- Script

### Outbox
Visualização de emails enviados.

### Observações importantes
- Usuário inativo não recebe notificação.
- Notification não substitui ACL.

## Visualization Designer
Ferramenta para criar visualizações gráficas.

## Predictive Intelligence
Usada para categorização, atribuição e priorização.

## Sidebar Collaboration
Colaboração em tempo real dentro da plataforma.

---

# 13. Scripting e Automação

## Client Side vs Server Side
```text
Client Side = navegador / interface
Server Side = servidor / banco de dados
```

## Principais recursos
- UI Policy: controla comportamento visual do formulário
- Data Policy: garante integridade dos dados
- Client Script: executa JavaScript no navegador
- Catalog Client Script: client script específico do catálogo
- Business Rule: lógica de negócio no servidor
- UI Action: botões e ações na interface
- Script Include: código reutilizável no servidor

## Diferença clássica
- UI Policy = interface
- Data Policy = dados

## Exemplo de uso
- Campo obrigatório na tela → UI Policy
- Campo obrigatório em importação → Data Policy

---

# 14. Application Scope e Gerenciamento de Alterações

## Application Scope
Isola aplicações e seus artefatos.

## Update Sets
Agrupam alterações para transporte entre instâncias.

## ATF
Automated Test Framework, usado para testes automatizados.

## App Engine Studio (AES)
Ferramenta para criar aplicações com baixo código.

## Delegated Developers
Desenvolvedores com permissões limitadas para trabalhar em áreas específicas.

## Instance Utilities
- HealthScan
- Instance Scan
- Stats
- Releases

---

# 15. Segurança da Instância

## Shared Responsibility Model
A segurança é compartilhada entre ServiceNow e o cliente.

## Responsabilidades da ServiceNow
- Operação da plataforma
- Infraestrutura
- Disponibilidade do serviço
- Segurança da plataforma base
- Patches da plataforma

## Responsabilidades do cliente
- Dados armazenados
- Compartilhamento e retenção de dados
- Políticas internas
- Controle de acesso
- Governança dos dados
- Confidencialidade

## Encryption
### At Rest
Protege dados armazenados em banco, disco e storage.

### In Transit
Protege dados enquanto trafegam.

Tecnologia comum: TLS.

## Key Management Framework
Gerenciamento de chaves criptográficas.

## Logging
- Infrastructure Logs: infraestrutura e operações da ServiceNow
- Application Logs: atividades da instância do cliente

## Security Contacts
Contatos cadastrados para receber alertas e avisos de segurança.

---

# 16. Pontos de Memorização Mais Importantes

## Fórmulas e estruturas
```text
REQ → RITM → SCTASK
```

```text
Data Source → Import Set → Transform Map → Target Table
```

```text
User → Group → Role → ACL
```

## Identificadores e conceitos-chave
- sys_id: identificador único do registro
- INC0010001: número de incidente, não é a chave primária
- /esc: Employee Center
- /sp: Service Portal
- /kb: Knowledge Portal

## Diferenças clássicas para prova
- UI Policy = interface
- Data Policy = dados
- Notification = envio de mensagem
- ACL = controle de acesso
- Update Set = transporte de alterações

---

# 17. Estratégia de Revisão

1. Revise os conceitos de tabelas, registros e campos.
2. Memorize a hierarquia REQ/RITM/SCTASK.
3. Entenda RBAC e roles.
4. Diferencie configuration de customization.
5. Revise portals, catalog e knowledge management.
6. Memorize as diferenças entre UI Policy, Data Policy e Client Script.
7. Treine os conceitos de segurança e shared responsibility.

---

# 18. Resumo Final

Para a prova CSA, o foco principal deve estar em:
- estrutura da plataforma ServiceNow
- modelo de dados e relações
- usuários, grupos, roles e ACLs
- catalog, knowledge e self-service
- automações e scripting
- segurança e governança
- transporte de alterações e testes
