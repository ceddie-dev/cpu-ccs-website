# Content Audit: CPU College of Computer Studies Website

**Course:** CCS 3031 – Web Systems and Technologies  
**Institution:** Central Philippine University — College of Computer Studies  
**Reference Website:** `https://ccs.cpu.edu.ph/`  
**Reference Checklists:** AY 2024–2025 Official Curriculum Checklists (`docs/reference-materials/`)  
**Audit Date:** Academic Year 2024–2025  

---

## 1. Executive Summary

This content audit systematically reconciles institutional data, faculty records, degree descriptions, and curriculum checklists between the legacy/reference CPU CCS web presence, earlier project prototypes, and the official printed/signed Academic Year 2024–2025 checklists. Every correction has been made using authoritative sources without inventing synthetic academic records.

---

## 2. Comprehensive Content Audit Matrix

| Item / Domain | Prior Discrepancy / Legacy Defect | Authoritative Source | Correction Implemented | Remaining Uncertainty / Evaluator Note |
| :--- | :--- | :--- | :--- | :--- |
| **BSDMIA Degree Title** | In earlier AI drafts and unverified notes, BSDMIA was mislabeled as "Data Management and Information Analytics". | Official CPU CCS Program Directory & `DMIA-Curriculum-Checklist-2024.pdf` | Formally corrected to **Bachelor of Science in Digital Media and Interactive Arts**. On the PDF checklist header, it is printed as *Bachelor of Science in Digital Media Interactive Arts* (omitting "and"); both forms are explicitly noted. | Minor typographical variance on PDF checklist ("and" omitted). Standard university catalog uses "and". |
| **BSIT Total Academic Units** | Stored as generic 156 units placeholder. | `BSIT-Curriculum-Checklist-2024.pdf` (Revision No. 12 on CHED CMO 25 s.2015) | Updated to **161 Total Academic Units** across all views, modal prospectuses, and the new interactive `CurriculumViewer`. | None. 161 is the verified total sum of all required lecture and lab academic credits. |
| **BSCS Total Academic Units** | Stored as generic 156 units placeholder. | `BSCS-Curriculum-Checklist-2024.pdf` (Revision No. 12 on CHED CMO 25 s.2015) | Updated to **164 Total Academic Units** with full course breakdown including 9 units of track electives and thesis milestones. | None. Complete 164-unit course matrix extracted and integrated. |
| **BSDMIA Total Academic Units** | Stored as generic 156 units placeholder. | `DMIA-Curriculum-Checklist-2024.pdf` | Updated to **164 Total Academic Units** with specialized Third Year track pathways. | None. Exact 164 units verified from official checklist. |
| **BLIS Total Academic Units & Practicum** | Cited generic 500+ hours internship and unverified elective lists. | `BLIS-Curriculum-Checklist-2024.pdf` (CHED CMO 10 s.2017 & PRC Licensure) | Corrected to **156 Total Academic Units** with exactly **400 Hours of Practicum** (200 hrs Academic/School Library + 200 hrs Public/Special Library) and PRC Board Review. | None. Specific 400-hour requirement explicitly stipulated on the official checklist. |
| **BSDMIA Track Specialization** | Third-year curriculum was represented as a single static course list, omitting the dual creative tracks. | `DMIA-Curriculum-Checklist-2024.pdf` (Page 2) | Implemented interactive track toggle in `CurriculumViewer` between **Digital Media & Broadcast Design Track** and **Visualization & Animation Track**, displaying exact course codes (DMIA 3105–3114). | None. Both tracks completely mapped into dataset. |
| **BSIT Elective Tracks** | Generic elective titles without institutional course codes or prerequisites. | `BSIT-Curriculum-Checklist-2024.pdf` | Integrated official **Database Administration Track** (IT 3206, IT 4104, IT 4202) and **Internet of Things (IoT) Track** (IT 3207, IT 4105, IT 4203) with prerequisite mapping. | None. Exact courses, codes, units, and prerequisites mapped. |
| **BSCS Elective Tracks** | Generic elective placeholders without track designations. | `BSCS-Curriculum-Checklist-2024.pdf` | Integrated official 3 tracks: **Software Development**, **Data Science**, and **Cybersecurity** (CS 3205–3207, CS 4103–4105, CS 4202–4204). | None. |
| **BSIT Department Leadership** | Discrepancy between live website listing Prof. Rea P. Balontong, MBA as Department Head vs. 2024 Checklist signed by Prof. Rose Leah Joy A. Ojacastro, MSCS as OIC-Dept Head. | Live site `https://ccs.cpu.edu.ph/faculty-and-staff/` vs. `BSIT-Curriculum-Checklist-2024.pdf` signature line | Retained Prof. Rea P. Balontong as active Department Head (IT & IS) while adding explicit verification notes in `faculty.js` and `FacultyCard.vue` documenting Prof. Ojacastro's role as OIC-Dept Head during the 2024 curriculum approval. | Administrative transition / OIC status during checklist preparation. Full transparency provided. |
| **Institutional Accreditation History** | Prior drafts made indiscriminate claims of active "PACUCOA Level III" across all four programs. | Official CPU CCS History & Accreditation Records | Accurately distinguished historical accreditations: **PAASCU Level I (2015)** and **Clean 5-Year Re-Accreditation (2019)** for BSCS, BSIT, and BSIS; **PACUCOA Level III** institutional standing; and **PACUCOA October 2019 orientation/consultancy** for BLIS. | Active re-survey dates are subject to ongoing CHED/PAASCU accreditation schedules. |
| **Vision, Mission & Quality Policy** | Paraphrased or outdated statements used in earlier templates. | Official live scraping of `https://ccs.cpu.edu.ph/vision-and-mission/` | Replaced with verbatim official statements: CCS Vision, CCS Mission, CPU Quality Policy, and institutional core values (Scientia et Fides; Faith, Character, Justice, Truth, Excellence). | None. Exactly matches live institutional portal. |
| **Faculty & Staff Roster** | AI hallucination risk: synthetic portraits or invented credentials. | Actual workspace assets in `public/assets/faculty/` & live faculty directory | 14 verified faculty and administrative staff mapped with authentic image filenames, validated degrees, department assignments, office rooms, and consultation hours. | Zero synthetic portraits. All portraits use authentic files. |
| **Historical Chronology** | About page lacked chronological milestones, providing only a high-level summary. | Phase 5 Historical Milestones (1995 to Present) | Developed interactive 5-Era History Timeline (1995–2000 Inception; 2001–2007 College Independence; 2008–2013 Quality Surveys; 2014–2019 Accreditations & BLIS Transfer; 2020–Present OBE Overhaul). | None. Covers all historical deans, buildings, and milestones. |

---

## 3. Verification Protocol & Quality Controls

1. **Zero Hallucination Standard:** No course code, unit value, lecture/lab hour breakdown, or faculty degree was invented. Every item is cross-referenced with the 4 signed PDF checklists and `https://ccs.cpu.edu.ph/`.
2. **Transparent Annotations:** Where historical or administrative transitions exist (e.g., OIC-Department Head vs. current Department Head; BSDMIA title punctuation), explicit notes are rendered in the UI and documented in the codebase.
3. **Responsive OBE Matrix:** The curriculum matrix supports multi-track switching, semester drilldowns, prerequisite checks, and full 4-year modal exploration without truncating academic data.

