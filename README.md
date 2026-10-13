# FOT (Friends of Tech) landing page

React + Vite. Design-canvas style: grid paper, ruler, "YOU" cursor, selection-box wordmark,
stacked folder-tab session panels, blob mascot and a registration form.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # single-file build in dist/
```

## Edit the event

All event text lives in `src/data.js` (date, time, venue, sessions, roles). The hero tags and
footer text are in `src/components/Hero.jsx` and `src/components/Chrome.jsx`.

## Registration form

`RegisterForm` in `src/components/Talk.jsx` only validates and shows a thank-you message.
Replace the `submit` handler with a call to your form backend (Google Forms, Formspree, your API).

## No-install preview

`node build-preview.mjs` writes `preview.html`, which inlines these same components and loads
React and Babel from a CDN. Useful for a quick look, not for production.
