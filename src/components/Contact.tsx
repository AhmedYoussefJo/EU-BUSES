"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import NetworkAnimation from "./NetworkAnimation";

export default function Contact() {
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <footer id="contact" className="bg-zinc-800 text-white py-20 relative overflow-hidden">
      <NetworkAnimation />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          
          {/* Contact Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block bg-blue-900/20 px-4 py-2 rounded-full mb-4">
                <span className="text-blue-500 font-bold text-sm tracking-wide">
                  {t("GET IN TOUCH", "تواصل معنا")}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-arabic">
                {t("Let's Start A Conversation", "لنبدأ محادثة")}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-arabic">
                {t(
                  "Have questions about our services? We are here to help you and provide the best student transportation experience.",
                  "هل لديك أسئلة حول خدماتنا؟ نحن هنا لمساعدتك وتقديم أفضل تجربة نقل طلابي."
                )}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg text-blue-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t("Phone Number", "رقم الهاتف")}</h3>
                  <p className="text-gray-400 text-left" dir="ltr">+20 150 579 4406</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg text-blue-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t("Email Address", "البريد الإلكتروني")}</h3>
                  <p className="text-gray-400">info@eu-bus.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg text-blue-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t("Location", "العنوان")}</h3>
                  <p className="text-gray-400 font-arabic">
                    {t("Egypt, Menoufia", "مصر، المنوفية")}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800">
              <h3 className="font-bold text-lg mb-4 font-arabic">{t("Follow Us", "تابعنا على")}</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1FNWFMgGke/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-3 rounded-full hover:bg-blue-600 transition-colors text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-pink-600 transition-colors text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-blue-700 transition-colors text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                 <a href="https://wa.me/201505794406" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-3 rounded-full hover:bg-green-600 transition-colors text-white">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900 p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 print:text-black font-arabic">
                    {t("Full Name", "الاسم بالكامل")}
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={t("John Doe", "محمد أحمد")}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 font-arabic">
                    {t("Phone Number", "رقم الهاتف")}
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+20..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 font-arabic">
                  {t("Email Address", "البريد الإلكتروني")}
                </label>
                <input 
                  type="email" 
                  className="w-full bg-black/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="example@domain.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 font-arabic">
                  {t("Your Message", "رسالتك")}
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-black/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder={t("How can we help you?", "كيف يمكننا مساعدتك؟")}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                <span className="font-arabic">{t("Send Message", "إرسال الرسالة")}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
              </button>
            </form>
          </motion.div>
        
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center">
             <p className="text-gray-500">
               &copy; {new Date().getFullYear()} EU-BUS. {t("All rights reserved.", "جميع الحقوق محفوظة.")}
             </p>
        </div>
      </div>
    </footer>
  );
}
