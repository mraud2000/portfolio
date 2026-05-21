import { motion } from "framer-motion";
import { Globe, Server, MonitorSmartphone, Palette, Database } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useT } from "@/i18n/I18nContext";

export default function Services() {
  const t = useT();
  const services = [
    {
      icon: Globe,
      title: { fr: "Développement Web", en: "Web Development" },
      text: {
        fr: "Sites vitrines, SaaS et applications web modernes, performantes et responsives.",
        en: "Showcase sites, SaaS and modern web applications — fast and responsive.",
      },
    },
    {
      icon: Server,
      title: { fr: "Développement Backend", en: "Backend Development" },
      text: {
        fr: "APIs robustes, architectures scalables avec Spring Boot, Django ou Node.js.",
        en: "Robust APIs and scalable architectures with Spring Boot, Django or Node.js.",
      },
    },
    {
      icon: MonitorSmartphone,
      title: { fr: "Applications Desktop", en: "Desktop Applications" },
      text: {
        fr: "Logiciels desktop multiplateformes en Java Swing / JavaFX.",
        en: "Cross-platform desktop software with Java Swing / JavaFX.",
      },
    },
    {
      icon: Palette,
      title: { fr: "UI/UX Moderne", en: "Modern UI/UX" },
      text: {
        fr: "Interfaces élégantes et intuitives inspirées des meilleurs standards 2026.",
        en: "Elegant, intuitive interfaces inspired by the best 2026 standards.",
      },
    },
    {
      icon: Database,
      title: { fr: "APIs & Bases de données", en: "APIs & Databases" },
      text: {
        fr: "Conception, modélisation et optimisation de bases de données SQL.",
        en: "Design, modeling and optimization of SQL databases.",
      },
    },
  ];

  return (
    <section id="services" className="py-24 px-6 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={{ fr: "Services", en: "Services" }}
          title={{ fr: "Ce que je propose", en: "What I offer" }}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title.fr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur p-6 hover:border-black/25 dark:hover:border-white/25 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-[oklch(0.55_0.22_270)]/30 to-[oklch(0.65_0.22_300)]/30 border border-black/10 dark:border-white/10 mb-4">
                <s.icon size={22} className="text-foreground" />
              </div>
              <h3 className="font-semibold text-lg">{t(s.title)}</h3>
              <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{t(s.text)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
