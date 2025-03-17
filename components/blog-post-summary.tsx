import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog";

// Interface for the BlogPostSummary props
interface BlogPostSummaryProps {
  post: BlogPost;
}

export function BlogPostSummary({ post }: BlogPostSummaryProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md hover:scale-[1.02]">
        {/* Image Section */}
        <div className="relative aspect-video">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content Section */}
        <CardContent className="pt-6 flex-1">
          <div className="space-y-3">
            {/* Date */}
            <div className="text-sm text-muted-foreground">{post.date}</div>

            {/* Title */}
            <h3 className="font-bold text-xl font-heading hover:text-primary transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-muted-foreground line-clamp-3">
              {post.excerpt || post.title}
            </p>
          </div>
        </CardContent>

        {/* Footer Section */}
        <CardFooter className="flex justify-between items-center border-t pt-4">
          {/* Author */}
          <div className="text-sm text-muted-foreground">
            By {post.author.name}
          </div>

          {/* Comment Count */}
          <div
            className="flex items-center gap-1 text-sm text-muted-foreground"
            aria-label={`${post.commentCount} comments`}
          >
            <MessageSquare className="h-4 w-4" />
            <span>{post.commentCount}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
