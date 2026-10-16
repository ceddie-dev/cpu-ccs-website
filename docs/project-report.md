# CENTRAL PHILIPPINE UNIVERSITY
## COLLEGE OF COMPUTER STUDIES
### CCS 3031 – Web Systems and Technologies
#### Final Examination Project Documentation Report

---

# REDESIGN AND MODERNIZATION OF THE CPU COLLEGE OF COMPUTER STUDIES WEB PORTAL

```text
========================================================================================
Course Code:        CCS 3031 – Web Systems and Technologies
Institution:        Central Philippine University, Jaro, Iloilo City
Academic Term:      First Semester, Academic Year 2025–2026
Student/Group:      [Insert Student Name / Group Members Here]
Student ID No(s):   [Insert Student ID Number(s) Here]
Course & Year:      Bachelor of Science in Information Technology / Computer Science
Instructor:         [Insert Instructor Name Here]
Date of Submission: October 2026
========================================================================================
```

---

## TABLE OF CONTENTS

1. [Cover Page](#1-cover-page)
2. [Introduction](#2-introduction)
3. [Project Objectives](#3-project-objectives)
4. [Assessment of the Existing Website](#4-assessment-of-the-existing-website)
5. [Website Structure and Navigation](#5-website-structure-and-navigation)
6. [Website Pages, Features, and User Manual](#6-website-pages-features-and-user-manual)
7. [Before-and-After Website Comparison](#7-before-and-after-website-comparison)
8. [Vue.js Implementation](#8-vuejs-implementation)
9. [Website Testing and Responsiveness](#9-website-testing-and-responsiveness)
10. [Conclusion](#10-conclusion)
11. [References](#11-references)
12. [Group Member Contributions](#12-group-member-contributions)

---

## 1. COVER PAGE

* **Institution:** Central Philippine University (CPU), Lopez Jaena Street, Jaro, Iloilo City, Philippines 5000
* **College:** College of Computer Studies (CCS)
* **Degree Programs Represented:** BS Information Technology, BS Computer Science, BS Digital Media and Interactive Arts, BS Library and Information Science
* **Course:** CCS 3031 – Web Systems and Technologies
* **Project Title:** Single-Page Application (SPA) Web Redesign for the CPU College of Computer Studies
* **Project Repository:** `CPU College of Computer Studies`
* **Technologies:** Vue.js 3 (Composition API, `<script setup>`), Vite 8, Vue Router 4, Modern CSS3 Design System

---

## 2. INTRODUCTION

Central Philippine University (CPU), established in 1905 through the benevolence of American industrialist John D. Rockefeller and American Baptist missionaries, has long stood as an institution dedicated to **Scientia et Fides** (Science and Faith) and **Exemplary Christian Education for Life (EXCEL)**. Within this heritage, the **College of Computer Studies (CCS)** serves as the university's epicenter for computing education, software engineering, interactive media production, and information sciences.

In the contemporary digital era, a college's web portal represents its primary institutional gateway for prospective freshmen, enrolled students, alumni, faculty, researchers, and global industry partners. The portal must project academic prestige, communicate essential curriculum frameworks, reflect PACUCOA Level III accreditation standards, and provide seamless, responsive access across all modern desktop, tablet, and smartphone screens.

This project implements a complete redesign and frontend engineering overhaul of the CPU College of Computer Studies website (reference: `https://ccs.cpu.edu.ph/`). Utilizing a modern Single-Page Application (SPA) architecture built on **Vue.js 3**, **Vite**, and **Vue Router 4**, the redesigned website preserves CPU's authentic institutional identity while drastically advancing visual aesthetics, navigational speed, content organization, accessibility, and interactive usability.

---

## 3. PROJECT OBJECTIVES

### 3.1 Academic Objectives (CCS 3031)
1. Apply advanced principles of modern client-side web application engineering, component lifecycle management, and reactive state handling.
2. Demonstrate mastery of Vue.js 3 Single-File Components (SFC) using the Composition API (`<script setup>`).
3. Implement client-side routing, route metadata handling, smooth scroll restoration, and fallback mechanisms for Single-Page Applications.
4. Establish professional engineering discipline through clean directory separation, data modeling, automated testing, and comprehensive documentation.

### 3.2 UI/UX and Institutional Objectives
1. **Preserve CPU Branding:** Faithfully integrate official CPU and CCS crests, authentic institutional palettes (Navy `#002147`, Gold `#F5B800`, Neutral White `#FFFFFF`), and Christian academic mottos.
2. **Utilize Authentic Assets:** Directly incorporate supplied staff portraits, department insignia, and verified university records without substituting stock images or fabricating personnel credentials.
3. **Comprehensive Academic Presentation:** Build four standalone, in-depth academic program portals (BSIT, BSCS, BSDMIA, BLIS) equipped with CHED CMO 25 s.2015 objectives, 4-year curriculum tabs, and career outcomes.
4. **Enhanced Usability & Accessibility:** Provide intuitive desktop dropdowns, an accessible off-canvas mobile drawer, live directory filtering, and interactive client-side form validation.

---

## 4. ASSESSMENT OF THE EXISTING WEBSITE

An evaluation of the reference website (`https://ccs.cpu.edu.ph/`) was conducted to identify structural and usability bottlenecks:

### 4.1 Identified Deficiencies in the Reference Website
1. **Fragmented Navigation:** The existing site contains disjointed submenus that do not provide clear pathways to program curriculums or administrative offices.
2. **Superficial Academic Program Overviews:** Degree offerings were formerly presented with brief paragraphs lacking detailed course breakdowns, student outcomes, or career mappings.
3. **Static Faculty Directory:** Faculty listings lacked interactive search or categorized filtering by department, making it difficult for students to locate advisers or consultation hours.
4. **Mobile Usability Limitations:** On narrower smartphone viewports, desktop navigation elements overlap, table columns truncate, and image scaling distorts portraits.
5. **Lack of Interactive Client Feedback:** Inquiries lacked interactive client-side validation and clear confirmation notices.
6. **Inconsistent Visual Hierarchy:** Spacing, font sizing, and color contrast varied across subpages, diluting institutional prestige.

### 4.2 Modernization Strategy
* Architected a unified Design System using CSS custom properties (`--cpu-navy`, `--cpu-gold`).
* Transitioned the portal into a reactive Vue 3 SPA, eliminating jarring full-page browser reloads.
* Structured verified data files (`programs.js`, `faculty.js`, `news.js`, `faq.js`) to decouple content from UI presentation.
* Built full-fidelity 4-year curriculum tab panels for all four academic degree programs.

---

## 5. WEBSITE STRUCTURE AND NAVIGATION

### 5.1 Text Sitemap

```text
CPU College of Computer Studies Web Portal
│
├── / (Home Portal)
│   ├── Hero Section with Live Stats & Badges
│   ├── Dean's Welcome & Institutional Vision
│   ├── 4 Academic Program Cards Grid
│   ├── The Centralian Advantage (6 Core Pillars)
│   ├── Latest News & Events Preview
│   └── Admissions Call-to-Action
│
├── /about (About the College)
│   ├── Heritage & Historical Milestones (1905–Present)
│   ├── Vision, Mission & Scientia et Fides Philosophy
│   ├── 6 Specialized Computing Laboratories Showcase
│   ├── Recognized Student Organizations (CSS, MIDAS, LISSO)
│   └── Interactive FAQ Accordion
│
├── /programs/bsit (Bachelor of Science in Information Technology)
│   ├── Degree Header, PACUCOA Status & Insignia
│   ├── Program Overview & CHED CMO 25 Objectives
│   ├── 4 Specialized Technical Tracks
│   ├── 4-Year Curriculum Highlights (Interactive Year Tabs)
│   ├── 6 Career Opportunities & Pathways
│   ├── Verified Associated Faculty Grid
│   ├── Student Society Banner (CSS)
│   └── Interactive Prospectus Guide Modal
│
├── /programs/bscs (Bachelor of Science in Computer Science)
│   ├── Theoretical & Algorithmic Computing Overview
│   ├── Program Objectives & Mathematical Foundations
│   ├── 4 Specialized Computing Domains
│   ├── 4-Year Curriculum Highlights (Year 1 to Year 4)
│   ├── Career Opportunities in AI, Systems & Software
│   ├── Verified Associated Faculty Grid
│   ├── Competitive Programming & SEntralians Banner
│   └── Interactive Prospectus Guide Modal
│
├── /programs/bsdmia (Bachelor of Science in Digital Media & Interactive Arts)
│   ├── Digital Arts & Game Production Overview
│   ├── Program Objectives & Studio Standards
│   ├── 4 Creative Specialization Domains
│   ├── 4-Year Studio Curriculum Highlights
│   ├── Animation, VFX & Game Design Career Pathways
│   ├── Verified Associated Faculty Grid
│   ├── Creative Community Feature (MIDAS)
│   └── Interactive Prospectus Guide Modal
│
├── /programs/blis (Bachelor of Library and Information Science)
│   ├── Digital Informatics & Archiving Overview
│   ├── PRC Board Licensure for Librarians Alignment
│   ├── 4 Specialized Archival & Metadata Tracks
│   ├── 4-Year Curriculum Roadmap & Licensure Review
│   ├── Modern Knowledge Management Careers
│   ├── Verified Associated Faculty Grid
│   ├── Literacy & Service Guild (LISSO)
│   └── Interactive Prospectus Guide Modal
│
├── /faculty (Faculty & Staff Directory)
│   ├── 17 Verified Personnel Profiles
│   ├── Real-Time Keyword Search Bar
│   ├── Category Tabs (Leadership, IT, CS, Support Staff)
│   ├── Secondary Program Quick-Filter Pills
│   └── Official Verification & Sourcing Disclaimer
│
├── /news (News, Events & Announcements)
│   ├── Category Filter Pills (Events, Achievements, Community, Announcements)
│   ├── Real-Time Headline & Tag Search
│   ├── Detailed Article Modal Dialog
│   └── Journalistic Integrity Notice
│
├── /contact (Contact Dean's Office)
│   ├── Interactive Client-Side Validated Inquiry Form
│   ├── Character Counter & Instant Error Handling
│   ├── Academic Demonstration Notice
│   ├── Form Submission Confirmation Modal
│   ├── Dean's Office Directory, Phones & Emails
│   └── Campus Location Guide
│
└── /* (404 Page Not Found)
    ├── Branded Error Hero
    ├── Helpful Navigation Shortcuts
    └── Direct Return to Home Portal
```

---

## 6. WEBSITE PAGES, FEATURES, AND USER MANUAL

### 6.1 Home Portal (`/`)
* **Hero Banner:** Displays CPU and CCS logos, PACUCOA Level III accreditation badge, institutional statistics (4 Degree Programs, 17 Faculty/Staff, 100% OBE Curriculum), and dual action buttons.
* **Dean's Welcome Section:** Displays the official portrait of Dean Ma. Christina A. Quijano, MSCS (`/assets/faculty/dean-picture.png`), accompanied by her welcoming address and leadership philosophy.
* **Academic Program Grid:** Renders four `ProgramCard.vue` components detailing BSIT, BSCS, BSDMIA, and BLIS.
* **The Centralian Advantage:** Highlights specialized labs, PACUCOA accreditation, student societies, faith integration, hackathon champions, and 500+ hour internships.
* **Latest News Preview:** Displays three real-world news stories with an interactive reading modal.

### 6.2 About the College (`/about`)
* **Heritage Narrative:** Details CPU's founding in 1905 and the growth of computer studies in Western Visayas.
* **Vision & Mission Statements:** Exact official statements for both Central Philippine University and the College of Computer Studies.
* **Specialized Laboratories:** Cards for Apple Mac Lab, Cisco Networking Lab, VR Simulation Studio, Cloud Lab, Hardware Diagnostics Room, and Digital Library Hub.
* **Student Organizations:** Profiles for CSS, MIDAS, and LISSO with official insignias.
* **FAQ Accordion:** Interactive accordion addressing admissions, accreditation, facilities, scholarships, and licensure exams.

### 6.3 Academic Program Pages (`/programs/bsit`, `/programs/bscs`, `/programs/bsdmia`, `/programs/blis`)
* **Program Header:** Program emblem (`/assets/program-icons/...`), accreditation badge, degree duration, and quick facts.
* **Outcomes-Based Education (OBE):** CHED CMO 25 Series of 2015 educational objectives and student outcomes.
* **Curriculum Highlights:** Four interactive year tabs allowing users to explore major course titles for First Year, Second Year, Third Year, and Fourth Year.
* **Career Pathways:** Grid of career opportunity cards detailing job roles, industry sectors, and workplace descriptions.
* **Verified Faculty Roster:** Dynamically filtered `FacultyCard.vue` components displaying only the instructors associated with that specific degree.
* **Curriculum Prospectus Modal:** Interactive download simulation displaying credit units and course requirements with academic project disclosures.

### 6.4 Faculty and Staff Directory (`/faculty`)
* **Live Search:** Instant filtering across faculty names, academic credentials, departments, and specializations.
* **Category Filtering:** Tabs for "All", "Leadership & Administration", "Information Technology", "Computer Science", and "Support & Administrative Staff".
* **Program Tag Filtering:** Instant toggles for BSIT, BSCS, BSDMIA, and BLIS.
* **Authentic Portraits:** 17 authentic staff photos rendered with `object-fit: cover` and preserved aspect ratios.

### 6.5 News, Events & Announcements (`/news`)
* **Category Pills:** Filter by Events, Achievements, Community, or Announcements.
* **Authentic Stories:** Features the Startup Your World! Hackathon, Team SEntralians' International Hackathon victory with BricolAI, Project KULAY outreach, and PACUCOA Level III re-accreditation.
* **Full Article Modal:** Clicking any card opens a reading dialog with the complete text, author, date, and hashtags.

### 6.6 Contact Us (`/contact`)
* **Client-Side Form Validation:** Real-time checking of required fields, email format, minimum lengths, and dynamic error messages.
* **Form Submission Modal:** Validated inputs trigger a confirmation dialog detailing the submitted data and displaying an academic demonstration notice.
* **Contact Directory:** Dean's office phone lines, emails, office hours, and campus directions.

### 6.7 404 Page Not Found (`/:pathMatch(.*)*`)
* **Error Handler:** Catches all invalid URLs, providing helpful links to return users safely to active pages.

---

## 7. BEFORE-AND-AFTER WEBSITE COMPARISON

| Feature / Metric | Existing Website (`ccs.cpu.edu.ph`) | Redesigned Vue.js 3 Web Portal |
| :--- | :--- | :--- |
| **Architecture** | Traditional server-rendered / multi-page site | High-performance Single-Page Application (SPA) using Vue 3 & Vite |
| **Navigation & Menus** | Static text links; cumbersome mobile access | Sticky navbar, desktop dropdowns, accessible mobile off-canvas drawer |
| **Institutional Branding** | Inconsistent color usage; small logos | Unified CPU Navy (`#002147`) & Gold (`#F5B800`) with authentic university seals |
| **Academic Programs** | Short summary descriptions on one page | 4 standalone portals with 4-year curriculum tabs, tracks, and career mappings |
| **Faculty Presentation** | Simple text directory | Interactive directory with 17 verified photos, live search, and category filters |
| **News & Announcements** | Static list without category filtering | Filterable news board with modal article view and genuine hackathon milestones |
| **Inquiry & Feedback** | Static contact text | Fully validated client-side interactive form with confirmation modal dialog |
| **Mobile Responsiveness** | Limited; layout shift and desktop horizontal scroll | 100% responsive fluid grid down to 320px mobile screens |
| **Asset Integrity** | Unoptimized asset dimensions | Clean image proportions, `object-fit: cover`, zero distortion of university logos |

---

## 8. VUE.JS IMPLEMENTATION

### 8.1 Workspace Structure

```text
CPU College of Computer Studies/
├── docs/
│   └── project-report.md           # 12-Section Comprehensive Project Report
├── public/
│   ├── _redirects                  # Netlify SPA redirect rule
│   ├── assets/
│   │   ├── faculty/                # 17 Authentic Faculty & Staff Photographs
│   │   ├── logos/                  # CPU & CCS Official Logos
│   │   └── program-icons/          # Official Academic Program Insignia
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css            # Global CSS Design System & Theme Tokens
│   ├── components/
│   │   ├── AppFooter.vue           # 4-Column Footer with Accreditation Badges
│   │   ├── AppIcon.vue             # Lightweight Reusable SVG Icon Helper
│   │   ├── AppNavbar.vue           # Sticky Header with Programs Dropdown & Mobile Drawer
│   │   ├── BaseModal.vue           # Accessible Modal Component (ESC key, Teleport)
│   │   ├── Breadcrumb.vue          # Accessible Breadcrumb Navigation Trail
│   │   ├── FacultyCard.vue         # Verified Staff Portrait Card
│   │   ├── NewsCard.vue            # Filterable News Article Card
│   │   ├── ProgramCard.vue         # Academic Degree Showcase Card
│   │   └── SectionHeading.vue      # Standardized Heading with Badges & Accents
│   ├── data/
│   │   ├── faculty.js              # 17 Verified Faculty & Staff Records
│   │   ├── faq.js                  # Frequently Asked Questions Data
│   │   ├── news.js                 # Genuine CPU CCS News & Milestones Data
│   │   └── programs.js             # Detailed Curriculum & Career Data for 4 Degrees
│   ├── router/
│   │   └── index.js                # Vue Router 4 Configuration (10 Routes + SEO Titles)
│   ├── views/
│   │   ├── programs/
│   │   │   ├── BlisView.vue        # BS Library & Information Science View
│   │   │   ├── BsCsView.vue        # BS Computer Science View
│   │   │   ├── BsDmiaView.vue      # BS Digital Media & Interactive Arts View
│   │   │   └── BsItView.vue        # BS Information Technology View
│   │   ├── AboutView.vue           # About College, Labs & Heritage View
│   │   ├── ContactView.vue         # Contact Form & Directory View
│   │   ├── FacultyView.vue         # Interactive Faculty Directory View
│   │   ├── HomeView.vue            # Modernized Homepage Portal View
│   │   ├── NewsView.vue            # News, Events & Announcements View
│   │   └── NotFoundView.vue        # Custom 404 Error View
│   ├── App.vue                     # Root Application Component
│   └── main.js                     # Vue App Initialization & CSS Mounting
├── index.html                      # HTML5 Template with Outfit & Inter Fonts
├── package.json                    # Project Dependencies & Scripts
├── vercel.json                     # Vercel SPA Rewrites Configuration
└── vite.config.js                  # Vite Build Configuration & Path Aliases
```

### 8.2 Selected Code Snippets

#### 1. Vue Router 4 Configuration with Scroll Restoration & Dynamic Titles (`src/router/index.js`)

```javascript
import { createRouter, createWebHistory } from 'vue-router'
// Views are mapped to clear routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.afterEach((to) => {
  const baseTitle = 'CPU College of Computer Studies | Central Philippine University'
  document.title = to.meta.title ? `${to.meta.title}` : baseTitle
})
```

#### 2. Composition API Computed Filtering in Faculty Directory (`src/views/FacultyView.vue`)

```javascript
const filteredFaculty = computed(() => {
  return facultyData.filter(member => {
    const matchesCategory = selectedCategory.value === 'All' || member.category === selectedCategory.value
    const matchesProgram = selectedProgram.value === 'All' || (member.programs && member.programs.includes(selectedProgram.value))
    const q = searchQuery.value.trim().toLowerCase()
    const matchesSearch = !q || (
      member.name.toLowerCase().includes(q) ||
      member.title.toLowerCase().includes(q) ||
      member.degrees.toLowerCase().includes(q) ||
      member.bio.toLowerCase().includes(q) ||
      (member.specializations && member.specializations.some(s => s.toLowerCase().includes(q)))
    )
    return matchesCategory && matchesProgram && matchesSearch
  })
})
```

---

## 9. WEBSITE TESTING AND RESPONSIVENESS

### 9.1 Endpoint & Asset Verification Log

The Vite production preview server was executed on `http://localhost:4173` and tested with an automated script verifying all 10 application routes and 22 image assets:

```text
========================================================================================
Vite Preview Server Automated Test Execution Log
Target: http://localhost:4173
Date: October 16, 2026
========================================================================================
[PASS] /                                                  -> Status 200 (text/html)
[PASS] /about                                             -> Status 200 (text/html)
[PASS] /programs/bsit                                     -> Status 200 (text/html)
[PASS] /programs/bscs                                     -> Status 200 (text/html)
[PASS] /programs/bsdmia                                   -> Status 200 (text/html)
[PASS] /programs/blis                                     -> Status 200 (text/html)
[PASS] /faculty                                           -> Status 200 (text/html)
[PASS] /news                                              -> Status 200 (text/html)
[PASS] /contact                                           -> Status 200 (text/html)
[PASS] /assets/logos/cpu-logo.png                         -> Status 200 (image/png)
[PASS] /assets/logos/ccs-logo.png                         -> Status 200 (image/png)
[PASS] /assets/program-icons/information-technology.png   -> Status 200 (image/png)
[PASS] /assets/program-icons/computer-science.png          -> Status 200 (image/png)
[PASS] /assets/program-icons/midas.png                     -> Status 200 (image/png)
[PASS] /assets/program-icons/lisso.png                     -> Status 200 (image/png)
[PASS] /assets/faculty/dean-picture.png                   -> Status 200 (image/png)
[PASS] /assets/faculty/balontong.jpg                      -> Status 200 (image/jpeg)
[PASS] /assets/faculty/parreno.jpg                        -> Status 200 (image/jpeg)
[PASS] /assets/faculty/cantel.jpg                         -> Status 200 (image/jpeg)
[PASS] /assets/faculty/pajar.jpg                          -> Status 200 (image/jpeg)
[PASS] /assets/faculty/beldia.jpg                         -> Status 200 (image/jpeg)
[PASS] /assets/faculty/cambronero.jpg                     -> Status 200 (image/jpeg)
[PASS] /assets/faculty/dignadice.jpg                      -> Status 200 (image/jpeg)
[PASS] /assets/faculty/eregia.jpg                         -> Status 200 (image/jpeg)
[PASS] /assets/faculty/jardleza.jpg                       -> Status 200 (image/jpeg)
[PASS] /assets/faculty/montano.jpg                        -> Status 200 (image/jpeg)
[PASS] /assets/faculty/ojacastro.jpg                      -> Status 200 (image/jpeg)
[PASS] /assets/faculty/sapul.jpg                          -> Status 200 (image/jpeg)
[PASS] /assets/faculty/ador.jpg                           -> Status 200 (image/jpeg)
[PASS] /assets/faculty/castano.jpg                        -> Status 200 (image/jpeg)
[PASS] /assets/faculty/rivera.png                         -> Status 200 (image/png)
[PASS] /assets/faculty/taasan.jpg                         -> Status 200 (image/jpeg)
========================================================================================
Test Summary: Total Checked: 32 | Passed: 32 | Failed: 0 (100% Success)
========================================================================================
```

### 9.2 Responsive Design Breakpoint Testing
* **Desktop (1200px+):** Full horizontal navigation with hover/click dropdowns, 4-column program cards, 4-column faculty cards, and 4-column footer.
* **Tablet (768px – 1024px):** 2-column program cards, 2-column faculty cards, stacked hero visual cards, and fluid grid spacing.
* **Mobile (320px – 767px):** Mobile hamburger button triggers full-height off-canvas drawer with collapsible program accordions; cards collapse gracefully into single-column layouts with finger-friendly touch targets (min 44px).

### 9.3 Form Validation Testing Matrix

| Test Case | Input Provided | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Empty Full Name | Error message: "Full Name is required." | Error displayed; submit blocked | Passed |
| **TC-02** | Name < 3 characters | Error: "Name must be at least 3 characters." | Error displayed; submit blocked | Passed |
| **TC-03** | Invalid email (`test@`) | Error: "Please enter a valid email address." | Error displayed; submit blocked | Passed |
| **TC-04** | Empty Subject | Error: "Subject line is required." | Error displayed; submit blocked | Passed |
| **TC-05** | Message < 15 characters | Error: "Please provide a more detailed inquiry..." | Error displayed; submit blocked | Passed |
| **TC-06** | Valid inputs across all fields | Submission confirmation modal appears with preview | Modal triggered; inputs rendered | Passed |

---

## 10. CONCLUSION

The CPU College of Computer Studies website redesign project successfully translates academic requirements from CCS 3031 into an enterprise-quality, production-ready web application. By leveraging Vue.js 3 and Vite, the portal achieves sub-second page transitions, dynamic state filtering, and zero-compromise institutional branding.

The resulting portal honors Central Philippine University’s heritage of **Scientia et Fides**, prominently features authentic staff and program achievements, and equips prospective and current students with an accessible, informative digital gateway.

Future enhancements may integrate headless Content Management Systems (CMS) or backend REST APIs for automated student enrollment checks and online advising appointment scheduling.

---

## 11. REFERENCES

1. **Central Philippine University Official Website**  
   URL: `https://cpu.edu.ph/`
2. **CPU College of Computer Studies Reference Portal**  
   URL: `https://ccs.cpu.edu.ph/`
3. **Commission on Higher Education (CHED)**  
   *Memorandum Order No. 25, Series of 2015: Revised Policies, Standards, and Guidelines for Bachelor of Science in Computer Science (BSCS), Bachelor of Science in Information Systems (BSIS), and Bachelor of Science in Information Technology (BSIT) Programs.*
4. **Philippine Association of Colleges and Universities Commission on Accreditation (PACUCOA)**  
   *Accreditation Standards and Guidelines for Higher Education Computing Programs.*
5. **Vue.js 3 Official Documentation**  
   Evan You and the Vue Core Team. URL: `https://vuejs.org/`
6. **Vue Router 4 Documentation**  
   URL: `https://router.vuejs.org/`
7. **Vite Frontend Tooling Guide**  
   URL: `https://vite.dev/`

---

## 12. GROUP MEMBER CONTRIBUTIONS

```text
========================================================================================
Group Member Contributions Matrix
========================================================================================
Member Name:        [Insert Member Name 1 / Lead Developer]
Student ID:         [Insert Student ID 1]
Assigned Role:      Lead Frontend Engineer / Vue Architecture
Tasks Completed:    Vite configuration, Vue Router setup, AppNavbar, AppFooter,
                    State data modeling (faculty.js, programs.js), Build verification.
Contribution %:     [Insert % e.g., 50%]
----------------------------------------------------------------------------------------
Member Name:        [Insert Member Name 2 / UI-UX Designer]
Student ID:         [Insert Student ID 2]
Assigned Role:      UI/UX Designer & Content Researcher
Tasks Completed:    CPU Navy/Gold Design System (main.css), Program views (BSIT, BSCS,
                    BSDMIA, BLIS), Faculty directory filtering, Documentation report.
Contribution %:     [Insert % e.g., 50%]
========================================================================================
```

---
*End of Documentation Report.*
