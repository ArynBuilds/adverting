# Adverting Design System

## Color (the entire palette)

Three colors. Reaching for a fourth is a mistake.

```
--ink:   #0A0A0A   /* primary background, primary text on light surfaces */
--volt:  #C6FF3D   /* the accent. CTA, live dot, ticker pulse, hover, cursor, active pill nav */
--paper: #F4F1EA   /* warm off-white. alternating sections, brief artifact card */
```

OKLCH equivalents for browsers that prefer them:
```
--ink-oklch:   oklch(0.13 0.005 80);
--volt-oklch:  oklch(0.92 0.27 122);
--paper-oklch: oklch(0.95 0.012 85);
```

Rules
- Volt never appears in gradients, never softened, never below 90% opacity.
- No grays beyond ink-at-low-opacity.
- No tint layers, no fourth color.
- Theme inversion is the rhythm device. Sections snap between ink-on-paper, paper-on-ink, ink-on-volt, volt-on-ink.

Color strategy: **Drenched** for hero and section transitions. **Committed** for cards. The site IS its color.

## Typography

Three families, each with one job.

```
--font-display: 'PP Neue Montreal', 'Geist', 'Space Grotesk', system-ui, sans-serif;
--font-body:    'Söhne', 'ABC Diatype', 'Inter Tight', system-ui, sans-serif;
--font-mono:    'JetBrains Mono', 'Berkeley Mono', ui-monospace, monospace;
```

Sizing (mobile-first, fluid)
- Hero: clamp(80px, 14vw, 240px) / line-height 0.86 / weight 800 → morphs to 600 on scroll
- Section title: clamp(48px, 8vw, 140px) / line-height 0.92 / weight 700
- Body: 18-20px / line-height 1.5
- Mono / UI labels: 13-14px / tracking +0.04em / uppercase for status

Hierarchy ratio: 1.33 between scale steps. No flat scales.

## Shape doctrine (the no-squares law)

Every interactive and container element is rounded.

| Element                    | Radius                         |
|----------------------------|--------------------------------|
| Buttons, tags, chips, nav  | 999px (full pill)              |
| Cards (work, news, sector) | 24px                           |
| Hero card / artifact       | 32px                           |
| Inputs (single line)       | 999px                          |
| Inputs (textarea)          | 16px                           |
| Images                     | 16px                           |
| Avatars                    | 50% (circle)                   |
| Modals, drawers, toasts    | 24px                           |
| Section divider            | 4px tall, 999px radius, volt   |

Display type stays sharp and heavy. The tension between brutalist type and pill containers is the visual signature.

Icons: Phosphor (rounded variant) or Lucide with `stroke-linecap: round`, `stroke-linejoin: round`. Never sharp-cornered icon sets.

## Motion

Easing: `cubic-bezier(0.32, 0.72, 0, 1)` everywhere. No bounce, no elastic except where elastically called for (slider release, marquee drag).

- Smooth scroll: Lenis. Native scroll forbidden.
- Section pinning: GSAP ScrollTrigger.
- Component motion: Framer Motion (springs, layoutId for morphing pills).
- Marquees: Embla autoplay or rAF. No CSS-only.
- Letter splits: Splitting.js.
- Scroll-driven animation: native `animation-timeline: scroll()` / `view()` where supported, fall back gracefully.

Durations
- Theme snap: 200ms
- Pill nav indicator slide: 400ms spring
- Tab content cross-fade: 180ms with 80ms overlap
- Page load sequence: 600-900ms total
- Toast: 220ms in / 220ms out / 3s hold

## Spacing rhythm

Vary deliberately. Tight (8px) for chips, comfortable (16px) for body, generous (96-160px) for section breaks. Never uniform.

## Elevation

No floating shadows on dark surfaces. On paper sections, card hover lifts 4px with a tinted shadow:
```
box-shadow: 0 24px 48px -16px oklch(0.92 0.27 122 / 0.2);
```
That tint is volt-flavored, never neutral.

## Forbidden (immediate fail)

- Square corners on any interactive or container element
- Side-stripe `border-left` accents
- Gradient text via background-clip
- Glassmorphism as default
- Hero-metric template (big number, small label, gradient)
- Identical card grids
- Modals as a first thought
- Em dashes in copy
- Fourth color anywhere
- "AI-powered", "magic", sparkle icons
