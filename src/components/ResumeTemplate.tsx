import React from "react";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { Separator } from "./ui/separator";

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

const ResumeTemplate = ({
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
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
        <h2 className="text-xl text-gray-600 mt-1">{title}</h2>

        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-gray-500" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gray-500" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="h-4 w-4 text-gray-500" />
            <span>{linkedin}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-gray-500" />
            <span>{website}</span>
          </div>
        </div>
      </header>

      <Separator className="my-4" />

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Professional Summary
        </h3>
        <p className="text-gray-700">{summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Professional Experience
        </h3>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{exp.title}</h4>
                  <p className="text-gray-700">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills</h3>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h4 className="font-medium text-gray-900 mb-2">
                {skillGroup.category}
              </h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
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

export default ResumeTemplate;
