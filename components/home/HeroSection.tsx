import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
          alt="Healthy lifestyle"
          fill
          className="object-cover brightness-[0.65]"
          priority
        />
      </div>
      <div className="container mx-auto z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge className="mb-3 sm:mb-4 text-xs sm:text-sm py-1 px-2 sm:px-3 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
            Evidence-Based Health &amp; Wellness
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 font-heading leading-tight">
            Your Journey to <span className="text-primary">Better Health</span>{" "}
            Starts Here
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl">
            Discover science-backed insights to optimize your health, fitness,
            and wellbeing from trusted experts.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button
              size="sm"
              asChild
              className="rounded-full text-sm sm:text-base sm:py-6 sm:px-8"
            >
              <Link href="/blog" className="flex items-center">
                Explore Articles{" "}
                <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
            <Button
              size="sm"
              variant="outline"
              asChild
              className="rounded-full text-sm sm:text-base sm:py-6 sm:px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Link href="/about" className="flex items-center">
                About Us{" "}
                <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 sm:mt-12 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full text-white hover:bg-white/10 p-0 h-auto"
            >
              <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
