import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogPost, getRelatedPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  CalendarIcon,
  Clock,
  MessageCircle,
  Tag,
  Share2,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdBanner } from "@/components/ads/ad-banner";
import { InContentScript } from "@/components/ads/in-content-script";

// Define the type for params
type PageParams = {
  slug: string;
};

// Generate metadata for the blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams> | PageParams | Promise<any>;
}): Promise<Metadata> {
  // Await the params object before accessing its properties
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `https://wellnessaware.site/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.title,
      images: [post.image],
    },
    alternates: {
      canonical: `https://wellnessaware.site/blog/${slug}`,
    },
  };
}

// Define the page component with the correct param type
export default async function BlogPostPage({
  params,
}: {
  params: Promise<PageParams> | PageParams | Promise<any>;
}) {
  // Await the params object before accessing its properties
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.category);

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "WellnessAware",
      logo: {
        "@type": "ImageObject",
        url: "https://wellnessaware.site/logo.png",
      },
    },
    description: post.excerpt || post.title,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://wellnessaware.site/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex justify-center w-full">
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Back button */}
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Hero section */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="outline" className="text-sm capitalize">
                {post.category}
              </Badge>
              <div className="flex items-center text-muted-foreground text-sm">
                <CalendarIcon className="mr-1 h-3 w-3" />
                {post.date}
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="mr-1 h-3 w-3" />
                {post.readTime}
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <MessageCircle className="mr-1 h-3 w-3" />
                {post.commentCount} comments
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt || post.title}
            </p>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary/10">
                  <AvatarImage src={post.author.image} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Leaderboard ad after hero section */}
          <div className="my-6 flex justify-center">
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">
                Advertisement
              </div>
              <AdBanner size="728x90" slotId={3} />
            </div>
          </div>

          {/* Cover image */}
          <div className="relative w-full h-[400px] md:h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Two-column layout for content and sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Blog content */}
              <article className="blog-content prose prose-lg dark:prose-invert max-w-none mb-16">
                {/* Insert ad after first paragraph */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content.replace(
                      "</p>",
                      '</p><div id="in-content-ad-1"></div>'
                    ),
                  }}
                />
              </article>

              {/* In-content ad */}
              <div className="my-8 flex justify-center">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">
                    Advertisement
                  </div>
                  <AdBanner size="300x250" slotId={1} />
                </div>
              </div>

              {/* Tags */}
              <div className="mb-16 bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Tag className="mr-2 h-4 w-4" /> Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="capitalize">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-8">
                {/* Sidebar ad */}
                <div className="my-6">
                  <div className="text-xs text-muted-foreground mb-1">
                    Advertisement
                  </div>
                  <AdBanner size="300x250" slotId={1} />
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Popular Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.slice(0, 3).map((relatedPost) => (
                      <div key={relatedPost.slug} className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <Link
                            href={`/blog/${relatedPost.slug}`}
                            className="font-medium hover:text-primary transition-colors line-clamp-2"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-xs text-muted-foreground mt-1">
                            {relatedPost.date}
                          </p>
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
              </div>
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Related Articles</h2>
                <Button variant="ghost" asChild>
                  <Link href="/blog">View All</Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.slug}
                    className="overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="p-5">
                      <Badge variant="outline" className="mb-2 capitalize">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        {relatedPost.excerpt || relatedPost.title}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={relatedPost.author.image}
                              alt={relatedPost.author.name}
                            />
                            <AvatarFallback>
                              {relatedPost.author.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">
                            {relatedPost.author.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Leaderboard ad before CTA */}
          <div className="my-6 flex justify-center">
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">
                Advertisement
              </div>
              <AdBanner size="728x500" slotId={4} />
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 text-center shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest health and
              wellness insights directly to your inbox.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="rounded-full">
                <Link href="/subscribe">Subscribe Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full"
              >
                <Link href="/blog">More Articles</Link>
              </Button>
            </div>
          </div>

          {/* Bottom ad */}
          <div className="mt-16 flex justify-center">
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">
                Advertisement
              </div>
              <AdBanner size="750x400" slotId={5} />
            </div>
          </div>
        </div>
      </div>

      {/* Notification ads */}
      <AdBanner size="notification" notificationId={3} />
      <AdBanner size="notification" notificationId={7} />

      {/* Script to inject ads into content */}
      <InContentScript />
    </>
  );
}
