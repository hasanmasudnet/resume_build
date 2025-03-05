import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface ResumeCreatorProps {
  onClose: () => void;
}

const ResumeCreator = ({ onClose }: ResumeCreatorProps) => {
  const navigate = useNavigate();
  const [selectedProfession, setSelectedProfession] = useState<string | null>(
    null,
  );
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const professions = [
    { id: "developer", name: "Developer", color: "bg-gray-900" },
    { id: "marketing", name: "Marketing", color: "bg-teal-600" },
    { id: "finance", name: "Finance", color: "bg-indigo-600" },
    { id: "healthcare", name: "Healthcare", color: "bg-red-600" },
    { id: "education", name: "Education", color: "bg-amber-600" },
    { id: "creative-design", name: "Creative Design", color: "bg-pink-600" },
    { id: "hospitality", name: "Hospitality", color: "bg-orange-600" },
  ];

  const styles = [
    { id: "default", name: "Classic", color: "bg-gray-900" },
    { id: "minimal", name: "Minimal", color: "bg-gray-900" },
    { id: "modern", name: "Modern", color: "bg-blue-600" },
    { id: "creative", name: "Creative", color: "bg-purple-600" },
  ];

  // Load saved selections if any
  useEffect(() => {
    const savedProfession = localStorage.getItem("resume_profession");
    const savedStyle = localStorage.getItem("resume_style");

    if (savedProfession) setSelectedProfession(savedProfession);
    if (savedStyle) setSelectedStyle(savedStyle);
  }, []);

  const handleApply = () => {
    if (selectedProfession && selectedStyle) {
      // Save the selections
      localStorage.setItem("resume_profession", selectedProfession);
      localStorage.setItem("resume_style", selectedStyle);

      // Navigate to the profession page (the style will be applied via the saved preference)
      navigate(`/resume/${selectedProfession}`);
      onClose();
    }
  };

  const handleReset = () => {
    localStorage.removeItem("resume_profession");
    localStorage.removeItem("resume_style");
    setSelectedProfession(null);
    setSelectedStyle(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Mix & Match Resume</h2>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">1. Select a profession:</h3>
        <div className="flex flex-wrap gap-2">
          {professions.map((profession) => (
            <button
              key={profession.id}
              onClick={() => setSelectedProfession(profession.id)}
              className={`px-3 py-1.5 rounded ${selectedProfession === profession.id ? `${profession.color} text-white` : "bg-gray-200 hover:bg-gray-300"}`}
            >
              {profession.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">
          2. Choose a template style:
        </h3>
        <div className="flex flex-wrap gap-2">
          {styles.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style.id)}
              className={`px-3 py-1.5 rounded ${selectedStyle === style.id ? `${style.color} text-white` : "bg-gray-200 hover:bg-gray-300"}`}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
        <Button
          onClick={handleApply}
          disabled={!selectedProfession || !selectedStyle}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default ResumeCreator;
