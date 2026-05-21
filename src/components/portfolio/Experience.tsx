import { motion } from "framer-motion";
import { Briefcase, Code, Users, Lightbulb } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useT } from "@/i18n/I18nContext";

export default function Experience() {
  const t = useT();
  const items = [
    {
      icon: Code,
      title: { fr: "Projets personnels", en: "Personal projects" },
      period: { fr: "2021 — Aujourd'hui", en: "2021 — Present" },
      text: {
        fr: "Développement régulier d'applications full-stack pour explorer de nouvelles technologies.",
        en: "Regular development of full-stack applications to explore new technologies.",
      },
    },
    {
      icon: Briefcase,
      title: { fr: "Freelance", en: "Freelance" },
      period: { fr: "2023 — Aujourd'hui", en: "2023 — Present" },
      text: {
        fr: "Création de sites et applications sur mesure pour des clients indépendants et PME.",
        en: "Building custom websites and apps for independent clients and SMBs.",
      },
    },
    {
      icon: Lightbulb,
      title: {
        fr: "Apprentissage universitaire et autonome",
        en: "University and self-directed learning",
      },
      period: { fr: "2020 — Aujourd'hui", en: "2020 — Present" },
      text: {
        fr: "Veille technologique constante, formations en ligne et certifications.",
        en: "Constant tech watch, online courses and certifications.",
      },
    },
    {
      icon: Users,
      title: { fr: "Collaborations", en: "Collaborations" },
      period: { fr: "2024 — Aujourd'hui", en: "2024 — Present" },
      text: {
        fr: "Travail en équipe sur des projets open-source et étudiants avec Git/GitHub.",
        en: "Team work on open-source and student projects using Git/GitHub.",
      },
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 scroll-mt-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow={{ fr: "Expérience", en: "Experience" }}
          title={{ fr: "Mon parcours professionnel", en: "My professional journey" }}
        />

        <div className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/15 dark:via-white/15 to-transparent" />
          <div className="space-y-6">
            {items.map((it, i) => (
              <motion.div
                key={it.title.fr}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[1.6rem] top-5 h-7 w-7 rounded-full bg-background border border-black/15 dark:border-white/15 flex items-center justify-center">
                  <it.icon size={14} className="text-[oklch(0.55_0.22_270)] dark:text-[oklch(0.85_0.18_270)]" />
                </div>
                <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur p-6 hover:border-black/20 dark:hover:border-white/20 transition">
                  <div className="text-xs text-[oklch(0.55_0.22_270)] dark:text-[oklch(0.85_0.18_270)] font-medium">{t(it.period)}</div>
                  <h3 className="mt-1 text-lg font-semibold">{t(it.title)}</h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{t(it.text)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
