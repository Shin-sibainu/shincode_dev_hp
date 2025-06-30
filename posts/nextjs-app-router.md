---
title: 'Next.js App Routerの基礎：新しいルーティングシステムの完全理解'
date: '2025-06-26'
description: 'Next.js 13で導入されたApp Routerについて、基本概念から実践的な使い方まで詳しく解説。サーバーコンポーネント、レイアウトシステム、メタデータ管理などの重要なポイントを学びましょう。'
tags: ['Next.js', 'App Router', 'React', 'サーバーコンポーネント', 'Web開発']
image: '/blog/nextjs-app-router-og.jpg'
---

Next.js 13で導入されたApp Routerは、Reactアプリケーションの構築方法を根本的に変える新しいルーティングシステムです。この記事では、App Routerの基本概念から実践的な使い方まで詳しく解説します。

## App Routerとは？

App Routerは、React Server Components（RSC）を基盤とした新しいルーティングシステムです。従来のPages Routerと比較して、以下のような特徴があります：

- **サーバーコンポーネントがデフォルト**：パフォーマンスの向上とバンドルサイズの削減
- **レイアウトのネスト**：共通レイアウトの効率的な管理
- **ローディング状態とエラー処理**：組み込みのUI状態管理
- **並列ルート**：複数のページを同時に表示

## ディレクトリ構造

App Routerでは、`app`ディレクトリ内のフォルダ構造がそのままURLパスになります。

```
app/
├── page.tsx          # /
├── layout.tsx        # ルートレイアウト
├── blog/
│   ├── page.tsx      # /blog
│   └── [id]/
│       └── page.tsx  # /blog/[id]
└── api/
    └── posts/
        └── route.ts  # /api/posts
```

## 基本的なページの作成

各ルートには`page.tsx`ファイルが必要です。

```typescript
// app/blog/page.tsx
export default function BlogPage() {
  return (
    <div>
      <h1>ブログ一覧</h1>
      {/* コンテンツ */}
    </div>
  );
}
```

## レイアウトシステム

`layout.tsx`を使用して、複数のページで共有されるUIを定義できます。

```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <nav>
          {/* ナビゲーション */}
        </nav>
        <main>{children}</main>
        <footer>
          {/* フッター */}
        </footer>
      </body>
    </html>
  );
}
```

### ネストされたレイアウト

```typescript
// app/blog/layout.tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-container">
      <aside>
        {/* サイドバー */}
      </aside>
      <article>{children}</article>
    </div>
  );
}
```

## サーバーコンポーネントとクライアントコンポーネント

### サーバーコンポーネント（デフォルト）

```typescript
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    cache: 'no-store' // または 'force-cache'
  });
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

### クライアントコンポーネント

```typescript
// app/components/SearchBar.tsx
'use client'; // この宣言が必要

import { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="検索..."
    />
  );
}
```

## ローディングとエラー処理

### loading.tsx

```typescript
// app/blog/loading.tsx
export default function Loading() {
  return (
    <div className="spinner">
      <p>読み込み中...</p>
    </div>
  );
}
```

### error.tsx

```typescript
// app/blog/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>エラーが発生しました</h2>
      <button onClick={() => reset()}>再試行</button>
    </div>
  );
}
```

## Route Handlers (API Routes)

```typescript
// app/api/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await fetchPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newPost = await createPost(data);
  return NextResponse.json(newPost, { status: 201 });
}
```

## メタデータの管理

```typescript
// app/blog/[id]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  const post = await getPost(params.id);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}
```

## パフォーマンスの最適化

### 静的生成とISR

```typescript
// app/blog/[id]/page.tsx
export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

// revalidateオプションでISRを設定
export const revalidate = 3600; // 1時間ごとに再生成
```

### Parallel Routes（並列ルート）

```typescript
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
  analytics,
  metrics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  metrics: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="grid grid-cols-2">
        {analytics}
        {metrics}
      </div>
    </div>
  );
}
```

## ベストプラクティス

1. **適切なコンポーネントタイプの選択**
   - データフェッチが必要：サーバーコンポーネント
   - インタラクティブな機能：クライアントコンポーネント

2. **キャッシュ戦略の設定**
   - 静的コンテンツ：`force-cache`
   - 動的コンテンツ：`no-store`

3. **エラーハンドリングの実装**
   - 各ルートに`error.tsx`を配置
   - グローバルエラーは`app/global-error.tsx`

4. **パフォーマンスの考慮**
   - 可能な限りサーバーコンポーネントを使用
   - 適切な場所でSuspenseを使用

## まとめ

Next.js App Routerは、モダンなWebアプリケーション開発のための強力なツールです。サーバーコンポーネントを中心とした新しいアーキテクチャにより、パフォーマンスとDXの両方が大幅に向上しています。

この新しいルーティングシステムを理解し活用することで、より高速で保守性の高いアプリケーションを構築できるようになるでしょう。