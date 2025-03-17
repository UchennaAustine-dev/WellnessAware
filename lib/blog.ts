import { blogPosts, type mockBlogPost } from "@/lib/mockBlogPosts";

// Export the type for use in other files
export type BlogPost = mockBlogPost;

// Function to get all blog posts
export async function getBlogPosts() {
  // In a real app, this would fetch from an API or database
  return blogPosts;
}

// Function to get a single blog post by slug
export async function getBlogPost(slug: string) {
  // In a real app, this would fetch from an API or database
  return blogPosts.find((post) => post.slug === slug) || null;
}

// Function to get related posts
export async function getRelatedPosts(currentSlug: string, category: string) {
  // Get posts in the same category, excluding the current post
  const related = blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, 3); // Limit to 3 related posts

  // If we don't have enough related posts by category, add some recent posts
  if (related.length < 3) {
    const recentPosts = blogPosts
      .filter(
        (post) =>
          post.slug !== currentSlug &&
          !related.some((r) => r.slug === post.slug)
      )
      .slice(0, 3 - related.length);

    return [...related, ...recentPosts];
  }

  return related;
}
