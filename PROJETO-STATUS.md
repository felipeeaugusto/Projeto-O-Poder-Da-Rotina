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

### Protótipos de Carrosséis HTML/CSS — APROVADOS
- **Ferramenta definida:** HTML/CSS + Playwright → PNG 1080x1080 (substitui Python/Pillow para carrosséis)
- **Canva Pro** assinado + MCP do Canva conectado no Claude Code
- **estilo-01-bold.png** — fundo preto, "7 MIN." centralizado em verde 260px, dinâmica em 3 zonas ✅
- **estilo-03-collage.png** — fundo escuro, título Playfair italic, citação da Julia com borda verde ✅
- **estilo-04-depoimento.png** — estilo Academia Lendária, card de depoimento tipo WhatsApp ✅
- Pasta: `squads/dr-julia-resende/prototipo-carrosseis/`
- **Decisão:** Python/Pillow descartado para criação visual. HTML/CSS+Playwright é o caminho.

### DS.yaml v3.0 — Estilos Visuais Aprovados Documentados
- DS.yaml atualizado de v2.0 → v3.0 com seção `visual_styles_approved`
- **3 estilos completamente documentados:** S01 Bold, S03 Collage, S04 Depoimento
- Cada estilo tem: cores exatas, tipografia, layout por zonas, regras, anti-padrões
- S04 inclui banco de 3 depoimentos fictícios prontos para uso
- Guia de uso: estrutura padrão de carrossel (5 slides), mapeamento por objetivo
- Squad julia-chief pode criar conteúdo de qualquer PC sem precisar de pastas locais

### Carrossel-01 — APROVADO por Felipe (2026-03-18)
- **5 slides com conteúdo real da Dra. Julia**
- Slide 01: S01 Bold — hook "7 MIN. / por dia." ✅
- Slide 02: S03 Collage — "Manhã em caos — o dia inteiro paga o preço." ✅
- Slide 03: S03 Collage — dados científicos (78%, 15k, 20 anos) ✅
- Slide 04: S04 Depoimento — Fernanda M. / Belo Horizonte ✅
- Slide 05: S01 Bold — CTA "O Poder da Rotina / Link na Bio." ✅
- Pasta: `squads/dr-julia-resende/carrossel-01/`
- Felipe aprovou o carrossel completo: "Gostei do Carrossel, por completo"

### Post e Story de Teste — Criados, aguardando revisão (2026-03-18)
- **post-01.png** — S01 Bold — "MÃE PERFEITA." — não aprovado, Felipe quer conversar amanhã
- **story-01.png** — S03 Collage vertical 1080x1920 — "Conexão antes de correção." — não aprovado, Felipe quer conversar amanhã
- Feedback recebido: feed precisa de VARIEDADE — não só estilos escuros. Falta estilo branco/claro.
- Pasta: `squads/dr-julia-resende/teste-post-story/`

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

### 🔴 Prioridade Máxima (Squad de Mineração — em andamento)
1. **Rodar analyst-agent nos 69 posts coletados** — `coleta-2026-03-23.json` pronto, `posts_analisados/` vazia, análise não feita ainda
2. **Gerar briefing semanal** — `briefings/` vazia, nenhum briefing gerado ainda
3. **Revisar post-01.png e story-01.png** — criados em 2026-03-18, não aprovados. Feed precisa de estilos claros/brancos.

### 🟡 Prioridade Alta
4. **Definir Estilo 05 (post branco) e Estilo 06 (story branco)** — após análise dos posts coletados
5. **Criar compositor-agent e publisher-agent** via squad-creator-pro — bloqueado até spec aprovada
6. **Configurar Meta Graph API** (Felipe faz 1x) — bloqueado até agentes criados

### 🟡 Prioridade Média (LP)
7. **Domínio próprio** — ex: `poderdarotina.com.br` — aguardar João Paulo
8. **Verificar Pixel disparando** — confirmar no Facebook Events Manager que o PageView está chegando
9. **Testes mobile** — verificar LP em celular real

### 🟢 Prioridade Baixa
10. **Brandbook** — documento estratégico + visual da marca
11. **Script Python Fase 2** — integração automática com API DALL-E

---

## ➡️ Próximos Passos Priorizados

1. **@analyst** — rodar analyst-agent: processar `coleta-2026-03-23.json` (69 posts) → extrair padrões → salvar em `posts_analisados/`
2. **@analyst** — rodar briefing-agent: gerar `briefing-semanal-2026-03-23.md` em `briefings/`
3. **@julia-chief** — usar briefing para produzir conteúdo da semana
4. **Felipe** — revisar post-01.png e story-01.png e decidir sobre estilos brancos
5. **squad-creator-pro** — criar compositor-agent e publisher-agent após aprovação da spec
6. **Felipe** — configurar Meta Graph API (1x) para publicação automática

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
| DS.yaml | `squads/dr-julia-resende/data/DR-JULIA-RESENDE-DS.yaml` v3.0 — inclui estilos visuais aprovados |
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
| Estilo visual dos posts | **3 estilos aprovados:** bold (fundo preto), collage (Playfair dark), depoimento (Academia Lendária) |
| Ferramenta de carrossel | HTML/CSS + Playwright → PNG 1080x1080. Python/Pillow descartado para criação visual. |
| Canva Pro | Assinado. MCP conectado no Claude Code. ⚠️ MCP NÃO dá acesso à biblioteca de elementos do Canva (bloqueio comercial). Só funciona com templates criados manualmente. |
| Carrossel de teste | 6 slides antigos descartados. 3 novos protótipos aprovados em `prototipo-carrosseis/` |
| Carrossel-01 | APROVADO. 5 slides com conteúdo real. Pasta: `squads/dr-julia-resende/carrossel-01/` |
| Posts VE/QC/MT | ❌ Primeira rodada rejeitada. Substituído pelo carrossel-01 aprovado. |
| Squad de conteúdo | **julia-chief** é o responsável por criar todo o conteúdo. design-chief só define estilos uma vez. |
| CTA padrão | "Link na Bio" — NUNCA "Link da bio" |
| Preço no post | ❌ NUNCA mostrar preço do ebook em posts/carrosséis |
| CTA duplicado | ❌ NUNCA repetir CTA duas vezes no mesmo slide |
| Variedade visual | ⚠️ Feed precisa alternar estilos escuros e claros. Faltam S05 (post branco) e S06 (story branco). |
| HTMLs intermediários | Apagados automaticamente após renderização. Felipe só vê os PNGs finais. |
| Caminho dos arquivos | Informar SEMPRE o caminho completo ANTES de perguntar feedback ao Felipe. |

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

### Sessão — 2026-03-18 (PC de casa)
**Feito:**
- DS.yaml atualizado para v3.0 — 3 estilos visuais completamente documentados (S01 Bold, S03 Collage, S04 Depoimento)
- Protótipos PNG aprovados adicionados ao GitHub: `prototipo-carrosseis/estilo-01-bold.png`, `estilo-03-collage.png`, `estilo-04-depoimento.png`
- **Carrossel-01 criado e APROVADO por Felipe** — 5 slides com conteúdo real da Dra. Julia: hook, problema, método, depoimento, CTA
- Post único (post-01.png) e Story (story-01.png) criados como teste — NÃO aprovados, aguardam revisão
- Feedback registrado: feed precisa de variedade (faltam estilos claros/brancos), "Link na Bio" é o padrão, nunca mostrar preço em posts, nunca duplicar CTA
- Canva MCP: confirmado que não tem acesso à biblioteca de elementos (limitação da Canva)
- Squad julia-chief definido como responsável único por criar conteúdo
**Parou em:** Discussão sobre variedade visual — precisam de Estilo 05 (post branco) e Estilo 06 (story branco)

### Sessão — 2026-03-19 a 2026-03-20
**Feito:**
- **SQUAD-MINERACAO-SPEC.md criado** — arquitetura completa do squad de mineração (scout-agent, analyst-agent, briefing-agent, compositor-agent, publisher-agent)
- publisher-agent + Meta Graph API documentados no spec (passos de configuração, tokens, permissões)
- `perfis-referencia.yaml` criado com os 30 perfis organizados em 3 camadas
- Teste piloto de coleta: `coleta-piloto-2026-03-20.json`
- DS.yaml atualizado para v4.0 — estilos P01 (Manifesto) e ST01 (Direta) aprovados
**Parou em:** Aguardando aprovação do Felipe para criar os agentes via squad-creator-pro

### Sessão — 2026-03-21
**Feito:**
- Correções pós-piloto nos perfis: `perfis-referencia.yaml` corrigido
- Credenciais do squad completas
- `scout-run.js` e `scout-investigate.js` criados — scripts de coleta e diagnóstico
**Parou em:** Preparação para coleta corrigida

### Sessão — 2026-03-23
**Feito:**
- **5 usernames corrigidos + 12 perfis inexistentes substituídos** no `perfis-referencia.yaml`
- **Coleta rodada nos 29 perfis ativos**: `coleta-2026-03-23.json` — 69 posts coletados de 23/29 perfis (6 perfis sem posts nos filtros)
- Scripts de coleta e diagnóstico commitados no GitHub
**Parou em:** Coleta feita. Próximo passo: rodar analyst-agent nos 69 posts para gerar briefing

---

*Atualizado por: Atlas (@analyst) — 2026-03-23*
