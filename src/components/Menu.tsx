import Button from "@/components/Button";
import { WhatsAppIcon } from "@/components/icons";
import { MENU } from "@/lib/menu";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Menu() {
  return (
    <section id="menu" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Our Menu
          </h2>
          <p className="mt-3 text-muted">
            Char-grilled fresh to order. Prices may vary slightly by portion.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {MENU.map((category) => (
            <div key={category.name}>
              <h3 className="border-b border-border pb-3 font-display text-xl font-bold text-accent">
                {category.name}
              </h3>
              <ul className="mt-4 space-y-4">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 font-bold text-accent">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href={WHATSAPP_LINK} external icon={<WhatsAppIcon />}>
            Order on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
