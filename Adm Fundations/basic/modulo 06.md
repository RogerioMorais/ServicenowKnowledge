# Module 6 – Enable Productivity
## Guia de Revisão para CSA (Marco Consolidado)

> Objetivo do módulo:
>
> Aumentar produtividade utilizando:
>
> - Notifications
> - Visualization Designer
> - Predictive Intelligence
> - Sidebar Collaboration

---

# Mapa Mental

```text
Enable Productivity
│
├── Notifications
│   ├── Email
│   ├── SMS
│   ├── Layouts
│   └── Outbox
│
├── Visualization Designer
│   ├── Data
│   ├── Type
│   ├── Metrics
│   └── Presentation
│
├── Predictive Intelligence
│   ├── Categorization
│   ├── Assignment
│   └── Prioritization
│
└── Sidebar
    └── Real-Time Collaboration
```

---

# 1. Notifications

## Conceito

Permitem enviar comunicações automáticas quando eventos ocorrem na plataforma.

Exemplos:

- Incident Created
- Incident Updated
- Request Completed
- Change Approved

---

## Caminho

```text
System Notification
 ↓
Email
 ↓
Notifications
```

---

## Estrutura de uma Notification

### When to Send

Quando enviar.

Exemplos:

```text
Record Created
Record Updated
Event Fired
```

---

### Who Will Receive

Quem receberá.

Exemplos:

```text
Caller
Assignment Group
Specific User
Specific Group
```

---

### What It Will Contain

Conteúdo.

Exemplos:

```text
Subject
Message Body
Links
Dynamic Fields
```

---

## O que pode disparar uma Notification?

✅ Record Inserted

✅ Record Updated

✅ Event

✅ Script

---

## Email Layouts

Controlam:

- Cabeçalho
- Rodapé
- HTML
- Aparência visual

---

## Outbox

Visualizar emails enviados:

```text
System Mailboxes
 ↓
Outbound
 ↓
Outbox
```

---

## Pegadinhas CSA

### Usuário Inativo

```text
Active = False
```

↓

```text
Não recebe Notification
```

---

### Notification NÃO define ACL

Ela apenas envia mensagens.

---

# Tabela de Memorização

| Conceito | Memorizar |
|-----------|------------|
| Criação | System Notification → Email → Notifications |
| Visualizar Emails | Outbox |
| Layout de Email | Email Layout |
| Usuário Inativo | Não recebe email |
| Canais | Email e SMS |

---

# Questões Típicas

### O que uma Notification configura?

✅ When to Send

✅ Who Will Receive

✅ What It Will Contain

---

### Onde visualizar emails enviados?

✅ Outbox

---

### Usuário inativo recebe email?

❌ Não.

---

# 2. Visualization Designer

## Conceito

Ferramenta utilizada para criar e configurar visualizações gráficas.

---

## Configurações Principais

### Data

Origem dos dados.

---

### Type

Tipo do gráfico.

Exemplos:

```text
Bar
Line
Pie
```

---

### Metrics

Métricas exibidas.

Exemplos:

```text
Incident Count
Average Resolution Time
```

---

### Presentation

Forma de exibição.

Exemplos:

```text
Colors
Labels
Legend
Layout
```

---

# Compartilhamento

## Duplicate

Cria uma cópia.

---

## Share

Compartilha.

---

## Export

Exporta.

---

# Pegadinhas CSA

## Export PDF

Quando exportado:

✅ Pode ficar desatualizado

❌ ACLs NÃO acompanham o PDF

---

# Tabela de Memorização

| Aba | Função |
|------|---------|
| Data | Fonte dos dados |
| Type | Tipo do gráfico |
| Metrics | Valores mostrados |
| Presentation | Aparência |

---

# Questões Típicas

### Quais são as quatro áreas de configuração?

✅ Data

✅ Type

✅ Metrics

✅ Presentation

---

### Quais opções existem para compartilhar visualizações?

✅ Duplicate

✅ Share

✅ Export

---

### O PDF exportado mantém ACLs?

❌ Não.

---

# 3. Predictive Intelligence

## Conceito

Utiliza Machine Learning para preencher automaticamente informações em registros.

---

## Objetivo

Reduzir:

- Trabalho manual
- Erros
- Tempo de resolução

---

# O que pode fazer?

## Categorization

Define:

```text
Category
Subcategory
```

---

## Assignment

Define:

```text
Assignment Group
```

---

## Prioritization

Define ou sugere:

```text
Priority
Impact
Urgency
```

---

# Fluxo Clássico

```text
Short Description
         ↓
Predictive Intelligence
         ↓
Category
Group
Priority
```

---

# Benefícios

✅ Menor MTTR

✅ Menos erros

✅ Menos transferências

✅ Menor custo operacional

---

# Pegadinha CSA

## Predictive Intelligence

Não é Flow Designer.

Não é Business Rule.

Não é ACL.

É:

```text
Machine Learning
```

---

# Tabela de Memorização

| Função | Resultado |
|----------|------------|
| Categorization | Category |
| Assignment | Assignment Group |
| Prioritization | Priority |

---

# Questões Típicas

### O que utiliza Machine Learning?

✅ Predictive Intelligence

---

### O que pode fazer?

✅ Categorizar

✅ Atribuir

✅ Priorizar

---

# 4. Sidebar Collaboration

## Conceito

Permite colaboração em tempo real dentro dos Workspaces.

---

# Objetivo

Discutir registros sem sair do Workspace.

---

## Exemplos

- Incident
- Case
- Interaction
- Request

---

# Benefícios

✅ Colaboração contextual

✅ Discussões vinculadas ao registro

✅ Menor uso de email

✅ Menor troca de ferramentas

---

# Filtros

## All

Todas as discussões.

---

## Unread

Somente não lidas.

---

## This Record

Somente o registro atual.

---

## More

Filtros adicionais.

---

# Pegadinha CSA

Sidebar não é:

❌ Chat externo

❌ Email

❌ Teams

✅ Colaboração contextual em Workspaces

---

# Questões Típicas

### Para que serve a Sidebar?

✅ Colaboração em tempo real.

---

### Onde é utilizada?

✅ Workspaces.

---

# Top 10 Conceitos para Decorar

```text
Notifications
↓
When to Send
Who Receives
What It Contains

Usuário Inativo
↓
Não recebe email

Outbox
↓
Emails enviados

Visualization Designer
↓
Data
Type
Metrics
Presentation

Export PDF
↓
Não aplica ACLs

Predictive Intelligence
↓
Machine Learning

Categoriza
Atribui
Prioriza

Sidebar
↓
Colaboração em tempo real

Filtros:
All
Unread
This Record
```

---

# Questões de Maior Probabilidade no CSA

### 1.

Onde criar Notifications?

✅ System Notification → Email → Notifications

---

### 2.

Quais são as três áreas principais de uma Notification?

✅ When to Send

✅ Who Will Receive

✅ What It Will Contain

---

### 3.

O que acontece ao enviar Notification para usuário inativo?

✅ Não é enviada.

---

### 4.

Onde visualizar emails enviados?

✅ Outbox

---

### 5.

Quais são as quatro configurações do Visualization Designer?

✅ Data

✅ Type

✅ Metrics

✅ Presentation

---

### 6.

O PDF exportado mantém as ACLs?

❌ Não.

---

### 7.

O que utiliza Machine Learning?

✅ Predictive Intelligence

---

### 8.

O que a Predictive Intelligence pode fazer?

✅ Categorizar

✅ Priorizar

✅ Atribuir

---

### 9.

Para que serve a Sidebar?

✅ Colaboração em tempo real

---

### 10.

Quais filtros existem na Sidebar?

✅ All

✅ Unread

✅ This Record

---

# Resumo Executivo para Revisão Rápida

```text
Notifications
↓
When, Who, What

Outbox
↓
Emails enviados

Visualization Designer
↓
Data
Type
Metrics
Presentation

PDF Export
↓
Sem ACL

Predictive Intelligence
↓
Machine Learning

Category
Assignment Group
Priority

Sidebar
↓
Colaboração em Workspaces
```