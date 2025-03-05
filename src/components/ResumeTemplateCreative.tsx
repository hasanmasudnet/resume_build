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

const ResumeTemplateCreative = ({
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
  // Use skill levels from data or calculate default values
  const getSkillLevel = (skill: string, index: number) => {
    // Check if the skill has a level property (added via admin dashboard)
    const skillObj = typeof skill === "object" ? skill : null;
    if (skillObj && "name" in skillObj && "level" in skillObj) {
      return skillObj.level;
    }

    // Fallback to calculated default values
    const basePercentage = 95;
    const decrementPerItem = 5;
    return basePercentage - index * decrementPerItem;
  };

  return (
    <div className="max-w-[8.5in] mx-auto bg-gradient-to-br from-purple-50 to-white p-8 shadow-sm print:shadow-none print:p-0">
      {/* Header with creative styling */}
      <header className="mb-8 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full -z-10 opacity-50 print:opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-200 rounded-full -z-10 opacity-50 print:opacity-30"></div>

        <h1 className="text-5xl font-bold text-purple-900 tracking-tight">
          {name}
        </h1>
        <h2 className="text-xl text-purple-600 mt-2 font-medium">{title}</h2>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
            <Mail className="h-4 w-4 text-purple-500" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
            <Phone className="h-4 w-4 text-purple-500" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
            <MapPin className="h-4 w-4 text-purple-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
            <Linkedin className="h-4 w-4 text-purple-500" />
            <span>{linkedin}</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
            <Globe className="h-4 w-4 text-purple-500" />
            <span>{website}</span>
          </div>
        </div>
      </header>

      {/* Summary with creative background */}
      <section className="mb-8 bg-gradient-to-r from-purple-100 to-white p-4 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-200 rounded-full -z-10 opacity-30"></div>
        <h3 className="text-lg font-semibold text-purple-800 mb-2">About Me</h3>
        <p className="text-gray-700 relative z-10">{summary}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left column - 5/12 width */}
        <div className="md:col-span-5">
          {/* Skills with visual representation */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-purple-800 mb-4 pb-2 border-b border-purple-200">
              Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skillGroup, groupIndex) => (
                <div key={groupIndex} className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, idx) => {
                      const skillName =
                        typeof skill === "object" && "name" in skill
                          ? skill.name
                          : skill;
                      const level = getSkillLevel(skill, idx);
                      return (
                        <div key={idx}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700">{skillName}</span>
                            <span className="text-xs text-gray-500">
                              {level}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"
                              style={{ width: `${level}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education with creative styling */}
          <section>
            <h3 className="text-lg font-semibold text-purple-800 mb-4 pb-2 border-b border-purple-200">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-700">{edu.institution}</p>
                    </div>
                    <span className="text-sm bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right column - 7/12 width */}
        <div className="md:col-span-7">
          {/* Experience with timeline styling */}
          <section>
            <h3 className="text-lg font-semibold text-purple-800 mb-4 pb-2 border-b border-purple-200">
              Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-purple-200"></div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 bg-purple-100 border-2 border-purple-400 rounded-full z-10"></div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {exp.title}
                        </h4>
                        <span className="text-sm bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-purple-700 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Print button - only visible on screen, not when printing */}
      <div className="mt-8 text-center print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 py-2 rounded-full text-sm shadow-md"
        >
          Print Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeTemplateCreative;
