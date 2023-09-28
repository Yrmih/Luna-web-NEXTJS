# Projeto LUNA em NEXT.JS 13

Sistema de Atendimento de Virtual da Defensoria Pública.

## Iniciar Desenvolvimento

Primeiro execute em modo de desenvolvimento:

```bash
yarn install

## para user uma porta específica use --port=numero_porta
yarn dev

```
Para testar alguns comportamentos do lado do servidor, as vezes torna-se necessário "buildar" o projeto.
```bash
yarn build

## para executar o projero construido.
yarn start

```

### Variáveis de ambientes
Se for alterar algum valor das variáveis de ambiente, crie um arquivo `.env.local`. Ele irá sobrescrever todas as variáveis do `.env` padrão que foram adicionadas no arquivo.

## Temas
Para alteração das cores do tema recomenda-se usar o [zenoo](https://zenoo.github.io/mui-theme-creator/) para escolher as paletas de cores.


## Referências
O projeto está sendo desenvolvido usando o [nextjs 13](https://nextjs.org/docs/getting-started/project-structure)
e ultilizando os componentes do [Material UI](https://mui.com/material-ui/getting-started/usage/). Ademais a linguagem ultilizada para desenvolvimento é a [TypeScript](https://www.typescriptlang.org/)
## Documentação
Para instruções e detalhes sobre o Projeto acesse a [Wiki](https://gitlab.defensoria.to.def.br/defensoria/luna-web-nextjs/-/wikis/home)
