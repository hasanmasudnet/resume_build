import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  DollarSign,
  BarChart2,
  PieChart,
  Award,
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
}

const ResumeFinance = ({
  name = "Michael Reynolds",
  title = "Senior Financial Analyst",
  email = "michael.reynolds@example.com",
  phone = "+1 (555) 123-4567",
  location = "Chicago, IL",
  website = "www.michaelreynolds.finance",
  linkedin = "linkedin.com/in/michaelreynolds",
  summary = "Detail-oriented Financial Analyst with 8+ years of experience in financial modeling, forecasting, and investment analysis. Proven track record of identifying cost-saving opportunities and optimizing financial performance. Skilled in financial reporting, budgeting, and strategic planning with expertise in the technology and healthcare sectors.",
  experiences = [
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
  skills = [
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
  education = [
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
  certifications = [
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
}: ResumeTemplateProps) => {
  return (
    <div className="max-w-[8.5in] mx-auto bg-white p-8 shadow-sm print:shadow-none print:p-0">
      {/* Header with finance-inspired styling */}
      <header className="mb-6 pb-6 border-b-2 border-indigo-500">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <h2 className="text-xl text-indigo-600 mt-1 font-medium">
              {title}
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-indigo-500" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <Phone className="h-4 w-4 text-indigo-500" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <MapPin className="h-4 w-4 text-indigo-500" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-md border border-indigo-100">
            <Linkedin className="h-4 w-4 text-indigo-600" />
            <span>{linkedin}</span>
          </div>
          <div className="flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-md border border-indigo-100">
            <Globe className="h-4 w-4 text-indigo-600" />
            <span>{website}</span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-indigo-600" /> Professional
          Summary
        </h3>
        <p className="text-gray-700">{summary}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* Experience */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-indigo-600" /> Professional
              Experience
            </h3>
            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-indigo-200 pl-4 pb-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {exp.title}
                      </h4>
                      <p className="text-gray-700">{exp.company}</p>
                    </div>
                    <span className="text-sm bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-100">
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
              <PieChart className="h-5 w-5 text-indigo-600" /> Education
            </h3>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-indigo-600 font-medium">
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
              <BarChart2 className="h-5 w-5 text-indigo-600" /> Skills &
              Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900 mb-2 pb-1 border-b border-indigo-100">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-1">
                    {skillGroup.items.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-indigo-600" /> Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-indigo-50 p-3 rounded-md border border-indigo-100"
                >
                  <h4 className="font-medium text-gray-900">{cert.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <span className="text-xs text-indigo-600 font-medium">
                      {cert.year}
                    </span>
                  </div>
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
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Print Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeFinance;
