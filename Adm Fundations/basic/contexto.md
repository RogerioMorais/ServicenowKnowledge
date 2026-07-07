# CONTEXTO OFICIAL PARA GERAÇÃO DE SIMULADOS CSA (CERTIFIED SYSTEM ADMINISTRATOR)

## Objetivo

Este documento deve ser utilizado como contexto principal para geração de simulados CSA (Certified System Administrator).

As questões devem ser baseadas:

1. Nos conteúdos consolidados dos arquivos `modulo*.md`
2. Nos resumos consolidados e materiais otimizados
3. No Blueprint Oficial do Exame CSA (Jan/2025)

O simulador deve priorizar os assuntos de acordo com o peso oficial da prova.

---

# Estrutura da Prova CSA

## Quantidade de Questões

- 60 questões

## Tipos de Questões

### Multiple Choice

Selecionar uma única alternativa correta.

### Multiple Select

Selecionar todas as alternativas corretas.

Observação:

- Não existe crédito parcial.
- Caso uma alternativa obrigatória seja omitida ou uma incorreta seja selecionada, a questão é considerada errada.

---

# Distribuição Oficial dos Domínios

## Domínio 1 — Platform Overview and Navigation

### Peso

7%

### Tópicos

- ServiceNow Platform Overview
- Platform Capabilities
- ServiceNow Instance
- Next Experience Navigation

### Nível de Prioridade

Média

---

## Domínio 2 — Instance Configuration

### Peso

11%

### Tópicos

- Plugins
- ServiceNow Store
- Configuration
- Customization
- Personalização da Instância
- Interfaces da Plataforma
- PDI (Personal Developer Instance)

### Nível de Prioridade

Alta

---

## Domínio 3 — Configuring Applications for Collaboration

### Peso

20%

### Tópicos

- Lists
- Forms
- Filters
- Views
- Tags
- Templates
- Task Management
- Visual Task Boards
- Dashboards
- Platform Analytics
- Notifications

### Nível de Prioridade

Muito Alta

---

## Domínio 4 — Self-Service & Automation

### Peso

20%

### Tópicos

- Knowledge Management
- User Criteria
- Service Catalog
- Catalog Items
- Variables
- Variable Sets
- Record Producers
- Order Guides
- Virtual Agent
- Workflow Studio
- Flow Designer
- Data Pills

### Nível de Prioridade

Muito Alta

---

## Domínio 5 — Database Management

### Peso

27%

### Tópicos

- Data Schema
- Tables
- Records
- Fields
- Values
- Reference Fields
- sys_id
- ACL
- RBAC
- Roles
- Import Sets
- Transform Maps
- Coalesce
- CMDB
- Configuration Items
- Discovery
- Service Mapping
- CSDM

### Nível de Prioridade

Máxima

### Observação

Este é o domínio mais importante da prova CSA.

---

## Domínio 6 — Data Migration and Integration

### Peso

15%

### Tópicos

- UI Policy
- Data Policy
- Client Script
- Business Rule
- Script Include
- Update Sets
- Preview
- Commit
- Application Scope
- Scripting

### Nível de Prioridade

Alta

---

# Conhecimento Consolidado Obrigatório

## Estrutura de Dados

```text
Database
 ↓
Table
 ↓
Record
 ↓
Field
 ↓
Value
```

### Definições

- Table = Estrutura de armazenamento
- Record = Linha da tabela
- Field = Coluna da tabela
- Value = Conteúdo armazenado

---

## Identificadores

### sys_id

Características:

- Identificador único
- 32 caracteres
- Chave real do registro

### Pegadinha de Prova

```text
INC0010001
```

é o número do incidente.

```text
sys_id
```

é a chave primária real.

---

# Segurança

## Fluxo de Segurança

```text
User
 ↓
Group
 ↓
Role
 ↓
Permissions
 ↓
ACL
 ↓
Data Access
```

## RBAC

Role-Based Access Control.

## ACL

Controla:

- Create
- Read
- Write
- Delete

### Pegadinhas

Role:

- Define permissões.

ACL:

- Define acesso aos dados.

Notification:

- Não substitui ACL.

---

# Configuration vs Customization

## Configuration

- Recursos nativos
- Menor impacto em upgrades
- Abordagem preferida

## Customization

- Código
- Funcionalidades novas
- Maior manutenção

### Regra Oficial

```text
Configure First
Customize Only When Necessary
```

---

# Lists e Forms

## List

Exibe múltiplos registros.

## Form

Exibe um único registro.

## View

Modifica:

- Layout
- Campos Exibidos
- Organização

Não modifica:

- Dados
- Registros

### Pegadinha

View altera apresentação.

Não altera dados.

---

# Dot-Walking

Exemplos:

```text
Caller.Email

Caller.Manager

Caller.Department
```

Permite acessar campos de registros relacionados.

---

# Choice vs Reference

## Choice

- Dropdown
- Valores fixos
- Mesma tabela

## Reference

- Lupa
- Outra tabela
- Armazena sys_id

---

# Knowledge Management

## Workflow de Artigo

```text
Draft
 ↓
Approval
 ↓
Published
 ↓
Retired
```

## User Criteria

Tipos:

- Can Read
- Can't Read
- Can Contribute
- Can't Contribute

### Pegadinha

Sem Can Read:

```text
Todos possuem acesso.
```

---

# Portais

## URLs

```text
/esc = Employee Center

/sp = Service Portal

/kb = Knowledge Portal
```

---

# Service Catalog

## Conceito

```text
One-Stop Shopping
```

## Fluxo Principal

```text
REQ
 ↓
RITM
 ↓
SCTASK
```

### Definições

REQ

- Pedido completo

RITM

- Item solicitado

SCTASK

- Tarefa de fulfillment

---

## Variables

Representam:

```text
Perguntas apresentadas ao usuário
```

---

## Record Producer

Cria registros diretamente.

Exemplos:

- Incident
- Case
