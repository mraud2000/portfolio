import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, School } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useT } from "@/i18n/I18nContext";

export default function Education() {
  const t = useT();
  const items = [
    {
      icon: School,
      title: { fr: "Études secondaires", en: "Secondary education" },
      place: {
        fr: "Lycée du Lac Tanganyika — Section Scientifique",
        en: "Lake Tanganyika High School — Science Track",
      },
      period: "2016 — 2019",
      text: {
        fr: "Diplôme du secondaire avec spécialisation en sciences et mathématiques.",
        en: "Secondary diploma with specialization in science and mathematics.",
      },
    },
    {
      icon: BookOpen,
      title: { fr: "Formation Informatique", en: "IT Training" },
      place: { fr: "Centre de formation", en: "Training Center" },
      period: "2019 — 2020",
      text: {
        fr: "Initiation à la programmation, aux bases de données et au développement web.",
        en: "Introduction to programming, databases and web development.",
      },
    },
    {
      icon: GraduationCap,
      title: { fr: "Études Universitaires", en: "University Studies" },
      place: {
        fr: "Université du Lac Tanganyika — Génie Logiciel",
        en: "Lake Tanganyika University — Software Engineering",
      },
      period: "2020 — 2024",
      text: {
        fr: "Licence en informatique avec spécialisation en génie logiciel.",
        en: "Bachelor's degree in computer science with a specialization in software engineering.",
      },
    },
    {
      icon: Award,
      title: { fr: "Certifications", en: "Certifications" },
      place: { fr: "Plateformes en ligne", en: "Online platforms" },
      period: "2023 — 2025",
      text: {
        fr: "Certifications en React, Spring Boot, Docker et bonnes pratiques DevOps.",
        en: "Certifications in React, Spring Boot, Docker and DevOps best practices.",
      },
    },
  ];

  return (
    <section id="education" className="py-24 px-6 scroll-mt-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow={{ fr: "Parcours", en: "Education" }}
          title={{ fr: "Parcours Académique", en: "Academic Journey" }}
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/15 dark:via-white/15 to-transparent" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div
                key={it.title.fr}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur p-6 hover:border-black/20 dark:hover:border-white/20 transition">
                    <div className="text-xs text-[oklch(0.55_0.22_270)] dark:text-[oklch(0.85_0.18_270)] font-medium">{it.period}</div>
                    <h3 className="mt-1 text-lg font-semibold">{t(it.title)}</h3>
                    <div className="text-sm text-foreground/70">{t(it.place)}</div>
                    <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{t(it.text)}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-9 w-9 rounded-full bg-background border border-black/15 dark:border-white/15 flex items-center justify-center">
                  <it.icon size={16} className="text-[oklch(0.55_0.22_270)] dark:text-[oklch(0.85_0.18_270)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
