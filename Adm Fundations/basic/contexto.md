# ServiceNow Administration Fundamentals
# Resumo Geral de Contexto para Revisão CSA

> Objetivo:
>
> Este documento serve como mapa mental consolidado dos módulos estudados até o momento.
>
> Não substitui os resumos individuais dos módulos.
>
> Deve ser utilizado como revisão rápida antes de simulados e da prova CSA.

---

# Visão Geral da Plataforma

A ServiceNow é uma plataforma de:

```text
Digital Workflow
```

utilizada para automatizar processos corporativos através de:

- ITSM
- ITOM
- HR
- CSM
- Security
- Aplicações customizadas

---

# Arquitetura Fundamental

```text
Usuário
    ↓
Interface
    ↓
Aplicação
    ↓
Tabela
    ↓
Registro
```

Tudo na ServiceNow gira em torno de:

```text
Tabelas
+
Registros
```

---

# Módulo 4 – Manage Data

## Conceitos Centrais

A plataforma armazena informações em:

```text
Tables
```

e cada linha representa um:

```text
Record
```

---

## Hierarquia

```text
Task
 ↓
Incident

Task
 ↓
Change

Task
 ↓
Problem
```

---

## O que memorizar

### Campo Único

```text
sys_id
```

Identificador único de cada registro.

---

### Número Visível

```text
INC0010001
```

não é a chave primária.

---

### Importação de Dados

```text
Data Source
 ↓
Import Set
 ↓
Transform Map
 ↓
Target Table
```

---

### Pegadinha

```text
Transform Map
```

mapeia dados.

Não importa arquivos.

---

# Módulo 5 – Configure Self-Service

## Objetivo

Disponibilizar autosserviço aos usuários.

---

# Employee Center

Portal principal.

```text
/esc
```

---

# Service Portal

Portal tradicional.

```text
/sp
```

---

# Knowledge Portal

Portal de conhecimento.

```text
/kb
```

---

# Knowledge Management

Utilizado para:

- FAQs
- Tutoriais
- Procedimentos

---

# User Criteria

Controla acesso à Knowledge Base.

---

## Pegadinha

Sem:

```text
Can Read
```

↓

todos possuem acesso.

---

# Service Catalog

Conceito:

```text
One-Stop Shopping
```

---

# Estrutura

```text
REQ
 ↓
RITM
 ↓
SCTASK
```

---

# Decorar

### REQ

Pedido completo.

### RITM

Item solicitado.

### SCTASK

Tarefa de atendimento.

---

# Catalog Components

### Variables

Perguntas para o usuário.

---

### Variable Sets

Grupo reutilizável de variáveis.

---

### Record Producer

Cria registros diretamente.

---

### Order Guide

Solicita vários itens relacionados.

---

# Workflow Studio

Permite criar:

- Flows
- Actions
- Playbooks

---

# Flow Designer

Estrutura:

```text
Trigger
 ↓
Action
```

---

### Data Pills

Resultados produzidos durante o Flow.

---

# Módulo 6 – Enable Productivity

## Objetivo

Melhorar produtividade e colaboração.

---

# Notifications

Enviam comunicações automáticas.

---

## Estrutura

```text
When to Send

Who Receives

What It Contains
```

---

## Pegadinha

Usuário:

```text
Inactive
```

↓

não recebe notificações.

---

# Visualization Designer

Configura:

```text
Data

Type

Metrics

Presentation
```

---

## Pegadinha

PDF Exportado:

✅ pode ficar desatualizado

❌ não mantém ACLs

---

# Predictive Intelligence

Utiliza:

```text
Machine Learning
```

para:

- Categorizar
- Atribuir
- Priorizar

registros automaticamente.

---

# Sidebar

Permite:

```text
Colaboração em tempo real
```

dentro dos Workspaces.

---

# Módulo 7 – ServiceNow Utilities

## Objetivo

Aprender customização, migração e testes.

---

# UI Policy

Controla:

- Mandatory
- Hidden
- Read Only

---

## Executa

```text
Client Side
```

---

# Client Script

Executa JavaScript no navegador.

---

## Tipos

- onLoad
- onChange
- onSubmit

---

# Business Rule

Executa lógica no servidor.

---

## Eventos

- Insert
- Update
- Delete
- Query
- Display

---

## Tipos

### Before

Antes de salvar.

### After

Depois de salvar.

### Async

Segundo plano.

### Display

Antes de exibir.

---

# Data Policy

Valida dados independentemente da origem.

---

## Funciona em

- Interface
- Importações
- Integrações

---

# UI Action

Cria:

- Botões
- Links
- Menus

---

# Script Include

Código reutilizável.

---

# Application Scope

Isola aplicações.

---

# Update Sets

Movem customizações entre instâncias.

---

## Regra mais importante

```text
Move Configuração

Não Move Dados
```

---

## Fluxo

```text
Create
 ↓
Make Current
 ↓
Complete
 ↓
Retrieve
 ↓
Preview
 ↓
Commit
```

---

## Pegadinha

### Preview

Analisa conflitos.

### Commit

Aplica alterações.

---

# ATF

```text
Automated Test Framework
```

Executa testes automatizados.

---

# App Engine Studio

Ferramenta:

```text
Low-Code
```

para criação de aplicações.

---

# stats.do

Mostra:

- Release
- Build
- Performance
- Informações da instância

---

# Módulo 8 – Secure a ServiceNow Instance

## Objetivo

Proteger dados e monitorar segurança.

---

# Shared Responsibility Model

A segurança é compartilhada entre:

```text
ServiceNow
+
Cliente
```

---

## Pegadinha

Cliente é responsável por:

- Dados
- Compartilhamento
- Retenção
- Governança

---

# Encryption

## At Rest

Protege dados armazenados.

---

## In Transit

Protege dados em trânsito.

---

## Tecnologia

```text
TLS
```

---

# Logs

## Infrastructure Logs

❌ Cliente não acessa.

---

## Application Logs

✅ Cliente acessa.

---

# Security Contacts

Recebem:

- Alertas
- Incidentes
- Comunicados de segurança

---

# Security Center

Ferramenta principal de monitoramento.

---

## Overview

Visão geral.

---

## Hardening

Mostra:

```text
Hardening Score
```

---

## Compliance

Mostra:

```text
Compliance Score
```

---

## Scanner

Identifica problemas.

---

## Customer Actions

Mostra correções necessárias.

---

## Best Practices

Checklist de segurança.

---

## Metrics

Monitora riscos e ameaças.

---

## Pegadinha

Corrigir primeiro:

```text
Critical
 ↓
High
```

---

# Comparações Mais Cobradas

## UI Policy x Data Policy

| UI Policy | Data Policy |
|------------|------------|
| Interface | Dados |
| Formulário | Todas as origens |
| Cliente | Servidor/Dados |

---

## Client Script x Business Rule

| Client Script | Business Rule |
|---------------|---------------|
| Navegador | Servidor |
| Interface | Banco de Dados |
| Client Side | Server Side |

---

## At Rest x In Transit

| At Rest | In Transit |
|----------|----------|
| Dados Gravados | Dados Trafegando |
| Banco de Dados | Rede |
| Storage | TLS |

---

## Hardening x Compliance

| Hardening | Compliance |
|------------|------------|
| Segurança | Conformidade |
| Recomendações ServiceNow | Regras da Organização |

---

# Top 30 Conceitos para Decorar

```text
sys_id
↓
ID único

/esc
↓
Employee Center

/sp
↓
Service Portal

/kb
↓
Knowledge Portal

REQ
↓
RITM
↓
SCTASK

Variables
↓
Perguntas

Record Producer
↓
Cria registros

Flow
↓
Trigger + Action

Data Pills
↓
Dados reutilizáveis

Notifications
↓
When
Who
What

PDF Export
↓
Não leva ACL

Predictive Intelligence
↓
Machine Learning

Sidebar
↓
Colaboração

UI Policy
↓
Mandatory

Client Script
↓
JavaScript

Business Rule
↓
Servidor

Before
After
Async
Display

Update Set
↓
Move configuração

Não move dados

Preview
↓
Conflitos

Commit
↓
Aplica

ATF
↓
Teste Automatizado

AES
↓
Low-Code

Application Scope
↓
Isolamento

stats.do
↓
Release

Shared Responsibility
↓
Cliente protege os dados

At Rest
↓
Dados armazenados

In Transit
↓
TLS

Infrastructure Logs
↓
Sem acesso

Application Logs
↓
Com acesso

Security Center
↓
Segurança

Scanner
↓
Problemas

Metrics
↓
Riscos
```

---

# Prioridade de Estudo para o CSA

## Prioridade Máxima

1. Tabelas e Registros
2. REQ → RITM → SCTASK
3. Service Catalog
4. Knowledge Management
5. Flow Designer
6. Notifications
7. UI Policy × Client Script × Business Rule
8. Update Sets
9. Retrieve → Preview → Commit
10. Shared Responsibility Model

---

## Prioridade Alta

11. Data Policy
12. Predictive Intelligence
13. Application Scope
14. ATF
15. Security Center
16. Hardening Score
17. Compliance Score

---

## Prioridade Média

18. Sidebar
19. App Engine Studio
20. Security Contacts
21. stats.do
22. Learning
23. Best Practices

---

# Revisão Final de 30 Segundos

```text
Dados
↓
Table + Record

Catalog
↓
REQ → RITM → SCTASK

Flow
↓
Trigger → Action

Notificação
↓
When → Who → What

UI Policy
↓
Mandatory

Client Script
↓
JavaScript

Business Rule
↓
Servidor

Update Set
↓
Move Configuração

Não Dados

Preview
↓
Conflitos

Commit
↓
Aplica

At Rest
↓
Dados Armazenados

In Transit
↓
TLS

Cliente
↓
Responsável pelos Dados

Security Center
↓
Scanner
Hardening
Compliance
Metrics
```
