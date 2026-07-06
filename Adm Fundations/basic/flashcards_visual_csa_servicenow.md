# Flashcards Visuais - CSA ServiceNow

## Como usar
- Este formato mistura conceitos principais com estrutura visual.
- Leia o bloco e tente reconstruir o raciocínio mentalmente.
- Use isso como um mapa mental de revisão rápida.

---

## 1. Estrutura da plataforma

```mermaid
flowchart TD
    A[ServiceNow] --> B[Table]
    A --> C[Record]
    A --> D[Field]
    A --> E[Value]
```

### Resumo
- Table = estrutura
- Record = linha
- Field = coluna
- Value = conteúdo

---

## 2. Hierarquia de acesso

```mermaid
flowchart TD
    U[User] --> G[Group]
    G --> R[Role]
    R --> P[Permissions]
    P --> A[ACL]
```

### Resumo
- User acessa a plataforma
- Group organiza usuários
- Role define permissões
- ACL controla o acesso aos dados

---

## 3. Ambientes

```mermaid
flowchart LR
    D[Development] --> T[Test]
    T --> P[Production]
```

### Resumo
- Development: criar e configurar
- Test: validar
- Production: ambiente real

---

## 4. Dados e relacionamento

```mermaid
flowchart TD
    I[Incident] --> C[Caller]
    C --> U[User]
```

### Resumo
- Reference Field liga uma tabela a outra
- Exemplo: incidente aponta para usuário

---

## 5. Fluxo de importação de dados

```mermaid
flowchart LR
    DS[Data Source] --> IS[Import Set]
    IS --> TM[Transform Map]
    TM --> TT[Target Table]
```

### Resumo
- Importação segue esse fluxo lógico

---

## 6. Portais principais

```mermaid
flowchart TD
    P[Portais] --> EC[Employee Center /esc]
    P --> SP[Service Portal /sp]
    P --> KP[Knowledge Portal /kb]
```

### Resumo
- /esc: portal principal
- /sp: portal de autoatendimento
- /kb: portal de conhecimento

---

## 7. Service Catalog

```mermaid
flowchart TD
    SC[Service Catalog] --> REQ[REQ]
    REQ --> RITM[RITM]
    RITM --> SCTASK[SCTASK]
```

### Resumo
- REQ = pedido completo
- RITM = item solicitado
- SCTASK = tarefa de atendimento

---

## 8. Knowledge Management

```mermaid
flowchart TD
    KB[Knowledge Base] --> A[Artigos]
    A --> W[Draft]
    W --> AP[Approval]
    AP --> PB[Published]
    PB --> RT[Retired]
```

### Resumo
- Conteúdo é organizado em Knowledge Bases
- Artigos seguem um ciclo de vida

---

## 9. Automação e notificações

```mermaid
flowchart TD
    E[Evento] --> N[Notification]
    N --> R[Quem recebe]
    N --> C[Conteúdo]
```

### Resumo
- Notification envia mensagens automáticas
- Pode ser acionada por evento, atualização ou criação

---

## 10. Scripting e lógica

```mermaid
flowchart TD
    S[Scripts] --> UI[UI Policy]
    S --> DP[Data Policy]
    S --> CS[Client Script]
    S --> BR[Business Rule]
```

### Resumo
- UI Policy = interface
- Data Policy = dados
- Client Script = navegador
- Business Rule = servidor

---

## 11. Segurança

```mermaid
flowchart TD
    SN[ServiceNow] --> INF[Infraestrutura]
    C[Cliente] --> D[Dados]
    C --> A[Controle de acesso]
```

### Resumo
- ServiceNow cuida da plataforma
- Cliente cuida dos dados e da governança

---

## 12. Transporte de alterações

```mermaid
flowchart LR
    U[Update Set] --> I1[Development]
    I1 --> I2[Test]
    I2 --> I3[Production]
```

### Resumo
- Update Set agrupa mudanças para mover entre ambientes
