# Guia Otimizado de Estudo para CSA ServiceNow

## Objetivo
Este material foi organizado para revisão rápida e alta retenção. A ideia é priorizar os pontos que mais costumam aparecer na prova CSA.

---

# 1. O que você precisa saber para a prova

## Prioridade máxima
- Como a ServiceNow é organizada
- Como os dados são armazenados
- Como acesso e segurança funcionam
- Como usuários solicitam serviços
- Como automação e regras funcionam
- Como alterações são transportadas entre ambientes
- Como a segurança é tratada na plataforma

---

# 2. Conceitos centrais que mais caem

## A plataforma ServiceNow
A ServiceNow é uma plataforma de automação e transformação digital baseada em nuvem.

### Ideias-chave
- Single Platform
- One Data Model
- One Architecture
- Low Code
- Automation
- AI & ML

---

## Estrutura de dados
Tudo na ServiceNow gira em torno de dados.

```text
Database → Table → Record → Field → Value
```

### Memorize
- Table = estrutura de armazenamento
- Record = linha
- Field = coluna
- Value = conteúdo

### Exemplos de tabelas
- incident
- task
- sys_user
- cmdb_ci

---

## Usuários, grupos e roles

### User
Representa uma pessoa.

### Group
Agrupa usuários.

### Role
Define permissões.

### Regra de ouro
```text
User → Group → Role → Permissions → ACL
```

### O que a prova gosta de cobrar
- Roles controlam acesso
- Groups ajudam na organização e atribuição
- ACLs protegem dados

---

# 3. RBAC e ACLs

## RBAC
O controle de acesso é baseado em roles.

## ACL
Define quem pode ler, gravar, atualizar ou excluir dados.

### Diferença rápida
- Role = permissão de função
- ACL = regra de acesso ao dado

### Memorização
```text
Role define o que a pessoa pode fazer.
ACL define se pode acessar determinado registro ou campo.
```

---

# 4. Instâncias ServiceNow

## Tipos principais
- Development
- Test
- Production

## PDI
Personal Developer Instance, usada para aprendizado e testes.

## Fluxo comum
```text
Development → Test → Production
```

### Regras de prova
- Production tem dados reais
- Development é para criar e testar
- Test é para validação

---

# 5. Configuration vs Customization

## Configuration
Usa recursos nativos da plataforma.

### Características
- Menor impacto em upgrades
- Menos complexidade
- Menos código

## Customization
Cria algo novo ou diferente do padrão.

### Características
- Mais complexidade
- Mais risco em upgrades
- Mais manutenção

### Resposta rápida para prova
- Configuração = adaptar sem reinventar
- Customização = criar algo novo

---

# 6. Dados e relacionamentos

## Reference Field
Relaciona uma tabela com outra.

Exemplo:
```text
Incident → Caller → sys_user
```

## Tipos de relacionamento
- One-to-many
- Many-to-many

## Import Set e Transform Map
Fluxo típico:
```text
Data Source → Import Set → Transform Map → Target Table
```

## CMDB
Armazena Configuration Items e relações entre eles.

## CSDM
Modelo comum de dados para serviços.

---

# 7. Lists, Forms, Views e Filters

## List
Mostra vários registros.

## Form
Mostra um registro em detalhe.

## View
Altera a apresentação sem mudar o dado.

## Filter
Busca registros com base em campo, operador e valor.

### Estrutura do filtro
```text
Field + Operator + Value
```

## Dot-Walking
Permite navegar entre tabelas relacionadas.

### Exemplo de memorização
```text
List = vários registros
Form = um registro detalhado
View = visualização
Filter = busca
```

---

# 8. Self-Service e Portais

## Portais principais
- Employee Center = /esc
- Service Portal = /sp
- Knowledge Portal = /kb

## O que cada um faz
- Employee Center: portal principal para colaboradores
- Service Portal: autoatendimento tradicional
- Knowledge Portal: busca e leitura de conhecimento

### Memorização rápida
```text
/esc = Employee Center
/sp = Service Portal
/kb = Knowledge Portal
```

---

# 9. Knowledge Management

## Knowledge Base
Repositório de artigos.

## Artigos podem conter
- tutoriais
- FAQs
- procedimentos
- soluções

## Workflow do artigo
```text
Draft → Approval → Published → Retired
```

## User Criteria
Controlam acesso ao conteúdo.

### Tipos principais
- Can Read
- Can't Read
- Can Contribute
- Can't Contribute

### Pegadinha clássica
Se não houver “Can Read”, o conteúdo pode ficar acessível para todos.

---

# 10. Service Catalog

## Conceito principal
```text
One-Stop Shopping
```

## Estrutura de solicitação
```text
REQ → RITM → SCTASK
```

### O que cada um representa
- REQ = pedido completo
- RITM = item solicitado
- SCTASK = tarefa de atendimento

## Componentes principais
- Catalog Item
- Variables
- Variable Sets
- Record Producers
- Order Guides

### Frase de memorização
```text
Catalog = pedir serviços de forma centralizada
```

---

# 11. Automação e produtividade

## Notifications
Enviam mensagens quando eventos acontecem.

### Estrutura
- When to Send
- Who Will Receive
- What It Will Contain

### Gatilhos comuns
- Record Created
- Record Updated
- Event Fired
- Script

### Observações importantes
- Usuário inativo não recebe notificação
- Notification não substitui ACL

## Visualization Designer
Cria gráficos e visualizações.

## Predictive Intelligence
Ajuda com categorização, atribuição e priorização.

---

# 12. Scripting: o que é o que?

## Diferença principal
```text
Client Side = navegador / interface
Server Side = servidor / banco de dados
```

## Resumo rápido
| Recurso | Onde executa | Uso principal |
|---|---|---|
| UI Policy | Cliente | Alterar aparência e comportamento visual |
| Data Policy | Servidor / dados | Garantir integridade dos dados |
| Client Script | Cliente | JavaScript no formulário |
| Business Rule | Servidor | Lógica de negócio |
| UI Action | Interface | Botões e ações |
| Script Include | Servidor | Código reutilizável |

### Regras de prova
- UI Policy = interface
- Data Policy = dados
- Client Script = formulário no navegador
- Business Rule = servidor

---

# 13. Alterações e transporte

## Update Sets
Agrupam alterações para serem movidas entre instâncias.

## ATF
Automated Test Framework, usado para testes automatizados.

## Application Scope
Isola aplicações e artefatos.

## App Engine Studio
Ferramenta para criar aplicações com baixo código.

### Frase de memorização
```text
Update Set = transporte de mudanças
```

---

# 14. Segurança da instância

## Shared Responsibility Model
A segurança é dividida entre ServiceNow e o cliente.

### ServiceNow é responsável por
- infraestrutura
- disponibilidade
- segurança da plataforma base
- patches

### Cliente é responsável por
- dados
- governança
- controle de acesso
- políticas internas
- confidencialidade

## Encryption
- At Rest = dados armazenados
- In Transit = dados trafegando

### Tecnologia comum
- TLS

## Logging
- Infrastructure Logs = infraestrutura
- Application Logs = atividades da instância do cliente

### Regras de prova
- Cliente vê Application Logs
- ServiceNow cuida da infraestrutura

---

# 15. Pontos mais fáceis de esquecer e que valem muito

## Memorize estas frases
- `sys_id` = identificador único do registro
- `INC0010001` = número do incidente, não é a chave primária
- `/esc` = Employee Center
- `/sp` = Service Portal
- `/kb` = Knowledge Portal
- `REQ → RITM → SCTASK`
- `Data Source → Import Set → Transform Map → Target Table`
- `User → Group → Role → ACL`

---

# 16. Perguntas clássicas da prova

## Se a questão falar sobre acesso
Pense em:
- Role
- ACL
- User Criteria

## Se a questão falar sobre interface
Pense em:
- UI Policy
- Client Script
- UI Action

## Se a questão falar sobre dados
Pense em:
- Data Policy
- Business Rule
- Transform Map

## Se a questão falar sobre autoatendimento
Pense em:
- Service Catalog
- Knowledge Base
- Portais

## Se a questão falar sobre transporte de mudanças
Pense em:
- Update Set

---

# 17. Checklist final de revisão

## Antes da prova, confirme que você sabe:
- [ ] diferenciar table, record, field e value
- [ ] explicar o papel de user, group e role
- [ ] entender RBAC e ACL
- [ ] diferenciar configuration e customization
- [ ] saber o fluxo REQ/RITM/SCTASK
- [ ] lembrar os portais /esc, /sp e /kb
- [ ] saber a diferença entre UI Policy e Data Policy
- [ ] entender o papel de Notification
- [ ] lembrar o conceito de Update Set
- [ ] conhecer a diferença entre Encryption At Rest e In Transit
- [ ] entender Shared Responsibility Model

---

# 18. Estratégia de revisão mais eficiente

## Método 3 etapas
1. Leia o resumo de cada tópico uma vez
2. Repetir em voz alta as definições principais
3. Responder mentalmente perguntas tipo prova

## Regra de ouro
Se você consegue explicar o conceito com suas próprias palavras, você provavelmente está pronto.
