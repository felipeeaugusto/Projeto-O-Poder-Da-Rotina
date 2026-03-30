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

### Prioridade Normal
2. **video-agent** — executar pipeline com os 4 roteiros aprovados (ElevenLabs → Veo3 → MP4 9:16) — gera os primeiros vídeos da Dra. Julia para Reels/Stories/Facebook; roteiros em `squads/dr-julia-resende/output/roteiros-video-2026-03-28.md`
3. **compositor-agent** — criar carrosseis dos Briefings #3 a #5 — completa ciclo do briefing e gera estoque de conteúdo (content-generator.js já pronto — só rodar)
4. **@aiox-master** — criar `product-content-agent` no squad dr-julia-resende — agente necessário para escrever o Guia 7 Minutos e o Desafio 21 Dias (conteúdo que alinha o ebook com o que a LP promete)
5. **product-content-agent** — escrever Guia de Implementação 7 Minutos — documento novo do combo do ebook, prescrito pelo @hormozi-audit para corrigir mismatch ebook/LP
6. **product-content-agent** — escrever Desafio 21 Dias — documento novo do combo do ebook, prescrito pelo @hormozi-audit para corrigir mismatch ebook/LP
7. **@dev** — corrigir DS.yaml (remover image_tool DALL-E) — consistência da spec visual do projeto
8. **@hormozi-copy** — escrever seções "Antes e Depois", "Para Quem E / Nao E", Value Stack dos bônus — aumenta conversão da LP diretamente
9. **@hormozi-offers** — definir estratégia das 2 ofertas (R$10 vs R$27 na mesma página) — clareza na proposta de valor ao visitante
10. **@dev** — remover números fabricados do HTML da LP (Harvard, USP, "15.000 mães", "3.000 famílias", "20 anos de pesquisa") — esses números foram inventados e estão proibidos pelo caderno; manter compromete a credibilidade do projeto
11. **@dev** — implementar copy no HTML/CSS após aprovação — finaliza versão 2 da LP

### Pode deixar pra depois
12. **@dev** — corrigir links quebrados no footer (Política de Privacidade e Termos de Uso) — credibilidade legal da LP
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

### SESSAO — 30/03/2026

**O QUE FOI FEITO:**
- publisher-secrets.yaml sincronizado do PC casa para o notebook — copiado de Downloads para `squads/dr-julia-resende/config/` e arquivo original apagado; credenciais do video-agent e publisher-agent atualizadas
- content-generator.js construído em `squads/dr-julia-resende/assets/` — ferramenta reutilizável que lê config.json e gera HTMLs dos slides + render.js + manifesto.json; elimina trabalho manual em todos os carrosseis futuros
- carrossel-03/config.json criado e preenchido pelo copy-agent com copy real do Briefing #2 ("Ter filho é lindo. É também esgotante pra caramba.") — 5 slides: hook, lista-escura, lista-clara, reflexao, cta
- carrossel-03: 5 PNGs gerados pelo compositor-agent (slide-01 a slide-05, 54KB–124KB) e aprovados por Felipe — pipeline content-generator.js completo e funcional
- BLOCO 0-N implementado (Customização 30) — agentes devem identificar quem produz o input de qualquer ferramenta antes de dizer "você preenche"; previne delegação errada no lado do input
- BLOCO 0-O implementado (Customização 31) — agentes devem verificar agent-authority.md antes de indicar qual agente executa o próximo passo; previne delegação errada no lado do output

**O QUE O FELIPE PEDIU:**
- Sincronizar publisher-secrets.yaml atualizado do PC casa para o notebook
- Verificar se os itens #2 (content-generator.js), #4 (carrossel-03) e #5 (carrosseis #3-#5) estavam relacionados
- Construir content-generator.js e testar pipeline end-to-end
- Criar carrossel-03 com copy real do Briefing #2
- Implementar BLOCO 0-N e BLOCO 0-O como regras permanentes para todos os agentes

**PAROU EM:** carrossel-03 aprovado e commitado. Pendências #2 e #4 removidas do caderno (28 pendências restantes). | Agente ativo: compositor-agent

---

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
- ELEVENLABS_API_KEY e JULIA_VOICE_ID corretamente separados no publisher-secrets.yaml — fix crítico: chave de API (`sk_c71167...`) e ID da voz (`bMQVOFw0g6ACPbiM5XqE`) são campos distintos; confusão teria causado ERRO 401 no video-agent
- GOOGLE_VEO3_API_KEY adicionado ao publisher-secrets.yaml — terceira credencial necessária para o pipeline de vídeo
- JULIA_VOICE_ID `bMQVOFw0g6ACPbiM5XqE` obtido via chamada direta à API ElevenLabs (PowerShell listou vozes clonadas, encontrou "Dra. Julia")
- video-agent.md: path do secrets_file corrigido (`data/` → `config/`) — commit 3a66bac — sem esta correção o video-agent não encontraria as credenciais
- publisher-secrets.yaml sincronizado no Google Drive por Felipe — pendência #18 concluída
- Caderno renumerado: pendências #3 (API keys) e #18 (Google Drive) removidas → 30 itens

**O QUE O FELIPE PEDIU:**
- Criativo de vídeo urgente para Instagram Reels/Stories e Facebook
- Fluxo @hormozi-hooks → @hormozi-ads → @hormozi-copy para gerar roteiros de vídeo
- Criar video-agent com ElevenLabs + Google Veo3 usando squad-creator-premium
- Auditar sessão crashada para verificar se nada foi perdido
- Verificar se publisher-secrets.yaml estava no PC casa (estava — Google Drive sincronizado)

**PAROU EM:** Todas as credenciais do video-agent prontas e corrigidas. Próximo: executar pipeline video-agent com os 4 roteiros aprovados (pendência #3). | Agente ativo: analyst

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
