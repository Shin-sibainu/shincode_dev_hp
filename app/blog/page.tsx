
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

// アイコンとカラーのマッピング
const postConfig: Record<string, { icon: string; gradient: string; hoverColor: string }> = {
  'react-hooks-guide': {
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradient: 'from-blue-600/20 to-blue-500/10',
    hoverColor: 'hover:border-blue-400/30 hover:shadow-blue-500/10'
  },
  'nextjs-app-router': {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    gradient: 'from-purple-600/20 to-purple-500/10',
    hoverColor: 'hover:border-purple-400/30 hover:shadow-purple-500/10'
  },
  'typescript-best-practices': {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    gradient: 'from-amber-600/20 to-amber-500/10',
    hoverColor: 'hover:border-amber-400/30 hover:shadow-amber-500/10'
  }
};

// デフォルトの設定
const defaultConfig = {
  icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  gradient: 'from-gray-600/20 to-gray-500/10',
  hoverColor: 'hover:border-gray-400/30 hover:shadow-gray-500/10'
};

function getPostDescription(id: string): string {
  const descriptions: Record<string, string> = {
    'react-hooks-guide': 'useState、useEffect、カスタムフックまで、React Hooksの基本から応用まで詳しく解説します。',
    'nextjs-app-router': '新しいルーティングシステムの完全理解。サーバーコンポーネントからレイアウトシステムまで。',
    'typescript-best-practices': '型安全で保守性の高いコードを書くための実践的なガイドライン。'
  };
  return descriptions[id] || '技術記事の内容をご紹介します。';
}

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  
  return (
    <section className="py-24 md:py-32 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            技術ブログ
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Web開発やAI技術に関する知見を共有し、技術トレンドや実践的なノウハウをお届けします。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPostsData.map(({ id, date, title }) => {
            const config = postConfig[id] || defaultConfig;
            const iconColor = id.includes('react') ? 'text-blue-400' : 
                             id.includes('next') ? 'text-purple-400' :
                             id.includes('typescript') ? 'text-amber-400' : 'text-gray-400';
            
            return (
              <article key={id} className="group">
                <Link href={`/blog/${id}`}>
                  <div className={`relative bg-gradient-to-br ${config.gradient} rounded-2xl p-8 h-full border border-white/10 ${config.hoverColor} transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl`}>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className={`w-5 h-5 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <div className="mb-4">
                      <div className={`w-12 h-12 ${iconColor.replace('text', 'bg')}/20 rounded-lg flex items-center justify-center mb-4`}>
                        <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={config.icon} />
                        </svg>
                      </div>
                    </div>
                    <h3 className={`text-xl font-semibold text-white mb-3 group-hover:${iconColor} transition-colors duration-300`}>
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {getPostDescription(id)}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
        
        {allPostsData.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">まだ記事が投稿されていません</p>
          </div>
        )}
      </div>
    </section>
  );
}
