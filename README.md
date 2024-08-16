## pure-frontend-kit

- ピュアな HTML/CSS/JavaScript のみで構成されたフロントエンド開発ライブラリ。

## インストール

```bash
npm install pure-frontend-kit
```

## CDN を用いたインストール、使用方法

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- CDNで読み込み -->
    <script src="https://unpkg.com/pure-frontend-kit@latest/dist/pure-frontend-kit.min.js"></script>
    <title>Document</title>
  </head>
  <body>
    <!-- トースト機能を利用 -->
    <button
      onclick="PureFrontendKit.showCustomToast('カスタムトーストメッセージ')"
    >
      トーストを表示
    </button>

    <!-- metaタグの機能を利用 -->
    <script>
      PureFrontendKit.addNoZoomMetaTag();
    </script>
  </body>
</html>
```
