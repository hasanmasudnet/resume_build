import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Plus, Trash2, Save, Eye } from "lucide-react";

interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github?: string;
  summary: string;
  experiences: {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements?: string[];
  }[];
  skills: {
    category: string;
    items: (string | { name: string; level: number })[];
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  projects?: {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }[];
  campaigns?: {
    name: string;
    result: string;
  }[];
  certifications?: {
    name: string;
    issuer: string;
    year: string;
  }[];
}

const defaultResumeData: ResumeData = {
  name: "Alex Morgan",
  title: "Professional Photographer",
  email: "alex.morgan@photography.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "www.alexmorganphotography.com",
  linkedin: "linkedin.com/in/alexmorganphoto",
  github: "",
  summary:
    "Award-winning photographer with over 8 years of experience specializing in portrait and landscape photography. Published in National Geographic and collaborated with major brands including Apple and Nike.",
  experiences: [
    {
      title: "Lead Photographer",
      company: "Aperture Studios",
      period: "2020 - Present",
      description:
        "Lead photographer for commercial and editorial shoots. Managed a team of 3 assistant photographers and coordinated with art directors to deliver high-quality visual content for major brands.",
      achievements: [],
    },
    {
      title: "Freelance Photographer",
      company: "Self-employed",
      period: "2017 - 2020",
      description:
        "Specialized in portrait and landscape photography. Published work in several national magazines and collaborated with local businesses for product photography.",
      achievements: [],
    },
    {
      title: "Photography Assistant",
      company: "Vision Media",
      period: "2015 - 2017",
      description:
        "Assisted senior photographers during studio and location shoots. Responsible for lighting setup, equipment maintenance, and post-production editing.",
      achievements: [],
    },
  ],
  skills: [
    {
      category: "Photography",
      items: [
        "Portrait Photography",
        "Landscape Photography",
        "Event Photography",
        "Product Photography",
      ],
    },
    {
      category: "Technical",
      items: [
        "Adobe Photoshop",
        "Adobe Lightroom",
        "Capture One",
        "Studio Lighting",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Fine Arts in Photography",
      institution: "California Institute of the Arts",
      year: "2015",
    },
    {
      degree: "Certificate in Digital Imaging",
      institution: "New York Film Academy",
      year: "2013",
    },
  ],
  projects: [],
  campaigns: [],
  certifications: [],
};

const developerResumeData: ResumeData = {
  name: "Alex Chen",
  title: "Senior Full Stack Developer",
  email: "alex.chen@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "www.alexchen.dev",
  linkedin: "linkedin.com/in/alexchen",
  github: "github.com/alexchen",
  summary:
    "Innovative Full Stack Developer with 6+ years of experience building scalable web applications and microservices. Specialized in React, Node.js, and cloud architecture with a focus on performance optimization and clean code practices.",
  experiences: [
    {
      title: "Senior Full Stack Developer",
      company: "TechNova Solutions",
      period: "2020 - Present",
      description:
        "Led development of a high-traffic SaaS platform serving 100K+ users. Implemented microservices architecture using Node.js, React, and AWS. Reduced page load time by 40% through code optimization and improved CI/CD pipeline efficiency by 35%.",
    },
    {
      title: "Full Stack Developer",
      company: "DataFlow Systems",
      period: "2018 - 2020",
      description:
        "Developed RESTful APIs and frontend components for data visualization dashboard. Utilized React, TypeScript, and Express.js. Implemented real-time data processing with WebSockets and Redis, handling 10K+ concurrent connections.",
    },
    {
      title: "Frontend Developer",
      company: "WebSphere Inc",
      period: "2016 - 2018",
      description:
        "Built responsive web applications using React and Redux. Collaborated with UX designers to implement pixel-perfect interfaces. Improved test coverage from 65% to 90% using Jest and React Testing Library.",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "Jest",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "Python",
        "GraphQL",
        "REST APIs",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      category: "DevOps & Tools",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Jira"],
    },
  ],
  education: [
    {
      degree: "M.S. Computer Science",
      institution: "Stanford University",
      year: "2016",
    },
    {
      degree: "B.S. Computer Science",
      institution: "University of California, Berkeley",
      year: "2014",
    },
  ],
  projects: [
    {
      name: "CloudScale",
      description:
        "Open-source auto-scaling solution for containerized applications",
      technologies: ["Go", "Kubernetes", "Prometheus"],
      link: "github.com/alexchen/cloudscale",
    },
    {
      name: "DataViz Platform",
      description:
        "Interactive data visualization dashboard with real-time analytics",
      technologies: ["React", "D3.js", "Node.js", "Socket.io"],
      link: "dataviz-platform.demo.com",
    },
    {
      name: "API Gateway",
      description: "High-performance API gateway with rate limiting and auth",
      technologies: ["Node.js", "Redis", "JWT", "Express"],
      link: "github.com/alexchen/api-gateway",
    },
  ],
  campaigns: [],
  certifications: [],
};

const marketingResumeData: ResumeData = {
  name: "Sarah Johnson",
  title: "Digital Marketing Strategist",
  email: "sarah.johnson@example.com",
  phone: "+1 (555) 123-4567",
  location: "New York, NY",
  website: "www.sarahjohnson.marketing",
  linkedin: "linkedin.com/in/sarahjohnson",
  github: "",
  summary:
    "Results-driven Digital Marketing Strategist with 7+ years of experience developing integrated marketing campaigns that drive engagement and conversion. Expertise in SEO/SEM, content strategy, social media marketing, and analytics with a proven track record of increasing ROI across multiple channels.",
  experiences: [
    {
      title: "Digital Marketing Manager",
      company: "GrowthLabs Marketing",
      period: "2020 - Present",
      description:
        "Lead digital marketing strategy for B2B SaaS clients with budgets ranging from $50K to $500K annually. Develop and execute multi-channel campaigns across paid search, social media, email, and content marketing.",
      achievements: [
        "Increased client conversion rates by an average of 35% through optimized landing pages and A/B testing",
        "Reduced customer acquisition costs by 28% while maintaining lead quality",
        "Grew organic traffic by 65% through comprehensive SEO strategy and content optimization",
      ],
    },
    {
      title: "SEO & Content Strategist",
      company: "Digital Presence Inc",
      period: "2018 - 2020",
      description:
        "Developed and implemented SEO and content strategies for e-commerce and B2B clients. Conducted keyword research, competitive analysis, and created editorial calendars to drive organic growth.",
      achievements: [
        "Achieved first page rankings for 75+ high-value keywords across client portfolios",
        "Created content strategy that increased blog traffic by 120% year-over-year",
        "Implemented technical SEO improvements resulting in 40% increase in crawl efficiency",
      ],
    },
    {
      title: "Social Media Specialist",
      company: "BrandConnect Agency",
      period: "2016 - 2018",
      description:
        "Managed social media presence for 10+ clients across multiple industries. Created engaging content, developed paid social campaigns, and analyzed performance metrics to optimize strategy.",
      achievements: [
        "Grew combined social following by 200K+ across all client accounts",
        "Achieved 3.5% average engagement rate (industry average: 1.2%)",
        "Managed $15K monthly ad spend with average ROAS of 4.2x",
      ],
    },
  ],
  skills: [
    {
      category: "Digital Marketing",
      items: [
        "SEO/SEM",
        "Content Strategy",
        "Social Media Marketing",
        "Email Marketing",
        "PPC Advertising",
        "Marketing Automation",
      ],
    },
    {
      category: "Analytics & Tools",
      items: [
        "Google Analytics",
        "Google Ads",
        "Facebook Ads Manager",
        "HubSpot",
        "SEMrush",
        "Mailchimp",
      ],
    },
    {
      category: "Additional Skills",
      items: [
        "A/B Testing",
        "Conversion Optimization",
        "Marketing Funnel Design",
        "Brand Positioning",
        "Campaign Management",
      ],
    },
  ],
  education: [
    {
      degree: "MBA, Marketing",
      institution: "New York University",
      year: "2016",
    },
    {
      degree: "B.S. Business Administration",
      institution: "Boston University",
      year: "2014",
    },
  ],
  projects: [],
  campaigns: [
    {
      name: "TechSolutions Product Launch",
      result: "Generated 2,500+ qualified leads with 18% conversion rate",
    },
    {
      name: "RetailGiant Holiday Campaign",
      result: "Achieved 245% ROI with 32% YoY revenue increase",
    },
    {
      name: "HealthApp User Acquisition",
      result: "Reduced CAC by 40% while scaling to 10K+ monthly users",
    },
    {
      name: "FinanceGroup Rebranding",
      result: "Increased brand awareness by 65% and web traffic by 83%",
    },
  ],
  certifications: [],
};

const financeResumeData: ResumeData = {
  name: "Michael Reynolds",
  title: "Senior Financial Analyst",
  email: "michael.reynolds@example.com",
  phone: "+1 (555) 123-4567",
  location: "Chicago, IL",
  website: "www.michaelreynolds.finance",
  linkedin: "linkedin.com/in/michaelreynolds",
  github: "",
  summary:
    "Detail-oriented Financial Analyst with 8+ years of experience in financial modeling, forecasting, and investment analysis. Proven track record of identifying cost-saving opportunities and optimizing financial performance. Skilled in financial reporting, budgeting, and strategic planning with expertise in the technology and healthcare sectors.",
  experiences: [
    {
      title: "Senior Financial Analyst",
      company: "Global Investments Corp",
      period: "2019 - Present",
      description:
        "Lead financial planning and analysis for technology sector portfolio ($250M AUM). Develop complex financial models to evaluate investment opportunities and optimize asset allocation. Present quarterly performance reports to executive leadership and key stakeholders. Implemented process improvements that reduced reporting time by 35% while increasing accuracy.",
    },
    {
      title: "Financial Analyst",
      company: "HealthTech Partners",
      period: "2016 - 2019",
      description:
        "Conducted financial analysis and due diligence for healthcare technology investments. Created detailed financial models and valuation analyses for potential acquisitions. Monitored performance of existing investments and prepared monthly financial reports. Identified $1.2M in cost-saving opportunities across portfolio companies.",
    },
    {
      title: "Junior Financial Analyst",
      company: "First Capital Management",
      period: "2014 - 2016",
      description:
        "Assisted in preparation of financial statements, budgets, and forecasts. Performed variance analysis and identified trends in financial data. Supported senior analysts in due diligence processes and financial modeling. Automated reporting processes that improved efficiency by 25%.",
    },
  ],
  skills: [
    {
      category: "Financial Analysis",
      items: [
        "Financial Modeling",
        "Forecasting",
        "Budgeting",
        "Variance Analysis",
        "Investment Analysis",
        "Risk Assessment",
      ],
    },
    {
      category: "Technical Skills",
      items: [
        "Excel (Advanced)",
        "PowerBI",
        "Tableau",
        "SQL",
        "Bloomberg Terminal",
        "SAP",
      ],
    },
    {
      category: "Additional Skills",
      items: [
        "Strategic Planning",
        "Data Analysis",
        "Financial Reporting",
        "Presentation Skills",
        "Project Management",
      ],
    },
  ],
  education: [
    {
      degree: "MBA, Finance",
      institution: "University of Chicago Booth School of Business",
      year: "2014",
    },
    {
      degree: "B.S. Finance",
      institution: "University of Illinois at Urbana-Champaign",
      year: "2012",
    },
  ],
  projects: [],
  campaigns: [],
  certifications: [
    {
      name: "Chartered Financial Analyst (CFA)",
      issuer: "CFA Institute",
      year: "2016",
    },
    {
      name: "Financial Modeling & Valuation Analyst (FMVA)",
      issuer: "Corporate Finance Institute",
      year: "2015",
    },
    {
      name: "Financial Risk Manager (FRM)",
      issuer: "Global Association of Risk Professionals",
      year: "2017",
    },
  ],
};

// Creative Design resume data
const creativeDesignResumeData: ResumeData = {
  name: "Alex Morgan",
  title: "Graphic Designer & Illustrator",
  email: "alex.morgan@creative.com",
  phone: "+1 (555) 123-4567",
  location: "Portland, OR",
  website: "www.alexmorgan.design",
  linkedin: "linkedin.com/in/alexmorgandesign",
  github: "",
  summary:
    "Versatile Graphic Designer and Illustrator with 7+ years of experience creating compelling visual identities and illustrations for brands across various industries. Passionate about combining traditional art techniques with digital innovation to deliver unique, impactful designs that tell stories and engage audiences.",
  experiences: [
    {
      title: "Senior Graphic Designer",
      company: "Creative Pulse Agency",
      period: "2020 - Present",
      description:
        "Lead designer for branding and marketing campaigns for clients in tech, retail, and entertainment. Develop visual identities, marketing materials, and digital assets. Collaborate with creative directors and clients to translate brand vision into compelling visual solutions. Mentor junior designers and oversee quality control for all design deliverables.",
    },
    {
      title: "Graphic Designer & Illustrator",
      company: "Artisan Design Studio",
      period: "2017 - 2020",
      description:
        "Created illustrations and designs for print and digital media. Developed brand identities, packaging designs, and editorial illustrations. Collaborated with copywriters and marketing teams to create cohesive visual storytelling. Managed multiple projects simultaneously while meeting tight deadlines.",
    },
    {
      title: "Junior Designer",
      company: "Horizon Media Group",
      period: "2015 - 2017",
      description:
        "Assisted senior designers with layout and production tasks. Created social media graphics, web banners, and marketing collateral. Participated in brainstorming sessions and concept development. Maintained brand consistency across various platforms and materials.",
    },
  ],
  skills: [
    {
      category: "Design",
      items: [
        "Brand Identity",
        "Typography",
        "Illustration",
        "Packaging Design",
        "Editorial Design",
        "UI/UX Design",
      ],
    },
    {
      category: "Technical",
      items: [
        "Adobe Creative Suite",
        "Figma",
        "Procreate",
        "Sketch",
        "HTML/CSS",
        "Motion Graphics",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Fine Arts, Graphic Design",
      institution: "Rhode Island School of Design",
      year: "2015",
    },
    {
      degree: "Certificate in Digital Illustration",
      institution: "School of Visual Arts",
      year: "2016",
    },
  ],
  projects: [],
  campaigns: [],
  certifications: [],
};

// Hospitality resume data
const hospitalityResumeData: ResumeData = {
  name: "Michael Rodriguez",
  title: "Hotel General Manager",
  email: "michael.rodriguez@hospitality.com",
  phone: "+1 (555) 123-4567",
  location: "Miami, FL",
  website: "www.michaelrodriguez.hospitality",
  linkedin: "linkedin.com/in/michaelrodriguez",
  github: "",
  summary:
    "Dynamic Hotel General Manager with 10+ years of experience in luxury hospitality management. Proven track record of increasing revenue, enhancing guest satisfaction, and optimizing operational efficiency. Skilled in team leadership, budget management, and implementing innovative service strategies that exceed guest expectations.",
  experiences: [
    {
      title: "General Manager",
      company: "Ocean View Grand Resort & Spa",
      period: "2018 - Present",
      description:
        "Oversee all operations for a 350-room luxury beachfront resort with 200+ staff members. Increased annual revenue by 22% through strategic pricing and marketing initiatives. Improved guest satisfaction scores from 85% to 94% by implementing enhanced service protocols. Managed $15M annual operating budget while reducing costs by 8% through efficiency improvements.",
    },
    {
      title: "Assistant General Manager",
      company: "Metropolitan Luxury Hotel",
      period: "2015 - 2018",
      description:
        "Directed daily operations for a 275-room urban luxury hotel. Supervised department heads and ensured seamless coordination between front office, housekeeping, F&B, and maintenance. Implemented new staff training program that reduced turnover by 25%. Managed guest relations and resolved complex issues to maintain high satisfaction ratings.",
    },
    {
      title: "Front Office Manager",
      company: "Parkside Hotel & Conference Center",
      period: "2012 - 2015",
      description:
        "Managed front desk operations, reservations, and guest services for a 200-room business hotel. Supervised and trained a team of 15 front desk agents and concierge staff. Implemented new check-in/check-out procedures that improved efficiency by 30%. Increased upselling revenue by 40% through staff incentive programs.",
    },
  ],
  skills: [
    {
      category: "Management",
      items: [
        "Revenue Management",
        "Budget Planning",
        "Team Leadership",
        "Strategic Planning",
        "Crisis Management",
        "Contract Negotiation",
      ],
    },
    {
      category: "Operations",
      items: [
        "Front Office Operations",
        "F&B Management",
        "Housekeeping Standards",
        "Inventory Control",
        "Facility Maintenance",
        "Event Coordination",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science, Hospitality Management",
      institution: "Cornell University, School of Hotel Administration",
      year: "2012",
    },
    {
      degree: "Associate Degree, Culinary Arts",
      institution: "Culinary Institute of America",
      year: "2010",
    },
  ],
  projects: [],
  campaigns: [],
  certifications: [
    {
      name: "Certified Hotel Administrator (CHA)",
      issuer: "American Hotel & Lodging Educational Institute",
      year: "2016",
    },
    {
      name: "Revenue Management Certification",
      issuer: "Hotel Revenue Management Academy",
      year: "2017",
    },
    {
      name: "Food Safety Manager Certification",
      issuer: "ServSafe",
      year: "2019",
    },
  ],
};

// Healthcare resume data
const healthcareResumeData: ResumeData = {
  name: "Dr. Emily Chen",
  title: "Registered Nurse Practitioner",
  email: "emily.chen@healthcare.org",
  phone: "+1 (555) 123-4567",
  location: "Boston, MA",
  website: "www.emilychen.healthcare",
  linkedin: "linkedin.com/in/emilychen",
  github: "",
  summary:
    "Compassionate Nurse Practitioner with 8+ years of experience in critical care and family medicine. Dedicated to providing patient-centered care with a focus on preventative health and chronic disease management. Strong clinical skills combined with excellent communication abilities to deliver comprehensive healthcare services.",
  experiences: [
    {
      title: "Nurse Practitioner",
      company: "Boston Medical Center",
      period: "2019 - Present",
      description:
        "Provide comprehensive primary care services to diverse patient population. Conduct physical examinations, diagnose and treat acute and chronic conditions, and prescribe medications. Collaborate with interdisciplinary healthcare team to develop and implement patient care plans. Educate patients on disease prevention and health maintenance.",
    },
    {
      title: "Registered Nurse - ICU",
      company: "Massachusetts General Hospital",
      period: "2015 - 2019",
      description:
        "Delivered critical care to patients with complex medical conditions. Monitored and assessed patient status, administered medications and treatments, and documented care. Collaborated with physicians and specialists to coordinate patient care. Served as preceptor for new nursing staff and students.",
    },
    {
      title: "Staff Nurse",
      company: "Community Health Center",
      period: "2013 - 2015",
      description:
        "Provided primary care services to underserved populations. Conducted patient assessments, administered vaccinations, and assisted with minor procedures. Educated patients on health promotion and disease prevention. Participated in community outreach programs.",
    },
  ],
  skills: [
    {
      category: "Clinical Skills",
      items: [
        "Physical Assessment",
        "Diagnostic Interpretation",
        "Medication Management",
        "Wound Care",
        "IV Therapy",
        "Critical Care",
      ],
    },
    {
      category: "Technical Skills",
      items: [
        "Electronic Health Records",
        "Medical Equipment Operation",
        "Telehealth Services",
        "Clinical Documentation",
        "Patient Monitoring Systems",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Patient Education",
        "Interdisciplinary Collaboration",
        "Crisis Management",
        "Empathetic Communication",
        "Cultural Competence",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Science in Nursing",
      institution: "Boston University",
      year: "2015",
    },
    {
      degree: "Bachelor of Science in Nursing",
      institution: "University of Massachusetts",
      year: "2012",
    },
  ],
  projects: [],
  campaigns: [],
  certifications: [
    {
      name: "Family Nurse Practitioner (FNP-BC)",
      issuer: "American Nurses Credentialing Center",
      year: "2015",
    },
    {
      name: "Advanced Cardiovascular Life Support (ACLS)",
      issuer: "American Heart Association",
      year: "2021",
    },
    {
      name: "Basic Life Support (BLS)",
      issuer: "American Heart Association",
      year: "2021",
    },
  ],
};

// Education resume data
const educationResumeData: ResumeData = {
  name: "Professor James Wilson",
  title: "High School Science Teacher",
  email: "james.wilson@education.org",
  phone: "+1 (555) 123-4567",
  location: "Portland, OR",
  website: "www.jameswilson.education",
  linkedin: "linkedin.com/in/jameswilson",
  github: "",
  summary:
    "Dedicated Science Teacher with 10+ years of experience creating engaging learning environments for high school students. Specialized in Biology and Chemistry with a focus on inquiry-based learning and STEM integration. Committed to fostering critical thinking skills and scientific literacy through innovative teaching methods and technology integration.",
  experiences: [
    {
      title: "Science Department Chair",
      company: "Lincoln High School",
      period: "2019 - Present",
      description:
        "Lead a department of 8 science teachers, developing curriculum aligned with state standards and Next Generation Science Standards. Implement project-based learning initiatives and coordinate STEM programs. Mentor new teachers and facilitate professional development workshops. Increased AP science enrollment by 35% and improved average AP scores from 3.2 to 4.1.",
    },
    {
      title: "Biology & Chemistry Teacher",
      company: "Roosevelt High School",
      period: "2014 - 2019",
      description:
        "Taught Biology, Chemistry, and AP Biology to grades 9-12. Developed and implemented laboratory activities and research projects. Created differentiated instruction to meet diverse learning needs. Served as Science Olympiad coach, leading team to state finals three consecutive years.",
    },
    {
      title: "Student Teacher",
      company: "Washington Middle School",
      period: "2013 - 2014",
      description:
        "Completed teaching practicum for grades 6-8 science classes. Designed and delivered lesson plans under mentor teacher supervision. Implemented inquiry-based learning strategies and technology integration. Participated in parent-teacher conferences and school community events.",
    },
  ],
  skills: [
    {
      category: "Teaching Methods",
      items: [
        "Inquiry-Based Learning",
        "Project-Based Learning",
        "Differentiated Instruction",
        "Formative Assessment",
        "Blended Learning",
        "STEM Integration",
      ],
    },
    {
      category: "Technical Skills",
      items: [
        "Laboratory Management",
        "Google Classroom",
        "Canvas LMS",
        "Digital Assessment Tools",
        "Virtual Lab Simulations",
        "Data Analysis",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Classroom Management",
        "Student Mentoring",
        "Parent Communication",
        "Curriculum Development",
        "Team Collaboration",
        "Public Speaking",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Education, Science Education",
      institution: "University of Oregon",
      year: "2013",
    },
    {
      degree: "Bachelor of Science, Biology",
      institution: "Oregon State University",
      year: "2011",
    },
  ],
  projects: [],
  campaigns: [],
  certifications: [
    {
      name: "State Teaching License - Science (6-12)",
      issuer: "Oregon Department of Education",
      year: "2013",
    },
    {
      name: "AP Biology Certified Instructor",
      issuer: "College Board",
      year: "2015",
    },
    {
      name: "Google Certified Educator Level 2",
      issuer: "Google for Education",
      year: "2018",
    },
  ],
};

const templates = [
  { id: "default", name: "Classic", data: defaultResumeData },
  { id: "developer", name: "Developer", data: developerResumeData },
  { id: "marketing", name: "Marketing", data: marketingResumeData },
  { id: "finance", name: "Finance", data: financeResumeData },
  { id: "healthcare", name: "Healthcare", data: healthcareResumeData },
  { id: "education", name: "Education", data: educationResumeData },
  {
    id: "creative-design",
    name: "Creative Design",
    data: creativeDesignResumeData,
  },
  { id: "hospitality", name: "Hospitality", data: hospitalityResumeData },
];

const ResumeAdmin = () => {
  const navigate = useNavigate();
  const [activeTemplate, setActiveTemplate] = useState(templates[0].id);
  const [resumeData, setResumeData] = useState<ResumeData>(templates[0].data);
  const [activeTab, setActiveTab] = useState("personal");

  // Load template data when template changes
  const handleTemplateChange = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      setActiveTemplate(templateId);
      setResumeData(template.data);
    }
  };

  // Update personal info
  const handlePersonalInfoChange = (field: keyof ResumeData, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Experience section handlers
  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          title: "",
          company: "",
          period: "",
          description: "",
          achievements: [],
        },
      ],
    }));
  };

  const updateExperience = (index: number, field: string, value: string) => {
    setResumeData((prev) => {
      const updatedExperiences = [...prev.experiences];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [field]: value,
      };
      return { ...prev, experiences: updatedExperiences };
    });
  };

  const removeExperience = (index: number) => {
    setResumeData((prev) => {
      const updatedExperiences = [...prev.experiences];
      updatedExperiences.splice(index, 1);
      return { ...prev, experiences: updatedExperiences };
    });
  };

  // Achievement handlers
  const addAchievement = (experienceIndex: number) => {
    setResumeData((prev) => {
      const updatedExperiences = [...prev.experiences];
      const experience = updatedExperiences[experienceIndex];
      if (!experience.achievements) {
        experience.achievements = [];
      }
      experience.achievements.push("");
      return { ...prev, experiences: updatedExperiences };
    });
  };

  const updateAchievement = (
    experienceIndex: number,
    achievementIndex: number,
    value: string,
  ) => {
    setResumeData((prev) => {
      const updatedExperiences = [...prev.experiences];
      const experience = updatedExperiences[experienceIndex];
      if (experience.achievements) {
        experience.achievements[achievementIndex] = value;
      }
      return { ...prev, experiences: updatedExperiences };
    });
  };

  const removeAchievement = (
    experienceIndex: number,
    achievementIndex: number,
  ) => {
    setResumeData((prev) => {
      const updatedExperiences = [...prev.experiences];
      const experience = updatedExperiences[experienceIndex];
      if (experience.achievements) {
        experience.achievements.splice(achievementIndex, 1);
      }
      return { ...prev, experiences: updatedExperiences };
    });
  };

  // Skills section handlers
  const addSkillCategory = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, { category: "", items: [] }],
    }));
  };

  const updateSkillCategory = (index: number, value: string) => {
    setResumeData((prev) => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index] = {
        ...updatedSkills[index],
        category: value,
      };
      return { ...prev, skills: updatedSkills };
    });
  };

  const removeSkillCategory = (index: number) => {
    setResumeData((prev) => {
      const updatedSkills = [...prev.skills];
      updatedSkills.splice(index, 1);
      return { ...prev, skills: updatedSkills };
    });
  };

  const addSkill = (categoryIndex: number) => {
    setResumeData((prev) => {
      const updatedSkills = [...prev.skills];
      // If creative template, add skill with level
      if (activeTemplate === "creative") {
        updatedSkills[categoryIndex].items.push({ name: "", level: 80 });
      } else {
        updatedSkills[categoryIndex].items.push("");
      }
      return { ...prev, skills: updatedSkills };
    });
  };

  const updateSkill = (
    categoryIndex: number,
    skillIndex: number,
    value: string | { name: string; level: number },
  ) => {
    setResumeData((prev) => {
      const updatedSkills = [...prev.skills];
      updatedSkills[categoryIndex].items[skillIndex] = value;
      return { ...prev, skills: updatedSkills };
    });
  };

  const removeSkill = (categoryIndex: number, skillIndex: number) => {
    setResumeData((prev) => {
      const updatedSkills = [...prev.skills];
      updatedSkills[categoryIndex].items.splice(skillIndex, 1);
      return { ...prev, skills: updatedSkills };
    });
  };

  // Education section handlers
  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", institution: "", year: "" }],
    }));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    setResumeData((prev) => {
      const updatedEducation = [...prev.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [field]: value,
      };
      return { ...prev, education: updatedEducation };
    });
  };

  const removeEducation = (index: number) => {
    setResumeData((prev) => {
      const updatedEducation = [...prev.education];
      updatedEducation.splice(index, 1);
      return { ...prev, education: updatedEducation };
    });
  };

  // Projects section handlers (for developer template)
  const addProject = () => {
    setResumeData((prev) => {
      const projects = prev.projects || [];
      return {
        ...prev,
        projects: [
          ...projects,
          { name: "", description: "", technologies: [], link: "" },
        ],
      };
    });
  };

  const updateProject = (index: number, field: string, value: string) => {
    setResumeData((prev) => {
      const projects = [...(prev.projects || [])];
      if (field === "technologies") {
        projects[index] = {
          ...projects[index],
          technologies: value.split(",").map((tech) => tech.trim()),
        };
      } else {
        projects[index] = {
          ...projects[index],
          [field]: value,
        };
      }
      return { ...prev, projects };
    });
  };

  const removeProject = (index: number) => {
    setResumeData((prev) => {
      const projects = [...(prev.projects || [])];
      projects.splice(index, 1);
      return { ...prev, projects };
    });
  };

  // Campaigns section handlers (for marketing template)
  const addCampaign = () => {
    setResumeData((prev) => {
      const campaigns = prev.campaigns || [];
      return {
        ...prev,
        campaigns: [...campaigns, { name: "", result: "" }],
      };
    });
  };

  const updateCampaign = (index: number, field: string, value: string) => {
    setResumeData((prev) => {
      const campaigns = [...(prev.campaigns || [])];
      campaigns[index] = {
        ...campaigns[index],
        [field]: value,
      };
      return { ...prev, campaigns };
    });
  };

  const removeCampaign = (index: number) => {
    setResumeData((prev) => {
      const campaigns = [...(prev.campaigns || [])];
      campaigns.splice(index, 1);
      return { ...prev, campaigns };
    });
  };

  // Certifications section handlers (for finance template)
  const addCertification = () => {
    setResumeData((prev) => {
      const certifications = prev.certifications || [];
      return {
        ...prev,
        certifications: [...certifications, { name: "", issuer: "", year: "" }],
      };
    });
  };

  const updateCertification = (index: number, field: string, value: string) => {
    setResumeData((prev) => {
      const certifications = [...(prev.certifications || [])];
      certifications[index] = {
        ...certifications[index],
        [field]: value,
      };
      return { ...prev, certifications };
    });
  };

  const removeCertification = (index: number) => {
    setResumeData((prev) => {
      const certifications = [...(prev.certifications || [])];
      certifications.splice(index, 1);
      return { ...prev, certifications };
    });
  };

  // Save resume data to localStorage
  const saveResumeData = () => {
    localStorage.setItem(
      `resume_${activeTemplate}`,
      JSON.stringify(resumeData),
    );
    alert("Resume data saved successfully!");
  };

  // Preview the resume
  const previewResume = () => {
    localStorage.setItem(
      `resume_${activeTemplate}`,
      JSON.stringify(resumeData),
    );
    navigate(`/resume/${activeTemplate === "default" ? "" : activeTemplate}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold mb-6">Resume Dashboard</h1>

        {/* Template selector */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-3">Select Template:</h2>
          <div className="flex flex-wrap gap-2">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateChange(template.id)}
                className={`px-4 py-2 rounded ${
                  activeTemplate === template.id
                    ? template.id === "marketing"
                      ? "bg-teal-600 text-white"
                      : template.id === "finance"
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-900 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {template.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content editor tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            {activeTemplate === "developer" && (
              <TabsTrigger value="projects">Projects</TabsTrigger>
            )}
            {activeTemplate === "marketing" && (
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            )}
            {activeTemplate === "finance" && (
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            )}
          </TabsList>

          {/* Personal Info Tab */}
          <TabsContent value="personal" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  value={resumeData.name}
                  onChange={(e) =>
                    handlePersonalInfoChange("name", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input
                  value={resumeData.title}
                  onChange={(e) =>
                    handlePersonalInfoChange("title", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  value={resumeData.email}
                  onChange={(e) =>
                    handlePersonalInfoChange("email", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input
                  value={resumeData.phone}
                  onChange={(e) =>
                    handlePersonalInfoChange("phone", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <Input
                  value={resumeData.location}
                  onChange={(e) =>
                    handlePersonalInfoChange("location", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Website
                </label>
                <Input
                  value={resumeData.website}
                  onChange={(e) =>
                    handlePersonalInfoChange("website", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  LinkedIn
                </label>
                <Input
                  value={resumeData.linkedin}
                  onChange={(e) =>
                    handlePersonalInfoChange("linkedin", e.target.value)
                  }
                />
              </div>
              {activeTemplate === "developer" && (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    GitHub
                  </label>
                  <Input
                    value={resumeData.github || ""}
                    onChange={(e) =>
                      handlePersonalInfoChange("github", e.target.value)
                    }
                  />
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Professional Summary
              </label>
              <Textarea
                value={resumeData.summary}
                onChange={(e) =>
                  handlePersonalInfoChange("summary", e.target.value)
                }
                rows={4}
              />
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            {resumeData.experiences.map((exp, index) => (
              <div key={index} className="p-4 border rounded-md bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Experience #{index + 1}</h3>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeExperience(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Title
                    </label>
                    <Input
                      value={exp.title}
                      onChange={(e) =>
                        updateExperience(index, "title", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Company
                    </label>
                    <Input
                      value={exp.company}
                      onChange={(e) =>
                        updateExperience(index, "company", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Period
                    </label>
                    <Input
                      value={exp.period}
                      onChange={(e) =>
                        updateExperience(index, "period", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <Textarea
                    value={exp.description}
                    onChange={(e) =>
                      updateExperience(index, "description", e.target.value)
                    }
                    rows={3}
                  />
                </div>

                {/* Achievements section (mainly for marketing template) */}
                {(activeTemplate === "marketing" ||
                  exp.achievements?.length > 0) && (
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium">
                        Key Achievements
                      </label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addAchievement(index)}
                      >
                        <Plus className="h-3 w-3 mr-1" /> Add Achievement
                      </Button>
                    </div>
                    {exp.achievements?.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-center gap-2 mt-2"
                      >
                        <Input
                          value={achievement}
                          onChange={(e) =>
                            updateAchievement(
                              index,
                              achievementIndex,
                              e.target.value,
                            )
                          }
                          placeholder="Achievement"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            removeAchievement(index, achievementIndex)
                          }
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button onClick={addExperience} className="mt-2">
              <Plus className="h-4 w-4 mr-2" /> Add Experience
            </Button>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            {resumeData.skills.map((skillCategory, categoryIndex) => (
              <div
                key={categoryIndex}
                className="p-4 border rounded-md bg-gray-50"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="w-full mr-2">
                    <label className="block text-sm font-medium mb-1">
                      Category Name
                    </label>
                    <Input
                      value={skillCategory.category}
                      onChange={(e) =>
                        updateSkillCategory(categoryIndex, e.target.value)
                      }
                    />
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeSkillCategory(categoryIndex)}
                    className="mt-6"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-center">
                    <label className="block text-sm font-medium">Skills</label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addSkill(categoryIndex)}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Add Skill
                    </Button>
                  </div>

                  {skillCategory.items.map((skill, skillIndex) => {
                    const skillName =
                      typeof skill === "object" && "name" in skill
                        ? skill.name
                        : skill;
                    const skillLevel =
                      typeof skill === "object" && "level" in skill
                        ? skill.level
                        : null;

                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 mt-2"
                      >
                        <div className="flex-1">
                          <Input
                            value={skillName}
                            onChange={(e) => {
                              if (
                                typeof skill === "object" &&
                                "level" in skill
                              ) {
                                // Update name while preserving level
                                const updatedSkill = {
                                  name: e.target.value,
                                  level: skill.level,
                                };
                                updateSkill(
                                  categoryIndex,
                                  skillIndex,
                                  updatedSkill,
                                );
                              } else {
                                updateSkill(
                                  categoryIndex,
                                  skillIndex,
                                  e.target.value,
                                );
                              }
                            }}
                            placeholder="Skill"
                          />
                        </div>

                        {activeTemplate === "creative" && (
                          <div className="w-20">
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              value={skillLevel !== null ? skillLevel : ""}
                              onChange={(e) => {
                                const level = parseInt(e.target.value) || 0;
                                const updatedSkill = {
                                  name:
                                    typeof skill === "object" && "name" in skill
                                      ? skill.name
                                      : String(skill),
                                  level: level,
                                };
                                updateSkill(
                                  categoryIndex,
                                  skillIndex,
                                  updatedSkill,
                                );
                              }}
                              placeholder="%"
                            />
                          </div>
                        )}

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSkill(categoryIndex, skillIndex)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <Button onClick={addSkillCategory} className="mt-2">
              <Plus className="h-4 w-4 mr-2" /> Add Skill Category
            </Button>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="p-4 border rounded-md bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Education #{index + 1}</h3>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeEducation(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Degree
                    </label>
                    <Input
                      value={edu.degree}
                      onChange={(e) =>
                        updateEducation(index, "degree", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Institution
                    </label>
                    <Input
                      value={edu.institution}
                      onChange={(e) =>
                        updateEducation(index, "institution", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Year
                    </label>
                    <Input
                      value={edu.year}
                      onChange={(e) =>
                        updateEducation(index, "year", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button onClick={addEducation} className="mt-2">
              <Plus className="h-4 w-4 mr-2" /> Add Education
            </Button>
          </TabsContent>

          {/* Projects Tab (Developer) */}
          {activeTemplate === "developer" && (
            <TabsContent value="projects" className="space-y-6">
              {resumeData.projects?.map((project, index) => (
                <div key={index} className="p-4 border rounded-md bg-gray-50">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Project #{index + 1}</h3>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeProject(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Project Name
                      </label>
                      <Input
                        value={project.name}
                        onChange={(e) =>
                          updateProject(index, "name", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Link (optional)
                      </label>
                      <Input
                        value={project.link || ""}
                        onChange={(e) =>
                          updateProject(index, "link", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Description
                    </label>
                    <Textarea
                      value={project.description}
                      onChange={(e) =>
                        updateProject(index, "description", e.target.value)
                      }
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Technologies (comma-separated)
                    </label>
                    <Input
                      value={project.technologies.join(", ")}
                      onChange={(e) =>
                        updateProject(index, "technologies", e.target.value)
                      }
                      placeholder="React, Node.js, TypeScript"
                    />
                  </div>
                </div>
              ))}
              <Button onClick={addProject} className="mt-2">
                <Plus className="h-4 w-4 mr-2" /> Add Project
              </Button>
            </TabsContent>
          )}

          {/* Campaigns Tab (Marketing) */}
          {activeTemplate === "marketing" && (
            <TabsContent value="campaigns" className="space-y-6">
              {resumeData.campaigns?.map((campaign, index) => (
                <div key={index} className="p-4 border rounded-md bg-gray-50">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Campaign #{index + 1}</h3>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeCampaign(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Campaign Name
                      </label>
                      <Input
                        value={campaign.name}
                        onChange={(e) =>
                          updateCampaign(index, "name", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Result
                      </label>
                      <Input
                        value={campaign.result}
                        onChange={(e) =>
                          updateCampaign(index, "result", e.target.value)
                        }
                        placeholder="Generated 2,500+ qualified leads with 18% conversion rate"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button onClick={addCampaign} className="mt-2">
                <Plus className="h-4 w-4 mr-2" /> Add Campaign
              </Button>
            </TabsContent>
          )}

          {/* Certifications Tab (Finance) */}
          {activeTemplate === "finance" && (
            <TabsContent value="certifications" className="space-y-6">
              {resumeData.certifications?.map((cert, index) => (
                <div key={index} className="p-4 border rounded-md bg-gray-50">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Certification #{index + 1}</h3>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeCertification(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        Certification Name
                      </label>
                      <Input
                        value={cert.name}
                        onChange={(e) =>
                          updateCertification(index, "name", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Year
                      </label>
                      <Input
                        value={cert.year}
                        onChange={(e) =>
                          updateCertification(index, "year", e.target.value)
                        }
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label className="block text-sm font-medium mb-1">
                        Issuing Organization
                      </label>
                      <Input
                        value={cert.issuer}
                        onChange={(e) =>
                          updateCertification(index, "issuer", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button onClick={addCertification} className="mt-2">
                <Plus className="h-4 w-4 mr-2" /> Add Certification
              </Button>
            </TabsContent>
          )}
        </Tabs>

        {/* Action buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <Button variant="outline" onClick={saveResumeData}>
            <Save className="h-4 w-4 mr-2" /> Save
          </Button>
          <Button onClick={previewResume}>
            <Eye className="h-4 w-4 mr-2" /> Preview
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeAdmin;
