# Task Manager — Week 3 (React + Tailwind)

This repository is the starter + completed work for the Week 3 assignment: a small React application built with Vite and styled with Tailwind CSS. The app demonstrates component architecture, state management with hooks, local persistence, and a basic API integration example.

## What's implemented (summary)

- Project scaffolded with Vite (frontend in `Frontend/`).
- Tailwind CSS integrated and configured.
- React Router set up with routes and layout.
- Reusable UI components: `Button`, `Card`, `Navbar`, `Footer`, `Layout`.
- Task manager with add / complete / delete / filter and persistence using a `useLocalStorage` hook.
- Theme context for light/dark mode (logic + persistence). You can add a visible toggle in the Navbar (optional).
- API integration: `PostList` fetches posts from JSONPlaceholder with loading, error handling, search and basic pagination.
- Simple pages for Privacy and Terms (wired to Footer links).

## Run the app locally

Open a terminal and run these commands from the project root to start the frontend:

```bash
cd "Frontend"
npm install   # only if you haven't already
npm run dev
```

Vite will print a local URL (for example `http://localhost:5176`) — open that in your browser.

If you see PostCSS/Tailwind errors, ensure the `Frontend/postcss.config.js` and `Frontend/tailwind.config.js` files exist and match the project `type` configuration. If needed, run:

```bash
npm install -D tailwindcss postcss autoprefixer
```

## Routes (what to test)

- `/` — Home (welcome)
- `/tasks` — Task Manager (add / toggle / delete / filter tasks)
- `/posts` — Posts (API list, search, pagination)
- `/privacy` — Privacy Policy (sample)
- `/terms` — Terms of Service (sample)

## Key files & folders

- `Frontend/src/components/` — UI components (Button, Card, Navbar, Footer, Layout, TaskManager, PostList, etc.)
- `Frontend/src/hooks/useLocalStorage.js` — custom hook for local persistence
- `Frontend/src/context/ThemeContext.jsx` — theme context (light/dark)
- `Frontend/src/index.css` — Tailwind directives
- `Frontend/tailwind.config.js`, `Frontend/postcss.config.js` — Tailwind/PostCSS configs

## Manual test checklist

1. Start dev server and open the app.
2. Navigation: click Navbar links, verify pages load.
3. Tasks page:
   - Add a task, toggle complete, delete, and use filters.
   - Refresh the page: tasks should persist.
4. Posts page:
   - Confirm posts load, loading skeleton shows, search filters displayed posts, and pagination works.
5. Footer:
   - Click Privacy Policy and Terms links — they should navigate to sample pages.
6. Theme:
   - Theme is persisted (logic exists). I can add a visible toggle in the Navbar if you want.

## Notes, gaps & recommended next steps

- The assignment requirements are largely satisfied. A few polish items you may want to add:
  - Visible theme toggle in `Navbar` (calls `toggleTheme()` from `ThemeContext`).
  - Additional responsive tweaks and accessibility improvements.
  - Unit tests (Vitest + React Testing Library) and CI for grading.
  - Replace sample Privacy/Terms copy with your project's legal text before publishing.

## Deploy

You can deploy the `Frontend` build to Vercel, Netlify, or GitHub Pages. Build commands:

```bash
cd Frontend
npm run build
# then upload the contents of Frontend/dist to your static host
```

## Resources

- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/docs
- Vite: https://vitejs.dev/guide/
- React Router: https://reactrouter.com/

If you want, I can: add the visible theme toggle in the Navbar, add one unit test for the TaskManager, or polish responsive styles. Which would you like next?