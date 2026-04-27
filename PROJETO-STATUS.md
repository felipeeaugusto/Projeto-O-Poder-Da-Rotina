# PROJETO-STATUS — Projeto Dra. Julia Resende
> Caderno vivo do projeto. Todos os agentes devem ler ao ser ativados e atualizar após aprovações.
> Este projeto é MAIOR que a LP. A LP é só uma parte. Leia a seção "Visão Geral do Projeto" antes de qualquer coisa.

---

## Visão Geral do Projeto (leia primeiro — permanente)

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
4. **Squad de Mineração de Conteúdo** — coleta viral dos 30 perfis de referência e gera briefing semanal obrigatório para o julia-chief

---

## PENDENCIAS ATUAIS
> 1 bloco único — sempre sobrescreve o anterior, nunca acumula.

### Prioridade Maxima
0-NOVO. ✅ **Briefing Semana 04 ATIVO** — válido 22/04 a 30/04/2026 (confirmado @analyst em 24/04); julia-chief pode operar normalmente; tema #1 disponível: "Mãe de filho atípico não está sozinha" (score 94, Reel); **próxima ação: scout-agent rodar nova coleta em 01/05** (créditos Apify renovam) → briefing-agent gera 4 briefings de maio de uma vez
0. **URGENTE — Felipe DEVE revogar chave AIzaSyB2ldwoSpGxon--EK75lohgFWnuZzUU1jE** no Google AI Studio (aistudio.google.com → API Keys → revogar) — estava hardcoded no commit c54bab4; GitHub detectou e enviou alerta; fix de código feito (ea77d29), mas a chave continua válida até ser revogada manualmente
0b. **Felipe** — ver e aprovar visualmente bônus 04, 05, 06 PDFs em `squads/dr-julia-resende/output/produtos/pdfs/` — bônus 03 já aprovado; 04/05/06 gerados mas ainda não revisados por Felipe
0c. **@hormozi-audit** — auditar LP v2 completa como unidade holística (copy, oferta, value stack 6 bônus, coerência geral) — Felipe pediu explicitamente após aprovação dos bônus
1. ✅ ~~Felipe gerar fala.mp3~~ — **CONCLUÍDO**: áudio do roteiro v2 gerado pelo Felipe via MiniMax; arquivo salvo como `Seu_filho_no_celular_você_perc_Essence_MiniMax_02_HD_...mp3` (1.3 MB) em `squads/dr-julia-resende/output/reels/2026-04-02/`; commitado na auditoria de 05/04
2. ✅ ~~Felipe decidir sobre animações das cenas 02 e 03~~ — **CONCLUÍDO**: Veo 3.1 Fast usado em todas as 11 cenas; voz gerada no Artlist (ElevenLabs sem créditos); montagem sendo feita no CapCut no PC casa
3. ✅ ~~Felipe gerar clips no Artlist~~ — **CONCLUÍDO**: clip-01 a clip-12 (sem clip-09) gerados por Felipe e salvos na pasta; commitados na auditoria de 05/04; ⚠️ clip-12 é extra (roteiro tem 11 cenas, clip-09 é imagem estática = 10 clips esperados); video-assembly-agent precisa verificar o mapeamento cena↔clip na próxima sessão
4. **Felipe** — finalizar montagem do Reel R01 no CapCut (PC casa) — video-assembly-agent dispensado para este reel; montagem manual com clips Veo 3.1 Fast (11 cenas) + voz Artlist + trilha + legendas
4. **julia-chief → compositor-agent** — criar Post Único ANTES do carrossel-03 — feed não pode ter 2 carrosseis seguidos; julia-chief define formato/pilar/visual via lógica de alternância (JC001–JC003)
5. **publisher-agent** — publicar Post Único (após aprovação do Felipe) → publicar carrossel-03 em sequência (já pronto em `carrossel-03/`, legenda no `publish-config.json`)

### Prioridade Normal
0-REEL. 🎬 **Reel R02 — EM PRODUÇÃO (24/04/2026)** — pipeline conceito-first:
  - ✅ julia-chief: tema "Mãe de filho atípico não está sozinha" (Briefing S04 #1, score 94, pilar EM)
  - ✅ @hormozi-hooks: hook aprovado → "Mãe de filho atípico: você não está sozinha."
  - ✅ script-agent: roteiro conceito-first reescrito e aprovado por Felipe (24/04) — 8 situações reais, Julia narra em off
  - ✅ video-prompt-agent FASE 1: 8 prompts conceito-first gerados (24/04) — sem Julia, sem foto de referência
  - ⏳ **PRÓXIMO: Felipe gera as 8 imagens** (Gemini ou DALL-E, sem upload de foto) → [GATE 1: aprovar visualmente]
  - ⬜ video-prompt-agent FASE 2: 8 prompts de animação Kling [após GATE 1]
  - ⬜ Felipe manual → Kling Artlist + CapCut
  - ⬜ publisher-agent → publicar Instagram + Facebook
1a. ✅ **@aiox-master** — pipeline conceito-first implementado (24/04): script-agent + video-prompt-agent atualizados; Julia nunca aparece visualmente em Reels; voz narra em off; WhatsApp e apps de terceiros proibidos nas cenas
1b. **pdf-agent** — gerar PDF do ebook v2 (`squads/dr-julia-resende/data/ebook_v2.txt`) — mesmo pipeline dos bônus; entregável: `ebook-v2-o-poder-da-rotina.pdf`
1c. **@aiox-master** — salvar criação do pdf-agent no MANUAL.md como Customização — BLOCO 0-E pendente desde a sessão 11/04
2. ✅ ~~**@devops** — reconectar Playwright MCP~~ — **CONCLUÍDO 27/04/2026**: MCP estava conectado e funcional — bloqueio era Edge aberto em paralelo; fechar Edge antes de usar o Playwright resolve; nenhuma mudança de configuração necessária
3. **@dev** — adicionar templates `post-unico` (P01 Manifesto, 1080×1080) e `story` (ST01 Direta, 1080×1920) ao content-generator.js — pipeline julia-chief precisa desses templates para automatizar geração de todos os 3 formatos; interrompido na sessão 31/03
4. **@aiox-master** — atualizar julia-chief.md: handoff `image-agent` → `compositor-agent` — image-agent usa DALL-E (descartado permanentemente); referência errada quebra o pipeline de conteúdo
5. **@aiox-master** — salvar BLOCO 0-Q no MANUAL.md (Customização 32) — rastreabilidade permanente da regra de gate obrigatório do julia-chief
5. **@dev** — reescrever `video-agent.js` — pipeline reformulado: montagem manual (Felipe + JP no CapCut); novo fluxo: Gemini API (imagens) → aprovação Felipe → Artlist Kling 3.0 manual → montagem manual CapCut → approval-agent → publisher-agent; aguarda criação de video-prompt-agent antes de implementar; Vertex AI OK + ElevenLabs OK (ambos já configurados)
5b. ✅ ~~**@aiox-master** — criar video-prompt-agent~~ — **CONCLUÍDO 24/04/2026**: `squads/dr-julia-resende/agents/video-prompt-agent.md` atualizado + slash command existente + registrado em agent-authority.md + fluxo de Reel documentado; Squad Dr. Julia; prompt-only (sem API calls)
5c. ❌ ~~**@aiox-master** — criar video-assembly-agent~~ — **CANCELADO 24/04/2026**: montagem manual feita por Felipe + João Paulo (CapCut) — agente não será criado
5d. ✅ ~~**Felipe** — decidir squad do video-prompt-agent~~ — **RESOLVIDO 24/04/2026**: Squad Dr. Julia
5e. ~~**@aiox-master** — criar video-review-agent~~ — movido para "Pode deixar pra depois" (24/04/2026) — não é prioridade agora; já registrado como item 12
6. **compositor-agent** — criar carrosseis dos Briefings #3 a #5 — completa ciclo do briefing e gera estoque de conteúdo (content-generator.js já pronto — só rodar)
7. ✅ ~~@aiox-master — criar `product-content-agent`~~ — **CONCLUÍDO**: agente criado em `squads/dr-julia-resende/agents/product-content-agent.md` + slash command + registrado no agent-authority.md
8. ✅ ~~product-content-agent — escrever Guia de Implementação 7 Minutos~~ — **CONCLUÍDO**: aprovado por Felipe 06/04/2026 — `squads/dr-julia-resende/output/produto/guia-implementacao-7-minutos.md`
9. ✅ ~~product-content-agent — escrever Desafio 21 Dias~~ — **CONCLUÍDO**: aprovado por Felipe 06/04/2026 — `squads/dr-julia-resende/output/produto/desafio-21-dias.md`
10. **@dev** — corrigir DS.yaml (remover image_tool DALL-E) — consistência da spec visual do projeto
11. ✅ ~~@hormozi-copy — escrever seções de copy da LP~~ — **CONCLUÍDO 06/04/2026**: 4 seções aprovadas por Felipe — Comparação R$10 vs R$27, Antes e Depois, Para Quem É/Não É, Value Stack 6 bônus (R$131 → R$27)
12. ✅ ~~@hormozi-offers — definir estratégia das 2 ofertas (R$10 vs R$27) + composição final dos bônus~~ — **CONCLUÍDO 06/04/2026**: stack final definido — 6 bônus, R$131 percebido → R$27, ratio 4,8x; 3 bônus opcionais excluídos (Agenda, Divisão Tarefas, TDAH); Cardápios e Meditações excluídos por desalinhamento temático
13. ✅ ~~@dev — remover números fabricados do HTML da LP~~ — **CONCLUÍDO 06/04/2026**: 11 referências removidas + data-count corrigidos (15000→7 minutos/dia, 3000→21 dias, 20→6 bônus) — commit 0e6b150
14. ✅ ~~@dev — implementar copy no HTML/CSS~~ — **CONCLUÍDO 06/04/2026**: 4 seções implementadas (antes-depois, para-quem, comparacao, value-stack) + CSS responsivo — LP v2 finalizada — commit 0e6b150

### Pode deixar pra depois
12. **@aiox-master** — criar video-review-agent (Playwright + Ads Paro + Meta Ad Library) — coleta criativos pagos do nicho maternidade/BR para calibrar prompts do Kling; só entra quando João Paulo quiser rodar tráfego pago
13. **@aiox-master** — criar traffic-agent + performance-agent (Meta Ads Manager + métricas de campanha) — necessários para pipeline de tráfego pago completo; futuro
14. **@dev** — corrigir links quebrados no footer (Política de Privacidade e Termos de Uso) — credibilidade legal da LP
13. **@dev** — adicionar selos de segurança visuais próximos aos CTAs — aumenta confiança do visitante
14. **@hormozi-offers** — criar Grand Slam Offer do ebook via wf-grand-slam-offer — maximiza valor percebido e justifica preço
15. **publisher-agent** — configurar Meta Graph API + posting automático — elimina publicação manual
16. **Felipe** — renovar token Instagram antes de 2026-05-22 — manutenção preventiva
17. **@dev/@devops** — integrar n8n — orquestrador de automação 24/7 para todo o pipeline
18. **@dev/@devops** — integrar ClickUp — dashboard de acompanhamento do projeto
19. **@dev** — schedule-optimizer — ajustar horários de publicação com base em performance real dos posts
20. **@aiox-master** — adicionar Biblioteca de Anúncios do Facebook ao scout-agent como segunda fonte de dados (modificação de definição de agente)
21. **Felipe** — domínio próprio (ex: poderdarotina.com.br) — aguardar João Paulo
22. **@dev** — verificar Pixel disparando no Facebook Events Manager — confirmação de rastreamento
23. **@dev** — testes mobile na LP — verificar em celular real
24. **@aiox-master** — criar estrutura C-Suite de agentes IA (CEO, CMO, COO, CFO, CTO, CPO, CGO)
25. **@aiox-master** — criar @cpo-agent — monitora tendências do nicho e sugere novos produtos semanalmente
26. **@devops/@dev** — Obsidian como segundo cérebro do projeto
27. **@dev** — dashboard proprietário de métricas ao vivo
28. **@dev** — brandbook estratégico e visual

---

## ULTIMAS 3 SESSOES
> Rotativo — ao adicionar nova sessão, mover a mais antiga para HISTORICO-SESSOES.md.

### SESSAO — 24/04/2026

**O QUE FOI FEITO:**
- script-agent atualizado para formato conceito-first — Julia NUNCA aparece visualmente em Reels; voz narra em off; WhatsApp e qualquer UI de app de terceiros proibidos nas descrições de cena; veto automático para descrições genéricas
- video-prompt-agent atualizado — VP001 reescrito: proibido mencionar Julia, usar foto de referência, descrever poses dela; cada prompt descreve APENAS a situação visual da cena (objetos, ambiente, pessoas anônimas); `foto_referencia` removido da seção de input
- roteiro-R02.md reescrito em formato conceito-first — 8 situações reais do universo de mãe de filho atípico (agenda com consultas, beira da cama do filho à noite, pia do banheiro, mochila escolar, sala de espera, xícara de café fria, mãe e filho no chão rindo, mãos com celular); Julia narra em off; commitado
- 8 prompts de imagem conceito-first gerados (FASE 1) — sem Julia, sem foto de referência, pilar EM (luz quente, bokeh, íntimo); aguardando GATE 1 (Felipe gera as imagens)
- video-assembly-agent cancelado permanentemente — montagem manual pelo Felipe + João Paulo no CapCut
- Decisão registrada: formato talking head descartado permanentemente — conceito-first é o padrão de todos os Reels daqui em diante
- Diagnóstico da causa raiz: VP001 original gerava descrição textual de mulher brasileira (não Julia) — IA gerava mulher genérica; novo VP001 elimina o problema proibindo Julia no visual

**O QUE O FELIPE PEDIU:**
- Continuar de onde parou após API Error 400 "Could not process image"
- Explicação do formato conceito-first antes de implementar
- Redesenhar roteiro R02 no formato conceito-first e apagar talking head do script-agent definitivamente
- Nunca incluir WhatsApp em nenhuma cena dos agentes
- Entender por que as imagens pareciam "sessão de fotos da Dr. Julia mudando expressões"
- Atualizar script-agent, video-prompt-agent e VP001 para o novo formato
- Confirmar que o problema de "mulher genérica" (Julia vs imagem gerada) foi resolvido

**PAROU EM:** 8 prompts conceito-first entregues; GATE 1 aguardando Felipe gerar as imagens (Gemini ou DALL-E, sem upload de foto) | Agente ativo: aiox-master

---

### SESSAO — 23/04/2026

**O QUE FOI FEITO:**
- script-agent identificado como responsável pelo roteiro de Reel — fala de 8 cenas sincronizadas + legenda + texto contínuo para ElevenLabs TTS + prompt de trilha sonora
- Clarificação de arquitetura: script-agent (fala), video-prompt-agent (prompts visuais Gemini + Kling), video-assembly-agent (montagem FFmpeg) são 3 agentes distintos com responsabilidades separadas — não é o mesmo agente
- Pipeline completo de Reel mapeado pelo @aiox-master: julia-chief (lê briefing + decide tema/pilar/grade) → @hormozi-hooks (hook 5s) → script-agent (roteiro 8 cenas) → video-prompt-agent Fase 1 (8 prompts de imagem + Gate 1 Felipe) → video-prompt-agent Fase 2 (prompts animação Kling + Gate 2 Felipe) → Felipe manual (Kling Artlist) → video-assembly-agent → approval-agent → publisher-agent
- Identificado: briefings de abril/2026 (gerados 02/04) podem estar próximos do limite (23/04); adicionado às pendências de Prioridade Máxima como pré-requisito para criação de Reels

**O QUE O FELIPE PEDIU:**
- Saber quem é o agente responsável pelo roteiro do Reel para postar nos canais da Julia
- Entender se script-agent é o video-prompt-agent + video-assembly-agent juntos (respondido: são 3 agentes distintos)
- Passo a passo do processo de criação de Reel até os prompts de imagem

**PAROU EM:** pipeline de Reel mapeado; verificar status dos briefings de abril antes de criar Reel via julia-chief | Agente ativo: aiox-master

---

### SESSAO — 16/04/2026

**O QUE FOI FEITO:**
- Análise visual do @sambaskincare via Playwright — 15 screenshots capturados (feed, 3 carrosseis completos, 2 posts de produto); referências salvas em `.playwright-mcp/samba*.png`
- Relatório visual entregue: paleta de cores (laranja #E8622A, azul claro #B3D9E8, roxo #9B7FB6, rosa #F5D0D0, amarelo #F5C842); tipografia bold extralarge nas capas; estrutura de carrossel: capa lifestyle + slides informativos fundo sólido colorido + solução + CTA
- Diagnóstico estratégico identificado: conteúdo atual da Dra. Julia é template-first (molde → conteúdo encaixado); @sambaskincare é conceito-first (ideia criativa → execução segue a ideia); esse gap é a causa do nível visual inferior
- Insight validado: AI gera imagem base fotorrealista sem texto → texto entra por cima via HTML/CSS + Playwright já existente — não é DALL-E; ferramenta a definir pelo @aiox-master
- cena-033.png e 15 screenshots @sambaskincare commitados — arquivos que estavam untracked desde sessões anteriores

**O QUE O FELIPE PEDIU:**
- Criar conteúdo para @drjuliaresende com estética/formato inspirado no @sambaskincare
- Análise visual completa do @sambaskincare antes de criar qualquer conteúdo
- Nível profissional de conteúdo equivalente ao @sambaskincare — não apenas inspirado
- Criatividade real: não fórmula produto/pessoa alternados; cada post é uma ideia criativa diferente
- Metodologia Sobral aplicada: salvar o que admira como referência, criar com intenção criativa, não com template fixo
- Auditoria profunda da sessão antes de fechar o PC

**PAROU EM:** diagnóstico estratégico de criação de conteúdo entregue; screenshots @sambaskincare commitados; próximo: @aiox-master redesenhar pipeline de criação visual (conceito-first + AI imagem base + texto Playwright) | Agente ativo: analyst

---

---

## DECISOES IMPORTANTES
> Permanente — apenas o que nunca pode ser esquecido.

| Decisão | Valor |
|--------|-------|
| Cor principal | #03bb85 (verde) |
| Produto | Ebook "O Poder da Rotina" — R$27 (Eduzz) |
| Foto hero | Julia segurando o ebook (09.png) |
| Preços | R$10 e R$27 via Eduzz |
| Meta Pixel ID | 32651609107818251 |
| Servidor local | npx serve . -p 3000 |
| Ferramenta de imagem | DALL-E DESCARTADO para tudo — HTML/CSS + Playwright e a UNICA ferramenta visual |
| Compositor de posts | HTML/CSS + Playwright -> PNG 1080x1080 |
| DS.yaml | squads/dr-julia-resende/data/DR-JULIA-RESENDE-DS.yaml v4.0 |
| Estilos visuais aprovados | S01, S03, S04 (carrossel) + P01 Manifesto (post) + ST01 Direta (story) |
| P02 Social Proof | DESCARTADO PERMANENTEMENTE — nao retomar |
| "15.000 maes" | PROIBIDO em qualquer anúncio, criativo ou LP — número fabricado |
| Fluxo de ads | @hormozi-hooks + @hormozi-ads + @hormozi-copy + compositor-agent |
| Criativos de ads | 15 PNGs em squads/dr-julia-resende/criativos-ads/ — aprovados para primeiro teste |
| Briefing semanal | OBRIGATORIO para julia-chief — sem briefing, julia-chief nao opera (heurística JC007) |
| Apify | Token configurado — mineração mensal no 1o de cada mes (créditos renovam), 50 posts/perfil |
| Estratégia Apify free | 1 coleta mensal no 1o de cada mês (50 posts/perfil × 30 perfis) → briefing-agent gera 4 briefings semanais de uma vez sem repetição de temas — cobre o mês inteiro. Confirmado: Opção A. Não pagar Apify. |
| Value Stack LP (06/04/2026) | 6 bônus no pacote R$27: Guia 7 Min (R$17) + Desafio 21 Dias (R$27) + Checklist Rotina (R$9) + Guia Conexão 10 Min (R$17) + 30 Atividades (R$17) + Guia Disciplina Positiva (R$17) = R$131 percebido → R$27 (ratio 4,8x). Excluídos: Cardápios, Meditações, Agenda, Divisão Tarefas, Rotinas TDAH. |
| Cloudinary | dvxe4ijzt — upload temporário para URL publica (~5s) — bug de assinatura corrigido (resource_type não entra na assinatura) |
| Vertex AI | Substituiu AI Studio para geração de vídeo — endpoint `us-central1-aiplatform.googleapis.com`, modelo `veo-3.0-generate-001`, Service Account em `config/vertex-ai-key.json`, projeto `gen-lang-client-0541444185`; suporta image input + lip-sync (AI Studio não suportava) |
| ElevenLabs | Plano Creator — 100k créditos/mês; desbloqueado em 31/03/2026 |
| Token Instagram | Valido — expira ~2026-05-22 (renovar antes) |
| Token Facebook Page | Renovado 2026-03-21 |
| publisher-secrets.yaml | Gitignored — Felipe sincroniza via Google Drive entre PCs |
| Proxima mineração | 01/04/2026 (créditos Apify renovam no 1o de cada mes) |
| Pipeline Reels — aprovação | Felipe aprova PROMPTS (imagem + animação) antes do Kling rodar — não clips depois; garante eficiência dos 120k créditos Artlist |
| Pipeline Reels — fluxo final (24/04/2026) | julia-chief → @hormozi-hooks → script-agent → video-prompt-agent [GATE 1 imagem] → [GATE 2 animação] → Felipe manual Kling/CapCut → publisher-agent. SEM approval-agent (montagem manual = aprovação implícita). SEM video-assembly-agent (CANCELADO). |
| video-prompt-agent | Squad Dr. Julia — gerador de PROMPTS DE TEXTO apenas (8 imagem + 8 animação Kling); NÃO chama API; Felipe escolhe a ferramenta (Gemini ou DALL-E) na hora |
| Ads Paro | Plataforma paga do João Paulo — pesquisa criativos Meta Ads ativos de qualquer nicho; fonte primária para video-review-agent além dos 30 perfis Instagram |
| Playwright MCP | Instalado em ~/.claude.json — msedge + perfil real do Edge; reiniciar Claude Code para ativar; fechar Edge antes de usar |
| *waves | Usar sempre que houver stories paralelas |
| Squad de Mineracao | 5 agentes em squads/dr-julia-resende/agents/: scout, analyst-mineracao, briefing, compositor, publisher |
| Squad Hormozi | 15 agentes em squads/hormozi/ — metodologia Alex Hormozi completa |
| Formato de Reel — conceito-first (24/04/2026) | Julia NÃO aparece visualmente em Reels. Voz dela narra em off (ElevenLabs). Visual mostra situações reais do universo do público-alvo (mães, filhos, objetos, ambientes). Talking head DESCARTADO permanentemente. |
| Foto de referência Julia (video-prompt-agent) | NÃO usar em Reels — Julia não aparece. Foto existe em packages/landing-page-dr-julia/assets/images/dr-julia-oficial.jpeg mas só para outros usos (LP, posts estáticos). |

---

## REFERENCIA — O Que Ja Foi Feito

- Hero Section, favicon, imagem WebP, Meta Pixel, links Eduzz — LP funcional e online
- DS.yaml v4.0 com 5 estilos aprovados (S01, S03, S04, P01, ST01)
- Carrossel-01 e Carrossel-02 publicados
- post-01/02.png, story-01/02.png aprovados 2026-03-24
- Squad de Mineracao completo — 1a coleta feita (69 posts, 23/29 perfis)
- Briefing semanal 2026-03-23 gerado — top 5 oportunidades
- Squad Hormozi integrado — 246 arquivos, 15 agentes, 9 workflows
- 15 criativos de ads gerados — 5 angulos x 3 formatos
- Logo e capa Facebook uploadadas por Felipe

---

## REFERENCIA — LP

- URL: https://projeto-o-poder-da-rotina.vercel.app/
- Pasta: packages/landing-page-dr-julia/
- GitHub: https://github.com/felipeeaugusto/Projeto-O-Poder-Da-Rotina
- Servidor local: npx serve . -p 3000

---

Atualizado por: Orion (@aiox-master) — 2026-03-27 (Customizacao 16)
