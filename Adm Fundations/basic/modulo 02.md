# ServiceNow Administration Fundamentals

> Status: ✅ Módulo 2 Concluído
>
> **Marco de Consolidação #2**
>
> Este documento contém apenas o conteúdo estudado após o Marco #1 (Module 1 - Platform Fundamentals).
>
> Em futuras consolidações, considerar este documento como o novo ponto de partida.

---

# Module 2 - Configure Applications for Business

## Baseline Implementation

### Definição

Uma **Baseline Implementation** é o conjunto de aplicações instaladas em uma instância ServiceNow antes que qualquer configuração ou customização tenha sido realizada.

```text
Aplicações Instaladas
        +
Configurações Padrão
        -
Customizações
--------------------
Baseline Implementation
```

### Objetivos

- Servir como referência para o ambiente original
- Facilitar comparações durante upgrades
- Permitir identificação de customizações
- Apoiar governança e manutenção

---

# Instance

## Definição

Uma **Instance** é uma cópia isolada do ambiente ServiceNow específica para um cliente.

Cada instância possui:

- Usuários
- Dados
- Configurações
- Aplicações
- Customizações

próprios.

---

## Tipos de Instância

### Production

Ambiente utilizado pelos usuários finais.

Características:

- Dados reais
- Operação do negócio
- Alta criticidade

Exemplos:

- Incidentes reais
- Aprovações
- Solicitações
- Processos corporativos

---

### Development

Ambiente utilizado para desenvolvimento e configuração.

Atividades comuns:

- Criar tabelas
- Configurar formulários
- Desenvolver aplicações
- Criar integrações
- Desenvolver flows

---

### Test

Ambiente utilizado para validação.

Objetivos:

- Testar configurações
- Testar integrações
- Testar segurança
- Validar funcionalidades

---

## Fluxo de Promoção

```text
Development
      ↓
Test
      ↓
Production
```

---

# Personal Developer Instance (PDI)

## Definição

Instância independente fornecida pela ServiceNow para:

- Aprendizado
- Treinamento
- Desenvolvimento
- Testes
- Laboratórios

---

## Benefícios

- Sem impacto em ambientes corporativos
- Ambiente seguro para experimentação
- Amplamente utilizada em treinamentos ServiceNow

---

# Configuration

## Definição

Configuração é a adaptação da plataforma através de funcionalidades nativas, normalmente sem necessidade de desenvolvimento.

### Características

- Sem código ou pouco código
- Menor complexidade
- Menor impacto em upgrades
- Melhor alinhamento com boas práticas ServiceNow

---

## Exemplos

### Formulários

- Adicionar campos
- Ajustar layouts
- Atualizar categorias

---

### List Views

Configuração de colunas exibidas.

Exemplo:

```text
Number
Short Description
Priority
State
```

---

### Service Catalog

Criação de:

- Catálogos
- Categorias
- Catalog Items

---

### Extensão de Tabelas

Exemplo:

```text
Nova classe derivada de hardware
```

---

# Customization

## Definição

Customização ocorre quando é necessário criar funcionalidades que não existem nativamente na plataforma.

---

## Características

- Frequentemente envolve código
- Maior complexidade
- Maior esforço de manutenção
- Maior risco durante upgrades

---

## Exemplos

### Widget Personalizado

```text
Portal Widget
    ↓
Nova lógica de negócio
    ↓
Controles avançados de acesso
```

---

### Nova Tabela de Negócio

Exemplo:

```text
u_special_billing
```

para requisitos específicos não cobertos pelas aplicações padrão.

---

# Configuration vs Customization

| Configuration | Customization |
|---------------|---------------|
| Utiliza recursos nativos | Cria funcionalidades novas |
| Geralmente sem código | Frequentemente utiliza código |
| Menor impacto em upgrades | Maior impacto em upgrades |
| Mais simples de manter | Mais complexa de manter |
| Abordagem preferida | Utilizar apenas quando necessário |

---

## Princípio da ServiceNow

> Configure First, Customize Only When Necessary

```text
Configuration
      ↓
Customization
```

Sempre verificar primeiro se a necessidade pode ser atendida por configuração.

---

# Personalização da Instância

## Caminho

```text
System Properties
    ↓
My Company
```

---

## Possibilidades

### Logo da Empresa

- Logo institucional
- Identidade visual

---

### Banner

- Cabeçalho da plataforma
- Personalização visual

---

### Browser Tab

Permite diferenciar ambientes.

Exemplo:

```text
DEV - Empresa
TEST - Empresa
PROD - Empresa
```

---

### Contextual App Pill

Indicador visual da aplicação atualmente selecionada.

Benefícios:

- Navegação
- Identificação rápida de contexto

---

# ServiceNow Store

## Definição

Marketplace oficial da ServiceNow.

Permite:

- Instalar aplicações
- Atualizar aplicações
- Expandir funcionalidades

---

## Requisitos

Antes da utilização:

```text
Licença válida
```

---

# Plugins

## Definição

Plugins adicionam funcionalidades à plataforma.

---

## Objetivos

- Habilitar recursos
- Ativar funcionalidades
- Adicionar tabelas
- Adicionar processos

---

## Administração

Plugins podem ser pesquisados por:

- Nome
- ID

---

## Quando não estiver disponível

Pode ser necessário:

```text
Request from ServiceNow
```

---

# Application Scoping

## Definição

Application Scoping controla o acesso entre aplicações.

Objetivo:

- Isolamento
- Segurança
- Governança

---

## Conceito

Cada aplicação possui seu próprio escopo.

```text
Application A
```

não acessa automaticamente:

```text
Application B
```

---

## Compartilhamento

Quando necessário:

```text
Permissão explícita
```

deve ser concedida.

---

## Benefícios

### Segurança

Protege dados da aplicação.

### Isolamento

Reduz dependências.

### Governança

Controla compartilhamento de recursos.

### Manutenção

Facilita evolução independente.

---

# Como Ativar Aplicações e Funcionalidades

Existem três mecanismos citados no curso:

## Plugins

Ativam funcionalidades da plataforma.

---

## ServiceNow Store

Permite instalar aplicações.

---

## Request from ServiceNow

Utilizado para funcionalidades que exigem habilitação pela ServiceNow.

---

# Como Avaliar Aplicações Antes da Compra

## Personal Developer Instance (PDI)

Utilizada para:

- Testes
- Treinamentos
- Avaliação funcional

---

## Ambientes Non-Production

Utilizados para:

- Testes corporativos
- Validação funcional
- Provas de conceito

---

# Resumo para Prova (CSA)

## Memorizar

✅ Baseline Implementation = estado original da instância.

✅ Instance = ambiente ServiceNow específico de um cliente.

✅ Production contém dados reais.

✅ Development é utilizado para construir soluções.

✅ Test é utilizado para validar soluções.

✅ Fluxo padrão:

```text
Development
 ↓
Test
 ↓
Production
```

✅ PDI significa Personal Developer Instance.

✅ Configuration é a abordagem preferida.

✅ Customization deve ser usada apenas quando necessário.

✅ ServiceNow recomenda:

```text
Configure First
Customize Only When Necessary
```

✅ Aplicações são ✅ Aplicações são instaladas pela ServiceNow Store.

✅ Plugins ativam funcionalidades.

✅ Application Scoping controla acesso entre aplicações.

✅ Aplicações não acessam automaticamente recursos de outros escopos.

✅ Compartilhamento entre aplicações exige permissões explícitas.

✅ Personalizações visuais podem ser feitas em:

```text
System Properties > My Company
```

---

# Conceitos-Chave para Quiz

- Baseline Implementation
- Instance
- Production
- Development
- Test
- Personal Developer Instance (PDI)
- Configuration
- Customization
- ServiceNow Store
- Plugins
- Application Scoping
- Browser Tab Customization
- Contextual App Pill
- Configure First, Customize Only When Necessary

---

# Resumo Executivo
