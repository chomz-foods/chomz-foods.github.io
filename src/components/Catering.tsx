import Button from "@/components/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { CALL_LINK, CATERING_WHATSAPP_LINK } from "@/lib/constants";

export default function Catering() {
  return (
    <section id="catering" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Catering &amp; Bulk Orders
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
          Feeding a crowd? Whether it&apos;s a birthday, office lunch, or
          family gathering, Chomz can grill up a bulk order to match. Message
          us on WhatsApp or give us a call to talk through your event and
          we&apos;ll sort you out.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href={CATERING_WHATSAPP_LINK} external icon={<WhatsAppIcon />}>
            Enquire on WhatsApp
          </Button>
          <Button href={CALL_LINK} variant="secondary" icon={<PhoneIcon />}>
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
