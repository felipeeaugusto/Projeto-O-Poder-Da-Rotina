# PROJETO-STATUS — Landing Page Dra. Julia Resende
> Caderno vivo do projeto. Todos os agentes devem ler ao ser ativados e atualizar após aprovações.

---

## 📋 Sobre o Projeto

- **Produto:** Ebook "O Poder da Rotina" — Dra. Julia Resende
- **Tipo:** Landing Page estática (HTML/CSS/JS)
- **Pasta:** `packages/landing-page-dr-julia/`
- **Servidor local:** `npx serve . -p 3000` → http://localhost:3000
- **Cliente:** Felipe
- **Patrão/Aprovador final:** João Paulo (viajando essa semana — disponível em breve)

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
- HTML aponta para `assets/favicon.png`

### Bugs Corrigidos
- **BUG-01:** Seção "Você se reconhece?" — colunas com espaçamento correto (grid gap)
- **BUG-02:** Selo de Garantia estava invisível — corrigido removendo `.garantia__selo` do GSAP animTargets

### Rastreamento
- Meta Pixel instalado no `<head>` — ID: `32651609107818251`

### Pagamento
- Links de checkout Eduzz já funcionando: oferta R$10 e oferta R$27 ✅

---

## 🔄 Pendências (ainda não feito)

1. **Deploy na Vercel** — Felipe tem conta no GitHub, precisa criar conta na Vercel e conectar o repositório
2. **Domínio próprio** — ex: `poderdarotina.com.br` — depende do João Paulo (patrão), que está viajando essa semana
3. **Verificar Pixel disparando** — confirmar no Facebook Events Manager que o PageView está chegando
4. **Testes mobile** — verificar LP em celular real (maioria do tráfego pago vem de mobile)
5. **Console zero erros** — abrir DevTools e confirmar que não há erros JS

---

## ➡️ Próximos Passos Priorizados

1. Criar conta na Vercel → conectar GitHub → fazer deploy → LP fica online
2. Testar Pixel no Facebook Events Manager
3. Testar no celular
4. Domínio (aguardar João Paulo)

---

## 💡 Perfil do Felipe (como ele trabalha)

- Prefere layouts clássicos e diretos — não gosta de excesso de texto ou informação
- Toma decisões vendo na prática — precisa visualizar para aprovar
- Comunicação simples — explicar como se fosse para uma criança
- João Paulo é o patrão/cliente que aprova decisões maiores (domínio, custos, estratégia)
- Quando aprova algo, costuma dizer "gostei", "ficou bom", "ficou excelente"

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

---

## 🗓️ Histórico de Sessões

### Sessão — 2026-03-16
**Feito:** Hero redesenhado com foto da Julia, favicon criado (logo do abraço verde), BUG-01 e BUG-02 corrigidos, Meta Pixel instalado, imagem otimizada para WebP, sistema de caderno de projeto criado (PROJETO-STATUS.md + regra project-log.md)
**Parou em:** Sistema de memória criado. Próximo passo: deploy na Vercel.

---

*Atualizado por: Atlas (analyst) — 2026-03-16*
