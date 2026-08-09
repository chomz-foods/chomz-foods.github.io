# Chomz Foods — Brand Color Direction

## Palette

| Name | Hex | Role |
|---|---|---|
| Charcoal | `#1A1A1A` | Background, nav, footer |
| White | `#FFFFFF` | Primary text, cards |
| Ember orange | `#E8590C` | CTAs, accents, flame icon |
| Deep red | `#8C1F1F` | Hover states, depth, borders |

---

## CSS Variables

Paste into your `:root`:

```css
:root {
  --color-bg:      #1A1A1A;   /* page background, nav, footer */
  --color-surface: #242424;   /* slightly lighter card/panel surface */
  --color-text:    #FFFFFF;   /* primary text on dark backgrounds */
  --color-muted:   rgba(255, 255, 255, 0.55); /* secondary/supporting text */
  --color-accent:  #E8590C;   /* CTA buttons, price highlights, flame accent */
  --color-deep:    #8C1F1F;   /* hover state on accent, decorative borders */
  --color-border:  rgba(255, 255, 255, 0.10); /* subtle dividers on dark surfaces */
}
```

---

## Usage Rules

### Charcoal `#1A1A1A` — the stage
- Default surface for every section at rest: navbar, hero, menu, footer
- Also used as the logo background
- Represents char-grill without being literal about it

### White `#FFFFFF` — primary text and cards
- All body copy on dark backgrounds
- Card surfaces, input fields, menu item text
- The wordmark and "FOODS" lockup sit in white on charcoal

### Ember orange `#E8590C` — the one accent
- The single signature color — use sparingly, one CTA per view max
- Primary "Order now" / "Add to cart" button
- Active nav underline or indicator
- Price highlights and promotional labels
- The flame inside the O in the logo
- **Never use as a full-bleed section background** — it competes with food photography

### Deep red `#8C1F1F` — depth and hover
- Hover state on orange buttons (`background: var(--color-deep)` on `:hover`)
- Decorative section dividers and borders
- Subtle photo overlays to add warmth
- The flame base tone (red at base, orange at tip) in detailed logo renders
- **Never use as a full-bleed background** — red backgrounds fight with meat photography

---

## Hover Pattern

```css
.btn-primary {
  background: var(--color-accent);
  color: var(--color-text);
  transition: background 150ms ease;
}

.btn-primary:hover {
  background: var(--color-deep);
}
```

---

## What Not To Do

- **No yellow** — the original poster used yellow brushstrokes; orange is the settled accent going forward. Yellow is phased out.
- **No full-bleed red or orange sections** — charcoal is the dominant background, red and orange are accents only
- **No second accent color** — orange is the single "look here" color. Adding a second competing accent (green, blue, yellow) breaks the discipline
- **No gradients** — flat solid fills only, in line with the eggroll/gugafoods reference brands that inspired this direction
- **No red as a logo color** — red lives in hover states and photo depth, not as a flat brand block

---

## Color Ratio

When in doubt, hold this ratio across any page or component:

```
~75% charcoal  (surfaces, backgrounds)
~20% white     (text, cards, input fields)
~5%  orange    (one CTA, one accent detail)
```

Deep red appears only on interaction (hover) or as a subtle decorative detail — it has no fixed percentage allocation.

---

## Tailwind Config (if applicable)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        chomz: {
          bg:      '#1A1A1A',
          surface: '#242424',
          text:    '#FFFFFF',
          accent:  '#E8590C',
          deep:    '#8C1F1F',
        }
      }
    }
  }
}
```

Usage: `bg-chomz-bg`, `text-chomz-accent`, `hover:bg-chomz-deep`, etc.

---

## Reference Brands

| Brand | What we borrowed |
|---|---|
| eggroll company | Two-color restraint, flat background block, wordmark-only confidence |
| gugafoods | Dark textured surface, bold wordmark + smaller descriptor word lockup |

---

## Brand Assets

- Logo: `CHOMZ` bold sans-serif wordmark + `FOODS` smaller beneath + orange flame inside the O
- Tagline candidates: "Good choma, every day." vs "Premium Grilled. Always." *(decision pending — see action items)*
- Delivery seal stickers: horizontal strip + circular seal, both on `#1A1A1A` with `#E8590C` flame accent
- 8 poster candidates saved in Canva (charcoal/white/orange palette — some need updating from legacy yellow)
