# Module 7 – ServiceNow Utilities
## Guia de Revisão para CSA (Marco Consolidado)

> Objetivo do módulo:
>
> Aprender os principais mecanismos de customização, transporte de alterações, automação de testes e recursos administrativos da plataforma.

---

# Mapa Mental do Módulo

```text
ServiceNow Utilities
│
├── Scripting
│   ├── UI Policy
│   ├── Data Policy
│   ├── Client Script
│   ├── Catalog Client Script
│   ├── Business Rule
│   ├── UI Action
│   └── Script Include
│
├── Application Scope
│
├── Update Sets
│
├── Automated Test Framework (ATF)
│
├── App Engine Studio (AES)
│
├── Delegated Developers
│
└── Instance Utilities
    ├── HealthScan
    ├── Instance Scan
    ├── Stats
    └── Releases
```

---

# 1. Client Side vs Server Side

## Decore

```text
Client Side
↓
Navegador
↓
Interface

Server Side
↓
Servidor
↓
Banco de Dados
```

---

# Comparação Fundamental

| Recurso | Executa Onde? | Objetivo |
|----------|----------|----------|
| UI Policy | Cliente | Controlar comportamento visual |
| Client Script | Cliente | Executar JavaScript |
| Catalog Client Script | Cliente | JavaScript no Catálogo |
| Business Rule | Servidor | Lógica de negócio |
| Data Policy | Dados | Garantir integridade |
| UI Action | Interface | Botões e ações |
| Script Include | Servidor | Código reutilizável |

---

# 2. UI Policy

## Objetivo

Alterar comportamento visual do formulário.

---

## UI Policy Actions

Podem alterar:

✅ Mandatory

✅ Hidden / Visible

✅ Read Only

---

## Exemplo

```text
State = Closed
↓
Close Notes obrigatória
```

---

## Pegadinha CSA

UI Policy:

✅ Interface

❌ Segurança

❌ ACL

❌ Banco de Dados

---

# Questão Típica

### Quero tornar um campo obrigatório na tela.

✅ UI Policy

---

# 3. Data Policy

## Objetivo

Garantir integridade dos dados independentemente da origem.

---

# Funciona em

✅ Formulário

✅ Import Set

✅ Integrações

✅ Web Services

---

# Diferença Clássica

### UI Policy

```text
Interface
```

---

### Data Policy

```text
Dados
```

---

# Pegadinha CSA

### Campo obrigatório em importação

✅ Data Policy

❌ UI Policy

---

# 4. Client Scripts

## Objetivo

Executar JavaScript no navegador.

---

# Tipos

## onLoad

Executa ao abrir o formulário.

---

## onChange

Executa quando um campo muda.

---

## onSubmit

Executa antes do envio.

---

## onCellEdit

Executa durante edição em listas.

---

# Casos de Uso

✅ Validar campos

✅ Exibir mensagens

✅ Atualizar campos dinamicamente

✅ Alterar experiência do usuário

---

# Pegadinha CSA

```text
JavaScript
↓
Formulário
↓
Navegador
```

✅ Client Script

---

# 5. Catalog Client Scripts

## Objetivo

Client Scripts específicos do:

- Service Catalog
- Record Producers
- Order Guides

---

## Tipos

✅ onLoad

✅ onChange

✅ onSubmit

---

# Decore

```text
Client Script
↓
Formulários

Catalog Client Script
↓
Service Catalog
```

---

# 6. Business Rules

## Objetivo

Executar lógica de negócio no servidor.

---

# Eventos

✅ Display

✅ Insert

✅ Update

✅ Delete

✅ Query

---

# Tipos Mais Cobrados

## Before

Antes de salvar.

---

## After

Depois de salvar.

---

## Async

Segundo plano.

---

## Display

Antes de exibir.

---

# Mnemônico

```text
Before
↓
Antes de salvar

After
↓
Depois de salvar

Async
↓
Segundo plano

Display
↓
Antes de mostrar
```

---

# Pegadinhas CSA

### Executar antes de gravar

✅ Before

---

### Executar após gravar

✅ After

---

### Não fazer usuário esperar

✅ Async

---

### Preparar dados para tela

✅ Display

---

# 7. UI Actions

## Objetivo

Criar elementos acionáveis.

---

# Exemplos

✅ Botões

✅ Links

✅ Menus

✅ Context Menus

---

# Questão Típica

### Preciso criar um botão.

✅ UI Action

---

# 8. Script Includes

## Objetivo

Criar código reutilizável.

---

# Decore

```text
Script Include
↓
Biblioteca de Funções
```

---

# 9. Application Scope

## Objetivo

Isolar aplicações.

---

# Benefícios

✅ Segurança

✅ Controle de acesso

✅ Redução de conflitos

✅ Proteção entre aplicações

---

# Tipos

## Global

Escopo global.

---

## Private Scope

Escopo específico da aplicação.

---

# Questão Típica

### O que protege aplicações contra alterações indevidas?

✅ Application Scope

---

# 10. Update Sets

## Conceito

Transportam customizações entre instâncias.

---

# Fluxo

```text
DEV
 ↓
TEST
 ↓
PROD
```

---

# Regra Mais Importante do Módulo

```text
Update Set
↓
Move Configuração

Não Move Dados
```

---

# Captura

✅ Business Rules

✅ Client Scripts

✅ UI Policies

✅ Forms

✅ Fields

✅ Tables

✅ Views

✅ Flows

✅ Roles

✅ Report Definitions

---

# NÃO Captura

❌ Incidents

❌ Tasks

❌ Changes

❌ Usuários

❌ Grupos

❌ CIs

❌ Dados

❌ Resultados de relatórios

---

# Como mover dados?

✅ Export XML

---

# Questão Clássica

### Update Set move Incident?

❌ Não

---

### Update Set move Business Rule?

✅ Sim

---

# Ciclo de Vida de um Update Set

```text
Create
 ↓
Make Current
 ↓
In Progress
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

