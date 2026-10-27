---
name: Culinary Operations Portal
colors:
  surface: '#f3fbf6'
  surface-dim: '#d3dcd7'
  surface-bright: '#f3fbf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf6f0'
  surface-container: '#e7f0eb'
  surface-container-high: '#e2eae5'
  surface-container-highest: '#dce5df'
  on-surface: '#151d1a'
  on-surface-variant: '#414845'
  inverse-surface: '#2a322f'
  inverse-on-surface: '#eaf3ee'
  outline: '#717974'
  outline-variant: '#c1c8c3'
  surface-tint: '#416658'
  primary: '#002218'
  on-primary: '#ffffff'
  primary-container: '#12382c'
  on-primary-container: '#7ba292'
  inverse-primary: '#a7cfbe'
  secondary: '#895100'
  on-secondary: '#ffffff'
  secondary-container: '#fd9d1a'
  on-secondary-container: '#663b00'
  tertiary: '#00221b'
  on-tertiary: '#ffffff'
  tertiary-container: '#0f3830'
  on-tertiary-container: '#7aa297'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c3ebda'
  primary-fixed-dim: '#a7cfbe'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#294e41'
  secondary-fixed: '#ffdcbc'
  secondary-fixed-dim: '#ffb86b'
  on-secondary-fixed: '#2c1700'
  on-secondary-fixed-variant: '#683d00'
  tertiary-fixed: '#c1ebdf'
  tertiary-fixed-dim: '#a6cfc3'
  on-tertiary-fixed: '#00201a'
  on-tertiary-fixed-variant: '#274e45'
  background: '#f3fbf6'
  on-background: '#151d1a'
  surface-variant: '#dce5df'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  metric-val:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.875rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system translates the consumer-facing hospitality warmth of a food delivery platform into an operational, high-performance B2B merchant portal. Built for kitchen managers, franchise operators, and dispatch teams, the system bridges hospitality and software precision.

The design movement is **Modern Functional SaaS** grounded by organic culinary warmth. It avoids cold, sterile monochrome enterprise cliches in favor of an inviting, focused workplace environment. Tactile clarity, crisp typographic discipline, and dense information hierarchies allow multi-location restaurant operators to parse rush-hour orders, live inventory shifts, and margin analytics without cognitive fatigue. The UI balances operational velocity with approachable culinary craftsmanship.

## Colors

The palette directly extends the brand's identity into an executive workspace:

- **Primary (`#12382C`)**: Deep Forest Emerald. Anchor tone for sidebars, persistent navigation, primary interactive buttons, and table headers. Conveys stability, authority, and agricultural authenticity.
- **Secondary (`#FF9F1C`)**: Vibrant Mango. Used selectively for critical interactive touchpoints, primary alert badges, pending actions, and revenue highlights. Commands immediate visual priority without alarming the user.
- **Tertiary (`#52796F`)**: Muted Sage. Utilized for secondary action states, active filter pills, data comparison bars, and subtle brand accents.
- **Neutral Surface Palette**: The base canvas departs from sterile digital white, using a warm tint (`#FDFBF7`) layered over card surfaces (`#FFFFFF`). Structural division is maintained using neutral dividers (`#E2E8F0` and `#EAE6DF`).
- **Semantic Status Spectrum**:
  - *Preparing*: Amber Gold (`#D97706` on `#FEF3C7`)
  - *Ready / Pickup*: Slate Teal (`#0D9488` on `#CCFBF1`)
  - *Out for Delivery*: Vibrant Mango (`#EA580C` on `#FFEDD5`)
  - *Delivered*: Emerald Success (`#15803D` on `#DCFCE7`)
  - *Cancelled*: Crimson Muted (`#B91C1C` on `#FEE2E2`)

## Typography

The typography uses Inter across all operational touchpoints to guarantee absolute clarity across numerical charts, high-density order grids, and live kitchen dispatch screens.

- **Numerics and Metrics**: Uses tabular figures (`tnum`) for all operational tables, revenue reports, timestamps, and order identifiers to maintain strict vertical alignment across real-time changes.
- **Hierarchical Discipline**: Displays and major metrics employ negative letter spacing (`-0.01em` to `-0.02em`) to retain visual density. Status micro-labels and table column headers leverage uppercase tracking (`0.02em` to `0.03em`) for immediate scannability under kitchen ambient glare.

## Layout & Spacing

The layout is built on a responsive 12-column fluid grid system paired with a persistent 260px collapsible operational navigation sidebar.

- **Desktop (1280px+)**: 12-column layout with 20px (`1.25rem`) gutters and 32px (`2rem`) outer margin. Metric cards deploy in sets of 4 columns (span 3), main dispatch tables span 8 or 12 columns, and order detail drawers span 4 columns.
- **Tablet / Kitchen Display Unit (768px - 1279px)**: 8-column layout with 16px gutters and 24px margins. Sidebar collapses to an icon rail (64px) to preserve screen real estate for order throughput.
- **Mobile Handheld (320px - 767px)**: Single-column flow with 12px gutters and 16px horizontal margins. Modals shift to bottom-sheet drawers for single-thumb operations.
- **Spacing Rhythm**: Spacing is calibrated for high information density. Data row padding defaults to `space-sm` vertically and `space-md` horizontally, preventing excessive vertical scrolling during peak meal hours.

## Elevation & Depth

This design system avoids high-contrast dropshadows, relying on **tonal layering paired with calibrated low-contrast outlines**:

- **Level 0 (Base Canvas)**: Background rendered in warm canvas `#FDFBF7`. Provides a soft, glare-resistant floor for extended shift usage.
- **Level 1 (Card & Module Layer)**: Pure white `#FFFFFF` surface framed by an explicit 1px stroke of `#E2E8F0`. Layered with an ambient micro-shadow: `0 1px 3px rgba(18, 56, 44, 0.04), 0 1px 2px rgba(18, 56, 44, 0.02)`.
- **Level 2 (Dropdowns, Popovers, & Hover Elevate)**: White `#FFFFFF` surface with border `#CBD5E1` and diffused shadow: `0 4px 12px -2px rgba(18, 56, 44, 0.08), 0 2px 6px -1px rgba(18, 56, 44, 0.04)`.
- **Level 3 (Slide-over Drawers & Sticky Overlays)**: Surface `#FFFFFF` bordered along interior edge, elevated by an ambient occlusion shadow: `0 12px 28px -4px rgba(18, 56, 44, 0.12), 0 4px 10px -2px rgba(18, 56, 44, 0.05)`.
- **Level 4 (Critical Action Modals)**: Backed by a 40% opacity Forest Green tinted overlay backdrop (`rgba(18, 56, 44, 0.45)` with `backdrop-filter: blur(4px)`).

## Shapes

The design system employs a **Rounded** geometric philosophy (`roundedness: 2` = 0.5rem base) balancing modern ergonomics with enterprise structure:

- **Containers & KPI Cards**: Standardized at `0.75rem` (`12px`), producing clean, approachable boundaries that soften dense tabular layouts.
- **Form Inputs & Interactive Controls**: Set to `0.5rem` (`8px`) for compact touch targets and crisp cursor focus states.
- **Badges, Filter Chips, & Order Tags**: Set to full pill curvature (`9999px`) to immediately differentiate categorical tags and status indicators from interactive rectangular input components.
- **Action Buttons**: Set to `0.5rem` (`8px`), matching data entry inputs for visual coherence across toolbars.

## Components

### Buttons
- **Primary**: Background `#12382C`, text `#FFFFFF`, border none, 8px radius. Hover: `#1B4D3E`. Active: `#0D2A21`. Focus-visible ring: 2px `#FF9F1C` offset 2px.
- **Secondary / Accent**: Background `#FF9F1C`, text `#1B2320` (high contrast dark), 8px radius. Used for "Accept Order" or high-priority primary actions. Hover: `#F4930F`.
- **Outline / Tertiary**: Background `#FFFFFF`, text `#12382C`, 1px solid `#CBD5E1`. Hover: Background `#F4F6F0`, border `#12382C`.
- **Destructive**: Background `#FEF2F2`, text `#B91C1C`, 1px solid `#FCA5A5`. Hover: Background `#FEE2E2`.

### Status Badges & Chips
- Status indicators feature an 8px circular leading dot paired with semi-bold 12px uppercase text inside a pill container (`py: 4px`, `px: 10px`).
- **Preparing**: Surface `#FEF3C7`, Text `#92400E`, Dot `#F59E0B`.
- **Ready for Pickup**: Surface `#CCFBF1`, Text `#0F766E`, Dot `#14B8A6`.
- **Out for Delivery**: Surface `#FFEDD5`, Text `#C2410C`, Dot `#FF9F1C`.
- **Delivered**: Surface `#DCFCE7`, Text `#166534`, Dot `#22C55E`.
- **Cancelled**: Surface `#FEE2E2`, Text `#991B1B`, Dot `#EF4444`.

### Data Tables & Data Grids
- **Header Row**: Background `#F8F9FA`, border-bottom 1px solid `#E2E8F0`, typography `label-sm` in `#52796F` uppercase.
- **Body Rows**: Height 52px (standard) or 40px (compact kitchen mode). Border-bottom 1px solid `#F1F5F9`. Hover state shifts surface to `#F8F9F6`.
- **Cells**: Numerical data right-aligned with `font-variant-numeric: tabular-nums`.

### Cards & KPI Tiles
- Base: White `#FFFFFF`, border 1px solid `#E2E8F0`, corner radius 12px, padding `1.25rem`.
- KPI Structure: Subdued top label (`label-md`, `#64748B`), bold numeric value (`metric-val`, `#12382C`), and delta indicator with directional pill badge (Green `#DCFCE7` for positive, Crimson `#FEE2E2` for negative).

### Form Controls & Inputs
- **Text Inputs**: Height 40px, border 1px solid `#CBD5E1`, background `#FFFFFF`, text `#1B2320`, radius 8px, padding `0 12px`. Focus: border `#12382C`, shadow `0 0 0 3px rgba(18, 56, 44, 0.12)`.
- **Checkboxes & Radios**: 18px dimensions, border 1.5px solid `#94A3B8`. Checked state fills `#12382C` with white checkmark glyph.

### Kitchen Live Dispatch Card (Product-Specific)
- Dedicated card featuring an urgent left accent-border (4px solid Mango `#FF9F1C` for incoming unaccepted orders; 4px solid Teal `#0D9488` for cooking). Includes real-time timer countdown pill, itemized checklist with modifier tags, and a split dual-button action footer ("Reject" in subtle red, "Accept Order" in prominent Mango).