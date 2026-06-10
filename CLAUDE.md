# gavilano — reglas para Claude

Sitio/SPA de Goberna-Lab. Parte del ecosistema de agentes Goberna (ver más abajo).

## Stack
- **React 19 + Vite 8 + TypeScript** (estricto). **React Compiler activado** (`babel-plugin-react-compiler`)
  → NO hace falta `useMemo`/`useCallback` manuales; el compiler memoiza.
- ESLint (`eslint.config.js`, flat config) con `react-hooks` + `react-refresh`.
- **Sin backend, sin base de datos.** Es 100% frontend estático.

## Deploy
- **`main` → GitHub Pages** (workflow `deploy-pages.yml`, runner GitHub-hosted). No hay VPS.
- El deploy hace **lint + build** antes de publicar; si fallan, NO se deploya.
- Base path de Pages: `VITE_BASE_PATH=/gavilano/` (subpath del dominio de Pages) — **no rompas las
  rutas de assets** (usá rutas relativas / el base de Vite), o el sitio carga en blanco en Pages.

## Flujo de trabajo
- **`main` = producción** (lo que se ve en Pages). **No pushees directo a `main`**: rama feature + PR.
- Cada **PR corre CI** (`ci.yml`: lint + typecheck + build en ubuntu). Mergeá solo con el CI en verde.
- Commits: conventional (`feat:`, `fix:`, `chore:`). PRs chicos y revisables.
- Comandos: `npm run dev` (local) · `npm run lint` · `npm run build` · `npm run preview`.

## Agentes del equipo
Instalá los agentes/skills de Goberna-Lab (supervisor de merges, especialistas, design-system, etc.):
```
/plugin marketplace add Goberna-Lab/platform
/plugin install goberna-agents@goberna-tools
/plugin install goberna-specialists@goberna-tools
/plugin install goberna-skills@goberna-tools
```
Antes de un PR que toque varios archivos, pedile al agente `worktree-merge-supervisor` un veredicto
(lee `.claude/project-profile.md`). Para UI seguí la skill `goberna-design-system`.

## Hotspots (coordiná si dos ramas los tocan)
`vite.config.ts` · `eslint.config.js` · `tsconfig*.json` · `index.html` · CSS global en `src/` ·
`package.json` + `package-lock.json`.
