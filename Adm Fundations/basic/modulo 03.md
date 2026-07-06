# ServiceNow Administration Fundamentals

> Status: ✅ Módulo 3 Concluído
>
> **Marco de Consolidação #3**
>
> Este documento contém apenas o conteúdo estudado após o Marco #2 (Module 2).
>
> Em futuras consolidações, considerar este documento como o novo ponto de partida.

---

# Module 3 – Configure Applications for Business

## Objetivos do Módulo

O administrador deve ser capaz de:

- Trabalhar com Lists
- Trabalhar com Forms
- Configurar Views
- Utilizar Filters
- Utilizar Dot-Walking
- Configurar Form Layouts
- Trabalhar com Choice Fields
- Trabalhar com Reference Fields
- Utilizar Templates
- Configurar Related Lists

---

# Database, Tables, Records e Fields

## Estrutura Fundamental

```text
Database
   ↓
Table
   ↓
Record
   ↓
Field
```

---

## Database

Repositório que armazena os dados da plataforma.

Contém:

- Tabelas
- Registros
- Campos
- Relacionamentos

---

## Table

Estrutura que agrupa registros semelhantes.

### Exemplos

```text
incident
sys_user
task
change_request
```

---

## Record

Representa uma linha da tabela.

Exemplo:

```text
INC0010002
```

---

## Field

Representa uma coluna da tabela.

Exemplos:

```text
Number
Priority
Caller
State
Category
```

---

# Lists

## Conceito

Uma List apresenta múltiplos registros de uma tabela.

Exemplo:

```text
Incident List
```

---

## Conceitos-chave

```text
Row = Record
Column = Field
```

---

## Recursos das Lists

- Filtering
- Sorting
- Grouping
- Exportação
- Relatórios
- Personalização

---

# Views

## Definição

Views permitem apresentar Lists e Forms de maneiras diferentes.

---

## O que muda

✅ Ordem dos campos

✅ Campos exibidos

✅ Layout

✅ Organização

---

## O que não muda

✅ Dados

✅ Registros

✅ Conteúdo armazenado

---

## Exemplos

```text
Default View
Mobile View
Admin View
Self-Service View
```

---

# Filters

## Estrutura

Todo filtro possui:

```text
Field
Operator
Value
```

---

## Exemplo

```text
Priority is 1
```

```text
Field = Priority
Operator = is
Value = 1
```

---

## Funcionalidades

- Criar filtros
- Executar filtros
- Editar filtros
- Salvar filtros

---

# List Context Menus

## List Context Menu

Permite:

- Configurar listas
- Gerenciar colunas
- Executar ações sobre registros

---

## Column Context Menu

Permite:

- Filtrar
- Ordenar
- Exportar
- Criar relatórios

---

## Field Context Menu

Permite:

- Filtrar valores
- Aplicar tags

---

# Configure List Layout vs Personalize List

## Configure List Layout

Afeta todos os usuários.

Características:

- Configuração global
- Administrativa
- Define padrão da plataforma

---

## Personalize List

Afeta apenas o usuário atual.

Permite:

- Adicionar colunas
- Remover colunas
- Reorganizar colunas
- Restaurar padrão

---

## Comparação

| Configure List Layout | Personalize List |
|----------------------|------------------|
| Global | Individual |
| Todos os usuários | Usuário atual |
| Define padrão | Preferência pessoal |

---

## Reset

Retorno ao padrão:

```text
Reset to Column Defaults
```

---

# Tags

Permitem marcar registros para organização pessoal.

## Módulos

```text
My Tags
```

Gerencia tags.

```text
My Tagged Documents
```

Consulta registros marcados.

---

## Workspace

Ícone preenchido:

```text
Tag existente
```

Ícone vazio:

```text
Sem tag
```

---

# Applications e Modules

## Application

Agrupamento lógico de funcionalidades.

Exemplo:

```text
Self-Service
```

---

## Module

Opção de navegação dentro da aplicação.

Exemplo:

```text
My Incidents
My Requests
Knowledge
```

---

## Relação

```text
Application
    └── Modules
```

---

# List Categories

## Objetivo

Organizar registros através de filtros.

---

## Exemplo

```text
Critical Incidents
```

Filtro:

```text
Priority = 1
```

---

# Dot-Walking

## Definição

Permite acessar campos de registros relacionados através de campos Reference.

---

## Exemplo

```text
Caller
```

referencia:

```text
sys_user
```

---

## Dot-Walking

```text
Caller.Email
Caller.Manager
Caller.Department
```

---

## Utilização

- Lists
- Forms
- Form Builder
- Analytics
- Workflow Studio

---

# Forms

## Conceito

Forms exibem um único registro.

---

## List x Form

### List

```text
Múltiplos registros
```

### Form

```text
Um único registro
```

---

## Acesso

- Lists
- Search
- Links diretos

---

# Componentes de um Form

## Fields

Armazenam dados.

---

## Sections

Agrupam informações relacionadas.

---

## Formatters

Exibem informações que não são campos.

---

## UI Actions

Botões disponíveis no formulário.

Exemplos:

```text
Save
Update
Delete
Resolve
Close
```

---

## Related Lists

Mostram registros associados.

---

# Formatters

## Definição

Elementos visuais que exibem informações que não são campos da tabela.

---

## Exemplos

- Activity
- Process
- Parent Breadcrumbs
- Approval Summarizer
- CI Relations

---

## Activity Stream

### Muito importante para prova

```text
Activity Stream = Formatter
```

Não é um campo.

---

# Form Views

Assim como listas, formulários podem possuir múltiplas views.

## Exemplos

```text
Default View
HR View
Mobile View
Major Incident View
```

---

## Alterações

Mudam:

- Layout
- Campos
- Organização

Não mudam:

- Dados
- Registro

---

# Field Types

A plataforma possui mais de 30 tipos de campos.

---

## String

Texto simples.

Exemplo:

```text
Short Description
```

---

## Date/Time

Armazena data e hora.

---

## Choice

Lista de opções pré-definidas.

Exemplo:

```text
State
Category
Priority
```

---

## Reference

Aponta para outra tabela.

Exemplos:

```text
Caller
Assignment Group
Configuration Item
Service
```

---

## True/False

Campo booleano.

Representado por:

```text
Checkbox
```

---

# Choice Fields

## Como identificar

```text
▼
```

Dropdown.

---

## Características

- Valores pré-definidos
- Valores da própria tabela
- Administrados por Choice List

---

## Administração

```text
Right Click Field
    ↓
Show Choice List
```

---

## Utilização

- Categories
- Subcategories
- States
- Priorities

---

# Dependent Fields

Limitam os valores disponíveis de outro campo.

---

## Exemplo

```text
Category
    ↓
Subcategory
```

Hardware:

```text
Laptop
Desktop
Monitor
```

Software:

```text
Application
Database
Middleware
```

---

# Reference Fields

## Como identificar

```text
🔍
```

Lupa.

---

## Características

- Utilizam registros de outra tabela
- Permitem reutilização de dados
- Criam relacionamentos

---

## Exemplos

| Campo | Referência |
|---------|---------|
| Caller | sys_user |
| Assignment Group | sys_user_group |
| Configuration Item | cmdb_ci |

---

# Choice vs Reference

| Choice | Reference |
|----------|----------|
| Lista fixa | Lista dinâmica |
| Mesma tabela | Outra tabela |
| Dropdown | Lupa |
| Valor pré-definido | Registro relacionado |

---

# Form Builder

## Principal ferramenta de configuração

Permite:

- Adicionar campos
- Remover campos
- Reorganizar campos
- Configurar layout
- Adicionar campos relacionados

---

## Configurações adicionais

- UI Policies
- Access Controls
- Client Scripts
- Business Rules
- Workspace Rules

---

# Criação de Novos Campos

## Caminho

```text
System Definition
    ↓
Tables
    ↓
Columns
    ↓
New
```

---

## Processo

1. Criar Dictionary Entry
2. Configurar campo
3. Adicionar ao Form Builder

---

# Related Lists

## Conceito

Exibem registros relacionados ao registro atual.

---

## Exemplos

```text
Approvals
Tasks
Attachments
Changes
```

---

## Administração

Podem ser:

- Adicionadas
- Removidas
- Reordenadas

---

# Personalize Form

Permite personalização individual do formulário.

---

## Funcionalidades

- Mostrar campos
- Ocultar campos
- Ajustar exibição

---

## Restrição

```text
Mandatory Fields
```

não podem ser ocultados.

---

## Persistência

A personalização permanece após logout/login.

---

# Templates

## Definição

Preenchem automaticamente valores em novos registros.

---

## Exemplo

Template:

```text
Incident - Hardware
```

Preenche:

```text
Category
Priority
Assignment Group
```

---

## Benefícios

- Padronização
- Rapidez
- Redução de erros

---

# Governança de Templates

## Recomendações

- Utilizar em formulários recorrentes
- Controlar criação por grupos autorizados
- Evitar excesso de templates

---

## Observações

✅ Não existe limite técnico.

⚠️ Muitos templates dificultam manutenção.

⚠️ Templates podem impactar processos e políticas.

---

## Exclusão

```text
Templates excluídos não podem ser recuperados.
```

---

## Compartilhamento

Pode ser realizado entre grupos.

---

# Core Forms vs Workspace Forms

## Mesmo conceito

Possuem:

- Fields
- Sections
- Formatters
- Related Lists
- Activity Stream

---

## Diferenças

### Core Platform

Layout tradicional.

### Workspace

- Formulário na aba Details
- Sections expansíveis
- Activity Stream em painel próprio

---

# Boas Práticas para CSA

✅ Row = Record

✅ Column = Field

✅ Lists exibem múltiplos registros.

✅ Forms exibem um registro.

✅ Views alteram apresentação, não dados.

✅ Activity Stream é Formatter.

✅ Form Builder é a principal ferramenta de configuração.

✅ Choice Field = Dropdown.

✅ Reference Field = Magnifying Glass.

✅ True/False = Checkbox.

✅ Dependent Field limita valores disponíveis.

✅ Mandatory Fields não podem ser ocultados.

✅ Templates padronizam registros.

✅ Dot-Walking acessa campos relacionados.

✅ Configure List Layout é global.

✅ Personalize List é individual.

---

# Resumo Executivo

O Módulo 3 apresentou os principais mecanismos de interação com dados na ServiceNow: **Lists**, **Forms**, **Views** e **Filters**. Foram explorados os conceitos de **Database → Table → Record → Field**, configuração de listas e formulários, uso de **Dot-Walking**, **Related Lists**, **Formatters** e **Templates**. O módulo também detalhou a diferença entre **Choice Fields** e **Reference Fields**, a utilização de campos dependentes e as diferenças entre a experiência da plataforma tradicional e dos Workspaces. Esses conceitos formam a base da 