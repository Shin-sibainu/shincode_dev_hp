"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Paintbrush,
  Server,
  Shield,
  Sparkles,
  Wrench,
} from "lucide-react";
import { ElegantShape } from "@/components/ui/elegant-shape";

interface SkillCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: typeof Code2;
  index: number;
}

function SkillCard({
  title,
  description,
  technologies,
  icon: Icon,
  index,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="relative h-full p-8 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/[0.12]">
        <div className="mb-5 inline-flex p-3 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/[0.08]">
          <Icon className="h-6 w-6 text-white/80 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-white/50 mb-6 group-hover:text-white/70 transition-colors duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-white/[0.05] border border-white/[0.08] text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const skills = [
    {
      title: "フロントエンド開発",
      description:
        "モダンなUIライブラリとフレームワークを使用し、インタラクティブなユーザー体験を実現します。",
      technologies: ["React", "Next.js", "TypeScript"],
      icon: Layout,
    },
    {
      title: "バックエンド開発",
      description:
        "スケーラブルなAPIとサーバーサイドロジックを実装し、堅牢なシステムを構築します。",
      technologies: ["Next.js", "Node.js", "Hono"],
      icon: Server,
    },
    {
      title: "データベース設計",
      description:
        "効率的なデータモデリングと最適化されたクエリで、高性能なデータ管理を実現します。",
      technologies: ["Supabase", "Neon", "Prisma"],
      icon: Database,
    },
    {
      title: "AI統合開発",
      description: "最新のAI技術を活用し、インテリジェントな機能を実装します。",
      technologies: ["OpenAI API", "Claude API", "Cursor"],
      icon: Sparkles,
    },
    {
      title: "UI/UXデザイン",
      description:
        "ユーザーの使いやすいUI/UXを採用します。参考にしたサイト等ありましたらご提示ください。",
      technologies: ["Shadcn/ui", "TailwindCSS"],
      icon: Paintbrush,
    },
    {
      title: "セキュリティ",
      description:
        "最新のセキュリティベストプラクティスを適用し、安全なアプリケーションを構築します。",
      technologies: ["OAuth", "JWT", "HTTPS", "Data Encryption"],
      icon: Shield,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-amber-500/[0.03] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-violet-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-amber-500/[0.15]"
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-white/90 to-amber-300">
              技術スキル
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            最新のWeb技術からAI開発まで、
            幅広い技術スタックを活用してプロジェクトを成功に導きます。
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              description={skill.description}
              technologies={skill.technologies}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
    </section>
  );
}
