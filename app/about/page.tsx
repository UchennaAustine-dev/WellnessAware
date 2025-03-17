import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | WellnessAware",
  description:
    "Learn about our mission to provide evidence-based health and wellness information",
};

export default function AboutPage() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            About WellnessAware
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mission is to provide evidence-based health information that
            empowers you to make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-heading">Our Story</h2>
            <p className="text-lg mb-4">
              WellnessAware was founded in 2023 by a team of health
              professionals frustrated by the amount of misinformation in the
              wellness space. We believe that accurate, science-backed
              information should be accessible to everyone.
            </p>
            <p className="text-lg mb-6">
              Today, our team includes medical doctors, registered dietitians,
              certified personal trainers, mental health professionals, and
              science journalists committed to translating complex research into
              practical, actionable advice.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center font-heading">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 font-heading">
                Evidence-Based
              </h3>
              <p>
                We rigorously review scientific literature and only share
                information supported by quality research. When evidence is
                mixed or evolving, we&#39;ll tell you.
              </p>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 font-heading">
                Accessible
              </h3>
              <p>
                Complex health topics shouldn&#39;t require a medical degree to
                understand. We translate science into clear, practical
                information for everyday life.
              </p>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 font-heading">Inclusive</h3>
              <p>
                Health looks different for everyone. We recognize diversity in
                bodies, backgrounds, and circumstances, providing information
                that respects individual needs.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-heading">
            Join Our Community
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest articles, research
            updates, and evidence-based health tips delivered directly to your
            inbox.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/subscribe">Subscribe Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
