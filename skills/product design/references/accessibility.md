# Accessibility Reference — WCAG 2.2 Level AA

Source: W3C Web Accessibility Initiative (w3.org/WAI), WCAG 2.2

---

## The POUR Principles

All WCAG success criteria fall under four principles:

### 1. Perceivable
Information must be presentable in ways users can perceive.

| Criterion | Level | Requirement |
|-----------|-------|-------------|
| 1.1.1 Non-text Content | A | All images have text alternatives. Decorative images use `alt=""`. |
| 1.2.1 Audio/Video (prerecorded) | A | Provide transcript for audio; captions + audio description for video |
| 1.3.1 Info and Relationships | A | Semantic structure (headings, lists, tables) conveyed in markup |
| 1.3.2 Meaningful Sequence | A | Reading order is logical when CSS is stripped |
| 1.3.3 Sensory Characteristics | A | Instructions don't rely only on shape, colour, size ("click the red button") |
| 1.3.4 Orientation | AA | Content not locked to portrait or landscape (except if essential) |
| 1.3.5 Identify Input Purpose | AA | Autocomplete attributes on personal data fields (name, email, phone) |
| 1.4.1 Use of Colour | A | Colour is not the only means of conveying information |
| 1.4.2 Audio Control | A | Auto-playing audio can be paused/stopped |
| 1.4.3 Contrast (Minimum) | AA | 4.5:1 for normal text; 3:1 for large text (18px+ or 14px+ bold) |
| 1.4.4 Resize Text | AA | Text resizable to 200% without loss of content or function |
| 1.4.5 Images of Text | AA | Avoid text in images; use real text |
| 1.4.10 Reflow | AA | No horizontal scroll at 320px width; single column layout |
| 1.4.11 Non-text Contrast | AA | 3:1 contrast for UI components and graphical elements |
| 1.4.12 Text Spacing | AA | No content loss when line height = 1.5×, letter spacing = 0.12em, word spacing = 0.16em |
| 1.4.13 Content on Hover or Focus | AA | Tooltip/popup content dismissible, hoverable, persistent |

### 2. Operable
Users must be able to navigate and use the interface.

| Criterion | Level | Requirement |
|-----------|-------|-------------|
| 2.1.1 Keyboard | A | All functionality operable by keyboard alone |
| 2.1.2 No Keyboard Trap | A | Focus never stuck; Escape always exits overlays |
| 2.1.4 Character Key Shortcuts | A | Single-key shortcuts can be turned off or remapped |
| 2.2.1 Timing Adjustable | A | Time limits can be extended or turned off |
| 2.2.2 Pause, Stop, Hide | A | Moving/auto-updating content can be paused |
| 2.3.1 Three Flashes | A | No content flashes more than 3 times/second |
| 2.4.1 Bypass Blocks | A | Skip-to-main link for repeated navigation |
| 2.4.2 Page Titled | A | Page has descriptive `<title>` |
| 2.4.3 Focus Order | A | Focus moves in logical reading order |
| 2.4.4 Link Purpose | A | Link text describes destination; never "click here" |
| 2.4.6 Headings and Labels | AA | Headings and labels are descriptive |
| 2.4.7 Focus Visible | AA | Keyboard focus indicator is visible |
| 2.4.11 Focus Not Obscured (Minimum) | AA | Focused component not fully hidden by sticky headers/footers (new in 2.2) |
| 2.5.1 Pointer Gestures | A | Multi-finger gestures have single-pointer alternatives |
| 2.5.3 Label in Name | A | Visible button text matches accessible name |
| 2.5.7 Dragging Movements | AA | Drag-and-drop has single-pointer alternative (new in 2.2) |
| 2.5.8 Target Size (Minimum) | AA | Touch targets ≥ 24×24px (new in 2.2) |

### 3. Understandable
Content and UI must be easy to understand.

| Criterion | Level | Requirement |
|-----------|-------|-------------|
| 3.1.1 Language of Page | A | `lang` attribute set on `<html>` |
| 3.1.2 Language of Parts | AA | `lang` set on elements in a different language |
| 3.2.1 On Focus | A | No unexpected context change on focus |
| 3.2.2 On Input | A | No unexpected context change on input (e.g. auto-submit on select) |
| 3.2.3 Consistent Navigation | AA | Nav is in the same position across pages |
| 3.2.4 Consistent Identification | AA | Components with same function have same label across pages |
| 3.2.6 Consistent Help | A | Help/contact links appear in same location on every page (new in 2.2) |
| 3.3.1 Error Identification | A | Errors identified in text (not only colour) |
| 3.3.2 Labels or Instructions | A | Form inputs have labels/instructions before the input |
| 3.3.3 Error Suggestion | AA | Errors describe what went wrong and how to fix it |
| 3.3.4 Error Prevention | AA | Submissions reviewable/reversible for legal/financial/data transactions |
| 3.3.7 Redundant Entry | A | Don't ask users to re-enter info they already provided (new in 2.2) |
| 3.3.8 Accessible Authentication | AA | Cognitive tests not required; password paste allowed (new in 2.2) |

### 4. Robust
Content must work across current and future assistive technologies.

| Criterion | Level | Requirement |
|-----------|-------|-------------|
| 4.1.1 Parsing | A | Valid HTML; no duplicate IDs |
| 4.1.2 Name, Role, Value | A | UI components have accessible name, role, and state via ARIA or native semantics |
| 4.1.3 Status Messages | AA | Status messages (success, error, loading) announced to screen readers via `role="status"` or `aria-live` |

---

## ARIA Quick Reference

Use native HTML elements first. ARIA is for when native semantics are not enough.

```html
<!-- Prefer native -->
<button>Save</button>
<nav>...</nav>
<main>...</main>

<!-- ARIA for dynamic content -->
<div role="status" aria-live="polite">Form saved successfully</div>
<div role="alert" aria-live="assertive">Error: Email is required</div>

<!-- Required ARIA patterns -->
<div role="dialog" aria-labelledby="dialog-title" aria-modal="true">
  <h2 id="dialog-title">Confirm Delete</h2>
</div>

<!-- Buttons with icons only -->
<button aria-label="Close menu">
  <svg aria-hidden="true">...</svg>
</button>
```

## Colour Contrast Quick Reference

| Context | Ratio |
|---------|-------|
| Normal text (< 18px regular, < 14px bold) | 4.5:1 |
| Large text (≥ 18px regular or ≥ 14px bold) | 3:1 |
| UI components (borders, icons, controls) | 3:1 |
| Decorative / inactive / logo text | No requirement |

Tools: WebAIM Contrast Checker, Colour Contrast Analyser (desktop app), Figma plugins: "Contrast" or "A11y - Color Contrast Checker".

## Focus Indicator Implementation

```css
/* Never do this: */
:focus { outline: none; }

/* Do this instead — custom focus ring */
:focus-visible {
  outline: 3px solid #005fcc;
  outline-offset: 2px;
}
```

## Skip Navigation

Every page should have a skip link as the first focusable element:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
<main id="main-content">...</main>
```

```css
.skip-link {
  position: absolute;
  left: -9999px;
}
.skip-link:focus {
  left: 0;
  /* visible style */
}
```

## Testing Checklist

- **Keyboard only**: Tab through entire page. Can you reach and activate everything?
- **Screen reader**: Test with NVDA (Windows, free), VoiceOver (Mac/iOS, built-in), or TalkBack (Android)
- **Zoom to 200%**: Does content reflow cleanly? No horizontal scroll?
- **320px width**: Does layout adapt without horizontal scroll?
- **Contrast**: Run automated check + manually review all text and UI elements
- **Reduced motion**: Test with `prefers-reduced-motion: reduce` enabled in OS settings
