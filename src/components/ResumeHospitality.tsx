import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Utensils,
  Star,
  Award,
  Users,
} from "lucide-react";

interface ResumeTemplateProps {
  name?: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
  linkedin?: string;
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
  certifications?: {
    name: string;
    issuer: string;
    year: string;
  }[];
  languages?: {
    language: string;
    proficiency: string;
  }[];
}

const ResumeHospitality = ({
  name = "Michael Rodriguez",
  title = "Hotel General Manager",
  email = "michael.rodriguez@hospitality.com",
  phone = "+1 (555) 123-4567",
  location = "Miami, FL",
  website = "www.michaelrodriguez.hospitality",
  linkedin = "linkedin.com/in/michaelrodriguez",
  summary = "Dynamic Hotel General Manager with 10+ years of experience in luxury hospitality management. Proven track record of increasing revenue, enhancing guest satisfaction, and optimizing operational efficiency. Skilled in team leadership, budget management, and implementing innovative service strategies that exceed guest expectations.",
  experiences = [
    {
      title: "General Manager",
      company: "Ocean View Grand Resort & Spa",
      period: "2018 - Present",
      description:
        "Oversee all operations for a 350-room luxury beachfront resort with 200+ staff members. Increased annual revenue by 22% through strategic pricing and marketing initiatives. Improved guest satisfaction scores from 85% to 94% by implementing enhanced service protocols. Managed $15M annual operating budget while reducing costs by 8% through efficiency improvements. Led complete renovation of restaurant and spa facilities, resulting in 30% increase in F&B revenue.",
    },
    {
      title: "Assistant General Manager",
      company: "Metropolitan Luxury Hotel",
      period: "2015 - 2018",
      description:
        "Directed daily operations for a 275-room urban luxury hotel. Supervised department heads and ensured seamless coordination between front office, housekeeping, F&B, and maintenance. Implemented new staff training program that reduced turnover by 25%. Managed guest relations and resolved complex issues to maintain high satisfaction ratings. Assisted in developing and executing annual business plans and marketing strategies.",
    },
    {
      title: "Front Office Manager",
      company: "Parkside Hotel & Conference Center",
      period: "2012 - 2015",
      description:
        "Managed front desk operations, reservations, and guest services for a 200-room business hotel. Supervised and trained a team of 15 front desk agents and concierge staff. Implemented new check-in/check-out procedures that improved efficiency by 30%. Increased upselling revenue by 40% through staff incentive programs. Coordinated with sales team to ensure smooth handling of group arrivals and VIP guests.",
    },
  ],
  skills = [
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
    {
      category: "Technical",
      items: [
        "Opera PMS",
        "Micros POS",
        "Revenue Management Systems",
        "Microsoft Office Suite",
        "Salesforce CRM",
        "Social Media Management",
      ],
    },
  ],
  education = [
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
  certifications = [
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
  languages = [
    {
      language: "English",
      proficiency: "Native",
    },
    {
      language: "Spanish",
      proficiency: "Fluent",
    },
    {
      language: "French",
      proficiency: "Intermediate",
    },
  ],
}: ResumeTemplateProps) => {
  return (
    <div className="max-w-[8.5in] mx-auto bg-white p-8 shadow-sm print:shadow-none print:p-0">
      {/* Header with hospitality-inspired styling */}
      <header className="mb-6 pb-6 border-b-2 border-orange-400">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <h2 className="text-xl text-orange-600 mt-1 font-medium">
              {title}
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-orange-500" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <Phone className="h-4 w-4 text-orange-500" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <MapPin className="h-4 w-4 text-orange-500" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-md border border-orange-100">
            <Linkedin className="h-4 w-4 text-orange-600" />
            <span>{linkedin}</span>
          </div>
          <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-md border border-orange-100">
            <Globe className="h-4 w-4 text-orange-600" />
            <span>{website}</span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Users className="h-5 w-5 text-orange-600" /> Professional Summary
        </h3>
        <p className="text-gray-700">{summary}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* Experience */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Utensils className="h-5 w-5 text-orange-600" /> Professional
              Experience
            </h3>
            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-orange-200 pl-4 pb-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {exp.title}
                      </h4>
                      <p className="text-gray-700">{exp.company}</p>
                    </div>
                    <span className="text-sm bg-orange-50 text-orange-700 px-2 py-0.5 rounded border border-orange-100">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-orange-600" /> Education
            </h3>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-orange-600 font-medium">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div>
          {/* Skills */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-orange-600" /> Skills & Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900 mb-2 pb-1 border-b border-orange-100">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-1">
                    {skillGroup.items.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-orange-600" /> Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-orange-50 p-3 rounded-md border border-orange-100"
                >
                  <h4 className="font-medium text-gray-900">{cert.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <span className="text-xs text-orange-600 font-medium">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5 text-orange-600" /> Languages
            </h3>
            <div className="space-y-2">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700">{lang.language}</span>
                  <span className="text-sm bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full border border-orange-100">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Print button - only visible on screen, not when printing */}
      <div className="mt-8 text-center print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Print Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeHospitality;
