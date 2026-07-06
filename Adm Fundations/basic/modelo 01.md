# ServiceNow Administration Fundamentals

> Status: ✅ Módulo 1 Concluído
>
> **Marco de Consolidação #1**
>
> Em futuras solicitações de "consolidar markdown", considerar este documento como ponto de partida e incluir apenas o conteúdo estudado após este módulo.

---

# Platform Fundamentals

## Visão Geral da Plataforma

A ServiceNow é uma plataforma **Application Platform as a Service (aPaaS)** baseada em nuvem, utilizada para automação de processos e transformação digital.

### Princípios

- Single Platform
- One Data Model
- One Architecture

### Capacidades

- Automation
- Engagement
- AI & ML
- Low Code
- Security

---

# Conceito Fundamental: Tudo é uma Tabela

Na ServiceNow praticamente tudo é armazenado em tabelas.

## Estrutura

```text
Database
 └── Table
      └── Record
           └── Fields
```

### Definições

| Conceito | Significado |
|-----------|-------------|
| Table | Estrutura de armazenamento |
| Record | Linha da tabela |
| Field | Coluna da tabela |

### Exemplos de registros

- Usuários
- Grupos
- Roles
- Incidentes
- Mudanças
- Solicitações
- Artigos de conhecimento

---

# Personas da Plataforma

## System Administrator

Responsável pela administração da instância.

### Responsabilidades

- Configuração da plataforma
- Segurança
- Administração de usuários
- Administração de roles

---

## Specialized Administrator

Administra áreas específicas.

### Exemplos

- Knowledge Management
- HR
- Reports
- Web Services

---

## Process User

Executa processos de negócio.

### Exemplos

- Incident Management
- Change Management

---

## Approver

Responsável por aprovações.

### Capacidades

- Aprovar registros
- Rejeitar registros
- Consultar aprovações pendentes

---

## Requester (ESS)

Usuário consumidor de serviços.

### Capacidades

- Abrir solicitações
- Solicitar serviços
- Consultar status

### Observação

Normalmente não possui roles especiais.

---

# Users, Groups e Roles

## User

Tabela:

```text
sys_user
```

Representa uma pessoa que acessa a plataforma.

---

## Group

Tabela:

```text
sys_user_group
```

Representa uma coleção de usuários.

### Exemplos

- Service Desk
- Knowledge Authors
- HR Administrators

### Utilizações

- Assignment
- Aprovações
- Notificações

---

## Role

Tabela:

```text
sys_user_role
```

Define permissões de acesso.

### Controla

- Aplicações
- Módulos
- Dados
- Funcionalidades

---

# Role-Based Access Control (RBAC)

A segurança da plataforma é baseada em Roles.

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

---

# Melhor Prática de Atribuição

## Recomendado

```text
Role
 ↓
Group
 ↓
User
```

## Evitar

```text
Role
 ↓
User
```

### Benefícios

- Governança
- Escalabilidade
- Facilidade de manutenção

---

# Herança de Roles

Uma Role pode conter outras Roles.

## Exemplo

```text
catalog_admin
├── catalog
└── user_criteria_admin
```

Ao atribuir:

```text
catalog_admin
```

O usuário herda automaticamente:

```text
catalog
user_criteria_admin
```

---

# ACL (Access Control List)

Controlam acesso aos dados.

### Operações Comuns

- Read
- Write
- Update
- Delete

ACLs utilizam Roles para determinar acesso.

---

# User Impersonation

Permite testar a experiência de outro usuário.

## Utilização

- Troubleshooting
- Validação de permissões
- Testes de ACL
- Testes de Roles

## Iniciar

```text
Impersonate User
```

## Encerrar

```text
End Impersonation
```

---

# Now Platform

Base de todas as soluções ServiceNow.

## Customer Workflows

- Customer Service Management
- Field Service Management

---

## Industry Workflows

Soluções específicas por indústria.

---

## Employee Workflows

- HR Service Delivery
- Employee Experience

---

## Finance & Supply Chain Workflows

Fluxos financeiros e operacionais.

---

## Technology Workflows

- ITSM
- ITOM
- ITAM
- SecOps

---

## Creator Workflows

Ferramentas de desenvolvimento e automação.

### Exemplos

- App Engine
- Flow Designer
- IntegrationHub

---

# Aplicações Estudadas

## ITSM Incident Management

Objetivo:

> Restaurar rapidamente a operação normal do serviço.

### Atividades

- Registro
- Classificação
- Priorização
- Atribuição
- Resolução
- Encerramento

### Tabela

```text
incident
```

---

## Service Operations Workspace (SOW)

Workspace voltado para agentes.

### Benefícios

- Interface moderna
- Visão consolidada
- Maior produtividade

### Importante

Utiliza os mesmos registros da plataforma.

---

## Employee Center

Portal de autoatendimento.

### Funcionalidades

- Solicitação de serviços
- Consulta de conhecimento
- Abertura de chamados
- Consulta de status

### Recursos

- Workflows integrados
- Comunicação
- Engajamento
- Experiência semelhante a intranet

---

## Employee Center Pro

Versão avançada do Employee Center.

### Características

- Licenciamento adicional
- Recursos de HR Service Delivery
- Conteúdo personalizado
- Comunicação corporativa

---

# Interfaces da Plataforma

Os usuários podem interagir através de:

- Platform UI
- Service Operations Workspace
- Employee Center
- Service Catalog
- Dashboards
- Lists
- Forms
- Knowledge Bases

## Importante

Todas as interfaces utilizam os mesmos dados da plataforma.

---

# Tabelas Importantes para CSA

| Objeto | Tabela |
|----------|----------|
| User | sys_user |
| Group | sys_user_group |
| Role | sys_user_role |
| Incident | incident |

---

# Resumo para Prova

## Memorizar

✅ Tudo na ServiceNow é armazenado em tabelas.

✅ Record = Linha da tabela.

✅ User = sys_user.

✅ Group = sys_user_group.

✅ Role = sys_user_role.

✅ ServiceNow utiliza RBAC.

✅ Roles podem conter outras Roles.

✅ Um usuário pode ter múltiplas Roles.

✅ ✅ ACLs controlam acesso aos dados.

✅ Melhor prática: Role → Group → User.

✅ User Impersonation valida permissões.

✅ Single Platform.

✅ One Data Model.

✅ One Architecture.

✅ Incident Management é um processo central do ITSM.

✅ Employee Center é o principal portal de autoatendimento.

✅ Diferentes interfaces acessam os mesmos registros.

---

# Conceitos-Chave para Quiz

- ServiceNow é uma plataforma aPaaS.
- Tudo é armazenado em tabelas.
- Users ficam em `sys_user`.
- Groups ficam em `sys_user_group`.
- Roles ficam em `sys_user_role`.
- Roles controlam acesso.
- ACLs controlam operações nos dados.
- Roles podem ser herdadas.
- User Impersonation permite testar acessos.
- A melhor prática é atribuir Roles a Groups.
- A Now Platform utiliza Single Platform, One Data Model e One Architecture.
- Incident Management faz parte do ITSM.
- Employee Center é o portal de experiência do colaborador.

