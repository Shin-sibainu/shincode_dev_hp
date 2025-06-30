import { getPostData, getAllPostIds } from '@/lib/posts';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const postData = await getPostData(params.id);
  
  const title = `${postData.title} | ShinCode_Dev`;
  const description = postData.description || `${postData.title}について詳しく解説します。Web開発の最新技術とベストプラクティスを学びましょう。`;
  const url = `https://shincode-dev.com/blog/${params.id}`;
  const image = postData.image || '/og-image.jpg';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'ShinCode_Dev',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: postData.title,
        },
      ],
      locale: 'ja_JP',
      type: 'article',
      publishedTime: postData.date,
      authors: ['ShinCode'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@shincode_dev',
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return (
    <section className="py-24 md:py-32 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Back to Blog Button */}
        <div className="mb-8">
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ブログ一覧に戻る
          </a>
        </div>

        {/* Article Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            {postData.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(postData.date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
          
          {/* Decorative line */}
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </header>

        {/* Article Content */}
        <article className="bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-800 backdrop-blur-sm shadow-2xl">
          <MarkdownRenderer content={postData.content} />
        </article>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex justify-center">
            <a 
              href="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ブログ一覧に戻る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}