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
0. **URGENTE — Felipe DEVE revogar chave AIzaSyB2ldwoSpGxon--EK75lohgFWnuZzUU1jE** no Google AI Studio (aistudio.google.com → API Keys → revogar) — estava hardcoded no commit c54bab4; GitHub detectou e enviou alerta; fix de código feito (ea77d29), mas a chave continua válida até ser revogada manualmente
1. **Felipe** — gerar fala.mp3 no site ElevenLabs (elevenlabs.io → Speech Synthesis → voz Dra. Julia) e salvar em `squads/dr-julia-resende/output/reels/2026-04-02/fala.mp3` — texto entregue pelo script-agent (roteiro v2 fluido); cota da chave API esgotada (372 créditos restantes vs 491 necessários)
2. **Felipe** — decidir sobre animações das cenas 02 e 03 (Veo 3.1 Fast anima os sujeitos independente do prompt para rostos expressivos): opções: (A) Kling 3.0, (B) aceitar movimento sutil, (C) trocar as imagens
3. **Felipe** — gerar clips no Artlist Veo 3.1 Fast usando prompts "Camera slowly zooms in..." do `prompts-animacao-v2.md`; salvar como clip-01.mp4 a clip-11.mp4 (skip clip-09 — imagem estática) em `squads/dr-julia-resende/output/reels/2026-04-02/`; aguarda decisão sobre cenas 02/03 primeiro
4. **julia-chief → compositor-agent** — criar Post Único ANTES do carrossel-03 — feed não pode ter 2 carrosseis seguidos; julia-chief define formato/pilar/visual via lógica de alternância (JC001–JC003)
5. **publisher-agent** — publicar Post Único (após aprovação do Felipe) → publicar carrossel-03 em sequência (já pronto em `carrossel-03/`, legenda no `publish-config.json`)

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

### SESSAO — 04/04/2026

**O QUE FOI FEITO:**
- script-agent finalizou roteiro v2 com estrutura dual audio+legenda — 11 cenas × 4s, cada cena tem fala (o que Julia diz) e legenda (texto diferente e complementar na tela); aprovado por Felipe
- 3 novas imagens geradas no Nano Banana Pro pelo Felipe: cena-05 (mãe pesquisando no celular), cena-06 (criança dormindo agitada), cena-07 (mãe determinada atrás do sofá com filho sorrindo)
- Imagens reorganizadas de 8 para 11 cenas — cena-01 a cena-04 inalteradas; cena-05/06/07 NOVAS; cena-08 a cena-11 = antigas cena-05 a cena-08 renomeadas; nomes finais aprovados por Felipe
- prompts-animacao-v2.md gerado em `squads/dr-julia-resende/output/reels/2026-04-02/` — estrutura "Camera slowly zooms in..." para todas as 11 cenas no Veo 3.1 Fast; cena-09 (infográfico OMS) marcada como imagem estática sem clip
- Veo 3.1 Fast testado extensivamente — descoberta crítica: modelo anima sujeitos independente do prompt para rostos expressivos; estruturas testadas: Ken Burns, cinematográfico, "Camera slowly zooms in"; melhor resultado = "Camera slowly zooms in..." mas sujeitos ainda se movem em cenas expressivas (02/03)
- Roteiro v2 reescrito pelo script-agent — fala contínua e fluida com reticências/conectivos no estilo storytelling ChatGPT; arco Dor→Consequência→Virada→Solução→CTA; aprovado por Felipe
- generate-tts-continuo.js criado em `squads/dr-julia-resende/assets/` — geração de fala.mp3 contínuo via ElevenLabs; FALHOU por cota esgotada (372 créditos restantes vs 491 necessários)
- Texto completo do roteiro v2 entregue ao Felipe para gerar fala.mp3 manualmente no site ElevenLabs

**O QUE O FELIPE PEDIU:**
- Entender estrutura dual (áudio ≠ legenda) — confirmado: são diferentes e complementares; confusão resolvida com exemplos
- Corrigir "Link na bio. Grátis para você." na cena-11 — ebook é pago, não grátis; corrigido para "Link na bio. Acesse agora."
- Corrigir prompt cena-05: celular mostrando tela para câmera (ângulo esquisito) → screen facing her, not the camera
- Corrigir prompt cena-07: filho "entrando na cena" → "already seated calmly"; expressão raiva → "calm, decided, warm, gentle closed-mouth smile"
- Testar múltiplas estruturas de prompt Veo 3.1 Fast (Ken Burns, cinematográfico, "Camera slowly zooms in")
- Cena-09 como imagem estática sem animação (animação ficou horrível)
- Nomes corretos para baixar as novas imagens (cena-05.png/06/07 com renomeação das antigas)
- Áudio como único arquivo contínuo com fala fluida — não 11 bullets choppy
- Reescrita completa do roteiro no estilo storytelling (exemplo ChatGPT aprovado)
- Texto do roteiro v2 completo para gerar fala.mp3 manualmente no site ElevenLabs

**PAROU EM:** fala.mp3 pendente de geração manual por Felipe no site ElevenLabs; clips do Artlist pendentes (cenas 02/03 aguardam decisão); video-assembly-agent aguarda todos os assets para montar o Reel final | Agente ativo: aiox-master

---

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

- video-prompt-agent criado — squads/dr-julia-resende/agents/video-prompt-agent.md; gera prompts de imagem (Gemini/Imagen) + prompts de animação Kling 3.0 para Reels; inclui heurísticas VP001-VP005 e modelo Nano Banana Pro (gemini-3-pro-image-preview)
- video-review-agent criado — squads/dr-julia-resende/agents/video-review-agent.md; analisa Reels de referência via Gemini File API; extraiu padrões do vídeo VIDEO-2025-11-18 de Felipe
- Reel R01 "Telas e Crianças Pequenas" pipeline completo: julia-chief ✅ → hormozi-hooks (Hook A aprovado) ✅ → script-agent (roteiro 8 cenas aprovado, 40-45s) ✅ → video-prompt-agent FASE 1 (8 prompts de imagem aprovados) ✅
- ebook-capa-poder-da-rotina.png criado em squads/dr-julia-resende/assets/ — cópia de packages/landing-page-dr-julia/assets/images/05.png; usado como reference_image na CENA 8 do Reel
- generate-reel-images.js criado em squads/dr-julia-resende/assets/ — script FASE 2: gera 8 PNGs via Gemini API + escreve prompts-animacao.md; suporte a reference_image para CENA 8; lê GOOGLE_AI_STUDIO_KEY (→ trocar para GOOGLE_VEO3_API_KEY)
- prompts-animacao.md gerado em squads/dr-julia-resende/output/reels/2026-04-02/ — 8 prompts Kling 3.0 prontos para Felipe rodar manualmente no Artlist
- FASE 2 bloqueada — Veo3 key TEM acesso a gemini-3-pro-image-preview (confirmado: 429 "quota exceeded" ≠ limit:0) mas cota diária esgotada; Vertex AI billing desabilitado; Imagen exige plano pago; aguardar reset da cota da chave Veo3 (meia-noite horário Google)

**O QUE O FELIPE PEDIU:**
- (continuação da sessão do dia — ver primeiro bloco "O QUE O FELIPE PEDIU" acima)
- Confirmar se chave Veo3 funciona para imagens (respondido: sim, gemini-3-pro-image-preview acessível, mas cota do dia esgotada)
- Esclarecimento sobre Nano Banana Pro = gemini-3-pro-image-preview (confirmado)

- BLOCO 0-R criado — proíbe agentes de decompor tarefa fora do escopo ou orquestrar pipeline; BLOCO 0-C expandido para fluxos condicionais (Customizações 34 e 35)
- approval-agent.md corrigido — handoff image-agent→compositor-agent; AP003 condicional explícito
- API key AIzaSyB2ldwoSpGxon--EK75lohgFWnuZzUU1jE exposta no commit c54bab4 — GitHub enviou alerta; fix: analyze-video.js agora lê de publisher-secrets.yaml (ea77d29); chave ainda precisa ser revogada manualmente
- video-prompt-agent slash command commitado — .claude/commands/dr-julia-resende/agents/video-prompt-agent.md
- generate-reel-images.js atualizado e commitado — usa GOOGLE_AI_STUDIO_KEY (trocar por GOOGLE_VEO3_API_KEY na próxima sessão)

**PAROU EM:** FASE 2 bloqueada — cota diária Gemini/Veo3 esgotada; na próxima sessão: (1) Felipe revoga chave exposta no Google AI Studio, (2) rodar `node squads/dr-julia-resende/assets/generate-reel-images.js` com GOOGLE_VEO3_API_KEY após reset da cota | Agente ativo: aiox-master

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
