## Painel de serviços da Administração - UFCA campus Brejo Santo

Este site tem o objetivo de fornecer informações e serviços atualizados para toda a comunidade universitária da Universidade Federal do Cariri, campus Brejo Santo.

A construção deste site se dará de forma gradativa porque não sou um programador profissional. Cada etapa do desenvolvimento do sistema será concluída com muito esforço e comemoração. Para não me perder no caminho, listarei abaixo cada etapa a ser cumprida e seguindo uma ordem lógica espero manter o sistema funcionando e ir adicionando novas funcionalidades pouco a pouco. Não será rápido e nem posso garantir uma frequência de desenvolvimento porque essa é uma atividade para se fazer nas horas vagas.

1. Definição das tecnologias utilizadas - Concluído
Após tentar implementar o sistema com PHP e MariaDB percebi que estava nadando contra a corrente e que no momento e com as ferramentas que tinha disponível o melhor caminho seria estudar Javascript, Nextjs e utilizar MongoDb para o banco de dados. O apoio da Vercel com a disponibilização gratuita do deploy, domínio, armazenamento e processamento de funções sem servidor foram cruciais para essa tomada de decisão. Para garantir esses benefícios é necessário que se utilize uma conta gratuita e os projetos sejam abertos no GitHub, o que não é nenhum problema neste caso.

2. Criação de um ambiente seguro com login, mas sem senha, para não ser esquecida - Concluído
Acessando o site https://next-auth.js.org/ pode-se incluir a autenticação utilizando vários métodos diferentes no seu projeto. Utilizamos o método de autenticação por e-mail. No site você pode seguir a documentação e fazer a sua própria autenticação ou pode acessar um diretório que eu fiz no GitHub que inclui apenas o projeto nextjs + autenticação por e-mail. Você vai precisar incluir suas variáveis de ambientes com o seu e-mail, senha, acesso ao banco de dados e outras. O repositório pode ser acessado pelo seguinte link: https://github.com/tiagogarrais/sistemasTestes. Se quiser verificar uma demonstração ao vivo do sistema acesse https://sistemas-testes.vercel.app/

3. Front-end simples com estrutura inicial - Em andamento 
Inclusão de pastas e a criação de um front-end simples, apenas com botões de acesso para organizar como o conteúdo será acessado. A ideia é já criar uma estrutura que poderá ser melhorada futuramente, mas que já mantenha um padrão de como tudo será feito.




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
