import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Separator } from "./ui/separator";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  title?: string;
  experiences?: ExperienceItem[];
}

const ExperienceSection = ({
  title = "Professional Experience",
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
}: ExperienceSectionProps) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {experience.title}
                  </h3>
                  <div className="flex items-center mt-1 text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center mt-1 text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{experience.period}</span>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>

              {index < experiences.length - 1 && (
                <Separator className="mt-8 mb-2 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
