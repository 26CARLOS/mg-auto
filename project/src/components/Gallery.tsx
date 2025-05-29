import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState('all');

  const images: GalleryImage[] = [
    {
      src: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Mercedes-Benz workshop service",
      category: "mercedes"
    },
    {
      src: "https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "BMW engine repair",
      category: "bmw"
    },
    {
      src: "https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Audi vehicle maintenance",
      category: "audi"
    },
    {
      src: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Vehicle diagnostics system",
      category: "diagnostics"
    },
    {
      src: "https://images.pexels.com/photos/8985343/pexels-photo-8985343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Mercedes-Benz engine service",
      category: "mercedes"
    }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const categories = ['all', 'mercedes', 'bmw', 'audi', 'diagnostics'];

  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-red-600">Work</span></h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            View our gallery of German vehicle repairs and services performed by our expert technicians.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category 
                    ? 'bg-navy-800 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
              onClick={() => openModal(image)}
            >
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="font-medium text-navy-800">{image.alt}</p>
                <p className="text-sm text-gray-500 capitalize">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-1 hover:bg-red-700 transition-colors"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <p className="font-medium text-navy-800">{selectedImage.alt}</p>
              <p className="text-sm text-gray-500 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;