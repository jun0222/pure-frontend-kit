npm ライブラリを自分用に作成する際の基本的な流れを解説します。

### 1. **npm パッケージのセットアップ**

- **npm の初期化:** プロジェクトディレクトリで`npm init`を実行し、`package.json`ファイルを作成します。名前、バージョン、説明などの基本情報を設定します。
- **コードの整理:**
  - JavaScript の機能は、`src`フォルダに配置するのが一般的です。
  - HTML や CSS の共通 UI コンポーネントは、それぞれ別のフォルダ（例：`components`）に配置し、HTML、CSS、JavaScript ファイルを分けて管理します。

### 2. **コードの記述**

- **ピュア JavaScript:** 依存関係を持たない純粋な JavaScript コードを作成します。モジュールとしてエクスポートすることで、再利用が簡単になります。
- **共通 UI コンポーネント:** 汎用的な HTML、CSS を作成し、複数のプロジェクトで再利用できるようにします。たとえば、ボタン、カード、モーダルなどをコンポーネントとして分けて管理します。

### 3. **テストとビルド**

- **テスト:** JavaScript コードの動作を確認するために、Jest や Mocha などのテスティングフレームワークを使用することをおすすめします。
- **ビルド:** 必要に応じて、Webpack や Rollup などを使ってコードをバンドルし、最適化された形式で出力します。

### 4. **ドキュメントの生成**

- **JSDoc:** コードにコメントを記述し、JSDoc を使ってドキュメントを自動生成することができます。`npm install jsdoc --save-dev`で JSDoc をインストールし、`jsdoc`コマンドでドキュメントを生成します。
- **README.md:** GitHub にリポジトリを公開する場合、`README.md`ファイルを作成し、使い方やインストール手順などを記載します。
- **TypeScript:** TypeScript を使用している場合、型定義ファイル（`*.d.ts`）を作成すると、自動的に型情報がドキュメントに含まれ、エディタでの補完も有効になります。

### 5. **パッケージの公開（オプション）**

- **npm に公開:** npm に公開する場合、`npm publish`コマンドを使用してパッケージを公開します。公開したくない場合は、ローカルでのみ利用することも可能です。

これらのステップに従うことで、簡単に自分用の npm ライブラリを作成し、効率的に管理・再利用できるようになります。また、ドキュメント生成ツールを利用することで、ライブラリの使い方を明確に伝えることができます。

はい、npm パッケージを CDN 経由で HTML の head タグから呼び出せるようにすることは可能です。以下の手順で進めることができます。

### 1. **ライブラリのバンドル**

- まず、ライブラリを CDN で提供できるように、単一の JavaScript ファイルにバンドルする必要があります。これには、Webpack や Rollup といったバンドラーを使用します。
- バンドルの際に、以下の設定を確認します。
  - **エントリーポイント:** ライブラリのメインファイル。
  - **出力形式:** UMD（Universal Module Definition）形式にすることで、様々な環境（CommonJS、AMD、ブラウザ）で使用できるようになります。

### 2. **CDN サービスにアップロード**

- npm に公開されているパッケージは、通常、自動的にいくつかの CDN サービスで提供されます。最も一般的なものは以下の通りです。
  - **UNPKG:** `https://unpkg.com/`
  - **jsDelivr:** `https://cdn.jsdelivr.net/`
- パッケージが npm に公開されている場合、次のように CDN から呼び出せます。

```html
<script src="https://unpkg.com/pure-frontend-kit@1.0.0/dist/pure-frontend-kit.min.js"></script>
```

または

```html
<script src="https://cdn.jsdelivr.net/npm/pure-frontend-kit@1.0.0/dist/pure-frontend-kit.min.js"></script>
```

ここで、`1.0.0`はバージョン番号です。常に最新バージョンを使いたい場合は、バージョン番号を省略するか、`latest`を使用します。

### 3. **HTML の head タグで呼び出す**

- 上記のように生成された CDN の URL を HTML の head タグ内に挿入することで、ページが読み込まれた時に自動的にライブラリが読み込まれるようになります。

```html
<head>
  <meta charset="UTF-8" />
  <title>Example Page</title>
  <script src="https://unpkg.com/pure-frontend-kit@latest/dist/pure-frontend-kit.min.js"></script>
</head>
```

### 4. **公開しない場合**

- 公開したくない場合や、プライベートなプロジェクトで使用する場合は、独自にホスティングするか、バンドルしたファイルをサーバーにアップロードして、直接 URL を指定することも可能です。

これらの手順を踏むことで、作成した npm ライブラリを CDN として提供し、HTML の head タグから簡単に呼び出せるようにできます。

以下は、iPhone でのダブルタップや入力フィールド選択時のズームを防止する meta タグを追加し、さらにカスタムトーストメッセージを表示する機能を持つ npm ライブラリを作成し、CDN から読み込めるようにするためのロードマップです。

### 1. **プロジェクトの初期設定**

- **ディレクトリ作成:** 新しいディレクトリを作成し、その中で作業を始めます。
  ```bash
  mkdir pure-frontend-kit
  cd pure-frontend-kit
  ```
- **npm の初期化:** `npm init`を実行し、`package.json`ファイルを作成します。
  ```bash
  npm init -y
  ```

### 2. **機能の実装**

- **メタタグ機能の追加:** iPhone でのズームを防止する meta タグを簡単に挿入するための機能を作成します。
- **トーストメッセージ機能の実装:** トーストメッセージを表示するためのシンプルな JavaScript 関数を作成します。

**`src/index.js`**ファイルを作成し、以下のコードを追加します。

```javascript
// メタタグを挿入する関数
export function addNoZoomMetaTag() {
  const metaTag = document.createElement("meta");
  metaTag.name = "viewport";
  metaTag.content =
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
  document.head.appendChild(metaTag);
}

// トーストメッセージを表示する関数
export function showCustomToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.cssText = `
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
  `;
  document.body.appendChild(toast);

  toast.style.visibility = "visible";
  setTimeout(() => {
    toast.style.visibility = "hidden";
    document.body.removeChild(toast);
  }, 3000);
}
```

### 3. **ビルド設定**

- **Webpack の設定:** ライブラリをバンドルし、CDN 経由で読み込める形式にします。

  - `webpack`と`webpack-cli`をインストールします。

  ```bash
  npm install webpack webpack-cli --save-dev
  ```

  - **`webpack.config.js`**ファイルを作成し、以下の内容を追加します。

  ```javascript
  const path = require("path");

  module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "pure-frontend-kit.min.js",
      path: path.resolve(__dirname, "dist"),
      library: "PureFrontendKit",
      libraryTarget: "umd",
    },
    mode: "production",
  };
  ```

- **ビルドの実行:** `webpack`コマンドを使ってビルドを実行し、`dist`フォルダにバンドルされたファイルが生成されます。
  ```bash
  npx webpack
  ```

### 4. **パッケージの公開**

- **npm に公開（オプション）:** 公開したい場合は、npm にログインし、`npm publish`コマンドを使用してパッケージを公開します。
  ```bash
  npm login
  npm publish
  ```

### 5. **CDN 経由で読み込む**

- 公開されたパッケージは、CDN サービス（例: `unpkg`や`jsDelivr`）を通じて利用可能になります。以下のように HTML の head タグ内にスクリプトを追加して読み込むことができます。

```html
<head>
  <meta charset="UTF-8" />
  <title>Example Page</title>
  <script src="https://unpkg.com/pure-frontend-kit@latest/dist/pure-frontend-kit.min.js"></script>
</head>
<body>
  <button
    onclick="PureFrontendKit.showCustomToast('カスタムトーストメッセージ')"
  >
    トーストを表示
  </button>
  <script>
    PureFrontendKit.addNoZoomMetaTag();
  </script>
</body>
```

### 6. **テストと改善**

- 作成したライブラリが正常に動作するかをテストし、必要に応じて改善を加えます。
- テスト環境を整えるために、Jest などのテスティングフレームワークを導入しても良いでしょう。

このロードマップに従えば、iPhone でのズームを防止する meta タグの挿入機能と、カスタムトーストメッセージを表示する機能を持つ npm ライブラリを作成し、それを CDN 経由で使用できるようになります。
