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
1. **scout-agent** — executar coleta mensal 01/04/2026 (50 posts/perfil, 30 perfis) → briefing-agent gera 4 briefings semanais de uma vez para cobrir o mês de abril inteiro — sem isso, julia-chief trava e nenhum conteúdo é produzido
2. **@aiox-master** — atualizar scout-agent.md: `posts_per_profile: 20 → 50` — deve ser feito ANTES de 01/04 para a coleta mensal usar a configuração correta
3. **@aiox-master** — atualizar briefing-agent.md: implementar Opção A (1 coleta → 4 briefings semanais sem repetição de temas, validade estendida para cobrir o mês inteiro) — deve ser feito ANTES de 01/04; sem isso briefing-agent gera 1 briefing e julia-chief trava no 8° dia
4. **@dev** — construir content-generator.js — automatiza geração de HTMLs dos slides a partir do briefing, elimina trabalho manual nos carrosseis #3 a #5

### Prioridade Normal
5. **Felipe** — adicionar JULIA_VOICE_ID e GOOGLE_VEO3_API_KEY ao publisher-secrets.yaml — habilita o pipeline do video-agent (sem essas chaves o agente não consegue gerar nem áudio nem vídeo)
6. **video-agent** — executar pipeline com os 4 roteiros aprovados (ElevenLabs → Veo3 → MP4 9:16) — gera os primeiros vídeos da Dra. Julia para Reels/Stories/Facebook; roteiros em `squads/dr-julia-resende/output/roteiros-video-2026-03-28.md`
7. **compositor-agent** — criar carrossel-03 — Briefing #2: "Ter filho é lindo. E também esgotante pra caramba." (após mineração nova) — avança calendário de conteúdo
8. **compositor-agent** — criar carrosseis dos Briefings #3 a #5 — completa ciclo do briefing e gera estoque de conteúdo
9. **@aiox-master** — criar `product-content-agent` no squad dr-julia-resende — agente necessário para escrever o Guia 7 Minutos e o Desafio 21 Dias (conteúdo que alinha o ebook com o que a LP promete)
10. **product-content-agent** — escrever Guia de Implementação 7 Minutos — documento novo do combo do ebook, prescrito pelo @hormozi-audit para corrigir mismatch ebook/LP
11. **product-content-agent** — escrever Desafio 21 Dias — documento novo do combo do ebook, prescrito pelo @hormozi-audit para corrigir mismatch ebook/LP
12. **@dev** — corrigir DS.yaml (remover image_tool DALL-E) — consistência da spec visual do projeto
13. **@hormozi-copy** — escrever seções "Antes e Depois", "Para Quem E / Nao E", Value Stack dos bônus — aumenta conversão da LP diretamente
14. **@hormozi-offers** — definir estratégia das 2 ofertas (R$10 vs R$27 na mesma página) — clareza na proposta de valor ao visitante
15. **@dev** — remover números fabricados do HTML da LP (Harvard, USP, "15.000 mães", "3.000 famílias", "20 anos de pesquisa") — esses números foram inventados e estão proibidos pelo caderno; manter compromete a credibilidade do projeto
16. **@dev** — implementar copy no HTML/CSS após aprovação — finaliza versão 2 da LP

### Pode deixar pra depois
17. **@dev** — corrigir links quebrados no footer (Política de Privacidade e Termos de Uso) — credibilidade legal da LP
18. **@dev** — adicionar selos de segurança visuais próximos aos CTAs — aumenta confiança do visitante
19. **@hormozi-offers** — criar Grand Slam Offer do ebook via wf-grand-slam-offer — maximiza valor percebido e justifica preço
20. **publisher-agent** — configurar Meta Graph API + posting automático — elimina publicação manual
21. **Felipe** — sincronizar publisher-secrets.yaml pro outro PC via Google Drive — alinhamento operacional entre PCs
22. **Felipe** — renovar token Instagram antes de 2026-05-22 — manutenção preventiva
23. **@dev/@devops** — integrar n8n — orquestrador de automação 24/7 para todo o pipeline
24. **@dev/@devops** — integrar ClickUp — dashboard de acompanhamento do projeto
25. **@dev** — schedule-optimizer — ajustar horários de publicação com base em performance real dos posts
26. **@dev** — adicionar Biblioteca de Anúncios do Facebook ao scout-agent como segunda fonte de dados
27. **Felipe** — domínio próprio (ex: poderdarotina.com.br) — aguardar João Paulo
28. **@dev** — verificar Pixel disparando no Facebook Events Manager — confirmação de rastreamento
29. **@dev** — testes mobile na LP — verificar em celular real
30. **@aiox-master/@dev** — criar estrutura C-Suite de agentes IA (CEO, CMO, COO, CFO, CTO, CPO, CGO)
31. **@aiox-master/@dev** — criar @cpo-agent — monitora tendências do nicho e sugere novos produtos semanalmente
32. **@devops/@dev** — Obsidian como segundo cérebro do projeto
33. **@dev** — dashboard proprietário de métricas ao vivo
34. **@dev** — brandbook estratégico e visual

---

## ULTIMAS 3 SESSOES
> Rotativo — ao adicionar nova sessão, mover a mais antiga para HISTORICO-SESSOES.md.

### SESSAO — 29/03/2026

**O QUE FOI FEITO:**
- Customização 29 (BLOCO 0-M) implementada — commit 2ed4d44 — todo arquivo gerado deve ser commitado imediatamente, evita perda de outputs entre PCs
- Fluxo completo @hormozi-hooks → @hormozi-ads → @hormozi-copy executado — 4 roteiros de vídeo gerados adaptados para voz da Dra. Julia (contraintuitivo, prova social, autoridade, pergunta direta)
- video-agent.md criado em squads/dr-julia-resende/agents/ — pipeline ElevenLabs + Google Veo3, 4 etapas, 8 heurísticas, handoff para publisher-agent após aprovação manual
- squad-creator-premium v3.0.0 confirmado já instalado em squads/squad-creator/ (sem necessidade de nova instalação)
- Auditoria sessão crashada (50511a30) executada — todos os 5 commits estavam no GitHub, nada perdido no crash
- video-agent.md commitado (c7cf855) — BLOCO 0-M regularizado
- BLOCO 0-G executado — 5 itens da sessão compactada identificados e registrados no caderno
- `roteiros-video-2026-03-28.md` salvo em `squads/dr-julia-resende/output/` e commitado (`8fcac45`) — 4 roteiros completos com versão @hormozi-ads + @hormozi-copy, prontos para o video-agent executar
- Slash command `/dr-julia-resende:agents:video-agent` criado em `.claude/commands/dr-julia-resende/agents/video-agent.md` e commitado (`a233dc4`) — video-agent agora ativável via comando

**O QUE O FELIPE PEDIU:**
- Criativo de vídeo urgente para Instagram Reels/Stories e Facebook
- Fluxo @hormozi-hooks → @hormozi-ads → @hormozi-copy para gerar roteiros de vídeo
- Criar video-agent com ElevenLabs + Google Veo3 usando squad-creator-premium
- Auditar sessão crashada para verificar se nada foi perdido

**PAROU EM:** BLOCO 3 executado. Próximo: Felipe adiciona JULIA_VOICE_ID + GOOGLE_VEO3_API_KEY ao publisher-secrets.yaml → executar pipeline video-agent com os 4 roteiros. | Agente ativo: aiox-master

---

### SESSAO — 28/03/2026

**O QUE FOI FEITO:**
- Customizações 24/25/26 reordenadas no MANUAL.md — ordem numérica correta, consistência do documento
- Identificado que @analyst truncava 🗣️ (6/12 itens), 🔧 (21→3 linhas) e ⚫ (13-30 em 1 linha) ao ativar no PC casa
- BLOCO 1-A reforçado — PROIBIÇÃO ABSOLUTA DE RESUMIR adicionada às REGRAS INEGOCIÁVEIS — elimina truncação das seções no @analyst
- Customização 28 salva no MANUAL.md — rastreabilidade da proibição de resumir

**O QUE O FELIPE PEDIU:**
- Corrigir ordem das Customizações 24/25/26 no MANUAL.md (cosmético)
- Testou @analyst no PC casa e identificou 3 violações de completude
- Reforçar BLOCO 1-A para proibir explicitamente sumarização de qualquer seção

**PAROU EM:** Sessão encerrada. Customização 28 implementada. Próximo: @analyst — rodar nova rodada de mineração (briefing expira 2026-03-30 — URGENTE). | Agente ativo: aiox-master

---

### SESSAO — 27/03/2026

**O QUE FOI FEITO:**
- BLOCO 0-G implementado — reativação automática de agente pós-compactação, evita que o Claude base assuma sem retomar o agente correto
- BLOCO 0-G v2 — agora lê o resumo da compactação e recupera itens não salvos, zero furos entre sessões
- BLOCO 0-G PASSO 3 corrigido — fonte do "ESTAVA EM" era o caderno (errado); agora usa o resumo da compactação como fonte primária e caderno como fallback apenas; Customização 25 atualizada
- BLOCO 0-H executado — verificação AIOX: wrappers v5.0.x adicionados, settings.json atualizado, core-config 2.1.0→2.2.0
- BLOCO 0-I criado e reforçado (2x) — nenhum agente executa trabalho de outro agente, sem exceção
- BLOCO 0-J criado — silêncio do orquestrador após agente especializado, evita confusão de identidade
- BLOCO 0-K criado — auditoria obrigatória antes de qualquer handoff de agente, evita perder contexto
- BLOCO 0-L criado — proibido inventar problemas sem agente especializado como fonte
- BLOCO 0-F v2 — retomada lista TODOS os itens pedidos na interrupção com status ✅/❌ + retorna ao fluxo ativo
- BLOCO 2-B criado — "mais tarde" = registro imediato no caderno, evita sumiço de tarefas entre sessões
- BLOCO 3 reescrito — auditoria integral da sessão (leitura completa do .jsonl) + push obrigatório sem pedir permissão
- BLOCO 1-A v2 — todos os blocos com cores+numeração global+@agente+impacto + seção "🔧 Implementações" + seção "🗣️ O que Felipe pediu"
- "15.000 maes" e demais números fabricados PROIBIDOS — item #11 adicionado ao caderno para @dev remover do HTML
- 15 criativos de anúncio pago gerados via fluxo completo (5 hooks × 3 formatos = 15 PNGs)
- Caderno migrado para novo formato de 3 blocos + items #5-7 e #11 adicionados
- Customizações 12 a 27 salvas no MANUAL.md — rastreabilidade completa das regras do sistema
- Pasta .claude/hooks-backup-20260327/ deletada — limpeza pós-update AIOX v5.0.x bem-sucedido
- Entradas 27/03 (principal + continuação) mescladas em uma só — elimina ambiguidade de "sessão mais recente"
- Auditoria final da sessão (169 mensagens lidas) — nada perdido
- Customizações 24/25/26 reordenadas no MANUAL.md (correção cosmética de ordem numérica) — consistência do documento

**O QUE O FELIPE PEDIU:**
- Mapear TODAS as pendências existentes e corrigir todos os erros sistêmicos de agentes
- BLOCO 1-A com todos os blocos organizados por cores + agente por item + numeração global + seção de implementações
- BLOCO 3 com auditoria integral da sessão (.jsonl completo) + push obrigatório sempre
- BLOCO 0-G v2: ler resumo da compactação e recuperar itens não salvos automaticamente
- BLOCO 0-G PASSO 3: "ESTAVA EM" deve vir do resumo da compactação, não do caderno
- BLOCO 0-F v2: listar todos os itens da interrupção numerados com status + retornar ao fluxo ativo
- Executar BLOCO 0-H (atualização AIOX) — wrappers v5.0.x aplicados
- Adicionar pendências faltantes no caderno (product-content-agent, números falsos da LP)
- Adicionar seção "🗣️ O que Felipe pediu" ao BLOCO 1-A do @analyst
- Mesclar as duas entradas do 27/03 em uma só no caderno
- Confirmar que nada foi perdido após compactação (auditoria de 169 mensagens)
- Corrigir ordem das Customizações 24/25/26 no MANUAL.md (cosmético)

**PAROU EM:** Sessão encerrada. Auditoria final completa. Proximo: rodar nova rodada de mineração com @analyst (briefing expira 2026-03-30). | Agente ativo: aiox-master

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
| Cloudinary | dvxe4ijzt — upload temporário para URL publica (~5s) |
| Token Instagram | Valido — expira ~2026-05-22 (renovar antes) |
| Token Facebook Page | Renovado 2026-03-21 |
| publisher-secrets.yaml | Gitignored — Felipe sincroniza via Google Drive entre PCs |
| Proxima mineração | 01/04/2026 (créditos Apify renovam no 1o de cada mes) |
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
