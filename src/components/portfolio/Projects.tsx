import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Github, ExternalLink, Search } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "@/data/projects";
import { useT } from "@/i18n/I18nContext";

export default function Projects() {
  const t = useT();
  const [query, setQuery] = useState("");
  const [activeTech, setActiveTech] = useState<string>("__all__");

  const allTech = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((tech) => set.add(tech)));
    return ["__all__", ...Array.from(set)];
  }, []);

  const filtered = projects.filter((p) => {
    const q = query.toLowerCase();
    const matchesQuery =
      t(p.title).toLowerCase().includes(q) || t(p.description).toLowerCase().includes(q);
    const matchesTech = activeTech === "__all__" || p.technologies.includes(activeTech);
    return matchesQuery && matchesTech;
  });

  return (
    <section id="projects" className="py-24 px-6 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={{ fr: "Projets", en: "Projects" }}
          title={{ fr: "Réalisations sélectionnées", en: "Selected work" }}
          subtitle={{
            fr: "Quelques projets représentatifs de mon travail.",
            en: "A few projects representative of my work.",
          }}
        />

        <div className="mb-10 flex flex-col gap-4">
          <div className="relative max-w-md mx-auto w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" size={16} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t({ fr: "Rechercher un projet...", en: "Search a project..." })}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 backdrop-blur text-sm focus:outline-none focus:border-black/30 dark:focus:border-white/25 transition"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {allTech.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTech(tech)}
                className={`text-xs px-3 py-1.5 rounded-full border transition ${
                  activeTech === tech
                    ? "bg-foreground text-background border-foreground"
                    : "border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 text-foreground/70 hover:border-black/25 dark:hover:border-white/25"
                }`}
              >
                {tech === "__all__" ? t({ fr: "Tous", en: "All" }) : tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => {
            const title = t(p.title);
            return (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur overflow-hidden hover:border-black/25 dark:hover:border-white/25 transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`relative h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-5xl font-bold text-white/30 group-hover:scale-110 transition-transform duration-500">
                          {title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                        </div>
                      </div>
                    </>
                  )}
                  <div className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-black/40 text-white backdrop-blur border border-white/10">
                    {t(p.category)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{t(p.description)}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a
                      href="https://github.com/MAudrry"
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/5 transition"
                    >
                      <Github size={14} /> {t({ fr: "Code", en: "Code" })}
                    </a>
                    <Link
                      to="/demo/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-foreground text-background hover:opacity-90 transition"
                    >
                      <ExternalLink size={14} /> {t({ fr: "Démo", en: "Demo" })}
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-foreground/50 mt-12">
            {t({ fr: "Aucun projet trouvé.", en: "No project found." })}
          </p>
        )}
      </div>
    </section>
  );
}
