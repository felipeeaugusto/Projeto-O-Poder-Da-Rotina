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

**O sistema tem 4 pilares:**
1. **Squad de conteúdo** — agentes IA que geram posts/stories automaticamente (já criado)
2. **Landing Page** — converte tráfego pago em vendas (feita e online)
3. **Script HTML/CSS + Playwright compositor** — ferramenta de geração de imagens aprovada
4. **Squad de Mineração de Conteúdo** — ⚠️ NOVO — coleta viral dos 30 perfis de referência e gera briefing semanal obrigatório para o julia-chief

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

### Script Python Compositor — DESCARTADO
- Python/Pillow descartado como ferramenta de geração de imagens
- **Nova ferramenta definida:** HTML/CSS + Playwright → PNG 1080x1080
- Vantagem: funciona de qualquer PC sem dependências locais (Python, Pillow, pastas)
- PRD: `docs/prd/compositor-python-prd.md` (desatualizado)
- Story: `docs/stories/2.1.story.md` (pausada — escopo mudou com a nova ferramenta)

### Estilos Visuais — DS.yaml v4.0 APROVADO
- **DS.yaml:** `squads/dr-julia-resende/data/DR-JULIA-RESENDE-DS.yaml` v4.0
- 5 estilos aprovados por Felipe com protótipos PNG:
  - **S01 Bold** — carrossel — fundo preto, Bebas Neue
  - **S03 Collage Editorial** — carrossel — fundo preto escuro, Playfair Display
  - **S04 Depoimento** — carrossel — fundo preto, card estilo WhatsApp
  - **P01 Manifesto** — post único 1:1 — fundo creme #f7f3ee, DM Serif Display ✅
  - **ST01 Direta** — story 9:16 — fundo verde #03bb85, Poppins ExtraBold ✅
- Cada formato tem estilo exclusivo — julia-chief não pode mais usar estilo de carrossel em post ou story

### Carrossel-01 — APROVADO
- 5 slides aprovados por Felipe: `squads/dr-julia-resende/carrossel-01/slide-01` a `slide-05`
- Gerados com HTML/CSS + Playwright

### Carrossel-02 — APROVADO por Felipe (2026-03-23)
- **Tema:** "Mãe perfeita vs. mãe presente" — baseado no Briefing #1 do Squad de Mineração
- **Referência de dados:** post finclass_grupoprimo com 271k likes (estrutura "enquanto X, Y")
- Slide 01: hook bold escuro — "Enquanto muitas mães correm atrás da perfeição, algumas buscam a presença."
- Slide 02: lista escura — cobranças impossíveis da "mãe perfeita"
- Slide 03: lista papel — lista simples da "mãe presente" (bullets verdes)
- Slide 04: frase de impacto Playfair — "Rotina não é sobre ser a mãe certa. É sobre estar lá — todos os dias."
- Slide 05: CTA verde — "O Poder da Rotina / Link na Bio."
- Pasta: `squads/dr-julia-resende/carrossel-02/`
- Gerados com HTML/CSS + Playwright (render.js)

### Post e Story de Teste — CRIADOS (aguardam revisão)
- `squads/dr-julia-resende/teste-post-story/post-01.png`
- `squads/dr-julia-resende/teste-post-story/story-01.png`
- `squads/dr-julia-resende/teste-post-story/post-02.png` ← criado na sessão 2026-03-18/19
- `squads/dr-julia-resende/teste-post-story/story-02.png` ← criado na sessão 2026-03-18/19

### Protótipo P02 Social Proof — CRIADO (aguarda revisão)
- Script: `squads/dr-julia-resende/assets/render-p02-v2.js`
- Output: `squads/dr-julia-resende/prototipo-carrosseis/estilo-p02-social-proof.png`
- Design: fundo navy escuro, texto à esquerda (hook "Tem mães" + checklist + CTA), celular diagonal à direita com WhatsApp dark mode
- Script rodou com sucesso: `✅ P02 v2 gerado!`
- ⚠️ Aguarda revisão do Felipe

### Protótipos de Novos Estilos — CRIADOS (aguardam revisão)
- `squads/dr-julia-resende/prototipo-carrosseis/estilo-s05-diagrama.png`
- `squads/dr-julia-resende/prototipo-carrosseis/estilo-s06-meme.png`
- ⚠️ Aguardam revisão do Felipe

### Squad de Mineração — CRIADO ✅
- **Spec:** `squads/dr-julia-resende/data/SQUAD-MINERACAO-SPEC.md`
- **5 agentes criados** em `squads/dr-julia-resende/agents/`:
  - 🔭 `scout-agent.md` — coleta via Apify (30 perfis)
  - 🧠 `analyst-agent-mineracao.md` — classifica padrões (Método Subido de Mineração)
  - 📋 `briefing-agent.md` — top 5 oportunidades semanais (obrigatório para julia-chief)
  - 🖼️ `compositor-agent.md` — HTML/CSS + Playwright → PNG
  - 📡 `publisher-agent.md` — Meta Graph API → Instagram + Facebook
- **30 perfis de referência:** `data/perfis-referencia.yaml`
- **Pastas de dados:** `data/mineracao/posts_brutos/`, `posts_analisados/`, `briefings/`
- **Pasta de output:** `output/` (PNGs gerados pelo compositor-agent)
- **Regra crítica:** julia-chief só opera com briefing da semana — obrigatório
- **Credenciais Meta:** `config/publisher-secrets.yaml` (não vai ao GitHub)
  - Instagram ID: `34441085755536074` (@drjuliaresende) ✅
  - Facebook Page ID: `436558862879390` ✅
  - Token Instagram: válido ✅
  - Token Facebook: expirado ⚠️ renovar antes de publicar
- **Pendência:** URL pública para imagens (necessário para Meta Graph API) — definir solução

### Análise do Curso Pedro Sobral — FEITA
- Curso: "Gestão de Tráfego Orgânico" — materiais em `C:/Users/felip/Downloads/Telegram Desktop/materiais/`
- Método Subido de Mineração 1.0 (7 passos) extraído e incorporado na spec do Squad de Mineração
- Insights aplicados: algoritmo Instagram (Sistema 1 + Sistema 2), formatos por alcance (Reels 15%, Carrossel 11%), jornada do cliente

---

## 🔄 Pendências do Projeto Completo

### 🔴 Prioridade Máxima
1. **Criar carrosséis dos Briefings #2 a #5** — mineração feita, carrossel-02 aprovado, próximos a produzir
2. **Revisar post-01.png, post-02.png, story-01.png, story-02.png** — criados, aguardam revisão (`squads/dr-julia-resende/teste-post-story/`)
3. **Revisar P02 Social Proof** — `prototipo-carrosseis/estilo-p02-social-proof.png` — aguarda revisão do Felipe

### 🟡 Prioridade Alta
4. **Sincronizar publisher-secrets.yaml** — novo token Instagram + novo page_access_token Facebook + novo ig_user_id — copiar para o outro PC via Google Drive
5. **Renovar token Instagram** — expira a cada 60 dias (gerado ~2026-03-23, renovar antes de ~2026-05-22)
6. **DS.yaml — confirmar formatos 06 ao 15** — v4.0 tem 5 estilos, confirmar se os demais formatos estão corretos

### 🟡 Prioridade Média (LP)
7. **Domínio próprio** — ex: `poderdarotina.com.br` — aguardar João Paulo
8. **Verificar Pixel disparando** — confirmar no Facebook Events Manager que o PageView está chegando
9. **Testes mobile** — verificar LP em celular real
10. **Console zero erros** — abrir DevTools e confirmar ausência de erros JS

### 🟢 Prioridade Baixa
11. **Brandbook** — documento estratégico + visual da marca. Agente: @Design:agents:design-chief + @ux-design-expert
12. **Script Python Fase 2** — integração automática com API DALL-E (só após Fase 1 aprovada por Felipe)

---

## ➡️ Próximos Passos Priorizados

1. **Felipe** — sincronizar `publisher-secrets.yaml` atualizado para o outro PC via Google Drive
2. **@analyst** — criar carrossel-03 (Briefing #2: "Ter filho é lindo. É também esgotante pra caramba.")
3. **@analyst** — criar carrossel ou reel dos Briefings #3 a #5
4. **Felipe** — revisar post-01, post-02, story-01, story-02 (`squads/dr-julia-resende/teste-post-story/`)
5. **Felipe** — revisar P02 Social Proof (`prototipo-carrosseis/estilo-p02-social-proof.png`)
6. **Felipe** — verificar Pixel no Facebook Events Manager

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
| Compositor de posts | ✅ HTML/CSS + Playwright → PNG 1080x1080 (Python/Pillow descartado) |
| Squad | `squads/dr-julia-resende/` — 5 agentes (julia-chief, copy-agent, image-agent, approval-agent, ebook-agent) |
| DS.yaml | `squads/dr-julia-resende/data/DR-JULIA-RESENDE-DS.yaml` v4.0 |
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
| Carrossel-01 | ✅ 5 slides aprovados (`carrossel-01/slide-01` a `slide-05`) |
| Estilos visuais aprovados | S01, S03, S04 (carrossel) + P01 Manifesto (post) + ST01 Direta (story) |
| DS.yaml versão | v4.0 — cada formato tem estilo exclusivo |
| Posts VE/QC/MT (1ª rodada) | ❌ Rejeitados ("resultado porco"). Nova ferramenta HTML/CSS definida. |
| post-01/02.png / story-01/02.png | Criados, aguardam revisão do Felipe |
| P02 Social Proof | Gerado HTML/CSS + Playwright — `prototipo-carrosseis/estilo-p02-social-proof.png` — aguarda revisão |
| Squad de Mineração | ✅ CRIADO — 5 agentes em `squads/dr-julia-resende/agents/`: scout, analyst-mineracao, briefing, compositor, publisher |
| Briefing semanal | ⚠️ OBRIGATÓRIO para julia-chief — sem briefing, julia-chief não opera (heurística JC007) |
| 30 perfis de referência | Corrigidos: @maternidadereal (377k) substituiu @maternidadepratica (38 seguidores). @oalanicolas movido para camada 3 (referência visual) |
| Thresholds scout-agent | Tiered por tamanho: grande +1M / médio 100k-1M / pequeno -100k |
| Cloudinary | ✅ Configurado em publisher-secrets.yaml — upload temporário para URL pública (~5s) |
| Token Facebook Page | ✅ Renovado 2026-03-21 — Page Token "Dra. Julia Resende" validado |
| Token Instagram | ✅ Válido — monitorar validade (expira ~60 dias) |
| Apify | ✅ Token configurado — teste piloto rodado (5 perfis) e corrigido |
| Curso Pedro Sobral | Materiais lidos e incorporados na arquitetura do Squad de Mineração |
| publisher-secrets.yaml | Gitignored — Felipe sincroniza manualmente via Google Drive entre PCs |

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

### Sessão — 2026-03-18 (madrugada — PC de casa)
**Feito:**
- **Python/Pillow descartado** — nova ferramenta: HTML/CSS + Playwright → PNG 1080x1080
- DS.yaml atualizado para v3.0 com seção completa de estilos visuais
- **3 estilos aprovados:** S01 Bold, S03 Collage Editorial, S04 Depoimento (protótipos HTML + PNG)
- **Carrossel-01:** 5 slides aprovados e commitados (`carrossel-01/`)
- **post-01.png e story-01.png** criados e commitados (`teste-post-story/`)
**Parou em:** post-01.png e story-01.png criados — aguardam revisão do Felipe na próxima sessão

### Sessão — 2026-03-18/19 (contexto recuperado de compactação)
**Feito:**
- DS.yaml atualizado para **v4.0** — P01 Manifesto e ST01 Direta aprovados com protótipos PNG
- **post-02.png e story-02.png** criados (`teste-post-story/`) — aguardam revisão
- **estilo-s05-diagrama.png e estilo-s06-meme.png** criados (`prototipo-carrosseis/`) — aguardam revisão
- **P02 Social Proof** renderizado com HTML/CSS + Playwright:
  - Script: `squads/dr-julia-resende/assets/render-p02-v2.js`
  - Output: `prototipo-carrosseis/estilo-p02-social-proof.png`
  - Design: navy escuro, hook "Tem mães" + checklist à esquerda, celular diagonal com WA dark mode à direita
  - Bug corrigido: `<div class="divider">` faltando no HTML — adicionado e script rodou com sucesso
- **wa-screen-dark.js** criado (`squads/dr-julia-resende/assets/`) — componente de tela WhatsApp reutilizável
**Parou em:** P02 gerado, aguardando feedback do Felipe

### Sessão — 2026-03-19
**Feito:**
- Atlas leu todos os PDFs do curso Pedro Sobral "Gestão de Tráfego Orgânico" (Telegram Desktop/materiais/)
- Extraídos: Método Subido de Mineração 1.0, algoritmo Instagram (Sistemas 1 e 2), formatos por alcance, jornada do cliente
- **Squad de Mineração de Conteúdo arquitetado:**
  - 3 agentes: scout-agent (Apify) → analyst-agent → briefing-agent
  - 30 perfis de referência mapeados (3 camadas: nicho, criadores, referências visuais)
  - Regra definida: julia-chief OBRIGATÓRIO usa briefing — sem briefing não produz
  - Spec escrita: `squads/dr-julia-resende/data/SQUAD-MINERACAO-SPEC.md`
- Caderno atualizado com tudo das sessões anteriores e desta sessão
**Parou em:** Aguardando confirmação do Felipe para criar o Squad de Mineração

### Sessão — 2026-03-20/21
**Feito:**
- **Squad de Mineração criado completo** — 5 agentes: scout-agent, analyst-agent-mineracao, briefing-agent, compositor-agent, publisher-agent
- **Credenciais Meta Graph API configuradas** — Instagram ID + token ✅, Facebook Page ID + token ✅
- **Teste piloto Apify** — 5 perfis rodados, 3 problemas encontrados e corrigidos:
  - @maternidadepratica (38 seguidores) → substituída por @maternidadereal (377k)
  - @oalanicolas reclassificado para camada 3 (referência visual — nicho AI/negócios)
  - Thresholds tiered implementados no scout-agent (grande/médio/pequeno)
- **Cloudinary configurado** — cloud_name `dvxe4ijzt` — upload temporário para URLs públicas (~5s)
- **Token Facebook Page renovado** — Page Token "Dra. Julia Resende" validado via Graph API
- **julia-chief atualizado** — heurística JC007: briefing semanal obrigatório + veto condition
- **Workflow de secrets** definido: publisher-secrets.yaml (gitignored) sincronizado via Google Drive entre PCs
**Parou em:** Próximo passo é rodar mining completo dos 30 perfis

### Sessão — 2026-03-23 (parte 1)
**Feito:**
- **5 usernames corrigidos + 12 perfis inexistentes substituídos** no `perfis-referencia.yaml` — validados via Apify
- **Coleta completa rodada nos 29 perfis ativos** via `scout-run.js` → `coleta-2026-03-23.json`
  - **69 posts coletados de 23/29 perfis** (6 perfis sem posts nos thresholds definidos)
- `scout-investigate.js` criado — script de diagnóstico para inspecionar perfis com problemas
- **Analyst-agent rodado nos 69 posts** → `posts_analisados-2026-03-23.json` (18 posts com ângulo de adaptação)
- **Briefing semanal gerado** → `briefing-semanal-2026-03-23.md` (top 5 oportunidades)
- **Carrossel-02 criado e aprovado** — "Mãe perfeita vs. mãe presente" — 5 slides HTML/CSS + Playwright
- **compositor-agent.js criado** — `squads/dr-julia-resende/assets/compositor-agent.js`
- **publisher-agent.js criado** — `squads/dr-julia-resende/assets/publisher-agent.js`
**Parou em:** Scripts criados, credenciais a preencher.

### Sessão — 2026-03-23 (parte 2)
**Feito:**
- **js-yaml instalado** — dependência necessária para o publisher-agent
- **publisher-agent.js corrigido** — Facebook agora publica álbum completo (não só a primeira imagem)
- **Credenciais atualizadas** em `publisher-secrets.yaml`:
  - `ig_user_id`: `17841405614941405` (ID correto da conta Business)
  - `ig_access_token`: token renovado (~2026-03-23, expira ~2026-05-22)
  - `page_access_token`: token da página Facebook renovado
- **🎉 PRIMEIRO POST REAL PUBLICADO** — carrossel-02 no ar no Instagram (@drjuliaresende) e Facebook
- **Flag `--so-facebook` adicionada** ao publisher-agent — evita duplicação se precisar re-rodar só o Facebook
**Parou em:** Pipeline end-to-end funcionando. Próximo: criar carrossel-03 (Briefing #2).

---

*Atualizado por: Atlas (@analyst) — 2026-03-23*
