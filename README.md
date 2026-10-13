# Meta Máxima Digital · Landing Page

Landing page institucional de alta conversão para a **Meta Máxima Digital**, focada em captação e qualificação de leads comerciais para estratégias de tráfego pago, marketing digital, automação e inteligência comercial.

---

## 🚀 Tecnologias

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** CSS Moderno (Design Tokens & CSS Modules)
- **Tipografia:** Geist Sans & Geist Mono
- **Ícones:** SVG autorais em traço consistente
- **Exportação:** Estática (`output: "export"`) pronta para Vercel, Netlify ou qualquer CDN

---

## 🎯 Estrutura da Página

1. **Header:** Logotipo institucional e menu de navegação responsivo.
2. **Hero:** Título de alto impacto com mapa conceitual animado do funil comercial (*Anúncio → Lead → Atendimento → Proposta → Venda*).
3. **Identificação do Problema:** Mapeamento de gargalos comuns na jornada do lead.
4. **Soluções:** 4 frentes integradas (*Tráfego Pago*, *Estratégia de Vendas*, *Automação e IA*, *Estratégia Digital e Criativos*).
5. **Diferencial Estratégico:** Fluxo em 4 etapas conectadas (*Atrair*, *Qualificar*, *Converter*, *Analisar*).
6. **Como Funciona:** Processo consultivo em 3 fases.
7. **Setor Educacional:** Seção especializada para captação de alunos com pré-seleção dinâmica no formulário.
8. **Perfis de Clientes:** Diagnóstico por momento do negócio.
9. **FAQ:** Accordion acessível com respostas claras sobre escopo e processo.
10. **Formulário de Conversão:** Qualificação detalhada com máscara de telefone, validação e encaminhamento formatado para o WhatsApp comercial oficial.
11. **Rodapé & Botão Flutuante:** Navegação auxiliar e canal direto.

---

## 🛠️ Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (localhost:3000)
npm run dev

# Gerar build de produção
npm run build
```

---

## ⚙️ Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure os IDs desejados (opcionais):

```env
NEXT_PUBLIC_SITE_URL=https://seusite.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5521984393482
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_GTM_ID=
```

---

## 📦 Deploy na Vercel

O projeto está 100% pronto para deploy na [Vercel](https://vercel.com):
1. Importe este repositório no dashboard da Vercel.
2. As configurações de build são detectadas automaticamente (`Next.js`).
3. Adicione as variáveis de ambiente necessárias em **Settings > Environment Variables**.
4. Clique em **Deploy**.
