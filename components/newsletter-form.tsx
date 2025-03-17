"use client";

import Link from "next/link";

import type React from "react";

import { useState } from "react";
import { CheckIcon, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  //   const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      //   toast({
      //     title: "Error",
      //     description: "Please enter your email address.",
      //     variant: "destructive",
      //   })
      return;
    }

    if (!consent) {
      //   toast({
      //     title: "Error",
      //     description: "Please agree to our privacy policy.",
      //     variant: "destructive",
      //   })
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      // In production, this would be a real API call to ConvertKit or Mailchimp
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      setEmail("");
      setConsent(false);

      //   toast({
      //     title: "Success!",
      //     description: "You've been subscribed to our newsletter.",
      //   })
    } catch (error) {
      console.error("Error subscribing to newsletter:", error); // Log the error for debugging
      //   toast({
      //     title: "Something went wrong.",
      //     description: "Please try again later.",
      //     variant: "destructive",
      //   })
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="sm:flex-1"
          disabled={isLoading || isSuccess}
        />
        <Button
          type="submit"
          disabled={isLoading || isSuccess}
          className="bg-primary hover:bg-primary/90"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : isSuccess ? (
            <>
              <CheckIcon className="mr-2 h-4 w-4" />
              Subscribed!
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="consent"
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked === true)}
          disabled={isLoading || isSuccess}
        />
        <label htmlFor="consent" className="text-sm text-muted-foreground">
          I agree to receive emails from Wellness Wisdom and understand that I
          can unsubscribe at any time. View our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>
    </form>
  );
}
