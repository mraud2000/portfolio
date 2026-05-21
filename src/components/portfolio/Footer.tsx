import { useT } from "@/i18n/I18nContext";
import { SOCIALS } from "@/constants/socials";

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10 px-6 mt-10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">
          {t({
            fr: "© 2026. Conçu et développé par Audry Munezero.",
            en: "© 2026. Designed and developed by Audry Munezero.",
          })}
        </p>
        <div className="flex items-center gap-2">
          {SOCIALS.map(({ key, label, href, Icon }) => (
            <a
              key={key}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/5 hover:border-black/25 dark:hover:border-white/25 transition"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
