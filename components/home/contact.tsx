"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ElegantShape } from "@/components/ui/elegant-shape";
import Link from "next/link";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // フォームの参照を早めに保存
    setIsLoading(true);
    setStatus("idle");

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // レスポンスのステータスを確認
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error status:", response.status);
        console.error("Response error text:", errorText);
        setStatus("error");
        return;
      }

      // レスポンスがOKの場合のみJSONを解析
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset(); // 保存した参照を使用
        setShowSuccessModal(true); // 成功時にモーダルを表示
      } else {
        console.error("API Error:", result.error);
        setStatus("error");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] via-transparent to-violet-500/[0.03] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-rose-500/[0.15]"
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-white/90 to-violet-300">
                お問い合わせ
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/70 max-w-2xl mx-auto text-lg"
            >
              プロジェクトについてのご相談やお問い合わせは、
              以下のフォームからお気軽にご連絡ください。
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">
                    お名前
                  </label>
                  <Input
                    name="name"
                    required
                    placeholder="山田 太郎"
                    className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">
                    メールアドレス
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/40"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">
                  件名
                </label>
                <Input
                  name="subject"
                  required
                  placeholder="お問い合わせの件名"
                  className="bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">
                  メッセージ
                </label>
                <Textarea
                  name="message"
                  required
                  placeholder="お問い合わせ内容をご記入ください"
                  className="min-h-[150px] bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/40"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      送信する
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            <a
              href="mailto:shincodeinc@gmail.com"
              className="p-6 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
            >
              <Mail className="h-6 w-6 text-white/60 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                メールでのお問い合わせ
              </h3>
              <p className="text-white/40">shincodeinc@gmail.com</p>
            </a>
            <Link
              href="https://twitter.com/Shin_Engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
            >
              <MessageSquare className="h-6 w-6 text-white/60 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                SNSでのお問い合わせ
              </h3>
              <p className="text-white/40">X(旧Twitter): @Shin_Engineer</p>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />

      {/* 成功時のモーダル */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* オーバーレイ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowSuccessModal(false)}
            />

            {/* モーダル */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md mx-auto p-6"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-rose-500/[0.1] to-violet-500/[0.1] border border-white/[0.1] backdrop-blur-md">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    送信完了
                  </h3>
                  <p className="text-white/70 mb-6">
                    お問い合わせありがとうございます。
                    <br />
                    内容を確認次第、折り返しご連絡させていただきます。
                  </p>
                  <Button
                    onClick={() => setShowSuccessModal(false)}
                    className="bg-white/10 hover:bg-white/20 text-white"
                  >
                    閉じる
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* エラー時のメッセージ */}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 backdrop-blur-sm text-rose-500 z-50"
        >
          送信に失敗しました。時間をおいて再度お試しください。
        </motion.div>
      )}
    </section>
  );
}
