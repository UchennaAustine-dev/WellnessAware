"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Mock gallery data - would come from CMS in production
const galleryItems = [
  {
    id: "1",
    title: "Healthy Mediterranean Meal",
    description: "Fresh vegetables, olive oil, and lean protein",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    category: "nutrition",
  },
  {
    id: "2",
    title: "Morning Yoga Routine",
    description: "Start your day with mindful movement",
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
    category: "fitness",
  },
  {
    id: "3",
    title: "Meditation Space",
    description: "Create a peaceful environment for daily practice",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
    category: "mindfulness",
  },
  {
    id: "4",
    title: "Nutrient-Rich Smoothie Bowl",
    description: "Packed with antioxidants and vitamins",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
    category: "nutrition",
  },
  {
    id: "5",
    title: "Strength Training",
    description: "Building muscle for long-term health",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    category: "fitness",
  },
  {
    id: "6",
    title: "Restful Sleep Environment",
    description: "Optimize your bedroom for quality sleep",
    image: "https://images.pexels.com/photos/6585602/pexels-photo-6585602.jpeg",
    category: "wellness",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(item)}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-medium">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedImage && (
            <div>
              <DialogTitle className="sr-only">Image Details</DialogTitle>
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold font-heading">
                  {selectedImage.title}
                </h2>
                <p className="text-muted-foreground">
                  {selectedImage.description}
                </p>
                <div className="mt-2">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                    #{selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
