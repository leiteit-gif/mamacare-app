# Guia: Como Evitar Erros de Compilação no Futuro

## 1. Estratégia de Desenvolvimento Recomendada

### 1.1 Comece com Expo Go (Sem Compilação)
**Por quê:** Permite testar o app em tempo real sem enfrentar erros de compilação Gradle.

```bash
# Instale Expo Go no seu dispositivo (iOS/Android)
# Escaneie o QR code durante desenvolvimento
pnpm dev
```

**Benefícios:**
- Feedback imediato
- Sem erros de Gradle
- Sem necessidade de compilação nativa
- Perfeito para prototipagem e testes

### 1.2 Teste em Múltiplos Ambientes
- **Web:** `pnpm dev` (sem erros nativos)
- **iOS Simulator:** `pnpm ios` (depois de resolver dependências)
- **Android Emulator:** `pnpm android` (depois de resolver dependências)
- **Dispositivo Real:** Expo Go (mais confiável)

---

## 2. Gerenciamento de Dependências

### 2.1 Mantenha Versões Compatíveis
```json
{
  "expo": "~54.0.29",
  "react-native": "0.81.5",
  "react-native-gesture-handler": "~2.26.0",
  "react-native-reanimated": "~4.1.6"
}
```

**Regra:** Use `~` (tilde) para versões menores compatíveis, não `^` (caret).

### 2.2 Verifique Compatibilidade Antes de Atualizar
```bash
# Antes de atualizar uma dependência
npm info react-native-gesture-handler versions

# Verifique se é compatível com sua versão do React Native
# Consulte: https://github.com/software-mansion/react-native-gesture-handler
```

### 2.3 Use Ferramentas de Análise
```bash
# Verifique dependências problemáticas
npm audit

# Identifique conflitos
npm ls react-native-gesture-handler
```

### 2.4 Mantenha um Registro de Versões Funcionais
```
VERSÕES TESTADAS E FUNCIONAIS:
- Expo: 54.0.29 ✅
- React Native: 0.81.5 ✅
- Kotlin: 2.0.21 ✅
- Gradle: 8.0 ✅
- compileSdkVersion: 36 ✅
- targetSdkVersion: 35 ✅
```

---

## 3. Configuração do Android Otimizada

### 3.1 Arquivo `app.config.ts` - Configuração Mínima e Funcional
```typescript
const config: ExpoConfig = {
  // ... outras configurações
  android: {
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
    },
    package: env.androidPackage,
    permissions: ["POST_NOTIFICATIONS"],
  },
  plugins: [
    "expo-router",
    [
      "expo-build-properties",
      {
        android: {
          minSdkVersion: 24,
          compileSdkVersion: 36,
          targetSdkVersion: 35,
          gradleVersion: "8.0",
          kotlinVersion: "2.0.21",
        },
      },
    ],
  ],
};
```

**Dica:** Mantenha apenas o necessário. Remova configurações experimentais.

### 3.2 Arquivo `android.gradle.properties`
```properties
# Gradle configuration
org.gradle.jvmargs=-Xmx4096m
org.gradle.parallel=true
org.gradle.daemon=true

# Android SDK versions
android.compileSdkVersion=36
android.targetSdkVersion=35
android.minSdkVersion=24

# AndroidX
android.useAndroidX=true
android.enableJetifier=true

# Kotlin
kotlin.version=2.0.21
```

### 3.3 Arquivo `eas.json` - Configuração de Build
```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "production": {
      "android": {
        "buildType": "apk",
        "env": {
          "GRADLE_OPTS": "-Xmx4096m"
        }
      }
    }
  }
}
```

---

## 4. Checklist Antes de Compilar

### 4.1 Verificação de Dependências
- [ ] Todas as dependências estão listadas em `package.json`
- [ ] Não há conflitos de versão (`npm audit`)
- [ ] Versões de Kotlin e Gradle são compatíveis
- [ ] compileSdkVersion ≥ 35 (para androidx.core moderno)

### 4.2 Verificação de Configuração
- [ ] `app.config.ts` está válido (sem erros TypeScript)
- [ ] `android.gradle.properties` existe e está correto
- [ ] `eas.json` está configurado
- [ ] Ícones estão nos locais corretos

### 4.3 Verificação de Código
- [ ] Sem erros TypeScript (`pnpm check`)
- [ ] Sem avisos de linting (`pnpm lint`)
- [ ] Testes passam (`pnpm test`)

### 4.4 Teste Local Primeiro
```bash
# Teste em web (mais rápido, sem erros nativos)
pnpm dev

# Teste em Expo Go (dispositivo real)
# Escaneie o QR code

# Só depois tente compilação nativa
eas build --platform android
```

---

## 5. Erros Comuns e Soluções

### 5.1 "Cannot query the value of this provider"
**Causa:** Incompatibilidade do React Native Gesture Handler
**Solução:**
```json
"react-native-gesture-handler": "~2.26.0"
```

### 5.2 "Can't find KSP version for Kotlin"
**Causa:** Versão de Kotlin não suportada pelo KSP
**Solução:**
```typescript
kotlinVersion: "2.0.21" // Use versão suportada
```

### 5.3 "Requires compileSdk 35 or later"
**Causa:** compileSdkVersion muito baixo
**Solução:**
```typescript
compileSdkVersion: 36,
targetSdkVersion: 35,
```

### 5.4 "Gradle build failed"
**Solução Geral:**
1. Limpe cache: `rm -rf node_modules && pnpm install`
2. Aumente memória JVM: `GRADLE_OPTS="-Xmx4096m"`
3. Downgrade dependência problemática
4. Consulte logs completos: `eas build --platform android --log-file build.log`

---

## 6. Estratégia de Atualização Segura

### 6.1 Atualize Uma Dependência por Vez
```bash
# Versão atual
pnpm list react-native-gesture-handler

# Atualize
pnpm add react-native-gesture-handler@latest

# Teste imediatamente
pnpm dev

# Se falhar, reverta
pnpm add react-native-gesture-handler@2.26.0
```

### 6.2 Mantenha Checkpoints
```bash
# Antes de atualizar, salve checkpoint
git commit -m "Before updating dependencies"

# Se algo quebrar, reverta
git revert HEAD
```

### 6.3 Siga Calendário de Atualizações
- **Mensal:** Verifique atualizações de segurança
- **Trimestral:** Atualize dependências menores
- **Anual:** Considere atualizar versão maior do Expo/React Native

---

## 7. Alternativas para Evitar Compilação Nativa

### 7.1 Use Expo Go para Testes
```bash
# Instale Expo Go no seu dispositivo
# Teste sem compilação nativa
pnpm dev
# Escaneie QR code
```

### 7.2 Use Web para Prototipagem
```bash
# Teste a maioria das funcionalidades em web
pnpm dev
# Acesse http://localhost:8081
```

### 7.3 Considere Plataforma Única
Se Android é problemático, considere:
- Compilar apenas para iOS (se possível)
- Usar Progressive Web App (PWA)
- Usar versão web como principal

---

## 8. Recursos Úteis

### 8.1 Documentação Oficial
- [Expo Documentation](https://docs.expo.dev)
- [React Native Gesture Handler](https://software-mansion.github.io/react-native-gesture-handler/)
- [Gradle Documentation](https://gradle.org/guides/)

### 8.2 Comunidades
- [Expo Discord](https://discord.gg/expo)
- [React Native Community](https://reactnative.dev/community/overview)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

### 8.3 Ferramentas de Diagnóstico
```bash
# Verifique saúde do projeto
pnpm check

# Verifique dependências
npm audit

# Verifique versões
pnpm list --depth=0
```

---

## 9. Resumo das Melhores Práticas

| Prática | Benefício |
|---------|-----------|
| Comece com Expo Go | Evita erros de compilação |
| Mantenha versões compatíveis | Reduz conflitos |
| Use configuração mínima | Menos pontos de falha |
| Teste em múltiplos ambientes | Detecta problemas cedo |
| Mantenha checkpoints | Recuperação rápida |
| Atualize gradualmente | Controle sobre mudanças |
| Consulte logs completos | Diagnóstico melhor |

---

## 10. Próximos Passos para Seu Projeto

1. **Imediato:** Teste em Expo Go (sem compilação)
2. **Curto Prazo:** Documente versões que funcionam
3. **Médio Prazo:** Configure CI/CD com testes automatizados
4. **Longo Prazo:** Atualize dependências regularmente

---

**Lembre-se:** A maioria dos erros de compilação Android vem de **incompatibilidades de dependências**, não de código defeituoso. Manter versões compatíveis é a chave! 🔑
