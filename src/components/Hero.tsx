"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Info, Facebook, Instagram, Linkedin, X, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NetworkAnimation from "./NetworkAnimation";

export default function Hero() {
  const [showSocials, setShowSocials] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6 md:w-8 md:h-8" />,
      href: "https://www.facebook.com/share/1FNWFMgGke/?mibextid=wwXIfr",
      color: "bg-blue-600",
      label: "Facebook"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-8 md:h-8"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
      ), // Custom approximation or generic Phone for WhatsApp if SVG complex
      // Better WhatsApp SVG path:
      // <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.299-.15-1.258-.463-2.394-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.362-5.03C2.342 6.6 6.84 2.1 12.074 2.1S21.806 6.6 21.806 12.128c0 5.53-4.498 10.028-9.729 10.028"  />
      // Actually standard phone icon is safer for now or just generic message.
      href: "https://wa.me/201505794406",
      color: "bg-green-500",
      label: "WhatsApp"
    },
    {
      icon: <Instagram className="w-6 h-6 md:w-8 md:h-8" />,
      href: "#",
      color: "bg-pink-600",
      label: "Instagram"
    },
    {
      icon: <Linkedin className="w-6 h-6 md:w-8 md:h-8" />,
      href: "#",
      color: "bg-blue-700",
      label: "LinkedIn"
    }
  ];

  return (
    <div className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[30%_center] md:bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/banner.PNG')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <NetworkAnimation variant="mixed" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            EU-BUS
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your Safe Journey to Success
            <br />
            <span className="text-lg text-gray-300 mt-2 block font-arabic">
              رحلتك الآمنة نحو النجاح
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSocials(true)}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-blue-500 transition-colors cursor-pointer"
            >
              <Info className="w-5 h-5" />
              About Us
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowComingSoon(true)}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors"
            >
              Start Journey
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setShowComingSoon(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="relative p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowComingSoon(false)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                Coming Soon!
              </h2>
              <p className="text-blue-400 text-lg md:text-xl font-medium">
                Our journey is about to begin...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSocials && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl p-4"
            onClick={() => setShowSocials(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowSocials(false)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="flex gap-3 md:gap-8 items-center justify-center flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-2xl ${social.color} text-white shadow-lg hover:scale-110 transition-transform`}
                    >
                      {social.icon}  
                    </Link>
                  </motion.div>
                ))}
            {/* Custom WhatsApp Icon for clarity if needed, though color helps */}
            {/* Replaced Icon above with generic logic */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
