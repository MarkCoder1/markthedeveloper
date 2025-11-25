## Mark The Developer – Portfolio

A modern, responsive portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and a small set of UI utilities. Includes dark mode, animated hero, project cards, and accessible components.

## Getting Started

Install additional dependencies added for the portfolio (if you haven't yet):

```bash
npm install framer-motion
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can customize content by editing these files:

- `app/components/Hero.tsx` – headline, intro text, buttons.
- `app/components/About.tsx` – bio paragraph & skills array.
- `app/components/Projects.tsx` – modify the `projects` array for real data.
- `app/components/Contact.tsx` – update email & LinkedIn URLs.
- `app/layout.tsx` – global metadata (SEO/OpenGraph/Twitter) and base layout.
- `app/globals.css` – design tokens (colors, radius, etc.).

Global tokens use CSS variables; adjust `:root` and `html.dark` for theming.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Dark Mode

Dark mode is managed without an external provider by toggling the `dark` class on `<html>` and saving the preference in `localStorage`. See `ThemeToggle.tsx`.

You can later integrate a theme provider library (e.g. `next-themes`) once it declares React 19 peer support; current setup uses a minimal custom toggle.

## Animations

Framer Motion is used in `Hero.tsx`. You can extend fade/scale/slide animations for other sections easily.

## Deployment

Deploy quickly on Vercel:

```bash
npm run build
npm start
```

Analyze bundle (optional):
```bash
npm run build -- --profile
```

The production build outputs optimized HTML, CSS, and JS with code-splitting and tree-shaking. `Hero` animation code loads client-side only (dynamic import) to keep initial payload smaller.

Structured data (`Person` schema) and OpenGraph image improve link previews and SEO. `robots.txt` and `sitemap.xml` are auto-served by Next routes.

Push to a GitHub repo and import the project in Vercel for automatic CI/CD.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Roadmap / Ideas

- Blog section using MDX.
- Project filtering & tags.
- Light analytics (privacy-friendly).
- Accessibility audit (lighthouse + axe).
- Unit tests for critical components.

## License

Personal portfolio – adapt freely for your own use.
