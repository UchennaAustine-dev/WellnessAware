import Link from "next/link";
import { ArrowRight, ChevronRight, Heart, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { NewsletterForm } from "@/components/newsletter-form";
import { BlogPostSummary } from "@/components/blog-post-summary";
import { Gallery } from "@/components/gallery";
import { getBlogPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/home/HeroSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import CTASection from "@/components/home/CTASection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default async function Home() {
  // Get featured posts from the blog data
  const allPosts = await getBlogPosts();
  const featuredPosts = allPosts.slice(0, 3);

  // Categories for quick navigation
  const categories = [
    {
      name: "Nutrition",
      icon: "🥗",
      href: "/categories/nutrition",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      name: "Fitness",
      icon: "💪",
      href: "/categories/fitness",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      name: "Mental Health",
      icon: "🧠",
      href: "/categories/mental-health",
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
      name: "Wellness",
      icon: "✨",
      href: "/categories/wellness",
      color:
        "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Category Navigation */}
      <section className="w-full bg-muted/50 py-6 sm:py-8 border-y overflow-x-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start sm:justify-center gap-3 sm:gap-4 min-w-max sm:flex-wrap">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all hover:scale-105"
              >
                <span className="text-xl sm:text-2xl">{category.icon}</span>
                <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <Badge variant="outline" className="mb-2 sm:mb-3">
              Latest Articles
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 sm:mb-4">
              Trending Health Insights
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              Discover our most popular evidence-based articles to help you make
              informed decisions about your health.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredPosts.map((post) => (
              <BlogPostSummary key={post.id || post.slug} post={post} />
            ))}
          </div>
          <div className="flex justify-center mt-8 sm:mt-12">
            <Button
              asChild
              size="default"
              variant="outline"
              className="rounded-full text-sm sm:text-base"
            >
              <Link href="/blog" className="flex items-center gap-1 sm:gap-2">
                View All Articles{" "}
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-16">
            <Badge variant="outline" className="mb-2 sm:mb-3">
              Why Choose Us
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 sm:mb-4">
              The WellnessAware Difference
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              We&#39;re committed to providing you with reliable, actionable
              health information you can trust.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6 sm:pt-8">
                <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Evidence-Based
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  All our content is backed by scientific research and reviewed
                  by health professionals.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="p-0 h-auto"
                >
                  <Link
                    href="/about"
                    className="flex items-center gap-1 text-primary"
                  >
                    Learn more{" "}
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6 sm:pt-8">
                <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Holistic Approach
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We address all aspects of health: physical, mental, emotional,
                  and social wellbeing.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="p-0 h-auto"
                >
                  <Link
                    href="/categories"
                    className="flex items-center gap-1 text-primary"
                  >
                    Explore topics{" "}
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all sm:col-span-2 md:col-span-1">
              <CardContent className="pt-6 sm:pt-8">
                <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  Expert Contributors
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Our team includes doctors, nutritionists, fitness experts, and
                  mental health professionals.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="p-0 h-auto"
                >
                  <Link
                    href="/about"
                    className="flex items-center gap-1 text-primary"
                  >
                    Meet our team{" "}
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
