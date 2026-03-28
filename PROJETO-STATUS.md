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
1. **@analyst** — rodar nova rodada de mineração — sem briefing novo, julia-chief trava e nenhum conteúdo é produzido; briefing atual (2026-03-23) expira 2026-03-30
2. **@dev** — construir content-generator.js — automatiza geração de HTMLs dos slides a partir do briefing, elimina trabalho manual nos carrosseis #3 a #5

### Prioridade Normal
3. **compositor-agent** — criar carrossel-03 — Briefing #2: "Ter filho é lindo. E também esgotante pra caramba." (após mineração nova) — avança calendário de conteúdo
4. **compositor-agent** — criar carrosseis dos Briefings #3 a #5 — completa ciclo do briefing e gera estoque de conteúdo
5. **@aiox-master** — criar `product-content-agent` no squad dr-julia-resende — agente necessário para escrever o Guia 7 Minutos e o Desafio 21 Dias (conteúdo que alinha o ebook com o que a LP promete)
6. **product-content-agent** — escrever Guia de Implementação 7 Minutos — documento novo do combo do ebook, prescrito pelo @hormozi-audit para corrigir mismatch ebook/LP
7. **product-content-agent** — escrever Desafio 21 Dias — documento novo do combo do ebook, prescrito pelo @hormozi-audit para corrigir mismatch ebook/LP
8. **@dev** — corrigir DS.yaml (remover image_tool DALL-E) — consistência da spec visual do projeto
9. **@hormozi-copy** — escrever seções "Antes e Depois", "Para Quem E / Nao E", Value Stack dos bônus — aumenta conversão da LP diretamente
10. **@hormozi-offers** — definir estratégia das 2 ofertas (R$10 vs R$27 na mesma página) — clareza na proposta de valor ao visitante
11. **@dev** — remover números fabricados do HTML da LP (Harvard, USP, "15.000 mães", "3.000 famílias", "20 anos de pesquisa") — esses números foram inventados e estão proibidos pelo caderno; manter compromete a credibilidade do projeto
12. **@dev** — implementar copy no HTML/CSS após aprovação — finaliza versão 2 da LP

### Pode deixar pra depois
13. **@dev** — corrigir links quebrados no footer (Política de Privacidade e Termos de Uso) — credibilidade legal da LP
14. **@dev** — adicionar selos de segurança visuais próximos aos CTAs — aumenta confiança do visitante
15. **@hormozi-offers** — criar Grand Slam Offer do ebook via wf-grand-slam-offer — maximiza valor percebido e justifica preço
16. **publisher-agent** — configurar Meta Graph API + posting automático — elimina publicação manual
17. **Felipe** — sincronizar publisher-secrets.yaml pro outro PC via Google Drive — alinhamento operacional entre PCs
18. **Felipe** — renovar token Instagram antes de 2026-05-22 — manutenção preventiva
19. **@dev/@devops** — integrar n8n — orquestrador de automação 24/7 para todo o pipeline
20. **@dev/@devops** — integrar ClickUp — dashboard de acompanhamento do projeto
21. **@dev** — schedule-optimizer — ajustar horários de publicação com base em performance real dos posts
22. **@dev** — adicionar Biblioteca de Anúncios do Facebook ao scout-agent como segunda fonte de dados
23. **Felipe** — domínio próprio (ex: poderdarotina.com.br) — aguardar João Paulo
24. **@dev** — verificar Pixel disparando no Facebook Events Manager — confirmação de rastreamento
25. **@dev** — testes mobile na LP — verificar em celular real
26. **@aiox-master/@dev** — criar estrutura C-Suite de agentes IA (CEO, CMO, COO, CFO, CTO, CPO, CGO)
27. **@aiox-master/@dev** — criar @cpo-agent — monitora tendências do nicho e sugere novos produtos semanalmente
28. **@devops/@dev** — Obsidian como segundo cérebro do projeto
29. **@dev** — dashboard proprietário de métricas ao vivo
30. **@dev** — brandbook estratégico e visual

---

## ULTIMAS 3 SESSOES
> Rotativo — ao adicionar nova sessão, mover a mais antiga para HISTORICO-SESSOES.md.

### SESSAO — 27/03/2026

**O QUE FOI FEITO:**
- BLOCO 0-G implementado — reativação automática de agente pós-compactação, evita que o Claude base assuma sem retomar o agente correto
- BLOCO 0-G v2 — agora lê o resumo da compactação e recupera itens não salvos, zero furos entre sessões
- BLOCO 0-H executado — verificação AIOX: wrappers v5.0.x adicionados, settings.json atualizado, core-config 2.1.0→2.2.0
- BLOCO 0-I criado e reforçado (2x) — nenhum agente executa trabalho de outro agente, sem exceção
- BLOCO 0-J criado — silêncio do orquestrador após agente especializado, evita confusão de identidade
- BLOCO 0-K criado — auditoria obrigatória antes de qualquer handoff de agente, evita perder contexto
- BLOCO 0-L criado — proibido inventar problemas sem agente especializado como fonte
- BLOCO 0-F v2 — retomada lista TODOS os itens pedidos na interrupção com status ✅/❌ + retorna ao fluxo ativo
- BLOCO 2-B criado — "mais tarde" = registro imediato no caderno, evita sumiço de tarefas entre sessões
- BLOCO 3 reescrito — auditoria integral da sessão (leitura completa do .jsonl) + push obrigatório sem pedir permissão
- BLOCO 1-A v2 — todos os blocos com cores+numeração global+@agente+impacto + seção "🔧 Implementações da última sessão"
- "15.000 maes" e demais números fabricados PROIBIDOS — item #11 adicionado ao caderno para @dev remover do HTML
- 15 criativos de anúncio pago gerados via fluxo completo (5 hooks × 3 formatos = 15 PNGs)
- Caderno migrado para novo formato de 3 blocos + items #5-7 e #11 adicionados
- Customizações 12 a 25 salvas no MANUAL.md — rastreabilidade completa das regras do sistema

**O QUE O FELIPE PEDIU:**
- Mapear TODAS as pendências existentes e corrigir todos os erros sistêmicos de agentes
- BLOCO 1-A com todos os blocos organizados por cores + agente por item + numeração global + seção de implementações
- BLOCO 3 com auditoria integral da sessão (.jsonl completo) + push obrigatório sempre
- BLOCO 0-G v2: ler resumo da compactação e recuperar itens não salvos automaticamente
- BLOCO 0-F v2: listar todos os itens da interrupção numerados com status + retornar ao fluxo ativo
- Executar BLOCO 0-H (atualização AIOX) — wrappers v5.0.x aplicados
- Adicionar pendências faltantes no caderno (product-content-agent, números falsos da LP)

**PAROU EM:** Sessão encerrada. Customizações 12-25 implementadas e salvas. Proximo: rodar nova rodada de mineração com @analyst (briefing expira 2026-03-30). | Agente ativo: aiox-master

---

### SESSAO — 24/03/2026 (PC casa — sessao Atlas/@analyst)

**O QUE FOI FEITO:**
- Elicit estratégico completo — Felipe mapeou a visão de longo prazo do projeto (automação 24/7, DALL-E descartado para tudo, C-Suite de agentes IA, n8n, ClickUp, Obsidian, @cpo-agent)
- Squad Hormozi integrado ao projeto — 246 arquivos, 15 agentes especializados, 9 workflows, 55 tasks, 45 checklists
- Decisão de produto registrada — ebook R$27 tem viabilidade real no nicho; R$52k/semana atingível com tráfego pago

**O QUE O FELIPE PEDIU:**
- Mapeamento da visão de longo prazo via *elicit
- Integrar Squad Hormozi ao projeto

**PAROU EM:** Squad Hormozi integrado. Proximo: hormozi-audit na LP + construir content-generator.js.

---

### SESSAO — 24/03/2026 (notebook + PC casa)

**O QUE FOI FEITO:**
- post-01, post-02, story-01, story-02 aprovados por Felipe
- P02 Social Proof descartado permanentemente — Felipe nao quer retomar
- Problema de sincronização entre PCs resolvido — processo de sync de 5 comandos definido
- git sync configurado no notebook como alias
- Pendência @dev registrada — construir content-generator.js para automatizar carrosseis a partir do briefing

**O QUE O FELIPE PEDIU:**
- Corrigir sincronização entre PCs
- Registrar P02 como descartado permanentemente

**PAROU EM:** Caderno revisado e completo. Proximo: chamar @dev para construir content-generator.js.

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
