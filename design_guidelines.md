# TheNextHit - Design Guidelines

## Design Approach
**Hybrid Approach**: Material Design foundation with casino-themed customization. This balances the utility-focused nature of a prediction tool with the visual appeal expected in gaming applications. Reference inspiration from Stake.com's clean data presentation and modern crypto casino aesthetics.

## Core Design Principles
1. **Data Clarity First**: Information hierarchy prioritizes readability and scannability
2. **Casino Sophistication**: Premium feel without overwhelming the functional purpose
3. **Progressive Disclosure**: Reveal complexity as users need it
4. **Trust & Transparency**: Design reinforces the "provably fair" concept

---

## Typography System

**Font Families**:
- Primary: Inter (Google Fonts) - clean, modern, excellent for data
- Accent: Space Grotesk (Google Fonts) - distinctive headings and CTAs

**Hierarchy**:
- H1 (App Title): Space Grotesk, 3xl/4xl, font-bold
- H2 (Section Headers): Space Grotesk, 2xl, font-semibold
- H3 (Card Titles): Inter, xl, font-semibold
- Body Text: Inter, base, font-normal
- Data/Results: Inter, sm/base, font-medium (tabular numbers)
- Labels: Inter, sm, font-medium, uppercase tracking-wide
- Buttons: Space Grotesk, base, font-semibold

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16** for consistent rhythm
- Micro spacing: p-2, gap-2 (8px)
- Standard spacing: p-4, gap-4, m-6 (16-24px)
- Section spacing: p-8, py-12, py-16 (32-64px)
- Large breaks: py-20, py-24 (80-96px)

**Container Strategy**:
- Max width: max-w-7xl for main content
- Form containers: max-w-2xl centered
- Result cards: max-w-4xl
- Full-bleed backgrounds with contained content

**Grid System**:
- Casino selector: 2-column grid (md:grid-cols-2)
- Input forms: Single column with logical grouping
- Results display: Responsive card grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)

---

## Component Library

### Navigation/Header
- Fixed top position with backdrop blur
- App logo/title left-aligned
- Casino selector toggle right-aligned
- Subtle border-bottom with gradient accent
- Height: h-16 to h-20

### Casino Selector
- Prominent card with two distinct sections
- Stake logo left, Shuffle logo right
- Clear visual separation with vertical divider
- Hover states with subtle scale transform
- Active state with border glow effect
- Icons: Use actual Stake and Shuffle brand marks via images

### Game Mode Toggle
- Segmented control design (Keno | Limbo)
- Pill-shaped background slider indicating active mode
- Centered below casino selector
- Smooth transition animation between modes

### Input Forms
- Grouped by logical sections with subtle bg cards
- Sections: "Seed Configuration", "Game Parameters", "Search Settings"
- Label-above-input pattern
- Input fields: rounded-lg, border with focus ring states
- Placeholder text with helpful examples
- Number inputs with increment/decrement buttons where appropriate
- "Search" button: prominent, gradient background, full-width on mobile

### Progress Indicator
- Animated progress bar during search
- Shows: "Scanning rounds... X/Y searched"
- Spinner icon with pulse animation
- Appears in card between form and results

### Results Display

**First Hit Highlight Card**:
- Larger, distinct card with gradient border
- Trophy/target icon
- Nonce, multiplier/hits, distance prominently displayed
- Visual separator from additional results

**Results Grid**:
- Card-based layout in responsive grid
- Each card shows: Nonce number (large), drawn numbers/multiplier, hit count, distance badge
- For Keno: Display drawn numbers as pill badges
- For Limbo: Large multiplier display with "×" suffix
- Distance badge: accent color, rounded-full, positioned top-right

**Empty State**:
- Centered message with search icon
- "No results found" with helpful next steps
- Suggestion to adjust search parameters

### Badges & Indicators
- Distance badges: Small, rounded-full, px-3 py-1
- Hit counter: Circular badge with contrast color
- Status indicators: Dot with label (searching/complete/error)

### Buttons
- Primary CTA: Gradient background (casino theme), rounded-lg, px-8 py-3
- Secondary: Outlined with hover fill
- Icon buttons: Square, rounded-md, p-2
- All buttons: Transform scale on hover, active state with subtle press effect

---

## Visual Treatments

**Background Strategy**:
- Main background: Subtle gradient (deep purple to dark blue)
- Card backgrounds: Semi-transparent with backdrop blur
- Section backgrounds: Layered gradients for depth
- Avoid pure black - use very dark blues/purples

**Borders & Dividers**:
- Default borders: 1px with slight transparency
- Active/hover borders: Gradient or accent color
- Dividers: 1px with fade at edges for sophistication

**Shadows**:
- Cards: Elevated shadow (shadow-xl with colored glow)
- Buttons: Subtle shadow on hover (shadow-lg)
- Floating elements: Multi-layer shadows for depth

**Gradients**:
- Primary gradient: Purple (#7C3AED) to blue (#3B82F6)
- Accent gradient: Gold (#F59E0B) to orange (#EF4444) for highlights
- Subtle background gradients throughout

---

## Icons
**Library**: Heroicons (via CDN)
- Use outline style for general UI
- Use solid style for active states and emphasis
- Casino/gaming icons: Trophy, Target, Sparkles, ChartBar
- Utility icons: Cog, QuestionMarkCircle, Search, ChevronRight

---

## Images

**Casino Logos**:
- Stake logo: High-quality brand asset, displayed in casino selector
- Shuffle logo: High-quality brand asset, displayed in casino selector
- Position: Centered within respective selector cards, with h-12 to h-16 height

**No Hero Section**: This is a tool/utility app - launch directly into casino selector and functionality. Background gradients provide visual interest without needing hero imagery.

**Decorative Elements** (optional enhancement):
- Subtle geometric patterns in background
- Animated particle effects in header (very subtle, non-distracting)

---

## Responsive Behavior

**Mobile (base)**:
- Single column layouts
- Stacked casino selector cards
- Full-width inputs and buttons
- Results in single column
- Collapsible input sections with accordions

**Tablet (md:)**:
- Two-column casino selector
- Two-column results grid
- Wider form inputs with better spacing

**Desktop (lg:)**:
- Three-column results grid where appropriate
- Side-by-side form sections
- Optimized for scanning large result sets
- More generous spacing throughout

---

## Interaction Patterns

**Form Submission**:
1. Button shows loading spinner
2. Form dims slightly
3. Progress indicator appears
4. Results fade in with stagger animation

**Casino/Game Mode Switching**:
- Smooth transition with fade/slide
- Previous results clear
- Form resets with new placeholder values

**Number Input** (Keno picked numbers):
- Comma or space-separated input
- Real-time validation showing selected count
- Visual preview of selected numbers as badges below input

**Error States**:
- Inline validation messages below inputs
- Red accent color for errors
- Clear, actionable error text

---

## Animation Guidelines
Use sparingly and purposefully:
- Page transitions: Fade with slight scale (200ms)
- Card hover: Subtle lift with scale(1.02) (150ms)
- Button interactions: Press scale(0.98) (100ms)
- Progress bar: Smooth width transition
- Results appearance: Stagger fade-in (50ms delay between cards)
- NO: Excessive parallax, floating animations, or distracting background motion