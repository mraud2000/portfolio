import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowLeft, Sparkles, Eye, MousePointerClick } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import { projects, type Project } from "@/data/projects";
import { I18nProvider, useT } from "@/i18n/I18nContext";

export const Route = createFileRoute("/demo/$slug")({
  head: ({ params }) => ({
    meta: [
      {
        title:
          params.slug === "portfolio"
            ? "Demo — You're already here 😄"
            : "Private Project — Audry Munezero",
      },
      { name: "description", content: "Project demo — Audry Munezero" },
    ],
  }),
  component: DemoPage,
});

function DemoPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <I18nProvider>
      <DemoInner />
    </I18nProvider>
  );
}

function DemoInner() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);
  const isPortfolio = slug === "portfolio";

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.55_0.22_265)] opacity-20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.65_0.20_300)] opacity-15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[oklch(0.65_0.18_200)] opacity-15 blur-[140px]" />
      </div>

      <Navbar />

      <main className="pt-32 pb-24 px-6">
        {isPortfolio ? <PortfolioDemo /> : <PrivateDemo project={project} />}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

function PortfolioDemo() {
  const t = useT();
  const jokes = [
    {
      fr: "Tu as cliqué sur « Démo »… et la démo c'était toi qui scrollait. 🕵️",
      en: "You clicked on \"Demo\"… and the demo was you scrolling. 🕵️",
    },
    {
      fr: "Spoiler : le projet, c'est l'onglet dans lequel tu es. 🪄",
      en: "Spoiler: the project IS the tab you're in. 🪄",
    },
    {
      fr: "On a essayé de t'ouvrir une démo, mais tu étais déjà à l'intérieur. 🚪",
      en: "We tried to open a demo, but you were already inside. 🚪",
    },
    {
      fr: "Inception level: portfolio. 🌀",
      en: "Inception level: portfolio. 🌀",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] backdrop-blur-xl p-10 md:p-14 text-center overflow-hidden liquid-glass-panel"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[oklch(0.65_0.22_300)] opacity-20 blur-3xl" />

        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
          className="relative inline-flex items-center justify-center h-24 w-24 rounded-3xl bg-gradient-to-br from-[oklch(0.55_0.22_265)] to-[oklch(0.65_0.20_300)] shadow-2xl shadow-[oklch(0.55_0.22_265)]/40 mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="text-white" size={42} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] text-xs uppercase tracking-widest text-foreground/60 mb-5"
        >
          🎬 {t({ fr: "Démo en cours… depuis le début", en: "Demo running… since the start" })}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent"
        >
          {t({ fr: "Eh… tu y es déjà ! 😄", en: "Hey… you're already here! 😄" })}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 text-foreground/70 leading-relaxed text-lg"
        >
          {t({
            fr: "Le portfolio que tu explores ",
            en: "The portfolio you're exploring ",
          })}
          <span className="font-semibold text-foreground">
            {t({ fr: "est lui-même la démo", en: "IS the demo" })}
          </span>
          {t({ fr: ". 🎉", en: ". 🎉" })}
          <br />
          <span className="text-foreground/55 text-base">
            {t({
              fr: "Pas besoin d'ouvrir un nouvel onglet, tu y étais déjà. 🤝",
              en: "No need to open a new tab — you were already in. 🤝",
            })}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          {jokes.map((j, i) => (
            <motion.span
              key={i}
              whileHover={{ y: -2 }}
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] text-foreground/70"
            >
              {t(j)}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid sm:grid-cols-2 gap-3 max-w-md mx-auto"
        >
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-4 text-left">
            <Eye size={18} className="text-[oklch(0.55_0.22_270)] dark:text-[oklch(0.65_0.22_280)]" />
            <p className="mt-2 text-sm text-foreground/70">
              {t({
                fr: "Continue d'explorer chaque section pour voir tout le travail. 👀",
                en: "Keep exploring each section to see all the work. 👀",
              })}
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-4 text-left">
            <MousePointerClick size={18} className="text-[oklch(0.55_0.22_270)] dark:text-[oklch(0.65_0.22_280)]" />
            <p className="mt-2 text-sm text-foreground/70">
              {t({
                fr: "Teste les animations, le mode clair/sombre, le responsive… ✨",
                en: "Try the animations, light/dark mode, responsive layout… ✨",
              })}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition"
          >
            <ArrowLeft size={16} />{" "}
            {t({ fr: "OK, je retourne explorer 🚀", en: "OK, take me back to explore 🚀" })}
          </Link>
          <p className="mt-3 text-xs text-foreground/45">
            {t({
              fr: "(Promis, pas de nouvelle blague méta cette fois.) 😉",
              en: "(Promise, no more meta joke this time.) 😉",
            })}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

function PrivateDemo({ project }: { project: Project | undefined }) {
  const t = useT();
  return (
    <div className="mx-auto max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] backdrop-blur-xl p-10 md:p-14 text-center overflow-hidden"
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-[oklch(0.65_0.22_300)] opacity-20 blur-3xl" />

        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
          className="relative inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-[oklch(0.55_0.22_265)] to-[oklch(0.65_0.20_300)] shadow-2xl shadow-[oklch(0.55_0.22_265)]/30 mb-6"
        >
          <Lock className="text-white" size={36} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent"
        >
          {t({ fr: "Projet Privé", en: "Private Project" })}
        </motion.h1>

        {project && (
          <p className="mt-3 text-sm uppercase tracking-widest text-foreground/50">
            {t(project.title)}
          </p>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-foreground/70 leading-relaxed"
        >
          {t({
            fr: "Projet privé disponible sur demande.",
            en: "Private project available on request.",
          })}
          <br />
          {t({
            fr: "Veuillez me contacter pour obtenir une présentation complète, une démonstration ou un accès au projet.",
            en: "Please contact me to get a full presentation, a demo or access to the project.",
          })}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="https://wa.me/25767956067"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-medium hover:opacity-90 transition"
          >
            <FaWhatsapp size={18} /> WhatsApp
          </a>
          <a
            href="mailto:audry.munezero.AM@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition"
          >
            <Mail size={16} /> Email
          </a>
        </motion.div>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground transition"
          >
            <ArrowLeft size={14} /> {t({ fr: "Retour au portfolio", en: "Back to portfolio" })}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
