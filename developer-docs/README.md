## npm リポジトリに公開

バージョンなどの設定をしたあと以下のコマンドを実行します。

```bash
npm login
rm -rf node_modules && npm install && npx webpack && npm publish
```
