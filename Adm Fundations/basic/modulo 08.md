# Module 8 – Secure a ServiceNow Instance
## Apostila de Revisão para CSA

> Objetivo do módulo:
>
> Aprender como a ServiceNow protege a plataforma, quais responsabilidades pertencem ao cliente e como utilizar o Security Center para monitorar e melhorar a postura de segurança da instância.

---

# 1. Shared Responsibility Model

## O que é?

O Shared Responsibility Model define como as responsabilidades de segurança são divididas entre:

```text
ServiceNow
Cliente
Provedores de Infraestrutura
```

Nem toda a segurança é responsabilidade da ServiceNow.

O cliente também possui responsabilidades importantes.

---

## Responsabilidades da ServiceNow

A ServiceNow é responsável por:

- Operação da plataforma
- Infraestrutura
- Disponibilidade do serviço
- Segurança da plataforma base
- Aplicação de patches da plataforma

---

## Responsabilidades do Cliente

O cliente é responsável por:

- Dados armazenados
- Compartilhamento de informações
- Retenção dos dados
- Políticas internas
- Controle de acesso dos usuários
- Governança dos dados
- Confidencialidade

---

## O que o CSA costuma cobrar?

Quando a questão mencionar:

```text
Quem controla os dados?
```

ou

```text
Quem decide como os dados serão usados?
```

Resposta:

✅ Cliente

---

## Pegadinha

Muitos alunos assumem que a ServiceNow é responsável por tudo.

Isso está errado.

A ServiceNow protege a plataforma.

O cliente protege seus dados.

---

# 2. Encryption

## O que é?

Mecanismo utilizado para proteger informações contra acesso indevido.

O curso apresenta duas formas principais.

---

# Encryption At Rest

## O que protege?

Dados armazenados.

Exemplos:

- Banco de Dados
- Disco
- Storage

---

## Exemplos de tecnologias

- Column Encryption
- Full Volume Encryption

---

# Encryption In Transit

## O que protege?

Dados durante transmissão.

Exemplos:

```text
Usuário → ServiceNow

ServiceNow → Integração

Email → Plataforma
```

---

## Tecnologia Utilizada

✅ TLS

---

## Questão Típica

### Como a ServiceNow protege dados em trânsito?

✅ TLS

---

## Pegadinha

```text
At Rest
↓
Dados Parados

In Transit
↓
Dados Trafegando
```

---

# 3. Key Management Framework

## O que é?

Framework utilizado para gerenciamento de chaves criptográficas.

---

## Para que serve?

Permite:

- Criar chaves
- Gerenciar chaves
- Rotacionar chaves
- Controlar operações criptográficas

---

## Responsabilidade do Cliente

O cliente deve:

- Controlar acesso às chaves
- Garantir segregação de funções
- Realizar auditorias

---

## O que memorizar?

```text
Key Management Framework
↓
Gerenciamento de Chaves
```

---

# 4. Logging

## O que é?

Registro das atividades executadas na plataforma.

O curso divide logs em dois grupos.

---

# Infrastructure Logs

## O que registram?

Atividades da infraestrutura.

Exemplos:

- Rede
- Servidores
- Equipamentos

---

## Quem acessa?

✅ Equipes da ServiceNow

❌ Cliente

---

## Objetivo

Detectar:

- Problemas operacionais
- Eventos suspeitos
- Comportamentos anormais

---

# Application Logs

## O que registram?

Atividades da instância do cliente.

Exemplos:

- Transações
- Processos
- Operações executadas

---

## Quem acessa?

✅ Cliente

✅ Administradores

---

## O que o CSA gosta de perguntar?

### Qual log o cliente pode visualizar?

✅ Application Logs

---

### Qual log o cliente NÃO pode visualizar?

✅ Infrastructure Logs

---

# 5. Security Contacts

## O que são?

Contatos cadastrados para receber comunicações de segurança da ServiceNow.

---

## O que recebem?

- Alertas
- Vulnerabilidades
- Avisos importantes
- Incidentes de segurança

---

## Boa Prática

Cadastrar:

### Lista de distribuição

Exemplo:

```text
security@empresa.com
```

e também

### Pessoa responsável

Exemplo:

```text
joao.silva@empresa.com
```

---

## Por que é importante?

Em um incidente:

```text
ServiceNow
↓
Security Contact
↓
Empresa
```

A comunicação precisa chegar rapidamente.

---

## Pegadinha

Security Contacts não são:

❌ Help Desk

❌ Suporte Funcional

✅ Contatos de Segurança

---

# 6. Security Center

## O que é?

Ferramenta nativa da ServiceNow para gerenciamento da postura de segurança da instância.

---

## Objetivo

Ajudar administradores a:

- Monitorar riscos
- Melhorar segurança
- Melhorar compliance
- Aplicar boas práticas

---

## Quem pode acessar?

Segundo o treinamento:

✅ Admin

✅ Security Center Viewer

---

# Estrutura do Security Center

```text
Overview

Hardening

Scanner

Customer Actions

Best Practices

Notifications

Learning

Metrics
```

---

# 7. Overview

## O que é?

Painel principal do Security Center.

---

## O que mostra?

- Resumos
- Tendências
- Gráficos
- Resultados de análises

---

## Quando usar?

Quando o administrador deseja uma visão geral da situação de segurança.

---

# 8. Hardening

## O que é?

Área responsável por avaliar o nível de aderência às recomendações de segurança da ServiceNow.

---

## Hardening Score

Representa:

```text
Nível de Endurecimento
da Segurança
```

---

## Quanto maior o score

Maior aderência às práticas recomendadas.

---

## O que o CSA cobra?

### Onde visualizar o Hardening Score?

✅ Hardening

---

# 9. Compliance Score

## O que é?

Mede o nível de conformidade das configurações da instância.

---

## Como funciona?

Cada configuração possui:

```text
Impact Score
```

que contribui para o resultado final.

---

## Importante

Não existe:

```text
Compliance Score Universal
```

Cada empresa define seus objetivos.

---

## Pegadinha

### Compliance Score

Conformidade

---

### Hardening Score

Segurança

---

# 10. Scanner

## O que é?

Ferramenta que analisa a instância em busca de problemas de segurança.

---

## O que procura?

- Configurações inseguras
- Excessos de permissão
- Configurações incorretas

---

## Resultado

Após uma análise são gerados:

```text
Scan Findings
```

---

## O que o Knowledge Check cobrou?

O Scanner apresenta:

✅ Comparação das Security Suites configuradas.

---

## Pegadinha

Scanner:

✅ Identifica problemas

❌ Corrige problemas

---

# 11. Customer Actions

## O que é?

Lista de ações recomendadas para correção.

---

## O que exibe?

- Problemas encontrados
- Quantidade de pendências
- Próximos passos

---

## Objetivo

Orientar a correção das vulnerabilidades identificadas.

---

# 12. Best Practices

## O que é?

Área responsável por orientar a implementação das recomendações de segurança.

---

## O que mostra?

- Configurações concluídas
- Configurações pendentes
- Progresso
- Passo a passo

---

## Pense como

```text
Checklist de Segurança
```

---

# 13. Notifications

## O que é?

Sistema de alertas do Security Center.

---

## Permite configurar

- Eventos
- Limites
- Destinatários
- Ações automáticas

---

## Objetivo

Informar rapidamente quando um risco for detectado.

---

# 14. Learning

## O que é?

Repositório de conhecimento sobre segurança.

---

## Conteúdo disponível

- White Papers
- eBooks
- Artigos
- Documentação
- Comunidades

---

## Objetivo

Capacitação dos administradores.

---

# 15. Metrics

## O que é?

Ferramenta de monitoramento de indicadores de segurança.

---

## Para que serve?

Permite:

- Medir riscos
- Detectar comportamentos suspeitos
- Identificar tendências
- Criar dashboards

---

## O que o Knowledge Check cobrou?

### Qual ferramenta monitora ameaças e comportamentos inseguros?

✅ Metrics

---

# 16. Priorização de Correções

## Ordem recomendada

```text
Critical
↓
High
↓
Medium
↓
Low
```

---

## Motivo

Os itens Critical e High normalmente representam os maiores riscos.

---

## Questão Típica

### O que deve ser corrigido primeiro?

✅ Critical

✅ High

---

# Resumo das Ferramentas do Security Center

| Ferramenta | Objetivo |
|------------|-----------|
| Overview | Visão geral |
| Hardening | Security Score |
| Compliance | Conformidade |
| Scanner | Encontrar problemas |
| Customer Actions | Corrigir problemas |
| Best Practices | Checklist |
| Notifications | Alertas |
| Learning | Conteúdo |
| Metrics | Monitorar riscos |

---

# Questões de Alta Probabilidade (CSA)

### Quem é responsável pelos dados?

✅ Cliente

---

### Qual tecnologia protege dados em trânsito?

✅ TLS

---

### Qual log o cliente pode acessar?

✅ Application Log

---

### Qual log o cliente não pode acessar?

✅ Infrastructure Log

---

### Qual ferramenta monitora riscos?

✅ Metrics

---

### Qual ferramenta encontra problemas de segurança?

✅ Scanner

---

### Onde fica o Hardening Score?

✅ Hardening

---

### O que mede o Compliance Score?

✅ Conformidade

---

### Quem recebe alertas de segurança?

✅ Security Contacts

---

### O que deve ser corrigido primeiro?

✅ Critical

✅ High

---

# Decore para a Prova

```text
Shared Responsibility Model
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
Cliente não acessa

Application Logs
↓
Cliente acessa

Security Contacts
↓
Recebem alertas

Security Center
↓
Ferramenta principal de segurança

Hardening
↓
Security Score

Compliance
↓
Conformidade

Scanner
↓
Encontra problemas

Metrics
↓
Monitora riscos

Critical e High
↓
Corrigir primeiro
```