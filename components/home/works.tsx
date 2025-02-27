"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ElegantShape } from "@/components/ui/elegant-shape";

interface WorkCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  index: number;
}

function WorkCard({
  title,
  description,
  tags,
  image,
  url,
  index,
}: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="flex flex-col h-full overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-sm">
          <div className="relative aspect-[16/9] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-rose-500/10 mix-blend-overlay opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col flex-grow p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-white/[0.05] border border-white/[0.08] text-white/60 hover:bg-white/10 hover:text-white/80 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90">
              {title}
            </h3>
            <p className="text-white/50 group-hover:text-white/70 transition-colors duration-300 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export function Works() {
  const works = [
    {
      title: "Notionブログ構築プラットフォーム",
      description: "NotionをCMSにしたブログ投稿ができるプラットフォーム",
      tags: ["Next.js", "TypeScript", "Notion API", "Neon"],
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=2940&q=80",
      url: "https://www.notepress.xyz",
    },
    {
      title: "企業/個人ホームページ",
      description: "最新のAIツールを活用した高品質なHP開発",
      tags: ["Next.js", "TypeScript", "Shadcn/ui", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2940&q=80",
      url: "https://ai-driven-online-course.vercel.app",
    },
    {
      title: "ブログメディア",
      description: "高品質なブログメディアをNotionと連携して開発",
      tags: ["Next.js", "TypeScript", "Notion"],
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2940&q=80",
      url: "https://classic.notepress.xyz",
    },
    // {
    //   title: "不動産マッチングアプリ",
    //   description:
    //     "物件検索から内見予約まで、スムーズな不動産取引を実現するマッチングプラットフォームの開発。",
    //   tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    //   image:
    //     "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2940&q=80",
    // },
    // {
    //   title: "オンライン学習プラットフォーム",
    //   description:
    //     "インタラクティブな学習体験を提供する、モダンなオンライン教育プラットフォームの開発。",
    //   tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    //   image:
    //     "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2940&q=80",
    // },
    // {
    //   title: "eコマースプラットフォーム",
    //   description:
    //     "最新のテクノロジーを活用した、高パフォーマンスなオンラインショッピングプラットフォームの開発。",
    //   tags: ["Next.js", "TypeScript", "Shopify", "TailwindCSS"],
    //   image:
    //     "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=2940&q=80",
    // },
    // {
    //   title: "健康管理アプリ",
    //   description:
    //     "ユーザーの健康データを分析し、パーソナライズされたアドバイスを提供するヘルスケアアプリケーションの開発。",
    //   tags: ["React Native", "TypeScript", "Firebase", "Redux"],
    //   image:
    //     "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=2940&q=80",
    // },
    // {
    //   title: "SNSプラットフォーム",
    //   description:
    //     "リアルタイムコミュニケーションと高度なコンテンツ共有機能を備えたソーシャルネットワークの開発。",
    //   tags: ["Next.js", "GraphQL", "MongoDB", "Socket.io"],
    //   image:
    //     "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=2940&q=80",
    // },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] via-transparent to-indigo-500/[0.03] blur-3xl" />

      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={800}
          height={200}
          rotate={15}
          gradient="from-rose-500/[0.08] to-transparent"
          className="right-[-20%] top-[10%]"
        />
        <ElegantShape
          delay={0.4}
          width={600}
          height={160}
          rotate={-12}
          gradient="from-indigo-500/[0.08] to-transparent"
          className="left-[-10%] top-[40%]"
        />
        <ElegantShape
          delay={0.5}
          width={400}
          height={120}
          rotate={8}
          gradient="from-violet-500/[0.08] to-transparent"
          className="right-[10%] bottom-[20%]"
        />
        <ElegantShape
          delay={0.6}
          width={300}
          height={80}
          rotate={-20}
          gradient="from-cyan-500/[0.08] to-transparent"
          className="left-[20%] bottom-[10%]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-white/90 to-indigo-300">
                開発実績
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/70 max-w-2xl text-lg"
            >
              クライアントのニーズに応じた、
              高品質なWeb開発の実績をご紹介します。
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Button
              size="lg"
              className="bg-transparent hover:bg-white/10 text-white border border-white/20 group"
            >
              すべての実績を見る
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {works.map((work, index) => (
            <WorkCard
              key={work.title}
              title={work.title}
              description={work.description}
              tags={work.tags}
              image={work.image}
              url={work.url}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
    </section>
  );
}
