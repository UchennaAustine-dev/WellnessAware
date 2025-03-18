import Link from "next/link";
import Image from "next/image";
import { AdBanner } from "@/components/ads/ad-banner";
import { SidebarAd } from "@/components/ads/sidebar-ad";

import {
  Card,
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
  // Split categories into two rows for ad insertion
  const firstRowCategories = categories.slice(0, 3);
  const secondRowCategories = categories.slice(3);

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

      {/* Leaderboard ad after header */}
      <div className="container px-4 py-6">
        <div className="flex justify-center">
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">
              Advertisement
            </div>
            <AdBanner size="728x90" slotId={3} />
          </div>
        </div>
      </div>

      {/* Main content with sidebar */}
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content - 3 columns */}
          <div className="lg:col-span-3">
            {/* First row of categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {firstRowCategories.map((category) => (
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

            {/* In-content ad after first row */}
            <div className="my-8 flex justify-center">
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">
                  Advertisement
                </div>
                <AdBanner size="728x90" slotId={4} />
              </div>
            </div>

            {/* Second row of categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {secondRowCategories.map((category) => (
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
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-8">
              {/* Sidebar ad */}
              <SidebarAd />

              {/* Popular articles */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {[
                    "The Science Behind Intermittent Fasting",
                    "Mindfulness Meditation: A Beginner's Guide",
                    "Strength Training for Longevity",
                  ].map((title, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=64&width=64&text=${
                            index + 1
                          }`}
                          alt={title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <a
                          href="#"
                          className="font-medium hover:text-primary transition-colors line-clamp-2"
                        >
                          {title}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second sidebar ad */}
              <div className="my-6">
                <div className="text-xs text-muted-foreground mb-1">
                  Advertisement
                </div>
                <AdBanner size="300x600" slotId={2} />
              </div>

              {/* Newsletter signup teaser */}
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to our newsletter for the latest health insights and
                  tips.
                </p>
                <Link
                  href="/subscribe"
                  className="block w-full bg-primary text-primary-foreground text-center py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom leaderboard ad */}
      <div className="container px-4 py-8">
        <div className="flex justify-center">
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">
              Advertisement
            </div>
            <AdBanner size="750x400" slotId={5} />
          </div>
        </div>
      </div>
    </main>
  );
}
