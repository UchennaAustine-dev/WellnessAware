import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { NewsletterForm } from "@/components/newsletter-form";
import { BlogPostSummary } from "@/components/blog-post-summary";
import { Gallery } from "@/components/gallery";

export default function Home() {
  // Mock data - would come from CMS in production
  const featuredPosts = [
    {
      id: "1",
      title: "The Science Behind Intermittent Fasting",
      excerpt:
        "New research reveals how intermittent fasting affects metabolic health and longevity. Studies show significant improvements in insulin sensitivity and cellular repair mechanisms.",
      date: "March 12, 2025",
      author: "Dr. Sarah Johnson",
      commentCount: 24,
      image:
        "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg",
      slug: "science-behind-intermittent-fasting",
    },
    {
      id: "2",
      title: "5 Essential Nutrients You Might Be Missing",
      excerpt:
        "Despite eating a balanced diet, many people are deficient in key nutrients. Learn which vitamins and minerals are commonly lacking and how to incorporate them into your meals.",
      date: "March 10, 2025",
      author: "Michael Chen, RD",
      commentCount: 18,
      image:
        "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
      slug: "essential-nutrients-missing",
    },
    {
      id: "3",
      title: "Mindfulness Meditation: A Beginner's Guide",
      excerpt:
        "Discover how just 10 minutes of daily meditation can transform your mental health. This beginner-friendly guide walks you through simple techniques to reduce stress and improve focus.",
      date: "March 8, 2025",
      author: "Emma Williams",
      commentCount: 32,
      image:
        "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg",
      slug: "mindfulness-meditation-beginners-guide",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
          alt="Healthy lifestyle"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">
            Wellness Wisdom
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Evidence-based insights for your healthiest life
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore Articles
          </Button>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-heading">Latest Articles</h2>
          <Link
            href="/blog"
            className="text-primary flex items-center gap-1 hover:underline"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogPostSummary key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest health insights, tips,
              and research.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 font-heading">Health Gallery</h2>
        <Gallery />
      </section>

      {/* Testimonials */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center font-heading">
            Reader Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-background">
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">
                    "This blog has completely transformed my approach to
                    nutrition. The evidence-based articles have helped me make
                    informed decisions about my health."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-medium text-primary">
                        {String.fromCharCode(64 + i)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">Reader {i}</p>
                      <p className="text-sm text-muted-foreground">
                        Health Enthusiast
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
