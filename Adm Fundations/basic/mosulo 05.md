# Module 5 – Configure Self-Service (Resumo para CSA)

> Objetivo do módulo:
>
> Aprender como usuários acessam conhecimento, solicitam serviços e interagem com a ServiceNow através de Portais, Knowledge Management, Service Catalog e automações.

---

# Mapa Mental do Módulo

```text
Self-Service
│
├── Portais
│   ├── Employee Center
│   ├── Service Portal
│   └── Knowledge Portal
│
├── Knowledge Management
│   ├── Knowledge Bases
│   ├── User Criteria
│   └── Artigos
│
├── Service Catalog
│   ├── Catalog Items
│   ├── Variables
│   ├── Variable Sets
│   ├── Record Producers
│   └── Order Guides
│
├── Request Management
│   └── REQ → RITM → SCTASK
│
├── Virtual Agent
│
└── Workflow Studio
    ├── Flows
    ├── Actions
    ├── Data Pills
    ├── Integration Hub
    └── Playbooks
```

---

# Portais

## URLs importantes

| Portal | URL |
|----------|----------|
| Employee Center | `/esc` |
| Service Portal | `/sp` |
| Knowledge Portal | `/kb` |

### CSA

✅ Employee Center = `/esc`

✅ Service Portal = `/sp`

✅ Knowledge Portal = `/kb`

---

## Employee Center

Portal principal para colaboradores.

Centraliza:

- Conhecimento
- Catálogo
- Solicitações
- Casos

---

## Service Portal

Portal tradicional de autoatendimento.

Permite:

- Abrir incidentes
- Solicitar serviços
- Pesquisar artigos

---

## Knowledge Portal

Focado exclusivamente em:

- Pesquisa
- Navegação de artigos
- Knowledge Bases

---

# Knowledge Management

## Knowledge Base

Repositório de artigos.

Exemplos:

```text
IT Knowledge Base
HR Knowledge Base
Security Knowledge Base
```

---

## Artigos

Podem conter:

- Tutoriais
- FAQs
- Procedimentos
- Soluções

---

## Workflow do Artigo

```text
Draft
 ↓
Approval
 ↓
Published
 ↓
Retired
```

---

# User Criteria

Controlam acesso ao conteúdo.

---

## Tipos

### Can Read

Quem pode visualizar.

### Can't Read

Quem não pode visualizar.

### Can Contribute

Quem pode criar ou editar.

### Can't Contribute

Quem não pode criar ou editar.

---

## Pegadinha de prova

### Sem Can Read

```text
Knowledge Base
↓
Acessível para todos
```

---

## Match All

### Marcado

```text
AND
```

Todos os critérios devem ser verdadeiros.

---

### Desmarcado (Padrão)

```text
OR
```

Qualquer critério concede acesso.

---

# Service Catalog

## Conceito

```text
One-Stop Shopping
```

Local único para solicitar produtos e serviços.

---

## Exemplos

- Notebook
- Monitor
- VPN
- Software
- Licença
- Acesso

---

## Múltiplos Catálogos

Uma instância pode possuir:

```text
IT Catalog
HR Catalog
Facilities Catalog
```

---

# Catalog Item

Unidade fundamental do catálogo.

Exemplos:

```text
Laptop
VPN Access
Adobe Acrobat
```

---

# Variables

Perguntas apresentadas ao usuário.

Exemplos:

```text
Qual sistema operacional?
```

```text
Quem utilizará?
```

```text
Data necessária?
```

---

## Tipos comuns

- Checkbox
- Select Box
- Multiple Choice
- Reference
- Single Line Text

---

## CSA

### Pergunta clássica

O que representa as perguntas feitas durante a solicitação?

✅ Variables

---

# Variable Sets

Conjunto reutilizável de variáveis.

---

## Benefícios

- Menos duplicação
- Mais padronização
- Menos manutenção

---

## Pegadinha

Alteração em um Variable Set afeta:

✅ Todos os itens associados

---

# Record Producers

## Definição

Tipo especial de Catalog Item.

---

## O que faz?

Cria registros diretamente em tabelas.

---

## Exemplo

```text
Usuário preenche formulário
↓
Incident criado
```

---

## Diferença importante

### Catalog Item

```text
REQ
 ↓
RITM
 ↓
SCTASK
```

---

### Record Producer

```text
Incident
Case
Registro Customizado
```

Diretamente.

---

# Order Guides

## Conceito

Permitem solicitar vários itens relacionados de uma única vez.

---

## Exemplo

Novo funcionário:

```text
Notebook
Monitor
VPN
Email
```

---

## Resultado

Uma experiência guiada para vários itens.

---

# Catalog Builder

Ferramenta visual para criação de:

- Catalog Items
- Record Producers
- Templates

---

## Responsabilidades

### Catalog Admin

Cria templates.

### Business Owner

Cria itens usando templates.

---

# Request Management

## Fluxo mais importante do módulo

```text
REQ
 ↓
RITM
 ↓
SCTASK
```

Memorize.

---

## REQ

Request

Representa:

```text
Pedido completo
```

---

## RITM

Requested Item

Representa:

```text
Cada item solicitado
```

---

## SCTASK

Service Catalog Task

Representa:

```text
Tarefa de fulfillment
```

---

# Pegadinha de prova

```text
1 REQ
 ↓
N RITMs
 ↓
N SCTASKs
```

---

# My Requests

Caminho:

```text
Self-Service
 ↓
My Requests
```

Utilizado para acompanhar solicitações.

---

# Stages

Representação visual do andamento.

Exemplo:

```text
Requested
 ↓
Approval
 ↓
Fulfillment
 ↓
Complete
```

---

# Virtual Agent

## Conceito

Chatbot corporativo da ServiceNow.

---

## Utiliza

- Knowledge Base
- Service Catalog
- Requests
- Incidents

---

## Benefícios

✅ 24x7

✅ Menor MTTR

✅ Mais Self-Service

✅ Menos chamados

---

## Pode transferir para

```text
Live Agent
```

---

## Canais

- Portal
- Web
- iOS
- Android
- Slack
- Microsoft Teams

---

# Workflow Studio

## Acesso

```text
All
 ↓
Process Automation
 ↓
Workflow Studio
```

---

## Componentes

- Flows
- Actions
- Subflows
- Playbooks
- Decision Tables

---

# Estrutura de um Flow

```text
Trigger
 ↓
Action
```

ou

```text
Trigger
 ↓
Condition
 ↓
Action
```

---

# Trigger

Inicia um Flow.

---

## Exemplos

- Record Created
- Date
- Application Event

---

# Condition

Define quando uma ação executa.

Exemplo:

```text
Priority = 1
```

---

# Actions

Executam atividades.

---

## Principais

- Ask For Approval
- Create Record
- Lookup Record
- Delete Record
- Wait For Condition

---

# Data Pills

## Conceito

Dados produzidos durante a execução do Flow.

---

## Exemplo

```text
Incident Number
```

↓

```text
Data Pill
```

↓

```text
Use em outra Action
```

---

## Pergunta clássica

Onde ficam armazenados os resultados de uma Action?

✅ Data Pill

---

# Spokes

## Conceito

Pacotes contendo:

- Triggers
- Actions

específicos de uma aplicação.

---

## Exemplo

```text
ITSM Spoke
```

---

# Integration Hub

## Objetivo

Criar integrações reutilizáveis.

---

## Exemplos

- REST
- SOAP
- Sistemas externos

---

## Resultado

Integrações tornam-se:

```text
Actions
```

reutilizáveis.

---

# Playbooks

## Conceito

Processos guiados construídos com Workflow Studio.

---

## Benefícios

- Padronização
- Reutilização
- Orientação operacional
- Organização por tarefas

---

# Top 15 questões de prova

### 1

Employee Center URL?

✅ `/esc`

---

### 2

Service Portal URL?

✅ `/sp`

---

### 3

Knowledge Portal URL?

✅ `/kb`

---

### 4

Sem Can Read, quem acessa a KB?

✅ Todos.

---

### 5

Match All marcado significa?

✅ AND

---

### 6

Conceito principal do Service Catalog?

✅ One-Stop Shopping.

---

### 7

Hierarquia correta?

✅ REQ → RITM → SCTASK

---

### 8

O que é um RITM?

✅ Requested Item.

---

### 9

O que são Variables?

✅ Perguntas feitas ao usuário.

---

### 10

O que é um Record Producer?

✅ Tipo de Catalog Item que cria registros diretamente.

---

### 11

O que é um Order Guide?

✅ Solicitação guiada de vários itens relacionados.

---

### 12

O que inicia um Flow?

✅ Trigger.

---

### 13

Onde ficam os resultados de uma Action?

✅ Data Pill.

---

### 14

O que é um Spoke?

✅ Conjunto de Triggers e Actions de uma aplicação.

---

### 15

Qual ferramenta é utilizada para automações?

✅ Workflow Studio / Flow Designer.

---

# Decore para a prova

```text
/esc = Employee Center
/sp  = Service Portal
/kb  = Knowledge Portal

Can Read vazio = acesso para todos

Match All = AND

Service Catalog = One-Stop Shopping

REQ
 ↓
RITM
 ↓
SCTASK

Variables = perguntas

Record Producer = cria registros diretamente

Trigger = inicia Flow

Data Pill = dados reutilizáveis

Integration Hub = integrações

Playbook = processo guiado
```