import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useT } from "@/i18n/I18nContext";
import { CONTACT, SOCIALS } from "@/constants/socials";

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const t = useT();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = t({ fr: "Le nom est requis", en: "Name is required" });
    if (!form.email.trim()) e.email = t({ fr: "L'email est requis", en: "Email is required" });
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t({ fr: "Email invalide", en: "Invalid email" });
    if (!form.message.trim())
      e.message = t({ fr: "Le message est requis", en: "Message is required" });
    else if (form.message.trim().length < 10)
      e.message = t({ fr: "Au moins 10 caractères", en: "At least 10 characters" });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`Portfolio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const socials = SOCIALS;

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow={{ fr: "Contact", en: "Contact" }}
          title={{ fr: "Travaillons ensemble", en: "Let's work together" }}
          subtitle={{
            fr: "Une idée, un projet, une opportunité ? Parlons-en.",
            en: "An idea, a project, an opportunity? Let's talk.",
          }}
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur p-8"
          >
            <h3 className="text-xl font-semibold">
              {t({ fr: "Restons en contact", en: "Stay in touch" })}
            </h3>
            <p className="mt-2 text-sm text-foreground/60">
              {t({
                fr: "Je réponds généralement sous 24 heures.",
                en: "I usually reply within 24 hours.",
              })}
            </p>
            <div className="mt-6 space-y-3">
              {socials.map(({ key, label, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.015] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:border-black/25 dark:hover:border-white/25 transition"
                >
                  <span className="p-2 rounded-lg bg-black/[0.03] dark:bg-white/5">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={submit}
            noValidate
            className="lg:col-span-3 rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur p-8 space-y-4"
          >
            <div>
              <label className="text-xs text-foreground/70">{t({ fr: "Nom", en: "Name" })}</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 focus:border-black/30 dark:focus:border-white/30 focus:outline-none transition"
                placeholder={t({ fr: "Votre nom", en: "Your name" })}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs text-foreground/70">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 focus:border-black/30 dark:focus:border-white/30 focus:outline-none transition"
                placeholder={t({ fr: "vous@email.com", en: "you@email.com" })}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs text-foreground/70">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 focus:border-black/30 dark:focus:border-white/30 focus:outline-none resize-none transition"
                placeholder={t({
                  fr: "Parlez-moi de votre projet…",
                  en: "Tell me about your project…",
                })}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition"
            >
              {sent ? (
                <>
                  <Check size={16} /> {t({ fr: "Envoyé", en: "Sent" })}
                </>
              ) : (
                <>
                  <Send size={16} /> {t({ fr: "Envoyer", en: "Send" })}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
