"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Your gallery images
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/instrumentation.jpg",
    alt: "Instrumentation products and tube fittings",
    category: "instrumentation",
    title: "Instrumentation Products",
  },
  {
    id: 2,
    src: "/images/gallery/mechanical-equipment.jpg",
    alt: "Mechanical equipment and parts",
    category: "mechanical",
    title: "Mechanical Equipment",
  },
  // Add more images below as you download them
  // Example format:
  // {
  //   id: 3,
  //   src: "/images/gallery/your-image-name.jpg",
  //   alt: "Description of the image",
  //   category: "oil-field", // or "shipping", "mechanical", "electrical", "instrumentation"
  //   title: "Display Title",
  // },
];

const categories = [
  { id: "all", label: "All" },
  { id: "oil-field", label: "Oil Field" },
  { id: "shipping", label: "Shipping" },
  { id: "mechanical", label: "Mechanical" },
  { id: "electrical", label: "Electrical" },
  { id: "instrumentation", label: "Instrumentation" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const lightboxSlides = filteredImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.title,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary py-20 text-primary-foreground">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Gallery</h1>
            <p className="mt-6 text-lg leading-8 opacity-90">
              Explore our products, operations, and global reach
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full md:w-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                        onClick={() => openLightbox(index)}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="font-semibold text-lg">{image.title}</h3>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                {filteredImages.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No images in this category yet.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </div>
  );
}
