---
name: product-design
description: >
  Apply professional product design standards whenever building, reviewing, or improving any webpage or application — whether it's a UI component, a full app, a dashboard, a form, a landing page, or any interactive interface. This skill must be used for ALL web and application design tasks, no matter how simple they seem. It encodes best practices from the most trusted industry sources (Nielsen Norman Group, Baymard Institute, Built for Mars, W3C/WCAG) across: UX design, design thinking methodology, accessibility (WCAG 2.2), usability heuristics, information architecture, and UI design. Trigger whenever the user asks to build, design, create, improve, or review any web page, application screen, component, form, navigation, layout, or interactive element. Even if the user doesn't say "UX" or "design" — if they're building anything visual or interactive, use this skill.
---

# Product Design Skill

This skill guides Claude to apply professional, research-backed product design standards to every web and application design task. Always reference this skill before writing any UI code or designing any screen.

## Trusted Sources

All guidance here is grounded in:
- **Nielsen Norman Group (nngroup.com)** — Usability heuristics, UX research, interaction design principles
- **Baymard Institute (baymard.com)** — 200,000+ hours of usability testing, 700+ evidence-based UX guidelines
- **Built for Mars (builtformars.com)** — Real-world UX case studies, product psychology, behavioural nudges
- **W3C / WCAG 2.2 (w3.org/WAI)** — Accessibility standards; current operative standard is WCAG 2.2 Level AA
- **IDEO / Stanford d.school** — Design Thinking methodology

---

## 1. Design Thinking Methodology

Before writing any code or designing any layout, mentally run through these phases (adapt depth to task complexity):

1. **Empathize** — Who is the user? What is their goal, context, and pain point?
2. **Define** — What problem are we solving? Write a clear problem statement.
3. **Ideate** — What are multiple possible approaches? Don't default to the first idea.
4. **Prototype** — Build the simplest thing that tests the key assumption.
5. **Test** — Would a real user understand this without explanation? Apply heuristic evaluation.

For quick tasks, apply this as a mental checklist rather than a full process. For larger tasks, surface these questions explicitly to the user.

---

## 2. Nielsen Norman Group — 10 Usability Heuristics

Apply these to every interface. Violating any heuristic without strong justification is a design flaw.

| # | Heuristic | What to check |
|---|-----------|---------------|
| 1 | **Visibility of system status** | Does the user always know what's happening? (loading states, confirmations, progress) |
| 2 | **Match between system and real world** | Is the language plain and familiar? Are conventions real-world? |
| 3 | **User control and freedom** | Can users undo, go back, or escape from any state? |
| 4 | **Consistency and standards** | Are patterns used consistently? Do they follow platform conventions? |
| 5 | **Error prevention** | Are inputs constrained? Are destructive actions confirmed? |
| 6 | **Recognition over recall** | Are options visible? Are labels clear? Does the UI show, not ask users to remember? |
| 7 | **Flexibility and efficiency** | Are there shortcuts or power-user paths alongside beginner flows? |
| 8 | **Aesthetic and minimalist design** | Is every element earning its place? Remove what doesn't add value. |
| 9 | **Help users recognize, diagnose, and recover from errors** | Are error messages human, specific, and actionable? |
| 10 | **Help and documentation** | Is contextual help available without overwhelming the interface? |

**Self-check before finalising any design:** Scan through all 10. If you're intentionally violating one, note it and explain why.

---

## 3. Accessibility — WCAG 2.2 Level AA (Non-Negotiable)

WCAG 2.2 AA is the current legal standard in the US (ADA), EU (EAA via EN 301 549), and most jurisdictions. It is organised around four principles — **POUR**:

- **Perceivable**: All content is available to at least one sense. Non-text content has alt text. Videos have captions. Colour is never the only differentiator.
- **Operable**: All functionality is keyboard accessible. No keyboard traps. Focus indicators are visible. Users have enough time to interact.
- **Understandable**: Language is clear and consistent. Navigation is predictable. Errors are identified and described helpfully.
- **Robust**: Markup is valid. ARIA is used correctly. Content works across browsers and assistive technologies.

### Non-negotiable minimums for every design
- **Colour contrast**: 4.5:1 for normal text, 3:1 for large text and UI components (WCAG 1.4.3, 1.4.11)
- **Focus visible**: All interactive elements must have a clear, visible focus indicator (WCAG 2.4.7, 2.4.11)
- **Keyboard accessible**: Every action achievable by mouse must be achievable by keyboard alone (WCAG 2.1.1)
- **Alt text**: All meaningful images have descriptive alt text; decorative images have `alt=""` (WCAG 1.1.1)
- **Heading hierarchy**: Use H1→H2→H3 logically. Do not skip levels. (WCAG 2.4.6)
- **Links are descriptive**: Never use "click here." Link text must describe the destination (WCAG 2.4.4)
- **Form labels**: Every input has a programmatically associated label (WCAG 1.3.1)
- **Error identification**: Errors are described in text, not just by colour (WCAG 3.3.1)
- **No horizontal scroll**: Content must work at 320px width without horizontal scrolling (WCAG 1.4.10)
- **Touch targets**: Minimum 24×24px interactive target size (WCAG 2.5.8, new in 2.2)

For full accessibility reference, read `references/accessibility.md`.

---

## 4. Information Architecture

Good IA is invisible — users find what they need without thinking about it.

### Principles
- **Organise by user mental model**, not by internal org structure or technology
- **Limit navigation depth**: Aim for no more than 3 levels. Deeper = lost users.
- **Progressive disclosure**: Show only what's needed now. Reveal complexity on demand.
- **Clear labelling**: Category names must be mutually exclusive and immediately understood
- **Consistent navigation**: The nav, breadcrumbs, and footer should be predictable on every page (NN/G Heuristic #4)
- **Search as a safety net**: Never replace good IA with search. Use both.

### Common IA patterns
- **Hub-and-spoke**: Central home page linking to sections (apps, dashboards)
- **Sequential**: Step-by-step flows (checkout, onboarding, forms)
- **Matrix**: Same content accessed multiple ways (products filterable by category, brand, price)
- **Hierarchical**: Nested categories (e-commerce, documentation sites)

Choose the pattern that matches how users actually think about the content. Card sorting and tree testing (NN/G methods) validate this.

---

## 5. Usability — Baymard Institute Principles

Baymard's 200,000+ hours of research across 700+ guidelines. Key themes applicable broadly (not just e-commerce):

### Forms
- **Minimise fields**: Every extra field reduces completion. Ask only what you need now.
- **Inline validation**: Validate on blur, not on submit. Show success states, not just errors.
- **Clear error recovery**: State exactly what went wrong and how to fix it.
- **Logical field order**: Match the mental sequence (e.g. name before email, city before postcode).
- **Avoid placeholder-only labels**: Placeholders disappear on focus. Always use persistent labels.
- **Optional vs. required**: Mark one consistently (typically mark optional fields, not required).

### Navigation and Search
- **Category taxonomy is critical**: If categories don't match users' vocabulary, they won't find anything.
- **Filters should reflect the current result set**: Don't show filter options that produce zero results.
- **Mobile navigation**: Hamburger menus hide context — use bottom nav bars for primary mobile actions.
- **Breadcrumbs**: Essential for multi-level sites. Always show the full path.

### Mobile
- **Thumb zones**: Primary actions in easy thumb reach (bottom 60% of screen on mobile).
- **Touch targets**: Minimum 44×44px tap area (Apple HIG); 48×48dp (Material). Never rely solely on WCAG's 24px minimum.
- **Reduce cognitive load on mobile**: Fewer elements per screen. Larger type. More whitespace.
- **Test real tasks on real devices** — emulators miss fat-finger and scroll issues.

### Content and Copy
- **Headlines must communicate value**, not be clever. Users scan first, read second.
- **Plain language**: Write at 8th grade reading level for general audiences.
- **Microcopy matters**: Button labels, empty states, loading messages, and error text are part of the UX.
- **Progressive disclosure**: Advanced options behind "Advanced settings" or accordions.

---

## 6. UI Design Principles

### Visual Hierarchy
- Use size, weight, colour, and spacing to make the most important thing the most visually prominent.
- One primary CTA per screen. Avoid competing CTA hierarchies.
- Whitespace is not empty — it creates grouping, breathing room, and focus.

### Typography
- **Body text**: minimum 16px for web, 14px only if line spacing compensates.
- **Line length**: 50–75 characters per line for comfortable reading.
- **Line height**: 1.4–1.6× for body text; tighter for headings.
- **Type scale**: Use a consistent modular scale (e.g. 12/14/16/20/24/32/48px).

### Colour
- Use colour to communicate, not decorate.
- Never use colour as the *only* differentiator (accessibility + colourblindness).
- Reserve red for errors/danger. Reserve green for success/confirmation.
- Establish a palette: primary, secondary, neutral, semantic (success/warning/error/info).

### Spacing
- Use a consistent spacing scale (4px or 8px base grid is standard).
- Proximity principle: related elements closer together, unrelated further apart.

### Motion and Feedback
- All interactive elements need visible state changes: default → hover → active → focus → disabled.
- Animations should be purposeful and short (150–300ms). Avoid animation for decoration.
- Respect `prefers-reduced-motion` media query for users who experience motion sickness.

### Component Consistency
- Reuse patterns. If a button does X in one place, the same button style should always mean X.
- Follow the platform's design language: iOS/macOS → Apple HIG; Android → Material Design; Web → follow established patterns from your chosen system.

---

## 7. Built for Mars — Product Psychology & Behavioural UX

Real-world patterns that drive engagement and conversion:

- **Goal gradient effect**: Motivation increases as users get closer to completing a goal. Show progress bars, step counts, completion percentages.
- **Endowed progress**: Give users a head start (e.g. "Step 1 of 5 — you've already started!").
- **Sunk cost and commitment**: Once users invest effort, they're more likely to continue. Design onboarding to get meaningful early commitment.
- **Reduce choice paralysis**: Fewer, better options outperform many options. A recommended/default option dramatically improves conversion.
- **Social proof placement**: Place testimonials, ratings, and user counts at decision points, not just on marketing pages.
- **Friction can be good**: For irreversible or high-stakes actions (delete, purchase, send), intentional friction reduces regret and errors.
- **The peak-end rule**: Users judge an experience by its most intense moment and its ending. Design a satisfying end state (success screen, completion animation, confirmation).

---

## 8. Design Review Checklist

Before finalising any design, run this checklist:

**Usability**
- [ ] All 10 NN/G heuristics reviewed
- [ ] User's goal is achievable in 3 clicks/taps or fewer from the entry point
- [ ] Error states are designed (not just happy paths)
- [ ] Empty states are designed
- [ ] Loading states are designed

**Accessibility**
- [ ] Colour contrast meets 4.5:1 (text) and 3:1 (UI components)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible
- [ ] Form inputs have associated labels
- [ ] Images have alt text
- [ ] Heading hierarchy is logical (H1→H2→H3)

**Mobile**
- [ ] Layout works at 320px width without horizontal scroll
- [ ] Touch targets ≥ 44×44px
- [ ] Primary actions reachable with thumb

**Content**
- [ ] Every label, button, and heading communicates clearly
- [ ] No placeholder-only form labels
- [ ] Error messages are human and actionable
- [ ] CTA buttons use verbs ("Save", "Get started") not nouns ("Submit")

**IA**
- [ ] Navigation max 3 levels deep
- [ ] Breadcrumbs on multi-level pages
- [ ] Category labels match user vocabulary

---

## Reference Files

For deeper guidance, read:
- `references/accessibility.md` — Full WCAG 2.2 AA criteria with implementation examples
- `references/ia-patterns.md` — Information architecture patterns and card-sorting guidance
- `references/component-patterns.md` — UI component best practices (forms, navigation, modals, tables, etc.)
