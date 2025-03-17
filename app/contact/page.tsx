import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | WellnessAware",
  description: "Get in touch with the WellnessAware team",
};

export default function ContactPage() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-3">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, feedback, or suggestions? We&#39;d love to hear from
            you. Our team is here to help.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="bg-muted/30 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 font-heading">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What is this regarding?"
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="rounded-lg"
                />
              </div>
              <Button type="submit" className="w-full rounded-lg">
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-8 font-heading">
              Contact Information
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground mb-1">
                    <a
                      href="mailto:info@wellnessaware.site"
                      className="hover:text-primary transition-colors"
                    >
                      info@wellnessaware.site
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:support@wellnessaware.site"
                      className="hover:text-primary transition-colors"
                    >
                      support@wellnessaware.site
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-2">
                    We typically respond within 24-48 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-1">
                    <a
                      href="tel:+15551234567"
                      className="hover:text-primary transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-2">
                    Available Monday-Friday, 9am-5pm EST
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground mb-1">123 Wellness Way</p>
                  <p className="text-muted-foreground">Health City, HC 12345</p>
                  <p className="text-sm text-muted-foreground/70 mt-2">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Get Directions
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4 font-heading">Follow Us</h3>
              <p className="text-muted-foreground mb-6">
                Stay connected with us on social media for the latest updates,
                tips, and health insights.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12"
                  asChild
                >
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12"
                  asChild
                >
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12"
                  asChild
                >
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-12 w-12"
                  asChild
                >
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="bg-muted/30 p-8 rounded-2xl mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How can I contribute an article?",
                answer:
                  "We welcome guest contributions from health professionals. Please email us at contributors@wellnessaware.site with your credentials and article idea.",
              },
              {
                question: "Do you offer health consultations?",
                answer:
                  "We don&#39;t provide individual health consultations. Our content is for informational purposes only and should not replace professional medical advice.",
              },
              {
                question: "How can I advertise on your platform?",
                answer:
                  "For partnership and advertising inquiries, please contact our business team at partnerships@wellnessaware.site.",
              },
              {
                question: "Is your content medically reviewed?",
                answer:
                  "Yes, all our health articles are reviewed by qualified medical professionals before publication to ensure accuracy.",
              },
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 font-heading">
            Can&#39;t find what you&#39;re looking for?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Browse our comprehensive knowledge base or check out our blog for
            more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="rounded-full">
              <Link href="/blog">Visit Our Blog</Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
