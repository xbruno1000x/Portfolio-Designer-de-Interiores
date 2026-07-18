# Portfólio — Patricia de Souza Gonçalves

Site estático, responsivo e editável para o portfólio profissional de Patricia de Souza Gonçalves, Designer de Interiores. O projeto usa Astro, TypeScript, Tailwind CSS e coleções de conteúdo em Markdown.

## Tecnologias

- [Astro](https://astro.build/) 5
- TypeScript em modo estrito
- Tailwind CSS 4 via Vite
- Astro Content Collections
- `@astrojs/sitemap`
- `sharp` para otimização de imagens durante o build
- HTML semântico, CSS responsivo e JavaScript leve

Não há backend, banco de dados, serviço pago ou dependência de execução no servidor. O resultado de produção é inteiramente estático.

## Requisitos

- Node.js 22.12 ou superior
- npm 10 ou superior

## Executar localmente

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Astro no terminal.

Outros comandos:

```bash
npm run check    # valida TypeScript e arquivos Astro
npm run build    # valida e gera a pasta dist/
npm run preview  # prévia local do build de produção
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha apenas os dados que deseja publicar:

```env
PUBLIC_SITE_URL=https://seudominio.com.br
PUBLIC_WHATSAPP_NUMBER=5522999999999
PUBLIC_INSTAGRAM_URL=https://www.instagram.com/seuperfil
PUBLIC_CONTACT_EMAIL=contato@seudominio.com.br
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/SEU_ID
```

- `PUBLIC_WHATSAPP_NUMBER`: somente números, incluindo país e DDD.
- `PUBLIC_FORM_ENDPOINT`: endpoint do Formspree, Web3Forms ou serviço compatível com `POST` de `FormData`.
- Se `PUBLIC_FORM_ENDPOINT` estiver vazio, o formulário usa `mailto:` como alternativa.
- Nenhuma chave real deve ser versionada. O arquivo `.env` já está ignorado pelo Git.

Os dados compartilhados do site ficam centralizados em `src/data/site.ts`.

## Editar textos e dados

- Informações gerais: `src/data/site.ts`
- Serviços: `src/data/services.ts`
- Depoimentos: `src/data/testimonials.ts`
- Conteúdo das páginas: `src/pages/`
- Identidade visual e responsividade: `src/styles/global.css`

Os depoimentos e as informações de ferramentas estão marcados como conteúdo provisório e devem ser revisados antes da publicação final.

## Adicionar um projeto

1. Duplique um arquivo de `src/content/projetos/`.
2. Altere o nome do arquivo e defina um `slug` único.
3. Preencha todos os campos do frontmatter.
4. Coloque as imagens WebP em `public/images/projetos/`.
5. Atualize `capa` e `galeria` com os caminhos que começam em `/images/projetos/`.
6. Defina `demonstracao: false` para um trabalho real e autorizado.
7. Ajuste `ordem` e `destaque` para controlar a posição e a presença na página inicial.

Exemplo mínimo:

```md
---
titulo: "Nome do projeto"
slug: "nome-do-projeto"
descricao: "Resumo curto do projeto."
categoria: "Residencial"
subcategoria: "Sala"
ano: 2026
local: "Nova Friburgo, RJ"
capa: "/images/projetos/nome-do-projeto.webp"
destaque: true
ordem: 1
servicos: ["Layout", "Iluminação"]
galeria: ["/images/projetos/nome-do-projeto.webp"]
conceito: "Conceito do projeto."
desafios: "Principal desafio."
solucoes: "Soluções adotadas."
materiais: ["Madeira", "Linho"]
demonstracao: false
---
```

O schema completo e as validações estão em `src/content.config.ts`. A rota `/portfolio/[slug]` é gerada automaticamente no build.

## Trocar as imagens

- Retrato de Patricia: `src/assets/perfil.webp` e `public/images/patricia/perfil.webp`.
- Imagem principal da home: substitua `src/assets/hero.webp`.
- Capas e galerias: atualize os arquivos em `public/images/projetos/` e os caminhos nos Markdown.
- Cartão de compartilhamento: substitua `public/og.png`.

Prefira WebP ou AVIF, mantenha proporções semelhantes e use imagens autorizadas. As imagens atuais são demonstrativas e devem ser trocadas pelos trabalhos reais.

## Publicar no GitHub

Crie um repositório vazio no GitHub e execute:

```bash
git add .
git commit -m "Cria portfólio de Patricia de Souza Gonçalves"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Não envie `.env`, chaves ou dados privados.

## Deploy no Cloudflare Workers pelo GitHub

O site é estático. Por isso, os dados `PUBLIC_*` são inseridos durante o build executado pelo GitHub Actions e não como variáveis de execução do Worker.

Em **GitHub → Settings → Secrets and variables → Actions → Repository secrets**, cadastre:

```text
PUBLIC_WHATSAPP_NUMBER
PUBLIC_INSTAGRAM_URL
PUBLIC_CONTACT_EMAIL
PUBLIC_FORM_ENDPOINT        # opcional
PUBLIC_SITE_URL             # opcional enquanto usar workers.dev
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_API_TOKEN
```

O token do Cloudflare precisa da permissão **Edit Cloudflare Workers** e deve ser limitado à conta usada pelo projeto. O Account ID está disponível na visão geral da conta no Cloudflare.

O arquivo `.github/workflows/deploy-cloudflare.yml` valida os três contatos obrigatórios, executa o build e publica a pasta `dist` no Worker `portfolio-designer`. Cada push em `main` inicia uma publicação; também é possível usar **GitHub → Actions → Publicar portfolio no Cloudflare → Run workflow**.

Os contatos são públicos por natureza: após o build, telefone, Instagram, e-mail e endpoint do formulário podem ser vistos no HTML pelo visitante. Os secrets evitam apenas que esses valores fiquem gravados no repositório.

## Estrutura principal

```text
src/
├── assets/
├── components/
│   ├── ContactForm.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── ProjectCard.astro
│   ├── ProjectGallery.astro
│   ├── SectionTitle.astro
│   ├── SEO.astro
│   ├── ServiceCard.astro
│   ├── TestimonialCard.astro
│   └── WhatsAppButton.astro
├── content/projetos/
├── data/
├── layouts/BaseLayout.astro
├── pages/
│   ├── portfolio/[slug].astro
│   ├── portfolio/index.astro
│   ├── 404.astro
│   ├── contato.astro
│   ├── index.astro
│   ├── servicos.astro
│   └── sobre.astro
├── styles/global.css
└── content.config.ts
```

## Imagens demonstrativas

As fotografias de demonstração foram obtidas no Unsplash sob a licença disponibilizada nas páginas de origem. Autores: Abaddy Ghanem, Costa Live, Caroline Badran, Shishu Yadava, Tim Schmidbauer, Aleksandra Dementeva, Nguyen Minh e Hanna Lazar. Substitua-as pelos trabalhos reais antes do lançamento definitivo.
