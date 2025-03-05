import React from "react";
import HeroSection from "./HeroSection";
import PortfolioGrid from "./PortfolioGrid";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        name="Alex Morgan"
        specialty="Portrait & Landscape Photographer"
        featuredImage="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&q=80"
        tagline="Capturing moments that tell your story"
      />

      {/* Portfolio Grid */}
      <PortfolioGrid />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection
        name="Alex Morgan"
        email="alex.morgan@photography.com"
        phone="+1 (555) 123-4567"
        location="San Francisco, CA"
        website="www.alexmorganphotography.com"
        linkedin="linkedin.com/in/alexmorganphoto"
        instagram="@alexmorganphoto"
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Alex Morgan Photography. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
