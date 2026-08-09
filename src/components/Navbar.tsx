"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { CALL_LINK, WHATSAPP_LINK } from "@/lib/constants";
import { NAV_LINKS } from "@/lib/nav";

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="#home" className="flex items-center">
          <Image
            src="/brand/chomz-logo-white.png"
            alt="Chomz Foods"
            width={140}
            height={53}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeId === link.id ? "page" : undefined}
              className={`border-b-2 pb-1 text-sm font-medium transition ${
                activeId === link.id
                  ? "border-accent text-text"
                  : "border-transparent text-text/80 hover:text-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span className="hidden sm:inline-block">
          <Button href={WHATSAPP_LINK} external icon={<WhatsAppIcon />}>
            Order on WhatsApp
          </Button>
        </span>

        <span className="sm:hidden">
          <Button href={CALL_LINK} icon={<PhoneIcon />}>
            Call Now
          </Button>
        </span>
      </div>
    </header>
  );
}
