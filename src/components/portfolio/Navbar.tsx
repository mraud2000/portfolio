import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { useI18n, useT } from "@/i18n/I18nContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggle } = useTheme();
  const { lang, toggle: toggleLang } = useI18n();
  const t = useT();

  const links = [
    { id: "home", label: t({ fr: "Accueil", en: "Home" }) },
    { id: "about", label: t({ fr: "À propos", en: "About" }) },
    { id: "education", label: t({ fr: "Parcours", en: "Education" }) },
    { id: "skills", label: t({ fr: "Compétences", en: "Skills" }) },
    { id: "projects", label: t({ fr: "Projets", en: "Projects" }) },
    { id: "services", label: t({ fr: "Services", en: "Services" }) },
    { id: "contact", label: t({ fr: "Contact", en: "Contact" }) },
  ];

  // Scroll detection + active section tracking
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const offset = window.innerHeight * 0.35;
      let current = links[0].id;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lang]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Liquid glass indicator
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null);

  useLayoutEffect(() => {
    const el = itemRefs.current[active];
    const nav = navRef.current;
    if (el && nav) {
      const navBox = nav.getBoundingClientRect();
      const box = el.getBoundingClientRect();
      setPill({ x: box.left - navBox.left, w: box.width });
    }
  }, [active, lang]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/#${id}`;
    }
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "backdrop-blur-2xl bg-background/60 border-b border-black/10 dark:border-white/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        <button
          onClick={() => go("home")}
          className="font-semibold tracking-tight text-lg shrink-0 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
        >
          Audry<span className="text-[oklch(0.75_0.20_270)]">.</span>
        </button>

        {/* Desktop nav with liquid-glass indicator */}
        <div
          ref={navRef}
          className="hidden md:flex relative items-center gap-1 px-2 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur-xl"
        >
          {pill && (
            <motion.div
              initial={false}
              animate={{ x: pill.x, width: pill.w }}
              transition={{ type: "spring", stiffness: 260, damping: 30, mass: 0.7 }}
              className="absolute top-1/2 -translate-y-1/2 h-9 rounded-full pointer-events-none liquid-glass will-change-transform"
              style={{ left: 0 }}
            />
          )}
          {links.map((l) => (
            <button
              key={l.id}
              ref={(el) => {
                itemRefs.current[l.id] = el;
              }}
              onClick={() => go(l.id)}
              className={`relative z-10 px-3.5 h-9 text-sm rounded-full transition-colors ${
                active === l.id ? "text-foreground" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition text-xs font-semibold uppercase"
          >
            <Languages size={14} />
            {lang}
          </button>
          <button
            onClick={toggle}
            aria-label={t({ fr: "Basculer le thème", en: "Toggle theme" })}
            className="p-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => go("contact")}
            className="hidden lg:inline-flex items-center px-4 py-2 text-sm rounded-full bg-foreground text-background font-medium hover:opacity-90 transition"
          >
            {t({ fr: "Me contacter", en: "Contact me" })}
          </button>
          <button
            className="md:hidden p-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 top-16 bg-background/40 backdrop-blur-md"
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden absolute left-3 right-3 mt-2 rounded-3xl border border-black/10 dark:border-white/10 bg-background/85 backdrop-blur-2xl shadow-2xl overflow-hidden liquid-glass-panel"
            >
              <div className="p-3 flex flex-col gap-1">
                {links.map((l, idx) => (
                  <motion.button
                    key={l.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.25 }}
                    onClick={() => go(l.id)}
                    className={`text-left px-4 py-3 rounded-2xl text-base transition ${
                      active === l.id
                        ? "bg-foreground/[0.08] text-foreground font-medium"
                        : "text-foreground/75 hover:bg-foreground/[0.05]"
                    }`}
                  >
                    {l.label}
                  </motion.button>
                ))}
                <button
                  onClick={() => go("contact")}
                  className="mt-2 w-full px-4 py-3 rounded-2xl bg-foreground text-background font-medium hover:opacity-90 transition"
                >
                  {t({ fr: "Me contacter", en: "Contact me" })}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
