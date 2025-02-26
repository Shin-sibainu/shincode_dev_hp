"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ElegantShape } from "@/components/ui/elegant-shape";

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  index: number;
}

function PricingPlan({
  title,
  price,
  description,
  features,
  recommended,
  index,
}: PricingPlanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div
        className={`relative flex flex-col h-full p-8 rounded-xl backdrop-blur-sm border transition-all duration-500 ${
          recommended
            ? "bg-gradient-to-br from-white/[0.15] to-white/[0.05] border-white/[0.15]"
            : "bg-gradient-to-br from-white/[0.05] to-transparent border-white/[0.08]"
        }`}
      >
        {recommended && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="px-4 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg">
              おすすめ
            </span>
          </div>
        )}

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <div className="mb-3">
            <span className="text-3xl font-bold text-white">{price}</span>
            <span className="text-white/60 ml-1">〜</span>
          </div>
          <p className="text-white/50">{description}</p>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="p-1 rounded-full bg-emerald-500/10">
                  <Check className="h-3 w-3 text-emerald-500" />
                </div>
              </div>
              <span className="text-white/70">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          size="lg"
          className={`w-full mt-auto ${
            recommended
              ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600"
              : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
          }`}
        >
          お問い合わせ
        </Button>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  const plans = [
    {
      title: "ベーシック",
      price: "50万円",
      description: "小規模なWebサイトやアプリケーション向け",
      features: [
        "要件定義・設計",
        "レスポンシブデザイン",
        "基本的なCMS機能",
        "SEO対策",
        "3ヶ月間の保守サポート",
      ],
    },
    {
      title: "スタンダード",
      price: "100万円",
      description: "中規模なWebアプリケーション向け",
      features: [
        "要件定義・設計",
        "カスタムデザイン",
        "アカウント管理機能",
        "決済システム連携",
        "API開発・連携",
        "6ヶ月間の保守サポート",
      ],
      recommended: true,
    },
    {
      title: "エンタープライズ",
      price: "200万円",
      description: "大規模なシステム開発向け",
      features: [
        "要件定義・設計",
        "完全カスタマイズ対応",
        "AI機能の統合",
        "高度なセキュリティ対策",
        "パフォーマンス最適化",
        "1年間の保守サポート",
      ],
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.03] via-transparent to-emerald-500/[0.03] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-teal-500/[0.15]"
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-white/90 to-emerald-300">
              料金プラン
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            プロジェクトの規模や要件に応じて、
            最適なプランをお選びいただけます。
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan
              key={plan.title}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              recommended={plan.recommended}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 max-w-3xl mx-auto"
        >
          <div className="relative p-6 rounded-xl bg-gradient-to-br from-teal-500/[0.1] to-emerald-500/[0.1] border border-white/[0.1] backdrop-blur-sm">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full text-white font-semibold shadow-lg">
              料金について
            </div>
            <div className="space-y-2 text-center">
              <p className="text-white/80">
                具体的な料金は、プロジェクトの要件によって変動する場合があります。
              </p>
              <p className="text-white/80">
                規模に応じて柔軟に対応いたしますので、カスタムプランについてもお気軽にご相談ください。
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
    </section>
  );
}
