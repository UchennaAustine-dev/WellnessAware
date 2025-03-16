import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & Nutrition Director",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    bio: "Dr. Johnson has over 15 years of experience in nutritional research and clinical practice. She completed her Ph.D. in Nutritional Sciences at Stanford University and has published numerous peer-reviewed papers on metabolic health and functional nutrition.",
  },
  {
    name: "Michael Chen, RD",
    role: "Senior Dietitian",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    bio: "Michael specializes in plant-based nutrition and sports dietetics. With a Master's in Clinical Nutrition from NYU, he has helped hundreds of clients optimize their diets for performance, health, and longevity.",
  },
  {
    name: "Emma Williams",
    role: "Mental Health Specialist",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    bio: "Emma is a licensed therapist with expertise in mindfulness-based interventions. She holds a Master's in Clinical Psychology from Columbia University and has additional certifications in meditation instruction and stress reduction techniques.",
  },
  {
    name: "Dr. David Chen",
    role: "Sleep & Recovery Expert",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    bio: "Dr. Chen's research focuses on the relationship between sleep quality and overall health outcomes. He completed his medical training at Johns Hopkins and has a special interest in helping people optimize their sleep environments and habits.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="bg-muted w-full py-12 md:py-16">
        <div className="w-[90%] px-4">
          <div className="max-w-7xl mx-auto text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
              About Wellness Wisdom
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're dedicated to providing evidence-based health information
              that helps you make informed decisions about your wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
              Our Mission
            </h2>
            <p className="text-base md:text-lg mb-4">
              At Wellness Wisdom, we believe that everyone deserves access to
              reliable, science-backed health information that cuts through the
              noise of wellness trends and fad diets.
            </p>
            <p className="text-base md:text-lg mb-4">
              Our team of healthcare professionals, researchers, and wellness
              specialists work together to translate complex scientific concepts
              into practical advice you can trust and implement in your daily
              life.
            </p>
            <p className="text-base md:text-lg">
              We're committed to creating content that is not only
              evidence-based but also accessible, inclusive, and respectful of
              the diversity of health experiences.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center font-heading">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Evidence-Based</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  We rigorously research every claim and cite peer-reviewed
                  studies in our content.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Holistic Approach</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  We recognize that physical, mental, and social wellbeing are
                  interconnected.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  We promote health practices that are sustainable for both
                  individuals and the planet.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  We create content that respects diverse backgrounds, body
                  types, and health journeys.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center font-heading">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-12 md:py-16 my-12">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">
              Join Our Community
            </h2>
            <p className="text-base md:text-lg mb-8">
              Subscribe to our newsletter, follow us on social media, or reach
              out directly. We're dedicated to building a community focused on
              evidence-based wellness.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
