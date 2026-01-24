"use client";

import { motion } from "framer-motion";
import { Bus, Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="https://www.facebook.com/share/1FNWFMgGke/?mibextid=wwXIfr" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
                <Bus className="h-6 w-6 text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-wider">
                EU-BUS
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="#about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                title={t("About Us", "عن الشركة")}
              >
                {t("About Us", "عن الشركة")}
              </Link>
              <Link
                href="#mission"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("Our Mission", "رسالتنا")}
              </Link>
              <Link
                href="#features"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("Why EU-BUS?", "لماذا EU-BUS؟")}
              </Link>
              <Link
                href="#team"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("Team", "فريق العمل")}
              </Link>
              <Link
                href="#contact"
                className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("Contact", "تواصل معنا")}
              </Link>
              
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-gray-300 hover:text-white ml-4 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors"
              >
                <Globe className="w-3 h-3" />
                {language === "en" ? "AR" : "EN"}
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center gap-2">
            <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-gray-300 hover:text-white border border-white/20 px-3 py-1 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors"
              >
                {language === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/20 backdrop-blur-md border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("About Us", "عن الشركة")}
            </Link>
            <Link
              href="#mission"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Our Mission", "رسالتنا")}
            </Link>
            <Link
              href="#features"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Why EU-BUS?", "لماذا EU-BUS؟")}
            </Link>
            <Link
              href="#team"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Team", "فريق العمل")}
            </Link>
            <Link
              href="#contact"
              className="text-white bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("Contact", "تواصل معنا")}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
