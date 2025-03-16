import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  commentCount: number;
  image: string;
  slug: string;
}

interface BlogPostSummaryProps {
  post: Post;
}

export function BlogPostSummary({ post }: BlogPostSummaryProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="relative aspect-video">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="pt-6 flex-1">
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">{post.date}</div>
          <Link href={`/blog/${post.slug}`}>
            <h3 className="font-bold text-xl font-heading hover:text-primary transition-colors">
              {post.title}
            </h3>
          </Link>
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <div className="text-sm">By {post.author}</div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MessageSquare className="h-4 w-4" />
          <span>{post.commentCount} comments</span>
        </div>
      </CardFooter>
    </Card>
  );
}
