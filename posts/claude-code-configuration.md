---
title: "Claude CodeのCLAUDE.mdファイル完全ガイド：効率的なAIペアプログラミングの設定術"
date: "2025-06-28"
---

Claude Code を最大限に活用するために欠かせないのが、CLAUDE.md ファイルの適切な設定です。この記事では、2025 年最新のベストプラクティスに基づいて、効果的な CLAUDE.md ファイルの作成方法を解説します。

## CLAUDE.md ファイルとは？

CLAUDE.md ファイルは、Claude Code がプロジェクトのコンテキストを理解するための設定ファイルです。このファイルの内容は、すべてのプロンプトの前に自動的に付加され、AI がプロジェクトの規約や構造を理解する手助けをします。

## 基本原則：簡潔さが鍵

CLAUDE.md ファイルを作成する際の最も重要な原則は「**簡潔であること**」です。

```markdown
# ❌ 悪い例：冗長で説明的すぎる

この components フォルダには、アプリケーション全体で使用される
再利用可能な React コンポーネントが格納されています。各コンポーネントは
独立して動作し、プロップスを通じてデータを受け取ります。

# ✅ 良い例：簡潔で要点のみ

components/ - 再利用可能な UI コンポーネント
```

なぜ簡潔さが重要なのか：

- トークン使用量を節約（コストとパフォーマンスの両面で重要）
- ノイズを減らし、本質的な情報に集中
- Claude にとって理解しやすい形式

## 効果的な CLAUDE.md ファイルの構成

### 1. プロジェクト概要

```markdown
# プロジェクト名

Next.js 15 App Router + TypeScript + Tailwind CSS

## 主要技術スタック

- Next.js 15.0
- React 19
- TypeScript 5.5
- Tailwind CSS 3.4
- Shadcn UI
```

### 2. ディレクトリ構造（重要な部分のみ）

```markdown
## ディレクトリ構造
```

src/
├── app/ # App Router
├── components/ # 共有コンポーネント
├── lib/ # ユーティリティ関数
└── types/ # TypeScript 型定義

```

```

### 3. 開発規約

```markdown
## 開発規約

### コーディングスタイル

- ES モジュール使用（CommonJS 不可）
- 関数コンポーネントのみ（クラスコンポーネント不可）
- 型定義は必須

### 命名規則

- コンポーネント: PascalCase
- ファイル: kebab-case
- 変数/関数: camelCase

### Git 規約

- ブランチ: feature/_, fix/_, chore/\*
- コミット: conventional commits 形式
```

### 4. 環境設定

````markdown
## 環境設定

### 開発サーバー起動

```bash
npm run dev -- --turbo  # Turbopack使用
```
````

### 環境変数

- .env.local 必須
- NEXT*PUBLIC*\*でクライアント側変数を定義

````

### 5. 重要な注意事項

```markdown
## 注意事項

- Next.js 15ではGET Route Handlersがデフォルトでキャッシュされない
- サーバーコンポーネントがデフォルト（'use client'は必要な場合のみ）
- app/ディレクトリ内でのみルーティング定義
````

## 高度な設定テクニック

### 1. ディレクトリ別の CLAUDE.md

プロジェクトの特定の部分に固有の情報は、サブディレクトリに CLAUDE.md を配置できます：

```bash
src/
├── CLAUDE.md           # プロジェクト全体の設定
├── components/
│   └── CLAUDE.md      # コンポーネント固有の規約
└── app/api/
    └── CLAUDE.md      # API固有の設定
```

### 2. メモリ管理の活用

メッセージの先頭に`#`を付けることで、情報を CLAUDE.md に保存するか尋ねられます：

```
# このプロジェクトではZodを使用してAPIレスポンスの検証を行う
```

保存オプション：

- **Project memory (Checked in)**: チームで共有
- **Project memory (Local/Gitignored)**: ローカルのみ
- **User memory**: 個人設定（~/.claude/CLAUDE.md）

### 3. カスタムコマンドの設定

`.claude/commands/`フォルダに Markdown ファイルを作成してカスタムコマンドを定義：

```markdown
<!-- .claude/commands/test-component.md -->

# Test Component

コンポーネントのテストファイルを生成します。

$ARGUMENTS コンポーネントのテストファイルを以下の規約で作成：

- Testing Library を使用
- ユーザーインタラクションをテスト
- スナップショットテストは避ける
```

### 4. 思考モードの活用

複雑な問題に対しては、思考モードをトリガーする単語を使用：

- `think` - 基本的な思考モード
- `think hard` - より深い思考
- `think harder` - さらに深い思考
- `ultrathink` - 最大レベルの思考

## ベストプラクティスのまとめ

### やるべきこと ✅

1. **定期的なメンテナンス**: CLAUDE.md ファイルは時間とともに肥大化するため、定期的に見直す
2. **チーム共有**: プロジェクト固有の設定は Git にコミット
3. **階層的な構成**: グローバル設定とローカル設定を適切に分離
4. **簡潔な記述**: 箇条書きと短い文で要点のみを記載

### 避けるべきこと ❌

1. **長い説明文**: Claude は開発者であり、基本的な概念の説明は不要
2. **冗長な情報**: フォルダ名から明らかな情報は記載しない
3. **古い情報の放置**: 使用しなくなった設定は削除
4. **すべてを記載**: 本当に必要な情報のみを厳選

## 実践例：Next.js 15 プロジェクトの CLAUDE.md

````markdown
# Next.js 15 E-commerce Project

## Tech Stack

- Next.js 15.0 (App Router)
- React 19
- TypeScript 5.5
- Tailwind CSS + Shadcn UI
- Prisma + PostgreSQL
- Stripe API

## Key Commands

```bash
npm run dev -- --turbo    # Dev server with Turbopack
npm run build            # Production build
npm run db:push          # Update database schema
```
````

## Conventions

- Server Components by default
- Use 'use client' only when needed
- Colocate components with routes
- API routes in app/api/
- Types in dedicated .types.ts files

## Important

- GET routes NOT cached by default in Next.js 15
- Use generateStaticParams for dynamic routes
- Prefer Server Actions over API routes
- staleTimes config for client-side caching

## Project Structure

```
app/
├── (shop)/          # Public routes
├── (admin)/         # Admin routes (auth required)
├── api/            # API endpoints
└── actions/        # Server Actions
```

このような CLAUDE.md ファイルを適切に設定することで、Claude Code とのペアプログラミングがより効率的かつ生産的になります。定期的な見直しと更新を忘れずに、プロジェクトの成長に合わせて設定を進化させていきましょう。
