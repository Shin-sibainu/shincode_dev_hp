"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Clock,
  Sparkles,
  Laptop,
  MessageSquare,
} from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: typeof Code2;
  index: number;
}

function FeatureCard({
  title,
  description,
  icon: Icon,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-rose-500/10 rounded-xl blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl" />

      <div className="relative h-full p-8 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.12] group-hover:translate-y-[-2px]">
        <div className="mb-5 inline-flex p-3 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/[0.08]">
          <Icon className="h-6 w-6 text-white/80 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white/90">
          {title}
        </h3>
        <p className="text-white/50 group-hover:text-white/70 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function Features() {
  const features = [
    {
      title: "Webアプリケーション",
      description:
        "特定の業務ニーズに合わせたカスタムWebアプリケーション。使いやすいUIと堅牢なバックエンドで、ビジネス課題を解決します。",
      icon: Code2,
    },
    {
      title: "SaaS開発",
      description:
        "サブスクリプションモデルのクラウドサービス開発。スケーラブルなアーキテクチャと使いやすいUIで、継続的な収益を生み出します。",
      icon: Sparkles,
    },
    {
      title: "業務効率化ツール",
      description:
        "社内業務の自動化や効率化を実現するツール。データ処理、レポート生成、タスク管理など、日々の業務をスムーズにします。",
      icon: Zap,
    },
    {
      title: "AIチャットボット",
      description:
        "顧客サポートや情報提供を自動化するAIチャットボット。24時間対応で、ユーザーの質問に的確に回答します。",
      icon: MessageSquare,
    },
    {
      title: "データ分析ダッシュボード",
      description:
        "ビジネスデータを視覚化し、意思決定をサポートするダッシュボード。リアルタイムでデータを追跡・分析できます。",
      icon: Laptop,
    },
    {
      title: "予約・管理システム",
      description:
        "店舗や施設の予約、在庫管理、顧客管理などを一元化するシステム。業務の効率化と顧客満足度の向上を実現します。",
      icon: Clock,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#030303]">
      <BackgroundPaths color="#6366f1" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              作成可能なアプリ・ツール
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            AIを活用した小～中規模のアプリケーションを短期間で開発。
            ビジネスの課題解決に最適なツールを提供します。
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
    </section>
  );
}
