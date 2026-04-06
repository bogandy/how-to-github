# UI Component Patterns Reference

Sources: Nielsen Norman Group, Baymard Institute, Built for Mars, W3C ARIA Authoring Practices

---

## Forms

### Label Placement
- **Always use persistent labels above inputs** — never replace with placeholders alone
- Placeholder text disappears on focus and fails accessibility; use it only as supplementary hint
- Inline labels (inside the field) cause confusion when the field is filled

### Field Design
- Show required vs optional status consistently. The norm: mark optional fields with "(optional)" — users assume fields are required by default
- Group related fields visually (address fields, card fields)
- Use appropriate input types: `email`, `tel`, `number`, `date`, `url` — triggers correct keyboard on mobile and enables autocomplete
- Add `autocomplete` attributes for personal info fields (`name`, `email`, `tel`, `street-address`, etc.)

### Validation
- **Validate on blur (leaving field)**, not on every keypress and not only on submit
- Show success state (green checkmark) as user completes fields — reduces anxiety
- Error messages: state what's wrong AND how to fix it ("Email must include @" not "Invalid email")
- Never clear a field on error — user has to retype
- For long forms, show errors at the top AND inline after submission

### Buttons
- Use verbs: "Save changes", "Create account", "Send message" not "Submit" or "OK"
- Primary CTA: one per form/page maximum
- Destructive actions (delete, cancel): use a different visual treatment and require confirmation
- Disabled states: explain *why* it's disabled (tooltip or helper text)

### Multi-step Forms
- Show step progress (Step 2 of 4)
- Allow going back without losing data
- Save progress when possible (goal gradient effect — show how far they've come)

---

## Navigation

### Primary Navigation
- Limit top-level items to 5–7 (cognitive load)
- Active state clearly distinguishes current location
- Dropdown menus: avoid deep nesting (max 2 levels); ensure keyboard accessible
- Mobile: consider bottom navigation bar for primary destinations (thumb reachability)
- Mega menus: use for sites with many categories (e-commerce); group logically

### Breadcrumbs
- Required on any site with >2 levels of depth
- Format: Home > Category > Subcategory > Current Page
- Make all but last item clickable links
- Use `aria-label="breadcrumb"` and `aria-current="page"` on last item

### Tabs
- Use for switching between views of the same content (not for navigation between pages)
- Active tab visually distinct; keyboard: arrows move between tabs, Enter/Space activates
- Don't hide important content behind tabs if it's primary — it reduces discoverability

### Pagination vs Infinite Scroll
- **Pagination**: better for task-oriented searches (users know where they are; can return to a position)
- **Infinite scroll**: better for browsing/discovery feeds (social, news) — never for search results
- Always show a "Load more" option with infinite scroll (don't auto-load without user intent)

---

## Modals and Overlays

### When to Use
- Confirmation dialogs (destructive actions)
- Quick tasks that don't require leaving context (edit, preview)
- Alerts requiring immediate attention

### When NOT to Use
- Complex multi-step flows (use a page instead)
- Long forms (use a dedicated page)
- Information that users might need to reference while acting

### Implementation
- Trap focus inside the modal when open
- Close on Escape key
- Close on overlay click (but confirm if user has unsaved data)
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to the title
- Return focus to the triggering element on close

---

## Tables

### When to Use
- Comparative data with clear rows and columns
- Data with a meaningful relationship between row and column headers

### Design
- Use `<th>` for headers with appropriate `scope` attribute (`col` or `row`)
- Zebra striping aids reading across rows
- Allow column sorting; indicate sort direction and which column is sorted
- Sticky header on long/scrollable tables
- Responsive: on mobile, consider card layout, horizontal scroll with sticky first column, or collapsible rows

---

## Notifications, Toasts, and Alerts

| Type | When | Duration | Dismissible |
|------|------|----------|-------------|
| Success toast | Action confirmed | 3–5 seconds, auto-dismiss | Yes |
| Error toast | Action failed (reversible) | Persistent | Yes |
| Warning banner | Upcoming issue | Persistent | Depends |
| Error inline | Form validation | Persistent until resolved | No |
| Critical alert | System down, data loss risk | Persistent | Requires action |

- Toast position: top-right (desktop), bottom-center (mobile)
- Use `role="status"` for non-urgent; `role="alert"` for urgent (screen reader announcement)
- Don't auto-dismiss errors — users need time to act

---

## Empty States

Every list, table, or content area needs a designed empty state. Never show a blank page.

Good empty state includes:
1. A clear message explaining *why* it's empty
2. An illustration or icon (optional but improves clarity)
3. A primary action to resolve the emptiness ("Create your first project")

Types:
- **No data yet**: onboarding empty state (encouraging, action-oriented)
- **No results**: search/filter empty state (explain the filter, offer to clear it)
- **Error**: something went wrong empty state (explain and offer retry)

---

## Loading States

Every async action needs a loading state. Never leave users without feedback.

- **< 100ms**: No loader needed
- **100ms–1s**: Subtle spinner or skeleton
- **> 1s**: Skeleton screens preferred over spinners (less "blank" feeling, perceived as faster)
- **> 3s**: Show progress bar or progress message. Explain *what* is loading.
- Use `aria-busy="true"` on loading containers

---

## Search

- Search input should be prominent and immediately obvious
- Provide autocomplete suggestions for longer queries
- Show search term in results ("12 results for 'invoice'")
- Zero results: explain what was searched and offer alternatives (spell check, broader search, popular items)
- Filters: show only values that exist in the current result set; show count per filter option; allow clearing individual filters and all filters

---

## Cards

- Cards represent single entities — one card, one action (primary)
- Entire card can be clickable, but ensure keyboard users can access it and screen readers announce it correctly
- Avoid multiple competing CTAs on a single card
- Consistent card height in grids unless content length truly dictates variation
- Image aspect ratio should be locked (use `aspect-ratio` CSS) — avoid layout shift as images load

---

## Tooltips

- Use for non-essential supplementary information only — never for critical information
- Appear on hover AND focus (keyboard accessible)
- Delay appearance ~300ms to avoid noise on mouse-over
- Keep text under 60 characters
- Don't put interactive elements (links, buttons) inside tooltips — use a popover instead
- Use `role="tooltip"` and `aria-describedby` on the trigger element
