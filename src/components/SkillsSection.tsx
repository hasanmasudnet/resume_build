import React from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillsSectionProps {
  photographySkills?: Skill[];
  technicalSkills?: Skill[];
  title?: string;
  subtitle?: string;
}

const SkillsSection = ({
  photographySkills = [
    { name: "Portrait Photography", level: 90 },
    { name: "Landscape Photography", level: 85 },
    { name: "Event Photography", level: 80 },
    { name: "Product Photography", level: 75 },
  ],
  technicalSkills = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "Adobe Lightroom", level: 90 },
    { name: "Capture One", level: 85 },
    { name: "Studio Lighting", level: 80 },
  ],
  title = "Skills",
  subtitle = "My expertise in photography and technical tools",
}: SkillsSectionProps) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Photography Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Photography Skills
            </h3>
            <div className="space-y-6">
              {photographySkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
