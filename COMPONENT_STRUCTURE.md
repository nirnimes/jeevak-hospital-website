# Component Structure & Flow

## Page Layout (Index.tsx)

```
┌─────────────────────────────────────────────┐
│            Header (Fixed Top)                │
│  ┌─────────────────────────────────────┐   │
│  │  Emergency Bar (Red, Always Visible) │   │
│  │  "Emergency Cardiac Care: +91-612..."│   │
│  └─────────────────────────────────────┘   │
│  ┌─────────────────────────────────────┐   │
│  │  Logo | Nav | Phone | Book Button   │   │
│  │  [+]  H|S|E|A|C  [📞] [Book]        │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│              Hero Section                    │
│  • Trust indicators                          │
│  • Callback Form (OPTIMIZED)                 │
│    - Name (required)                         │
│    - Phone (required)                        │
│    - Service (optional)                      │
│    - "Request My Consultation" button        │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│            Contact Bar (Blue)                │
│  [📞] Main    [📞] Emergency  [💬] WhatsApp  │
│  2670991      2670992 (pulse)  WhatsApp      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│           Services Section                   │
│  • 6 Service Cards                           │
│  • Cardiology, Orthopedics, etc.            │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│         CTA Section #1 (Light)               │
│  "Find the Right Cardiac Treatment"          │
│  [Schedule Your Heart Checkup Today]         │
│  [Call Emergency: +91-612-2670992]          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│            About Section                     │
│  • Hospital history                          │
│  • Stats cards                               │
│  • Accreditations                            │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│         CTA Section #2 (Dark)                │
│  "Get Emergency Heart Care Now"              │
│  [Request Free Consultation]                 │
│  [Call Emergency: +91-612-2670992]          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│              Footer                          │
│  • Contact info                              │
│  • Quick links                               │
│  • Copyright                                 │
└─────────────────────────────────────────────┘

                                    ┌──────────┐
                                    │   [📞]   │
                                    │Emergency │
                                    │(Floating)│
                                    │ (Pulse)  │
                                    └──────────┘
                                    Bottom Right
```

## Component Hierarchy

```
Index
├── Header (Fixed)
│   ├── Emergency Bar (Red)
│   │   └── Phone: +91-612-2670992
│   └── Navigation
│       ├── Logo (Medical Cross Icon)
│       ├── Menu (H|S|E|A|C)
│       ├── Emergency Phone (Red)
│       └── Book Consultation (Blue CTA)
│
├── Hero
│   └── CallbackForm (Optimized)
│       ├── Name field
│       ├── Phone field
│       ├── Service dropdown (optional)
│       └── Submit CTA (Green)
│
├── ContactBar (Blue)
│   ├── Main Hospital
│   ├── Emergency (Pulse Animation)
│   ├── WhatsApp
│   └── Email
│
├── Services
│   └── 6 Service Cards
│
├── CTASection (Light)
│   ├── "Find the Right Cardiac Treatment"
│   └── 2 CTA Buttons
│
├── About
│   ├── Content
│   └── Stats Cards
│
├── CTASection (Dark)
│   ├── "Get Emergency Heart Care Now"
│   └── 2 CTA Buttons
│
├── Footer
│   ├── About
│   ├── Contact
│   └── Quick Links
│
└── EmergencyContact (Floating)
    └── Phone Button (Pulse Animation)
```

## Key Components Detail

### 1. Header.tsx
```
Emergency Bar (Always Visible)
├── Text: "Emergency Cardiac Care: Available 24/7"
└── Phone: +91-612-2670992 (click-to-call)

Main Nav
├── Logo: Medical Cross (+) in red circle
├── Tagline: "Bihar's Premier Cardiac Care Center"
├── Nav Items: Home | Services | Emergency | About | Contact
├── Emergency Phone: +91-612-2670992 (red)
└── CTA: "Book Consultation" (blue)
```

### 2. CallbackForm.tsx
```
Title: "Get Expert Cardiac Care - Free Consultation"

Trust Indicators:
├── ✓ Free consultation
├── ✓ No waiting lists
└── ✓ HIPAA protected

Form Fields:
├── Name (required)
├── Phone (required)
└── Preferred Service (optional)
    ├── Angioplasty
    ├── Bypass Surgery
    ├── Valve Replacement
    ├── Heart Checkup
    ├── Emergency Care
    ├── General Consultation
    └── Other

CTA: "Request My Consultation" (green, h-14)
```

### 3. EmergencyContact.tsx
```
Position: Fixed bottom-right
Design:
├── Outer ring: animate-ping (pulse)
└── Inner button:
    ├── Red circle (60px mobile, auto desktop)
    ├── White phone icon
    ├── Text: "Emergency - Call Now"
    └── Hover: scale-105
```

### 4. CTASection.tsx (Reusable)
```
Props:
├── title: string
├── description?: string
├── primaryText: string
├── primaryAction: string
├── showPhoneButton?: boolean
└── variant: "default" | "light" | "dark"

Renders:
├── Title (3xl-4xl)
├── Description (optional)
└── CTAs:
    ├── Primary Button (green)
    └── Phone Button (optional)
```

### 5. ContactBar.tsx
```
4 Contact Methods:
├── Main Hospital: +91-612-2670991
├── Emergency 24/7: +91-612-2670992 (pulse animation)
├── WhatsApp: +91-9430012345
└── Email: info@jeevakhospital.com
```

## Emergency Contact Access Points

```
1. Header Emergency Bar (Top)
   └── Red bar, always visible, click-to-call

2. Header Navigation (Top Right)
   └── Red phone number in nav

3. ContactBar (Below Hero)
   └── Emergency tile with pulse animation

4. CTA Sections (x2)
   └── Emergency phone buttons

5. Floating Action Button (Bottom Right)
   └── Pulse animation, always visible

Total: 5 emergency contact points
```

## Color Coding

- 🔴 **Red (Destructive):** Emergency elements, urgent actions
- 🔵 **Blue (Primary):** Main CTAs, brand elements
- 🟢 **Green (Secondary):** Form submission, success states
- ⚪ **White/Light:** Backgrounds, cards
- ⚫ **Dark:** Text, headers

## Responsive Breakpoints

- **Mobile:** < 640px (sm)
  - Hamburger menu
  - Stacked CTAs
  - Compact emergency bar
  - 60px floating button

- **Tablet:** 640px - 1024px (md-lg)
  - Full navigation visible at lg (1024px)
  - Side-by-side CTAs
  - Full emergency bar text

- **Desktop:** > 1024px (lg+)
  - Full navigation
  - All elements visible
  - Optimal spacing

## Animation Classes

```css
animate-fade-in    → Opacity 0→1 + translateY(10px→0)
animate-slide-up   → Opacity 0→1 + translateY(30px→0)
animate-pulse      → Built-in Tailwind pulse
animate-ping       → Built-in Tailwind ping (for pulse ring)
hover-lift         → translateY(-4px) + shadow-xl
```

## Key Interactions

1. **Click Emergency Phone** → Direct call to +91-612-2670992
2. **Click "Book Consultation"** → Scroll to #home (form)
3. **Click CTA Buttons** → Scroll to #contact
4. **Submit Form** → Show success message
5. **Mobile Menu** → Toggle open/close
6. **Hover Buttons** → Scale/lift effect

---

**All components are production-ready and fully optimized for healthcare conversions!**
