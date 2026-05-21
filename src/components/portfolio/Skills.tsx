import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useT, type Bilingual } from "@/i18n/I18nContext";

const groups: { title: Bilingual; items: { name: string; level: number }[] }[] = [
  {
    title: { fr: "Frontend", en: "Frontend" },
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: { fr: "Backend", en: "Backend" },
    items: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Django", level: 78 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    title: { fr: "Desktop", en: "Desktop" },
    items: [
      { name: "Java Swing", level: 80 },
      { name: "JavaFX", level: 75 },
    ],
  },
  {
    title: { fr: "Bases de données", en: "Databases" },
    items: [
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 80 },
    ],
  },
  {
    title: { fr: "Autres", en: "Others" },
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "REST API", level: 88 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 75 },
    ],
  },
];

export default function Skills() {
  const t = useT();
  return (
    <section id="skills" className="py-24 px-6 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={{ fr: "Compétences", en: "Skills" }}
          title={{ fr: "Stack technique", en: "Technical Stack" }}
          subtitle={{
            fr: "Un éventail d'outils modernes pour construire des produits complets.",
            en: "A set of modern tools to build complete products.",
          }}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title.fr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur p-6 hover:border-black/20 dark:hover:border-white/20 transition"
            >
              <h3 className="font-semibold mb-5 text-lg">{t(g.title)}</h3>
              <div className="space-y-4">
                {g.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground/80">{s.name}</span>
                      <span className="text-foreground/50">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-black/[0.06] dark:bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-[oklch(0.55_0.22_270)] to-[oklch(0.65_0.22_300)] dark:from-[oklch(0.75_0.20_270)] dark:to-[oklch(0.75_0.20_300)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
