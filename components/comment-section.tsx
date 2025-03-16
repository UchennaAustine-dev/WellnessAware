"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
// import { useToast } from "@/hooks/use-toast"

// Comment schema validation
const commentSchema = z.object({
  content: z
    .string()
    .min(3, "Comment must be at least 3 characters.")
    .max(500, "Comment must be less than 500 characters."),
});

type CommentFormValues = z.infer<typeof commentSchema>;

// Mock comment data - would come from database in production
const mockComments = [
  {
    id: "1",
    author: {
      name: "Alex Johnson",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    content:
      "This article was incredibly informative! I've been considering intermittent fasting but wasn't sure about the science behind it. Now I feel much more confident in giving it a try.",
    date: "2 hours ago",
    likes: 12,
  },
  {
    id: "2",
    author: {
      name: "Jamie Smith",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    content:
      "I've been practicing intermittent fasting for about 6 months now and can confirm many of these benefits. My energy levels are more consistent throughout the day, and I've noticed improvements in my focus as well.",
    date: "5 hours ago",
    likes: 8,
    replies: [
      {
        id: "2-1",
        author: {
          name: "Dr. Sarah Johnson",
          image:
            "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
        },
        content:
          "That's great to hear, Jamie! It's always encouraging to hear real-world experiences that align with the research.",
        date: "3 hours ago",
        likes: 5,
      },
    ],
  },
  {
    id: "3",
    author: {
      name: "Taylor Williams",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    },
    content:
      "I appreciate how this article presents both the benefits and limitations of intermittent fasting. Too often health articles only focus on the positives without acknowledging that different approaches work for different people.",
    date: "1 day ago",
    likes: 15,
  },
];

interface CommentSectionProps {
  postSlug: string;
  commentCount: number;
}

export function CommentSection({
  postSlug,
  commentCount,
}: CommentSectionProps) {
  const [comments, setComments] = useState(mockComments);
  const [isSubmitting, setIsSubmitting] = useState(false);
  //   const { toast } = useToast()

  const form = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (values: CommentFormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    try {
      // In production, this would be a real API call to your database
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Add new comment to the list
      const newComment = {
        id: `new-${Date.now()}`,
        author: {
          name: "You", // In production, this would be the logged-in user
          image: "/placeholder.svg?height=40&width=40",
        },
        content: values.content,
        date: "Just now",
        likes: 0,
      };

      setComments([newComment, ...comments]);
      form.reset();

      //   toast({
      //     title: "Comment posted!",
      //     description: "Your comment has been added to the discussion.",
      //   })
    } catch (error) {
      //   toast({
      //     title: "Error",
      //     description: "Failed to post your comment. Please try again.",
      //     variant: "destructive",
      //   })
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-heading">
        Discussion ({commentCount})
      </h2>

      {/* Comment form */}
      <div className="bg-muted/50 p-4 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Share your thoughts..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Posting...
                  </>
                ) : (
                  "Post Comment"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {/* Comments list */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage
                  src={comment.author.image}
                  alt={comment.author.name}
                />
                <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{comment.author.name}</span>
                    <span className="text-muted-foreground text-sm ml-2">
                      {comment.date}
                    </span>
                  </div>
                </div>
                <p>{comment.content}</p>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm">
                    Like ({comment.likes})
                  </Button>
                  <Button variant="ghost" size="sm">
                    Reply
                  </Button>
                </div>
              </div>
            </div>

            {/* Nested replies */}
            {comment.replies && (
              <div className="ml-12 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={reply.author.image}
                        alt={reply.author.name}
                      />
                      <AvatarFallback>
                        {reply.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">
                            {reply.author.name}
                          </span>
                          <span className="text-muted-foreground text-sm ml-2">
                            {reply.date}
                          </span>
                        </div>
                      </div>
                      <p>{reply.content}</p>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                          Like ({reply.likes})
                        </Button>
                        <Button variant="ghost" size="sm">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
