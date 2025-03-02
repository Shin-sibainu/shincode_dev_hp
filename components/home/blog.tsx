"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ElegantShape } from "@/components/ui/elegant-shape";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-8 rounded-xl bg-gradient-to-br from-amber-500/[0.1] to-violet-500/[0.1] border border-white/[0.1] backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <Construction className="h-12 w-12 text-white/60 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                ブログは準備中です
              </h3>
              <p className="text-white/70 mb-6">
                より良いコンテンツをお届けできるよう、現在準備を進めています。
                もうしばらくお待ちください。
              </p>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 group"
                disabled
              >
                Coming Soon
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
    </section>
  );
}
