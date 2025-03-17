// components/sections/CTASection.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6 font-heading">
            Ready to Transform Your Health?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
            Explore our comprehensive resources and start your journey to better
            health today.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button asChild className="rounded-full text-sm sm:text-base">
              <Link href="/blog">Browse Articles</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full text-sm sm:text-base"
            >
              <Link href="/categories">Explore Categories</Link>
            </Button>
            <Button
              variant="secondary"
              asChild
              className="rounded-full text-sm sm:text-base"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
