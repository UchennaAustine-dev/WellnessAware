import Image from "next/image";
import Link from "next/link";

// Mock related posts data - would come from CMS in production
const relatedPosts = [
  {
    id: "1",
    title: "The Benefits of a Plant-Based Diet",
    excerpt:
      "Discover how incorporating more plants into your meals can improve your health.",
    image: "https://images.pexels.com/photos/1580466/pexels-photo-1580466.jpeg",
    slug: "benefits-plant-based-diet",
  },
  {
    id: "2",
    title: "How to Build a Sustainable Fitness Routine",
    excerpt: "Create an exercise plan that you can maintain for the long term.",
    image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
    slug: "sustainable-fitness-routine",
  },
  {
    id: "3",
    title: "Sleep Optimization: The Science of Better Rest",
    excerpt:
      "Evidence-based strategies to improve your sleep quality and duration.",
    image: "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg",
    slug: "sleep-optimization-science",
  },
];

interface RelatedPostsProps {
  currentPostSlug: string;
}

export function RelatedPosts({ currentPostSlug }: RelatedPostsProps) {
  // Filter out the current post
  const filteredPosts = relatedPosts.filter(
    (post) => post.slug !== currentPostSlug
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-heading">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group">
            <div className="space-y-3">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
