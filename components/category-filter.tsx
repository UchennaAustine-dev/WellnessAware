"use client";

import { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  categories: string[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const currentCategory = searchParams.get("category");

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  const handleCategorySelect = (category: string) => {
    router.push(`${pathname}?${createQueryString("category", category)}`);
    setOpen(false);
  };

  const clearFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");
    router.push(
      `${pathname}${params.toString() ? `?${params.toString()}` : ""}`
    );
    setOpen(false);
  };

  // Format category for display
  const formatCategory = (category: string) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="text-sm font-medium">Filter by:</div>

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-1">
            {currentCategory
              ? formatCategory(currentCategory)
              : "All Categories"}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={clearFilter}>
              <span className="flex-1">All Categories</span>
              {!currentCategory && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                onClick={() => handleCategorySelect(category)}
              >
                <span className="flex-1">{formatCategory(category)}</span>
                {currentCategory === category && <Check className="h-4 w-4" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {currentCategory && (
        <Badge variant="secondary" className="gap-1">
          {formatCategory(currentCategory)}
          <button
            onClick={clearFilter}
            className="ml-1 rounded-full hover:bg-muted p-1 -mr-1"
            aria-label="Clear filter"
          >
            ×
          </button>
        </Badge>
      )}
    </div>
  );
}
