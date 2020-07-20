# プログラミングTypeScript

---

![表紙](https://cover.openbd.jp/9784873119045.jpg)

---

本リポジトリはオライリー・ジャパン発行書籍『[プログラミングTypeScript](http://www.oreilly.co.jp/books/9784873119045/)』（原書名『[Programming TypeScript](http://shop.oreilly.com/product/0636920158059.do)』）を読みながら、サンプルコードを書いていきます。


## Getting Started

```
npm install
npx ts-node ./src/index.ts
npx eslint ./src/index.ts
```

## How to Setup

```
npm init --yes
npm install --save-dev typescript tslint @types/node
npx tsc --init
npm install --save-dev ts-node
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
npx eslint --init
```

「付録H ESLintとAST」に沿って、非推奨になったtslintからeslintに変更した。
