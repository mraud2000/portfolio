import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { useT, useI18n } from "@/i18n/I18nContext";
import { SOCIALS } from "@/constants/socials";

function useTyping(roles: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  const rolesKey = roles.join("|");

  useEffect(() => {
    setText("");
    setI(0);
    setDel(false);
  }, [rolesKey]);

  useEffect(() => {
    const current = roles[i % roles.length];
    if (!current) return;
    if (!del && text === current) {
      const t = setTimeout(() => setDel(true), 1400);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
      return;
    }
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, rolesKey, roles]);

  return text;
}

export default function Hero() {
  const t = useT();
  const { lang } = useI18n();
  const roles = useMemo(
    () =>
      lang === "fr"
        ? ["Développeur Full Stack", "Software Engineer", "Créateur d'expériences modernes"]
        : ["Full Stack Developer", "Software Engineer", "Creator of modern experiences"],
    [lang]
  );
  const typed = useTyping(roles);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const stats = [
    { v: "15+", l: t({ fr: "Projets réalisés", en: "Projects delivered" }) },
    { v: "20+", l: t({ fr: "Technologies maîtrisées", en: "Technologies mastered" }) },
    { v: "3+", l: t({ fr: "Années d'expérience", en: "Years of experience" }) },
  ];

  return (
    <section id="home" className="relative pt-32 pb-24 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 backdrop-blur text-xs text-foreground/70 mb-6">
            <Sparkles size={12} className="text-[oklch(0.75_0.20_270)]" />
            {t({ fr: "Disponible pour de nouveaux projets", en: "Available for new projects" })}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            {t({ fr: "Bonjour, je suis ", en: "Hi, I'm " })}
            <span className="bg-gradient-to-r from-[oklch(0.85_0.18_270)] via-[oklch(0.75_0.22_300)] to-[oklch(0.80_0.18_220)] bg-clip-text text-transparent">
              Audry Munezero
            </span>
          </h1>

          <div className="mt-6">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 mb-2">
              Portfolio
            </p>

            <p className="text-xl md:text-2xl text-foreground/70 h-8">
              {typed}
              <span className="inline-block w-[2px] h-6 bg-foreground/70 ml-1 animate-pulse align-middle" />
            </p>
          </div>
          <p className="mt-6 text-base md:text-lg text-foreground/60 max-w-xl leading-relaxed">
            {t({
              fr: "Bienvenue sur le portfolio officiel d’Audry Munezero. Je conçois et développe des applications web modernes, performantes et élégantes, en transformant des idées complexes en interfaces simples, fluides et impactantes.",
              en: "Welcome to Audry Munezero’s official portfolio. I design and develop modern, high-performance, and elegant web applications by transforming complex ideas into simple, smooth, and impactful user experiences.",
            })}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => go("projects")}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition shadow-[0_0_40px_-10px_oklch(0.85_0.20_270)]"
            >
              {t({ fr: "Voir mes projets", en: "View my projects" })}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </button>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 dark:border-white/15 bg-black/[0.03] dark:bg-white/5 backdrop-blur hover:bg-black/[0.06] dark:hover:bg-white/10 transition"
            >
              <Download size={16} /> {t({ fr: "Télécharger mon CV", en: "Download my CV" })}
            </a>
            <button
              onClick={() => go("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 dark:border-white/15 hover:bg-black/[0.04] dark:hover:bg-white/5 transition"
            >
              <Mail size={16} /> {t({ fr: "Me contacter", en: "Contact me" })}
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3 text-foreground/60">
            {SOCIALS.filter((s) => ["github", "linkedin", "instagram", "whatsapp"].includes(s.key)).map(
              ({ key, label, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] hover:text-foreground hover:bg-black/[0.05] dark:hover:bg-white/10 transition"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[oklch(0.55_0.22_270)] via-[oklch(0.65_0.22_300)] to-[oklch(0.65_0.20_220)] opacity-50 blur-3xl animate-pulse" />
            <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full p-1 bg-gradient-to-tr from-foreground/30 via-foreground/10 to-foreground/30">
              <img
                src={profile}
                alt="Audry Munezero"
                className="h-full w-full rounded-full object-cover border border-black/10 dark:border-white/10"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl mt-20 grid grid-cols-3 gap-4 md:gap-8"
      >
        {stats.map((s) => (
          <div
            key={s.l}
            className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 backdrop-blur p-4 md:p-6 text-center"
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent">
              {s.v}
            </div>
            <div className="mt-1 text-xs md:text-sm text-foreground/60">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
