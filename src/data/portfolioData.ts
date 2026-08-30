export interface SkillItem {
  name: string;
  category: 'languages' | 'development' | 'tools' | 'strengths' | 'technologies' | 'soft';
  subLabel?: string;
  level?: string;
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
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  skillsCovered: string[];
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
    resumeUrl: '/assets/Pavan_Bharath_Varma_CV.pdf',
    resumeDocxUrl: '/assets/Pavan_Bharath_Varma_CV.docx',
  },

  skills: {
    languages: [
      { name: 'Python', category: 'languages', subLabel: 'AI / ML', color: '#38bdf8' },
      { name: 'JavaScript', category: 'languages', subLabel: 'Full-Stack / Web', color: '#f59e0b' },
      { name: 'C', category: 'languages', subLabel: 'Systems', color: '#94a3b8' },
      { name: 'C++', category: 'languages', subLabel: 'Algorithms / OOP', color: '#06b6d4' },
    ] as SkillItem[],

    development: [
      { name: 'React', category: 'development', subLabel: 'Frontend', color: '#06b6d4' },
      { name: 'Node.js', category: 'development', subLabel: 'Backend Runtime', color: '#10b981' },
      { name: 'HTML5', category: 'development', subLabel: 'Semantic Web', color: '#f97316' },
      { name: 'CSS3', category: 'development', subLabel: 'Modern Styling', color: '#38bdf8' },
      { name: 'Bootstrap', category: 'development', subLabel: 'Responsive Grid', color: '#a855f7' },
      { name: 'Tailwind CSS', category: 'development', subLabel: 'Utility-First UI', color: '#38bdf8' },
    ] as SkillItem[],

    tools: [
      { name: 'MySQL', category: 'tools', subLabel: 'Relational DB', color: '#0284c7' },
      { name: 'MongoDB', category: 'tools', subLabel: 'NoSQL DB', color: '#10b981' },
      { name: 'PostgreSQL', category: 'tools', subLabel: 'Relational DB', color: '#3b82f6' },
      { name: 'Git', category: 'tools', subLabel: 'Version Control', color: '#f43f5e' },
      { name: 'GitHub', category: 'tools', subLabel: 'Collaboration', color: '#e2e8f0' },
      { name: 'Figma', category: 'tools', subLabel: 'UI / UX Design', color: '#ec4899' },
      { name: 'VS Code', category: 'tools', subLabel: 'IDE / Editor', color: '#38bdf8' },
    ] as SkillItem[],

    strengths: [
      { name: 'Problem Solving', category: 'strengths', subLabel: 'Analytical Thinking', color: '#a78bfa' },
      { name: 'Team Collaboration', category: 'strengths', subLabel: 'Cross-Functional', color: '#38bdf8' },
      { name: 'Time Management', category: 'strengths', subLabel: 'Milestone Execution', color: '#fbbf24' },
      { name: 'Adaptability', category: 'strengths', subLabel: 'Continuous Learning', color: '#34d399' },
      { name: 'Quick Learner', category: 'strengths', subLabel: 'Rapid Adoption', color: '#f472b6' },
    ] as SkillItem[],
  },

  projects: [
    {
      id: 'vasavi-traders',
      title: 'Vasavi Traders',
      tagline: 'Responsive Construction Materials Commerce & Material Reservation Engine',
      duration: 'Mar 2026 – Apr 2026',
      description: 'A responsive construction materials website engineered for product browsing and material reservations, featuring dynamic categories, customer reservation management, and a dedicated admin cockpit.',
      role: 'Full-Stack Developer',
      githubUrl: 'https://github.com/bharathvarma403-talent',
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
  ] as ProjectDetail[],

  training: [
    {
      title: 'B.Tech – Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
      provider: 'Lovely Professional University (LPU)',
      period: 'Aug 2025 – Apr 2029',
      description: 'Undergraduate engineering program concentrating on Artificial Intelligence, Machine Learning algorithms, computational structures, and software principles.',
      bullets: [
        'Specialization in Artificial Intelligence & Machine Learning',
        'Rigorous coursework in computational algorithms, data structures, and software principles',
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
      title: 'Mastered frontend layout design using Bootstrap and Flexbox',
      issuer: 'Nxtwave',
      issueDate: 'Jan 2026',
      description: 'Certified mastery in structuring responsive frontend web layouts using Bootstrap grid systems and CSS Flexbox.',
      skillsCovered: ['Bootstrap', 'Flexbox', 'Responsive Design', 'CSS Layouts'],
    },
    {
      title: 'Certified in Static Web Development',
      issuer: 'Nxtwave',
      issueDate: 'Jan 2026',
      description: 'Certification in building standards-compliant static web pages using semantic HTML and CSS.',
      skillsCovered: ['HTML', 'CSS', 'Semantic Markup', 'Web Standards'],
    },
  ] as CertificateItem[],

  achievements: [
    {
      title: 'Full-Stack Website Deployment (Vasavi Traders)',
      description: 'Built and deployed a full-stack construction material website, Vasavi Traders, using AI-assisted development.',
      date: 'Apr 2026',
      tags: ['Vasavi Traders', 'Full-Stack', 'AI-Assisted Development', 'React.js', 'Node.js', 'Supabase'],
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
      description: 'Excellence in Mathematics, Physics, and Chemistry.',
      status: 'completed',
    },
    {
      degree: 'Secondary Education',
      institution: 'Royal School',
      location: 'Mandur, Andhra Pradesh',
      duration: 'Jun 2022 – Mar 2023',
      score: 'Percentage: 93.3%',
      description: 'Strong foundational academic record.',
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
