# BeTalent Front-end Technical Test Solution

## Índice
1. [Sobre o Projeto](#sobre-o-projeto)
2. [Mockup](#mockup)
3. [Requisitos Gerais](#requisitos-gerais)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Pré-requisitos](#pré-requisitos)
6. [Instruções para Rodar a Aplicação](#instruções-para-rodar-a-aplicação)
7. [Screenshots](#screenshots)

## Sobre o Projeto

Este projeto é uma solução para o desafio técnico de front-end da BeTalent. O objetivo é construir a visualização de uma tabela com dados fornecidos por uma API simulada utilizando json-server. O projeto deve ser responsivo e permitir a pesquisa de dados através de um input de pesquisa.

## Mockup

Para orientação de estilos, visualização desktop e mobile, e outros padrões, foi seguido o projeto no `Figma` fornecido pela BeTalent.

## Requisitos Gerais

### Colunas da Tabela

- Imagem (thumb do/a usuário/a)
- Nome
- Cargo
- Data de admissão
- Telefone

### Funcionalidades Adicionais

- Input de pesquisa para filtrar dados por cargo, nome e telefone.
- Formatação de datas e telefones no front-end.

## Tecnologias Utilizadas
- `TypeScript`
- `React.js`
- `Tailwind CSS`

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- `Git`
- `Node.js`
- `Yarn`

## Instruções para Rodar a Aplicação

1. **Clone o Repositório**

   Clone este repositório do GitHub em sua máquina:

   ```bash
   git clone https://github.com/gialencar/desafio-be.git
   # e entre na pasta do projeto
   cd desafio-be
   ```

2. **Instale o json-server**

   Caso você não tenha o json-server instalado, instale-o utilizando:

   ```bash
   npm install -g json-server
   ```

3. **Inicie o json-server**

   ```bash
   json-server --watch db.json
   ```

4. **Instale as Dependências do Projeto**

   Na pasta do projeto, instale as dependências necessárias:

   ```bash
   yarn install
   ```

5. **Inicie o Projeto**

   Execute o comando para iniciar o projeto:

   ```bash
   yarn start
   ```

## Screenshots

![teste-be-capture-01](https://github.com/user-attachments/assets/de58355c-8bf6-444a-a28b-c48727545e51)


![teste-be-capture-02](https://github.com/user-attachments/assets/d149a107-c3d3-4959-9c93-ef362310a669)
