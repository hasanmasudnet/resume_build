import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface ContactSectionProps {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
}

const ContactSection = ({
  name = "Jane Doe",
  email = "jane.doe@photography.com",
  phone = "+1 (555) 123-4567",
  location = "New York, NY",
  website = "www.janedoephotography.com",
  linkedin = "linkedin.com/in/janedoephoto",
  instagram = "@janedoephoto",
}: ContactSectionProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-600" />
              <a
                href={`mailto:${email}`}
                className="text-gray-800 hover:text-gray-600 transition-colors"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-600" />
              <a
                href={`tel:${phone}`}
                className="text-gray-800 hover:text-gray-600 transition-colors"
              >
                {phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-600" />
              <span className="text-gray-800">{location}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-gray-600" />
              <a
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-colors"
              >
                {website}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-gray-600" />
              <a
                href={`https://${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-colors"
              >
                {linkedin}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Instagram className="h-5 w-5 text-gray-600" />
              <a
                href={`https://instagram.com/${instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-colors"
              >
                {instagram}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Interested in working together? Let's create something amazing.
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-2 rounded-md">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
