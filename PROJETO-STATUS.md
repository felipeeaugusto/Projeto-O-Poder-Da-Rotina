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
5. **@dev** — corrigir DS.yaml (remover image_tool DALL-E) — consistência da spec visual do projeto
6. **@hormozi-copy** — escrever seções "Antes e Depois", "Para Quem E / Nao E", Value Stack dos bônus — aumenta conversão da LP diretamente
7. **@hormozi-offers** — definir estratégia das 2 ofertas (R$10 vs R$27 na mesma página) — clareza na proposta de valor ao visitante
8. **@dev** — implementar copy no HTML/CSS após aprovação — finaliza versão 2 da LP

### Pode deixar pra depois
9. **@dev** — corrigir links quebrados no footer (Política de Privacidade e Termos de Uso) — credibilidade legal da LP
10. **@dev** — adicionar selos de segurança visuais próximos aos CTAs — aumenta confiança do visitante
11. **@hormozi-offers** — criar Grand Slam Offer do ebook via wf-grand-slam-offer — maximiza valor percebido e justifica preço
12. **publisher-agent** — configurar Meta Graph API + posting automático — elimina publicação manual
13. **Felipe** — sincronizar publisher-secrets.yaml pro outro PC via Google Drive — alinhamento operacional entre PCs
14. **Felipe** — renovar token Instagram antes de 2026-05-22 — manutenção preventiva
15. **@dev/@devops** — integrar n8n — orquestrador de automação 24/7 para todo o pipeline
16. **@dev/@devops** — integrar ClickUp — dashboard de acompanhamento do projeto
17. **@dev** — schedule-optimizer — ajustar horários de publicação com base em performance real dos posts
18. **@dev** — adicionar Biblioteca de Anúncios do Facebook ao scout-agent como segunda fonte de dados
19. **Felipe** — domínio próprio (ex: poderdarotina.com.br) — aguardar João Paulo
20. **@dev** — verificar Pixel disparando no Facebook Events Manager — confirmação de rastreamento
21. **@dev** — testes mobile na LP — verificar em celular real
22. **@aiox-master/@dev** — criar estrutura C-Suite de agentes IA (CEO, CMO, COO, CFO, CTO, CPO, CGO)
23. **@aiox-master/@dev** — criar @cpo-agent — monitora tendências do nicho e sugere novos produtos semanalmente
24. **@devops/@dev** — Obsidian como segundo cérebro do projeto
25. **@dev** — dashboard proprietário de métricas ao vivo
26. **@dev** — brandbook estratégico e visual

---

## ULTIMAS 3 SESSOES
> Rotativo — ao adicionar nova sessão, mover a mais antiga para HISTORICO-SESSOES.md.

### SESSAO — 27/03/2026

**O QUE FOI FEITO:**
- BLOCO 0-G implementado no CLAUDE.md — reativação automática de agente pos-compactação, evita que o Claude base assuma o controle sem retomar o agente correto
- BLOCO 0-H implementado — protocolo de atualização segura do AIOX
- BLOCO 0-I criado e reforçado (2x) — nenhum agente executa trabalho de outro agente, sem exceção, sem urgência como justificativa
- BLOCO 0-J criado — silêncio do orquestrador após agente especializado
- Customizações 12 a 15 salvas no MANUAL.md — rastreabilidade das regras do sistema
- "15.000 maes" identificado como número fabricado — PROIBIDO em ads, LP e criativos
- 15 criativos de anúncio pago gerados via fluxo completo: @hormozi-hooks (5 hooks) + @hormozi-ads (conceitos) + @hormozi-copy (copy) + compositor-agent (15 PNGs em squads/dr-julia-resende/criativos-ads/)
- Customização 16 implementada — BLOCO 1-A do @analyst com numeração global, impacto por item, data da última sessão e seção de pendências nao relevantes
- Caderno migrado para novo formato de 3 blocos (PENDENCIAS ATUAIS / ULTIMAS 3 SESSOES / DECISOES IMPORTANTES)

**O QUE O FELIPE PEDIU:**
- Corrigir todos os erros sistêmicos (BLOCO 0-I e 0-J) antes de dormir
- 15 criativos nos 3 formatos prontos para apresentar ao patrao (Joao Paulo)
- Implementar formato específico de ativação do @analyst (BLOCO 1-A) com numeração e impacto
- Migrar PROJETO-STATUS.md para estrutura de 3 blocos com pendências numeradas

**PAROU EM:** Customização 16 implementada. Caderno migrado para novo formato. Proximo: rodar nova rodada de mineração com @analyst.

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
