# プロジェクトセットアップの記録

## 1. 初期環境構築

### 1.1 プロジェクト初期化

- `package.json`の作成と必要な依存関係の定義

```json
{
  "name": "axios-test",
  "version": "1.0.0",
  "description": "TypeScript Node.js project",
  "main": "dist/index.js",
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "dev": "ts-node src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### 1.2 TypeScript 設定

- `tsconfig.json`の作成

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "lib": ["es2020"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### 1.3 依存関係のインストール

```bash
npm install
npm install axios
```

インストールされた主な依存関係：

- typescript: ^5.3.3
- ts-node: ^10.9.2
- @types/node: ^20.11.24
- axios: ^1.8.2

## 2. サンプルコードの実装

### 2.1 ソースコードの作成

`src/index.ts`に axios を使用した HTTP リクエストのサンプルを実装：

- GET: 投稿一覧の取得
- POST: 新規投稿の作成
- PUT: 投稿の更新
- DELETE: 投稿の削除

## 3. GitHub へのプッシュ

### 3.1 Git 初期化

```bash
git init
git config --global user.name "[username]"
git config --global user.email "[email]"
```

### 3.2 .gitignore の設定

```
node_modules/
dist/
.env
*.log
.DS_Store
```

### 3.3 初期コミットとプッシュ

```bash
git add .
git commit -m "Initial commit: TypeScript Axios sample project"
git remote add origin https://github.com/[username]/axios-test.git
git branch -M main
git push -u origin main
```

## 4. ドキュメント更新

### 4.1 README.md の更新

- プロジェクトの説明
- セットアップ手順
- 機能一覧
- 使用技術とバージョン情報の追加

### 4.2 バージョン情報の追加

```bash
git add README.md
git commit -m "docs: 使用技術のバージョンを追加"
git push
```

## 5. プロジェクト構造

```
axios-test/
├── package.json        # プロジェクトの設定と依存関係
├── tsconfig.json      # TypeScriptの設定
├── .gitignore        # Git除外設定
├── README.md         # プロジェクトの説明
└── src/
    └── index.ts     # メインのソースファイル
```
