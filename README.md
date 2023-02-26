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

packages/react/src/components
- crie seu novo componente aqui (usando o Stitches)

packages/docs/src/stories
- crie a documentação do seu novo componente para ser visualizado no Storybook

packages/tokens/src
- crie um novo token

packages/docs/pages/tokens
- crie a documentação do seu novo token

packages/docs/components
- crie e configure a visualização dos tokens

 packages/react/src/index.tsx
 - exportar tudo do seu novo componente 

```
Glossário

*[Token] = tema global dos componentes 

exemplo: as fontes, o tamanho das fontes, as cores...
```

