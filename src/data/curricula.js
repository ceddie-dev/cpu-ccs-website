// ==========================================================================
// Central Philippine University - College of Computer Studies (CCS)
// Complete Academic Curricula Dataset (Extracted from Official Checklists)
// Effective Academic Year 2024-2025
// Primary Reference Files:
//   - BSIT-Curriculum-Checklist-2024.pdf (161 Units)
//   - BSCS-Curriculum-Checklist-2024.pdf (164 Units)
//   - DMIA-Curriculum-Checklist-2024.pdf (164 Units)
//   - BLIS-Curriculum-Checklist-2024.pdf (156 Units)
// ==========================================================================

export const curriculaData = {
  bsit: {
    code: 'BSIT',
    title: 'Bachelor of Science in Information Technology',
    sourceFile: 'BSIT-Curriculum-Checklist-2024.pdf',
    effectivePeriod: 'Effective: Academic Year 2024-2025',
    basis: 'Based from revision no. 12 on CHED Memo Order No. 25 s. 2015',
    totalUnits: 161,
    preparedBy: 'Rose Leah Joy A. Ojacastro, MSCS (OIC-Department Head, BSIT)',
    recommendingApproval: 'Ma. Christina A. Quijano, MSCS (Dean)',
    years: [
      {
        yearLevel: 'First Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 27,
            courses: [
              { code: 'CCS 1001', title: 'Introduction to Computing', lec: 2, lab: 3, units: 3, prereq: '' },
              { code: 'CCS 1400', title: 'Fundamentals of Programming', lec: 2, lab: 3, units: 3, prereq: '' },
              { code: 'GEMath 1', title: 'Mathematics in the Modern World', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 5', title: 'Ethics', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 2', title: 'Readings in Philippine History', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'CETech 1', title: 'Living in the IT Era', lec: 3, lab: 0, units: 3, prereq: '', labFee: true },
              { code: 'SEAL 1', title: 'Student Enhancement Activities for Life I', lec: 1, lab: 0, units: 1, prereq: '' },
              { code: 'RE 1', title: 'Christianity in a Changing Society', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit1 W/M', title: 'Physical Activity Toward Health and Fitness (PATHFit) - Movement Competency Training', lec: 2, lab: 0, units: 2, prereq: '', isNonAcademic: true },
              { code: 'NSTP 1', title: 'Civic Welfare Training Service / LTS / ROTC', lec: 3, lab: 0, units: 3, prereq: '', isNonAcademic: true }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 27,
            courses: [
              { code: 'CCS 1500', title: 'Intermediate Programming', lec: 2, lab: 3, units: 3, prereq: 'CCS 1001, CCS 1400' },
              { code: 'CCS 1301', title: 'Data Structures and Algorithms', lec: 2, lab: 3, units: 3, prereq: 'CCS 1400' },
              { code: 'GEEng 1', title: 'Purposive Communication', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 4', title: 'The Contemporary World', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 1', title: 'Understanding the Self', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'CESocSci 4', title: 'The Entrepreneurial Mind', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'SEAL 2', title: 'Student Enhancement Activities for Life II', lec: 1, lab: 0, units: 1, prereq: '' },
              { code: 'RE 2', title: 'Christian Ethics in a Changing World', lec: 3, lab: 0, units: 3, prereq: 'RE 1' },
              { code: 'PATHFit2 W/M', title: 'PATHFit - Exercise Based Fitness Activities', lec: 2, lab: 0, units: 2, prereq: 'PATHFit1 W/M', isNonAcademic: true },
              { code: 'NSTP 2', title: 'Civic Welfare Training Service / LTS / ROTC', lec: 3, lab: 0, units: 3, prereq: 'NSTP 1', isNonAcademic: true }
            ]
          }
        ]
      },
      {
        yearLevel: 'Second Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 21,
            courses: [
              { code: 'CCS 2100', title: 'Fundamentals of Database Design', lec: 2, lab: 3, units: 3, prereq: 'CCS 1301, CCS 1500' },
              { code: 'CCS 2200', title: 'Basic Electrical and Electronic Concepts', lec: 2, lab: 3, units: 3, prereq: 'Passed all 1st Yr. IT Subjects' },
              { code: 'CCS 2110', title: 'Application Development and Emerging Technologies', lec: 3, lab: 0, units: 3, prereq: 'CCS 1500' },
              { code: 'CCS 2800', title: 'Mobile Application Development I', lec: 0, lab: 3, units: 1, prereq: 'CCS 1500', labFee: true },
              { code: 'Math 2109', title: 'Discrete Mathematics', lec: 3, lab: 0, units: 3, prereq: 'GEMath 1' },
              { code: 'IT 2110', title: 'Platform Technologies', lec: 3, lab: 0, units: 3, prereq: 'CCS 1500', labFee: true },
              { code: 'GEHum 1', title: 'Art Appreciation', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit3 W/M', title: 'PATHFit - Dance and Swimming', lec: 2, lab: 0, units: 2, prereq: 'PATHFit1 W/M, PATHFit2 W/M', isNonAcademic: true }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 24,
            courses: [
              { code: 'CCS 2300', title: 'Logic Design', lec: 2, lab: 3, units: 3, prereq: 'CCS 2200' },
              { code: 'CCS 2401', title: 'Network Engineering I: Introduction to Networks', lec: 2, lab: 3, units: 3, prereq: 'CCS 2200' },
              { code: 'CCS 2501', title: 'Systems Analysis and Design', lec: 3, lab: 0, units: 3, prereq: 'CCS 2100', labFee: true },
              { code: 'CCS 2601', title: 'Programming with Databases', lec: 3, lab: 0, units: 3, prereq: 'CCS 2100', labFee: true },
              { code: 'IT 3110', title: 'Computer Hardware Repair and Maintenance', lec: 2, lab: 3, units: 3, prereq: 'CCS 2200 (Co-req: CCS 2401)' },
              { code: 'CCS 3800', title: 'Mobile Application Development II', lec: 0, lab: 3, units: 1, prereq: 'CCS 2800', labFee: true },
              { code: 'ITPE 1', title: 'IT Professional Elective 1', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. 1st Sem. IT Subjects', labFee: true },
              { code: 'CEArts 3', title: 'Reading Visual Art', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit4 W/M', title: 'PATHFit - Volleyball and Basketball', lec: 2, lab: 0, units: 2, prereq: 'PATHFit1 W/M, PATHFit2 W/M', isNonAcademic: true }
            ]
          }
        ]
      },
      {
        yearLevel: 'Third Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 23,
            courses: [
              { code: 'CCS 3100', title: 'Methods of Research in IT', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. 2nd Sem. IT Subjects' },
              { code: 'CCS 3010', title: 'Fundamentals of Human Computer Interaction', lec: 0, lab: 3, units: 1, prereq: 'CCS 2501' },
              { code: 'CCS 3020', title: 'Information Assurance and Security I', lec: 3, lab: 0, units: 3, prereq: 'CCS 2401' },
              { code: 'CCS 3030', title: 'Web Systems and Technologies', lec: 0, lab: 3, units: 1, prereq: 'CCS 2110, CCS 2601' },
              { code: 'IT 3121', title: 'Network Engineering II: Switching, Routing, and Wireless Essentials', lec: 2, lab: 3, units: 3, prereq: 'CCS 2401' },
              { code: 'ITPE 2', title: 'IT Professional Elective 2', lec: 3, lab: 0, units: 3, prereq: 'ITPE 1', labFee: true },
              { code: 'IT 3131', title: 'System Administration and Maintenance', lec: 2, lab: 3, units: 3, prereq: 'CCS 2401' },
              { code: 'GESocSci 3', title: 'Life and Works of Rizal', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 6', title: 'Science, Technology and Society', lec: 3, lab: 0, units: 3, prereq: '' }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 18,
            courses: [
              { code: 'CCS 2700', title: 'Web Management and Deployment', lec: 2, lab: 3, units: 3, prereq: 'CCS 3030' },
              { code: 'CCS 3040', title: 'Information Assurance and Security II', lec: 3, lab: 0, units: 3, prereq: 'CCS 3020', labFee: true },
              { code: 'IT 3220', title: 'System Integration and Architecture', lec: 3, lab: 0, units: 3, prereq: 'IT 3131, CCS 3030', labFee: true },
              { code: 'CSS 3600', title: 'CCS Thesis I', lec: 2, lab: 3, units: 3, prereq: 'Passed all 3rd Yr. 1st Sem. IT Subjects' },
              { code: 'IT 3211', title: 'Network Engineering III: Enterprise Networking, Security, and Automation', lec: 2, lab: 3, units: 3, prereq: 'IT 3121' },
              { code: 'ITPE 3', title: 'IT Professional Elective 3', lec: 3, lab: 0, units: 3, prereq: 'ITPE 2', labFee: true }
            ]
          }
        ]
      },
      {
        yearLevel: 'Summer Year',
        semesters: [
          {
            semester: 'Summer Term',
            subTotalUnits: 3,
            courses: [
              { code: 'CCS 4001', title: 'Seminars', lec: 3, lab: 0, units: 3, prereq: 'Passed all 3rd Yr. IT Subjects' }
            ]
          }
        ]
      },
      {
        yearLevel: 'Fourth Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 12,
            courses: [
              { code: 'CCS 4100', title: 'CCS Thesis II', lec: 2, lab: 3, units: 3, prereq: 'CCS 3600' },
              { code: 'CCS 4300', title: 'Social Issues and Professional Practices', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'ITPE 4', title: 'IT Professional Elective 4', lec: 3, lab: 0, units: 3, prereq: 'ITPE 3', labFee: true },
              { code: 'IT 4120', title: 'Advanced Database Systems', lec: 3, lab: 0, units: 3, prereq: 'CCS 2601' }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 6,
            courses: [
              { code: 'CCS 4201', title: 'On-the-Job Training (600 hours)', lec: 6, lab: 0, units: 6, prereq: 'Passed ALL Subjects' }
            ]
          }
        ]
      }
    ],
    electives: [
      {
        trackName: 'Database Administration (DBA)',
        requiredUnits: 12,
        courses: [
          { code: 'CCSPE 1100', title: 'DBA 1: Advanced PL/SQL', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. 1st Sem. IT Subjects', labFee: true },
          { code: 'CCSPE 1200', title: 'DBA 2: Performance Tuning', lec: 3, lab: 0, units: 3, prereq: 'CCSPE 1100', labFee: true },
          { code: 'CCSPE 1300', title: 'DBA 3: Implement and Administer a Data Warehouse', lec: 3, lab: 0, units: 3, prereq: 'CCSPE 1200', labFee: true },
          { code: 'CCSPE 1400', title: 'DBA 4: Database Security', lec: 3, lab: 0, units: 3, prereq: 'CCSPE 1300', labFee: true }
        ]
      },
      {
        trackName: 'Internet of Things (IoT)',
        requiredUnits: 12,
        courses: [
          { code: 'ITPE 1100', title: 'IoT 1: Introduction to IoT', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. 1st Sem. IT Subjects', labFee: true },
          { code: 'ITPE 1200', title: 'IoT 2: Big Data & Analytics', lec: 3, lab: 0, units: 3, prereq: 'ITPE 1100', labFee: true },
          { code: 'ITPE 1300', title: 'IoT 3: Connecting Things', lec: 3, lab: 0, units: 3, prereq: 'ITPE 1200', labFee: true },
          { code: 'ITPE 1400', title: 'IoT 4: IoT Security', lec: 3, lab: 0, units: 3, prereq: 'ITPE 1300', labFee: true }
        ]
      }
    ]
  },

  bscs: {
    code: 'BSCS',
    title: 'Bachelor of Science in Computer Science',
    sourceFile: 'BSCS-Curriculum-Checklist-2024.pdf',
    effectivePeriod: 'Effective: Academic Year 2024-2025',
    basis: 'Based on CHED Memo Order No. 25 s. 2015',
    totalUnits: 164,
    preparedBy: 'Marjee Rose P. Parreño, MSCS (Program Coordinator, BSCS and BSDMIA)',
    recommendingApproval: 'Ma. Christina A. Quijano, MSCS (Dean)',
    years: [
      {
        yearLevel: 'First Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 27,
            courses: [
              { code: 'CCS 1001', title: 'Introduction to Computing', lec: 2, lab: 3, units: 3, prereq: '' },
              { code: 'CCS 1400', title: 'Fundamentals of Programming', lec: 2, lab: 3, units: 3, prereq: '' },
              { code: 'GEMath 1', title: 'Mathematics in the Modern World', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 5', title: 'Ethics', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'CETech 1', title: 'Living in the IT Era', lec: 3, lab: 0, units: 3, prereq: '', labFee: true },
              { code: 'GESocSci 2', title: 'Readings in Philippine History', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'SEAL 1', title: 'Student Enhancement Activities for Life I', lec: 1, lab: 0, units: 1, prereq: '' },
              { code: 'RE 1', title: 'Christianity in a Changing Society', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit1 W/M', title: 'PATHFit - Movement Competency Training', lec: 2, lab: 0, units: 2, prereq: '', isNonAcademic: true },
              { code: 'NSTP 1', title: 'Civic Welfare Training Service / LTS / ROTC', lec: 3, lab: 0, units: 3, prereq: '', isNonAcademic: true }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 27,
            courses: [
              { code: 'CCS 1500', title: 'Intermediate Programming', lec: 2, lab: 3, units: 3, prereq: 'CCS 1001, CCS 1400' },
              { code: 'CCS 1301', title: 'Data Structures and Algorithms', lec: 2, lab: 3, units: 3, prereq: 'CCS 1400' },
              { code: 'GESocSci 4', title: 'The Contemporary World', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'SEAL 2', title: 'Student Enhancement Activities for Life II', lec: 1, lab: 0, units: 1, prereq: '' },
              { code: 'GEEng 1', title: 'Purposive Communication', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 1', title: 'Understanding the Self', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'CESocSci 4', title: 'The Entrepreneurial Mind', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'RE 2', title: 'Christian Ethics in a Changing World', lec: 3, lab: 0, units: 3, prereq: 'RE 1' },
              { code: 'PATHFit2 W/M', title: 'PATHFit - Exercise Based Fitness Activities', lec: 2, lab: 0, units: 2, prereq: 'PATHFit1 W/M', isNonAcademic: true },
              { code: 'NSTP 2', title: 'Civic Welfare Training Service / LTS / ROTC', lec: 3, lab: 0, units: 3, prereq: 'NSTP 1', isNonAcademic: true }
            ]
          }
        ]
      },
      {
        yearLevel: 'Second Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 24,
            courses: [
              { code: 'CCS 2100', title: 'Fundamentals of Database Design', lec: 2, lab: 3, units: 3, prereq: 'CCS 1301, CCS 1500' },
              { code: 'CS 2111', title: 'Structure of Programming Languages', lec: 3, lab: 0, units: 3, prereq: 'CCS 1301, CCS 1500' },
              { code: 'CCS 2110', title: 'Application Development and Emerging Technologies', lec: 3, lab: 0, units: 3, prereq: 'CCS 1500', labFee: true },
              { code: 'CCS 2200', title: 'Basic Electrical and Electronic Concepts', lec: 2, lab: 3, units: 3, prereq: 'Passed all 1st Yr. CS Subjects' },
              { code: 'Math 2110', title: 'Calculus', lec: 3, lab: 0, units: 3, prereq: 'GEMath 1' },
              { code: 'CS 2120', title: 'Discrete Structures I', lec: 3, lab: 0, units: 3, prereq: 'GEMath 1' },
              { code: 'CCS 2801', title: 'Mobile Application Development I', lec: 0, lab: 3, units: 1, prereq: 'CCS 1500', labFee: true },
              { code: 'GEHum 1', title: 'Art Appreciation', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit3 W/M', title: 'PATHFit - Dance and Swimming', lec: 2, lab: 0, units: 2, prereq: 'PATHFit2 W/M', isNonAcademic: true }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 24,
            courses: [
              { code: 'CCS 2300', title: 'Logic Design', lec: 2, lab: 3, units: 3, prereq: 'CCS 2200' },
              { code: 'CCS 2401', title: 'Network Engineering I: Introduction to Networks', lec: 2, lab: 3, units: 3, prereq: 'CCS 2200' },
              { code: 'CCS 2501', title: 'System Analysis and Design', lec: 3, lab: 0, units: 3, prereq: 'CCS 2100', labFee: true },
              { code: 'CCS 2601', title: 'Programming with Databases', lec: 3, lab: 0, units: 3, prereq: 'CCS 2100', labFee: true },
              { code: 'IT 3110', title: 'Computer Hardware Repair and Maintenance', lec: 2, lab: 3, units: 3, prereq: 'CCS 2200, (CCS 2401)' },
              { code: 'CS 2210', title: 'Discrete Structures II', lec: 3, lab: 0, units: 3, prereq: 'CS 2120' },
              { code: 'CCS 3801', title: 'Mobile Application Development II', lec: 0, lab: 3, units: 1, prereq: 'CCS 2801', labFee: true },
              { code: 'CEArts 3', title: 'Reading Visual Art', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit4 W/M', title: 'PATHFit - Volleyball and Basketball', lec: 2, lab: 0, units: 2, prereq: 'PATHFit3 W/M', isNonAcademic: true }
            ]
          }
        ]
      },
      {
        yearLevel: 'Third Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 23,
            courses: [
              { code: 'CCS 3002', title: 'Computer Organization & Assembly Language', lec: 0, lab: 3, units: 1, prereq: 'CCS 2300', labFee: true },
              { code: 'CCS 3010', title: 'Fundamentals of Human Computer Interaction', lec: 3, lab: 0, units: 3, prereq: 'CCS 2501', labFee: true },
              { code: 'CCS 3020', title: 'Information Assurance and Security I', lec: 3, lab: 0, units: 3, prereq: 'CCS 2401' },
              { code: 'CCS 3031', title: 'Web Systems and Technologies', lec: 0, lab: 3, units: 1, prereq: 'CCS 2601, CCS 2110' },
              { code: 'CCS 3100', title: 'Methods of Research in IT', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. 2nd Sem. CS Subjects' },
              { code: 'CSPE 1', title: 'Professional Elective 1', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. CS Subjects', labFee: true },
              { code: 'CS 3120', title: 'Algorithms and Complexities', lec: 3, lab: 0, units: 3, prereq: 'CS 2111', labFee: true },
              { code: 'GESocSci 3', title: 'Life and Works of Rizal', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 6', title: 'Science, Technology and Society', lec: 3, lab: 0, units: 3, prereq: '' }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 18,
            courses: [
              { code: 'CCS 3300', title: 'Software Engineering', lec: 3, lab: 0, units: 3, prereq: 'CCS 3100', labFee: true },
              { code: 'CCS 3501', title: 'Operating Systems', lec: 3, lab: 0, units: 3, prereq: 'CCS 3001', labFee: true },
              { code: 'CCS 3600', title: 'CCS Thesis I', lec: 2, lab: 3, units: 3, prereq: 'Passed all 3rd Yr. 1st Sem. CS Subjects' },
              { code: 'CS 3110', title: 'Automata Theory & Computability', lec: 3, lab: 0, units: 3, prereq: 'CS 2111' },
              { code: 'CS 3210', title: 'Computer Graphics and Visual Computing', lec: 2, lab: 3, units: 3, prereq: 'CCS 3010' },
              { code: 'CSPE 2', title: 'Professional Elective 2', lec: 3, lab: 0, units: 3, prereq: 'CSPE 1', labFee: true }
            ]
          }
        ]
      },
      {
        yearLevel: 'Summer Year',
        semesters: [
          {
            semester: 'Summer Term',
            subTotalUnits: 3,
            courses: [
              { code: 'CCS 4001', title: 'Seminars', lec: 3, lab: 0, units: 3, prereq: 'Passed all 3rd Yr. CS Subjects' }
            ]
          }
        ]
      },
      {
        yearLevel: 'Fourth Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 12,
            courses: [
              { code: 'CCS 4100', title: 'CCS Thesis II', lec: 2, lab: 3, units: 3, prereq: 'CCS 3600' },
              { code: 'CS 4110', title: 'Artificial Intelligence', lec: 2, lab: 3, units: 3, prereq: 'CS 3110' },
              { code: 'CCS 4300', title: 'Social Issues and Professional Practices', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'CSPE 3', title: 'Professional Elective 3', lec: 3, lab: 0, units: 3, prereq: 'CSPE 2', labFee: true }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 6,
            courses: [
              { code: 'CCS 4201', title: 'On-the-Job Training (600 hours)', lec: 6, lab: 0, units: 6, prereq: 'Passed ALL Subjects' }
            ]
          }
        ]
      }
    ],
    electives: [
      {
        trackName: 'Software Development',
        requiredUnits: 9,
        courses: [
          { code: 'CSPE 4100', title: 'Software Development 1', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. 2nd Sem. CS Subjects', labFee: true },
          { code: 'CSPE 4200', title: 'Software Development 2', lec: 3, lab: 0, units: 3, prereq: 'CCSPE 2101', labFee: true },
          { code: 'CSPE 4300', title: 'Software Development 3', lec: 3, lab: 0, units: 3, prereq: 'CCSPE 2300', labFee: true }
        ]
      },
      {
        trackName: 'Data Science',
        requiredUnits: 9,
        courses: [
          { code: 'CSPE 3101', title: 'Data Science 1: Introduction to Data Science and Statistics', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. 2nd Sem. CS Subjects', labFee: true },
          { code: 'CSPE 3300', title: 'Data Science 3: Data and Network Security', lec: 3, lab: 0, units: 3, prereq: 'CSPE 3101', labFee: true },
          { code: 'CSPE 3400', title: 'Data Science 4: Data Mining', lec: 3, lab: 0, units: 3, prereq: 'CSPE 3300', labFee: true }
        ]
      },
      {
        trackName: 'Cybersecurity',
        requiredUnits: 9,
        courses: [
          { code: 'CSPE 5100', title: 'Cybersecurity 1: Ethical Hacking', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. 2nd Sem. CS Subjects', labFee: true },
          { code: 'CSPE 5200', title: 'Cybersecurity 2: Ethics and Cyber Warfare', lec: 3, lab: 0, units: 3, prereq: 'CSPE 5100', labFee: true },
          { code: 'CSPE 5300', title: 'Cybersecurity 3: Digital Forensics and Cybercrime', lec: 3, lab: 0, units: 3, prereq: 'CSPE 5200', labFee: true }
        ]
      }
    ]
  },

  bsdmia: {
    code: 'BSDMIA',
    title: 'Bachelor of Science in Digital Media and Interactive Arts',
    pdfTitle: 'Bachelor of Science in Digital Media Interactive Arts',
    sourceFile: 'DMIA-Curriculum-Checklist-2024.pdf',
    effectivePeriod: 'Effective: Academic Year 24-2025',
    basis: 'Institutional & Industry Aligned Curriculum',
    totalUnits: 164,
    preparedBy: 'Marjee Rose P. Parreño, MSCS (Program Coordinator, BSCS and BSDMIA)',
    recommendingApproval: 'Ma. Christina A. Quijano, MSCS (Dean)',
    tracksOffered: ['Digital Media and Broadcast Design', 'Visualization and Animation'],
    years: [
      {
        yearLevel: 'First Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 23,
            courses: [
              { code: 'DMIA 1101', title: 'Elements and Principles of Art and Design', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'DMIA 1102a', title: 'Drawing and Illustration I: Fundamentals', lec: 0, lab: 6, units: 2, prereq: '' },
              { code: 'DMIA 1103a', title: 'Color Theory', lec: 2, lab: 3, units: 3, prereq: '' },
              { code: 'GEMath 1', title: 'Mathematics in the Modern World', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'CETech 1', title: 'Living in the IT Era', lec: 3, lab: 0, units: 3, prereq: '', labFee: true },
              { code: 'SEAL 1', title: 'Student Enhancement Activities for Life I', lec: 1, lab: 0, units: 1, prereq: '' },
              { code: 'RE 1', title: 'Christianity in a Changing Society', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit1 W/M', title: 'PATHFit - Movement Competency Training', lec: 2, lab: 0, units: 2, prereq: '', isNonAcademic: true },
              { code: 'NSTP 1', title: 'Civic Welfare Training Service / LTS / ROTC', lec: 3, lab: 0, units: 3, prereq: '', isNonAcademic: true }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 25,
            courses: [
              { code: 'DMIA 1201a', title: 'Drawing and Illustration II: Figures and Characters', lec: 0, lab: 6, units: 2, prereq: 'DMIA 1102a' },
              { code: 'DMIA 1202', title: 'Storyboarding', lec: 0, lab: 3, units: 1, prereq: 'DMIA 1102a (Co-req: DMIA 1201)' },
              { code: 'DMIA 1203', title: 'Typography', lec: 0, lab: 3, units: 1, prereq: 'DMIA 1101' },
              { code: 'GEHum 1', title: 'Art Appreciation', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GEEng 1', title: 'Purposive Communication', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'CESocSci 4', title: 'The Entrepreneurial Mind', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 2', title: 'Readings in Philippine History', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'SEAL 2', title: 'Student Enhancement Activities for Life II', lec: 1, lab: 0, units: 1, prereq: '' },
              { code: 'RE 2', title: 'Christian Ethics in a Changing World', lec: 3, lab: 0, units: 3, prereq: 'RE 1' },
              { code: 'PATHFit2 W/M', title: 'PATHFit - Exercise Based Fitness Activities', lec: 2, lab: 0, units: 2, prereq: '', isNonAcademic: true },
              { code: 'NSTP 2', title: 'Civic Welfare Training Service / LTS / ROTC', lec: 3, lab: 0, units: 3, prereq: 'NSTP 1', isNonAcademic: true }
            ]
          }
        ]
      },
      {
        yearLevel: 'Second Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 22,
            courses: [
              { code: 'DMIA 2102', title: 'Essentials of 2D and 3D Design', lec: 2, lab: 3, units: 3, prereq: 'DMIA 1201a' },
              { code: 'DMIA 2103', title: 'Design and Digital Imaging', lec: 0, lab: 3, units: 1, prereq: 'DMIA 1201a' },
              { code: 'DMIA 2104', title: 'Digital Photography', lec: 2, lab: 3, units: 3, prereq: '' },
              { code: 'DMIA 2205a', title: 'Media and Social Psychology', lec: 0, lab: 3, units: 1, prereq: '' },
              { code: 'GESocSci 3', title: 'Life and Works of Rizal', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 5', title: 'Ethics', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 6', title: 'Science, Technology and Society', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 4', title: 'The Contemporary World', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit3 W/M', title: 'PATHFit - Dance and Swimming', lec: 2, lab: 0, units: 2, prereq: 'PATHFit2 W/M', isNonAcademic: true }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 20,
            courses: [
              { code: 'DMIA 2201', title: '3D Modelling and Rendering', lec: 2, lab: 3, units: 3, prereq: 'DMIA 2102' },
              { code: 'DMIA 2202', title: 'Branding and Identity', lec: 0, lab: 3, units: 1, prereq: '' },
              { code: 'DMIA 2203', title: 'Digital Cinematography', lec: 2, lab: 3, units: 3, prereq: 'DMIA 2104' },
              { code: 'DMIA 2204', title: 'Digital Information and Infographics', lec: 0, lab: 3, units: 1, prereq: 'DMIA 2103' },
              { code: 'DMIA 2207', title: 'Interaction Design', lec: 2, lab: 3, units: 3, prereq: 'DMIA 2103' },
              { code: 'DMIA 2208a', title: 'Digital and Social Media Marketing', lec: 0, lab: 3, units: 1, prereq: '(Co-req: DMIA 2202)' },
              { code: 'GESocSci 1', title: 'Understanding the Self', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'CEArts 3', title: 'Reading Visual Art', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit4 W/M', title: 'PATHFit - Volleyball and Basketball', lec: 2, lab: 0, units: 2, prereq: 'PATHFit3 W/M', isNonAcademic: true }
            ]
          }
        ]
      },
      {
        yearLevel: 'Third Year',
        hasTracks: true,
        tracks: {
          'Digital Media and Broadcast Design': [
            {
              semester: 'First Semester',
              subTotalUnits: 21,
              courses: [
                { code: 'DMIA 3100', title: 'Methods of Research', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. DMIA Subjects' },
                { code: 'DMIA 3110', title: 'Interactive Digital Storytelling', lec: 0, lab: 3, units: 1, prereq: 'Passed all 2nd Yr. DMIA Subjects' },
                { code: 'DMIA 3130', title: 'Motion Typography', lec: 0, lab: 3, units: 1, prereq: 'Passed all 2nd Yr. DMIA Subjects' },
                { code: 'DMIA 3140', title: '2D Animation', lec: 2, lab: 3, units: 3, prereq: 'Passed all 2nd Yr. DMIA Subjects' },
                { code: 'DMBD 3101', title: 'Motion and Broadcast Design Principles', lec: 0, lab: 3, units: 1, prereq: '' },
                { code: 'DMBD 3105', title: 'Studio and Set Design', lec: 2, lab: 3, units: 3, prereq: '' },
                { code: 'DMIA 3210a', title: 'Electronic Music and Sound Digitization', lec: 2, lab: 3, units: 3, prereq: '' },
                { code: 'DMIA 3150', title: 'Professional Finishing and Post Production', lec: 2, lab: 3, units: 3, prereq: 'DMIA 2203' },
                { code: 'DMIAFE 1', title: 'Digital Media Free Elective 1', lec: 2, lab: 3, units: 3, prereq: 'Passed all 2nd Sem 2nd Yr. DMIA Subjects' }
              ]
            },
            {
              semester: 'Second Semester',
              subTotalUnits: 18,
              courses: [
                { code: 'DMIA 3200', title: 'Portfolio Development I', lec: 2, lab: 3, units: 3, prereq: 'DMIA 3100' },
                { code: 'DMIA 3211', title: 'Print and Broadcast Design', lec: 0, lab: 3, units: 1, prereq: 'DMIA 2204' },
                { code: 'DMIA 3220a', title: 'Rich and Responsive Web Applications', lec: 0, lab: 3, units: 1, prereq: 'DMIA 2207' },
                { code: 'DMIA 3240', title: 'Social and Mobile Media Interaction Design', lec: 0, lab: 3, units: 1, prereq: '(Co-req: DMIA 3230)' },
                { code: 'DMIA 3250', title: '3D Animation', lec: 2, lab: 3, units: 3, prereq: 'DMIA 3140' },
                { code: 'DMBD 3202', title: 'Creative Motion and Broadcast Development', lec: 2, lab: 3, units: 3, prereq: 'DMBD 3101' },
                { code: 'DMBD 3204', title: 'Visual Effects Compositing and Rendering', lec: 2, lab: 3, units: 3, prereq: 'DMBD 3102, DMBD 3105' },
                { code: 'DMIAFE 2', title: 'Digital Media Free Elective 2', lec: 2, lab: 3, units: 3, prereq: 'Passed all 1st Sem 3rd Yr. DMIA Subjects' }
              ]
            }
          ],
          'Visualization and Animation': [
            {
              semester: 'First Semester',
              subTotalUnits: 21,
              courses: [
                { code: 'DMIA 3100', title: 'Methods of Research', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. DMIA Subjects' },
                { code: 'DMIA 3110', title: 'Interactive Digital Storytelling', lec: 0, lab: 3, units: 1, prereq: 'Passed all 2nd Yr. DMIA Subjects' },
                { code: 'DMIA 3130', title: 'Motion Typography', lec: 0, lab: 3, units: 1, prereq: 'Passed all 2nd Yr. DMIA Subjects' },
                { code: 'DMIA 3140', title: '2D Animation', lec: 2, lab: 3, units: 3, prereq: 'Passed all 2nd Yr. DMIA Subjects' },
                { code: 'DMVA 3204', title: 'Lighting and Photorealistic Rendering', lec: 0, lab: 3, units: 1, prereq: '' },
                { code: 'DMVA 3105a', title: 'Digital Matting and Visual Effects', lec: 2, lab: 3, units: 3, prereq: '' },
                { code: 'DMIA 3210a', title: 'Electronic Music and Sound Digitization', lec: 2, lab: 3, units: 3, prereq: '' },
                { code: 'DMIA 3150', title: 'Professional Finishing and Post Production', lec: 2, lab: 3, units: 3, prereq: 'DMIA 2203' },
                { code: 'DMIAFE 1', title: 'Digital Media Free Elective 1', lec: 2, lab: 3, units: 3, prereq: 'Passed all 2nd Sem 2nd Yr. DMIA Subjects' }
              ]
            },
            {
              semester: 'Second Semester',
              subTotalUnits: 18,
              courses: [
                { code: 'DMIA 3200', title: 'Portfolio Development I', lec: 2, lab: 3, units: 3, prereq: 'DMIA 3100' },
                { code: 'DMIA 3211', title: 'Print and Broadcast Design', lec: 0, lab: 3, units: 1, prereq: 'DMIA 2204' },
                { code: 'DMIA 3220a', title: 'Rich and Responsive Web Applications', lec: 0, lab: 3, units: 1, prereq: 'DMIA 2207' },
                { code: 'DMIA 3240', title: 'Social and Mobile Media Interaction Design', lec: 0, lab: 3, units: 1, prereq: '(Co-req: DMIA 3230)' },
                { code: 'DMIA 3250', title: '3D Animation', lec: 2, lab: 3, units: 3, prereq: 'DMIA 3140' },
                { code: 'DMVA 3104', title: 'Digital Motion Comics', lec: 2, lab: 3, units: 3, prereq: '' },
                { code: 'DMVA 3205', title: 'Character Animation', lec: 2, lab: 3, units: 3, prereq: '' },
                { code: 'DMIAFE 2', title: 'Digital Media Free Elective 2', lec: 2, lab: 3, units: 3, prereq: 'Passed all 1st Sem 3rd Yr. DMIA Subjects' }
              ]
            }
          ]
        }
      },
      {
        yearLevel: 'Summer Year',
        semesters: [
          {
            semester: 'Summer Term',
            subTotalUnits: 3,
            courses: [
              { code: 'CCS 4001', title: 'Seminars', lec: 3, lab: 0, units: 3, prereq: 'Passed all 3rd Yr. DMIA Subjects' }
            ]
          }
        ]
      },
      {
        yearLevel: 'Fourth Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 15,
            courses: [
              { code: 'DMIA 4102', title: 'Digital Media Law with Professional Ethics', lec: 3, lab: 0, units: 3, prereq: 'Passed all 3rd Yr. DMIA Subjects' },
              { code: 'DMIA 4103', title: 'Digital Arts Entrepreneurship', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'DMIAFE 3', title: 'Digital Media Free Elective 3', lec: 2, lab: 3, units: 3, prereq: '' },
              { code: 'DMIA 4100', title: 'Portfolio Development II', lec: 2, lab: 3, units: 3, prereq: 'DMIA 3200' },
              { code: 'DMIA 4110', title: 'Portfolio Preparation and Exhibit Design', lec: 2, lab: 3, units: 3, prereq: '4th Yr. standing' }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 6,
            courses: [
              { code: 'CCS 4201', title: 'On-the-Job Training (600 hours)', lec: 6, lab: 0, units: 6, prereq: 'Passed ALL subjects' }
            ]
          }
        ]
      }
    ],
    electives: [
      {
        trackName: 'Digital Media Electives (9 Units Required)',
        requiredUnits: 9,
        courses: [
          { code: 'DMIAFE 1100', title: 'Image Synthesis', lec: 2, lab: 3, units: 3, prereq: '' },
          { code: 'DMIAFE 1200', title: 'Motion Capture', lec: 2, lab: 3, units: 3, prereq: '' },
          { code: 'DMIAFE 1300', title: 'Digital Sculpting', lec: 2, lab: 3, units: 3, prereq: '' },
          { code: 'DMIAFE 1500', title: 'Advanced Cinematography', lec: 2, lab: 3, units: 3, prereq: '' },
          { code: 'CCS 1400', title: 'Fundamentals of Programming', lec: 2, lab: 3, units: 3, prereq: '' },
          { code: 'CCS 3030', title: 'Web System and Technologies', lec: 2, lab: 3, units: 3, prereq: '' }
        ]
      }
    ]
  },

  blis: {
    code: 'BLIS',
    title: 'Bachelor of Library and Information Science',
    sourceFile: 'BLIS-Curriculum-Checklist-2024.pdf',
    effectivePeriod: 'Revised Curriculum Effective AY 2024-2025',
    basis: 'Per CMO No. 24, Series of 2015',
    totalUnits: 156,
    preparedBy: 'Ana Mae B. Cantel, MLIS (Program Coordinator, BLIS)',
    recommendingApproval: 'Ma. Christina A. Quijano, MSCS (Dean)',
    years: [
      {
        yearLevel: 'First Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 27,
            courses: [
              { code: 'CCS 1001', title: 'Introduction to Computing', lec: 2, lab: 3, units: 3, prereq: '' },
              { code: 'CCS 1400', title: 'Fundamentals of Programming', lec: 2, lab: 3, units: 3, prereq: '' },
              { code: 'LIS 1101', title: 'Introduction to Library and Information Science', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 1', title: 'Understanding the Self', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'SpT 2103', title: 'Philosophies and Principles of Teaching', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'SEAL 1', title: 'Student Enhancement Activities for Life I', lec: 1, lab: 0, units: 1, prereq: '' },
              { code: 'CETech 1', title: 'Living in the IT Era', lec: 3, lab: 0, units: 3, prereq: '', labFee: true },
              { code: 'RE 1', title: 'Christianity in a Changing Society', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit1 W/M', title: 'PATHFit - Movement Competency Training', lec: 2, lab: 0, units: 2, prereq: '', isNonAcademic: true },
              { code: 'NSTP 1', title: 'Civic Welfare Training Service / LTS / ROTC', lec: 3, lab: 0, units: 3, prereq: '', isNonAcademic: true }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 27,
            courses: [
              { code: 'CCS 1500', title: 'Intermediate Programming', lec: 2, lab: 3, units: 3, prereq: 'CCS 1001, CCS 1400' },
              { code: 'CCS 1301', title: 'Data Structures and Algorithms', lec: 2, lab: 3, units: 3, prereq: 'CCS 1400' },
              { code: 'LIS 1202', title: 'Collection Management of Information Resources', lec: 3, lab: 0, units: 3, prereq: 'None' },
              { code: 'ICT 1201', title: 'Information Processing and Handling in Libraries and Information Centers', lec: 3, lab: 0, units: 3, prereq: 'None' },
              { code: 'SEAL 2', title: 'Student Enhancement Activities for Life II', lec: 1, lab: 0, units: 1, prereq: 'None' },
              { code: 'GESocSci 5', title: 'Ethics', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GEEng 1', title: 'Purposive Communication', lec: 3, lab: 0, units: 3, prereq: 'None' },
              { code: 'RE 2', title: 'Christian Ethics in a Changing World', lec: 3, lab: 0, units: 3, prereq: 'RE 1' },
              { code: 'PATHFit2 W/M', title: 'PATHFit - Exercise Based Fitness Activities', lec: 2, lab: 0, units: 2, prereq: 'PATHFit1 W/M', isNonAcademic: true },
              { code: 'NSTP 2', title: 'Civic Welfare Training Service / LTS / ROTC', lec: 3, lab: 0, units: 3, prereq: 'NSTP 1', isNonAcademic: true }
            ]
          }
        ]
      },
      {
        yearLevel: 'Second Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 23,
            courses: [
              { code: 'CCS 2100', title: 'Fundamentals of Database Design', lec: 2, lab: 3, units: 3, prereq: 'CCS 1301, CCS 1500' },
              { code: 'LIS 2101', title: 'Information Resources and Services I', lec: 3, lab: 0, units: 3, prereq: 'LIS 1101' },
              { code: 'LIS 2102', title: 'Organization of Information Resources I', lec: 3, lab: 0, units: 3, prereq: 'LIS 1101' },
              { code: 'SpT 2101', title: 'Special/Public Librarianship', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'SpT 2103', title: 'Philosophies and Principles of Teaching', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GEMath 1', title: 'Mathematics in the Modern World', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 6', title: 'Science, Technology and Society', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit3 W/M', title: 'PATHFit - Dance and Swimming', lec: 2, lab: 0, units: 2, prereq: 'PATHFit2 W/M', isNonAcademic: true }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 23,
            courses: [
              { code: 'CCS 2601', title: 'Programming with Databases', lec: 3, lab: 0, units: 3, prereq: 'CCS 2100', labFee: true },
              { code: 'CCS 2501', title: 'System Analysis and Design', lec: 3, lab: 0, units: 3, prereq: 'CCS 2100', labFee: true },
              { code: 'ICT 2201', title: 'Digital Libraries and Resources', lec: 3, lab: 0, units: 3, prereq: 'CCS 2100', labFee: true },
              { code: 'LIS 2201', title: 'Information Resources and Services II', lec: 3, lab: 0, units: 3, prereq: 'LIS 2101' },
              { code: 'LIS 2202', title: 'Organization of Information Resources II', lec: 3, lab: 0, units: 3, prereq: 'LIS 2102' },
              { code: 'CESocSci 4', title: 'The Entrepreneurial Mind', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 2', title: 'Readings in Philippine History', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'PATHFit4 W/M', title: 'PATHFit - Volleyball and Basketball', lec: 2, lab: 0, units: 2, prereq: 'PATHFit3 W/M', isNonAcademic: true }
            ]
          }
        ]
      },
      {
        yearLevel: 'Third Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 24,
            courses: [
              { code: 'CCS 3030', title: 'Web Systems and Technologies', lec: 2, lab: 3, units: 3, prereq: 'CCS 2601' },
              { code: 'SpT 3101', title: 'School/ Academic Librarianship', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'LIS 3107', title: 'Indexing and Abstracting', lec: 3, lab: 0, units: 3, prereq: 'LIS 2201' },
              { code: 'LIS 3102', title: 'Management of Libraries and Information Centers', lec: 3, lab: 0, units: 3, prereq: 'LIS 2202' },
              { code: 'LIS 3103', title: 'Library Materials for Children and Young Adults', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'LIS 3104', title: 'Research Methods in Library and Information Science', lec: 3, lab: 0, units: 3, prereq: 'Passed all 2nd Yr. 2nd Sem LIS Subjects' },
              { code: 'GESocSci 3', title: 'Life and Works of Rizal', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GEHum 1', title: 'Art Appreciation', lec: 3, lab: 0, units: 3, prereq: '' }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 24,
            courses: [
              { code: 'LIS 3201', title: 'Information Literacy', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'LIS 3202', title: 'Thesis/Research Writing', lec: 3, lab: 0, units: 3, prereq: 'Passed all 3rd Yr. 1st Sem LIS Subjects' },
              { code: 'LIS 3203', title: 'Introduction to Records Management and Archives', lec: 3, lab: 0, units: 3, prereq: 'LIS 3102' },
              { code: 'SpT 3201', title: 'Educational Technology', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'SpT 3202', title: 'Indigenous Knowledge and Multi-Culturalism', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'GESocSci 4', title: 'The Contemporary World', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'CEArts 3', title: 'Reading Visual Arts', lec: 3, lab: 0, units: 3, prereq: '' },
              { code: 'SpT 4101', title: 'Foreign Language', lec: 3, lab: 0, units: 3, prereq: '' }
            ]
          }
        ]
      },
      {
        yearLevel: 'Fourth Year',
        semesters: [
          {
            semester: 'First Semester',
            subTotalUnits: 6,
            courses: [
              { code: 'LIS 4101', title: 'Library Integrated Review', lec: 6, lab: 0, units: 6, prereq: 'Passed all LIS Subjects' }
            ]
          },
          {
            semester: 'Second Semester',
            subTotalUnits: 6,
            courses: [
              { code: 'LPr 4201', title: 'Library Practice I (200 hrs.)', lec: 3, lab: 0, units: 3, prereq: 'Passed ALL Subjects' },
              { code: 'LPr 4202', title: 'Library Practice II (200 hrs.)', lec: 3, lab: 0, units: 3, prereq: 'Passed ALL Subjects' }
            ]
          }
        ]
      }
    ]
  }
}

