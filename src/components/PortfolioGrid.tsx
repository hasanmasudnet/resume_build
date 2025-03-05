import React, { useState } from "react";
import PortfolioModal from "./PortfolioModal";

interface PortfolioItem {
  id: string;
  image: string;
  thumbnail: string;
  title: string;
  description: string;
}

interface PortfolioGridProps {
  items?: PortfolioItem[];
}

const PortfolioGrid = ({
  items = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
      title: "Mountain Sunrise",
      description:
        "Captured during a hiking trip in the Alps, this image represents the beauty of nature at dawn.",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
      title: "Valley Landscape",
      description:
        "A serene valley view captured during golden hour, showcasing the dramatic interplay of light and shadow.",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
      title: "Coastal Sunset",
      description:
        "The vibrant colors of sunset reflecting off the calm ocean waters create a peaceful moment in time.",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
      title: "Forest Path",
      description:
        "A mystical journey through an ancient forest, where light filters through the dense canopy.",
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&q=80",
      title: "Autumn Colors",
      description:
        "The rich palette of fall captured in its full glory, showcasing nature's seasonal transformation.",
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80",
      title: "Misty Mountains",
      description:
        "Morning fog envelops the mountain range, creating an ethereal atmosphere that transcends time.",
    },
  ],
}: PortfolioGridProps) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleOpenModal = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Portfolio Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02] bg-gray-100"
              onClick={() => handleOpenModal(item)}
            >
              <div className="aspect-w-4 aspect-h-3 w-full">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-90"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <PortfolioModal
          isOpen={!!selectedItem}
          onClose={handleCloseModal}
          image={selectedItem.image}
          title={selectedItem.title}
          description={selectedItem.description}
        />
      )}
    </section>
  );
};

export default PortfolioGrid;
