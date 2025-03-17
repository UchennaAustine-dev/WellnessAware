import Link from "next/link";
import Image from "next/image";

import {
  Card,
  // CardContent, // Removed unused import
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  {
    id: "nutrition",
    title: "Nutrition",
    description:
      "Evidence-based dietary information to fuel your body and mind.",
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
    count: 26,
    icon: "🥗",
  },
  {
    id: "fitness",
    title: "Fitness",
    description: "Workouts, training principles, and movement science.",
    image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
    count: 18,
    icon: "💪",
  },
  {
    id: "mental-health",
    title: "Mental Health",
    description:
      "Resources and strategies for emotional wellbeing and resilience.",
    image: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg",
    count: 22,
    icon: "🧠",
  },
  {
    id: "wellness",
    title: "Wellness",
    description:
      "Holistic approaches to health including sleep, stress management, and lifestyle.",
    image: "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg",
    count: 24,
    icon: "✨",
  },
  {
    id: "recipes",
    title: "Recipes",
    description: "Healthy, delicious meals and preparation techniques.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    count: 31,
    icon: "🍽️",
  },
  {
    id: "supplements",
    title: "Supplements",
    description:
      "Science-based analysis of vitamins, minerals, and other supplements.",
    image: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg", // New image URL
    count: 13,
    icon: "💊",
  },
];

export default function CategoriesPage() {
  return (
    <main className="w-full flex flex-col justify-center">
      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              Categories
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse our content by topic to find exactly what you&#39;re
              looking for.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-md flex flex-col">
                <div className="relative aspect-video">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <p className="text-sm text-muted-foreground">
                    {category.count} articles
                  </p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
