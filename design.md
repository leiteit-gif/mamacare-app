# MamaCare - Design da Interface Móvel

## Visão Geral

O MamaCare é um aplicativo móvel exclusivamente voltado para mulheres no período pós-parto, oferecendo suporte integrado em três pilares: recuperação física, alimentação saudável e bem-estar emocional. O design segue a filosofia de linguagem acolhedora, científica e não punitiva, respeitando os limites físicos e emocionais da mulher no pós-parto.

**Princípios de Design:**
- Orientação: Portrait (9:16) com suporte a uso com uma mão
- Estilo: Alinhado com Apple Human Interface Guidelines (HIG)
- Paleta: Cores quentes, acolhedoras e científicas
- Acessibilidade: Textos claros, ícones intuitivos, feedback visual consistente

---

## Paleta de Cores

| Cor | Valor | Uso |
|-----|-------|-----|
| **Primária (Rosa Suave)** | `#E8A8C8` | Botões principais, destaques, navegação ativa |
| **Secundária (Rosa Escuro)** | `#C97BA3` | Elementos secundários, ênfase |
| **Fundo (Branco Quente)** | `#FFFBF8` | Fundo principal das telas |
| **Superfície (Cinza Claro)** | `#F5F1ED` | Cards, superfícies elevadas |
| **Texto Principal** | `#2D2D2D` | Títulos e textos principais |
| **Texto Secundário** | `#6B6B6B` | Subtítulos e descrições |
| **Sucesso (Verde Suave)** | `#7FD8BE` | Conclusão de exercícios, marcos alcançados |
| **Aviso (Laranja)** | `#F4A460` | Avisos de segurança, limites físicos |
| **Erro (Vermelho Suave)** | `#E8A8A8` | Erros, alertas críticos |

---

## Lista de Telas

### 1. **Home (Tela Principal)**
Visão geral do progresso diário e acesso rápido aos pilares principais.

**Conteúdo:**
- Saudação personalizada ("Olá, [Nome]! Você está no dia X do pós-parto")
- Card de "Fase Atual" (ex: "Semana 1-2: Recuperação Imediata")
- Três cards principais para navegação rápida:
  - **Exercícios**: Contador de exercícios realizados hoje + próximo exercício sugerido
  - **Nutrição**: Calorias consumidas vs. recomendadas + destaque de alimento do dia
  - **Bem-Estar**: Escala de humor atual + entrada rápida para diário
- Gráfico semanal resumido (bem-estar geral)
- Botão flutuante para adicionar entrada rápida ao diário

---

### 2. **Exercícios (Tela de Planos de Exercício)**
Planos de exercício divididos por fases com ilustrações e avisos de segurança.

**Conteúdo:**
- Seletor de fase (Semana 1-2, Semana 3-4, Semana 5-8, Semana 9-12, Pós-12 semanas)
- Lista de exercícios para a fase selecionada, cada um com:
  - Ícone/ilustração do exercício
  - Nome e duração (ex: "Respiração Diafragmática - 5 min")
  - Descrição breve e benefício
  - Aviso de segurança (ex: "Evite se tiver dor abdominal")
  - Botão "Iniciar" ou "Concluído" (com checkbox)
- Contador semanal: "Você completou X de Y exercícios esta semana"
- Gráfico de constância (últimas 4 semanas)

---

### 3. **Detalhe do Exercício**
Tela expandida para um exercício específico.

**Conteúdo:**
- Título e fase recomendada
- Ilustração clara do exercício (ou vídeo curto)
- Instruções passo a passo
- Duração e repetições recomendadas
- Avisos de segurança destacados
- Benefícios fisiológicos explicados
- Botão "Marcar como Realizado" com confirmação
- Opção para adicionar notas pessoais

---

### 4. **Nutrição (Contador de Calorias)**
Rastreamento de alimentação com foco em alimentos recomendados pós-parto.

**Conteúdo:**
- Calorias consumidas hoje vs. recomendadas (ex: 1800/2000 kcal)
- Barra de progresso visual
- Seção "Alimentos Recomendados" com cards destacando:
  - Imagem/ícone do alimento
  - Nome e calorias
  - Benefício específico pós-parto (ex: "Ferro para recuperação de anemia")
  - Botão "+ Adicionar"
- Lista de alimentos consumidos hoje (com opção de remover)
- Botão "Adicionar Alimento" (abre seletor/buscador)
- Resumo nutricional (proteína, ferro, cálcio, ômega-3)

---

### 5. **Detalhe do Alimento**
Tela expandida para informações nutricionais detalhadas.

**Conteúdo:**
- Nome e imagem do alimento
- Calorias e macronutrientes (proteína, carboidrato, gordura)
- Micronutrientes relevantes (ferro, cálcio, ômega-3, vitamina D)
- Benefício específico pós-parto (texto explicativo)
- Sugestões de preparo saudável
- Opção de adicionar ao consumo do dia
- Histórico de consumo (últimas 2 semanas)

---

### 6. **Diário Emocional**
Espaço para registro de sentimentos e percepções diárias.

**Conteúdo:**
- Data e hora do registro
- Campo de texto livre para escrever sentimentos, percepções, dúvidas
- Opção de adicionar tags (ex: #cansaço, #alegria, #ansiedade)
- Botão "Salvar Entrada"
- Lista de entradas anteriores (últimas 2 semanas) com preview
- Opção de editar/deletar entradas

---

### 7. **Escala de Humor**
Acompanhamento visual do humor ao longo do tempo.

**Conteúdo:**
- Escala visual de 5 pontos (emoji ou cores):
  - 😢 Muito triste / Muito mal
  - 😟 Triste / Mal
  - 😐 Neutro / Okay
  - 🙂 Feliz / Bem
  - 😊 Muito feliz / Muito bem
- Descrição opcional do motivo
- Botão "Registrar Humor"
- Gráfico de humor dos últimos 7 dias (linha ou barras)
- Estatísticas (humor médio, dias com melhor/pior humor)

---

### 8. **Gráficos de Progresso**
Visualização consolidada do progresso em três dimensões.

**Conteúdo:**
- **Gráfico 1: Evolução de Peso** (últimas 4 semanas)
  - Gráfico de linha mostrando peso ao longo do tempo
  - Informação: "Você perdeu X kg esta semana"
  - Aviso: "Perda de peso saudável é gradual"

- **Gráfico 2: Constância de Exercícios** (últimas 4 semanas)
  - Gráfico de barras mostrando exercícios completados por semana
  - Informação: "Você completou X% dos exercícios planejados"

- **Gráfico 3: Bem-Estar Emocional** (últimas 4 semanas)
  - Gráfico de linha mostrando humor médio por dia
  - Informação: "Seu bem-estar geral está em tendência [positiva/estável/negativa]"

- Botão para exportar/compartilhar relatório (opcional)

---

## Fluxos de Usuário Principais

### Fluxo 1: Iniciar um Exercício
1. Usuária abre Home
2. Toca em "Exercícios" ou card de exercício sugerido
3. Visualiza lista de exercícios da fase atual
4. Toca em um exercício
5. Vê detalhes, instruções e avisos de segurança
6. Toca "Marcar como Realizado"
7. Confirmação com feedback visual (✓ Exercício concluído!)
8. Volta para Home com contador atualizado

### Fluxo 2: Registrar Alimento
1. Usuária abre Home
2. Toca em "Nutrição"
3. Vê calorias consumidas vs. recomendadas
4. Toca "+ Adicionar Alimento"
5. Busca ou seleciona alimento da lista
6. Confirma adição
7. Calorias e nutrientes são atualizados
8. Volta para Home com progresso atualizado

### Fluxo 3: Registrar Humor e Sentimentos
1. Usuária abre Home
2. Toca em "Bem-Estar" ou botão flutuante do diário
3. Seleciona humor na escala (emoji/cores)
4. Escreve entrada no diário (opcional)
5. Toca "Salvar"
6. Confirmação com feedback visual
7. Volta para Home

### Fluxo 4: Visualizar Progresso
1. Usuária abre Home
2. Toca em "Gráficos" ou card de progresso
3. Visualiza três gráficos (peso, exercícios, bem-estar)
4. Pode tocar em cada gráfico para mais detalhes
5. Volta para Home

---

## Padrões de Interação

### Feedback Visual
- **Sucesso**: Ícone ✓ com cor verde suave, animação sutil de escala
- **Erro**: Ícone ✗ com cor vermelha suave, vibração leve
- **Carregamento**: Spinner com cor primária
- **Desativado**: Opacidade 50%, sem interação

### Navegação
- **Tab Bar Inferior**: Home, Exercícios, Nutrição, Bem-Estar, Perfil
- **Botão Voltar**: Sempre disponível no topo esquerdo
- **Botão Flutuante**: Acesso rápido ao diário emocional

### Tipografia
- **Títulos**: 24-28px, peso bold, cor texto principal
- **Subtítulos**: 16-18px, peso semibold, cor texto principal
- **Corpo**: 14-16px, peso regular, cor texto secundário
- **Labels**: 12-14px, peso medium, cor texto secundário

---

## Considerações de Acessibilidade

- Contraste mínimo 4.5:1 para texto principal
- Ícones acompanhados de labels de texto
- Tamanho mínimo de toque: 44x44pt
- Suporte a dark mode (cores adaptadas automaticamente)
- Leitura em voz alta compatível com VoiceOver (iOS) e TalkBack (Android)

---

## Próximas Etapas

1. Implementar navegação com Expo Router (5 abas principais)
2. Criar componentes reutilizáveis (Card, Button, Input, Graph)
3. Desenvolver telas de Home, Exercícios, Nutrição
4. Implementar Diário Emocional e Escala de Humor
5. Adicionar gráficos de progresso
6. Integrar persistência de dados com AsyncStorage
7. Testes de usabilidade com mulheres no pós-parto
