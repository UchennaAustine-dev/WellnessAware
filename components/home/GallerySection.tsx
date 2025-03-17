import { Badge } from "@/components/ui/badge";
import { Gallery } from "@/components/gallery";

export default function GallerySection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="mb-2 sm:mb-3">
            Visual Inspiration
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 sm:mb-4">
            Health Gallery
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6 sm:mb-8">
            Explore our curated collection of health and wellness imagery to
            inspire your journey.
          </p>
        </div>
        <Gallery />
      </div>
    </section>
  );
}
