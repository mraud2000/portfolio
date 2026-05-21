import { motion } from "framer-motion";
import { Code2, Layout, Database, Rocket, BookOpen } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useT } from "@/i18n/I18nContext";

export default function About() {
  const t = useT();
  const items = [
    {
      icon: Code2,
      title: { fr: "Passion du code", en: "Passion for code" },
      text: {
        fr: "Une passion profonde pour le développement logiciel et la création de solutions élégantes.",
        en: "A deep passion for software development and crafting elegant solutions.",
      },
    },
    {
      icon: Layout,
      title: { fr: "Interfaces modernes", en: "Modern interfaces" },
      text: {
        fr: "Conception d'interfaces soignées, intuitives et orientées utilisateur.",
        en: "Designing polished, intuitive and user-focused interfaces.",
      },
    },
    {
      icon: Database,
      title: { fr: "Full Stack", en: "Full Stack" },
      text: {
        fr: "Maîtrise du frontend, du backend et des bases de données pour livrer du bout en bout.",
        en: "Frontend, backend and database expertise to deliver end-to-end.",
      },
    },
    {
      icon: Rocket,
      title: { fr: "Applications modernes", en: "Modern applications" },
      text: {
        fr: "Création d'apps performantes, scalables et déployables en continu.",
        en: "Building performant, scalable apps with continuous deployment.",
      },
    },
    {
      icon: BookOpen,
      title: { fr: "Apprentissage continu", en: "Continuous learning" },
      text: {
        fr: "Toujours en veille sur les nouvelles technologies et les meilleures pratiques.",
        en: "Always exploring new technologies and best practices.",
      },
    },
  ];

  return (
    <section id="about" className="py-24 px-6 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={{ fr: "À propos", en: "About" }}
          title={{ fr: "Qui suis-je ?", en: "Who am I?" }}
          subtitle={{
            fr: "Un développeur passionné, animé par la création d'expériences numériques modernes.",
            en: "A passionate developer driven by the creation of modern digital experiences.",
          }}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title.fr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur p-6 hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.55_0.22_270)]/0 to-[oklch(0.65_0.22_300)]/0 group-hover:from-[oklch(0.55_0.22_270)]/10 group-hover:to-[oklch(0.65_0.22_300)]/10 transition" />
              <div className="relative">
                <div className="inline-flex p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 mb-4">
                  <it.icon size={20} className="text-[oklch(0.55_0.22_270)] dark:text-[oklch(0.85_0.18_270)]" />
                </div>
                <h3 className="font-semibold text-lg">{t(it.title)}</h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{t(it.text)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
