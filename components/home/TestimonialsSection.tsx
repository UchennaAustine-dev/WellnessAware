// components/sections/TestimonialsSection.jsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "WellnessAware's evidence-based approach helped me separate fact from fiction in the confusing world of nutrition. I've lost 20 pounds and feel better than ever.",
      name: "Sarah Johnson",
      title: "Nutrition Enthusiast",
    },
    {
      quote:
        "The mental health resources on this site have been invaluable for my anxiety management. I appreciate the science-backed techniques that actually work.",
      name: "Michael Chen",
      title: "Mindfulness Practitioner",
    },
    {
      quote:
        "As a fitness trainer, I regularly recommend WellnessAware to my clients. The information is accurate, accessible, and actionable.",
      name: "James Rodriguez",
      title: "Certified Personal Trainer",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <Badge variant="outline" className="mb-2 sm:mb-3">
            Success Stories
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 sm:mb-4">
            Reader Testimonials
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
            Hear from our community about how WellnessAware has helped them on
            their health journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-background border-none shadow-lg">
              <CardContent className="pt-6 sm:pt-8">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-medium text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8 sm:mt-12">
          <Button asChild className="rounded-full">
            <Link href="/contact" className="flex items-center gap-1 sm:gap-2">
              Share Your Story <ChevronRight className="ml-1 sm:ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
