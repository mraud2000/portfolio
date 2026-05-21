import { motion } from "framer-motion";
import { useT, type Bilingual } from "@/i18n/I18nContext";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: Bilingual;
  title: Bilingual;
  subtitle?: Bilingual;
}) {
  const t = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center mb-14"
    >
      {eyebrow && (
        <div className="inline-block px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 text-xs text-foreground/70 mb-4">
          {t(eyebrow)}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
        {t(title)}
      </h2>
      {subtitle && <p className="mt-4 text-foreground/60">{t(subtitle)}</p>}
    </motion.div>
  );
}
