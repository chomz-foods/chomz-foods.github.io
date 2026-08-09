import Image from "next/image";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  TikTokIcon,
  XIcon,
} from "@/components/icons";
import {
  ADDRESS,
  CALL_LINK,
  FACEBOOK_URL,
  HOURS,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  TIKTOK_URL,
  WHATSAPP_LINK,
  X_URL,
} from "@/lib/constants";
import { NAV_LINKS } from "@/lib/nav";

const CONTACT_ITEMS = [
  { label: PHONE_DISPLAY, href: CALL_LINK, Icon: PhoneIcon },
  {
    label: ADDRESS,
    href: `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}`,
    Icon: MapPinIcon,
  },
  { label: HOURS, href: undefined, Icon: ClockIcon },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: FACEBOOK_URL, Icon: FacebookIcon },
  { label: "Instagram", href: INSTAGRAM_URL, Icon: InstagramIcon },
  { label: "X", href: X_URL, Icon: XIcon },
  { label: "TikTok", href: TIKTOK_URL, Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="flex justify-center">
        <div className="rounded-b-2xl bg-surface px-5 py-2.5">
          <Image
            src="/brand/chomz-logo-white.png"
            alt="Chomz Foods"
            width={130}
            height={49}
            className="h-14 w-auto"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text/80 transition hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ul className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
            {CONTACT_ITEMS.map((item) => {
              const content = (
                <>
                  <item.Icon className="shrink-0 text-accent" />
                  <span className="text-sm text-text/80">{item.label}</span>
                </>
              );

              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-2 transition hover:text-accent"
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2">{content}</span>
                  )}
                </li>
              );
            })}
          </ul>

          <ul className="flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const badgeClass =
                "flex h-9 w-9 items-center justify-center rounded-full border border-border text-text/70 transition hover:border-accent hover:text-accent";

              return (
                <li key={social.label}>
                  {social.href ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={badgeClass}
                    >
                      <social.Icon />
                    </a>
                  ) : (
                    <span aria-label={social.label} className={badgeClass}>
                      <social.Icon />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Chomz Foods. All rights reserved.</p>
          <p>
            Order by{" "}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              WhatsApp
            </a>{" "}
            or{" "}
            <a href={CALL_LINK} className="text-accent hover:underline">
              call {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
