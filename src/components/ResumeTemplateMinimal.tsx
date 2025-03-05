import React from "react";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

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

const ResumeTemplateMinimal = ({
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
      {/* Header */}
      <header className="mb-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-light tracking-tight text-gray-900">
          {name}
        </h1>
        <h2 className="text-lg text-gray-500 mt-1 font-light">{title}</h2>

        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Mail className="h-3.5 w-3.5 text-gray-400" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-3.5 w-3.5 text-gray-400" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-gray-400" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="h-3.5 w-3.5 text-gray-400" />
            <span>{linkedin}</span>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="h-3.5 w-3.5 text-gray-400" />
            <span>{website}</span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <p className="text-gray-700 text-center leading-relaxed">{summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-medium border-b pb-1">
          Experience
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-medium text-gray-900">
                  {exp.title} ·{" "}
                  <span className="font-normal text-gray-600">
                    {exp.company}
                  </span>
                </h4>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="text-sm text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-medium border-b pb-1">
          Skills
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h4 className="font-medium text-gray-900 mb-2">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-medium border-b pb-1">
          Education
        </h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="flex justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                <p className="text-sm text-gray-600">{edu.institution}</p>
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

export default ResumeTemplateMinimal;
