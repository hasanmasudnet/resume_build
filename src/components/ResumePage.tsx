import React, { useEffect, useState } from "react";
import ResumeTemplate from "./ResumeTemplate";
import ResumeTemplateMinimal from "./ResumeTemplateMinimal";
import ResumeTemplateModern from "./ResumeTemplateModern";
import ResumeTemplateCreative from "./ResumeTemplateCreative";
import ResumeDeveloper from "./ResumeDeveloper";
import ResumeMarketing from "./ResumeMarketing";
import ResumeFinance from "./ResumeFinance";
import ResumeHealthcare from "./ResumeHealthcare";
import ResumeEducation from "./ResumeEducation";
import ResumeCreative from "./ResumeCreative";
import ResumeHospitality from "./ResumeHospitality";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "./ui/dialog";
import { Plus } from "lucide-react";

interface ResumePageProps {
  template?:
    | "default"
    | "minimal"
    | "modern"
    | "creative"
    | "developer"
    | "marketing"
    | "finance"
    | "healthcare"
    | "education"
    | "creative-design"
    | "hospitality";
  style?: "default" | "minimal" | "modern" | "creative";
}

const ResumePage = ({ template = "default", style }: ResumePageProps) => {
  const [resumeData, setResumeData] = useState<any>(null);
  const [styleOverride, setStyleOverride] = useState<string | null>(null);
  const [professionOverride, setProfessionOverride] = useState<string | null>(
    null,
  );

  useEffect(() => {
    // If style is provided via props, use it
    if (style) {
      setStyleOverride(style);
    } else {
      // Otherwise check if there's a saved style and profession combination
      const savedStyle = localStorage.getItem("resume_style");
      const savedProfession = localStorage.getItem("resume_profession");

      if (savedStyle && savedProfession && template === savedProfession) {
        setStyleOverride(savedStyle);
      } else {
        setStyleOverride(null);
      }
    }

    // Check if there's saved data for this template
    const savedData = localStorage.getItem(`resume_${template}`);
    if (savedData) {
      try {
        setResumeData(JSON.parse(savedData));
      } catch (e) {
        console.error("Error parsing saved resume data", e);
      }
    }
  }, [template, style]);

  const renderTemplate = () => {
    // If we have a style override, use that template style with the profession data
    if (styleOverride) {
      switch (styleOverride) {
        case "minimal":
          return <ResumeTemplateMinimal {...resumeData} />;
        case "modern":
          return <ResumeTemplateModern {...resumeData} />;
        case "creative":
          return <ResumeTemplateCreative {...resumeData} />;
        default:
          return <ResumeTemplate {...resumeData} />;
      }
    }

    // Otherwise use the standard template for this profession
    switch (template) {
      case "minimal":
        return <ResumeTemplateMinimal {...resumeData} />;
      case "modern":
        return <ResumeTemplateModern {...resumeData} />;
      case "creative":
        return <ResumeTemplateCreative {...resumeData} />;
      case "developer":
        return <ResumeDeveloper {...resumeData} />;
      case "marketing":
        return <ResumeMarketing {...resumeData} />;
      case "finance":
        return <ResumeFinance {...resumeData} />;
      case "healthcare":
        return <ResumeHealthcare {...resumeData} />;
      case "education":
        return <ResumeEducation {...resumeData} />;
      case "creative-design":
        return <ResumeCreative {...resumeData} />;
      case "hospitality":
        return <ResumeHospitality {...resumeData} />;
      default:
        return <ResumeTemplate {...resumeData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 print:bg-white print:p-0">
      {/* Template selector - only visible on screen, not when printing */}
      <div className="max-w-[8.5in] mx-auto mb-6 print:hidden">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-medium">Professional templates:</h2>
            <Link to="/admin" className="text-blue-600 hover:underline text-sm">
              Edit Content
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            <div className="col-span-full mb-2">
              <Link
                to="/resume"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to all templates
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/resume/developer"
                className={`px-3 py-1.5 rounded ${template === "developer" && !style ? "bg-gray-900 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                Developer
              </Link>
              {template === "developer" && (
                <div className="flex flex-wrap gap-1 pl-2 border-l-2 border-gray-300">
                  <Link
                    to="/resume/developer/minimal"
                    className={`px-2 py-1 text-sm rounded ${style === "minimal" ? "bg-gray-700 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                  >
                    Minimal
                  </Link>
                  <Link
                    to="/resume/developer/modern"
                    className={`px-2 py-1 text-sm rounded ${style === "modern" ? "bg-gray-700 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                  >
                    Modern
                  </Link>
                  <Link
                    to="/resume/developer/creative"
                    className={`px-2 py-1 text-sm rounded ${style === "creative" ? "bg-gray-700 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                  >
                    Creative
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/resume/marketing"
                className={`px-3 py-1.5 rounded ${template === "marketing" && !style ? "bg-teal-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                Marketing
              </Link>
              {template === "marketing" && (
                <div className="flex flex-wrap gap-1 pl-2 border-l-2 border-teal-300">
                  <Link
                    to="/resume/marketing/minimal"
                    className={`px-2 py-1 text-sm rounded ${style === "minimal" ? "bg-teal-500 text-white" : "bg-teal-50 hover:bg-teal-100"}`}
                  >
                    Minimal
                  </Link>
                  <Link
                    to="/resume/marketing/modern"
                    className={`px-2 py-1 text-sm rounded ${style === "modern" ? "bg-teal-500 text-white" : "bg-teal-50 hover:bg-teal-100"}`}
                  >
                    Modern
                  </Link>
                  <Link
                    to="/resume/marketing/creative"
                    className={`px-2 py-1 text-sm rounded ${style === "creative" ? "bg-teal-500 text-white" : "bg-teal-50 hover:bg-teal-100"}`}
                  >
                    Creative
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/resume/finance"
                className={`px-3 py-1.5 rounded ${template === "finance" && !style ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                Finance
              </Link>
              {template === "finance" && (
                <div className="flex flex-wrap gap-1 pl-2 border-l-2 border-indigo-300">
                  <Link
                    to="/resume/finance/minimal"
                    className={`px-2 py-1 text-sm rounded ${style === "minimal" ? "bg-indigo-500 text-white" : "bg-indigo-50 hover:bg-indigo-100"}`}
                  >
                    Minimal
                  </Link>
                  <Link
                    to="/resume/finance/modern"
                    className={`px-2 py-1 text-sm rounded ${style === "modern" ? "bg-indigo-500 text-white" : "bg-indigo-50 hover:bg-indigo-100"}`}
                  >
                    Modern
                  </Link>
                  <Link
                    to="/resume/finance/creative"
                    className={`px-2 py-1 text-sm rounded ${style === "creative" ? "bg-indigo-500 text-white" : "bg-indigo-50 hover:bg-indigo-100"}`}
                  >
                    Creative
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/resume/healthcare"
                className={`px-3 py-1.5 rounded ${template === "healthcare" && !style ? "bg-red-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                Healthcare
              </Link>
              {template === "healthcare" && (
                <div className="flex flex-wrap gap-1 pl-2 border-l-2 border-red-300">
                  <Link
                    to="/resume/healthcare/minimal"
                    className={`px-2 py-1 text-sm rounded ${style === "minimal" ? "bg-red-500 text-white" : "bg-red-50 hover:bg-red-100"}`}
                  >
                    Minimal
                  </Link>
                  <Link
                    to="/resume/healthcare/modern"
                    className={`px-2 py-1 text-sm rounded ${style === "modern" ? "bg-red-500 text-white" : "bg-red-50 hover:bg-red-100"}`}
                  >
                    Modern
                  </Link>
                  <Link
                    to="/resume/healthcare/creative"
                    className={`px-2 py-1 text-sm rounded ${style === "creative" ? "bg-red-500 text-white" : "bg-red-50 hover:bg-red-100"}`}
                  >
                    Creative
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/resume/education"
                className={`px-3 py-1.5 rounded ${template === "education" && !style ? "bg-amber-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                Education
              </Link>
              {template === "education" && (
                <div className="flex flex-wrap gap-1 pl-2 border-l-2 border-amber-300">
                  <Link
                    to="/resume/education/minimal"
                    className={`px-2 py-1 text-sm rounded ${style === "minimal" ? "bg-amber-500 text-white" : "bg-amber-50 hover:bg-amber-100"}`}
                  >
                    Minimal
                  </Link>
                  <Link
                    to="/resume/education/modern"
                    className={`px-2 py-1 text-sm rounded ${style === "modern" ? "bg-amber-500 text-white" : "bg-amber-50 hover:bg-amber-100"}`}
                  >
                    Modern
                  </Link>
                  <Link
                    to="/resume/education/creative"
                    className={`px-2 py-1 text-sm rounded ${style === "creative" ? "bg-amber-500 text-white" : "bg-amber-50 hover:bg-amber-100"}`}
                  >
                    Creative
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/resume/creative-design"
                className={`px-3 py-1.5 rounded ${template === "creative-design" && !style ? "bg-pink-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                Creative
              </Link>
              {template === "creative-design" && (
                <div className="flex flex-wrap gap-1 pl-2 border-l-2 border-pink-300">
                  <Link
                    to="/resume/creative-design/minimal"
                    className={`px-2 py-1 text-sm rounded ${style === "minimal" ? "bg-pink-500 text-white" : "bg-pink-50 hover:bg-pink-100"}`}
                  >
                    Minimal
                  </Link>
                  <Link
                    to="/resume/creative-design/modern"
                    className={`px-2 py-1 text-sm rounded ${style === "modern" ? "bg-pink-500 text-white" : "bg-pink-50 hover:bg-pink-100"}`}
                  >
                    Modern
                  </Link>
                  <Link
                    to="/resume/creative-design/creative"
                    className={`px-2 py-1 text-sm rounded ${style === "creative" ? "bg-pink-500 text-white" : "bg-pink-50 hover:bg-pink-100"}`}
                  >
                    Creative
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/resume/hospitality"
                className={`px-3 py-1.5 rounded ${template === "hospitality" && !style ? "bg-orange-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                Hospitality
              </Link>
              {template === "hospitality" && (
                <div className="flex flex-wrap gap-1 pl-2 border-l-2 border-orange-300">
                  <Link
                    to="/resume/hospitality/minimal"
                    className={`px-2 py-1 text-sm rounded ${style === "minimal" ? "bg-orange-500 text-white" : "bg-orange-50 hover:bg-orange-100"}`}
                  >
                    Minimal
                  </Link>
                  <Link
                    to="/resume/hospitality/modern"
                    className={`px-2 py-1 text-sm rounded ${style === "modern" ? "bg-orange-500 text-white" : "bg-orange-50 hover:bg-orange-100"}`}
                  >
                    Modern
                  </Link>
                  <Link
                    to="/resume/hospitality/creative"
                    className={`px-2 py-1 text-sm rounded ${style === "creative" ? "bg-orange-500 text-white" : "bg-orange-50 hover:bg-orange-100"}`}
                  >
                    Creative
                  </Link>
                </div>
              )}
            </div>
          </div>

          {!template.includes("-") &&
            template !== "developer" &&
            template !== "marketing" &&
            template !== "finance" &&
            template !== "healthcare" &&
            template !== "education" &&
            template !== "creative-design" &&
            template !== "hospitality" && (
              <>
                <h2 className="text-lg font-medium mb-3">
                  Choose a template style:
                </h2>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/resume"
                    className={`px-3 py-1.5 rounded ${template === "default" && !styleOverride ? "bg-gray-900 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                  >
                    Classic
                  </Link>
                  <Link
                    to="/resume/minimal"
                    className={`px-3 py-1.5 rounded ${template === "minimal" && !styleOverride ? "bg-gray-900 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                  >
                    Minimal
                  </Link>
                  <Link
                    to="/resume/modern"
                    className={`px-3 py-1.5 rounded ${template === "modern" && !styleOverride ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                  >
                    Modern
                  </Link>
                  <Link
                    to="/resume/creative"
                    className={`px-3 py-1.5 rounded ${template === "creative" && !styleOverride ? "bg-purple-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                  >
                    Creative
                  </Link>
                </div>
              </>
            )}
        </div>
      </div>

      {renderTemplate()}
    </div>
  );
};

export default ResumePage;
