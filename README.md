# Drawarium — Draw it. Watch it swim.

An English-first, responsive product website for a family aquarium where children make fish on paper or on a screen and see them swim on a big screen.

## Requirements

- Node.js 20.9 or newer
- npm

## Install and run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run typecheck
npm run build
npm run start
```

## Configuration

Product settings live in [`config/product.ts`](./config/product.ts). The free fish count, fish pack amounts/prices, official app URLs, and support email are centralized there. Public app destinations and support email can be set in `.env.local`; see [`.env.example`](./.env.example).

The demo defaults are intentional. No official app store URLs, database, account provider, payment processor, or analytics provider were supplied. Missing app links are not rendered, and account/checkout screens clearly identify themselves as previews.

### Payments

The pricing section is informational only. The purchase buttons lead to an account preview; they do not open checkout or charge a card. A production payment integration still needs a server-side checkout session endpoint, configured Stripe price IDs, authenticated account-to-aquarium mapping, verified/idempotent webhook handling, and persistent fish-credit transactions. Never treat a browser redirect as proof of payment.

### Accounts and aquarium services

The UI depends on narrow interfaces in [`lib/services.ts`](./lib/services.ts). The included adapters return demo data and do not create accounts or persist aquarium activity. Replace these adapters with the existing product identity and API services when they are available; do not expose secrets in client code.

### Download links and QR codes

Configure one or more `NEXT_PUBLIC_*_APP_URL` values. The download page omits unconfigured destinations and generates a QR code from the configured Android TV URL rather than shipping a hand-drawn code.

### Printable templates

`GET /api/templates` generates and downloads an original printable PDF. It does not require an account.

## Architecture

- `app/` — Next.js App Router pages, metadata, and the templates PDF route
- `components/` — reusable navigation, fish illustrations, aquarium, creator demo, and page UI
- `config/product.ts` — centralized product pricing, free credits, app links, and support details
- `lib/analytics.ts` — privacy-conscious event adapter (console-only in development)
- `lib/services.ts` — account, aquarium, and payment service boundaries with explicit demo behavior

The landing-page fish are lightweight SVG/CSS (no WebGL or video). The drawing demo is temporary browser state and does not save user artwork. `prefers-reduced-motion`, keyboard focus, semantic navigation, and narrow-screen layouts are supported.

## Before production

1. Connect the real authentication and aquarium services.
2. Implement server-side checkout and verified, idempotent payment webhooks.
3. Configure official app URLs, public site URL, and support email.
4. Replace preview legal copy with reviewed policies and terms for launch regions.
5. Configure privacy-safe analytics only after consent and policy requirements are addressed.
6. Run `npm run typecheck` and `npm run build`.
