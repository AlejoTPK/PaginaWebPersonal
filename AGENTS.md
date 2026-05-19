# Agent Instructions

## Package Manager
- **Always use `pnpm`** for installing dependencies, running scripts, and managing the project.
- Never use `npm` or `yarn`.

## Restricted Libraries
- **Do NOT use any TanStack libraries** (TanStack Query, TanStack Table, TanStack Router, etc.).
- For data fetching, prefer SWR, React Server Components, or native `fetch`.

## Allowed Libraries (Current Stack)
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React
- next-themes

## Theme & Design
- Dark mode is the default and only theme.
- Palette: Night Blue (`#0a0f1c`), Tech Blue (`#3b82f6`), Wine (`#581c87`).
- Follow the Vercel React Best Practices skill for performance.

## Build / Lint / Test Commands
- Install: `pnpm install`
- Dev server: `pnpm dev`
- Build: `pnpm build`
- Lint: `pnpm lint`
- Type check: `pnpm tsc --noEmit`

## Code Style
- Use TypeScript strictly.
- Prefer Server Components unless client interactivity is needed.
- Use `cn()` from `lib/utils.ts` for conditional classes.
- Follow the existing file structure (`app/`, `components/`, `lib/`).
