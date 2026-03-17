# PROJETO-STATUS — Projeto Dra. Julia Resende (Completo)
> Caderno vivo do projeto. Todos os agentes devem ler ao ser ativados e atualizar após aprovações.
> ⚠️ Este projeto é MAIOR que a LP. A LP é só uma parte. Leia a seção "Visão Geral do Projeto" antes de qualquer coisa.

---

## 🌐 Visão Geral do Projeto (leia primeiro)

Este não é só um projeto de LP. É um **sistema completo de vendas e conteúdo automatizado**:

- **Persona IA:** Dra. Julia Resende (@drjuliaresende) — personagem fictícia criada por João Paulo
- **Produto:** Ebook "O Poder da Rotina" — R$27 (Eduzz)
- **Meta:** R$50k+/mês via Instagram + Facebook
- **Canais:** @drjuliaresende (Instagram + Facebook)
- **Cliente final:** João Paulo R. Costa (recebe os resultados — não aprova etapas)
- **Decisor e executor:** Felipe (toma todas as decisões do projeto)

**O sistema tem 3 pilares:**
1. **Squad de conteúdo** — agentes IA que geram posts/stories automaticamente (já criado)
2. **Landing Page** — converte tráfego pago em vendas (feita e online)
3. **Script Python compositor** — garante fidelidade de cor nas imagens geradas por IA (pendente — PRIORIDADE MÁXIMA)

---

## 📋 Sobre a Landing Page

- **Produto:** Ebook "O Poder da Rotina" — Dra. Julia Resende
- **Tipo:** Landing Page estática (HTML/CSS/JS)
- **Pasta:** `packages/landing-page-dr-julia/`
- **URL online:** https://projeto-o-poder-da-rotina.vercel.app/
- **Repositório GitHub:** https://github.com/felipeeaugusto/Projeto-O-Poder-Da-Rotina
- **Servidor local:** `npx serve . -p 3000` → http://localhost:3000

---

## ✅ O Que Já Foi Feito (aprovado pelo Felipe)

### Hero Section
- Layout clássico LP: texto à esquerda, foto à direita
- Foto da Dra. Julia segurando o ebook (`assets/images/09.png` + `09.webp`)
- Headline: *"7 Minutos por Dia para Transformar o Caos em Paz"*
- Subheadline explicando o método
- Botão CTA: "QUERO TRANSFORMAR MINHA FAMÍLIA AGORA"
- Trust badges: Acesso imediato / Garantia de 14 dias / Funciona mesmo com crianças agitadas
- Tag verde: "Mais de 15.000 mães brasileiras transformadas"

### Imagem Otimizada
- `09.png` (2MB) → `09.webp` (98KB) com fallback `<picture>`

### Favicon
- Logo do abraço da drjuliaresende em verde (#03bb85), fundo transparente
- Arquivo: `assets/favicon.png`
- HTML aponta para `assets/favicon.png`

### Bugs Corrigidos
- **BUG-01:** Seção "Você se reconhece?" — colunas com espaçamento correto (grid gap)
- **BUG-02:** Selo de Garantia estava invisível — corrigido removendo `.garantia__selo` do GSAP animTargets

### Rastreamento
- Meta Pixel instalado no `<head>` — ID: `32651609107818251`

### Pagamento
- Links de checkout Eduzz já funcionando: oferta R$10 e oferta R$27 ✅

### Facebook
- Logo (800×800) e Capa (1702×630) feitas e **uploadadas na página @drjuliaresende** ✅

---

## 🔄 Pendências do Projeto Completo

### 🔴 Prioridade Máxima
1. **Script Python compositor de imagens** — gera fundos na cor exata (#03bb85) por código; ChatGPT só gera elemento artístico por cima. Especificações em `squads/dr-julia-resende/data/DR-JULIA-RESENDE-DS.yaml` → seção `python_compositor`. Agente: @dev. Nunca foi criado.
2. **Agente compositor** via squad-creator-pro — após o script Python pronto, o squad-creator-pro cria o agente que usa esse script no fluxo automático de conteúdo.

### 🟡 Prioridade Alta
3. **DS.yaml — 10 novos formatos** — identificados na análise de referências visuais (13/03 noite). Formatos 06 ao 15. Confirmar se foram adicionados ao DS.yaml v2.0.

### 🟡 Prioridade Média (LP)
4. **Domínio próprio** — ex: `poderdarotina.com.br` — aguardar João Paulo
5. **Verificar Pixel disparando** — confirmar no Facebook Events Manager que o PageView está chegando
6. **Testes mobile** — verificar LP em celular real
7. **Console zero erros** — abrir DevTools e confirmar ausência de erros JS

### 🟢 Prioridade Baixa
8. **Brandbook** — documento estratégico + visual da marca (conceito, PDF + site). Agente: @Design:agents:design-chief + @ux-design-expert.

---

## ➡️ Próximos Passos Priorizados

1. **@dev** — criar script Python compositor de imagens (especificações no DS.yaml → `python_compositor`)
2. **squad-creator-pro** — criar agente compositor que usa o script Python no fluxo automático
3. **Felipe** — verificar Pixel no Facebook Events Manager
4. **Felipe** — testar LP no celular
5. **Aguardar João Paulo** — domínio próprio

---

## 💡 Perfil do Felipe (como ele trabalha)

- É o decisor de todas as etapas do projeto — João Paulo só recebe o resultado final
- Prefere layouts clássicos e diretos — não gosta de excesso de texto ou informação
- Toma decisões vendo na prática — precisa visualizar para aprovar
- Comunicação simples — explicar como se fosse para uma criança
- Quando aprova algo, costuma dizer "gostei", "ficou bom", "ficou excelente"

---

## 📝 Decisões Importantes Registradas

| Decisão | Valor |
|--------|-------|
| Cor principal | `#03bb85` (verde) |
| Foto hero | Julia segurando o ebook (`09.png`) |
| Favicon | Logo do abraço verde sem fundo |
| Preços | R$10 e R$27 via Eduzz |
| Meta Pixel ID | `32651609107818251` |
| Servidor local | `npx serve . -p 3000` (Edge bloqueava file://) |
| Fonte do projeto | Poppins (Regular + Extra Bold) |
| Ferramenta de imagem | ChatGPT (DALL-E) — NUNCA misturar com outras IAs |
| Compositor final de posts | Canva (adiciona texto, logo, marca por cima das imagens IA) |
| Squad | `squads/dr-julia-resende/` — 5 agentes (julia-chief, copy-agent, image-agent, approval-agent, ebook-agent) |
| DS.yaml | `squads/dr-julia-resende/data/DR-JULIA-RESENDE-DS.yaml` v2.0 |
| Ebook v2 | `squads/dr-julia-resende/data/ebook_v2.txt` — aprovado com prefácio + 8 aplicações de parentalidade |
| Logo Facebook | `squads/dr-julia-resende/assets/logo-facebook-drjuliaresende.png` — aprovada e uploadada |
| Capa Facebook | `squads/dr-julia-resende/assets/capa-facebook-drjuliaresende.png` — aprovada e uploadada |
| Logo master (01.png) | `squads/dr-julia-resende/assets/01.png` — logo oficial da marca (hug mark) |
| Logo tipográfica | ❌ NÃO será criada — 01.png + @drjuliaresende são suficientes |
| Handoffs históricos | `squads/dr-julia-resende/data/HANDOFF-DR-JULIA-RESENDE-v4 a v7.md` — no GitHub |
| Design System terracota | ❌ DESCARTADO — João Paulo não gostou |
| Anti-padrão cores | ❌ Nunca misturar cores dentro do mesmo post |

---

## 🗓️ Histórico de Sessões

### Sessão — 2026-03-16
**Feito:** Hero redesenhado com foto da Julia, favicon criado (logo do abraço verde), BUG-01 e BUG-02 corrigidos, Meta Pixel instalado, imagem otimizada para WebP, sistema de caderno de projeto criado (PROJETO-STATUS.md + regra project-log.md), repositório GitHub criado (felipeeaugusto/Projeto-O-Poder-Da-Rotina), LP publicada na Vercel. Atlas leu todos os handoffs v4 a v7 + yaml e mapeou o projeto completo. Descoberto que o script Python compositor e o agente via squad-creator-pro nunca foram criados — prioridade máxima para a próxima sessão.
**URL online:** https://projeto-o-poder-da-rotina.vercel.app/
**Parou em:** Felipe foi para casa (braço doendo). Continuação no PC de casa.
**Próxima sessão começa em:** Script Python compositor → @dev.

### Sessão — 2026-03-17 (tarde)
**Feito:** Conversa perdida (terminal fechou) recuperada dos logs. Diagnosticados e corrigidos todos os problemas de sincronização entre PCs: `.gitmodules` criado (submodule da LP não tinha URL), DS.yaml + ebook + biografia + logos + 01.png copiados para o repositório, handoffs v4-v7 adicionados ao GitHub, `config.yaml` do squad corrigido de caminhos absolutos para relativos, caminhos no PROJETO-STATUS.md atualizados. Explicado como atualizar o PC de casa sem fechar o terminal do Claude.
**Parou em:** Todas as brechas de sincronização resolvidas. Pronto para continuar de qualquer PC.

### Sessão — 2026-03-17 (noite)
**Feito:** Atlas ativado no PC de casa. Confirmado que todos os assets estão no repositório. Esclarecido que Felipe é o decisor de todas as etapas (João Paulo só recebe o resultado final). Upload da logo + capa no Facebook confirmado como feito pelo Felipe. Decisão: logo tipográfica não será criada — 01.png + @drjuliaresende são suficientes. Perfil do Felipe e pendências atualizados no caderno.
**Parou em:** Felipe foi dormir.
**Próxima sessão começa em:** Script Python compositor → @dev (DS.yaml em `squads/dr-julia-resende/data/`).

---

*Atualizado por: Atlas (analyst) — 2026-03-17*
