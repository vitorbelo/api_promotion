# Web Crawler de Preços
## _API busca preços_


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Este é um projeto de Web Crawler desenvolvido em Node.js que permite extrair informações de preços de produtos de sites-alvo específicos. O Web Crawler usa técnicas de Web Scraping para coletar os dados de preço e os armazena em um banco de dados para posterior acesso e análise.

## Pré-requisitos

- Node.js (versão 12 ou superior)
- MySQL


## Funcionalidades

- Extrai informações de preços de produtos de sites-alvo.
- Armazena os dados de preço em um banco de dados.
- Permite adicionar novos sites-alvo para rastreamento.
- Fornece endpoints de API para interagir com o sistema.
- Atualiza os dados de preço automaticamente em intervalos regulares.

## Installation

Clone o repositório para o seu ambiente local:

```sh
git clone https://github.com/seu-usuario/api_promotion.git
```

Navegue até o diretório do projeto:

```sh
cd api_promotion
```

Instale as dependências do projeto:

```sh
npm install
```

Configure as informações do banco de dados no arquivo config.js. Substitua os valores em <DB_HOST>, <DB_USER>, <DB_PASSWORD> e <DB_DATABASE> com as informações corretas.

```sh
module.exports = {
  host: '<DB_HOST>',
  user: '<DB_USER>',
  password: '<DB_PASSWORD>',
  database: '<DB_DATABASE>'
};
```

Execute o servidor:

```sh
node server.js
```

## Funcionalidades

- Adicione um novo site-alvo para rastreamento enviando uma solicitação POST para /sites. Forneça a URL do site como parâmetro na solicitação.
- Liste todos os sites-alvo cadastrados com uma solicitação GET para /sites.
- Os dados de preço dos produtos serão atualizados automaticamente em intervalos regulares.
- Acesse os dados de preço através da rota /prices.

## Contribuição
Contribuições são bem-vindas! Se você quiser contribuir para o projeto, siga as etapas abaixo:
- Faça um fork do repositório.
- Crie uma branch para suas alterações: git checkout -b minha-feature.
- Faça as alterações desejadas e commit: git commit -m 'Minha nova feature'.
- Envie suas alterações para o repositório remoto: git push origin minha-feature.
- Envie um pull request explicando suas alterações.

