# Landing Page — Nutricionista & Personal Trainer

Landing page profissional, moderna e responsiva construída com **React + Vite + Tailwind CSS**, focada em converter visitantes em contatos via **WhatsApp**.

## 1. Como instalar as dependências

Você precisa ter o [Node.js](https://nodejs.org) instalado (versão 18 ou superior).

Na pasta do projeto, rode:

```bash
npm install
```

## 2. Como executar o projeto (modo desenvolvimento)

```bash
npm run dev
```

Isso abre um servidor local (geralmente em `http://localhost:5173`) com hot-reload — qualquer alteração no código atualiza a página automaticamente.

## 3. Onde alterar o número do WhatsApp

Tudo fica centralizado em **um único arquivo**:

```
src/config/profissional.js
```

Basta trocar o valor de `whatsapp`:

```js
const profissional = {
  ...
  whatsapp: '5581999999999', // <-- troque aqui (código do país + DDD + número)
  ...
}
```

Todos os botões "Falar no WhatsApp" do site (header, hero, cards de serviço, planos, CTA final e footer) usam essa mesma configuração através da função `getWhatsappLink()` em `src/utils/whatsapp.js`. Ou seja: **mudou aqui, mudou em todo o site**.

Se quiser editar as mensagens automáticas de cada botão, elas ficam no objeto `whatsappMessages`, no mesmo arquivo `src/utils/whatsapp.js`.

## 4. Onde alterar nome, Instagram e demais informações

Ainda no arquivo `src/config/profissional.js`:

```js
const profissional = {
  nome: 'Rafael Mendes',
  profissao: 'Nutricionista e Personal Trainer',
  whatsapp: '5581999999999',
  instagram: '@rafaelmendes.fit',
  instagramUrl: 'https://instagram.com/rafaelmendes.fit',
  email: 'contato@rafaelmendes.fit',
  cidade: 'Recife, PE',
  formacao: 'Bacharel em Nutrição (UFPE) • CREF e CRN ativos',
  especialidades: [
    'Emagrecimento e recomposição corporal',
    'Hipertrofia e performance',
    'Nutrição esportiva',
    'Reeducação alimentar',
  ],
}
```

Esses dados alimentam automaticamente o Header, a seção "Sobre" e o Footer.

### Outros pontos de edição de conteúdo

| O que editar | Onde |
|---|---|
| Título e texto do Hero | `src/components/Hero.jsx` |
| Foto do Hero e da seção Sobre | `src/components/Hero.jsx` e `src/components/About.jsx` (troque a URL da tag `<img>` por uma foto real, ex: `/minha-foto.jpg` dentro da pasta `public/`) |
| Cards de serviços (Consultoria) | `src/components/Services.jsx` |
| Planos e preços | `src/components/Plans.jsx` (o preço padrão é `"Consulte os valores"` — troque pelo valor real quando quiser) |
| Depoimentos/resultados | `src/components/Results.jsx` — **atenção:** os depoimentos atuais são placeholders demonstrativos, substitua por relatos e fotos reais de clientes (com autorização) antes de publicar |
| Perguntas do FAQ | `src/components/FAQ.jsx` |

### Como usar uma foto sua em vez da imagem de exemplo

1. Coloque o arquivo de imagem dentro da pasta `public/` (ex: `public/foto-perfil.jpg`).
2. No componente (`Hero.jsx` ou `About.jsx`), troque o `src` da tag `<img>` para `/foto-perfil.jpg`.

## 5. Como fazer o build para produção

```bash
npm run build
```

Isso gera uma pasta `dist/` com os arquivos otimizados e prontos para publicação.

Para conferir o resultado localmente antes de publicar:

```bash
npm run preview
```

## 6. Como publicar gratuitamente (Netlify ou Vercel)

### Opção A — Vercel

1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Suba o projeto para um repositório no GitHub (ou use a Vercel CLI: `npx vercel`).
3. Na Vercel, clique em **"Add New Project"** e selecione o repositório.
4. A Vercel detecta automaticamente que é um projeto Vite — mantenha as configurações padrão:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **Deploy**. Em poucos minutos o site estará no ar com uma URL gratuita.

### Opção B — Netlify

1. Crie uma conta gratuita em [netlify.com](https://netlify.com).
2. Rode `npm run build` localmente para gerar a pasta `dist/`.
3. No painel da Netlify, arraste a pasta `dist/` para a área de deploy manual (**"Deploy manually"**) — ou conecte o repositório do GitHub para deploys automáticos a cada alteração.
4. Se conectar via GitHub, use:
   - Build Command: `npm run build`
   - Publish directory: `dist`
5. Clique em **Deploy site**.

Em ambos os casos, você pode depois configurar um domínio próprio nas configurações do projeto.

---

## Estrutura do projeto

```
src/
├── components/
│   ├── Header.jsx        # menu fixo com hamburguer no mobile
│   ├── Hero.jsx           # seção de abertura
│   ├── About.jsx          # sobre o profissional
│   ├── HowItWorks.jsx     # 3 etapas da consultoria
│   ├── Services.jsx       # cards de consultoria
│   ├── Plans.jsx          # cards de planos/preços
│   ├── Results.jsx        # depoimentos (placeholders)
│   ├── FAQ.jsx             # accordion de perguntas
│   ├── CTAFinal.jsx       # chamada final
│   ├── Footer.jsx
│   └── WhatsappButton.jsx # botão reutilizável de WhatsApp
├── config/
│   └── profissional.js    # ⭐ dados centrais (nome, WhatsApp, Instagram...)
├── utils/
│   └── whatsapp.js        # ⭐ gerador de link wa.me + mensagens padrão
├── App.jsx
├── main.jsx
└── index.css
```

Não há backend, banco de dados, login ou painel administrativo nesta versão — é uma landing page estática, pronta para ser publicada e receber contatos diretamente pelo WhatsApp.
