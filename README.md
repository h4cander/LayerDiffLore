# LayerDiffLore

日本語 | [English](README_EN.md)

レイヤー差分の可視化ツール。複数の画像レイヤーの合成効果と差分を表示するVue.jsベースのアプリケーション。

(A Vue.js-based layer difference visualization tool for displaying layered image compositing effects and differences across multiple images.)

## 機能

- 📁 **左パネル**: すべてのレイヤーリストを表示、クリック可能なレイヤートグル機能
- 🎨 **中央ビュー**: レイヤー合成結果と画像テキスト説明を表示
- 📚 **右パネル**: 参照画像とヒント情報を表示
- 🔄 **マルチシーン対応**: 異なるレイヤーの組み合わせ切り替えで様々な効果をデモンストレーション

## クイックスタート

### 1. プロジェクトをダウンロード

```
https://github.com/h4cander/LayerDiffLore/archive/refs/heads/master.zip
```

またはGitでクローン：
```bash
git clone https://github.com/h4cander/LayerDiffLore.git
```

### 2. 展開

ダウンロードしたファイルをローカルフォルダに展開してください。

### 3. 画像を準備

- 好きな場所に画像を配置してください（例：`sample/`、`assets/`など）
- 参照画像を任意の場所に配置してください（例：`refs/`、`assets/ref/`など）
- JavaScript設定ファイルでファイルパスを更新してください

### 4. JavaScriptを設定

`sample/sample1.js`を編集してください（または独自の設定ファイルを作成）：

```javascript
PageData.import({
    name: "シーン名",
    
    note: `シーンの説明
`,
    
    // 参照画像とヒント（#はタイトル、!は画像）
    refs: `
# 参照 1
!refs/ref1.png
参照画像の説明

# 参照 2
!refs/ref2.png
別の参照画像の説明
`,
    
    // レイヤー設定 - 上から下へリスト（ドローソフトのように）
    layers: [
      { url: "sample/top.png", name: "トップレイヤー", desc: "一番上のレイヤー画像" },
      { url: "sample/middle.png", name: "ミドルレイヤー", desc: "中間レイヤー" },
        { url: "sample/bottom.png", name: "ボトムレイヤー", desc: "一番下のレイヤー画像" },
    ].reverse(),
    
    // シーンと画像テキスト内容（%で表示するレイヤーを指定）
    contents: `
# シーン 1
%sample/bottom.png
%sample/middle.png
%sample/top.png
シーン1の説明

# シーン 2
%sample/bottom.png
%sample/top.png
シーン2の説明（中間レイヤーは非表示）

# シーン 3
%sample/bottom.png
シーン3の説明（ボトムレイヤーのみ表示）
`
});
```

### 5. HTMLスクリプトをリンク

`index.html`に`<script>`タグを追加して設定ファイルを読み込みます：

```html
<script src="./sample/sample1.js"></script>
<script src="./sample/sample2.js"></script>
```

これらのタグをPageDataクラス定義の後（メインのVueアプリスクリプトの前）に追加してください。新しい設定ファイルを作成したら、対応する`<script>`タグを追加してください。

### 6. ブラウザで開く

`index.html`をウェブブラウザで直接開いて使用できます。

## 設定ガイド

### レイヤー設定（layers）

- **url**: 画像ファイルパス
- **name**: レイヤー名（左パネルに表示）
- **desc**: レイヤーの説明（ホバー時に表示）
- ⚠️ **重要**: レイヤーの順序は重ね合わせの順序を決めます。下のレイヤーを配列の最初に配置してください

### シーン設定（contents）

- `# タイトル`で各シーンを定義
- `%画像パス`で表示するレイヤーを指定
- 順序は重ね合わせ順序を示します（下のレイヤーを最初に、上のレイヤーを最後に）
- 残りのテキストはシーンの説明になります

### 参照画像（refs）

- `# タイトル`でセクションヘッダーを定義
- `!画像パス`で画像を埋め込み
- 残りのテキストは説明になります
- デザイン参考資料とヒント情報を提供

## ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

### 依存関係

このプロジェクトは以下のオープンソースライブラリを使用しています：

- **[Vue.js](https://vuejs.org/)** (v3.5.24) - Copyright (c) 2018-present Evan You
  - MITライセンスの下でライセンス
  - ソース: https://github.com/vuejs/core


