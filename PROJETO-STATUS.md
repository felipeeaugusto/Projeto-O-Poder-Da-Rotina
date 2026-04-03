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
1. **julia-chief** — ativar com briefing-semana-01-abril-2026.md para definir o primeiro Reel de abril: formato/pilar/visual/posição na grade — BLOCO 0-Q: obrigatório antes de qualquer geração de conteúdo
2. **julia-chief → compositor-agent** — criar Post Único ANTES do carrossel-03 — feed não pode ter 2 carrosseis seguidos; julia-chief define formato/pilar/visual via lógica de alternância (JC001–JC003)
3. **publisher-agent** — publicar Post Único (após aprovação do Felipe) → publicar carrossel-03 em sequência (já pronto em `carrossel-03/`, legenda no `publish-config.json`)

### Prioridade Normal
2. **@devops** — reconectar Playwright MCP (desconectou após erro da sessão 02/04 — processo Node.js do MCP foi encerrado acidentalmente; necessário para todas as sessões futuras com Playwright)
3. **@dev** — adicionar templates `post-unico` (P01 Manifesto, 1080×1080) e `story` (ST01 Direta, 1080×1920) ao content-generator.js — pipeline julia-chief precisa desses templates para automatizar geração de todos os 3 formatos; interrompido na sessão 31/03
4. **@aiox-master** — atualizar julia-chief.md: handoff `image-agent` → `compositor-agent` — image-agent usa DALL-E (descartado permanentemente); referência errada quebra o pipeline de conteúdo
5. **@aiox-master** — salvar BLOCO 0-Q no MANUAL.md (Customização 32) — rastreabilidade permanente da regra de gate obrigatório do julia-chief
5. **@dev** — reescrever `video-agent.js` — pipeline reformulado: SyncLabs descartado (sem orçamento); novo fluxo: Gemini API (imagens) → aprovação Felipe → Artlist Kling 3.0 manual (único passo manual) → FFmpeg assembly automatizado → approval-agent → publisher-agent; aguarda criação de video-prompt-agent e video-assembly-agent antes de implementar; Vertex AI OK + ElevenLabs OK (ambos já configurados)
5b. **@aiox-master** — criar video-prompt-agent — gera 8 prompts de imagem (Gemini API) + 8 prompts de animação com nome de arquivo de cada imagem aprovada; squad a definir (Dr. Julia ou Hormozi?)
5c. **@aiox-master** — criar video-assembly-agent — FFmpeg: concatena 8 clips animados + trilha ElevenLabs + voz Julia (ID `bMQVOFw0g6ACPbiM5XqE`) + legendas sincronizadas → MP4 9:16 → approval-agent → publisher-agent
5d. **Felipe** — decidir squad do video-prompt-agent: Dr. Julia ou Hormozi? — define onde o agente será criado e qual squad gerencia o pipeline de Reels
5e. **@aiox-master** — criar video-review-agent — analisa Reels de referência via Gemini API, extrai padrões visuais (timing, corte, movimento, ritmo) que calibram os prompts do video-prompt-agent; fontes: Apify (30 perfis Instagram) + Ads Paro
6. **compositor-agent** — criar carrosseis dos Briefings #3 a #5 — completa ciclo do briefing e gera estoque de conteúdo (content-generator.js já pronto — só rodar)
7. **@aiox-master** — criar `product-content-agent` no squad dr-julia-resende — agente necessário para escrever o Guia 7 Minutos e o Desafio 21 Dias (conteúdo que alinha o ebook com o que a LP promete)
8. **product-content-agent** — escrever Guia de Implementação 7 Minutos — documento novo do combo do ebook, prescrito pelo @hormozi-audit para corrigir mismatch ebook/LP
9. **product-content-agent** — escrever Desafio 21 Dias — documento novo do combo do ebook, prescrito pelo @hormozi-audit para corrigir mismatch ebook/LP
10. **@dev** — corrigir DS.yaml (remover image_tool DALL-E) — consistência da spec visual do projeto
11. **@hormozi-copy** — escrever seções "Antes e Depois", "Para Quem E / Nao E", Value Stack dos bônus — aumenta conversão da LP diretamente
12. **@hormozi-offers** — definir estratégia das 2 ofertas (R$10 vs R$27 na mesma página) — clareza na proposta de valor ao visitante
13. **@dev** — remover números fabricados do HTML da LP (Harvard, USP, "15.000 mães", "3.000 famílias", "20 anos de pesquisa") — esses números foram inventados e estão proibidos pelo caderno; manter compromete a credibilidade do projeto
14. **@dev** — implementar copy no HTML/CSS após aprovação — finaliza versão 2 da LP

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

### SESSAO — 02/04/2026

**O QUE FOI FEITO:**
- Ads Paro explorado completamente via Playwright — filtros mapeados: Categories (22 nichos), Media (Video/Image), Country, Sort By (Date found/Last seen/Ads Number), Platform (e-commerce: Shopify/ShopBase/etc), Pixels, Total ads (1-1000); seções: Trending=Hot Ads, Ad Library, Saved Ads
- URLs de vídeo do Ads Paro confirmadas como diretas — DigitalOcean Spaces (.mp4 assinado 8h), baixáveis sem bloqueio
- Desafio 1 RESOLVIDO — Meta Ad Library: vídeos são baixáveis diretamente via `.src` do elemento `<video>` (fbcdn.net CDN); script capturou 28 URLs .mp4 em 1 carregamento sem nenhum bloqueio
- Desafio 2 PARCIAL — Meta Ad Library não aceita ordenação por data via URL (`sort_data[mode]=creation_time` ignorado); solução: extrair campo "Iniciou a exibição em" de cada card e ordenar por data mais antiga
- Nano Banana Pro identificado — Google DeepMind Gemini 3 Pro Image: 4K, texto legível em PT, consistência de personagem, integração nativa com Veo 3.1; modelo correto para geração de imagens do pipeline de Reels
- Clareza estratégica definida — Ads Paro = tráfego pago (quando João Paulo quiser rodar ads); Mineração Apify = conteúdo orgânico (pipeline já existente)
- Pipeline completo de tráfego pago mapeado: Ads Paro → Meta Ad Library (longevidade) → Gemini analisa → @hormozi-ads → video-prompt-agent → Nano Banana Pro/Kling → traffic-agent → performance-agent
- ⚠️ Playwright MCP desconectado por erro do agente (processo Node.js encerrado acidentalmente); solução temporária: script Node.js direto rodou Playwright sem MCP
- apify-scraper.js criado em squads/dr-julia-resende/assets/ — resolve dependência técnica do scout-agent para Apify sem MCP; lê perfis dinamicamente do YAML; implementa SC001-SC004
- publisher-secrets.yaml atualizado — Apify token conta 2 (apify_api_9EHpR...) substituiu conta 1 (limite mensal excedido em 02/04)
- coleta-2026-04-02.json gerado e commitado — 1054 posts brutos, 65 duplicados removidos, 320 posts filtrados, 26/29 perfis, run_id jbntAbmhEcsFls1DG — coleta mensal abril/2026 CONCLUÍDA
- .mcp.json criado — Apify MCP configurado via npx @apify/actors-mcp-server para futuras sessões; .gitignore atualizado com .mcp.json
- Pendência #1 CONCLUÍDA — coleta mensal de abril/2026 executada pelo scout-agent; desbloqueado para briefing-agent gerar 4 briefings semanais

**O QUE O FELIPE PEDIU:**
- Explorar Ads Paro por inteiro via Playwright
- Entender se vídeos da Meta Ad Library são baixáveis (respondido: sim, diretamente)
- Pesquisar o modelo "Nano Banana Pro" (respondido: Gemini 3 Pro Image do Google DeepMind)
- Mapear pipeline completo que o patrão descreveu (Ads Paro → Meta Ad Library → análise → criativos)
- Testar os 2 desafios técnicos da Meta Ad Library (testado: ambos resolvidos/mapeados)
- Clareza sobre Ads Paro: para Ads ou conteúdo? (respondido: para Ads; orgânico usa mineração)
- Resolver problema do docker-gateway MCP não disponível nesta sessão (resolvido: apify-scraper.js via REST API)
- Executar coleta mensal de abril/2026 (concluído: 320 posts, 26/29 perfis)
- Qual próximo passo para criação do Reel? (respondido: analyst-agent-mineracao → briefing-agent → julia-chief → pipeline de vídeo)

- run-analyst-mineracao.js criado em squads/dr-julia-resende/assets/ — implementa Método Subido de Mineração 1.0 completo com heurísticas AN001-AN004; lê coleta-2026-04-02.json e gera analise-2026-04-02.json
- analise-2026-04-02.json gerado — 320 posts processados, 0 erros; top ângulos: baixa_relevância(224), organização_do_lar(31), maternidade_real(25), rotina_familiar(19); top gatilhos: curiosidade(167), urgência(76)
- 4 briefings semanais de abril/2026 gerados (20 temas únicos sem repetição, BR004+BR005 ✅):
  - briefing-semana-01-abril-2026.md (01–07/04) — Telas cérebro / Energia gestação / Autoridade×autoritarismo / Valorizar presente / Rotina autocuidado
  - briefing-semana-02-abril-2026.md (08–14/04) — Mãe que se abandonou / Escola+transtorno / Vitamina desconhecida / Mães fazem / Autismo
  - briefing-semana-03-abril-2026.md (15–21/04) — Pré-diabetes silencioso / Mãe cuidadora / Humor margarina / GLP-1 / Pai e parenting
  - briefing-semana-04-abril-2026.md (22–30/04) — Filho atípico / Tabela telas / Saúde como investimento / 2 anos jornada / 3 hábitos simples
- Pipeline de mineração abril/2026 CONCLUÍDO: scout-agent ✅ → analyst-agent-mineracao ✅ → briefing-agent ✅

**PAROU EM:** Pipeline de mineração abril/2026 concluído. Próximo: julia-chief com briefing-semana-01-abril-2026.md para definir 1º Reel | Agente ativo: aiox-master

---

### SESSAO — 01/04/2026

**O QUE FOI FEITO:**
- Tabela de créditos Artlist mapeada — Veo 3.1 (1200c/8s, 4K + áudio), Veo 3.1 Fast (700c/8s), Kling 3.0/03 (1050c/15s, 1080p + áudio), Edição Kling 03 (1800c/10s), Controle Movimento Kling 3.0 (2100c/30s)
- SyncLabs e HeyGen descartados definitivamente — sem orçamento; pipeline de Reels reformulado
- Kling 3.0/03 identificado como modelo mais eficiente: 70 créditos/segundo, 4 clips × 15s = 60s, ~28 vídeos completos/mês com 120k créditos do Artlist
- Novo pipeline de Reels mapeado: Gemini API (imagens automáticas) → aprovação Felipe → prompts animação (agente) → Artlist Kling manual (único passo manual) → FFmpeg assembly automatizado → approval-agent + Felipe → publisher-agent
- FFmpeg identificado como substituto gratuito do CapCut API: concatena clips + trilha ElevenLabs + voz Julia + legendas sincronizadas → sem custo extra
- 2 novos agentes necessários mapeados: video-prompt-agent (prompts imagem + animação) e video-assembly-agent (montagem FFmpeg)
- Decisão arquitetural do pipeline de Reels: Felipe aprova prompts ANTES do Kling rodar (não clips depois) — garante eficiência dos 120k créditos Artlist; toda a inteligência fica na fase de prompt
- video-review-agent identificado: analisa Reels de referência via Gemini para extrair padrões visuais → calibra prompts do video-prompt-agent → Kling acerta na 1ª tentativa
- Ads Paro identificado como fonte primária de criativos de referência (plataforma do João Paulo — criativos Meta Ads ativos de qualquer nicho); além dos 30 perfis do Instagram
- Playwright MCP instalado em ~/.claude.json — msedge + perfil real do Edge (C:\Users\Felipe Augusto\AppData\Local\Microsoft\Edge\User Data); reiniciar Claude Code para ativar

**O QUE O FELIPE PEDIU:**
- Analisar se existe agente que consegue assistir vídeo — respondido: não existe nativamente; Gemini API (já configurada) consegue via upload
- Análise de Reels de referência para calibrar prompts (não revisão de clips gerados)
- Explicação de como a Ads Paro se encaixa no pipeline de referências
- Acesso à Ads Paro via Playwright — MCP não estava instalado; @devops instalou
- Playwright MCP configurado com perfil real do Edge (login salvo)
- Alternativa ao SyncLabs/HeyGen (sem orçamento no momento)
- Aproveitar 120k créditos/mês do Artlist (pago até novembro 2026)
- Pipeline com única etapa manual: rodar prompts de animação no Artlist
- Aprovação do Felipe + approval-agent antes de publicar qualquer Reel
- Imagens automatizadas via Gemini API (Nano Banana 2 Pro)
- ElevenLabs para voz Julia + trilha sonora; legendas sincronizadas com a fala no vídeo final

**PAROU EM:** Playwright MCP instalado — fechar Edge + reiniciar Claude Code → @analyst acessa Ads Paro e estuda a plataforma para mapear integração com pipeline de Reels | Agente ativo: analyst

---

### SESSAO — 31/03/2026

**O QUE FOI FEITO:**
- safe zone Instagram aplicada ao content-generator.js — padding esquerdo 110px→160px, direito 90px→130px, dots e handle ajustados; previne corte de texto no grid do Instagram
- carrossel-03: 5 PNGs re-gerados com safe zone correta — slide-01.png "Ter filho é lindo." agora aparece completo, sem corte
- copy-agent escreveu legenda para carrossel-03 — campo caption preenchido em publish-config.json seguindo Voice DNA da Dra. Julia
- BLOCO 0-Q implementado (Customização 32) — gate obrigatório: nenhum conteúdo para @drjuliaresende pode ser gerado sem julia-chief ter sido ativado primeiro e definido formato/pilar/visual/grade
- JC008 adicionado ao julia-chief.md — obriga leitura do content-state.json antes de decidir formato; enforcement da regra de alternância carrossel→post-único
- JC009 adicionado ao julia-chief.md — approval gate com preview visual obrigatório antes de qualquer publicação
- content-state.json criado em squads/dr-julia-resende/data/ — rastreia último formato publicado, posição no ciclo, fila de publicação; source of truth para julia-chief
- video-agent.js criado (704 linhas, commit e2ae474) — script Node.js completo: ElevenLabs TTS → Cloudinary (URL pública) → Google Veo3 → download MP4 9:16; dry-run confirmado para R01, R02, R04
- Bug YAML parser corrigido no video-agent.js — regex `[a-zA-Z_]+` não capturava GOOGLE_VEO3_API_KEY (dígito "3"); corrigido para `[a-zA-Z_][a-zA-Z0-9_]*`
- ElevenLabs quota esgotada descoberta — chave sk_c71167d... tinha apenas 20 créditos; resolvido na mesma sessão (créditos do plano Creator 100k/mês restaurados)
- Google Veo3 via AI Studio descartado — requer whitelist + não suporta audio_uri nem image input; substituído por Vertex AI
- Artlist pesquisado como alternativa — API developer.artlist.io cobre apenas música; ferramentas de IA (TTS, vídeo) são web-only sem API pública
- Cloudinary bug corrigido no video-agent.js — `resource_type` removido dos parâmetros de assinatura; Cloudinary assina apenas `timestamp`; upload confirmado funcionando (URL pública gerada)
- ElevenLabs desbloqueado — plano Creator confirmado: 100k créditos/mês; bloqueio de produção resolvido
- Vertex AI setup completo — `vertex-ai-key.json` salvo em `squads/dr-julia-resende/config/`; Service Account `video-agent@gen-lang-client-0541444185.iam.gserviceaccount.com`; Vertex AI API ativada; autenticação JWT→Bearer token confirmada funcionando
- Vídeo de teste Vertex AI Veo3 gerado — `squads/dr-julia-resende/output/videos/teste-julia-vertex-2026-03-31.mp4` (3.935 KB, 8s, 9:16) com foto da Dra. Julia como referência; pipeline image-to-video funcional; lip-sync possível via Vertex AI
- CLAUDE.md reestruturado — 61.3k → 47.5k chars; BLOCO 0-Q movido para `squads/dr-julia-resende/CLAUDE.md`; seções AIOX-managed removidas; commit `refactor: CLAUDE.md 61k→47k`

- @dev investigou API Vertex AI Veo3 — encontrou 3 bugs no request de teste: (1) campo `image` errado → usar `referenceImages[0]` com `referenceType: "asset"`; (2) `durationSeconds: 8` (number) → deve ser `"8"` (string); (3) aspectRatio ignorado por consequência do bug 1
- Confirmado: Veo3 NÃO tem parâmetro audioUrl/audio_uri para lip-sync — gera próprio áudio com `generateAudio: true`
- SyncLabs (sync.so) identificado como solução para lip-sync frame-perfeito — API REST, ~$3/vídeo de 59s (modelo lipsync-2), SDK Node.js oficial
- ElevenLabs e SyncLabs são empresas separadas — ElevenLabs não adquiriu o SyncLabs
- veo-3.0-generate-001 será removido em 30/06/2026 — modelo atual é veo-3.1-generate-001
- Pipeline completo mapeado: ElevenLabs MP3 → Veo3 clips (8×8s) → FFmpeg (concatenar) → SyncLabs (lip-sync) → MP4 final 9:16
- Duas decisões pendentes de Felipe antes de @dev reescrever video-agent.js: (1) usar SyncLabs ou FFmpeg simples? (2) migrar para veo-3.1 agora ou depois?

**O QUE O FELIPE PEDIU:**
- Re-gerar slides do carrossel-03 com safe zone correta (texto estava cortado no grid)
- Legenda aprovada para carrossel-03
- Solução definitiva para que 2 carrosseis seguidos nunca mais aconteçam no feed
- Explicação da mensagem "Large CLAUDE.md will impact performance"
- Explicação detalhada dos 4 roteiros (duração, falas, créditos por plataforma, trilha sonora)
- Pesquisa se Artlist tem API (120K créditos/mês) para substituir ElevenLabs + Veo3
- Verificar plano ElevenLabs via Playwright — confirmado Creator plan 100k créditos/mês
- Configurar Vertex AI para substituir AI Studio (foto da Julia como referência de vídeo com lip-sync)
- Reduzir CLAUDE.md via estrutura hierárquica para resolver lentidão e compactação frequente
- Investigar se Veo3 aceita audioUrl para lip-sync real (respondido: não aceita)
- Investigar bugs no vídeo de teste (6s, quadrado, fundo branco) — respondido: 3 bugs encontrados
- Explicar o que é FFmpeg
- Explicar como funciona o sync.so passo a passo
- Verificar se ElevenLabs tem o SyncLabs integrado (respondido: são empresas separadas)

**PAROU EM:** aguardando 2 decisões de Felipe (SyncLabs sim/não + Veo3.1 agora/depois) para @dev reescrever video-agent.js | Agente ativo: aiox-master

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
| Cloudinary | dvxe4ijzt — upload temporário para URL publica (~5s) — bug de assinatura corrigido (resource_type não entra na assinatura) |
| Vertex AI | Substituiu AI Studio para geração de vídeo — endpoint `us-central1-aiplatform.googleapis.com`, modelo `veo-3.0-generate-001`, Service Account em `config/vertex-ai-key.json`, projeto `gen-lang-client-0541444185`; suporta image input + lip-sync (AI Studio não suportava) |
| ElevenLabs | Plano Creator — 100k créditos/mês; desbloqueado em 31/03/2026 |
| Token Instagram | Valido — expira ~2026-05-22 (renovar antes) |
| Token Facebook Page | Renovado 2026-03-21 |
| publisher-secrets.yaml | Gitignored — Felipe sincroniza via Google Drive entre PCs |
| Proxima mineração | 01/04/2026 (créditos Apify renovam no 1o de cada mes) |
| Pipeline Reels — aprovação | Felipe aprova PROMPTS (imagem + animação) antes do Kling rodar — não clips depois; garante eficiência dos 120k créditos Artlist |
| Ads Paro | Plataforma paga do João Paulo — pesquisa criativos Meta Ads ativos de qualquer nicho; fonte primária para video-review-agent além dos 30 perfis Instagram |
| Playwright MCP | Instalado em ~/.claude.json — msedge + perfil real do Edge; reiniciar Claude Code para ativar; fechar Edge antes de usar |
| *waves | Usar sempre que houver stories paralelas |
| Squad de Mineracao | 5 agentes em squads/dr-julia-resende/agents/: scout, analyst-mineracao, briefing, compositor, publisher |
| Squad Hormozi | 15 agentes em squads/hormozi/ — metodologia Alex Hormozi completa |

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
