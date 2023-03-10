# Documentação
[Storybook](https://daksonc.github.io/design-system/)

[NPM](https://www.npmjs.com/package/@zica-ui/react)

# Fluxo de criação de componentes

- clona o projeto
```js
git clone https://github.com/DaksonC/design-system.git
```
- instala o pacote node_modules
```js
npm i
```
- roda o build de todos os arquivos
```js
npm run build
```
- Abre o Storybook no navegador para auxilia-lo na criação do componente
```js
npm run dev
```
## Próximos passos 

- packages/react/src/components
-> crie seu novo componente aqui (usando o Stitches)

- packages/docs/src/stories
-> crie a documentação do seu novo componente para ser visualizado no Storybook

- packages/tokens/src
-> crie um novo token

- packages/docs/pages/tokens
-> crie a documentação do seu novo token

- packages/docs/components
-> crie e configure a visualização dos tokens

- packages/react/src/index.tsx
 -> exportar tudo do seu novo componente 

# Após a criação de um novo componente ou alguma alteração

O Changeset gerencia todos os builds
```js
npm run changeset
```

Comando para atualizar as versões do packages
```js
npm run version-packages
```
## Por fim basta subir para o Gihub

```js
git add .
```
```js
git commit -m '<seu commit>'
```
```js
git push
```
Com esses comandos as alterações serão publicadas no NPM e atualizadas no StoryBook.

```
_Glossário

*[Token] = tema global dos componentes 

exemplo: as fontes, o tamanho das fontes, as cores...
```
