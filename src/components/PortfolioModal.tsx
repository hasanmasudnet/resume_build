import React from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogOverlay,
  DialogPortal,
} from "./ui/dialog";

interface PortfolioModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  image?: string;
  title?: string;
  description?: string;
}

const PortfolioModal = ({
  isOpen = true,
  onClose = () => {},
  image = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80",
  title = "Mountain Sunrise",
  description = "Captured during a hiking trip in the Alps, this image represents the beauty of nature at dawn.",
}: PortfolioModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-4xl p-0 overflow-hidden bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white">
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
              <X className="h-5 w-5" />
            </DialogClose>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;
