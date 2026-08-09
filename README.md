# Chomz Foods

One-page branding site for Chomz Foods — grilled meat, delivered around
Kawangware, Nairobi. No online ordering yet; customers call or WhatsApp in
their order.

## Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — assembles the one-pager (`Navbar`, `Hero`, `Menu`, `Contact`, `Footer`)
- `src/components/` — page sections
- `src/lib/constants.ts` — phone/WhatsApp numbers, address, hours
- `src/lib/menu.ts` — menu items and prices (placeholder — edit freely)
- `public/brand/` — logo files (white for dark backgrounds, black for light)
- `branding/CHOMZ_COLORS.md` — brand color and usage guidelines

## Build

```bash
npm run build
npm run start
```
