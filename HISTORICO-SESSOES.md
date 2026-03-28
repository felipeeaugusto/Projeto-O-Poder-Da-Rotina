# HISTORICO DE SESSOES — Projeto Dra. Julia Resende
> Sessoes antigas movidas do PROJETO-STATUS.md. Consulte quando precisar de contexto histórico.

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

### SESSAO — 23/03/2026 (parte 2)

**O QUE FOI FEITO:**
- js-yaml instalado, publisher-agent.js corrigido (Facebook publica album completo)
- Credenciais atualizadas em publisher-secrets.yaml (ig_user_id correto, tokens renovados)
- PRIMEIRO POST REAL PUBLICADO — carrossel-02 no Instagram (@drjuliaresende) e Facebook
- Flag --so-facebook adicionada ao publisher-agent

**PAROU EM:** Pipeline end-to-end funcionando. Proximo: criar carrossel-03 (Briefing #2).

---

### SESSAO — 23/03/2026 (parte 1)

**O QUE FOI FEITO:**
- 5 usernames corrigidos + 12 perfis inexistentes substituidos no perfis-referencia.yaml
- Coleta completa rodada nos 29 perfis ativos via scout-run.js — coleta-2026-03-23.json (69 posts de 23/29 perfis)
- scout-investigate.js criado — script de diagnóstico para perfis com problemas
- Analyst-agent rodado nos 69 posts — posts_analisados-2026-03-23.json (18 posts com angulo)
- Briefing semanal gerado — briefing-semanal-2026-03-23.md (top 5 oportunidades)
- Carrossel-02 criado e aprovado — "Mae perfeita vs. mae presente" — 5 slides HTML/CSS + Playwright
- compositor-agent.js e publisher-agent.js criados

**PAROU EM:** Scripts criados, credenciais a preencher.

---

### SESSAO — 20/03/2026 a 21/03/2026

**O QUE FOI FEITO:**
- Squad de Mineracao criado completo — 5 agentes: scout, analyst-mineracao, briefing, compositor, publisher
- Credenciais Meta Graph API configuradas — Instagram ID + token, Facebook Page ID + token
- Teste piloto Apify — 5 perfis, 3 problemas corrigidos
- Cloudinary configurado — cloud_name dvxe4ijzt
- Token Facebook Page renovado
- julia-chief atualizado — heurística JC007 (briefing obrigatório)

**PAROU EM:** Proximo passo e rodar mining completo dos 30 perfis.

---

### SESSAO — 19/03/2026

**O QUE FOI FEITO:**
- Atlas leu PDFs do curso Pedro Sobral "Gestao de Trafego Organico"
- Extraidos: Método Subido de Mineracao 1.0, algoritmo Instagram, formatos por alcance, jornada do cliente
- Squad de Mineracao arquitetado: 3 agentes scout + analyst + briefing, 30 perfis, spec escrita

**PAROU EM:** Aguardando confirmação do Felipe para criar o Squad de Mineracao.

---

### SESSAO — 18/03/2026 a 19/03/2026

**O QUE FOI FEITO:**
- DS.yaml v4.0 — P01 Manifesto e ST01 Direta aprovados com protótipos PNG
- post-02.png, story-02.png criados
- P02 Social Proof renderizado (posteriormente descartado permanentemente)
- wa-screen-dark.js criado

**PAROU EM:** P02 gerado, aguardando feedback do Felipe.

---

### SESSAO — 18/03/2026 (madrugada — PC de casa)

**O QUE FOI FEITO:**
- Python/Pillow descartado — nova ferramenta: HTML/CSS + Playwright para PNG 1080x1080
- DS.yaml v3.0 com 3 estilos aprovados (S01, S03, S04)
- Carrossel-01: 5 slides aprovados e commitados
- post-01.png e story-01.png criados

**PAROU EM:** post-01 e story-01 criados — aguardam revisao na proxima sessao.

---

### SESSAO — 17/03/2026 (noite — notebook/casa)

**O QUE FOI FEITO:**
- API Claude crashou (529) — contexto recuperado via history.jsonl
- Diagnóstico: compositor gerava layout clipart — caminho mudado para estilo Academia Lendaria
- Compositor redesenhado com templates por formato (VE, QC, MT)
- Carrossel de 6 slides criado (slide-01 a slide-06)

**PAROU EM:** Felipe viu os 6 slides e foi para o PC de casa.

---

### SESSAO — 17/03/2026 (tarde/noite — notebook)

**O QUE FOI FEITO:**
- PRD do compositor Python criado, Story 2.1 criada e aprovada (Ready for Dev)
- Script compositor.py implementado — Fase 1 funcional
- Python 3.14 + Pillow instalados, logo sem fundo gerada
- Teste 1 (VE) rodado — resultado rejeitado

**PAROU EM:** @analyst definindo estratégia dos 3 posts de teste.

---

### SESSAO — 17/03/2026 (manha)

**O QUE FOI FEITO:**
- Problemas de sincronização entre PCs resolvidos — .gitmodules criado, DS.yaml + ebook + logos copiados
- Handoffs v4-v7 adicionados ao GitHub, config.yaml do squad corrigido

**PAROU EM:** Pronto para continuar de qualquer PC.

---

### SESSAO — 16/03/2026

**O QUE FOI FEITO:**
- Hero redesenhado com foto da Julia, favicon criado, BUG-01 e BUG-02 corrigidos
- Meta Pixel instalado, imagem otimizada para WebP
- Sistema de caderno criado (PROJETO-STATUS.md + regra project-log.md)
- Repositório GitHub criado, LP publicada na Vercel
- Atlas leu handoffs v4 a v7 + yaml e mapeou o projeto completo

**PAROU EM:** Felipe foi para casa (braco doendo).
