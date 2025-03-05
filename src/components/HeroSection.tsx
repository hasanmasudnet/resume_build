import React from "react";
import { Camera } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  specialty?: string;
  featuredImage?: string;
  tagline?: string;
}

const HeroSection = ({
  name = "Alex Morgan",
  specialty = "Portrait & Landscape Photographer",
  featuredImage = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&q=80",
  tagline = "Capturing moments that tell your story",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[600px] bg-gray-50 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src={featuredImage}
          alt="Featured photography work"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <Camera className="w-12 h-12 text-white mb-4 mx-auto opacity-80" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            {name}
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6 opacity-80" />
          <h2 className="text-xl md:text-2xl text-white mb-6 font-light">
            {specialty}
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto italic">
            {tagline}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
