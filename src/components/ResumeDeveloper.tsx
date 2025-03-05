import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Code,
  Server,
  Database,
} from "lucide-react";

interface ResumeTemplateProps {
  name?: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary?: string;
  experiences?: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  skills?: {
    category: string;
    items: string[];
  }[];
  education?: {
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
}

const ResumeDeveloper = ({
  name = "Alex Chen",
  title = "Senior Full Stack Developer",
  email = "alex.chen@example.com",
  phone = "+1 (555) 123-4567",
  location = "San Francisco, CA",
  website = "www.alexchen.dev",
  linkedin = "linkedin.com/in/alexchen",
  github = "github.com/alexchen",
  summary = "Innovative Full Stack Developer with 6+ years of experience building scalable web applications and microservices. Specialized in React, Node.js, and cloud architecture with a focus on performance optimization and clean code practices.",
  experiences = [
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
  skills = [
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
  education = [
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
  projects = [
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
}: ResumeTemplateProps) => {
  return (
    <div className="max-w-[8.5in] mx-auto bg-white p-8 shadow-sm print:shadow-none print:p-0">
      {/* Header with tech-inspired styling */}
      <header className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <h2 className="text-xl text-gray-600 mt-1">{title}</h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-gray-500" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <Phone className="h-4 w-4 text-gray-500" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-md">
            <Linkedin className="h-4 w-4 text-gray-700" />
            <span>{linkedin}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-md">
            <Github className="h-4 w-4 text-gray-700" />
            <span>{github}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-md">
            <Globe className="h-4 w-4 text-gray-700" />
            <span>{website}</span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Code className="h-5 w-5 text-gray-700" /> Professional Summary
        </h3>
        <p className="text-gray-700">{summary}</p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Server className="h-5 w-5 text-gray-700" /> Technical Skills
        </h3>
        <div className="space-y-4">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h4 className="font-medium text-gray-800 mb-2">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Database className="h-5 w-5 text-gray-700" /> Professional Experience
        </h3>
        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4 pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                  <p className="text-gray-700">{exp.company}</p>
                </div>
                <span className="text-sm bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Code className="h-5 w-5 text-gray-700" /> Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-md">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-900">{project.name}</h4>
                {project.link && (
                  <a
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    {project.link}
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Database className="h-5 w-5 text-gray-700" /> Education
        </h3>
        <div className="space-y-3">
          {education.map((edu, index) => (
            <div key={index} className="flex justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                <p className="text-sm text-gray-700">{edu.institution}</p>
              </div>
              <span className="text-sm text-gray-500">{edu.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Print button - only visible on screen, not when printing */}
      <div className="mt-8 text-center print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm"
        >
          Print Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeDeveloper;
