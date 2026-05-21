import { Github, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

export const CONTACT = {
  email: "audry.munezero.AM@gmail.com",
  phone: "+25767956067",
  phoneRaw: "25767956067",
  github: "https://github.com/MAudrry",
  instagram: "https://www.instagram.com/m__audry/",
  whatsapp: "https://wa.me/25767956067",
  linkedin: "https://www.linkedin.com/in/audrymunezero/",
};

export const SOCIALS = [
  { key: "github", label: "GitHub", href: CONTACT.github, Icon: Github },
  { key: "linkedin", label: "LinkedIn", href: CONTACT.linkedin, Icon: Linkedin },
  { key: "instagram", label: "Instagram", href: CONTACT.instagram, Icon: Instagram },
  { key: "whatsapp", label: "WhatsApp", href: CONTACT.whatsapp, Icon: MessageCircle },
  { key: "email", label: "Email", href: `mailto:${CONTACT.email}`, Icon: Mail },
  { key: "phone", label: "Téléphone", href: `tel:${CONTACT.phone}`, Icon: Phone },
] as const;
