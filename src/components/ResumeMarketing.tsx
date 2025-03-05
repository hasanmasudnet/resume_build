import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  TrendingUp,
  BarChart,
  Target,
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
    achievements?: string[];
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
  campaigns?: {
    name: string;
    result: string;
  }[];
}

const ResumeMarketing = ({
  name = "Sarah Johnson",
  title = "Digital Marketing Strategist",
  email = "sarah.johnson@example.com",
  phone = "+1 (555) 123-4567",
  location = "New York, NY",
  website = "www.sarahjohnson.marketing",
  linkedin = "linkedin.com/in/sarahjohnson",
  summary = "Results-driven Digital Marketing Strategist with 7+ years of experience developing integrated marketing campaigns that drive engagement and conversion. Expertise in SEO/SEM, content strategy, social media marketing, and analytics with a proven track record of increasing ROI across multiple channels.",
  experiences = [
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
  skills = [
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
  education = [
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
  campaigns = [
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
}: ResumeTemplateProps) => {
  return (
    <div className="max-w-[8.5in] mx-auto bg-white p-8 shadow-sm print:shadow-none print:p-0">
      {/* Header with marketing-inspired styling */}
      <header className="mb-6 pb-6 border-b-2 border-teal-500">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <h2 className="text-xl text-teal-600 mt-1 font-medium">{title}</h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-teal-500" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <Phone className="h-4 w-4 text-teal-500" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <MapPin className="h-4 w-4 text-teal-500" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 bg-teal-50 px-3 py-1.5 rounded-md border border-teal-100">
            <Linkedin className="h-4 w-4 text-teal-600" />
            <span>{linkedin}</span>
          </div>
          <div className="flex items-center gap-2 bg-teal-50 px-3 py-1.5 rounded-md border border-teal-100">
            <Globe className="h-4 w-4 text-teal-600" />
            <span>{website}</span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Users className="h-5 w-5 text-teal-600" /> Professional Summary
        </h3>
        <p className="text-gray-700">{summary}</p>
      </section>

      {/* Key Campaigns */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Target className="h-5 w-5 text-teal-600" /> Key Campaign Results
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-teal-50 p-3 rounded-md border border-teal-100"
            >
              <h4 className="font-medium text-gray-900">{campaign.name}</h4>
              <p className="text-sm text-teal-700 mt-1">{campaign.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-teal-600" /> Professional
          Experience
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                  <p className="text-gray-700">{exp.company}</p>
                </div>
                <span className="text-sm bg-teal-50 text-teal-700 px-2 py-0.5 rounded border border-teal-100">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{exp.description}</p>

              {exp.achievements && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700">
                    Key Achievements:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <BarChart className="h-5 w-5 text-teal-600" /> Skills & Expertise
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h4 className="font-medium text-gray-900 mb-2">
                {skillGroup.category}
              </h4>
              <ul className="space-y-1">
                {skillGroup.items.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <BarChart className="h-5 w-5 text-teal-600" /> Education
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
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Print Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeMarketing;
