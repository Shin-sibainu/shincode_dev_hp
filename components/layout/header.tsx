"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // ヘッダーの高さ分を考慮
      const targetPosition = section.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030303]/80 backdrop-blur-sm py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center space-x-2 group"
        >
          <Code2 className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-mono text-xl font-bold text-white">
            Shin<span className="text-rose-400">Code</span>_Dev
          </span>
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("works")}
            className="text-white/80 hover:text-white transition-colors"
          >
            制作実績
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-white/80 hover:text-white transition-colors"
          >
            スキル
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="text-white/80 hover:text-white transition-colors"
          >
            ブログ
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-white/10 hover:bg-white/20 text-white border-white/20"
          >
            <Code2 className="mr-2 h-4 w-4" />
            お問い合わせ
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}
