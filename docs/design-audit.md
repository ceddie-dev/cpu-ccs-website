# Design & UI/UX Audit: CPU College of Computer Studies Website

**Course:** CCS 3031 – Web Systems and Technologies  
**Institution:** Central Philippine University — College of Computer Studies  
**Reference Website:** `https://ccs.cpu.edu.ph/`  
**Design System Standards:** Authentic CPU Navy (`#002147`), CPU Gold (`#F5B800`), Modern Typographic Hierarchy (`Inter`, `Outfit`), Responsive CSS Grid / Flexbox  
**Audit Date:** Academic Year 2024–2025  

---

## 1. Design System Overview

The redesigned CPU CCS website transitions from the legacy WordPress implementation to a modern, responsive, high-performance Vue 3 Single Page Application (SPA). The design system emphasizes institutional identity, clean typography, accessible interaction patterns, and zero layout shift across devices.

```
Institutional Color System:
┌────────────────────────┬────────────────────────┬────────────────────────┐
│ CPU Navy Primary       │ CPU Gold Accent        │ Subtle Surface         │
│ #002147                │ #F5B800                │ #F8FAFC                │
│ Contrast Ratio: 16.2:1 │ Contrast Ratio: 8.5:1  │ Clean card backgrounds │
└────────────────────────┴────────────────────────┴────────────────────────┘
```

---

## 2. Comprehensive Design Audit Matrix

| Design Area / UI Defect | Usability & UX Impact | Modern Solution Implemented | Files Affected |
| :--- | :--- | :--- | :--- |
| **Color Palette & Brand Identity** | Legacy site exhibited generic template colors, low-contrast text, and inconsistent link styling. | Built a strict CSS variable design system featuring authentic CPU Navy (`#002147`), CPU Gold (`#F5B800`), deep navy accents (`#001630`), and neutral backgrounds (`#F8FAFC`). Meets WCAG 2.1 AA/AAA contrast ratios. | `src/assets/main.css`, `AppNavbar.vue`, `AppFooter.vue` |
| **Institutional Logo Treatment** | Logos were previously either distorted, improperly padded, or omitted from interior views. | Utilized official CPU and CCS logo assets with fixed aspect ratios (`object-fit: contain`), SVG crispness, responsive sizing, and proper alt attributes to prevent distortion. | `AppNavbar.vue`, `HomeView.vue`, `AboutView.vue`, `AppFooter.vue` |
| **Curriculum Presentation Overload** | 4-year curricula contain 156–164 units with prerequisites and laboratory hours. Displaying them in raw tables leads to excessive vertical scrolling and severe horizontal clipping on mobile screens. | Engineered `CurriculumViewer.vue` featuring Year-Level pills, Semester tabs, BSDMIA creative track toggles, course code badges, prerequisite visual indicators, and a modal view for complete 4-year matrix exploration. | `src/components/CurriculumViewer.vue`, `BsItView.vue`, `BsCsView.vue`, `BsDmiaView.vue`, `BlisView.vue` |
| **Faculty Directory & Portrait Grid** | Inconsistent photo dimensions, distorted faces, missing department categorization, and lack of search capability. | Implemented responsive `FacultyCard.vue` with fixed aspect ratio (`4:3`), `object-fit: cover`, verified staff tags, active text search filter, department category filters, and modal/contact email triggers. | `src/components/FacultyCard.vue`, `src/views/FacultyView.vue` |
| **Mobile Navigation & Touch Ergonomics** | Desktop navigation bar clipped on mobile viewports; submenus were difficult to tap. | Created mobile drawer with backdrop blur, accessible ARIA attributes (`aria-expanded`, `aria-label`), animated hamburger toggle, and high-contrast touch targets (>48px). | `src/components/AppNavbar.vue` |
| **Information Architecture & Wayfinding** | Flat structure obscured distinct program offerings and caused confusion between CS, IT, DMIA, and BLIS. | Created 10 discrete Vue routes with persistent `AppBreadcrumb.vue` wayfinding, contextual program badges, distinct hero headers, and cross-linked program cards. | `src/router/index.js`, `src/components/AppBreadcrumb.vue`, all Program Views |
| **Chronological History Presentation** | Dense, unformatted text blocks made institutional heritage tedious to read. | Designed an interactive 5-Era History Timeline on `AboutView.vue` with clickable era tabs, visual milestone nodes, year badges, and leadership callouts (1995 to Present). | `src/views/AboutView.vue` |
| **Form Validation & Interactive Feedback** | Static non-functional contact forms with no user feedback. | Created `ContactView.vue` with reactive form bindings, field-level validation, subject routing (Inquiry, Admissions, Practicum, Faculty), and interactive submission confirmation alert. | `src/views/ContactView.vue` |
| **Modal Dialog Ergonomics** | Ad-hoc popups that lacked focus traps or backdrop dismissal. | Standardized with `BaseModal.vue` supporting escape-key dismissal, backdrop clicking, accessible headers, slot-based footers, and smooth fade/scale transitions. | `src/components/BaseModal.vue`, `CurriculumViewer.vue`, Program Views |
| **Typography & Reading Hierarchy** | Cluttered headings with inconsistent sizing, line-heights, and font weights. | Implemented dual typographic scale: `Outfit` for distinguished geometric headers and `Inter` for crisp body copy and data tables. | `index.html`, `src/assets/main.css` |

---

## 3. Responsive Breakpoint Strategy

- **Desktop (≥1200px):** 3-column / 4-column card grids, comprehensive two-column hero layouts, side-by-side overview matrices.
- **Tablet (768px – 1199px):** 2-column adaptive grids, touch-friendly tab selectors, collapsible timeline headers.
- **Mobile (≤767px):** Single-column stacked layouts, horizontal scrollable tab strips (`scrollbar-width: thin`), mobile slide-out navigation menu, full-width touch buttons.

