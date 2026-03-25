'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { galleryImages, categories, GalleryImage } from '@/lib/gallery-data';
import ImageModal from './ImageModal';

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') return galleryImages;
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const currentImageIndex = filteredImages.findIndex((img) => img.id === selectedImage?.id);

  const handlePrevious = () => {
    const newIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <section id="gallery" className="w-full bg-cream py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle mx-auto">
            Browse through our extensive collection of curated images
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-forest-green text-text-light shadow-md'
                  : 'bg-white text-text-dark border-2 border-border-light hover:border-forest-green'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-card cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => handleImageClick(image)}
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-sm">
                      Click to view
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-serif font-bold text-text-dark mb-1 truncate">{image.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">{image.description}</p>
                <div className="flex flex-wrap gap-1">
                  {image.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-warm-beige text-text-dark text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
  );
}
