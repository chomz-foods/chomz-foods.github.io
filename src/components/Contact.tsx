import Button from "@/components/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import {
  ADDRESS,
  CALL_LINK,
  DELIVERY_AREA,
  HOURS,
  MAP_QUERY,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/constants";

const DETAILS = [
  { label: "Address", value: ADDRESS },
  { label: "Delivery area", value: DELIVERY_AREA },
  { label: "Hours", value: HOURS },
  { label: "Phone / WhatsApp", value: PHONE_DISPLAY },
];

export default function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Order &amp; Find Us
          </h2>
          <p className="mt-3 text-muted">
            No online ordering yet — just call or message us directly.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div className="flex flex-col justify-between">
            <dl className="space-y-6">
              {DETAILS.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-accent">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-base">{detail.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={WHATSAPP_LINK} external icon={<WhatsAppIcon />}>
                Order on WhatsApp
              </Button>
              <Button href={CALL_LINK} variant="secondary" icon={<PhoneIcon />}>
                Call Now
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="Chomz Foods location"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="h-72 w-full sm:h-full sm:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
