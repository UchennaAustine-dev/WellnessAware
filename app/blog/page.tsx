import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";
import { BlogPostSummary } from "@/components/blog-post-summary";
import { AdBanner } from "@/components/ads/ad-banner";
import { SidebarAd } from "@/components/ads/sidebar-ad";

export const metadata: Metadata = {
  title: "Blog | WellnessAware",
  description:
    "Explore our collection of evidence-based health and wellness articles",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Split posts into chunks for ad insertion
  const firstRowPosts = posts.slice(0, 3);
  const secondRowPosts = posts.slice(3, 6);
  const remainingPosts = posts.slice(6);

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Evidence-based insights for your healthiest life from trusted health
            professionals and researchers.
          </p>
        </div>

        {/* Leaderboard ad after header */}
        <div className="my-8 flex justify-center">
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">
              Advertisement
            </div>
            <AdBanner size="728x90" slotId={3} />
          </div>
        </div>

        {/* Two-column layout with content and sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content - 3 columns */}
          <div className="lg:col-span-3">
            {/* First row of posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {firstRowPosts.map((post) => (
                <BlogPostSummary key={post.id || post.slug} post={post} />
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

            {/* Second row of posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {secondRowPosts.map((post) => (
                <BlogPostSummary key={post.id || post.slug} post={post} />
              ))}
            </div>

            {/* In-content ad after second row */}
            <div className="my-8 flex justify-center">
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-1">
                  Advertisement
                </div>
                <AdBanner size="300x250" slotId={1} />
              </div>
            </div>

            {/* Remaining posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <BlogPostSummary key={post.id || post.slug} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-8">
              {/* Sidebar ad */}
              <SidebarAd />

              {/* Featured categories */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <ul className="space-y-2">
                  {[
                    "Nutrition",
                    "Fitness",
                    "Mental Health",
                    "Wellness",
                    "Sleep",
                  ].map((category) => (
                    <li key={category}>
                      <a
                        href={`/categories/${category
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Second sidebar ad */}
              <div className="my-6">
                <div className="text-xs text-muted-foreground mb-1">
                  Advertisement
                </div>
                <AdBanner size="300x600" slotId={2} />
              </div>

              {/* Popular tags */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "nutrition",
                    "fitness",
                    "meditation",
                    "sleep",
                    "stress",
                    "yoga",
                    "mindfulness",
                    "recipes",
                  ].map((tag) => (
                    <a
                      key={tag}
                      href={`/tags/${tag}`}
                      className="bg-background px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>

              {/* Third sidebar ad */}
              <SidebarAd />
            </div>
          </div>
        </div>

        {/* Bottom leaderboard ad */}
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
  );
}
