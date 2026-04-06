# Information Architecture Patterns

Sources: Nielsen Norman Group, Baymard Institute, Peter Morville & Louis Rosenfeld "Information Architecture for the Web and Beyond"

---

## What is Information Architecture?

IA is the structural design of shared information environments. It determines:
- How content is **organised** (taxonomies, categories, groupings)
- How it is **labelled** (navigation labels, headings, metadata)
- How users **navigate** (navigation systems, search, wayfinding)
- How it is **searched** (search systems, indexing, filtering)

Good IA is invisible. Bad IA is the reason users can't find what they need.

---

## The 8 Components of IA (Morville & Rosenfeld)

1. **Organisation systems** — How content is grouped and categorised
2. **Labelling systems** — How categories, links, and sections are named
3. **Navigation systems** — How users move through the space
4. **Search systems** — How users search and what they find
5. **Thesauri** — Synonyms and equivalents managed for search
6. **Controlled vocabularies** — Authoritative lists of terms (e.g. product categories)
7. **Metadata** — Attributes that describe content (tags, dates, authors)
8. **Finding aids** — Indexes, site maps, tables of contents

---

## Organisation Schemes

### Exact Schemes (objective)
- **Alphabetical** — Dictionaries, glossaries, A–Z indexes
- **Chronological** — News archives, timelines, version history
- **Geographical** — Store locators, regional content

### Ambiguous Schemes (subjective — most common in UX)
- **Topical** — By subject matter (most common; requires deep knowledge of users' vocabulary)
- **Task-oriented** — By what users are trying to do ("Get a quote", "Track order", "Manage account")
- **Audience-specific** — By user segment ("For individuals", "For businesses", "For developers")
- **Metaphor-based** — Maps real-world mental models to digital structure (use carefully; metaphors break)

**Principle**: When in doubt, organise by task or topic. Organising by your internal departments is the most common IA mistake.

---

## IA Structures

### Hierarchy (Tree)
Most common. Parent → child relationships.

```
Home
├── Products
│   ├── Category A
│   └── Category B
├── About
└── Contact
```

- **Good for**: Most websites, apps, documentation
- **Risk**: Too deep (>3 levels) means users get lost. Too wide (>7 top-level categories) overwhelms.
- **Rule of thumb**: Broad and shallow beats narrow and deep for navigation

### Sequential
Linear flow through content or tasks.

```
Step 1 → Step 2 → Step 3 → Complete
```

- **Good for**: Onboarding, checkout, forms, tutorials, wizards
- **Key principle**: Progress should always be visible; going back must be safe

### Matrix
Content accessible via multiple pathways simultaneously.

```
Products filterable by: Category | Brand | Price | Rating
```

- **Good for**: E-commerce, content libraries, datasets
- **Key principle**: Every combination must produce a useful result; avoid filter dead-ends

### Hub and Spoke
Central home screen connects to separate sections. No direct links between sections.

```
        Dashboard (Hub)
       /    |    |    \
Analytics  Tasks  Reports  Settings
```

- **Good for**: Mobile apps, dashboards, tool suites
- **Key principle**: Always easy to return to hub; spokes shouldn't need to talk to each other

---

## Navigation Design

### The Three Questions (NN/G)
Every page of a well-designed navigation system answers:
1. **Where am I?** (Active state, breadcrumbs, page title)
2. **Where have I been?** (Visited link styles, breadcrumbs)
3. **Where can I go?** (Navigation options, related links, CTAs)

### Navigation Principles
- **7 ± 2 rule**: Limit top-level navigation to 5–9 items (cognitive load)
- **Active states are mandatory**: Users must always know where they are
- **Consistent placement**: Navigation must appear in the same location on every page
- **Labels over icons**: Icons alone are ambiguous. Use labels. Use icons + labels for primary nav.
- **Avoid jargon**: Labels must be in the user's vocabulary, not your organisation's internal language

### Navigation Patterns by Device

**Desktop:**
- Horizontal top navigation (most common; works for <8 items)
- Left sidebar navigation (works for complex, deep IA; e.g. admin dashboards, docs)
- Mega menu (works for large catalogue sites; must be keyboard accessible)

**Mobile:**
- Bottom navigation bar (preferred for 3–5 primary destinations; thumb-reachable)
- Hamburger menu (acceptable for secondary items; makes content less discoverable)
- Tabs (for switching between views within a section)

---

## Labelling

### Principles
- **User vocabulary, not your vocabulary**: What words do users search for? Use those.
- **Mutually exclusive**: Category A items shouldn't also belong to Category B
- **Collectively exhaustive**: Every item belongs somewhere
- **Consistent grammatical form**: All nouns, or all verb phrases — not mixed
- **Avoid ambiguity**: If two people would interpret a label differently, change it

### Common Labelling Mistakes
- Using internal department names as navigation labels ("Solutions" instead of "Products")
- Inconsistent tense ("Getting started", "Set up your account", "Installation") — pick one pattern
- Labels that are too generic ("More", "Other", "Miscellaneous")
- Clever labels that sacrifice clarity ("The Hub", "The Lab")

### Testing Labels
- **Card sorting (open)**: Give users content cards, ask them to group and name them. Reveals user mental models.
- **Card sorting (closed)**: Give users content cards and pre-defined categories. Tests whether labels work.
- **Tree testing**: Give users the IA tree, ask them to find specific items. Measures findability without visual design.

---

## Search

### When Search is Essential
- More than ~200 items in the information space
- Users have specific known-item goals ("I want the February invoice")
- Content is too complex to browse (long documents, large databases)

### Search Design Principles
- **Search is a safety net, not a replacement for IA** — both must work
- **Search box placement**: Top right (desktop), top center (mobile) — it's a universal convention. Don't move it.
- **Search scope**: Make it clear what is being searched ("Search products" vs site-wide search)
- **Autocomplete**: Suggest based on existing content; avoid suggesting things that return zero results
- **Zero results**: Never a dead end. Offer: spell check suggestions, broader search, popular items, contact.
- **Results page**: Show the query term; allow refinement (filters); show result count; sort options

### Faceted Search (Filters)
Used alongside search for complex content sets:
- Show filter options that exist in the *current* result set
- Show count per option ("Red (12)")
- Allow multiple selections within a category (OR logic)
- Allow selections across categories (AND logic)
- Always provide "Clear all filters" and individual filter removal (chips/tags)
- Don't let filters produce zero results — disable/grey out options that would

---

## Wayfinding

Wayfinding = helping users know where they are at all times.

### Tools
- **Breadcrumbs**: Full hierarchical path from root to current page
  - Format: Home > Section > Subsection > Current Page
  - Make all but current page clickable
  - Use schema.org markup for SEO

- **Page titles**: Unique, descriptive, and meaningful. Mirror the navigation label that led here.

- **Active navigation states**: Clearly highlighted in menu

- **Section headers**: Every major section has a visible heading (H1 on page, H2 for major sections)

- **Contextual links**: "Related", "See also", "Next steps" — connect nodes in the IA

---

## IA for Different Product Types

### E-commerce
- Taxonomy is everything — get category names right through user testing
- Products often live in multiple categories — use faceted classification, not pure hierarchy
- Filter by: category, brand, price, rating, availability, attributes specific to category
- Navigation: mega menu (desktop), category browse (mobile)

### SaaS/Dashboard
- Organise by tasks users perform daily, not by feature set
- Use hub-and-spoke for major sections; hierarchy within each section
- Settings and configuration should be clearly separated from core workflows
- Onboarding flow (sequential) separate from main navigation

### Documentation / Knowledge Base
- Topic-based organisation (not product release history)
- All-text search is essential
- Breadcrumbs mandatory
- Related articles at end of each page
- Version selector if docs span multiple versions

### Mobile Apps
- Bottom navigation for 3–5 primary destinations
- Maximum 3 levels deep from any bottom nav item
- Every screen needs a back button and clear page title
- Avoid hamburger for primary actions
