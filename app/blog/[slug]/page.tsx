import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarIcon, Clock, Share2 } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CommentSection } from "@/components/comment-section";
import { RelatedPosts } from "@/components/related-posts";
import { blogPosts } from "@/lib/mockBlogPosts";

// Expanded mock data for blog posts

// This would be replaced with a CMS fetch in production
async function getBlogPost(slug: string) {
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return null;
  }

  return post;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1">
      <article className="container max-w-4xl mx-auto py-10 px-4">
        <div className="space-y-4 text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime="2025-03-12">{post.date}</time>
            <span>•</span>
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg?height=600&width=1200"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Avatar>
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

          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </div>

        <Separator className="mb-8" />

        <div
          className="prose prose-lg max-w-none dark:prose-invert mb-10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted/80 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>

        <Separator className="my-10" />

        <CommentSection postSlug={post.slug} commentCount={post.commentCount} />

        <Separator className="my-10" />

        <RelatedPosts currentPostSlug={post.slug} />
      </article>
    </main>
  );
}
