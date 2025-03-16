import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-muted flex justify-center w-full">
      <div className="w-[90%] py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="font-bold text-2xl font-heading">
              Wellness<span className="text-primary">Wisdom</span>
            </Link>
            <p className="text-muted-foreground">
              Evidence-based insights for your healthiest life. Our mission is
              to provide reliable, science-backed information to help you make
              informed decisions about your health and wellness.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
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
              <li>
                <Link
                  href="/newsletter"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Categories</h3>
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
                  href="/categories/sleep"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sleep
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wellness Wisdom. All rights reserved.
            Images from{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Pexels
            </a>
            .
          </p>
          <div className="flex gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
