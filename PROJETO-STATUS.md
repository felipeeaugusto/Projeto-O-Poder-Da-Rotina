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
3. **Script Python compositor** — Fase 1 criada (validação manual em andamento). Fase 2 (automação total) pendente.

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

### Bugs Corrigidos
- **BUG-01:** Seção "Você se reconhece?" — colunas com espaçamento correto (grid gap)
- **BUG-02:** Selo de Garantia estava invisível — corrigido removendo `.garantia__selo` do GSAP animTargets

### Rastreamento
- Meta Pixel instalado no `<head>` — ID: `32651609107818251`

### Pagamento
- Links de checkout Eduzz já funcionando: oferta R$10 e oferta R$27 ✅

### Facebook — FEITO
- **Upload da logo** na página @drjuliaresende — feito por Felipe ✅
- **Upload da capa** na página @drjuliaresende — feito por Felipe ✅
- Arquivos: `squads/dr-julia-resende/assets/logo-facebook-drjuliaresende.png` e `capa-facebook-drjuliaresende.png`

### Script Python Compositor — Fase 1 CRIADA
- **Script:** `squads/dr-julia-resende/scripts/compositor.py` — redesenhado com templates por formato
- **Carrossel:** `squads/dr-julia-resende/scripts/carrossel.py` — 6 slides estilo Academia Lendária criados
- **Logo sem fundo:** `squads/dr-julia-resende/assets/logo-sem-fundo.png` — gerada
- **Python 3.14 + Pillow 12.1.1** instalados no PC do Felipe (notebook)
- **Testes em andamento** — carrossel de 6 slides gerado, aguardando feedback do Felipe
- PRD: `docs/prd/compositor-python-prd.md`
- Story: `docs/stories/2.1.story.md` (Ready for Dev — Tasks 1-6 completas, Task 7 pendente)

---

## 🔄 Pendências do Projeto Completo

### 🔴 Prioridade Máxima
1. **Felipe dar feedback no carrossel** — 6 slides gerados (`slide-01` a `slide-06` em `squads/dr-julia-resende/scripts/carrossel/`). Aguardando aprovação/ajustes.
2. **Refazer 3 posts de teste (VE/QC/MT)** — primeira rodada rejeitada. Novo compositor redesenhado, aguarda validação do estilo carrossel primeiro.
3. **Agente compositor** via squad-creator-pro — após validação dos posts, criar o agente que usa o script Python no fluxo automático.

### 🟡 Prioridade Alta
4. **DS.yaml — 10 novos formatos** — formatos 06 ao 15 já estão no DS.yaml v2.0. Confirmar se estão corretos.
5. **Logo "O J do Abraço"** (Passo 5 do DS) — logo tipográfica da marca, nunca criada. Agente: @Design:agents:aaron-draplin.

### 🟡 Prioridade Média (LP)
6. **Domínio próprio** — ex: `poderdarotina.com.br` — aguardar João Paulo
7. **Verificar Pixel disparando** — confirmar no Facebook Events Manager que o PageView está chegando
8. **Testes mobile** — verificar LP em celular real
9. **Console zero erros** — abrir DevTools e confirmar ausência de erros JS

### 🟢 Prioridade Baixa
10. **Brandbook** — documento estratégico + visual da marca. Agente: @Design:agents:design-chief + @ux-design-expert.
11. **Script Python Fase 2** — integração automática com API DALL-E (só após Fase 1 aprovada por Felipe).

---

## ➡️ Próximos Passos Priorizados

1. **Felipe** — dar feedback nos 6 slides do carrossel (pasta `carrossel/`)
2. **@dev** — ajustar carrossel conforme feedback → Felipe aprovar estilo
3. **@dev + Felipe** — refazer os 3 posts de teste (VE, QC, MT) com novo compositor
4. **squad-creator-pro** — criar agente compositor após aprovação dos posts
5. **Felipe** — verificar Pixel no Facebook Events Manager
6. **Felipe** — testar LP no celular
7. **Aguardar João Paulo** — domínio próprio

---

## 💡 Perfil do Felipe (como ele trabalha)

- É o decisor de todas as etapas do projeto — João Paulo só recebe o resultado final
- Prefere layouts clássicos e diretos — não gosta de excesso de texto ou informação
- Toma decisões vendo na prática — precisa visualizar para aprovar
- Comunicação simples — explicar como se fosse para uma criança
- Quando aprova algo, costuma dizer "gostei", "ficou bom", "ficou excelente"
- **Conteúdo com intenção:** Felipe exige que cada post tenha um hook claro, texto que prende e ação definida. Conteúdo genérico não é aceito.

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
| Fonte do projeto | Poppins (Regular + Bold) |
| Ferramenta de imagem | ChatGPT (DALL-E) — NUNCA misturar com outras IAs |
| Compositor de posts | Script Python (`compositor.py`) — substitui Canva no fluxo automático |
| Squad | `squads/dr-julia-resende/` — 5 agentes (julia-chief, copy-agent, image-agent, approval-agent, ebook-agent) |
| DS.yaml | `squads/dr-julia-resende/data/DR-JULIA-RESENDE-DS.yaml` v2.0 |
| Ebook v2 | `squads/dr-julia-resende/data/ebook_v2.txt` — aprovado com prefácio + 8 aplicações de parentalidade |
| Logo Facebook | `squads/dr-julia-resende/assets/logo-facebook-drjuliaresende.png` — aprovada e UPLOADADA ✅ |
| Capa Facebook | `squads/dr-julia-resende/assets/capa-facebook-drjuliaresende.png` — aprovada e UPLOADADA ✅ |
| Logo master (01.png) | `squads/dr-julia-resende/assets/01.png` — logo do abraço |
| Logo sem fundo | `squads/dr-julia-resende/assets/logo-sem-fundo.png` — símbolo branco fundo transparente |
| Logo tipográfica | ❌ NÃO será criada — 01.png + @drjuliaresende são suficientes |
| Handoffs históricos | `squads/dr-julia-resende/data/HANDOFF-DR-JULIA-RESENDE-v4 a v7.md` — no GitHub |
| Design System terracota | ❌ DESCARTADO — João Paulo não gostou |
| Anti-padrão cores | ❌ Nunca misturar cores dentro do mesmo post |
| *waves | Usar sempre que houver stories paralelas — Felipe quer isso em todo o projeto |
| Estilo visual dos posts | **Estilo Academia Lendária** — tipografia forte, fundo escuro, accent verde, prova social. Posts com ilustração clipart rejeitados. |
| Carrossel de teste | 6 slides criados (`carrossel/slide-01` a `slide-06`) — aguardando feedback do Felipe |
| Posts VE/QC/MT | ❌ Primeira rodada rejeitada ("resultado porco"). Compositor redesenhado. Refazer após aprovar estilo carrossel. |

---

## 🗓️ Histórico de Sessões

### Sessão — 2026-03-16
**Feito:** Hero redesenhado com foto da Julia, favicon criado (logo do abraço verde), BUG-01 e BUG-02 corrigidos, Meta Pixel instalado, imagem otimizada para WebP, sistema de caderno de projeto criado (PROJETO-STATUS.md + regra project-log.md), repositório GitHub criado (felipeeaugusto/Projeto-O-Poder-Da-Rotina), LP publicada na Vercel. Atlas leu todos os handoffs v4 a v7 + yaml e mapeou o projeto completo.
**Parou em:** Felipe foi para casa (braço doendo).

### Sessão — 2026-03-17 (manhã)
**Feito:** Problemas de sincronização entre PCs resolvidos: `.gitmodules` criado, DS.yaml + ebook + logos copiados para o repositório, handoffs v4-v7 adicionados ao GitHub, `config.yaml` do squad corrigido.
**Parou em:** Pronto para continuar de qualquer PC.

### Sessão — 2026-03-17 (tarde/noite — notebook)
**Feito:** PRD do compositor Python criado. Story 2.1 criada, validada e aprovada (Ready for Dev). Script `compositor.py` implementado — Fase 1 funcional. Python 3.14 + Pillow instalados. Logo sem fundo gerada. Teste 1 (VE) rodado — compositor funciona mas resultado foi rejeitado.
**Parou em:** @analyst definindo estratégia dos 3 posts de teste.

### Sessão — 2026-03-17 (noite — notebook/casa)
**Feito:**
- API do Claude crashou (529) — contexto recuperado pelo Atlas via `history.jsonl`
- Analisadas todas as referências visuais: ref00, ref01, ref02, ref03, ref04
- **Diagnóstico:** compositor gerava layout clipart genérico — nunca vai chegar no nível das referências com fotografia real
- **Novo caminho definido:** estilo Academia Lendária (tipografia + prova social + fundo escuro)
- Compositor redesenhado com templates por formato (VE, QC, MT)
- **Carrossel de 6 slides criado** — `squads/dr-julia-resende/scripts/carrossel/slide-01` a `slide-06`
**Parou em:** Felipe viu os 6 slides e foi para o PC de casa — aguardando feedback
**Próxima sessão começa em:** Felipe dá feedback no carrossel → ajustes → aprovar estilo → continuar

---

*Atualizado por: Atlas (analyst) — 2026-03-17*
