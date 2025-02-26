"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  FileCheck,
  MessageCircle,
  Rocket,
  Search,
  Wrench,
} from "lucide-react";
import { ElegantShape } from "@/components/ui/elegant-shape";

interface ProcessStepProps {
  title: string;
  description: string;
  icon: typeof Search;
  index: number;
}

function ProcessStep({
  title,
  description,
  icon: Icon,
  index,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative flex items-start gap-6 p-6 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-sm">
        {/* ステップ番号 */}
        <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold shadow-lg">
          {index + 1}
        </div>

        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/[0.08]">
            <Icon className="h-6 w-6 text-white/80 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/50 group-hover:text-white/70 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Process() {
  const steps = [
    {
      title: "要件ヒアリング",
      description:
        "プロジェクトの目的、要件、予算、スケジュールなどについて詳しくお伺いします。",
      icon: Search,
    },
    {
      title: "提案・見積もり",
      description:
        "ヒアリング内容を基に、最適な技術選定と実装方針を提案し、見積もりを作成します。",
      icon: Briefcase,
    },
    {
      title: "契約・着手",
      description:
        "提案内容にご同意いただいた後、契約を締結し、プロジェクトを開始します。",
      icon: FileCheck,
    },
    {
      title: "開発・実装",
      description:
        "アジャイル開発手法を用いて、迅速かつ柔軟に機能を実装していきます。",
      icon: Wrench,
    },
    {
      title: "レビュー・修正",
      description:
        "定期的なレビューと進捗報告を行い、フィードバックを反映していきます。",
      icon: MessageCircle,
    },
    {
      title: "納品・運用",
      description:
        "完成したプロダクトを納品し、必要に応じて運用サポートを提供します。",
      icon: Rocket,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-emerald-500/[0.03] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-cyan-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-emerald-500/[0.15]"
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white/90 to-emerald-300">
              開発プロセス
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            プロジェクトの成功に向けて、
            体系的な開発プロセスで確実に進めていきます。
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 max-w-2xl mx-auto"
        >
          <div className="relative p-6 rounded-xl bg-gradient-to-br from-cyan-500/[0.1] to-emerald-500/[0.1] border border-white/[0.1] backdrop-blur-sm">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full text-white font-semibold shadow-lg">
              納期目安
            </div>
            <p className="text-center text-white/80 text-lg mt-2">
              アプリの機能や複雑さによって異なりますが、
              <span className="font-bold text-white">
                小〜中規模のアプリは2〜4週間程度
              </span>
              で納品可能です。
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
    </section>
  );
}
