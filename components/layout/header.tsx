"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-[#030303]/80 backdrop-blur-sm py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="#hero" className="flex items-center space-x-2 group">
          <Code2 className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-mono text-xl font-bold text-white">
            Shin<span className="text-rose-400">Code</span>_Dev
          </span>
        </Link>

        {/* ハンバーガーメニューボタン */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#works"
            className="text-white/80 hover:text-white transition-colors"
          >
            制作実績
          </Link>
          <Link
            href="#skills"
            className="text-white/80 hover:text-white transition-colors"
          >
            スキル
          </Link>
          <Link
            href="#blog"
            className="text-white/80 hover:text-white transition-colors"
          >
            ブログ
          </Link>
          <Link href="#contact">
            <Button className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <Code2 className="mr-2 h-4 w-4" />
              お問い合わせ
            </Button>
          </Link>
        </nav>

        {/* モバイルナビゲーション */}
        <motion.nav
          className={`md:hidden fixed inset-x-0 top-[72px] bg-[#030303]/95 backdrop-blur-sm ${
            isMenuOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link
              href="#works"
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              制作実績
            </Link>
            <Link
              href="#skills"
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              スキル
            </Link>
            <Link
              href="#blog"
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ブログ
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block"
            >
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Code2 className="mr-2 h-4 w-4" />
                お問い合わせ
              </Button>
            </Link>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}
