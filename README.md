# Portfolio – Himanshu Singh

This is a [Next.js](https://nextjs.org) portfolio project, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It showcases projects, skills, and contact information with a modern, animated UI.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Main Components](#main-components)
- [Styling](#styling)
- [Contact Form](#contact-form)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [License](#license)

---

## Getting Started

To run the development server:

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Project Structure

```
.
├── app/                # Next.js app directory (pages, layout, main entry)
├── components/         # Reusable UI and section components
│   ├── sections/       # About, Projects, Contact sections
│   ├── ui/             # UI primitives (buttons, cards, forms, etc.)
│   └── demo/           # Demo/preview components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (images, favicon, etc.)
├── .env                # Environment variables (email credentials, etc.)
├── next.config.ts      # Next.js configuration
├── postcss.config.mjs  # PostCSS/Tailwind config
├── package.json        # Dependencies and scripts
└── README.md           # Project overview
```

---

## Key Features

- **Animated UI:** Uses [framer-motion](https://www.framer.com/motion/) for smooth transitions and effects.
- **Responsive Design:** Built with [Tailwind CSS](https://tailwindcss.com/) for mobile-first layouts.
- **Project Showcase:** Dynamic project cards with hover/expand animations.
- **Skills & Experience:** Visual grid and timeline for tech stack and work history.
- **Contact Form:** Sends emails using [nodemailer](https://nodemailer.com/) and environment-based SMTP credentials.
- **Dark Mode:** Theme toggling via [next-themes](https://github.com/pacocoursey/next-themes).
- **Particles & Visual Effects:** Custom sparkles, background beams, and blur text animations.

---

## Main Components

- [`app/page.tsx`](app/page.tsx): Main landing page, orchestrates all sections.
- [`components/sections/about-section.tsx`](components/sections/about-section.tsx): About, education, experience, and tech stack.
- [`components/sections/projects-section.tsx`](components/sections/projects-section.tsx): Project cards and details.
- [`components/sections/contact-section.tsx`](components/sections/contact-section.tsx): Contact form and direct links.
- [`components/ui/`](components/ui/): Buttons, cards, forms, timeline, sparkles, etc.
- [`components/demo/sparklePreviewDemo.tsx`](components/demo/sparklePreviewDemo.tsx): Sparkle/blur text demo for hero section.

---

## Styling

- **Tailwind CSS:** Main utility-first styling ([app/globals.css](app/globals.css)).
- **Custom Fonts:** [app/fonts.css](app/fonts.css) imports the "Outfit" font.
- **PrimeIcons:** Used for social and project icons.

---

## Contact Form

- **Form Handling:** See [`ContactSection`](components/sections/contact-section.tsx) and [`ContactForm`](components/ui/contact-form.tsx).
- **Email Sending:** Uses [`sendEmail`](app/actions/email.ts) with nodemailer and environment variables:
  - `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_FROM`, `EMAIL_TO`
- **Validation:** Basic required fields; error and success feedback.

---

## Configuration

- **Images:** Remote images allowed from `raw.githubusercontent.com` (see [`next.config.ts`](next.config.ts)).
- **Environment:** Set up `.env` with your SMTP credentials for email.

---

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

---
## Environment Variables

To enable features like the contact form (email sending), you need to set up the following environment variables in a `.env` file at the root of your project:

```env
EMAIL_HOST=your_smtp_host         # e.g., smtp.gmail.com
EMAIL_PORT=your_smtp_port         # e.g., 465
EMAIL_USER=your_email_username    # e.g., your Gmail address
EMAIL_PASS=your_email_password    # App password or SMTP password
EMAIL_FROM=your_from_address      # e.g., "Portfolio <your@email.com>"
EMAIL_TO=your_destination_address # Where contact form messages are sent
```

**Notes:**
- Never commit your `.env` file to version control.
- For Gmail, you may need to use an [App Password](https://support.google.com/accounts/answer/185833) if 2FA is enabled.
- These variables are used by the email sending logic in `app/actions/email.ts`.

---
## License

This project is for personal portfolio use. For other usage, please contact the author.

---

## Credits

- [Next.js](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PrimeIcons](https://primefaces.org/primeicons/)
- [React Icons](https://react-icons.github.io/react-icons/)