# EFT Item Hub

このプロジェクトは、Escape from Tarkov (タルコフ) のアイテム、弾薬、ハイドアウト、タスクなどを管理・検索するためのReactベースのウェブアプリケーションです。プレイヤーがゲーム内のリソースを効率的に管理できるよう支援します。

## 機能

- **弾薬管理**: 弾薬の選択と詳細表示 (AmmoAll.tsx, AmmoSelecter.tsx)
- **ハイドアウトアイテム**: ハイドアウトのレベルとアイテム管理 (HideoutItemAll.tsx, HideoutLevel.tsx)
- **タスク管理**: タスクアイテムの表示と設定 (TaskItemAll.tsx, TaskSelect.tsx)
- **その他**: ディーラー選択、設定オフキャンバス、共有機能など

## 技術スタック

- **React**: UIライブラリ
- **TypeScript**: 型安全なJavaScript
- **Vite**: 高速なビルドツール
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク
- **React Router**: ルーティング
- **React Table**: テーブル表示
- **ESLint**: コード品質チェック

## インストールと実行

1. 依存関係をインストール:

   ```bash
   pnpm install
   ```

2. 開発サーバーを起動:

   ```bash
   pnpm dev
   ```

3. ブラウザで `http://localhost:5173` にアクセス。

## ビルド

本番用ビルドを作成:

```bash
pnpm build
```

ビルド出力は `build/` フォルダに生成されます。

## デプロイ方法

1. `pnpm build` を実行して `build/` フォルダを生成。
2. 生成された `build/` フォルダの内容をウェブサーバーやホスティングサービスにアップロード。
   - **GitHub Pages**: `build/` フォルダを `gh-pages` ブランチにプッシュ。
   - **Vercel/Netlify**: `build/` フォルダをデプロイ。
   - **その他**: Apache/Nginxなどのサーバーに `build/` を配置。

プレビュー:

```bash
pnpm preview
```

## フォルダ構成

```
eftItemHub_react/
├── build/                 # ビルド出力 (dist相当)
│   ├── assets/            # コンパイルされたJS/CSS
│   ├── img/               # 画像ファイル
│   ├── json/              # JSONデータ
│   └── index.html         # メインHTML
├── public/                # 静的ファイル
│   ├── img/               # ゲーム画像 (Air Filtering Unit, ammo, etc.)
│   ├── json/              # ゲームデータ (ammo_dict.json, etc.)
│   ├── ads.txt
│   ├── manifest.json
│   └── robots.txt
├── src/                   # ソースコード
│   ├── assets/            # アセット
│   ├── components/        # Reactコンポーネント
│   │   ├── AmmoAll.tsx    # 弾薬一覧
│   │   ├── HideoutItemAll.tsx  # ハイドアウトアイテム
│   │   ├── TaskItemAll.tsx     # タスクアイテム
│   │   └── ...            # その他のコンポーネント
│   ├── json/              # ローカルJSONデータ
│   ├── styles/            # スタイルファイル
│   ├── utils/             # ユーティリティ関数
│   ├── main.tsx           # エントリーポイント
│   ├── types.ts           # TypeScript型定義
│   └── vite-env.d.ts      # Vite環境定義
├── eslint.config.js       # ESLint設定
├── index.html             # ルートHTML
├── package.json           # 依存関係とスクリプト
├── pnpm-lock.yaml         # pnpmロックファイル
├── tsconfig*.json         # TypeScript設定
├── vite.config.ts         # Vite設定
└── README.md              # このファイル
```

## 開発者向け

- **Linting**: `pnpm lint`
- **TypeScriptチェック**: `tsc -b`
- **ESLint拡張**: 必要に応じて `eslint-plugin-react-x` などを追加

## ライセンス

このプロジェクトはプライベートです。
