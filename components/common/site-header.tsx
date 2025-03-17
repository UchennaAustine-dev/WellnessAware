"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Search,
  Menu,
  X,
  Home,
  BookOpen,
  Grid,
  User,
  Mail,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Categories", href: "/categories", icon: Grid },
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:container lg:mx-auto lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo section - optimized for very small screens */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/" className="flex items-center">
              <span className="font-heading font-bold text-lg xs:text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 truncate max-w-[180px] xs:max-w-none">
                WellnessAware
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex gap-4 lg:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative group"
                  )}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search button - hidden on smallest screens */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:md:flex hover:bg-muted"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Theme toggle - sized appropriately */}
            <ThemeToggle />

            {/* Subscribe button - hidden on mobile */}
            <Button
              variant="default"
              size="sm"
              className="hidden md:inline-flex rounded-full px-4 text-sm"
            >
              Subscribe
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-muted h-8 w-8 sm:h-9 sm:w-9"
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full xs:max-w-xs sm:max-w-sm p-4 sm:p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-heading font-bold text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                      WellnessAware
                    </span>
                  </Link>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8 sm:h-9 sm:w-9"
                    >
                      <X className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile search */}
                <div className="flex items-center gap-2 mb-6 w-full bg-muted/50 rounded-full p-1.5">
                  <Search className="h-4 w-4 text-muted-foreground ml-2" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="bg-transparent border-none focus:outline-none w-full text-sm"
                  />
                </div>

                {/* Mobile navigation */}
                <nav className="flex flex-col">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center py-3 sm:py-4 px-2 text-base sm:text-lg font-medium border-b last:border-b-0 transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 mr-3 sm:mr-4" />
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Mobile actions */}
                <div className="mt-6 sm:mt-8 flex flex-col gap-4">
                  <Button
                    variant="default"
                    size="default"
                    className="rounded-full w-full"
                  >
                    Subscribe
                  </Button>
                  <div className="flex justify-center pt-4">
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
