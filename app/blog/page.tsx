import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogPostSummary } from "@/components/blog-post-summary";
import { Separator } from "@/components/ui/separator";

// Use the same blog posts data structure as defined in [slug]/page.tsx
const blogPosts = [
  {
    id: "1",
    title: "The Science Behind Intermittent Fasting",
    excerpt:
      "New research reveals how intermittent fasting affects metabolic health and longevity. Studies show significant improvements in insulin sensitivity and cellular repair mechanisms.",
    date: "March 12, 2025",
    author: "Dr. Sarah Johnson",
    commentCount: 24,
    image: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg",
    slug: "science-behind-intermittent-fasting",
    category: "nutrition",
  },
  {
    id: "2",
    title: "5 Essential Nutrients You Might Be Missing",
    excerpt:
      "Despite eating a balanced diet, many people are deficient in key nutrients. Learn which vitamins and minerals are commonly lacking and how to incorporate them into your meals.",
    date: "March 10, 2025",
    author: "Michael Chen, RD",
    commentCount: 18,
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
    slug: "essential-nutrients-missing",
    category: "nutrition",
  },
  {
    id: "3",
    title: "Mindfulness Meditation: A Beginner's Guide",
    excerpt:
      "Discover how just 10 minutes of daily meditation can transform your mental health. This beginner-friendly guide walks you through simple techniques to reduce stress and improve focus.",
    date: "March 8, 2025",
    author: "Emma Williams",
    commentCount: 32,
    image: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg",
    slug: "mindfulness-meditation-beginners-guide",
    category: "mental-health",
  },
  {
    id: "4",
    title: "The Benefits of a Plant-Based Diet",
    excerpt:
      "Explore how incorporating more plant foods into your meals can improve your health, reduce chronic disease risk, and support environmental sustainability.",
    date: "March 5, 2025",
    author: "Dr. James Wilson",
    commentCount: 29,
    image: "https://images.pexels.com/photos/1580466/pexels-photo-1580466.jpeg",
    slug: "benefits-plant-based-diet",
    category: "nutrition",
  },
  {
    id: "5",
    title: "How to Build a Sustainable Fitness Routine",
    excerpt:
      "Create an exercise plan that you can maintain for the long term. Learn the key principles that make fitness habits stick instead of falling into the cycle of on-again, off-again workouts.",
    date: "March 3, 2025",
    author: "Lisa Rodriguez",
    commentCount: 21,
    image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
    slug: "sustainable-fitness-routine",
    category: "fitness",
  },
  {
    id: "6",
    title: "Sleep Optimization: The Science of Better Rest",
    excerpt:
      "Evidence-based strategies to improve your sleep quality and duration. Learn how to optimize your sleep environment, habits, and routines for more restorative rest.",
    date: "February 28, 2025",
    author: "Dr. David Chen",
    commentCount: 27,
    image: "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg",
    slug: "sleep-optimization-science",
    category: "wellness",
  },
  {
    id: "7",
    title: "Strength Training for Women: Myths vs. Facts",
    excerpt:
      "Debunking common misconceptions about women and weight lifting. Discover the science-backed benefits of strength training for women's health, body composition, and athletic performance.",
    date: "February 25, 2025",
    author: "Jessica Martin",
    commentCount: 35,
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    slug: "strength-training-women-myths-facts",
    category: "fitness",
  },
  {
    id: "8",
    title: "Gut Health: Understanding Your Second Brain",
    excerpt:
      "The surprising connection between your digestive system and brain function. Learn how your gut microbiome influences mood, cognition, and overall health.",
    date: "February 22, 2025",
    author: "Dr. Maya Patel",
    commentCount: 23,
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
    slug: "gut-health-second-brain",
    category: "wellness",
  },
  {
    id: "9",
    title: "The Anti-Inflammatory Diet for Chronic Pain Management",
    excerpt:
      "How specific foods can help reduce inflammation and manage chronic pain conditions. Discover which foods to prioritize and which to avoid for a pain-management nutrition plan.",
    date: "February 18, 2025",
    author: "Dr. Robert Chang",
    commentCount: 19,
    image: "https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg",
    slug: "anti-inflammatory-diet-chronic-pain",
    category: "nutrition",
  },
  {
    id: "10",
    title: "Effective Home Workouts with Minimal Equipment",
    excerpt:
      "Get fit without a gym membership using these effective home workout strategies. Learn how to build strength, endurance, and mobility with little to no equipment.",
    date: "February 15, 2025",
    author: "Thomas Parker",
    commentCount: 31,
    image: "https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg",
    slug: "effective-home-workouts-minimal-equipment",
    category: "fitness",
  },
];

// Get unique categories from blog posts
const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center">
      <section className="bg-muted w-full flex justify-center py-12 md:py-16">
        <div className="w-[90%] px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Evidence-based articles to help you make informed health and
              wellness decisions.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
                aria-label="Search articles"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-[90%] px-4 py-12">
        <Tabs defaultValue="all" className="space-y-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Topics</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostSummary key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => post.category === category)
                  .map((post) => (
                    <BlogPostSummary key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Looking for more content?
          </p>
          <Button>Load More Articles</Button>
        </div>
      </section>

      <section className="bg-muted py-12 my-12">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest health insights delivered directly to your inbox.
              We send evidence-based content, no spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-xs sm:max-w-md"
                aria-label="Email for newsletter"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
