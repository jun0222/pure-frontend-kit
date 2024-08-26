## npm リポジトリに公開

package.json のバージョン指定などをしたあと以下のコマンドを実行します。

＊CDN 経由で取得ができないばあい、CDN の URL を実際に観にいく。

```bash
npm login
rm -rf node_modules && npm install && npx webpack && npm publish
```

## 機能を追加するとき

1. `src/` に機能を追加する。
2. `src/index.js` に export を追加する。
3. example ディレクトリに機能の使い方を記述する。

※動作確認は npm リポジトリに push して直接実施している。  
 CDN から読み込んだ時、latest が最新になるのは遅れるので注意。
