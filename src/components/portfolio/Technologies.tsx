import { motion } from "framer-motion";
import {
  SiReact, SiTypescript, SiTailwindcss, SiSpring, SiDjango,
  SiPostgresql, SiGithub, SiDocker, SiVite,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const techs = [
  { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "text-[#38BDF8]" },
  { name: "Java", Icon: FaJava, color: "text-[#F89820]" },
  { name: "Spring", Icon: SiSpring, color: "text-[#6DB33F]" },
  { name: "Django", Icon: SiDjango, color: "text-[#0C4B33]" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-[#336791]" },
  { name: "GitHub", Icon: SiGithub, color: "text-foreground" },
  { name: "Docker", Icon: SiDocker, color: "text-[#2496ED]" },
  { name: "Vite", Icon: SiVite, color: "text-[#B73BFE]" },
];

export default function Technologies() {
  return (
    <section className="py-24 px-6 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={{ fr: "Technologies", en: "Technologies" }}
          title={{ fr: "Outils du quotidien", en: "Daily tools" }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techs.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur p-6 flex flex-col items-center gap-3 hover:border-black/25 dark:hover:border-white/25 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition"
            >
              <t.Icon className={`text-4xl ${t.color} group-hover:scale-110 transition`} />
              <span className="text-sm text-foreground/80">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
