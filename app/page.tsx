import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ArrowDown,
  Heart,
  BookOpen,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { NewsletterForm } from "@/components/newsletter-form";
import { BlogPostSummary } from "@/components/blog-post-summary";
import { Gallery } from "@/components/gallery";
import { getBlogPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

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
      <section className="relative w-full h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
            alt="Healthy lifestyle"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
        </div>
        <div className="container mx-auto z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 text-sm py-1 px-3 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
              Evidence-Based Health &amp; Wellness
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading leading-tight">
              Your Journey to{" "}
              <span className="text-primary">Better Health</span> Starts Here
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Discover science-backed insights to optimize your health, fitness,
              and wellbeing from trusted experts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="rounded-full text-base">
                <Link href="/blog">
                  Explore Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full text-base bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                <Link href="/about">
                  About Us <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full text-white hover:bg-white/10 p-0 h-auto"
              >
                <ArrowDown className="h-6 w-6 animate-bounce" />
                <span className="sr-only">Scroll down</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="w-full bg-muted/50 py-8 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-3">
              Latest Articles
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Trending Health Insights
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our most popular evidence-based articles to help you make
              informed decisions about your health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogPostSummary key={post.id || post.slug} post={post} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <Link href="/blog" className="flex items-center gap-2">
                View All Articles <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge variant="outline" className="mb-3">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              The WellnessAware Difference
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              We&#39;re committed to providing you with reliable, actionable
              health information you can trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Evidence-Based</h3>
                <p className="text-muted-foreground">
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
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Holistic Approach</h3>
                <p className="text-muted-foreground">
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
                    Explore topics <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Contributors</h3>
                <p className="text-muted-foreground">
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
                    Meet our team <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-20 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="outline" className="mb-3">
              Stay Updated
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Join Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest health insights, tips, and research delivered
              directly to your inbox. No spam, just valuable content.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-3">
              Visual Inspiration
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Health Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-8">
              Explore our curated collection of health and wellness imagery to
              inspire your journey.
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-3">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Reader Testimonials
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-8">
              Hear from our community about how WellnessAware has helped them on
              their health journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "WellnessAware&#39;s evidence-based approach helped me separate fact from fiction in the confusing world of nutrition. I&#39;ve lost 20 pounds and feel better than ever.",
                name: "Sarah Johnson",
                title: "Nutrition Enthusiast",
              },
              {
                quote:
                  "The mental health resources on this site have been invaluable for my anxiety management. I appreciate the science-backed techniques that actually work.",
                name: "Michael Chen",
                title: "Mindfulness Practitioner",
              },
              {
                quote:
                  "As a fitness trainer, I regularly recommend WellnessAware to my clients. The information is accurate, accessible, and actionable.",
                name: "James Rodriguez",
                title: "Certified Personal Trainer",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-background border-none shadow-lg">
                <CardContent className="pt-8">
                  <div className="mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="italic text-muted-foreground mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-medium text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Share Your Story <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our comprehensive resources and start your journey to
              better health today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full">
                <Link href="/blog">Browse Articles</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full"
              >
                <Link href="/categories">Explore Categories</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="rounded-full"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
