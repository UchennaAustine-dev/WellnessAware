// components/sections/NewsletterSection.jsx
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/newsletter-form";

export default function NewsletterSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto text-center">
          <Badge variant="outline" className="mb-2 sm:mb-3">
            Stay Updated
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading">
            Join Our Newsletter
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Get the latest health insights, tips, and research delivered
            directly to your inbox. No spam, just valuable content.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
