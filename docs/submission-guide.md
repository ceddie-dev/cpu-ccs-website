# FINAL SUBMISSION, DEPLOYMENT & DEFENSE GUIDE
## CCS 3031 – Web Systems and Technologies
### Central Philippine University • College of Computer Studies

This guide provides step-by-step instructions for deploying your project to production, a complete verification checklist, and an oral presentation script to help you confidently demonstrate and defend your code before your instructor.

---

## 1. QUICK START & LOCAL DEVELOPMENT

```bash
# 1. Install dependencies (if running on a new computer)
npm install

# 2. Run the development server with Hot Module Replacement (HMR)
npm run dev

# 3. Build for production (generates optimized files in dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 2. PRODUCTION DEPLOYMENT INSTRUCTIONS

### Option A: Deploy to Netlify (Recommended - Simplest & Fastest)

#### Method 1: Netlify Drag-and-Drop (Instant 1-Minute Deployment)
1. Run `npm run build` in your terminal. This creates the production-ready `dist/` folder.
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop) in your web browser.
3. Drag and drop the `dist` folder into the Netlify Drop area.
4. Your website is immediately deployed with a live public HTTPS URL!
5. *Note:* The SPA redirect rule (`public/_redirects` -> `dist/_redirects`) is already included, ensuring URLs like `/programs/bsit` and `/faculty` work properly without 404 errors on page refresh.

#### Method 2: Netlify via GitHub
1. Push your project code to a GitHub repository (excluding `node_modules`).
2. Log into [Netlify](https://www.netlify.com/) and click **"Add new site" > "Import an existing project"**.
3. Select your GitHub repository.
4. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**.

---

### Option B: Deploy to Vercel

#### Method 1: Vercel Dashboard via GitHub
1. Push your project to GitHub.
2. Log into [Vercel](https://vercel.com/) and click **"Add New..." > "Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `vite build` or `npm run build`
   - **Output Directory:** `dist`
5. The included `vercel.json` file in the root directory automatically configures Single Page Application rewrites to `/index.html`.
6. Click **"Deploy"**.

#### Method 2: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```

---

## 3. FINAL EVALUATION TESTING CHECKLIST

Use this checklist during your evaluation to ensure every feature is working:

- [x] **Branding & Assets:**
  - [x] CPU Official Logo (`/assets/logos/cpu-logo.png`) renders with correct aspect ratio.
  - [x] CCS Official Logo (`/assets/logos/ccs-logo.png`) renders without distortion.
  - [x] All 17 authentic staff portraits load via `object-fit: cover` with verified names and credentials (no synthetic consultation hours).
  - [x] Program insignia (`information-technology.png`, `computer-science.png`, `midas.png`, `lisso.png`) are properly placed.
  - [x] ITSO represented with high-contrast CPU Navy & gold acronym badge without fake graphic generation.

- [x] **Routing & Navigation:**
  - [x] Home (`/`) renders hero, stats, dean's message, program cards, 4 active student orgs, and latest news.
  - [x] About (`/about`) renders history, 4-era interactive timeline (1995–2019) reflecting 14 verified baseline milestones, vision/mission, 6 computing labs, 4 student organizations (CSS, ITSO, MIDAS, LISSO), and FAQ accordion.
  - [x] BSIT (`/programs/bsit`) renders 161-unit AY 2024–2025 curriculum with DBA & IoT tracks, `CSS 3600` / `CCS 4100` CCS Thesis, `CCS 4201` 600-hour OJT, objectives, careers, and IT faculty.
  - [x] BSCS (`/programs/bscs`) renders 164-unit AY 2024–2025 curriculum with Software Dev, Data Science, and Cybersecurity tracks, `CCS 3600` / `CCS 4100` CCS Thesis, and `CCS 4201` 600-hour OJT.
  - [x] BSDMIA (`/programs/bsdmia`) renders 164-unit AY 2024–2025 curriculum with Digital Media & Broadcast Design vs. Visualization & Animation track toggles, Portfolio Development sequence, and `CCS 4201` 600-hour OJT.
  - [x] BLIS (`/programs/blis`) renders 156-unit AY 2024–2025 curriculum with 400-hour dual practicum and Library Integrated Review (6 units).
  - [x] Faculty (`/faculty`) allows live search, category filtering, program tag filtering, and notes dual verification details.
  - [x] News (`/news`) allows category filtering and opens full article reading modal dialogs.
  - [x] Contact (`/contact`) validates inputs in real time and triggers confirmation modal.
  - [x] 404 (`/nonexistent-path`) displays custom branded 404 page with navigation links.

- [x] **Documentation & Audit Compliance:**
  - [x] `docs/content-audit.md` provides complete matrix of discrepancies, sources, corrections, and uncertainties.
  - [x] `docs/design-audit.md` details UI/UX defects, impacts, modern solutions, and files affected.
  - [x] `docs/curriculum-verification.md` provides line-by-line course mapping and typed endorsement block verification.
  - [x] `docs/reference-materials/` contains all 4 official AY 2024–2025 PDF checklists and reference README.
  - [x] `docs/project-report.md` updated across all 12 comprehensive sections.

- [x] **User Interactions & State:**
  - [x] Mobile hamburger menu opens and closes off-canvas drawer.
  - [x] Academic Programs dropdown displays 4 degree options with description snippets.
  - [x] CurriculumViewer switches year-levels, semesters, and tracks reactively without page reloads.
  - [x] Full 4-year curriculum matrix modal displays complete course roadmap.
  - [x] About page interactive timeline switches between 5 distinct historical eras reflecting 14 verified milestones (1995 to Present).
  - [x] Contact form blocks invalid emails and short inputs, showing clear inline errors.
  - [x] Browser Back & Forward buttons navigate smoothly between views.
  - [x] Page scrolls to top on navigation.

---

## 4. ORAL DEMONSTRATION & DEFENSE GUIDE

When presenting to your instructor, structure your demonstration around these three key segments:

### Part 1: Project Overview & Architecture (1–2 minutes)
> *"Good day, Sir/Ma'am. For our CCS 3031 final examination project, we redesigned the Central Philippine University College of Computer Studies website into a modern, accessible Single-Page Application (SPA) using Vue.js 3, Vite, and Vue Router 4.*
>
> *Our design adheres to CPU's official visual identity—using CPU Navy (`#002147`) and Gold (`#F5B800`)—while addressing key usability shortcomings of the reference site. We used the actual university assets, including the verified portraits of all 17 faculty and staff members, the CPU and CCS crests, and program insignia."*

### Part 2: Code Structure & Key Vue 3 Concepts (2–3 minutes)

#### 1. Why Vue.js 3 Composition API?
> *"In `src/views/FacultyView.vue` and `src/views/ContactView.vue`, we utilized the Composition API with `<script setup>`. This provides clean code readability, superior TypeScript/IDE tooling, and efficient reactivity using `ref`, `reactive`, and `computed`."*

#### 2. How the Filtered Faculty Search Works (`computed` property)
> *"In `FacultyView.vue`, we have a computed property called `filteredFaculty`. Whenever the user types into the search box or clicks a category tab, Vue automatically re-evaluates the matching records in memory without reloading the page. It checks the person's name, degree credentials, department, and specialization keywords in real time."*

#### 3. How the 4 Academic Program Pages are Structured
> *"Rather than relying on generic summaries, we separated BSIT, BSCS, BSDMIA, and BLIS into four complete standalone views. Each program page contains verified CHED CMO objectives (CMO 25 s.2015 for computing; CMO 24 s.2015 for BLIS), interactive 4-year curriculum tabs, industry career pathways, and the specific verified faculty teaching in that department."*

#### 4. Reusable Component Decomposition
> *"We decoupled the user interface into reusable components in `src/components/`:*
> - `AppNavbar.vue`: *Handles sticky desktop dropdowns and the accessible mobile off-canvas drawer.*
> - `AppFooter.vue`: *Houses university credentials, CHED recognition badges, and academic project disclosures.*
> - `ProgramCard.vue`, `FacultyCard.vue`, `NewsCard.vue`: *Provide consistent, modular styling for repeated entities.*
> - `BaseModal.vue`: *Uses Vue's `<Teleport>` to mount accessible dialogs directly into the document body, supporting ESC key closing and backdrop clicks.*
> - `CurriculumViewer.vue`: *Engineered to display verified curriculum checklists with real-time track toggling, unit counts, and 4-year modal exploration.*
> - `AppIcon.vue`: *Lightweight inline SVG icon system avoiding bulky third-party icon bundle overhead."*

#### 5. Client-Side Validation in ContactView.vue
> *"In `ContactView.vue`, our form enforces real-time client-side validation. If an invalid email format or empty name is entered, error alerts appear beneath the field. Once valid, submitting displays a confirmation modal with a clear academic demonstration disclaimer."*

### Part 3: Live Walkthrough (2 minutes)
1. **Homepage:** Show hero statistics, Dean's welcome portrait, and program cards.
2. **Programs:** Navigate to `/programs/bsit`, click through Year 1–4 tabs, and open the Curriculum Prospectus modal.
3. **Faculty Directory:** Navigate to `/faculty`, type a keyword like *"Beldia"* or click *"Computer Science"* to demonstrate real-time filtering.
4. **News & Events:** Click *"Read Article"* on Team SEntralians' hackathon victory to show the modal dialog.
5. **Contact Us:** Demonstrate triggering a validation error (e.g., incomplete email), then enter valid text to trigger the confirmation modal.
6. **Mobile View:** Open DevTools (F12), toggle Device Mode (iPhone / Pixel), and test the mobile off-canvas hamburger drawer.

---
*End of Guide.*

