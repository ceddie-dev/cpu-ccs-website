// ==========================================================================
// Central Philippine University - College of Computer Studies (CCS)
// Academic Programs Official Information & Curriculum Data
// In compliance with CHED CMO 25, Series of 2015 & CMO 24, Series of 2015
// ==========================================================================

export const programsData = {
  bsit: {
    code: 'BSIT',
    slug: 'bsit',
    title: 'Bachelor of Science in Information Technology',
    tagline: 'Architecting robust, secure, and modern digital infrastructures for organizations worldwide.',
    icon: '/assets/program-icons/information-technology.png',
    degreeType: 'Undergraduate Degree',
    duration: '4 Years (8 Semesters)',
    accreditation: 'CHED Recognized',
    studentOrg: {
      name: 'Information Technology Student Organization',
      abbr: 'ITSO',
      description: 'The official student organization for Information Technology students at CPU, fostering technical competencies, IT seminars, and professional development.'
    },
    overview: 'The Bachelor of Science in Information Technology (BSIT) program at Central Philippine University prepares students to be adept IT professionals knowledgeable in hardware and software technologies. The program emphasizes the planning, installing, customizing, operating, managing, administering, and maintaining of information technology infrastructure to meet the operational demands of enterprises, government institutions, and global organizations.',
    missionAlignment: 'Rooted in Central Philippine University\'s commitment to Exemplary Christian Education for Life (EXCEL), the BSIT curriculum combines technical mastery with ethical, socially responsible computing.',
    objectives: [
      'Apply computing knowledge and technical competencies to analyze problems, assess requirements, and design effective IT infrastructure solutions.',
      'Plan, configure, deploy, secure, and maintain computer networks, server infrastructures, databases, and enterprise cloud applications.',
      'Demonstrate ethical decision-making, professional integrity, and Christian moral principles in dealing with data privacy and digital systems.',
      'Collaborate productively in multidisciplinary and cross-cultural teams using modern collaborative software engineering workflows.',
      'Engage in lifelong professional learning to anticipate and adapt to rapidly evolving technological advancements.'
    ],
    studentOutcomes: [
      'Analyze complex computing problems and apply principles of computing and other relevant disciplines to identify solutions.',
      'Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of IT.',
      'Communicate effectively with a range of audiences about technical information.',
      'Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.',
      'Function effectively as a member or leader of a team engaged in activities appropriate to the program’s discipline.'
    ],
    areasOfStudy: [
      {
        title: 'Network Administration & Cybersecurity',
        desc: 'Advanced routing and switching protocols, LAN/WAN architecture, perimeter firewalls, penetration testing fundamentals, and enterprise network security monitoring.'
      },
      {
        title: 'Full-Stack Web & Mobile Development',
        desc: 'Progressive web applications, REST/GraphQL APIs, modern reactive frontend frameworks (Vue/React), native and hybrid mobile app engineering, and responsive UX design.'
      },
      {
        title: 'Database Architecture & Big Data',
        desc: 'Relational database management systems (RDBMS), NoSQL distributed data stores, query optimization, data warehousing, and enterprise data modeling.'
      },
      {
        title: 'Systems Integration & Cloud Computing',
        desc: 'Cloud virtualization, containerization (Docker/Kubernetes), DevOps deployment pipelines, API integrations, and hybrid cloud management.'
      }
    ],
    curriculumHighlights: [
      {
        year: 'First Year',
        focus: 'Foundations of Computing & Programming Logic',
        courses: [
          'CCS 1001 - Introduction to Computing',
          'CCS 1400 - Fundamentals of Programming',
          'CCS 1500 - Intermediate Programming',
          'CCS 1301 - Data Structures and Algorithms',
          'GEMath 1 - Mathematics in the Modern World',
          'CETech 1 - Living in the IT Era'
        ]
      },
      {
        year: 'Second Year',
        focus: 'Database Systems, Networking & Platform Tech',
        courses: [
          'CCS 2100 - Fundamentals of Database Design',
          'CCS 2110 - Application Development and Emerging Technologies',
          'CCS 2401 - Network Engineering I: Introduction to Networks',
          'CCS 2501 - Systems Analysis and Design',
          'CCS 2601 - Programming with Databases',
          'IT 2110 - Platform Technologies'
        ]
      },
      {
        year: 'Third Year',
        focus: 'Network Engineering, Security & Thesis Research',
        courses: [
          'CCS 3100 - Methods of Research in IT',
          'CCS 3020 - Information Assurance and Security I',
          'CCS 3030 - Web Systems and Technologies',
          'IT 3121 - Network Engineering II: Switching, Routing, and Wireless Essentials',
          'IT 3220 - System Integration and Architecture',
          'CSS 3600 - CCS Thesis I'
        ]
      },
      {
        year: 'Fourth Year',
        focus: 'Thesis Completion, Professional Electives & 600-Hour OJT',
        courses: [
          'CCS 4100 - CCS Thesis II',
          'CCS 4300 - Social Issues and Professional Practices',
          'IT 4120 - Advanced Database Systems',
          'CCS 4201 - On-the-Job Training (600 hours)',
          'Elective Tracks: Database Administration (CCSPE 1100–1400) or Internet of Things (ITPE 1100–1400)'
        ]
      }
    ],
    careerOpportunities: [
      { title: 'Network Engineer / Administrator', field: 'Infrastructure', desc: 'Designs, configures, and monitors resilient enterprise networking systems and secure connectivity.' },
      { title: 'Full-Stack Web Developer', field: 'Software Development', desc: 'Builds enterprise-grade, accessible web applications and API microservices.' },
      { title: 'Cybersecurity Analyst', field: 'Information Security', desc: 'Guards organizational data assets against unauthorized intrusions, malware, and cyber vulnerabilities.' },
      { title: 'Database Administrator (DBA)', field: 'Data Management', desc: 'Ensures relational and NoSQL databases remain optimized, backed up, and highly available.' },
      { title: 'Cloud Solutions Specialist', field: 'Cloud & DevOps', desc: 'Provisions, deploys, and automates scalable cloud environments on platforms such as AWS and Azure.' },
      { title: 'IT Systems Consultant', field: 'Business Technology', desc: 'Advises companies on adopting digital transformation workflows and modern software solutions.' }
    ],
    associatedFacultyIds: [
      'balontong-rea',
      'beldia-leo-paulo',
      'dignadice-lesley-joy',
      'eregia-rodolfo',
      'montano-antonio',
      'ojacastro-rose-leah',
      'pajar-lennon',
      'jardleza-donie'
    ]
  },

  bscs: {
    code: 'BSCS',
    slug: 'bscs',
    title: 'Bachelor of Science in Computer Science',
    tagline: 'Pioneering algorithmic innovation, machine intelligence, and advanced computational software.',
    icon: '/assets/program-icons/computer-science.png',
    degreeType: 'Undergraduate Degree',
    duration: '4 Years (8 Semesters)',
    accreditation: 'CHED Recognized',
    studentOrg: {
      name: 'Computer Science Society',
      abbr: 'CSS',
      description: 'The official student organization for Computer Science students at CPU, dedicated to algorithmic problem solving, software engineering, and peer technical activities.'
    },
    overview: 'The Bachelor of Science in Computer Science (BSCS) program at Central Philippine University focuses on the theoretical foundations of computing, advanced algorithmic analysis, artificial intelligence, and cutting-edge software engineering. Students learn to invent new computational techniques, design algorithmically complex systems, and solve mathematical and computational challenges that drive modern industry breakthroughs.',
    missionAlignment: 'Integrating Christian virtues with rigorous scientific inquiry, CPU BSCS instills critical thinking, intellectual honesty, and transformative software craftsmanship that benefits society.',
    objectives: [
      'Apply advanced mathematical foundations, algorithmic principles, and computer science theory to model and design computer-based systems.',
      'Conceive, architect, and optimize scalable, highly reliable software systems that solve complex, multi-variable real-world challenges.',
      'Conduct rigorous research in artificial intelligence, computer vision, data science, and intelligent automation systems.',
      'Practice computing professions with strong ethical accountability, exemplary Christian stewardship, and adherence to intellectual property standards.',
      'Demonstrate leadership in technological discovery and pursue graduate studies or innovative research and development roles.'
    ],
    studentOutcomes: [
      'Analyze complex computational problems and apply mathematical principles to devise optimal algorithmic solutions.',
      'Design, implement, and evaluate computing systems that demonstrate verifiable correctness, security, and computational efficiency.',
      'Apply computer science theory and software development fundamentals to produce computing-based solutions.',
      'Effectively communicate technical research findings through scholarly presentations and published literature.',
      'Work productively in collaborative research teams and lead complex engineering tasks.'
    ],
    areasOfStudy: [
      {
        title: 'Artificial Intelligence & Machine Learning',
        desc: 'Deep learning, neural networks, natural language processing (NLP), computer vision, and predictive models using Python, PyTorch, and TensorFlow.'
      },
      {
        title: 'Algorithmic Complexity & Optimization',
        desc: 'Asymptotic analysis, graph theory, dynamic programming, NP-complete problem strategies, and high-performance computational theory.'
      },
      {
        title: 'Software Engineering & Systems Architecture',
        desc: 'Formal software design patterns, distributed computing architectures, concurrent programming, and formal verification.'
      },
      {
        title: 'Data Science & Scientific Computing',
        desc: 'Statistical learning, data visualization, numerical methods, bioinformatics, and big-data processing pipelines.'
      }
    ],
    curriculumHighlights: [
      {
        year: 'First Year',
        focus: 'Foundations of Computing & Discrete Mathematics',
        courses: [
          'CCS 1001 - Introduction to Computing',
          'CCS 1400 - Fundamentals of Programming',
          'CCS 1500 - Intermediate Programming',
          'CCS 1301 - Data Structures and Algorithms',
          'GEMath 1 - Mathematics in the Modern World',
          'CETech 1 - Living in the IT Era'
        ]
      },
      {
        year: 'Second Year',
        focus: 'Discrete Structures, Architecture & Logic Design',
        courses: [
          'CCS 2100 - Fundamentals of Database Design',
          'CCS 2110 - Application Development and Emerging Technologies',
          'CS 2111 - Structure of Programming Languages',
          'CCS 2300 - Logic Design',
          'CCS 2401 - Network Engineering I: Introduction to Networks',
          'CS 2120 & 2210 - Discrete Structures I & II'
        ]
      },
      {
        year: 'Third Year',
        focus: 'Algorithms, Software Engineering & Thesis Research',
        courses: [
          'CCS 3002 - Computer Organization & Assembly Language',
          'CCS 3020 - Information Assurance and Security I',
          'CCS 3031 - Web Systems and Technologies',
          'CS 3120 - Algorithms and Complexities',
          'CCS 3300 - Software Engineering',
          'CCS 3600 - CCS Thesis I'
        ]
      },
      {
        year: 'Fourth Year',
        focus: 'Artificial Intelligence, Thesis Completion & 600-Hour OJT',
        courses: [
          'CCS 4100 - CCS Thesis II',
          'CS 4110 - Artificial Intelligence',
          'CCS 4300 - Social Issues and Professional Practices',
          'CCS 4201 - On-the-Job Training (600 hours)',
          'Specialization Track Electives: Software Development (CSPE 4100/4200/4300), Data Science (CSPE 3101/3300/3400), or Cybersecurity (CSPE 5100/5200/5300)'
        ]
      }
    ],
    careerOpportunities: [
      { title: 'Software Engineer / Architect', field: 'Software Engineering', desc: 'Engineers robust software systems, compilers, backend engines, and distributed platforms.' },
      { title: 'Machine Learning / AI Engineer', field: 'Artificial Intelligence', desc: 'Builds, trains, and tunes intelligent models for natural language, predictive analytics, and computer vision.' },
      { title: 'Data Scientist / Quantitative Analyst', field: 'Data Science', desc: 'Extracts deep empirical insights from massive multidimensional datasets using statistical modeling.' },
      { title: 'Algorithm Specialist', field: 'R&D', desc: 'Devises high-speed algorithms for financial tech, cryptography, logistics, and data compression.' },
      { title: 'Systems Programmer', field: 'Low-Level Systems', desc: 'Develops operating system kernels, device drivers, embedded microcontrollers, and real-time systems.' },
      { title: 'Academic / R&D Researcher', field: 'Academia & Research', desc: 'Pursues postgraduate research and creates pioneering technologies in universities and corporate labs.' }
    ],
    associatedFacultyIds: [
      'parreno-marjee-rose',
      'sapul-ma-sheila',
      'cambronero-pedro-peter',
      'jardleza-donie',
      'ojacastro-rose-leah',
      'pajar-lennon'
    ]
  },

  bsdmia: {
    code: 'BSDMIA',
    slug: 'bsdmia',
    title: 'Bachelor of Science in Digital Media and Interactive Arts',
    tagline: 'Bridging artistic imagination, 3D technology, game design, and immersive digital storytelling.',
    icon: '/assets/program-icons/midas.png',
    degreeType: 'Undergraduate Degree',
    duration: '4 Years (8 Semesters)',
    accreditation: 'CHED Recognized',
    studentOrg: {
      name: 'Media & Interactive Design Arts Society',
      abbr: 'MIDAS',
      description: 'The official student organization for Digital Media and Interactive Arts students at CPU, fostering creative growth in digital animation, interactive design, and multimedia arts.'
    },
    overview: 'Launched by the CPU College of Computer Studies in 2014, the Bachelor of Science in Digital Media and Interactive Arts (BSDMIA) program blends creative visual arts, design psychology, and technical software engineering. Students gain mastery of industry-standard tools and workflows in 2D/3D animation, 3D character modeling, video game production, virtual reality, cinematography, and immersive interactive installations.',
    missionAlignment: 'In harmony with CPU’s Christian philosophy, BSDMIA empowers students to produce uplifting, positive, and culturally enriching media content that elevates the human spirit and engages audiences ethically.',
    objectives: [
      'Synthesize principles of visual aesthetics, storytelling, and digital technology to build engaging interactive experiences and multimedia productions.',
      'Master professional pipelines in 2D/3D animation, character sculpting, game engine development, and post-production video editing.',
      'Conceptualize, prototype, and deliver playable indie games and immersive applications that address real-world entertainment or educational needs.',
      'Operate with creative discipline, intellectual property awareness, and Christian ethical sensibility in all artistic and media endeavors.',
      'Collaborate efficiently in studio team environments using agile project management workflows and industry-standard creative suites.'
    ],
    studentOutcomes: [
      'Apply artistic design theory, color theory, and composition to interactive media projects.',
      'Produce broadcast-quality 2D/3D animations, visual effects (VFX), and interactive media assets.',
      'Develop playable 2D and 3D games utilizing industry game engines such as Unity and Unreal Engine.',
      'Communicate creative design concepts and pitch projects convincingly to clients and stakeholders.',
      'Demonstrate understanding of the business, legal, and ethical landscapes of the global creative industries.'
    ],
    areasOfStudy: [
      {
        title: '2D & 3D Computer Animation',
        desc: 'Principles of animation, character rigging, skeletal deformation, keyframing, motion graphics, and procedural animation using Maya and Blender.'
      },
      {
        title: 'Video Game Design & Development',
        desc: 'Game mechanics, level design, game physics, AI scripting, gameplay programming, and multiplatform deployment in modern game engines.'
      },
      {
        title: 'UI/UX Design & Interactive Media',
        desc: 'User empathy research, wireframing, high-fidelity interactive prototyping, design systems, usability testing, and mobile app interface design.'
      },
      {
        title: 'Virtual Reality & Visual Effects (VFX)',
        desc: 'Immersive VR/AR application development, compositing, green-screen filming, digital matte painting, particle simulations, and audio design.'
      }
    ],
    curriculumHighlights: [
      {
        year: 'First Year',
        focus: 'Visual Arts Foundations & Creative Technology',
        courses: [
          'DMIA 1100 - Introduction to Digital Media',
          'CCS 1400 - Fundamentals of Programming',
          'CCS 1500 - Intermediate Programming',
          'DMIA 1200 - Drawing for Animation',
          'DMIA 1201 - Visual Storytelling & Screenplay',
          'CETech 1 - Living in the IT Era'
        ]
      },
      {
        year: 'Second Year',
        focus: '2D/3D Animation, Modeling & Storytelling',
        courses: [
          'DMIA 2101 - Graphic Design',
          'DMIA 2102 - 3D Fundamentals',
          'DMIA 2103 - User Interface Design',
          'DMIA 2201 - Video Production',
          'DMIA 2202 - Digital Audio Production',
          'DMIA 2204 - 3D Character Modeling'
        ]
      },
      {
        year: 'Third Year',
        focus: 'Specialized Tracks, Portfolio & Advanced Animation',
        courses: [
          'DMIA 3100 - Methods of Research',
          'DMIA 3140 - 2D Animation',
          'DMIA 3200 - Portfolio Development I',
          'DMIA 3250 - 3D Animation',
          'Creative Tracks: Digital Media and Broadcast Design (DMBD 3101/3105/3202/3204) or Visualization and Animation (DMVA 3204/3105a/3104/3205)'
        ]
      },
      {
        year: 'Fourth Year',
        focus: 'Portfolio Exhibition, Media Law & 600-Hour OJT',
        courses: [
          'DMIA 4100 - Portfolio Development II',
          'DMIA 4102 - Digital Media Law with Professional Ethics',
          'DMIA 4110 - Portfolio Preparation and Exhibit Design',
          'CCS 4201 - On-the-Job Training (600 hours)',
          'Digital Media Electives (DMIAFE 1100–1500)'
        ]
      }
    ],
    careerOpportunities: [
      { title: '3D Animator / Modeler', field: 'Animation Studios', desc: 'Sculpts characters, props, and animations for animated feature films, series, and commercials.' },
      { title: 'Video Game Designer / Developer', field: 'Gaming Industry', desc: 'Builds game loops, mechanics, levels, and character interactions in Unity or Unreal Engine.' },
      { title: 'UI/UX Designer', field: 'Tech & Products', desc: 'Crafts intuitive, delightful, and human-centered digital experiences for apps and web platforms.' },
      { title: 'Motion Graphics Artist', field: 'Media & Broadcast', desc: 'Creates dynamic title sequences, commercial graphics, and animated brand identities.' },
      { title: 'AR/VR Content Developer', field: 'Immersive Tech', desc: 'Designs spatial computing experiences for education, healthcare simulations, and virtual tours.' },
      { title: 'Creative Art Director', field: 'Agencies & Studios', desc: 'Guides the aesthetic vision, narrative direction, and styling of multimedia campaigns.' }
    ],
    associatedFacultyIds: [
      'parreno-marjee-rose',
      'pajar-lennon'
    ]
  },

  blis: {
    code: 'BLIS',
    slug: 'blis',
    title: 'Bachelor of Library and Information Science',
    tagline: 'Leading information curation, digital archiving, metadata science, and knowledge management.',
    icon: '/assets/program-icons/lisso.png',
    degreeType: 'Undergraduate Degree',
    duration: '4 Years (8 Semesters)',
    accreditation: 'CHED Recognized',
    studentOrg: {
      name: 'Library & Information Science Student Organization',
      abbr: 'LISSO',
      description: 'The official student organization for Library and Information Science students at CPU, promoting literacy advocacy, library sciences, and information stewardship.'
    },
    overview: 'The Bachelor of Library and Information Science (BLIS) program under the College of Computer Studies at Central Philippine University prepares students to become modern information professionals, data curators, and knowledge managers. The curriculum bridges traditional librarianship with cutting-edge digital technologies, equipping graduates to organize, preserve, retrieve, and disseminate information across physical collections, electronic databases, and cloud-based digital repositories.',
    missionAlignment: 'Rooted in CPU’s heritage of Christian service and truth, the BLIS program nurtures ethical guardians of knowledge who defend intellectual freedom, preserve cultural memory, and foster lifelong learning in communities.',
    objectives: [
      'Organize, classify, catalog, and index knowledge resources across physical, electronic, and digital media using international standards.',
      'Design, implement, and administer integrated library systems (ILS), open-source repositories, and automated institutional archives.',
      'Provide exemplary information literacy instruction, reference services, and research consultation to diverse academic and corporate communities.',
      'Demonstrate ethical commitment, intellectual freedom advocacy, and copyright compliance in accordance with the Librarian’s Code of Ethics.',
      'Successfully qualify for and pass the Philippine Professional Regulation Commission (PRC) Board Licensure Examination for Librarians (LBE).'
    ],
    studentOutcomes: [
      'Apply cataloging and classification rules (RDA, MARC21, Dewey Decimal, Library of Congress) to organize diverse collections.',
      'Manage modern information centers and specialized libraries applying strategic administration and financial stewardship.',
      'Utilize digital library software, repository frameworks (DSpace, Koha), and automated database search retrieval mechanisms.',
      'Preserve, conserve, and digitize rare historical manuscripts, archives, and institutional intellectual assets.',
      'Formulate research strategies and conduct empirical studies in information behaviors and library science trends.'
    ],
    areasOfStudy: [
      {
        title: 'Information Organization & Metadata Systems',
        desc: 'Resource Description and Access (RDA), MARC21 formats, Dublin Core metadata, Library of Congress Classification (LCC), and Dewey Decimal Classification (DDC).'
      },
      {
        title: 'Digital Libraries & Institutional Archives',
        desc: 'Open-access repositories, digital preservation standards (OAIS), digital scanning curation, archival appraisal, and electronic records management.'
      },
      {
        title: 'Library Automation & Informatics',
        desc: 'Integrated Library Management Systems (Koha, Evergreen), database query design, RFID library tracking systems, and web discovery interfaces.'
      },
      {
        title: 'Knowledge Management & Reference Services',
        desc: 'Competitive intelligence, scholarly communication, bibliographic instruction, information literacy programming, and specialized corporate informatics.'
      }
    ],
    curriculumHighlights: [
      {
        year: 'First Year',
        focus: 'Foundations of Library & Information Science',
        courses: [
          'LIS 1101 - Introduction to Library and Information Science',
          'CCS 1400 - Fundamentals of Programming',
          'CCS 1500 - Intermediate Programming',
          'LIS 1201 - Collection Management',
          'GEMath 1 - Mathematics in the Modern World',
          'CETech 1 - Living in the IT Era'
        ]
      },
      {
        year: 'Second Year',
        focus: 'Cataloging, Classification & Database Design',
        courses: [
          'LIS 2101 - Information Resources and Services I',
          'LIS 2102 - Organization of Information Resources I',
          'LIS 2201 - Information Resources and Services II',
          'LIS 2202 - Organization of Information Resources II',
          'CCS 2100 - Fundamentals of Database Design',
          'CESocSci 4 - The Entrepreneurial Mind'
        ]
      },
      {
        year: 'Third Year',
        focus: 'Web Systems, Research Methods & Thesis Writing',
        courses: [
          'CCS 3030 - Web Systems and Technologies',
          'LIS 3102 - Management of Libraries and Information Centers',
          'LIS 3107 - Indexing and Abstracting',
          'LIS 3104 - Research Methods in Library and Information Science',
          'LIS 3201 - Information Literacy',
          'LIS 3202 - Thesis/Research Writing'
        ]
      },
      {
        year: 'Fourth Year',
        focus: 'Integrated Review & 400-Hour Library Practicum',
        courses: [
          'LIS 4101 - Library Integrated Review (6 Units)',
          'SpT 4102 - Trends in Library and Information Science',
          'LPr 4201 - Library Practice I (200 hrs.)',
          'LPr 4202 - Library Practice II (200 hrs.)'
        ]
      }
    ],
    careerOpportunities: [
      { title: 'Licensed Professional Librarian', field: 'Academic & Public Libraries', desc: 'Leads operations, user services, and cataloging in universities, colleges, and public library systems.' },
      { title: 'Digital Archivist / Curator', field: 'Archives & Museums', desc: 'Preserves, digitizes, and maintains historical documents, rare records, and multimedia heritage assets.' },
      { title: 'Knowledge Management Specialist', field: 'Corporate & Government', desc: 'Architects internal company taxonomies, document management portals, and institutional knowledge bases.' },
      { title: 'Metadata & Cataloging Specialist', field: 'Publishing & Tech', desc: 'Structures data schemas, bibliographic metadata, and taxonomies for digital publishers and tech firms.' },
      { title: 'Information Broker / Researcher', field: 'Consulting & Legal', desc: 'Conducts deep-dive investigations, competitive market intelligence, and literature reviews for organizations.' },
      { title: 'Library Systems Administrator', field: 'Library Technology', desc: 'Installs, maintains, and customizes integrated open-source library systems like Koha and discovery tools.' }
    ],
    associatedFacultyIds: [
      'cantel-ana-mae',
      'rivera-donna-may'
    ]
  }
}

