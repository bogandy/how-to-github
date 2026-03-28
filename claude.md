# Project: Modern Semantic Web Starter

## Tech Stack & Standards
- **HTML**: Pure semantic markup. Use `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`. No utility-class soup.
- **CSS**: Native CSS only (no preprocessors). 
  - **Architecture**: Use `@layer` (reset, base, layout, components, utilities).
  - **Colors**: Use `oklch()` for all colors. Use `color-mix()` for derivations.
  - **Responsive**: Use `@container` queries for components. Use `clamp()` for fluid typography.
  - **Flow**: Use logical properties (`margin-inline`, `padding-block`, etc.).
- **JS**: Vanilla JavaScript. No libraries. Use `IntersectionObserver` for reveals and passive listeners for scroll.

## Coding Patterns
- **Naming**: Use BEM-ish naming or clear descriptive classes within `@layer components`.
- **A11y**: Always include ARIA labels. Manage `aria-expanded` for interactive elements.
- **Performance**: Use passive event listeners where possible.
- **Motion**: Wrap all transitions/animations in `@media (prefers-reduced-motion: no-preference)`.

## Development Commands
- **Serve**: `npx serve .` (or your preferred local server)
- **Lint**: `npx stylelint "**/*.css"` (if applicable)

## Component Rules
- When creating a new component (e.g., a card), ensure it is wrapped in a container-type (inline-size) so `@container` rules function correctly.
- Use `:is()` or `:where()` to keep selectors clean.