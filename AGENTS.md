# AGENTS.md

Vue 3 (Composition API + `<script setup>`) + Vite + strict TypeScript single-page, slide-based portfolio. Tailwind CSS v4, GSAP, vue-i18n v11, Catppuccin palette.

## Commands

Use **pnpm** (pinned `pnpm@11.22.0` via `packageManager`; lockfile `9.0`).

- `pnpm dev` — dev server (port 5173)
- `pnpm build` — `vue-tsc -b && vite build`; this is the real verification gate (type-check + build)
- `pnpm type-check` — `vue-tsc --noEmit`
- `pnpm lint` — ESLint with `--fix`; `pnpm lint:check` — no fix

No tests and no CI exist. After changes run `pnpm lint:check` then `pnpm build`.

## Conventions / gotchas

- **Use the `@/` alias** for all src imports (`@/composables/...`, `@/components/...`). Relative imports are not used.
- `verbatimModuleSyntax` is on in `tsconfig.app.json`: type-only imports must use `import type`. TypeScript is strict with `noUnusedLocals`/`noUnusedParameters`.
- ESLint allows unused vars prefixed `_` (`argsIgnorePattern: '^_'`).
- **FOUC guard in `main.ts`:** global state composables (`useTheme()`, `useAccent()`, `useLocale()`) are invoked BEFORE `app.mount()` so the first paint already has the right theme/accent/locale. Add any new global-state init here, not in a component. `index.html` carries a matching inline `--accent` + `class="mocha"` default — do not remove.
- **i18n schema is type-checked:** `MessageSchema = typeof en` (`src/i18n/types.ts`). `en.json` is the source of truth and `es.json` must stay structurally identical. Any key added/removed requires editing BOTH `en.json` and `es.json` or the build fails.
- **Theming:** a single `--accent` CSS var (overridden at runtime by `useAccent`) is bound to Tailwind utilities via `@theme inline` in `src/style.css` (`bg-accent`, `text-accent-soft`, etc.). Never hardcode accent colors in components. Runtime state for theme/accent/locale is persisted through `@vueuse/core`.
- **Accent list** lives in `src/data/accents.ts`; the `AccentId` union type is in `src/types/index.ts`. Add/remove accents in both files.
- **Slide system:** slide order and components are defined in `src/views/HomeView.vue` (the `sections` and `slideComponents` arrays). Navigation is the single source of truth in `src/composables/useSlideNavigation.ts` (cooldown + input buffering); `SlideStage.vue` owns cross-fade transitions. To add a slide: add a section + component in HomeView, create the slide under `src/components/slides/`, wire per-slide ambient motion via `useAmbientLoop`.
- **Ambient motion:** `useAmbientLoop(isActive, setup)` starts/stops a setup/teardown pair and automatically respects `prefers-reduced-motion`. Use it for any looping GSAP tween on a slide; gate GSAP/JS effects behind `useReducedMotion`.
- **Content/data edits** go in `src/data/*.ts` (`profile.ts`, `projects.ts`, `skills.ts`, `experience.ts`, `accents.ts`) plus the matching locale files — not in components.

## Version expectations

Executable config (`package.json`/`pnpm-lock.yaml`) is authoritative: Vite 8, ESLint 10, TypeScript 6, `pnpm@11.22.0` pinned. Node engines: `24.x`.