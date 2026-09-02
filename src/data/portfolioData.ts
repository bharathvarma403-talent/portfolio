export interface SkillItem {
  name: string;
  category: 'languages' | 'technologies' | 'tools' | 'soft' | 'development' | 'strengths';
  level?: string;
  subLabel?: string;
  description?: string;
  color?: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  description: string;
  role: string;
  githubUrl: string;
  liveUrl?: string;
  heroImage: string;
  images: string[];
  techStack: string[];
  bullets: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score?: string;
  description?: string;
  status: 'current' | 'completed';
}

export interface TrainingItem {
  title: string;
  provider: string;
  period: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: 'NxtWave' | 'Infosys';
  issueDate: string;
  description: string;
  skillsCovered: string[];
  imageUrl: string;
  verificationUrl?: string;
}

export interface AchievementItem {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export const portfolioData = {
  personal: {
    name: 'Pavan Bharath Varma Datla',
    nickname: 'PBV',
    title: 'Aspiring Software Developer | Data Analyst',
    tagline: 'Passionate about problem-solving, data analytics, and building impactful solutions.',
    bio: 'B.Tech Computer Science and Engineering student specializing in Artificial Intelligence & Machine Learning at Lovely Professional University. Experienced in full-stack web engineering, modern database architectures, and AI-assisted accelerated development.',
    status: 'Open to Opportunities & Collaborations',
    location: 'Punjab / Andhra Pradesh, India',
    email: 'bharathvarma403@gmail.com',
    phone: '+91-9121215136',
    social: {
      github: 'https://github.com/bharathvarma403-talent',
      linkedin: 'https://www.linkedin.com/in/pavan-bharath-varma-datla-632076383/',
      email: 'mailto:bharathvarma403@gmail.com',
    },
    profilePhoto: '/assets/profile.jpg',
    resumeUrl: '/assets/Pavan_Bharath_Varma_CV.jpg',
  },

  skills: {
    languages: [
      { name: 'Java', category: 'languages', level: 'OOP & Core Logic', subLabel: 'OOP & Core Logic', description: 'Object-oriented programming, class design, inheritance, and core computational structures.', color: '#ef4444' },
      { name: 'JavaScript', category: 'languages', level: 'ES6+ & Full-Stack Logic', subLabel: 'ES6+ & Web', description: 'Asynchronous event loop, modern ES6+ paradigms, DOM architecture, and REST API integration.', color: '#f59e0b' },
      { name: 'C', category: 'languages', level: 'System Fundamentals', subLabel: 'Systems', description: 'Pointers, memory management, and core computational structures.', color: '#64748b' },
      { name: 'C++', category: 'languages', level: 'Algorithms & STL', subLabel: 'Algorithms & STL', description: 'Standard Template Library (STL), algorithmic optimization, and computational performance.', color: '#06b6d4' },
      { name: 'Python', category: 'languages', level: 'Data & Scripting', subLabel: 'Data & Scripting', description: 'Data structures, scripting, logic automation, and foundational data analytics.', color: '#38bdf8' },
    ] as SkillItem[],

    technologies: [
      { name: 'HTML', category: 'technologies', level: 'Semantic Structure', subLabel: 'Semantic DOM', description: 'Accessible markup, clean DOM hierarchy, and modern web standards.', color: '#f97316' },
      { name: 'CSS', category: 'technologies', level: 'Responsive Styling & Layouts', subLabel: 'Flexbox & Grid', description: 'Flexbox, CSS Grid, media queries, keyframe animations, and custom styling systems.', color: '#38bdf8' },
      { name: 'Bootstrap', category: 'technologies', level: 'Responsive UI Prototyping', subLabel: 'Responsive UI', description: 'Responsive grid architecture, mobile-first navigation, and accessible components.', color: '#a855f7' },
    ] as SkillItem[],

    development: [
      { name: 'HTML', category: 'technologies', level: 'Semantic Structure', subLabel: 'Semantic DOM', description: 'Accessible markup, clean DOM hierarchy, and modern web standards.', color: '#f97316' },
      { name: 'CSS', category: 'technologies', level: 'Responsive Styling & Layouts', subLabel: 'Flexbox & Grid', description: 'Flexbox, CSS Grid, media queries, keyframe animations, and custom styling systems.', color: '#38bdf8' },
      { name: 'Bootstrap', category: 'technologies', level: 'Responsive UI Prototyping', subLabel: 'Responsive UI', description: 'Responsive grid architecture, mobile-first navigation, and accessible components.', color: '#a855f7' },
    ] as SkillItem[],

    tools: [
      { name: 'MySQL', category: 'tools', level: 'Relational Database', subLabel: 'Relational SQL', description: 'Relational database schema modeling, SQL queries, indexing, and data persistence.', color: '#0284c7' },
      { name: 'Git', category: 'tools', level: 'Version Control', subLabel: 'Version Control', description: 'Branching strategies, commit history hygiene, and merge conflict resolution.', color: '#f43f5e' },
      { name: 'GitHub', category: 'tools', level: 'Code Collaboration', subLabel: 'Collaboration', description: 'Remote repository management, pull requests, and collaborative open-source workflows.', color: '#e2e8f0' },
    ] as SkillItem[],

    soft: [
      { name: 'Problem solving', category: 'soft', level: 'Analytical Thinking', subLabel: 'Analytical Thinking', description: 'Deconstructing complex engineering problems into clean, modular solutions.', color: '#ec4899' },
      { name: 'Team collaboration', category: 'soft', level: 'Cross-Functional Synergy', subLabel: 'Team Synergy', description: 'Effective teamwork, active communication, and peer code reviews.', color: '#8b5cf6' },
      { name: 'Time management', category: 'soft', level: 'Milestone Execution', subLabel: 'Milestone Execution', description: 'Prioritizing sprint goals and delivering high-quality milestones on schedule.', color: '#3b82f6' },
      { name: 'Adaptability', category: 'soft', level: 'Rapid Continuous Learning', subLabel: 'Continuous Learning', description: 'Fast adoption of emerging frameworks, modern toolchains, and AI-assisted workflows.', color: '#10b981' },
    ] as SkillItem[],

    strengths: [
      { name: 'Problem solving', category: 'soft', level: 'Analytical Thinking', subLabel: 'Analytical Thinking', description: 'Deconstructing complex engineering problems into clean, modular solutions.', color: '#ec4899' },
      { name: 'Team collaboration', category: 'soft', level: 'Cross-Functional Synergy', subLabel: 'Team Synergy', description: 'Effective teamwork, active communication, and peer code reviews.', color: '#8b5cf6' },
      { name: 'Time management', category: 'soft', level: 'Milestone Execution', subLabel: 'Milestone Execution', description: 'Prioritizing sprint goals and delivering high-quality milestones on schedule.', color: '#3b82f6' },
      { name: 'Adaptability', category: 'soft', level: 'Rapid Continuous Learning', subLabel: 'Continuous Learning', description: 'Fast adoption of emerging frameworks, modern toolchains, and AI-assisted workflows.', color: '#10b981' },
    ] as SkillItem[],
  },

  projects: [
    {
      id: 'vasavi-traders',
      title: 'Vasavi Traders',
      tagline: 'Responsive Construction Materials Platform & Material Reservation Engine',
      duration: 'Mar 2026 – Apr 2026',
      description: 'A responsive construction materials website engineered for product browsing and material reservations, featuring dynamic categories, customer reservation management, and a dedicated admin cockpit.',
      role: 'Full-Stack Developer',
      githubUrl: 'https://github.com/bharathvarma403-talent',
      liveUrl: 'https://vasavitraders.store',
      heroImage: '/assets/vasavi/cement_bags.png',
      images: [
        '/assets/vasavi/cement_bags.png',
        '/assets/vasavi/paint_primers.png',
        '/assets/vasavi/pipes_fittings.png',
        '/assets/vasavi/electrical_materials.png',
        '/assets/vasavi/water_tanks.png',
      ],
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'Supabase',
        'Prisma',
        'Tailwind CSS',
        'REST APIs',
      ],
      bullets: [
        'Developed a responsive construction materials website for product browsing and reservations.',
        'Implemented product categories, pricing, product details, and material reservation functionality.',
        'Built user authentication and order tracking for managing customer reservations.',
        'Developed an admin dashboard for managing products, orders, and customer requests.',
      ],
      features: [
        {
          title: 'Product Categories & Pricing',
          description: 'Categorized catalog with pricing, specifications, and product details.',
          icon: 'Package',
        },
        {
          title: 'Material Reservation Functionality',
          description: 'Allows contractors and customers to reserve materials for construction milestones.',
          icon: 'CalendarCheck',
        },
        {
          title: 'User Authentication & Order Tracking',
          description: 'Secure customer authentication and live reservation tracking.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Admin Management Dashboard',
          description: 'Merchant dashboard for managing products, inventory, orders, and customer requests.',
          icon: 'LayoutDashboard',
        },
      ],
    },
    {
      id: 'virtual-card',
      title: 'VIRTUAL — Digital Visiting Card Platform',
      tagline: 'Smart Professional Networking with QR, NFC, OCR & Instant Contact Sharing',
      duration: 'Aug 2026 – Present',
      description: 'Built a smart digital visiting card system for seamless professional networking with QR code generation, NFC profile sharing, OCR business card scanning, and privacy-first contact management.',
      role: 'Full-Stack Lead',
      githubUrl: 'https://github.com/bharathvarma403-talent/Virtual-Card',
      liveUrl: 'https://virtual-card-eight.vercel.app/',
      heroImage: '/assets/vasavi/electrical_materials.png',
      images: [
        '/assets/vasavi/electrical_materials.png',
        '/assets/vasavi/pipes_fittings.png',
        '/assets/vasavi/paint_primers.png',
      ],
      techStack: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Supabase',
        'Three.js',
        'QR & NFC',
      ],
      bullets: [
        'Built a smart digital visiting card system for seamless professional networking.',
        'Integrated QR, NFC, OCR, vCard export, and privacy-first contact management.',
        'Designed a modern, responsive interface focused on simplicity and user experience.',
      ],
      features: [
        {
          title: 'Instant QR & NFC Sharing',
          description: 'Share contact information instantly with tap-to-connect NFC and dynamic QR codes.',
          icon: 'QrCode',
        },
        {
          title: 'OCR Business Card Scanner',
          description: 'Extract contact details directly from paper cards using optical character recognition.',
          icon: 'Scan',
        },
        {
          title: 'vCard & Contact Sync',
          description: '1-click export of structured contact data straight to Apple Contacts & Google Contacts.',
          icon: 'UserCheck',
        },
        {
          title: 'Privacy-First Architecture',
          description: 'Supabase row-level security ensuring users maintain complete control of their profile data.',
          icon: 'ShieldCheck',
        },
      ],
    },
  ] as ProjectDetail[],

  training: [
    {
      title: 'B.Tech – Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
      provider: 'Lovely Professional University (LPU)',
      period: 'Aug 2025 – Apr 2029',
      description: 'Undergraduate engineering program concentrating on Artificial Intelligence, Machine Learning algorithms, computational structures, and software principles.',
      bullets: [
        'Specialization in Artificial Intelligence & Machine Learning',
        'Coursework in computational algorithms, data structures, and software principles',
      ],
      technologies: ['AI / ML', 'Data Structures', 'Algorithms', 'Python', 'C++'],
    },
    {
      title: 'Full-Stack Web Development Training',
      provider: 'NxtWave Academy',
      period: 'Ongoing',
      description: 'Hands-on intensive full-stack development curriculum focusing on modern web engineering and cloud deployments.',
      bullets: [
        'Currently undergoing hands-on training in full stack web development and modern web technologies.',
        'Hands-on experience deploying applications using Vercel, Render, and Supabase, along with Antigravity for AI-assisted development.',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'Vercel', 'Render', 'Supabase', 'Antigravity AI'],
    },
  ] as TrainingItem[],

  certificates: [
    {
      id: 'bootstrap-flexbox',
      title: 'Mastered frontend layout design using Bootstrap and Flexbox',
      issuer: 'NxtWave',
      issueDate: 'Jan 2026',
      description: 'Certified mastery in structuring responsive frontend web layouts using Bootstrap grid systems and CSS Flexbox.',
      skillsCovered: ['Bootstrap', 'Flexbox', 'Responsive Design', 'CSS Layouts'],
      imageUrl: '/assets/certificates/bootstrap-flexbox.png',
      verificationUrl: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=RBHNNNCKOA',
    },
    {
      id: 'static-web',
      title: 'Certified in static Web Development',
      issuer: 'NxtWave',
      issueDate: 'Jan 2026',
      description: 'Certification in building standards-compliant static web pages using semantic HTML, CSS, and Bootstrap.',
      skillsCovered: ['HTML', 'CSS', 'Bootstrap', 'Semantic Markup'],
      imageUrl: '/assets/certificates/static-web.png',
      verificationUrl: 'https://certificates.ccbp.in/academy/static-website?id=RRMIGZSTCN',
    },
    {
      id: 'python-part1',
      title: 'Completed course in programming fundamentals using Python part-1',
      issuer: 'Infosys',
      issueDate: 'Jun 2026',
      description: 'Foundational certification covering Python core concepts, variables, control structures, and computational thinking.',
      skillsCovered: ['Python', 'Control Structures', 'Functions', 'Programming Fundamentals'],
      imageUrl: '/assets/certificates/python-part1.png',
      verificationUrl: 'https://verify.onwingspan.com',
    },
    {
      id: 'python-part2',
      title: 'Completed course in programming fundamentals using Python part-2',
      issuer: 'Infosys',
      issueDate: 'Jun 2026',
      description: 'Advanced fundamentals certification covering object-oriented concepts, data structures, and algorithmic logic in Python.',
      skillsCovered: ['Python', 'Data Structures', 'OOP Concepts', 'Algorithmic Logic'],
      imageUrl: '/assets/certificates/python-part2.png',
      verificationUrl: 'https://verify.onwingspan.com',
    },
  ] as CertificateItem[],

  achievements: [
    {
      title: 'Completed 100+ problems of Python and PostgreSQL in Codetantra platform.',
      description: 'Mastered core algorithmic problem solving, query optimization, and data structure implementations across Python and PostgreSQL on Codetantra.',
      date: 'Aug 2025 – May 2026',
      tags: ['Codetantra', 'Python', 'PostgreSQL', 'Problem Solving', 'Data Structures'],
    },
  ] as AchievementItem[],

  education: [
    {
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      duration: 'Aug 2025 – Present',
      score: 'B.Tech CSE (AI & ML)',
      description: 'Specialization: Artificial Intelligence and Machine Learning',
      status: 'current',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Narayana Junior College',
      location: 'Guntur, Andhra Pradesh',
      duration: 'May 2023 – Mar 2025',
      score: 'Percentage: 97.8%',
      description: 'Higher Secondary Education with distinction.',
      status: 'completed',
    },
    {
      degree: 'Secondary Education',
      institution: 'Royal School',
      location: 'Martur, Andhra Pradesh',
      duration: 'Jun 2022 – Mar 2023',
      score: 'Percentage: 93.3%',
      description: 'Secondary Education with distinction.',
      status: 'completed',
    },
  ] as EducationItem[],

  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ],
};
