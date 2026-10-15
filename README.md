# Halden Hair Studio: salon website template

A website template for a hair salon, by Whelk Works (React + Vite). Black and gold, Cormorant Garamond headlines over Jost, and black-and-white photography that fades to color on hover.

- **Home** (`/`): hero, services at a glance, our approach, the team, a gallery of recent work, founder line, visit and hours, newsletter.
- **Services** (`/services`): menu tabs (Cut & style, Color, Treatments, Extensions) with times and "from" prices, plus booking policies.
- **Book** (`/book`): pick a service, stylist, day and time (Tuesday–Saturday, counted from today), add details, and confirm. A summary panel updates as you go.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # http://localhost:4173/salontemplate/
```

## Make it a client's

- **Pages:** `src/pages/Home.jsx`, `Services.jsx` and `Book.jsx`. They were generated from the design mockup, so the copy and layout are inline and can be edited directly.
- **Data:** the team (Home), the service menu (Services) and the bookable services, stylists and time slots (Book) are arrays near the top of each page, inside the `Component` class.
- **Colors:** the palette is listed in `src/theme.js`. The pages use the hex values inline, so search and replace to re-skin.
- **Black and white:** photos with the `bw` class are shown in grayscale; `reveal` fades them back to color on hover. Remove the classes to show full color.
- **Photos:** `public/images/`. Keep the file names or update the paths.
- **Copy:** anything in `[brackets]` is a placeholder, including all prices.

## Before launch

- **Photos:** these are Unsplash stock photos. Swap in the salon's own space, team and work. The team photos especially should be the real stylists.
- **Booking:** the booking flow is front-end only, and the "booked" time slots are made up. Connect it to the salon's booking system (Square Appointments, Vagaro, Boulevard, GlossGenius and so on), or replace the page with their booking widget.
- **Forms:** the newsletter form only shows a thank-you message. Connect it to an email service before launch.
- **Deploy:** pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`. The build is set up for `https://madscalls.github.io/salontemplate/` (`BASE` in `vite.config.js`). Change it if the repo has a different name, or to `/` for a custom domain or Cloudflare Pages. A copy of `index.html` is saved as `404.html` so `/services` and `/book` load on refresh.
