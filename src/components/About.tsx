const FEATURES = [
  {
    title: "Charcoal-Grilled",
    description: "Real fire, no shortcuts — every order grilled to order.",
  },
  {
    title: "Fresh Daily",
    description: "Nothing sits around. We grill it when you order it.",
  },
  {
    title: "Fast Delivery",
    description: "Hot off the grill and straight to your door.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          About Chomz
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
          Chomz Foods started in Kawangware with one idea:{" "}
          <span className="font-semibold text-accent">
            great choma shouldn&apos;t wait for the weekend
          </span>
          . We charcoal-grill beef, chicken, and goat fresh to order and
          deliver it hot, straight to your door. Every single day.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title}>
              <h3 className="font-display text-lg font-bold text-accent">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
