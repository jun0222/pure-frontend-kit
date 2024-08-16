## npm リポジトリに公開

package.json のバージョン指定などをしたあと以下のコマンドを実行します。

＊CDN 経由で取得ができないばあい、CDN の URL を実際に観にいく。

```bash
npm login
rm -rf node_modules && npm install && npx webpack && npm publish
```
