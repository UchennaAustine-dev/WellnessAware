import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";
import { BlogPostSummary } from "@/components/blog-post-summary";

export const metadata: Metadata = {
  title: "Blog | WellnessAware",
  description:
    "Explore our collection of evidence-based health and wellness articles",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostSummary key={post.id || post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
