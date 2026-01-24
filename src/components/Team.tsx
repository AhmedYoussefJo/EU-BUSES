"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Code2, ShieldCheck, Database, Laptop, Bot } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const teamData = [
  {
    name: { en: "Mohamed Ramadan", ar: "محمد رمضان" },
    role: { en: "Founder & CEO", ar: "المؤسس والرئيس التنفيذي" },
    image: "/mohamed.jpeg",
    bio: { 
      en: "Mechatronics Technology student. Founder of EU-BUS with a vision to transform student transportation through technology.",
      ar: "طالب تكنولوجيا الميكاترونكس. مؤسس EU-BUS برؤية لتحويل نقل الطلاب من خلال التكنولوجيا."
    },
    icon: <User className="w-5 h-5" />
  },
  {
    name: { en: "Ahmed Yousef", ar: "أحمد يوسف" },
    role: { en: "Data Analyst | Web Developer", ar: "محلل بيانات | مطور ويب" },
    image: "/Ahmed.jpg",
    bio: {
      en: "Specialized in data analysis and web development, focusing on building efficient data-driven solutions.",
      ar: "متخصص في تحليل البيانات وتطوير الويب، مع التركيز على بناء حلول فعالة تعتمد على البيانات."
    },
    icon: <Code2 className="w-5 h-5" />
  },
    {
    name: { en: "Gamal Abdelnasser", ar: "جمال عبد الناصر" },
    role: { en: "Mobile App & AI Specialist", ar: "أخصائي تطبيقات الهاتف والذكاء الاصطناعي" },
    image: "/gamal.jpeg",
    bio: {
      en: "Flutter expert & AI automation (n8n) specialist. Experienced in 'Vibe Coding' and AI-powered ERP systems with Clean Architecture.",
      ar: "خبير Flutter ومتخصص في أتمتة الذكاء الاصطناعي (n8n). خبرة في 'Vibe Coding' وأنظمة ERP المدعومة بالذكاء الاصطناعي."
    },
    icon: <Bot className="w-5 h-5" />
  },
  {
    name: { en: "Kareem Mohamed", ar: "كريم محمد" },
    role: { en: "Network & Security Specialist", ar: "أخصائي الشبكات والأمن السيبراني" },
    image: "/kareem.jpeg",
    bio: {
      en: "Ensuring the security and stability of our network infrastructure and protecting user data.",
      ar: "ضمان أمن واستقرار البنية التحتية لشبكتنا وحماية بيانات المستخدمين."
    },
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    name: { en: "Mahmoud Mohamed", ar: "محمود محمد" },
    role: { en: "System Admin | Backend Dev", ar: "مسؤول النظام | مطور خلفية" },
    image: "/mahmoud.jpeg",
    bio: {
      en: "System Administrator and ASP.Net Backend Developer responsible for server architecture and stability.",
      ar: "مسؤول النظام ومطور Backend ASP.Net مسؤول عن بنية الخادم واستقراره."
    },
    icon: <Database className="w-5 h-5" />
  },
  {
    name: { en: "Omar Essam", ar: "عمر عصام" },
    role: { en: "Network Admin & Security", ar: "مسؤول شبكات وأمن معلومات" },
    image: "/omar.jpeg",
    bio: {
      en: "Networking and Network Security specialist with a strong background in Database management.",
      ar: "متخصص في الشبكات وأمن المعلومات، ويمتلك خلفية قوية في إدارة قواعد البيانات."
    },
    icon: <ShieldCheck className="w-5 h-5" />
  },
];

export default function Team() {
  const { language, t } = useLanguage();

  return (
    <section id="team" className="min-h-[60vh] py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <div className="inline-block bg-blue-900/20 px-6 py-2 rounded-full mb-6">
             <span className="text-blue-400 font-bold tracking-wide text-sm uppercase">
               {t("The Minds Behind EU-BUS", "العقول المدبرة وراء EU-BUS")}
             </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-arabic">
            {t("Meet Our Team", "تعرف على فريقنا")}
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 hover:border-blue-500/30 transition-all hover:bg-zinc-800 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-zinc-700 group-hover:border-blue-500 transition-colors shadow-xl">
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={language === 'en' ? member.name.en : member.name.ar}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                      <User className="w-12 h-12" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-arabic">
                   {language === 'en' ? member.name.en : member.name.ar}
                </h3>
                <div className="flex items-center gap-2 text-blue-400 mb-4 text-sm font-medium bg-blue-500/10 px-3 py-1 rounded-full">
                  {member.icon}
                  <span className="font-arabic">{language === 'en' ? member.role.en : member.role.ar}</span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-arabic">
                  {language === 'en' ? member.bio.en : member.bio.ar}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
