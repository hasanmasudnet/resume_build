import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Award,
  Calendar,
  Building,
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
}

const ResumeTemplateModern = ({
  name = "Alex Morgan",
  title = "Professional Photographer",
  email = "alex.morgan@photography.com",
  phone = "+1 (555) 123-4567",
  location = "San Francisco, CA",
  website = "www.alexmorganphotography.com",
  linkedin = "linkedin.com/in/alexmorganphoto",
  summary = "Award-winning photographer with over 8 years of experience specializing in portrait and landscape photography. Published in National Geographic and collaborated with major brands including Apple and Nike.",
  experiences = [
    {
      title: "Lead Photographer",
      company: "Aperture Studios",
      period: "2020 - Present",
      description:
        "Lead photographer for commercial and editorial shoots. Managed a team of 3 assistant photographers and coordinated with art directors to deliver high-quality visual content for major brands.",
    },
    {
      title: "Freelance Photographer",
      company: "Self-employed",
      period: "2017 - 2020",
      description:
        "Specialized in portrait and landscape photography. Published work in several national magazines and collaborated with local businesses for product photography.",
    },
    {
      title: "Photography Assistant",
      company: "Vision Media",
      period: "2015 - 2017",
      description:
        "Assisted senior photographers during studio and location shoots. Responsible for lighting setup, equipment maintenance, and post-production editing.",
    },
  ],
  skills = [
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
  education = [
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
}: ResumeTemplateProps) => {
  return (
    <div className="max-w-[8.5in] mx-auto bg-white p-8 shadow-sm print:shadow-none print:p-0">
      {/* Header with accent color */}
      <header className="mb-8 pb-6 border-b-4 border-blue-600">
        <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
        <h2 className="text-xl text-blue-600 mt-1 font-medium">{title}</h2>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1.5 rounded-full">
              <Mail className="h-4 w-4 text-blue-600" />
            </div>
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1.5 rounded-full">
              <Phone className="h-4 w-4 text-blue-600" />
            </div>
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1.5 rounded-full">
              <MapPin className="h-4 w-4 text-blue-600" />
            </div>
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1.5 rounded-full">
              <Linkedin className="h-4 w-4 text-blue-600" />
            </div>
            <span>{linkedin}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1.5 rounded-full">
              <Globe className="h-4 w-4 text-blue-600" />
            </div>
            <span>{website}</span>
          </div>
        </div>
      </header>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="md:col-span-1">
          {/* Summary */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5" /> Professional Summary
            </h3>
            <p className="text-gray-700">{summary}</p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5" /> Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5" /> Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="md:col-span-2">
          {/* Experience */}
          <section>
            <h3 className="text-lg font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <Award className="h-5 w-5" /> Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 pb-6 border-l-2 border-blue-200 last:border-0"
                >
                  <div className="absolute -left-1.5 top-0">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500 gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2 gap-1">
                      <Building className="h-3.5 w-3.5" />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-gray-700">{exp.description}</p>
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Print Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeTemplateModern;
