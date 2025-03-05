import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  BookOpen,
  GraduationCap,
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
  courses?: {
    name: string;
    description: string;
  }[];
}

const ResumeEducation = ({
  name = "Professor James Wilson",
  title = "High School Science Teacher",
  email = "james.wilson@education.org",
  phone = "+1 (555) 123-4567",
  location = "Portland, OR",
  website = "www.jameswilson.education",
  linkedin = "linkedin.com/in/jameswilson",
  summary = "Dedicated Science Teacher with 10+ years of experience creating engaging learning environments for high school students. Specialized in Biology and Chemistry with a focus on inquiry-based learning and STEM integration. Committed to fostering critical thinking skills and scientific literacy through innovative teaching methods and technology integration.",
  experiences = [
    {
      title: "Science Department Chair",
      company: "Lincoln High School",
      period: "2019 - Present",
      description:
        "Lead a department of 8 science teachers, developing curriculum aligned with state standards and Next Generation Science Standards. Implement project-based learning initiatives and coordinate STEM programs. Mentor new teachers and facilitate professional development workshops. Increased AP science enrollment by 35% and improved average AP scores from 3.2 to 4.1.",
    },
    {
      title: "Biology & Chemistry Teacher",
      company: "Roosevelt High School",
      period: "2014 - 2019",
      description:
        "Taught Biology, Chemistry, and AP Biology to grades 9-12. Developed and implemented laboratory activities and research projects. Created differentiated instruction to meet diverse learning needs. Served as Science Olympiad coach, leading team to state finals three consecutive years.",
    },
    {
      title: "Student Teacher",
      company: "Washington Middle School",
      period: "2013 - 2014",
      description:
        "Completed teaching practicum for grades 6-8 science classes. Designed and delivered lesson plans under mentor teacher supervision. Implemented inquiry-based learning strategies and technology integration. Participated in parent-teacher conferences and school community events.",
    },
  ],
  skills = [
    {
      category: "Teaching Methods",
      items: [
        "Inquiry-Based Learning",
        "Project-Based Learning",
        "Differentiated Instruction",
        "Formative Assessment",
        "Blended Learning",
        "STEM Integration",
      ],
    },
    {
      category: "Technical Skills",
      items: [
        "Laboratory Management",
        "Google Classroom",
        "Canvas LMS",
        "Digital Assessment Tools",
        "Virtual Lab Simulations",
        "Data Analysis",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Classroom Management",
        "Student Mentoring",
        "Parent Communication",
        "Curriculum Development",
        "Team Collaboration",
        "Public Speaking",
      ],
    },
  ],
  education = [
    {
      degree: "Master of Education, Science Education",
      institution: "University of Oregon",
      year: "2013",
    },
    {
      degree: "Bachelor of Science, Biology",
      institution: "Oregon State University",
      year: "2011",
    },
  ],
  certifications = [
    {
      name: "State Teaching License - Science (6-12)",
      issuer: "Oregon Department of Education",
      year: "2013",
    },
    {
      name: "AP Biology Certified Instructor",
      issuer: "College Board",
      year: "2015",
    },
    {
      name: "Google Certified Educator Level 2",
      issuer: "Google for Education",
      year: "2018",
    },
  ],
  courses = [
    {
      name: "Biology 101",
      description:
        "Introductory biology course covering cell structure, genetics, evolution, and ecology.",
    },
    {
      name: "AP Biology",
      description:
        "College-level biology course with advanced laboratory investigations and research projects.",
    },
    {
      name: "Chemistry",
      description:
        "Study of matter, its properties, and the changes it undergoes through chemical reactions.",
    },
    {
      name: "Environmental Science",
      description:
        "Interdisciplinary course examining environmental issues and sustainable solutions.",
    },
  ],
}: ResumeTemplateProps) => {
  return (
    <div className="max-w-[8.5in] mx-auto bg-white p-8 shadow-sm print:shadow-none print:p-0">
      {/* Header with education-inspired styling */}
      <header className="mb-6 pb-6 border-b-2 border-amber-500">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <h2 className="text-xl text-amber-600 mt-1 font-medium">{title}</h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-amber-500" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <Phone className="h-4 w-4 text-amber-500" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <MapPin className="h-4 w-4 text-amber-500" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-md border border-amber-100">
            <Linkedin className="h-4 w-4 text-amber-600" />
            <span>{linkedin}</span>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-md border border-amber-100">
            <Globe className="h-4 w-4 text-amber-600" />
            <span>{website}</span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Users className="h-5 w-5 text-amber-600" /> Professional Summary
        </h3>
        <p className="text-gray-700">{summary}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* Experience */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-amber-600" /> Teaching
              Experience
            </h3>
            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-amber-200 pl-4 pb-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {exp.title}
                      </h4>
                      <p className="text-gray-700">{exp.company}</p>
                    </div>
                    <span className="text-sm bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100">
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

          {/* Courses Taught */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-amber-600" /> Courses Taught
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-amber-50 p-3 rounded-md border border-amber-100"
                >
                  <h4 className="font-medium text-gray-900">{course.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div>
          {/* Education */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-amber-600" /> Education
            </h3>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                    <span className="text-sm text-amber-600 font-medium">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-600" /> Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-amber-50 p-3 rounded-md border border-amber-100"
                >
                  <h4 className="font-medium text-gray-900">{cert.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <span className="text-xs text-amber-600 font-medium">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-600" /> Skills & Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900 mb-2 pb-1 border-b border-amber-100">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-1">
                    {skillGroup.items.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
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
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Print Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeEducation;
