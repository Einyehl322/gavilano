# project-profile — gavilano

Lo lee el agente `worktree-merge-supervisor` (plugin `goberna-agents` de `Goberna-Lab/platform`)
para adaptarse a este repo.

## Stack
- **React 19 + Vite 8 + TypeScript** estricto, **React Compiler** (`babel-plugin-react-compiler`).
- ESLint flat config. SPA estático, **sin backend ni DB**.
- Package manager: **npm** (`package-lock.json`).

## Migraciones / DB / contrato
- **Ninguno.** Sin DB, sin migraciones, sin contrato cliente-servidor. Todo es frontend.

## Hotspots (shared-core — colisión = HIGH)
| Path | Por qué |
|---|---|
| `vite.config.ts` | Config de build/base-path; un merge mal → assets rotos en Pages. |
| `tsconfig*.json` | Config TS (app/node/base). |
| `eslint.config.js` | Reglas de lint; el CI y el deploy fallan si rompe. |
| `index.html` | Entry HTML único. |
| `src/index.css` · `src/App.css` · `src/mobile.css` · `src/hover-effects.css` | CSS global (tokens, layout, responsive). Dos ramas tocándolos = conflicto visual. |
| `package.json` + `package-lock.json` | Deps/lockfile. |
| `src/App.tsx` · `src/main.tsx` | Composición raíz de la app. |

## Deploy
- `main` → **GitHub Pages** (runner GitHub-hosted). Deploy hace **lint + build** antes de publicar.
- Base path `/gavilano/` (subpath de Pages) — cuidado con rutas de assets (`src/utils/asset.ts`).
- **PRs corren CI** (lint + typecheck + build) antes de mergear.

## Supervisor: **LITE** — repo chico, 1 dev nuevo. Sin DB ni contrato, el riesgo real es solo dos
ramas tocando el CSS global o `vite.config.ts`/`index.html` a la vez. Corré el supervisor si el
equipo crece o ante PRs grandes que toquen varios componentes/CSS.
