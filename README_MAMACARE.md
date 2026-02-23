# MamaCare - Aplicativo de Recuperação Pós-Parto

## 📱 Visão Geral

MamaCare é um aplicativo móvel exclusivamente voltado para mulheres no período pós-parto, oferecendo suporte integrado em três pilares: **recuperação física**, **alimentação saudável** e **bem-estar emocional**. O aplicativo utiliza uma linguagem acolhedora, científica e não punitiva, respeitando os limites físicos e emocionais da mulher no pós-parto.

## ✨ Características Principais

### 1. **Exercícios Pós-Parto** 💪
- Planos de exercício divididos por **5 fases de recuperação**:
  - Semana 1-2: Recuperação Imediata
  - Semana 3-4: Transição
  - Semana 5-8: Fortalecimento
  - Semana 9-12: Intensidade Moderada
  - Pós-12 semanas: Manutenção e Progressão

- **12 exercícios** com instruções detalhadas
- Avisos de segurança para cada exercício
- Contador de exercícios realizados
- Progresso semanal visualizado

### 2. **Nutrição Saudável** 🥗
- **24 alimentos recomendados** para recuperação pós-parto
- Alimentos destacados com benefícios específicos:
  - Ferro para recuperação de anemia
  - Cálcio para saúde óssea
  - Ômega-3 para saúde cerebral
  - Vitamina D para imunidade

- Contador de calorias diárias (meta: 1800 kcal)
- Rastreamento de macronutrientes (proteína, carboidratos, gordura)
- Banco de dados de alimentos com informações nutricionais

### 3. **Bem-Estar Emocional** 💝
- **Escala de Humor**: Registre seu humor em 5 níveis com emojis
  - 😢 Muito Triste
  - 😟 Triste
  - 😐 Neutro
  - 🙂 Feliz
  - 😊 Muito Feliz

- **Diário Pessoal**: Escreva livremente seus sentimentos, percepções e dúvidas
- Visualize entradas recentes do diário
- Acompanhamento contínuo do bem-estar

### 4. **Gráficos e Progresso** 📊
- Visualize sua evolução nas **últimas 4 semanas**:
  - Gráfico de exercícios completados por semana
  - Gráfico de bem-estar médio por semana
  - Gráfico de evolução de peso

- Estatísticas consolidadas:
  - Total de exercícios realizados
  - Bem-estar médio
  - Peso atual

### 5. **Perfil Pessoal** 👤
- Configure suas informações básicas:
  - Nome
  - Data de nascimento
  - Data do parto
  - Tipo de parto (vaginal ou cesariana)

- Defina suas metas:
  - Calorias diárias recomendadas
  - Peso alvo
  - Peso atual

- Acompanhamento automático:
  - Dias de pós-parto
  - Semana de recuperação

## 🎨 Design e Usabilidade

### Paleta de Cores
- **Primária (Rosa Suave)**: #E8A8C8 - Botões e destaques
- **Fundo (Branco Quente)**: #FFFBF8 - Fundo principal
- **Superfície (Cinza Claro)**: #F5F1ED - Cards e superfícies
- **Texto Principal**: #2D2D2D
- **Sucesso (Verde Suave)**: #7FD8BE - Conclusões e marcos
- **Aviso (Laranja)**: #F4A460 - Avisos de segurança

### Navegação
O aplicativo possui **6 abas principais** na barra inferior:
1. **Home** 🏠 - Visão geral diária
2. **Exercícios** 💪 - Planos de exercício
3. **Nutrição** 🥗 - Contador de calorias
4. **Bem-Estar** 💝 - Diário e humor
5. **Progresso** 📊 - Gráficos e estatísticas
6. **Perfil** 👤 - Informações pessoais

## 📊 Dados Persistentes

O aplicativo armazena localmente (AsyncStorage) todos os dados:
- Perfil do usuário
- Logs de exercícios completados
- Logs de alimentos consumidos
- Entradas de humor
- Entradas do diário
- Registros de peso

**Todos os dados são privados e armazenados apenas no dispositivo da usuária.**

## 🚀 Como Usar

### Primeira Vez
1. Abra o aplicativo
2. Acesse a aba **Perfil**
3. Clique em **Editar** e preencha suas informações
4. Salve suas alterações

### Registrar um Exercício
1. Acesse a aba **Exercícios**
2. Selecione a fase apropriada (baseado em quantas semanas você está no pós-parto)
3. Clique no botão **+** para marcar o exercício como realizado
4. O progresso será atualizado automaticamente

### Registrar Alimentos
1. Acesse a aba **Nutrição**
2. Clique no botão **+** ao lado do alimento desejado
3. O alimento será adicionado ao consumo do dia
4. Veja o progresso de calorias e macronutrientes

### Registrar Humor e Sentimentos
1. Acesse a aba **Bem-Estar**
2. Na aba **Escala de Humor**: Selecione seu humor e clique **Salvar Humor**
3. Na aba **Diário**: Escreva seus sentimentos e clique **Salvar Entrada**
4. Visualize entradas recentes abaixo

### Acompanhar Progresso
1. Acesse a aba **Progresso**
2. Visualize gráficos das últimas 4 semanas
3. Acompanhe estatísticas consolidadas
4. Veja dicas de motivação

## 💡 Dicas de Uso

### Para Melhor Aproveitamento
- **Registre diariamente**: Quanto mais consistente, melhor o acompanhamento
- **Seja honesta**: Registre o que realmente sentiu e comeu
- **Não se culpe**: O aplicativo é para apoiar, não punir
- **Respeite seus limites**: Siga as fases de exercício recomendadas
- **Consulte profissionais**: Este app complementa, mas não substitui acompanhamento médico

### Avisos de Segurança
- ⚠️ **Evite exercícios se**: Tiver sangramento intenso, dor abdominal ou febre
- ⚠️ **Consulte seu médico antes**: De iniciar qualquer programa de exercícios
- ⚠️ **Depressão Pós-Parto**: Se sentir tristeza persistente, procure ajuda profissional
- ⚠️ **Nutrição**: Este app fornece informações gerais, consulte um nutricionista para planos personalizados

## 🔒 Privacidade

- **Nenhum dado é enviado para servidores**
- Todos os dados são armazenados localmente no seu dispositivo
- Você tem controle total sobre suas informações
- Pode editar ou deletar dados a qualquer momento

## 📱 Requisitos

- iOS 13+ ou Android 7+
- Conexão com internet não é necessária (funciona offline)
- ~50MB de espaço disponível

## 🎯 Próximas Melhorias Planejadas

- [ ] Lembretes de exercícios e hidratação
- [ ] Integração com rastreadores de atividade
- [ ] Compartilhamento de progresso com profissionais de saúde
- [ ] Conteúdo educativo sobre recuperação pós-parto
- [ ] Comunidade segura para troca de experiências
- [ ] Suporte a múltiplos idiomas

## 📞 Suporte

Para dúvidas ou sugestões sobre o MamaCare:
- Consulte o FAQ na seção Perfil
- Revise os avisos de segurança em cada exercício
- Procure orientação profissional para questões médicas

---

**MamaCare**: Recuperação com Amor, Ciência e Respeito 💕

*Desenvolvido com foco em saúde, bem-estar e empoderamento feminino no pós-parto.*
