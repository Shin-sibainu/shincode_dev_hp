"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ElegantShape } from "@/components/ui/elegant-shape";
import Link from "next/link";

export function Blog() {
  return (
    <section id="blog" className="relative py-24 md:py-32 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-violet-500/[0.03] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-amber-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-violet-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-white/90 to-violet-300">
              技術ブログ
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Web開発やAI技術に関する知見を共有し、
            技術トレンドや実践的なノウハウをお届けします。
          </motion.p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* React Hooks Article */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href="/blog/react-hooks-guide">
              <div className="relative bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-2xl p-8 h-full border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-blue-400" />
                </div>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  React Hooksの完全ガイド
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  useState、useEffect、カスタムフックまで、React Hooksの基本から応用まで詳しく解説します。
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2025年6月27日
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Next.js App Router Article */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href="/blog/nextjs-app-router">
              <div className="relative bg-gradient-to-br from-purple-600/20 to-purple-500/10 rounded-2xl p-8 h-full border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-purple-400" />
                </div>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  Next.js App Routerの基礎
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  新しいルーティングシステムの完全理解。サーバーコンポーネントからレイアウトシステムまで。
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2025年6月26日
                </div>
              </div>
            </Link>
          </motion.article>

          {/* TypeScript Best Practices Article */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href="/blog/typescript-best-practices">
              <div className="relative bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-2xl p-8 h-full border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-amber-400" />
                </div>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  TypeScriptベストプラクティス2025
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  型安全で保守性の高いコードを書くための実践的なガイドライン。
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2025年6月25日
                </div>
              </div>
            </Link>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog" passHref>
            <Button
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 group"
            >
              すべての記事を見る
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
    </section>
  );
}
