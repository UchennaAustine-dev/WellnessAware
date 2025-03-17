import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[90%] px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-heading font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  WellnessAware
                </span>
              </Link>
              <p className="mt-4 text-muted-foreground">
                Evidence-based insights for your healthiest life from trusted
                health professionals and researchers.
              </p>
              <div className="flex space-x-4 mt-6">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/categories/nutrition"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Nutrition
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/fitness"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Fitness
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/mental-health"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Mental Health
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/wellness"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Wellness
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/lifestyle"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Lifestyle
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-bold text-lg mb-4">Subscribe</h3>
              <p className="text-muted-foreground mb-4">
                Get the latest health tips and articles delivered to your inbox.
              </p>
              <div className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-full"
                />
                <Button className="rounded-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} WellnessAware. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-muted-foreground">
            <p>All images provided by Pexels.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
