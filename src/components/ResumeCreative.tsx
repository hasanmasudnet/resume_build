import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Palette,
  Camera,
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
  portfolio?: {
    title: string;
    description: string;
    image: string;
  }[];
}

const ResumeCreative = ({
  name = "Alex Morgan",
  title = "Graphic Designer & Illustrator",
  email = "alex.morgan@creative.com",
  phone = "+1 (555) 123-4567",
  location = "Portland, OR",
  website = "www.alexmorgan.design",
  linkedin = "linkedin.com/in/alexmorgandesign",
  summary = "Versatile Graphic Designer and Illustrator with 7+ years of experience creating compelling visual identities and illustrations for brands across various industries. Passionate about combining traditional art techniques with digital innovation to deliver unique, impactful designs that tell stories and engage audiences.",
  experiences = [
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
  skills = [
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
  education = [
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
  portfolio = [
    {
      title: "Bloom Botanicals Branding",
      description: "Complete brand identity for an organic skincare line",
      image:
        "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=600&q=80",
    },
    {
      title: "Tech Summit Event Materials",
      description:
        "Comprehensive design system for annual technology conference",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      title: "Wanderlust Magazine Illustrations",
      description: "Series of editorial illustrations for travel publication",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
    },
    {
      title: "Harmony Music App UI",
      description: "User interface design for streaming music application",
      image:
        "https://images.unsplash.com/photo-1557264337-e8a93017fe92?w=600&q=80",
    },
  ],
}: ResumeTemplateProps) => {
  return (
    <div className="max-w-[8.5in] mx-auto bg-white p-8 shadow-sm print:shadow-none print:p-0">
      {/* Header with creative styling */}
      <header className="mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200 to-transparent -z-10 rounded-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-200 to-transparent -z-10 rounded-full opacity-60"></div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              {name}
            </h1>
            <h2 className="text-xl text-pink-600 mt-1 font-medium">{title}</h2>

            <div className="mt-4 max-w-md">
              <p className="text-gray-700">{summary}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-4 rounded-lg shadow-sm">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-pink-500" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-pink-500" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-pink-500" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Linkedin className="h-4 w-4 text-pink-500" />
                <span>{linkedin}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-pink-500" />
                <span>{website}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b border-pink-200">
              <Palette className="h-5 w-5 text-pink-500" /> Professional
              Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-pink-100"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-pink-200"></div>

                  <div className="mb-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-pink-600 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                  </div>

                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio Highlights */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b border-pink-200">
              <Camera className="h-5 w-5 text-pink-500" /> Portfolio Highlights
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolio.map((item, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div>
          {/* Skills */}
          <section className="mb-8 bg-gradient-to-br from-pink-50 to-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b border-pink-200">
              <Award className="h-5 w-5 text-pink-500" /> Skills
            </h3>

            <div className="space-y-5">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm shadow-sm border border-pink-100"
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
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b border-pink-200">
              <Award className="h-5 w-5 text-pink-500" /> Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                    <span className="text-sm text-pink-600 font-medium">
                      {edu.year}
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
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Print Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeCreative;
