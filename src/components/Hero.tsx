import Image from "next/image";
import Button from "@/components/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { CALL_LINK, PHONE_DISPLAY, WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            Good choma, every day.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg lg:mx-0">
            Charcoal-grilled meat, delivered hot around Kawangware, Naivasha Road and Kikuyu Road. Order by
            call or WhatsApp.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button href={WHATSAPP_LINK} external icon={<WhatsAppIcon />}>
              Order on WhatsApp
            </Button>
            <Button href={CALL_LINK} variant="secondary" icon={<PhoneIcon />}>
              Call {PHONE_DISPLAY}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs sm:max-w-sm lg:mx-0">
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <clipPath id="hero-flame-clip" clipPathUnits="objectBoundingBox">
                <path d="M0 0 L0.5 0 A0.5 0.5 0 0 1 1 0.5 A0.5 0.5 0 0 1 0.5 1 A0.5 0.5 0 0 1 0 0.5 L0 0 Z" />
              </clipPath>
            </defs>
          </svg>
          <Image
            src="/images/hero-grilled-meat.jpg"
            alt="Charcoal-grilled meat, char-grilled fresh at Chomz Foods"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            style={{ clipPath: "url(#hero-flame-clip)" }}
          />
        </div>
      </div>
    </section>
  );
}
