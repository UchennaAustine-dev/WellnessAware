import Link from "next/link";
import { BookOpen, Heart, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Evidence-Based",
      description:
        "All our content is backed by scientific research and reviewed by health professionals.",
      link: { text: "Learn more", href: "/about" },
    },
    {
      icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Holistic Approach",
      description:
        "We address all aspects of health: physical, mental, emotional, and social wellbeing.",
      link: { text: "Explore topics", href: "/categories" },
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Expert Contributors",
      description:
        "Our team includes doctors, nutritionists, fitness experts, and mental health professionals.",
      link: { text: "Meet our team", href: "/about" },
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-16">
          <Badge variant="outline" className="mb-2 sm:mb-3">
            Why Choose Us
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-3 sm:mb-4">
            The WellnessAware Difference
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
            We&#39;re committed to providing you with reliable, actionable
            health information you can trust.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-background border-none shadow-lg hover:shadow-xl transition-all"
            >
              <CardContent className="pt-6 sm:pt-8">
                <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="p-0 h-auto"
                >
                  <Link
                    href={feature.link.href}
                    className="flex items-center gap-1 text-primary"
                  >
                    {feature.link.text}{" "}
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
