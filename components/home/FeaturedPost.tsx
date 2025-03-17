import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlogPostSummary } from "@/components/blog-post-summary";

export default function FeaturedPosts({ posts }: any) {
  return (
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
          {posts.map((post: any) => (
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
              View All Articles <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
