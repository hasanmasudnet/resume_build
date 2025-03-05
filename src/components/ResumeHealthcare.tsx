import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Heart,
  Award,
  Stethoscope,
  Clipboard,
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
  specialties?: string[];
}

const ResumeHealthcare = ({
  name = "Dr. Emily Chen",
  title = "Registered Nurse Practitioner",
  email = "emily.chen@healthcare.org",
  phone = "+1 (555) 123-4567",
  location = "Boston, MA",
  website = "www.emilychen.healthcare",
  linkedin = "linkedin.com/in/emilychen",
  summary = "Compassionate Nurse Practitioner with 8+ years of experience in critical care and family medicine. Dedicated to providing patient-centered care with a focus on preventative health and chronic disease management. Strong clinical skills combined with excellent communication abilities to deliver comprehensive healthcare services.",
  experiences = [
    {
      title: "Nurse Practitioner",
      company: "Boston Medical Center",
      period: "2019 - Present",
      description:
        "Provide comprehensive primary care services to diverse patient population. Conduct physical examinations, diagnose and treat acute and chronic conditions, and prescribe medications. Collaborate with interdisciplinary healthcare team to develop and implement patient care plans. Educate patients on disease prevention and health maintenance.",
    },
    {
      title: "Registered Nurse - ICU",
      company: "Massachusetts General Hospital",
      period: "2015 - 2019",
      description:
        "Delivered critical care to patients with complex medical conditions. Monitored and assessed patient status, administered medications and treatments, and documented care. Collaborated with physicians and specialists to coordinate patient care. Served as preceptor for new nursing staff and students.",
    },
    {
      title: "Staff Nurse",
      company: "Community Health Center",
      period: "2013 - 2015",
      description:
        "Provided primary care services to underserved populations. Conducted patient assessments, administered vaccinations, and assisted with minor procedures. Educated patients on health promotion and disease prevention. Participated in community outreach programs.",
    },
  ],
  skills = [
    {
      category: "Clinical Skills",
      items: [
        "Physical Assessment",
        "Diagnostic Interpretation",
        "Medication Management",
        "Wound Care",
        "IV Therapy",
        "Critical Care",
      ],
    },
    {
      category: "Technical Skills",
      items: [
        "Electronic Health Records",
        "Medical Equipment Operation",
        "Telehealth Services",
        "Clinical Documentation",
        "Patient Monitoring Systems",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Patient Education",
        "Interdisciplinary Collaboration",
        "Crisis Management",
        "Empathetic Communication",
        "Cultural Competence",
      ],
    },
  ],
  education = [
    {
      degree: "Master of Science in Nursing",
      institution: "Boston University",
      year: "2015",
    },
    {
      degree: "Bachelor of Science in Nursing",
      institution: "University of Massachusetts",
      year: "2012",
    },
  ],
  certifications = [
    {
      name: "Family Nurse Practitioner (FNP-BC)",
      issuer: "American Nurses Credentialing Center",
      year: "2015",
    },
    {
      name: "Advanced Cardiovascular Life Support (ACLS)",
      issuer: "American Heart Association",
      year: "2021",
    },
    {
      name: "Basic Life Support (BLS)",
      issuer: "American Heart Association",
      year: "2021",
    },
  ],
  specialties = [
    "Primary Care",
    "Preventative Medicine",
    "Chronic Disease Management",
    "Women's Health",
    "Geriatric Care",
    "Mental Health",
  ],
}: ResumeTemplateProps) => {
  return (
    <div className="max-w-[8.5in] mx-auto bg-white p-8 shadow-sm print:shadow-none print:p-0">
      {/* Header with healthcare-inspired styling */}
      <header className="mb-6 pb-6 border-b-2 border-red-400">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <h2 className="text-xl text-red-500 mt-1 font-medium">{title}</h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-red-500" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <Phone className="h-4 w-4 text-red-500" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <MapPin className="h-4 w-4 text-red-500" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-md border border-red-100">
            <Linkedin className="h-4 w-4 text-red-500" />
            <span>{linkedin}</span>
          </div>
          <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-md border border-red-100">
            <Globe className="h-4 w-4 text-red-500" />
            <span>{website}</span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" /> Professional Summary
        </h3>
        <p className="text-gray-700">{summary}</p>
      </section>

      {/* Specialties */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Stethoscope className="h-5 w-5 text-red-500" /> Clinical Specialties
        </h3>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm border border-red-100"
            >
              {specialty}
            </span>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* Experience */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Clipboard className="h-5 w-5 text-red-500" /> Professional
              Experience
            </h3>
            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-red-200 pl-4 pb-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {exp.title}
                      </h4>
                      <p className="text-gray-700">{exp.company}</p>
                    </div>
                    <span className="text-sm bg-red-50 text-red-700 px-2 py-0.5 rounded border border-red-100">
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
              <Award className="h-5 w-5 text-red-500" /> Education
            </h3>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-red-600 font-medium">
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
              <Award className="h-5 w-5 text-red-500" /> Skills & Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900 mb-2 pb-1 border-b border-red-100">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-1">
                    {skillGroup.items.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
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
              <Award className="h-5 w-5 text-red-500" /> Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-red-50 p-3 rounded-md border border-red-100"
                >
                  <h4 className="font-medium text-gray-900">{cert.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <span className="text-xs text-red-600 font-medium">
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
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Print Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeHealthcare;
