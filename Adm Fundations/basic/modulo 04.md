# ServiceNow Administration Fundamentals

> Status: ✅ Módulo 4 Concluído
>
> **Marco de Consolidação #4**
>
> Este documento contém apenas o conteúdo estudado após o Marco #3 (Module 3 – Configure Applications for Business).
>
> Em futuras consolidações, considerar este documento como o novo ponto de partida.

---

# Module 4 – Manage Data

## Objetivos do Módulo

Neste módulo foram estudados:

- Estrutura de dados da plataforma
- Tabelas, registros, campos e valores
- Relacionamentos entre tabelas
- Herança de tabelas
- ACLs (Access Controls)
- Import Sets e Transform Maps
- CMDB
- Configuration Items (CIs)
- Dependency Views
- CSDM
- Discovery
- Service Mapping

---

# Estrutura de Dados da Plataforma

## Hierarquia Fundamental

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

---

## Database

Repositório principal de dados da plataforma.

Contém:

- Tables
- Records
- Fields
- Relationships

---

## Table

Coleção de registros.

Exemplos:

```text
incident
task
sys_user
cmdb_ci
```

---

## Record

Representa uma linha da tabela.

Exemplo:

```text
INC0010001
```

---

## Field

Representa uma coluna.

Exemplos:

```text
Number
State
Caller
Priority
```

---

## Value

Conteúdo armazenado em uma célula.

Exemplo:

```text
Field: Location

Value: Miami
```

---

# Componentes de um Campo

Todo campo possui:

## Field Label

Nome exibido ao usuário.

Exemplo:

```text
First Name
```

---

## Field Name

Nome técnico utilizado internamente.

Exemplo:

```text
first_name
```

---

## Field Value

Valor armazenado.

Exemplo:

```text
Rogerio
```

---

# Relacionamentos de Dados

## Reference Fields

Relacionam uma tabela a outra.

Exemplo:

```text
Incident
   ↓
Caller
   ↓
sys_user
```

---

### Características

✅ Possuem ícone de lupa.

✅ Referenciam uma única tabela.

✅ Armazenam o `sys_id` do registro referenciado.

---

## Source Table

Tabela que possui o campo Reference.

Exemplo:

```text
incident
```

---

## Target Table

Tabela referenciada.

Exemplo:

```text
sys_user
```

---

# Tipos de Relacionamento

## One-to-Many

Exemplo:

```text
Request
   ↓
Many Requested Items
```

---

## Many-to-Many

Exemplo:

```text
Roles
↕
Groups
```

Utiliza tabela intermediária.

---

## Database View

Combina informações de múltiplas tabelas.

Características:

✅ Virtual

✅ Read-only

✅ Utilizada para reporting

---

# Document ID

Tipo especial de campo.

---

## Diferença

### Reference

```text
Aponta para uma única tabela
```

---

### Document ID

```text
Pode apontar para qualquer tabela
```

---

# GlideList

Permite selecionar múltiplos registros.

---

## Exemplo

```text
Watch List
```

Pode conter:

```text
User A
User B
User C
```

---

## Diferença

### Reference

```text
1 registro
```

### GlideList

```text
N registros
```

---

# sys_id

## Definição

Identificador único dos registros.

---

## Características

✅ 32 caracteres

✅ Único na instância

✅ Identificador real do registro

---

## Importante

Reference Fields armazenam:

```text
sys_id
```

e não o texto exibido para o usuário.

---

# Herança de Tabelas (Table Extension)

## Conceito

Uma tabela pode estender outra tabela.

---

## Parent Table

Fornece estrutura.

Exemplo:

```text
Task
```

---

## Child Table

Herda da tabela pai.

Exemplo:

```text
Incident
```

---

## Exemplo

```text
Task
 ├─ Incident
 ├─ Problem
 ├─ Change Request
 └─ Catalog Task
```

---

## Regra Mental

```text
Incident IS A Task
```

não

```text
Incident HAS A Task
```

---

## Herança

Tabelas filhas herdam:

- Campos
- ACLs
- Propriedades
- Business Rules

e podem criar recursos próprios.

---

# Base Tables

## Definição

Tabela que NÃO estende outra tabela.

---

## Exemplo

```text
Task
```

---

# Core Tables

Tabelas entregues pela ServiceNow.

Exemplos:

```text
Task
Incident
Problem
sys_user
```

---

# Custom Tables

Criadas pela organização.

Exemplos:

```text
u_project
u_training_device
x_company_application
```

---

# Schema Map

## Objetivo

Representação gráfica dos relacionamentos de uma tabela.

---

## Permite visualizar

- Referências
- Herança
- Extensões
- Relacionamentos

---

## Acesso

```text
System Definition
 ↓
Tables
 ↓
Show Schema Map
```

---

## Roles

```text
admin
```

ou

```text
personalize_dictionary
```

---

# Scoped Applications

## Scoped

Possuem:

- Sandbox
- APIs restritas
- Isolamento

---

## Global

Possui acesso amplo à plataforma.

---

# ACLs (Access Controls)

## Objetivo

Controlar acesso aos dados.

---

## Não controlam

Aplicações e módulos.

Isso é papel das:

```text
Roles
```

---

## ACLs Controlam

- Registros
- Tabelas
- Campos

---

# Operações

ACLs podem controlar:

```text
Create
Read
Write
Delete
```

(CRUD)

---

# Níveis

## Table Level

Exemplo:

```text
incident
```

---

## Field Level

Exemplo:

```text
incident.short_description
```

---

# Wildcard ACL

Exemplo:

```text
incident.*
```

Representa:

```text
Todos os campos da tabela
```

---

# Ordem de Avaliação

## ACL de Tabela

```text
incident
↓
task
↓
*
```

---

## ACL de Campo

```text
incident.field
↓
task.field
↓
*.field
↓
incident.*
↓
task.*
↓
*.*
```

---

## Regra

O usuário deve passar em:

```text
Table ACL
   AND
Field ACL
```

---

# security_admin

## Elevated Role

Necessária para modificações avançadas de segurança.

---

## Características

✅ Temporária

✅ Elevada

❌ Não funciona durante impersonation

---

# Import Sets

## Objetivo

Importar dados externos.

---

## Fontes

- CSV
- Excel
- Banco de dados
- Sistemas externos

---

## Fluxo

```text
Arquivo
   ↓
Import Set Table
   ↓
Transform Map
   ↓
Target Table
```

---

# Import Set Table

Área temporária (*staging area*) para dados importados.

---

# Transform Maps

## Objetivo

Mapear campos de origem para destino.

---

## Estrutura

```text
Source Field
      ↓
Target Field
```

---

## Componentes

### Field Maps

Definem o mapeamento individual.

---

### Auto Mapping

Mapeamento automático de campos equivalentes.

---

### Mapping Assist

Mapeamento visual via drag-and-drop.

---

# Coalesce

## Conceito

Define a chave utilizada para localizar registros existentes.

---

## Resultado

### Registro Encontrado

```text
Update
```

---

### Registro Não Encontrado

```text
Insert
```

---

## Tipos

### Single Field

```text
employee_id
```

---

### Multiple Field

```text
employee_id
+
company
```

---

### Conditional

Utiliza scripts.

---

# CMDB

## Significado

```text
Configuration Management Database
```

---

## Objetivo

Armazenar:

- Configuration Items
- Relacionamentos
- Dependências
- Serviços

---

# Principais Tabelas

## cmdb

Base da CMDB.

---

## cmdb_ci

Tabela principal de Configuration Items.

---

## cmdb_rel_ci

Tabela de relacionamentos entre CIs.

---

# Configuration Items (CI)

## Definição

Elemento gerenciado pela organização.

---

## Tangíveis

Exemplos:

```text
Servidores
Computadores
Switches
Firewalls
```

---

## Intangíveis

Exemplos:

```text
Aplicações
Serviços
Email Service
Business Services
```

---

# Dependency View

## Objetivo

Visualizar relacionamentos entre Configuration Items.

---

## Utiliza

```text
cmdb_rel_ci
```

---

## Permite visualizar

- Dependências
- Impactos
- Relacionamentos
- Serviços

---

## Relacionamentos comuns

```text
Depends On
```

```text
Used By
```

```text
Runs On
```

```text
Hosted By
```

---

# Dependency Map

## Root CI

Ponto inicial da visualização.

Exemplo:

```text
Email Service
```

---

## Upstream

Componentes dos quais o CI depende.

---

## Downstream

Componentes dependentes do CI.

---

## Padrão

Mostra:

```text
3 níveis de dependência
```

---

# CI Relationship Editor

## Objetivo

Criar relacionamentos entre Configuration Items.

---

## Conceito

O CI inicial é chamado:

```text
Base CI
```

---

## Importante

Classes da CMDB herdam relacionamentos das classes pai.

---

# CI Class Manager

## Objetivo

Administrar a hierarquia das classes da CMDB.

---

## Permite visualizar

- Hierarquia
- Metadados
- Reconciliation Rules
- Audit Templates

---

## Abas Importantes

### All

Todos os atributos.

---

### Derived

Atributos herdados.

---

### Added

Atributos específicos da classe.

---

# CSDM

## Significado

```text
Common Service Data Model
```

---

## Definição

Framework baseado na CMDB que define onde informações devem ser armazenadas.

---

## O que é

✅ Boas práticas

✅ Modelo de referência

✅ Terminologia padronizada

✅ Guidance para modelagem de serviços

---

## O que NÃO é

❌ Produto

❌ Licença

❌ Plugin

❌ Relatório

❌ Guia de implementação ITSM

---

## Domínios

### Foundation

```text
Users
Groups
Locations
Products
Contracts
```

---

### Design

```text
Business Capability
Business Application
Information Object
```

---

### Build

```text
SDLC Component
```

---

### Manage Technical Services

```text
Technical Service
Application Service
Technical Service Offering
```

---

### Sell / Consume

```text
Business Service
Business Service Offering
Service Portfolio
```

---

# Discovery

## Objetivo

Descobrir ativos automaticamente.

---

## Descobre

- Servidores
- Aplicações
- Bancos
- Dispositivos de rede

---

## Atualiza

```text
cmdb_ci
```

---

## Tipo

```text
Horizontal Discovery
```

---

## MID Server

Discovery utiliza:

```text
MID Server
```

---

### Definição

Processo Java executado na rede do cliente.

Pode rodar em:

```text
Windows
Linux
```

---

# Service Mapping

## Objetivo

Descobrir dependências entre componentes que entregam um serviço.

---

## Tipo

```text
Top-Down Discovery
```

---

## Descobre

- Dependências
- Relacionamentos
- Cadeias de serviço

---

## Atualiza

Relacionamentos na CMDB.

---

## Exemplo

```text
Business Service
      ↓
Application
      ↓
Server
      ↓
Database
```

---

# Fluxo Completo da CMDB

```text
Discovery
      ↓
cmdb_ci

Service Mapping
      ↓
cmdb_rel_ci

Dependency View
      ↓
Impact Analysis
```

---

# Resumo para Prova (CSA)

✅ Value é o conteúdo armazenado em um campo.

✅ Field possui Label, Name e Value.

✅ Reference Fields armazenam sys_ids.

✅ sys_id possui 32 caracteres.

✅ GlideList permite múltiplos registros.

✅ Document ID pode referenciar qualquer tabela.

✅ Base Table não estende outra tabela.

✅ Incident estende Task.

✅ ACLs são avaliadas da mais específica para a mais genérica.

✅ ACL de tabela é avaliada antes da ACL de campo.

✅ security_admin é necessário para modificar ACLs.

✅ Import Set Table é uma área temporária.

✅ Transform Maps movem dados para a tabela destino.

✅ Coalesce determina Update ou Insert.

✅ cmdb_ci contém Configuration Items.

✅ cmdb_rel_ci contém relacionamentos.

✅ Dependency View fornece análise de impacto.

✅ CSDM é um framework de modelagem.

✅ Discovery = Horizontal Discovery.

✅ Service Mapping = Top-Down Discovery.

✅ MID Server é utilizado pelo Discovery.

---

# Resumo Executivo

O Módulo 4 apresentou a estrutura de dados da plataforma ServiceNow, abordando tabelas, registros, campos, valores e relacionamentos. Foram estudados mecanismos de herança através de Table Extensions, controle de acesso por ACLs, importação de dados com Import Sets e Transform Maps e o conceito de Coalesce. O módulo aprofundou o uso da CMDB, incluindo Configuration Items, Dependency Views, CI Relationship Editor e CI Class Manager. Por fim, introduziu o CSDM como modelo de referência para organização de serviços e demonstrou como Discovery e Service Mapping trabalham juntos para popular e relacionar dados da CMDB, suportando análise de impacto e governança de serviços.