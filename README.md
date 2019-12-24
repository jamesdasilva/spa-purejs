# SPA sem frameworks e libs

Para o desenvolvimento dessa aplicação não foram utilizados frameworks JavaScript nem mesmo de CSS.

### Front End Architecture

![Architecture Model](arquitetura-app.png)

### Executando os testes

Executar um teste:
```
npm run test
```
Ativar testes automáticos:
```
npm run test:tdd
```

### Verificando estilo de codificação

Você pode verificar o estilo de codificação com o comando:
```
npm run lint
```

### Fazendo Build

Para fazer o build do produto, deve utilizar o comando:
```
npm run build
```
Modo escuta: 
```
npm run build:watch
```
Versão para produção (arquivo minificado):
```
npm run build:prod
```

## Ferramentas utilizadas

* [Webpack](https://webpack.js.org) - A static module bundler for modern JavaScript applications.
* [Babel](https://babeljs.io/) - The compiler for writing next generation JavaScript.
* [Mocha](https://mochajs.org/) - The fun, simple, flexible JavaScript test framework.
* [Chai](http://chaijs.com/) - A BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
* [ESLint](https://eslint.org/) - Pluggable JavaScript linter.
